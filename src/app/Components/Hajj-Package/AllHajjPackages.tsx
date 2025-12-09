"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Define proper interfaces for both package types
interface BasePackage {
  id: string ;
  package_name: string;
  package_tier?: string;
  duration_days: number;
  duration_nights: number;
  price_per_person?: number;
  currency: string;
  status?: string;
  package_type: string;
  year: number;
  inclusions: string[];
  image?: string;
}

interface NonShiftingPackage extends BasePackage {
  makkah_nights: number;
  madinah_nights: number;
  locations?: {
    makkah: string;
    madinah: string;
  };
}

interface ServiceBasedPackage extends BasePackage {
  makkah_hotel: string | null;
  makkah_nights: string | null;
  azizia_hotel: string;
  azizia_nights: string;
  madinah_hotel: string;
  madinah_nights: string;
  hajj_services: string;
  price_quad: number;
  price_triple: number;
  price_double: number;
  maktab_category: string;
  services_included: string[];
}

type HajjPackage = NonShiftingPackage | ServiceBasedPackage;

const HajjPackages: React.FC = () => {
  const router = useRouter();
  const [packages, setPackages] = useState<HajjPackage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      const fetchPackages = async () => {
        try {
          setLoading(true);
          // Try to fetch from Firebase
          const packagesCollection = collection(db, 'Hajj-packages');
          const packagesSnapshot = await getDocs(packagesCollection);
          
          const packagesData = packagesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as HajjPackage[];

          const categoryOrder = ["Silver", "Gold", "Diamond"];

        // Sort: others first → then Silver → Gold → Diamond
        packagesData.sort((a, b) => {
          const indexA = categoryOrder.indexOf(a.package_tier || "");
          const indexB = categoryOrder.indexOf(b.package_tier || "");

          const orderA = indexA === -1 ? -1 : indexA;
          const orderB = indexB === -1 ? -1 : indexB;

          return orderA - orderB;
        });
        
        setPackages(packagesData);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setPackages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleViewDetails = (id: string ) => {
    router.push(`/HajjDetail/${id}`);
  };

  // Helper function to determine if a package is a service-based package
  const isServiceBasedPackage = (pkg: HajjPackage): pkg is ServiceBasedPackage => {
    return 'price_quad' in pkg && 'price_triple' in pkg && 'price_double' in pkg;
  };

  // Helper function to check if a package has a specific inclusion
  const hasInclusion = (inclusions: string[] = [], keyword: string): boolean => {
    if (!Array.isArray(inclusions)) return false;
    return inclusions.some(inc => inc.toLowerCase().includes(keyword.toLowerCase()));
  };

  // Group packages by type
  const nonShiftingPackages = packages.filter(pkg => pkg.package_type === "Non Shifting");
  const serviceBasedPackages = packages.filter(pkg => pkg.package_type !== "Non Shifting");

  return (
    <section className="hajj-packages-section section-padding">
      <div className="container">
        <div className="section-title-area text-center mb-5">
          <h2 className="section-title wow fadeInUp">
            Hajj Packages
          </h2>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading packages...</p>
          </div>
        ) : (
          <>
            {/* Non-Shifting Packages */}
            {nonShiftingPackages.length > 0 && (
              <div className="package-category">
                <h3 className="category-title mb-4">Non-Shifting Hajj Packages</h3>
                <div className="row g-4 mb-5">
                  {nonShiftingPackages.map((pkg) => (
                    <div key={pkg.id} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="package-card">
                        <div className="package-image-wrapper">
                          <img 
                            src={pkg.image || '/assets/img/Hajj/Hajj page 1.png'} 
                            alt={pkg.package_name}
                            className="package-image"
                          />
                          <span className="package-duration">{pkg.duration_nights} NIGHTS</span>
                          {pkg.status && (
                            <span className="package-status">{pkg.status}</span>
                          )}
                        </div>
                        
                        <div className="package-content">
                          <h3 className="package-title">{pkg.package_name}</h3>
                          <div className="package-year-tag">
                            <span className="year-badge">Hajj {pkg.year}</span>
                          </div>
                          
                          <div className="package-locations">
                            <div className="location-item">
                              <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span>Makkah {('makkah_nights' in pkg) ? `${pkg.makkah_nights} Nights` : ''}</span>
                            </div>
                            <div className="location-item">
                              <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span>Madinah {('madinah_nights' in pkg) ? `${pkg.madinah_nights} Nights` : ''}</span>
                            </div>
                          </div>

                          <div className="package-includes">
                            {pkg.inclusions.slice(0, 4).map((inclusion, idx) => (
                              <div key={idx} className="include-item">
                                <svg className="include-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                                <span>{inclusion}</span>
                              </div>
                            ))}
                          </div>

                          <div className="package-footer">
                            <div className="package-price">
                              <span className="price-amount">{pkg.currency}{pkg.price_per_person?.toLocaleString()}</span>
                              <span className="price-unit">/person</span>
                            </div>
                            <button 
                              className="view-details-btn"
                              onClick={() => handleViewDetails(pkg.id)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Service-Based Packages */}
            {serviceBasedPackages.length > 0 && (
              <div className="package-category">
                <h3 className="category-title mb-4">Premium Hajj Packages</h3>
                <div className="row g-4">
                  {serviceBasedPackages.map((pkg) => {
                    if (isServiceBasedPackage(pkg)) {
                      return (
                        <div key={pkg.id} className="col-xl-6 col-lg-6 col-md-12">
                          <div className="premium-package-card">
                            <div className="premium-package-header">
                              <div className="package-tier-badge">{pkg.package_tier}</div>
                              <h3 className="premium-package-title">{pkg.package_name}</h3>
                              <div className="package-year-tag">
                                <span className="year-badge">Hajj {pkg.year}</span>
                                {pkg.status && <span className="status-badge">{pkg.status}</span>}
                              </div>
                            </div>
                            
                            <div className="premium-package-content">
                              <div className="locations-grid">
                                {pkg.makkah_hotel && pkg.makkah_nights && (
                                  <div className="location-block">
                                    <h4>Makkah Stay</h4>
                                    <p className="hotel-name">{pkg.makkah_hotel}</p>
                                    <p className="stay-duration">{pkg.makkah_nights}</p>
                                  </div>
                                )}
                                
                                <div className="location-block">
                                  <h4>Azizia Stay</h4>
                                  <p className="hotel-name">{pkg.azizia_hotel}</p>
                                  <p className="stay-duration">{pkg.azizia_nights}</p>
                                </div>
                                
                              </div>

                              <div className="hajj-services">
                                <h4>Hajj Services</h4>
                                <p>{pkg.hajj_services}</p>
                              </div>
                              
                              <div className="maktab-info">
                                <span className="maktab-badge">Maktab Category: {pkg.maktab_category}</span>
                              </div>

                              <div className="services-included">
                                <h4>Services Included</h4>
                                <div className="services-grid">
                                  {pkg.services_included.map((service, idx) => (
                                    <div key={idx} className="service-item">
                                      <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                      </svg>
                                      <span>{service}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="pricing-options">
                                <div className="price-option">
                                  <span className="room-type">Double</span>
                                  <span className="price-amount">{pkg.currency}{pkg.price_double.toLocaleString()}</span>
                                </div>
                                <div className="price-option">
                                  <span className="room-type">Triple</span>
                                  <span className="price-amount">{pkg.currency}{pkg.price_triple.toLocaleString()}</span>
                                </div>
                                <div className="price-option">
                                  <span className="room-type">Quad</span>
                                  <span className="price-amount">{pkg.currency}{pkg.price_quad.toLocaleString()}</span>
                                </div>
                              </div>
<button 
                              className="view-details-btn"
                              onClick={() => handleViewDetails(pkg.id)}
                            >
                              View Details
                            </button>
                            
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
            
            {packages.length === 0 && (
              <div className="text-center py-5">
                <p>No packages available at the moment.</p>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        .hajj-packages-section {
          background-color: #f8f9fa;
          padding: 80px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2rem;
        }

        .category-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #28AAE2;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .package-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .package-image-wrapper {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .package-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .package-duration {
          position: absolute;
          top: 20px;
          right: 20px;
          background: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.875rem;
          color: #1a1a1a;
        }

        .package-status {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #ff5757;
          color: white;
          padding: 8px 16px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .package-content {
          padding: 25px;
        }

        .package-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .package-year-tag {
          margin-bottom: 20px;
        }

        .year-badge {
          display: inline-block;
          background-color: #28AAE2;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
        }

        .package-locations {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .location-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 0.9rem;
        }

        .location-icon {
          color: #4a5568;
        }

        .package-includes {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
          padding: 20px 0;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }

        .include-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #4a5568;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .include-icon {
          color: #2563eb;
        }

        .package-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .package-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .price-amount {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1a1a1a;
        }

        .price-unit {
          font-size: 0.9rem;
          color: #666;
        }

        .view-details-btn {
          background-color: #28AAE2;
          color: white;
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .view-details-btn:hover {
          background-color: #1f8fc7;
        }

        /* Premium Package Styles */
        .premium-package-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 30px;
        }

        .premium-package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .premium-package-header {
          background: linear-gradient(135deg, #113D48 0%, #28AAE2 100%);
          color: white;
          padding: 25px 30px;
          position: relative;
        }

        .package-tier-badge {
          position: absolute;
          top: 0;
          right: 30px;
          background: white;
          color: #113D48;
          padding: 8px 20px;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 0 0 12px 12px;
        }

        .premium-package-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          padding-right: 100px;
          color: white;
        }

        .status-badge {
          display: inline-block;
          background-color: #ff5757;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
          margin-left: 10px;
        }

        .premium-package-content {
          padding: 30px;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .location-block {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #28AAE2;
        }

        .location-block h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #113D48;
        }

        .hotel-name {
          font-weight: 600;
          margin-bottom: 5px;
        }

        .stay-duration {
          color: #666;
          font-size: 0.875rem;
        }

        .hajj-services {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .hajj-services h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #113D48;
        }

        .hajj-services p {
          color: #4a5568;
          line-height: 1.6;
        }

        .maktab-info {
          margin-bottom: 20px;
        }

        .maktab-badge {
          background-color: #113D48;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 20px;
          display: inline-block;
        }

        .services-included {
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .services-included h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #113D48;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .check-icon {
          color: #28AAE2;
          flex-shrink: 0;
        }

        .pricing-options {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
        }

        .price-option {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          min-width: 150px;
          text-align: center;
          border-top: 3px solid #28AAE2;
        }

        .room-type {
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #113D48;
        }

        .price-amount {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
        }

        .premium-btn {
          width: 100%;
          padding: 15px;
          text-align: center;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .premium-package-header {
            padding: 20px;
          }

          .premium-package-title {
            font-size: 1.25rem;
            padding-right: 0;
            padding-top: 40px;
          }

          .package-tier-badge {
            top: 0;
            right: 20px;
            padding: 5px 15px;
            font-size: 0.875rem;
          }

          .locations-grid {
            grid-template-columns: 1fr;
          }

          .pricing-options {
            flex-direction: column;
          }

          .price-option {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HajjPackages;