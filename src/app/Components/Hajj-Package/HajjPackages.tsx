"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useRouter } from 'next/navigation';

interface HajjPackage {
  id: string;
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
  makkah_nights: number;
  madinah_nights: number;
  locations?: {
    makkah: string;
    madinah: string;
  };
}

const HajjPackages: React.FC = () => {
  const router = useRouter();
  const [packages, setPackages] = useState<HajjPackage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const packagesCollection = collection(db, 'Hajj-packages');
        const packagesSnapshot = await getDocs(packagesCollection);
        
        const packagesData = packagesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as HajjPackage[];

        // Filter only non-shifting packages
        const nonShiftingPackages = packagesData.filter(pkg => pkg.package_type === "Non Shifting");

        const categoryOrder = ["Silver", "Gold", "Diamond"];

        // Sort: others first → then Silver → Gold → Diamond
        nonShiftingPackages.sort((a, b) => {
          const indexA = categoryOrder.indexOf(a.package_tier || "");
          const indexB = categoryOrder.indexOf(b.package_tier || "");

          const orderA = indexA === -1 ? -1 : indexA;
          const orderB = indexB === -1 ? -1 : indexB;

          return orderA - orderB;
        });
        
        setPackages(nonShiftingPackages);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setPackages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleViewDetails = (id: string) => {
    router.push(`/HajjDetail/${id}`);
  };

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
            {packages.length > 0 ? (
              <div className="row g-4">
                {packages.map((pkg) => (
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
                            <span>Makkah {pkg.makkah_nights} Nights</span>
                          </div>
                          <div className="location-item">
                            <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Madinah {pkg.madinah_nights} Nights</span>
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
            ) : (
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

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .package-locations {
            flex-direction: column;
            gap: 10px;
          }

          .package-footer {
            flex-direction: column;
            gap: 15px;
            align-items: stretch;
          }

          .view-details-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HajjPackages;