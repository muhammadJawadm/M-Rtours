"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const About3 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section 
            className="about-section section-padding bg-color" 
            data-background="/assets/img/about/about-bg-2.jpg"
        >
            <div className="container">
                <div className="left-shape float-bob-x">
                    <Image src="/assets/img/about/Travelling Bag.png" alt="shape" width={204} height={195} />
                </div>
                <div className="about-wrapper-3">
                    <div className="row g-4 align-items-center">
                        
                        {/* Left Images */}
                        <div className="col-lg-6">
                            <div className="about-image wow fadeInUp" data-wow-delay=".3s">
                                <Image 
                                    src="/assets/img/about/Home About 1.png" 
                                    alt="Kaaba" width={450} height={449} 
                                />
                                <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                    <Image 
                                        src="/assets/img/about/Home About 2.png" 
                                        alt="Madinah Mosque" width={350} height={350} 
                                    />
                                    <div className="plane-shape float-bob-y">
                                        <Image 
                                            src="/assets/img/about/plane-shape3.png" 
                                            alt="plane" width={335} height={357} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">About / Plan Your Journey </span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Plan Your Spiritual Journey with Ease 
                                    </h2>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    At MRtours, we are dedicated to making your Umrah and Hajj journeys from the UK seamless, comfortable and spiritually enriching. With years of experience and personalised packages (3★–5★), we handle flights, visas, transfers and hotel bookings so you can focus on the blessings of the journey.
                                </p>

                                {/* Item 1 */}
                                <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/13.svg" alt="icon" width={37} height={41} />
                                        </div>
                                        <div className="content">
                                            <h4>Set Travel Plan</h4>
                                            <p>
                                                Choose from flexible Umrah &amp; Hajj packages <br />
                                                designed for families, groups, and individuals.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/14.svg" alt="icon" width={40} height={41} />
                                        </div>
                                        <div className="content">
                                            <h4>Explore Around</h4>
                                            <p>
                                                Stay close to Makkah &amp; Madinah holy sites <br />
                                                with guided Ziyarah tours and premium hotels.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;
