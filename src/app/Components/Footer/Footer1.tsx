"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Footer1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <footer className="footer-section fix bg-cover" data-background="/assets/img/footer/1920X830.png" style={{position: 'relative'}}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                pointerEvents: 'none',
                zIndex: 1
            }}></div>
            <div className="container" style={{position: 'relative', zIndex: 2}}>
                <div className="footer-widget-wrapper-new">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp wow" data-wow-delay=".2s">
                            <div className="single-widget-items text-center">
                                <div className="widget-head">
                                    <a href="#">
                                        <Image src="/assets/img/logo/white-logo (2).svg" alt="img" width={350} height={50} />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <h3>Newsletter / Subscription</h3>
                                    <p>Stay Updated on Special Offers</p>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="Your email address" />
                                        <button className="newsletter-btn theme-btn" type="submit">
                                            Subscribe <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div className="social-icon d-flex align-items-center justify-content-center">
                                        <a href="https://www.facebook.com/MRToursUK"><i className="bi bi-facebook"></i></a>
                                        <a href="https://www.youtube.com/@m-rtoursuk"><i className="bi bi-youtube"></i></a>
                                        <a href="https://www.tiktok.com/@mr.tours8"><i className="bi bi-tiktok"></i></a>
                                        <a href="https://www.instagram.com/m_r_tours"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".4s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link href="/Umrah-packages">
                                            Umrah Packages 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Hajj-packages">
                                            Hajj Packages
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            About  
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/beatPrice">
                                            Beat My Price 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Services</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Wanderlust Adventures  
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Globe Trotters Travel
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Odyssey Travel Services
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Jet Set Journeys
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Dream Destinations Travel
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Contact Us</h4>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h6>140 high road E18 2QS London<br/>
                                                United Kingdom
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="content pt-2">
                                         <h6>
                                             <a href="mailto:info@m-rtours.co.uk">Info@M-rtours.co.uk</a> 
                                         </h6>
                                      </div>
                                    </div>
                                    <div className="contact-items">
                                       <div className="icon">
                                       <i className="bi bi-telephone-fill"></i>
                                       </div>
                                       <div className="content pt-2">
                                           <h6>
                                               <a href="tel:+442034110076">+44 020 3411 0076 </a> <br/>
                                               {/* <a href="tel:+10987654321">+44 7517 240405 </a> */}
                                           </h6>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="footer-bottom">
    <div className="footer-wrapper">
        <p className="wow fadeInUp" data-wow-delay=".3s">
            Copyright © <span>M-Rtours</span> All Rights Reserved. | <Link href="/privacy-policy" style={{color: 'white', textDecoration: 'none'}}>Privacy Policy</Link>
        </p>
        <div className="footer-links" style={{color:'white', display: 'flex', gap: '15px', alignItems: 'center'}}>
            <a 
                href="https://www.trustpilot.com/review/m-rtours.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    padding: '8px 16px',
                    // backgroundColor: '#00b67a',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'opacity 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
                Trustpilot
            </a>
            <a 
                href="https://www.google.com/search?q=m-rtours+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    padding: '8px 16px',
                    // backgroundColor: '#4285f4',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'opacity 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
                Google Review
            </a>
            <a 
                href="https://www.iata.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    padding: '8px 16px',
                    // backgroundColor: '#003b5c',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    transition: 'opacity 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
                IATA
            </a>
        </div>
    </div>
</div>
            </div>
        </footer>
    );
};

export default Footer1;