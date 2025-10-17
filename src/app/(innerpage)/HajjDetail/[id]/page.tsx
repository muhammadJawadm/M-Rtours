'use client';
import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import HajjDetails from '../../../Components/Hajj-Detail/HajjDetail';
import { useParams } from "next/navigation";

const HajjDetailPage = () => {
  const { id } = useParams();
  
  // Convert id to number, handle cases where id might be undefined or invalid
  

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/header/Hajj page 1.png"
        Title="Hajj Package Details"
      />    
      <HajjDetails packageId={id as string} />        
    </div>
  );
};

export default HajjDetailPage;