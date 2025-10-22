import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About2 = () => {
    return (
        <section className="about-section  fix">
             <section className="hero-section fix " style={{
                            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                            minHeight: '600px',
                             paddingTop: '120px',
                            paddingBottom: '80px'
                        }}>
                            <div className="container">
                                <div className="row align-items-center g-5">
                                    {/* Left Side - Name and About Section */}
                                    <div className="col-lg-7">
                                        {/* Name Heading */}
                                        <div style={{ marginBottom: '50px' }}>
                                            <h2 style={{
                                                fontSize: '2.2rem',
                                                fontWeight: '700',
                                                letterSpacing: '3px',
                                                color: '#2d3748',
                                                marginBottom: '15px',
                                                lineHeight: '1.4'
                                            }}>
                                                W A H E E D &nbsp; UR &nbsp; R E H M A N &nbsp; M I A N
                                            </h2>
                                            <h3 style={{
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                letterSpacing: '2px',
                                                color: '#718096',
                                                textTransform: 'uppercase'
                                            }}>
                                                BARRISTER | BUSINESSMAN | PHILANTHROPIST | FUTURIST
                                            </h3>
                                        </div>
            
                                        {/* About Section */}
                                        <div>
                                            <h2 style={{
                                                fontSize: '2.2rem',
                                                fontWeight: '700',
                                                color: '#2d3748',
                                                marginBottom: '25px',
                                                borderBottom: '3px solid #4299e1',
                                                paddingBottom: '15px',
                                                display: 'inline-block'
                                            }}>
                                                About the CEO
                                            </h2>
                                            <p style={{
                                                fontSize: '1.05rem',
                                                lineHeight: '1.9',
                                                color: '#4a5568',
                                                textAlign: 'justify',
                                                marginBottom: '20px'
                                            }}>
                                                Waheed Ur Rehman Mian is a distinguished philanthropist, and business leader, whose dynamic career spans multiple industries, driving growth, innovation, and social progress. With an unwavering commitment to ethical practices and community development, he has emerged as a visionary force in real estate, law, and philanthropy.
                                            </p>
                                            <p style={{
                                                fontSize: '1.05rem',
                                                lineHeight: '1.9',
                                                color: '#4a5568',
                                                textAlign: 'justify'
                                            }}>
                                                Whether pioneering transformative housing projects, championing legal excellence, or uplifting communities through charitable initiatives, Waheed Ur Rehman Mian&apos;s influence is both profound and far-reaching. His leadership is defined by integrity, forward-thinking strategies, and an unwavering dedication to positive change.
                                            </p>
                                        </div>
                                    </div>
            
                                    {/* Right Side - Image */}
                                    <div className="col-lg-5">
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Image 
                                                src="/assets/img/Waheed.png" 
                                                alt="Professional Portrait" 
                                                width={800} 
                                                height={700}
                                                style={{
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    borderRadius: '10px',
                                                    // boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
<section className="about-section section-padding fix">
  <div className="container">
    <div className="about-wrapper-2">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="about-image">
            <Image
              src="/assets/img/about/We strived only 329.png"
              className="wow img-custom-anim-left"
              alt="img"
              width={330}
              height={512}
            />
            <div className="shape-image float-bob-y">
              <Image src="/assets/img/about/We strived only 196.png" alt="img" width={250} height={150} />
            </div>
            <div className="group-image float-bob-x">
              <Image src="/assets/img/about/group.png" alt="img" width={170} height={50} />
            </div>
            <div className="about-image-2">
              <Image
                src="/assets/img/about/We strived only 299.png"
                className="wow img-custom-anim-top"
                alt="img"
                width={284}
                height={411}
              />
              <div className="plane-shape">
                <Image src="/assets/img/about/plane-shape2.png" alt="img" width={370} height={205} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <div className="section-title">
              <span className="sub-title wow fadeInUp">About Us</span>
              <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                Your Trusted Partner for Sacred Journeys
              </h2>
            </div>
            <p className="wow fadeInUp wow" data-wow-delay=".5s">
              At MR Tours, we are dedicated to making your Hajj and Umrah pilgrimages from the UK truly
              special, seamless, and spiritually fulfilling. With over 20 years of experience serving
              pilgrims, we provide expert guidance and comprehensive support to ensure your journey is
              worry-free from start to finish.
            </p>

            <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
              <div className="about-icon-items">
                <div className="icon">
                  <Image src="/assets/img/check.png" alt="img" width={34} height={30} />
                </div>
                <div style={{ width: '100px' }} className="content">
                  <h5>Our Mission</h5>
                </div>
              </div>
              <div className="text">
                <p>
                  We simplify your pilgrimage so you can focus on faith. Our team ensures comfort, peace of mind, and a truly spiritual experience.</p>
              </div>
            </div>

            <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
              <div className="about-icon-items">
                <div className="icon">
                  <Image src="/assets/img/check.png" alt="img" width={34} height={30} />
                </div>
                <div style={{ width: '100px' }} className="content">
                  <h5>Why MR Tours Stands Out</h5>
                </div>
              </div>
              <div className="text">
                <p>
                  Hassle-free packages with flights, visas, and hotels near Haram.
20+ years of trusted service.
Tailored plans for groups or individuals.
24/7 assistance and secure ATOL & ABTA bookings.  </p>
              </div>
            </div>

            <Link href="/about" className="theme-btn wow fadeInUp wow" data-wow-delay=".7s">
              Discover More<i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </section>
    );
};

export default About2;