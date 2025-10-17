import React from 'react';
import DestinationCard from '../Card/DestinationCard';
import Image from 'next/image';

const Destination3 = () => {
    return (
<section className="top-destination-section section-padding fix">
            <div className="bag-shape float-bob-x">
                <Image src="/assets/img/destination/bag-shape.png" alt="img" width={160} height={206}   />
            </div>
            <div className="watch-shape float-bob-y">
                <Image src="/assets/img/destination/watch.png" alt="img" width={76} height={76}   />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">Top Destination</span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                        Most Popular Destinations
                    </h2>
                </div>
                <div className="new-top-destination-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6">

                                <DestinationCard
                                    img="/assets/img/destination/Pic 1.png"
                                    title="Masjid al-Haram, Makkah"
                                    content="174,688 Travelers"
                                    path="/Umrah-packages"
                                ></DestinationCard>

                                <DestinationCard
                                    img="/assets/img/destination/Pic 2.png"
                                    title="Mount Uhud, Madinah"
                                    content="174,688 Travelers"
                                    path="/Umrah-packages"  
                                ></DestinationCard>


                                </div>
                                <div className="col-md-6">

                                <DestinationCard
                                    img="/assets/img/destination/Pic 3.png"
                                    title="Al-Masjid an-Nabawi, Madinah"
                                    content="174,688 Travelers"
                                    path="/Umrah-packages"
                                ></DestinationCard>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6">

                                <DestinationCard
                                    img="/assets/img/destination/Pic 4.png"
                                    title="Abraj Al-Bait Clock Tower, Makkah"
                                    content="174,688 Travelers" 
                                    path="/Hajj-packages"
                                ></DestinationCard>

                                <DestinationCard
                                    img="/assets/img/destination/Pic 5.png"
                                    title="Madinah Mususeum"
                                    content="174,688 Travelers"
                                    path="/Hajj-packages"
                                ></DestinationCard>

                                </div>
                                <div className="col-md-6">
                                <DestinationCard
                                    img="/assets/img/destination/Pic 6.png"
                                    title="Mount Arafat (Jabal al-Rahmah), Makkah"
                                    content="174,688 Travelers"
                                    path="/Hajj-packages"
                                ></DestinationCard>

                                <DestinationCard
                                    img="/assets/img/destination/Pic 7.png"
                                    title="Masjid al-Taneem (Masjid Ayesha), Makkah."
                                    content="174,688 Travelers"
                                    path="/Umrah-packages"
                                ></DestinationCard>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destination3;