"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Choose1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="travel-feature-section section-padding fix"
      data-background="/assets/img/travel-bg.jpg"
    >
      <div className="shape-1 float-bob-y">
        <Image src="/assets/img/plane-shape1.png" alt="img" width={218} height={244} />
      </div>
      <div className="shape-2 float-bob-x">
        <Image src="/assets/img/plane-shape2.png" alt="img" width={310} height={459} />
      </div>
      <div className="container">
        <div className="feature-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Start Your Journey Today
                  </span>
                  <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                    MR Tours — Guiding You Every Step of the Way
                  </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                  As one of the UK’s leading Hajj and Umrah travel agencies, MR Tours has helped countless
                  pilgrims fulfill their sacred duties with ease. Whether it’s your first Umrah or a deluxe
                  Hajj, we manage all logistics—from flights to premium accommodations—so you can focus on
                  worship and reflection.
                </p>

                <div className="feature-area">
                  <div style={{right:'370px'}} className="line-shape">
                    <Image src="/assets/img/line-shape.png" alt="img" width={1} height={245} />
                  </div>

                  <div className="feature-items wow fadeInUp wow" data-wow-delay=".5s">
                    <div className="feature-icon-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/08.svg" alt="img" width={40} height={40} />
                      </div>
                      <div className="content">
                        <h5>
                          Benefits of <br /> Choosing <br /> MR Tours
                        </h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li>
                        <span>
                          Seamless travel with flights, visas. <br />
                          Hotels near holy sites.<br />
                          Custom plans for every budget.<br />
                          Spiritual support and exclusive perks.<br />
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="feature-items wow fadeInUp wow" data-wow-delay=".7s">
                    <div className="feature-icon-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/09.svg" alt="img" width={40} height={40} />
                      </div>
                      <div style={{width:'100px'}} className="content">
                        <h5>Your Journey Starts Here</h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li >
                        <span >
                          MR Tours makes your pilgrimage easy <br /> and fulfilling.
                          Call <strong>+44 7517 240405</strong> <br /> or  contact us to begin your journey.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="theme-btn wow fadeInUp wow"
                  data-wow-delay=".9s"
                >
                  Contact Us<i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="feature-image wow img-custom-anim-left">
                <Image
                  src="/assets/img/about/World Leading 626.png"
                  alt="img"
                  width={636}
                  height={577}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose1;
