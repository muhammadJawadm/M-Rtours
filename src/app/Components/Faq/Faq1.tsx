"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

    const faqContent = [
        {
            title: 'What is an Umrah package?', 
            content: 'An Umrah package is your all-in-one solution for a seamless pilgrimage. It bundles flights, accommodations, visas, and transfers, saving you time and money while ensuring a spiritually enriching experience.'
        },
        {
            title: 'Is booking an Umrah package more cost-effective?', 
            content: 'Yes, bundling your travel, accommodation, and services often unlocks exclusive deals unavailable when booking separately. MR Tours\' packages not only save you money but also simplify planning, letting you focus on your spiritual journey.'
        },
        {
            title: 'When is the best time to book an Umrah package?', 
            content: 'Your heart\'s call to Makkah and Madinah can be answered any time of year with MR Tours. We offer tailored packages for every season: spring serenity, summer vibrancy, autumn tranquility, or winter peace. Explore our monthly offerings, including January to December Umrah packages, Ramadan specials, and last-minute deals for spontaneous pilgrims. Book early for peak seasons like Ramadan or school holidays, or opt for off-peak months like Muharram, Safar, or Rajab for budget-friendly options. Join our mailing list for exclusive deals and updates!'
        },
        {
            title: 'When is the cheapest time to perform Umrah from the UK?', 
            content: 'The most affordable Umrah packages are typically available during off-peak months like January, May, September, or November, offering lower prices and quieter holy sites. Booking early for peak periods like Ramadan or December ensures great value. Flexible travelers can snag last-minute deals for added savings. MR Tours provides ATOL-protected packages with competitive pricing year-round; contact us to find the perfect deal for you.'
        },
        {
            title: 'How can I book an Umrah package with a low deposit?', 
            content: 'Booking with MR Tours is simple and stress-free via our website, where you\'ll find the latest packages, early bird offers, and flexible payment plans. Start with a low deposit from just £50 per person, pay in installments up to four weeks before departure, and enjoy tailored itineraries with flights, hotels, visas, and 24/7 support. Our ATOL and ABTA-protected bookings ensure peace of mind for solo travelers, families, or groups.'
        },
        {
            title: 'Where can I find the best value Umrah packages with flexible payments?', 
            content: 'MR Tours\' website is your go-to for affordable, high-value Umrah packages. From budget-friendly 3-star to luxurious 5-star options, we offer departures from major UK airports, low deposits, and easy monthly payments. Explore family, group, or solo packages, including last-minute and seasonal offers. Our user-friendly site makes planning effortless; select your travel dates and let us guide you to the sacred cities.'
        },
        {
            title: 'Is an all-inclusive Umrah package worth it?', 
            content: 'Absolutely. All-inclusive packages cover accommodation, meals, and transfers, freeing you to focus on worship without logistical worries. This smart, budget-friendly option minimizes distractions and maximizes your spiritual experience, leaving room for Ziyarat visits or personal reflection.'
        },
        {
            title: 'Why choose MR Tours for your Umrah or Hajj journey?', 
            content: 'MR Tours is trusted by thousands of UK pilgrims for seamless, affordable, and spiritually fulfilling journeys. With flexible payment plans, low deposits from £50, tailored packages for all budgets, and expert guidance, we ensure every step is hassle-free. Enjoy exclusive perks like hotel upgrades and ATOL-protected bookings. Start your sacred journey with MR Tours today.'
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
        <section className="faq-section section-padding pt-0 fix">
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
                                        Still Feeling Confused? Explore Our FAQs
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