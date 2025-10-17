"use client";
import React from "react";
import { useParams } from "next/navigation";
import BreadCumb from "../../../Components/Common/BreadCumb";
import UmrahDetails from "../../../Components/Umrah-Detail/UmrahDetail";

const UmrahDetailPage = () => {
  const { id } = useParams(); // 👈 Get Firestore document ID from URL

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/header/Umrah page 1.png"
        Title="Umrah Details"
      />

      {/* Pass the package ID to the detail component */}
      <UmrahDetails packageId={id as string} />
    </div>
  );
};

export default UmrahDetailPage;
