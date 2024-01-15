import React from "react";
import ProductSection from "./ProductSection";
import PendingSection from "./PendingSection";

const FooterSection = () => {
  return (
    <div className="  mt-8 flex justify-between">
      <ProductSection />
      <PendingSection />
    </div>
  );
};

export default FooterSection;
