import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About2 = () => {
    return (
<section className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image src="/assets/img/about/We strived only 329.png" className="wow img-custom-anim-left" alt="img" width={330} height={512}   />
                                <div className="shape-image float-bob-y">
                                    <Image src="/assets/img/about/We strived only 196.png" alt="img" width={196} height={109}   />
                                </div>
                                <div className="group-image float-bob-x">
                                    <Image src="/assets/img/about/group.png" alt="img" width={170} height={50}   />
                                </div>
                                <div className="about-image-2">
                                    <Image src="/assets/img/about/We strived only 299.png" className="wow img-custom-anim-top" alt="img" width={284} height={411}   />
                                    <div className="plane-shape">
                                        <Image src="/assets/img/about/plane-shape2.png" alt="img" width={370} height={205}   />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Get About Us
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        We Strive to Make Every Pilgrimage Truly Special
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                    At MR Tours, our mission is simple , to make your sacred journey of Hajj and Umrah as smooth, meaningful, and worry-free as possible. With 20+ years of experience serving pilgrims across the UK, we provide trusted guidance, reliable travel support, and all-inclusive pilgrimage packages , from booking your flight to ensuring your safe return home.
                                </p>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/check.png" alt="img" width={34} height={30}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Hassle-Free Booking<br/>Experience
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Plan your Hajj or Umrah 2025 with ease complete packages with visa, flights, stay near Haram, and transport.</p>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/check.png" alt="img" width={34} height={30}   />
                                        </div>
                                        <div style={{marginRight:"-38px"}} className="content">
                                            <h5>
                                                Comprehensive Pilgrimage<br/> Support 
                                            </h5>
                                        </div>
                                    </div>
                                    <div  className="text">
                                        <p >
                                            We handle all logistics so you can focus on the spiritual purpose of your pilgrimage.

                                        </p>
                                    </div>
                                </div>
                                <Link href="/about" className="theme-btn wow fadeInUp wow" data-wow-delay=".7s">Discover More<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;