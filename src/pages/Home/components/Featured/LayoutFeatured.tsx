import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { DefineDataManga } from "../../DefineType.types";

const LayoutFeatured = (props: DefineDataManga) => {
  return (
    <div className="w-[100%] flex justify-center ">
      <img
        className="h-[23em] relative w-[90%] rounded-[12px] "
        src={props.imageSrc}
        alt="slide1"
      />
      <div className="absolute z-10 w-[90%] h-[40%] bottom-0 p-3 flex flex-wrap blurImg">
        <div className="text-white font-medium text-[22px] w-full h-[30%] ml-1">
          {props.title}
        </div>
        <div className="w-[60%] h-[70%] flex ">
          <div className=" w-[15%] flex items-center">
            <StarIcon className="h-10 w-10 mr-[-24px] text-yellow-400" />
            <span>{props.rating}</span>
          </div>
          <div className=" w-[85%] px-2 pt-5">
            <span className="text-[18px] font-medium">Tags: </span>
            <span>{props.tags}</span>
          </div>
        </div>
        <div className="pt-5 ml-[10%] w-[25%] text-center text-[18px]">
          <span>Author: </span>
          <span className="font-medium">{props.author}</span>
        </div>
      </div>
    </div>
  );
};

export default LayoutFeatured;
