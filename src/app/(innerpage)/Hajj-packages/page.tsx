import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Destination4 from '../../Components/Destination/Destination4';
// import Story1 from '../../Components/Story/Story1';
import FeaturedTour1 from '../../Components/FeaturedTour/FeaturedTour1';
// import FeaturedFlight from '../../Components/FeaturedFlight/FeaturedFlight';
import Faq1 from '../../Components/Faq/Faq1';
import UmrahPackages from '../../Components/Umrah-Package/UmrahPackages';
import HajjPackages from '../../Components/Hajj-Package/HajjPackages';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/header/Hajj page 1.png"
                Title="Hajj Packages"
            ></BreadCumb>    
             <HajjPackages/>
             <br />
              <br />
             <Faq1></Faq1>                
    </div>
  );
};

export default page;