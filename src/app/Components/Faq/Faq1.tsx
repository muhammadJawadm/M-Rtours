"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

    const faqContent = [
        {
            title: 'What documents do I need for an Umrah visa?', 
            content: 'You only need to give us a few simple documents, and we will take care of your Umrah visa. These documents will be required: Two Passport Size Photos, Filled Visa Form, Valid Passport and Certificate of Vaccination Against Meningitis.'
        },
        {
            title: 'Can I customize my Umrah package?', 
            content: 'We take pride in providing tailored Umrah packages that can be customized to align with your specific preferences and requirements.'
        },
        {
            title: 'Are there any discounts available for group bookings?', 
            content: 'For group bookings, we provide exclusive discounts as a token of appreciation. To avail of these special offers, kindly reach out to our dedicated customer support team, who will gladly provide you with further details and assistance.'
        },
        {
            title: 'What is the average flight time to Saudia Arabia from the UK?', 
            content: 'Direct flights to Saudi Arabia from the UK typically take 12 to 13 hours. But connecting flights are likely to take longer.'
        },
        {
            title: 'How long does it take to perform Umrah?', 
            content: 'Since Umrah has only four rituals, it can be completed in just a few hours. However, we suggest staying for at least 3-7 days so you can have the complete experience of Makkah.'
        },
        {
            title: 'Can I perform Umrah during Ramadan?', 
            content: 'Certainly! Umrah can be performed during Ramadan. Take advantage of our exclusive Ramadan Umrah Packages tailored specifically for this scared month.'
        },
        {
            title: 'Can I add a hotel of my choice to my Umrah package?', 
            content: 'We provide a range of hotel options to suit your needs. However, if you want to add a hotel of your choice to your Umrah package, feel free to do so.'
        }
    ]; 

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
    
    const handleItemClick = index => {
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

    return (
        <section className="faq-section section-padding pt-5 fix">
            <div className="left-shape float-bob-y">
                <Image src="/assets/img/tree-shape-2.png" alt="img" width={221} height={241} />
            </div>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="faq-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Got Questions?
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                                <p className="mt-3 mt-mb-0 wow fadeInUp wow" data-wow-delay=".5s">
                                    Find answers to common questions our customers ask about planning their Umrah and Hajj journeys with MR Tours.
                                </p>
                                <ul className="faq-list wow fadeInUp wow" data-wow-delay=".7s">
                                    <li>
                                        <Image src="/assets/img/icon/15.svg" alt="img" width={14} height={12} />
                                        ATOL & ABTA Protected
                                    </li>
                                    <li>
                                        <Image src="/assets/img/icon/15.svg" alt="img" width={14} height={12} />
                                        24/7 Support During Your Journey
                                    </li>
                                </ul>
                                <div className="contact-cta mt-4 wow fadeInUp wow" data-wow-delay=".9s">
                                    <p>Have more questions? Contact us or call</p>
                                    <h4><a href="tel:+441234567890">+44 123 456 7890</a></h4>
                                    <p>for personalized assistance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-items">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                    {faqContent.map((item, index) => (
                                        <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : "" }`}  data-wow-delay=".1s">
                                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                {item.title}
                                                </button>
                                            </h5>
                                            <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                {item.content}
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .contact-cta {
                    background: #f8f9fa;
                    padding: 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    border-left: 4px solid #28AAE2;
                }
                
                .contact-cta p {
                    margin-bottom: 0.5rem;
                    color: #555;
                }
                
                .contact-cta h4 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                
                .contact-cta h4 a {
                    color: #28AAE2;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .contact-cta h4 a:hover {
                    color: #1d8bb8;
                }
                
                @media (max-width: 992px) {
                    .faq-content {
                        margin-bottom: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Faq1;