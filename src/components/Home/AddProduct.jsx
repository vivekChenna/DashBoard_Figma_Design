import React from "react";

const AddProduct = ({ name, img }) => {
  return (
    <div
      className={
        name === "Add New shortcut"
          ? " py-[42px] px-4 border-2 border-dashed w-[229.33px] rounded-md h-[108px]"
          : " p-4 border border-[#E6E6E6] w-[229.33px] rounded-md h-[108px]"
      }
    >
      <div
        className={name === "Add New shortcut" ? "flex" : "flex flex-col gap-3"}
      >
        {name === "Add New shortcut" ? (
          <div className=" w-10 h-10">
            <img src={img} alt="plus-icon" />
          </div>
        ) : (
          <div
            className={
              name === "Marketing Designs"
                ? "w-10 h-10 bg-[#EE741F] flex items-center justify-center "
                : "w-10 h-10 bg-[#F2F2F2] flex items-center justify-center"
            }
          >
            <img src={img} alt="plus-icon" />
          </div>
        )}

        <p className=" font-Inter font-medium text-[16px] leading-6 text-[#1A181E]">
          {name}
        </p>
      </div>
    </div>
  );
};

export default AddProduct;
