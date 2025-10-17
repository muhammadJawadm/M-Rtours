"use client"
import React, { useEffect, useRef, useState } from 'react';
import { doc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Package {
    id: string;
    package_name: string;
    duration_nights: number;
    makkah_nights: number;
    madinah_nights: number;
    star_rating: number;
    price_per_person: number;
    currency: string;
    description: string;
    package_inclusions: string[];
    hotel_details: {
        makkah_hotel: string;
        madinah_hotel: string;
    };
    notes: string[];
    image?: string;
}

interface BookingFormData {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    packageName: string;
    travelDate: string;
    numAdults: number;
    numChildren: number;
    numInfants: number;
    departureAirport: string;
    preferredAirline: string;
    roomType: string;
    mealPreference: string;
    addZiyarahMakkah: boolean;
    addZiyarahMadinah: boolean;
    requestDirectFlights: boolean;
    requestPrivateTransport: boolean;
    addTravelInsurance: boolean;
    specialRequests: string;
    paymentMethod: string;
    agreeTerms: boolean;
}

interface UmrahDetailsProps {
  packageId: string;
}

const UmrahDetails: React.FC<UmrahDetailsProps> = ({ packageId }) => {
    const [packageData, setPackageData] = useState<Package | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [formData, setFormData] = useState<BookingFormData>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        packageName: '',
        travelDate: '',
        numAdults: 1,
        numChildren: 0,
        numInfants: 0,
        departureAirport: '',
        preferredAirline: '',
        roomType: 'Quad',
        mealPreference: 'Breakfast Only',
        addZiyarahMakkah: false,
        addZiyarahMadinah: false,
        requestDirectFlights: false,
        requestPrivateTransport: false,
        addTravelInsurance: false,
        specialRequests: '',
        paymentMethod: '',
        agreeTerms: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const faqContent = [
        {title:'What is included in the package?', content:'All packages include visa processing, flights, hotel accommodation, transportation, and guided Ziyarat tours.'},
        {title:'Can I customize my itinerary?', content:'Yes, we offer flexible options to customize your Umrah experience according to your preferences.'},
        {title:'What is the cancellation policy?', content:'Cancellation terms vary by package. Please contact us for detailed information about refunds and changes.'},
        {title:'Are meals included?', content:'Most packages include breakfast. Half-board and full-board options are available upon request.'},
    ];

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    useEffect(() => {
  const fetchPackageDetails = async () => {
    //  const packageId = "JqDoj6Mzw90sFbkl2CB5";
    if (!packageId) return;

    try {
      setLoading(true);

      // Make sure collection name matches Firestore exactly
      const docRef = doc(db, 'Umrah-packages', packageId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = {
          id: docSnap.id,
          ...docSnap.data()
        } as Package;

        setPackageData(data);

        // Safely update formData if package_name exists
        setFormData(prev => ({
          ...prev,
          packageName: data.package_name || ''
        }));
      } else {
        console.error("Package not found in Firestore");
      }
    } catch (error) {
      console.error("Error fetching package:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchPackageDetails();
}, [packageId]);


    const handleItemClick = (index: number) => {
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };

    useEffect(() => {
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [firstItemOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else if (type === 'number') {
            setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleBookingSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.agreeTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }

        try {
            setIsSubmitting(true);
            setSubmitStatus('idle');
            
            // 1. Save to Firebase
            const bookingWithTimestamp = {
                ...formData,
                submittedAt: serverTimestamp(),
                status: "new"
            };
            
            const docRef = await addDoc(collection(db, "umrah_bookings"), bookingWithTimestamp);
            console.log('Booking saved to Firebase with ID:', docRef.id);
            
            // 2. Submit to Google Sheets via our API
            const response = await fetch('/api/submit-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    firebaseId: docRef.id
                }),
            });
            
            const result = await response.json();
            
            if (result.success) {
                console.log('Booking submitted to Google Sheets successfully');
                setSubmitStatus('success');
                
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    address: '',
                    packageName: packageData?.package_name || '',
                    travelDate: '',
                    numAdults: 1,
                    numChildren: 0,
                    numInfants: 0,
                    departureAirport: '',
                    preferredAirline: '',
                    roomType: 'Quad',
                    mealPreference: 'Breakfast Only',
                    addZiyarahMakkah: false,
                    addZiyarahMadinah: false,
                    requestDirectFlights: false,
                    requestPrivateTransport: false,
                    addTravelInsurance: false,
                    specialRequests: '',
                    paymentMethod: '',
                    agreeTerms: false
                });
                
                alert('Thank you for your booking request. Our Umrah specialist will contact you within 24 hours to confirm your travel dates and finalize payment.');
            } else {
                console.error('Error submitting to Google Sheets:', result.message);
                setSubmitStatus('error');
                alert('There was an issue processing your booking. Please try again or contact us directly.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            alert('There was an error submitting your booking. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading package details...</p>
            </div>
        );
    }

    if (!packageData) {
        return (
            <div className="text-center py-5">
                <p>Package not found.</p>
            </div>
        );
    }

    return (
        <section className="activities-details-section fix section-padding">
            <div className="container">
                <div className="activities-details-wrapper">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="details-thumb">
                                <Image 
                                    src={packageData.image || "/assets/img/destails/tour-details.jpg"} 
                                    alt={packageData.package_name} 
                                    width={856} 
                                    height={510}   
                                />
                            </div>
                            <div className="activities-details-content">
                                <div className="package-header-info mb-4">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <span className="badge bg-primary">{packageData.star_rating} Star Package</span>
                                        <h3 className="price-tag text-primary mb-0">{packageData.currency}{packageData.price_per_person} <small>/person</small></h3>
                                    </div>
                                </div>
                                
                                <h2 className="mb-3">{packageData.package_name}</h2>
                                <p className="lead">{packageData.description}</p>
                                
                                <div className="package-duration-info my-4 p-3 bg-light rounded">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <strong>Total Duration:</strong> {packageData.duration_nights} Nights
                                        </div>
                                        <div className="col-md-4">
                                            <strong>Makkah:</strong> {packageData.makkah_nights} Nights
                                        </div>
                                        <div className="col-md-4">
                                            <strong>Madinah:</strong> {packageData.madinah_nights} Nights
                                        </div>
                                    </div>
                                </div>

                                <div className="activities-list-item">
                                    <h3>Package Inclusions</h3>
                                    <div className="activities-item">
                                        <ul className="activities-list">
                                            {packageData.package_inclusions.map((inclusion, idx) => (
                                                <li key={idx}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.6916 5.22013L12.1877 4.5967C12.0188 4.38782 11.7004 4.38782 11.5315 4.5967L11.0275 5.22013C10.7366 5.5801 10.3473 5.84785 9.90712 5.99089C9.46691 6.13393 8.99465 6.14609 8.54766 6.02591L7.77347 5.81779C7.51411 5.74804 7.25644 5.93521 7.24261 6.20348L7.20136 7.00406C7.17753 7.46631 7.02002 7.91171 6.74795 8.28617C6.47588 8.66064 6.10096 8.94807 5.66869 9.11357L4.92005 9.40021C4.66922 9.49626 4.57083 9.79917 4.71727 10.0243L5.15447 10.6963C5.40689 11.0842 5.54126 11.5371 5.54126 12C5.54126 12.4629 5.40689 12.9158 5.15447 13.3037L4.71727 13.9757C4.57078 14.2008 4.66922 14.5037 4.92005 14.5998L5.66869 14.8864C6.10096 15.0519 6.47588 15.3393 6.74795 15.7138C7.02002 16.0883 7.17753 16.5337 7.20136 16.9959L7.24261 17.7965C7.25644 18.0648 7.51411 18.2519 7.77347 18.1822L8.54766 17.9741C8.99464 17.8539 9.46691 17.866 9.90712 18.0091C10.3473 18.1521 10.7365 18.4198 11.0275 18.7798L11.5315 19.4033C11.7004 19.6122 12.0188 19.6122 12.1877 19.4033L12.6916 18.7798C12.9826 18.4198 13.3718 18.1521 13.8121 18.0091C14.2523 17.866 14.7245 17.8539 15.1715 17.9741L15.9457 18.1822C16.2051 18.2519 16.4627 18.0648 16.4766 17.7965L16.5178 16.9959C16.5416 16.5337 16.6992 16.0883 16.9712 15.7138C17.2433 15.3393 17.6182 15.0519 18.0505 14.8864L18.7991 14.5998C19.05 14.5037 19.1484 14.2008 19.0019 13.9757L18.5647 13.3037C18.3123 12.9158 18.1779 12.4629 18.1779 12C18.1779 11.5371 18.3123 11.0842 18.5647 10.6963L19.0019 10.0243C19.1484 9.79917 19.05 9.49626 18.7991 9.40021L18.0505 9.11357C17.6182 8.94807 17.2433 8.66064 16.9712 8.28617C16.6992 7.91171 16.5416 7.46631 16.5178 7.00406L16.4766 6.20348C16.4627 5.93521 16.2051 5.74804 15.9457 5.81779L15.1715 6.02591C14.7245 6.14609 14.2523 6.13393 13.812 5.99089C13.3718 5.84785 12.9826 5.5801 12.6916 5.22013Z" fill="#1CA8CB" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.4446 9.45177C15.6353 9.64555 15.6327 9.95717 15.4388 10.1478L11.6863 13.8382C11.1163 14.3987 10.1975 14.383 9.64705 13.8033L8.31496 12.4004C8.12779 12.2033 8.13585 11.8918 8.33296 11.7045C8.53007 11.5174 8.8416 11.5254 9.02877 11.7226L10.3609 13.1255C10.5324 13.306 10.8186 13.3109 10.9961 13.1363L14.7486 9.44596C14.9424 9.25536 15.2541 9.25794 15.4446 9.45177Z" fill="#1CA8CB" />
                                                    </svg>
                                                    {inclusion}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="hotel-details-section my-4 p-4 bg-light rounded">
                                    <h3>Hotel Accommodation</h3>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <h5>Makkah Hotel</h5>
                                            <p>{packageData.hotel_details.makkah_hotel}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Madinah Hotel</h5>
                                            <p>{packageData.hotel_details.madinah_hotel}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="important-notes my-4">
                                    <h3>Important Notes</h3>
                                    <ul className="list-styled">
                                        {packageData.notes.map((note, idx) => (
                                            <li key={idx}>✓ {note}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="faq-items">
                                    <h3>Frequently Asked Questions</h3>
                                    <div className="faq-accordion">
                                        <div className="accordion" id="accordion">
                                            {faqContent.map((item, index) => (                                        
                                                <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`}>
                                                    <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button">
                                                            {item.title}
                                                        </button>
                                                    </h5>
                                                    <div ref={accordionContentRef} className="accordion-collapse collapse">
                                                        <div className="accordion-body">
                                                            <p>{item.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="main-sidebar">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h4>Book Your Umrah Package</h4>
                                    </div>
                                    <div className="desti-booking-form">
                                        <form onSubmit={handleBookingSubmit}>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <h6 className="form-section-title">Traveler Details</h6>
                                                </div>
                                                <div className="col-12">
                                                    <input 
                                                        type="text" 
                                                        name="fullName" 
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        placeholder="Full Name (as per passport)*" 
                                                        required 
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="Email Address*" 
                                                        required 
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input 
                                                        type="tel" 
                                                        name="phone" 
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        placeholder="Phone Number (with country code)*" 
                                                        required 
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input 
                                                        type="text" 
                                                        name="address" 
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        placeholder="Address (optional)" 
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="col-12 mt-4">
                                                    <h6 className="form-section-title">Travel Information</h6>
                                                </div>
                                                <div className="col-12">
                                                    <input 
                                                        type="text" 
                                                        name="packageName" 
                                                        value={formData.packageName}
                                                        readOnly
                                                        placeholder="Selected Package" 
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <input 
                                                        type="date" 
                                                        name="travelDate" 
                                                        value={formData.travelDate}
                                                        onChange={handleInputChange}
                                                        required 
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <input 
                                                        type="number" 
                                                        name="numAdults" 
                                                        value={formData.numAdults}
                                                        onChange={handleInputChange}
                                                        placeholder="Adults*" 
                                                        min="1"
                                                        required 
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <input 
                                                        type="number" 
                                                        name="numChildren" 
                                                        value={formData.numChildren}
                                                        onChange={handleInputChange}
                                                        placeholder="Children" 
                                                        min="0"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <input 
                                                        type="number" 
                                                        name="numInfants" 
                                                        value={formData.numInfants}
                                                        onChange={handleInputChange}
                                                        placeholder="Infants" 
                                                        min="0"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <select 
                                                        name="departureAirport" 
                                                        value={formData.departureAirport}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="form-control"
                                                    >
                                                        <option value="">Select Departure Airport*</option>
                                                        <option value="London Heathrow">London Heathrow</option>
                                                        <option value="Manchester">Manchester</option>
                                                        <option value="Birmingham">Birmingham</option>
                                                        <option value="Glasgow">Glasgow</option>
                                                        <option value="Edinburgh">Edinburgh</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <select 
                                                        name="preferredAirline" 
                                                        value={formData.preferredAirline}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    >
                                                        <option value="">Preferred Airline (Optional)</option>
                                                        <option value="Qatar Airways">Qatar Airways</option>
                                                        <option value="British Airways">British Airways</option>
                                                        <option value="Saudi Airlines">Saudi Airlines</option>
                                                        <option value="Royal Jordanian">Royal Jordanian</option>
                                                    </select>
                                                </div>
                                                <div className="col-6">
                                                    <select 
                                                        name="roomType" 
                                                        value={formData.roomType}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="form-control"
                                                    >
                                                        <option value="Quad">Quad Room</option>
                                                        <option value="Triple">Triple Room</option>
                                                        <option value="Double">Double Room</option>
                                                    </select>
                                                </div>
                                                <div className="col-6">
                                                    <select 
                                                        name="mealPreference" 
                                                        value={formData.mealPreference}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    >
                                                        <option value="Breakfast Only">Breakfast Only</option>
                                                        <option value="Half Board">Half Board</option>
                                                        <option value="Full Board">Full Board</option>
                                                    </select>
                                                </div>

                                                <div className="col-12 mt-4">
                                                    <h6 className="form-section-title">Additional Services</h6>
                                                </div>
                                                <div className="col-12">
                                                    <label className="checkbox-label">
                                                        <input 
                                                            type="checkbox" 
                                                            name="addZiyarahMakkah"
                                                            checked={formData.addZiyarahMakkah}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span>Add Ziyarah Tours in Makkah</span>
                                                    </label>
                                                </div>
                                                <div className="col-12">
                                                    <label className="checkbox-label">
                                                        <input 
                                                            type="checkbox" 
                                                            name="addZiyarahMadinah"
                                                            checked={formData.addZiyarahMadinah}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span>Add Ziyarah Tours in Madinah</span>
                                                    </label>
                                                </div>
                                                <div className="col-12">
                                                    <label className="checkbox-label">
                                                        <input 
                                                            type="checkbox" 
                                                            name="requestDirectFlights"
                                                            checked={formData.requestDirectFlights}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span>Request Direct Flights</span>
                                                    </label>
                                                </div>
                                                <div className="col-12">
                                                    <label className="checkbox-label">
                                                        <input 
                                                            type="checkbox" 
                                                            name="requestPrivateTransport"
                                                            checked={formData.requestPrivateTransport}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span>Request Private Transport Only</span>
                                                    </label>
                                                </div>
                                                <div className="col-12">
                                                    <label className="checkbox-label">
                                                        <input 
                                                            type="checkbox" 
                                                            name="addTravelInsurance"
                                                            checked={formData.addTravelInsurance}
                                                            onChange={handleInputChange}
                                                        />
                                                        <span>Add Travel Insurance</span>
                                                    </label>
                                                </div>

                                                <div className="col-12 mt-4">
                                                    <h6 className="form-section-title">Special Requests</h6>
                                                </div>
                                                <div className="col-12">
                                                    <textarea 
                                                        name="specialRequests" 
                                                        value={formData.specialRequests}
                                                        onChange={handleInputChange}
                                                        rows={4}
                                                        placeholder="Any special requirements or requests..."
                                                        className="form-control"
                                                    ></textarea>
                                                </div>

                                                <div className="col-12 mt-3">
                                                    <label className="checkbox-label">
                                                        <input 
                                                            type="checkbox" 
                                                            name="agreeTerms"
                                                            checked={formData.agreeTerms}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <span>I agree to the Terms & Conditions*</span>
                                                    </label>
                                                </div>

                                                <div className="col-12">
                                                    <button 
                                                        type="submit" 
                                                        className="theme-btn w-100 text-center"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 
                                                            'Submitting...' : 
                                                            'Book My Umrah Package'} 
                                                        <i className="bi bi-arrow-right"></i>
                                                    </button>
                                                    
                                                    {submitStatus === 'success' && (
                                                        <div className="mt-3 text-success">
                                                            Booking submitted successfully!
                                                        </div>
                                                    )}
                                                    
                                                    {submitStatus === 'error' && (
                                                        <div className="mt-3 text-danger">
                                                            There was an error submitting your booking. Please try again.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .package-header-info .badge {
                    font-size: 0.9rem;
                    padding: 8px 16px;
                }
                
                .price-tag {
                    font-size: 2rem;
                    font-weight: 700;
                }
                
                .price-tag small {
                    font-size: 1rem;
                    font-weight: 400;
                }
                
                .form-section-title {
                    font-weight: 600;
                    color: #1CA8CB;
                    margin-bottom: 10px;
                    padding-bottom: 5px;
                    border-bottom: 2px solid #1CA8CB;
                }
                
                .form-control {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 14px;
                }
                
                .form-control:focus {
                    outline: none;
                    border-color: #1CA8CB;
                }
                
                .checkbox-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    font-size: 14px;
                }
                
                .checkbox-label input[type="checkbox"] {
                    width: auto;
                    cursor: pointer;
                }
                
                .list-styled {
                    list-style: none;
                    padding: 0;
                }
                
                .list-styled li {
                    padding: 8px 0;
                    color: #333;
                }
                
                .theme-btn {
                    background-color: #1CA8CB;
                    color: white;
                    border: none;
                    padding: 14px 24px;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                
                .theme-btn:hover {
                    background-color: #158ba8;
                }
            `}</style>
        </section>
    );
};

export default UmrahDetails;