import React from 'react';
import HeroBanner3 from '../Components/HeroBanner/HeroBanner3';
import Form1 from '../Components/Form/Form1';
import Destination3 from '../Components/Destination/Destination3';
import About3 from '../Components/About/About3';
import DealOffers2 from '../Components/DealOffers/DealOffers2';
import Brand2 from '../Components/Brand/Brand2';
import Counter2 from '../Components/Counter/Counter2';
// import FeaturedFlight from '../Components/FeaturedFlight/FeaturedFlight';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Cta4 from '../Components/Cta/Cta4';
import Faq1 from '../Components/Faq/Faq1';
import Counter3 from '../Components/Counter/Counter3';
import Blog3 from '../Components/Blog/Blog3';
// import Instagram2 from '../Components/Instagram/Instagram2';

import UmrahPackages from '../Components/Umrah-Package/UmrahPackages';
import FilteredUmrahPackages from '../Components/Umrah-Package/FilteredUmrahPackages';
import HajjPackagesWrapper from '../Components/ClientWrappers/HajjPackagesWrapper';

const page = () => {
    return (
        <div>
            <HeroBanner3></HeroBanner3>
            {/* <Form1></Form1> */}
            <Destination3></Destination3>
            <FilteredUmrahPackages starRating={3}></FilteredUmrahPackages>
            <About3></About3>
            {/* <DealOffers2></DealOffers2> */}
            {/* <Brand2></Brand2> */}

            {/* <Counter2></Counter2> */}

            {/* <UmrahPackages></UmrahPackages> */}
            
            <FilteredUmrahPackages starRating={4}></FilteredUmrahPackages>
            <Testimonial3></Testimonial3>
            <FilteredUmrahPackages starRating={5}></FilteredUmrahPackages>
            <br />
            <Counter3></Counter3>
            <br />
            {/* Use the wrapper component instead of direct dynamic import */}
            <HajjPackagesWrapper />
            {/* <Cta4></Cta4> */}
            <Faq1></Faq1>
            {/* <Blog3></Blog3> */}
            {/* <Instagram2></Instagram2>            */}
            <br />
        </div>
    );
};

export default page;