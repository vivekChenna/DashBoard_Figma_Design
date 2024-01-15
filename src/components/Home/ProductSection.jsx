import React from "react";
import AddProduct from "./AddProduct";
import PlusIcon from "../../assets/Images/HomePageImages/Plus.png";
import MarketingIcon from "../../assets/Images/HomePageImages/Marketing.png";
import ProductReview from "../../assets/Images/HomePageImages/ProductReview.png";

const ProductSection = () => {
  return (
    <div className="w-[760px]">
      <div>
        <div className=" flex items-center justify-between">
          <p className=" font-Inter font-medium text-[20px] leading-7 text-[#1A181E]">
            Shortcuts (3/6)
          </p>
          <p className=" underline text-[#808080] font-medium text-[18px] leading-[26px]">
            Edit
          </p>
        </div>
        <div className=" mt-6 bg-white p-5 flex gap-4 flex-wrap shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
          <AddProduct name="Add New Product" img={PlusIcon} />
          <AddProduct name="Product reviews and ..." img={ProductReview} />
          <AddProduct name="Marketing Designs" img={MarketingIcon} />
          <AddProduct name="Add New shortcut" img={PlusIcon} />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
