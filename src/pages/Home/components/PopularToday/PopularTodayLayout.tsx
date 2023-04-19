import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import RatingStar from "../../../../utils/ratingStar";
import ButtonGreen from "../../../../components/Button/ButtonGreen";
import { DefineDataManga } from "../../DefineType.types";


const PopularTodayLayout = ({
  title,
  rating,
  tags,
  imageSrc,
  author,
}: DefineDataManga) => {
  return (
    <>
      <div className="w-[85%] m-auto my-[20%] h-[27em]">
        <div className=" w-full h-[46%] relative">
          <img
            src={imageSrc}
            className="relative h-full w-full object-top object-cover rounded-sm"
          />
        </div>
        <div className=" px-3 py-1 h-[54%] w-full black-2">
          <div className="border-b border-slate-500 h-[25%] items-center flex font-[450]">
            <RatingStar rating={rating} />
            <span className="ml-2">{rating} • Rating</span>
          </div>
          <div className="mb-2 py-1 ">
            <h2 className="font-semibold text-[22px]">{title}</h2>
            <p>Author: {author}</p>
            <p>Tags: {tags}</p>
          </div>
          {/* <button className="w-full h-auto py-4 black-3 hover:bg-green-500 rounded-lg">
            View Now
          </button> */}
          <ButtonGreen>View Now</ButtonGreen>
        </div>
      </div>
    </>
  );
};

export default PopularTodayLayout;
