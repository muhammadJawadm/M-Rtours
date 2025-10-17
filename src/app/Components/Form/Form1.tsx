'use client';

import React, { useState, ChangeEvent } from 'react';

interface FormData {
    departureDate: string;
    departureCity: string;
    travelers: string;
    nights: string;
    fullName: string;
    phone: string;
    email: string;
}

const BookingForm: React.FC = () => {
    const [isActive, setIsActive] = useState<string>('OneWay');
    const [formData, setFormData] = useState<FormData>({
        departureDate: '',
        departureCity: '',
        travelers: '1',
        nights: '1',
        fullName: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (): void => {
        console.log('Booking submitted:', { tripType: isActive, ...formData });
        alert('Booking submitted! Check console for details.');
    };

    const styles = {
        section: {
            minHeight: '10vh',
            backgroundColor: '#f9fafb',
            padding: '3rem 1rem'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden'
        },
        formContent: {
            padding: '3rem'
        },
        gridRow: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
        },
        input: {
            width: '100%',
            padding: '1rem 1.5rem',
            border: '2px solid #e5e7eb',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            transition: 'border-color 0.3s',
            outline: 'none',
            backgroundColor: 'white'
        },
        button: {
            width: '100%',
            padding: '1rem 1.5rem',
            backgroundColor: '#28AAE2',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.formContent}>
                        <div>
                            {/* First Row */}
                            <div style={styles.gridRow}>
                                <div>
                                    <input
                                        type="date"
                                        name="departureDate"
                                        value={formData.departureDate}
                                        onChange={handleInputChange}
                                        placeholder="Departure Date"
                                        style={{
                                            ...styles.input,
                                            borderColor: formData.departureDate ? '#28AAE2' : '#e5e7eb'
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="departureCity"
                                        value={formData.departureCity}
                                        onChange={handleInputChange}
                                        placeholder="Departure City"
                                        style={{
                                            ...styles.input,
                                            borderColor: formData.departureCity ? '#28AAE2' : '#e5e7eb'
                                        }}
                                    />
                                </div>
                                <div>
                                    <select
                                        name="travelers"
                                        value={formData.travelers}
                                        onChange={handleInputChange}
                                        style={{
                                            ...styles.input,
                                            borderColor: formData.travelers ? '#28AAE2' : '#e5e7eb',
                                            appearance: 'none'
                                        }}
                                    >
                                        <option value="">Travelers</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <select
                                        name="nights"
                                        value={formData.nights}
                                        onChange={handleInputChange}
                                        style={{
                                            ...styles.input,
                                            borderColor: formData.nights ? '#28AAE2' : '#e5e7eb',
                                            appearance: 'none'
                                        }}
                                    >
                                        <option value="">Nights</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Night' : 'Nights'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Second Row */}
                            <div style={styles.gridRow}>
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        style={{
                                            ...styles.input,
                                            borderColor: formData.fullName ? '#28AAE2' : '#e5e7eb'
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone"
                                        style={{
                                            ...styles.input,
                                            borderColor: formData.phone ? '#28AAE2' : '#e5e7eb'
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        style={{
                                            ...styles.input,
                                            borderColor: formData.email ? '#28AAE2' : '#e5e7eb'
                                        }}
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        style={styles.button}
                                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2193c7')}
                                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28AAE2')}
                                    >
                                        Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;