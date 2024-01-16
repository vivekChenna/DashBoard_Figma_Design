import React from "react";
import ProductSection from "./ProductSection";
import PendingSection from "./PendingSection";

const FooterSection = () => {
  return (
    <div className="  mt-8 flex md:flex-row flex-col md:gap-0 gap-5 justify-between">
      <ProductSection />
      <PendingSection />
    </div>
  );
};

export default FooterSection;
