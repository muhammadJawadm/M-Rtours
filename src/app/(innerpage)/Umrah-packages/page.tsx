import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Destination4 from '../../Components/Destination/Destination4';
// import Story1 from '../../Components/Story/Story1';
import FeaturedTour1 from '../../Components/FeaturedTour/FeaturedTour1';
import FeaturedFlight from '../../Components/Umrah-Package/UmrahPackages';

import ClientReviews from '../../Components/Reviews & Feedback/Reviews';
import Faq1 from '../../Components/Faq/Faq1';
import UmrahPackages from '../../Components/Umrah-Package/UmrahPackages';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/header/Umrah page 1.png"
                Title="Umrah Packages "
            ></BreadCumb>    
            <UmrahPackages />
             {/* <Story1></Story1>   */}
             {/* <UmrahPackages></UmrahPackages>   */}
             <ClientReviews></ClientReviews>              
             <Faq1></Faq1>
    </div>
  );
};

export default page;