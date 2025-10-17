"use client"
import React, { useEffect, useRef } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import Image from 'next/image';

const Testimonial3 = () => {

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
        {img:'/assets/img/team/2.png', subtitle:'Web Designer', title:'Ayesha K., London', content:'Booking my Ramadan Umrah with MRtours was effortless. Everything from visa assistance to hotel transfers was handled professionally.'},        
        {img:'/assets/img/team/1.png', subtitle:'President of Sales', title:'Mohammed R., Manchester ', content:'Our family trip for Umrah 2025 exceeded expectations. The Haram-view rooms and private transport made our pilgrimage comfortable.'},        
        {img:'/assets/img/team/3.png', subtitle:'Brooklyn Simmons', title:'Fatima S., Birmingham ', content:'I highly recommend MRtours for anyone travelling from the UK. Their team took care of all arrangements.'},        
      ]; 

    return (
        <section className="testimonial-section section-padding fix bg-cover" data-background="/assets/img/testimonial/testimonial-bg.jpg" >
        <div className="container">
            <div className="testimonial-wrapper-3">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                        <div className="testimonial-image">
                            <Image src="/assets/img/testimonial/H2.png" alt="img" width={636} height={657}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-content">
                            <div className="section-title">
                                <span className="sub-title wow fadeInUp">
                                    Testimonial
                                </span>
                                <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                    Pilgrims Love Traveling with MRtours
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
                                                    <div className="client-image">
                                                        <Image src={item.img} alt="img" width={60} height={60}   />
                                                    </div>
                                                    <div className="content">
                                                        <h4>
                                                        {item.title}
                                                        </h4>
                                                        <p>
                                                        {item.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="37" viewBox="0 0 50 37" fill="none">
                                                        <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#1CA8CB"/>
                                                   </svg>
                                                </div>
                                            </div>
                                            <p>
                                            {item.content}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Testimonial3;