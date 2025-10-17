"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Choose1 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="travel-feature-section section-padding fix" data-background="/assets/img/travel-bg.jpg" >
            <div className="shape-1 float-bob-y">
                <Image src="/assets/img/plane-shape1.png" alt="img" width={218} height={244}   />
            </div>
            <div className="shape-2 float-bob-x">
                <Image src="/assets/img/plane-shape2.png" alt="img" width={310} height={459}   />
            </div>
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="feature-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Ready to Begin Your Spiritual Journey?
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        Your Trusted Partner for Hajj & Umrah Travel
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    As one of the best Hajj travel agencies in the UK, MR Tours has helped thousands of pilgrims fulfil their sacred duties with comfort, peace of mind, and complete support. Whether you’re planning group Umrah packages, family Hajj trips, or VIP Umrah packages, we ensure your journey is easy, meaningful, and spiritually enriching , from the moment you book until you return home.</p>
                               <div className="feature-area">
                                    <div className="line-shape">
                                        <Image src="/assets/img/line-shape.png" alt="img" width={1} height={174}   />
                                    </div>
                                <div className="feature-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/08.svg" alt="img" width={40} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Most Fulfilling  <br/> 
                                                Pilgrimage Experience
                                            </h5>
                                        </div>
                                    </div>
                                    <ul className="circle-icon">
                                        <li>
                                            <i className="fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>
Hajj & Umrah packages with flights, <br /> visas, stay near Haram, and transport—focus on faith.

                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-items wow fadeInUp wow" data-wow-delay=".7s">
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/09.svg" alt="img" width={29} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Your Journey  <br/>
                                                 Starts Here
                                            </h5>
                                        </div>
                                    </div>
                                    <ul className="circle-icon">
                                        <li>
                                            <i className="fa-solid fa-badge-check"></i>
                                        </li>
                                       <li>
                                            <span style={{marginLeft:"18px"}}>
                                                From first Umrah to luxury Hajj, <br /> 
                                                <span style={{marginLeft:"18px"}}>  MR Tours  makes your journey </span> <br />
                                                <span style={{marginLeft:"18px"}}>guided and stress-free.</span>

                                            </span>
                                       </li>
                                    </ul>
                                </div>
                               </div>
                               <Link href="/contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".9s">Contact US<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-image wow img-custom-anim-left">
                                <Image src="/assets/img/about/World Leading 626.png" alt="img" width={636} height={577}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose1;