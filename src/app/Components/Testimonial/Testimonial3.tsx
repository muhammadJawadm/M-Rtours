"use client"
import React, { useEffect, useRef, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const Testimonial3 = () => {
    const [imageErrors, setImageErrors] = useState({});

    useEffect(() => {
        loadBackgroudImages();
    }, []);    

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

    const testimonialContent = [
        {
            name: 'Zainab',
            location: 'Bradford',
            packageDetails: '7 Nights, 5 Star Umrah Package',
            image: './assets/img/testimonial/1 (3).jpeg', // Added image path
            content: 'Standing before the Ka\'bah, I felt a peace I\'d never known. MR Tours made it possible by handling every detail with care, from my flight to the luxurious hotel just steps from the Haram. Their team felt like family, guiding me through my first Umrah with kindness and patience. It was a moment of renewal I\'ll carry forever.'
        },
        {
            name: 'Omar',
            location: 'London',
            packageDetails: '15 Nights, 3 Star Umrah Package',
            image: './assets/img/testimonial/1 (1).jpeg', // Added image path
            content: 'As a father, I worried about bringing my young children on Umrah, but MR Tours turned my fears into joy. The affordable package allowed us to stay longer, praying together in Madinah. The staff\'s support, especially during our Ziyarat visits, made us feel safe and cared for. This journey bonded our family in faith.'
        },
        {
            name: 'Amina',
            location: 'Birmingham',
            packageDetails: '10 Nights, 4 Star Umrah Package',
            image: './assets/img/testimonial/1 (5).jpeg', // Added image path
            content: 'After years of saving, I finally performed Umrah with my elderly mother. MR Tours\' team went above and beyond, ensuring her comfort with accessible transfers and a hotel close to the mosque. Seeing her smile as we prayed together was priceless. They made our dream a reality with such warmth.'
        },
        {
            name: 'Yusuf',
            location: 'Manchester',
            packageDetails: '7 Nights, 3 Star Umrah Package',
            image: './assets/img/testimonial/1 (2).jpeg', // Added image path
            content: 'I was nervous as a solo traveler, but MR Tours made me feel at home. Their guidance helped me navigate the rituals, and the budget-friendly package meant I could focus on my dua without financial stress. I left Makkah feeling lighter, renewed, and grateful for their support.'
        }
    ];

    const handleImageError = (index) => {
        setImageErrors(prev => ({
            ...prev,
            [index]: true
        }));
    };

    return (
        <section className="testimonial-section section-padding fix bg-cover" data-background="/assets/img/testimonial/testimonial-bg.jpg" >
            <div className="container">
                <div className="testimonial-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                            <div className="testimonial-image">
                                <Image src="/assets/img/testimonial/H2.png" alt="img" width={636} height={657} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Testimonials
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        What Our Pilgrims Say
                                    </h2>
                                </div>
                                <div className="swiper testimonial-slider3">
                                    <div className="swiper-wrapper">
                                        <Slider ref={sliderRef} {...settings}>
                                            {testimonialContent.map((item, i) => (
                                                <div key={i} className="swiper-slide">
                                                    <div className="testimonial-card-items">
                                                        <div className="client-info-items">
                                                            <div className="client-info">
                                                                {/* Added client avatar */}
                                                                {!imageErrors[i] ? (
                                                                    <div className="client-avatar">
                                                                        <Image 
                                                                            src={item.image}
                                                                            alt={`${item.name} from ${item.location}`}
                                                                            width={64}
                                                                            height={64}
                                                                            className="avatar-img"
                                                                            onError={() => handleImageError(i)}
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className="client-avatar-placeholder">
                                                                        {item.name.charAt(0)}
                                                                    </div>
                                                                )}
                                                                <div className="content">
                                                                    <h4>{item.name}, {item.location}</h4>
                                                                    <p className="package-details">{item.packageDetails}</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="37" viewBox="0 0 50 37" fill="none">
                                                                    <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#1CA8CB"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <p className="testimonial-text">
                                                            &quot;{item.content}&quot;
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="array-button">
                                    <button onClick={previous} className="array-prev">
                                        <i className="bi bi-arrow-up"></i>
                                    </button>
                                    <button onClick={next} className="array-next">
                                        <i className="bi bi-arrow-down"></i>
                                    </button>
                                </div>
                                {/* <div className="testimonial-cta">
                                    <Link href="/reviews" className="review-link">
                                        Read More Reviews <i className="bi bi-arrow-right"></i>
                                    </Link>
                                    <p className="cta-text">Discover why thousands choose MR Tours</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .package-details {
                    color: #1CA8CB;
                    font-weight: 500;
                    margin-top: 4px;
                }
                
                .testimonial-text {
                    font-size: 1rem;
                    line-height: 1.75;
                    margin-top: 20px;
                    font-style: italic;
                    color: #555;
                }
                
                .testimonial-cta {
                    margin-top: 30px;
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                }
                
                .review-link {
                    display: inline-block;
                    color: #1CA8CB;
                    font-weight: 600;
                    font-size: 1.1rem;
                    margin-bottom: 8px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .review-link:hover {
                    color: #0d8ba8;
                }
                
                .review-link i {
                    font-size: 0.9rem;
                    margin-left: 5px;
                    transition: transform 0.3s ease;
                }
                
                .review-link:hover i {
                    transform: translateX(5px);
                }
                
                .cta-text {
                    color: #777;
                    font-size: 0.9rem;
                    margin: 0;
                }
                
                .client-info {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .client-avatar {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid #1CA8CB;
                }
                
                .avatar-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .client-avatar-placeholder {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background-color: #1CA8CB;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 600;
                }
                
                @media (max-width: 992px) {
                    .testimonial-cta {
                        margin-top: 25px;
                    }
                }
                
                @media (max-width: 576px) {
                    .testimonial-text {
                        font-size: 0.95rem;
                    }
                    
                    .review-link {
                        font-size: 1rem;
                    }
                    
                    .client-avatar, .client-avatar-placeholder {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .client-info {
                        gap: 10px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonial3;