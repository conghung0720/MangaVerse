import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonRead from "./ButtonRead";
import { DataMetrics, Comics } from "../../../../api/DefineTypeData";
import SliceSummary from "../Features/sliceSummary";

type DataDisplay = {
  isData: Comics[];
};

const HeadDetails: React.FC<DataDisplay> = ({ isData }): JSX.Element => {
  return (
    <>
      {isData.flatMap((value) => (
        <div className="black-2 p-4 lg:w-[85%] lg:m-auto lg:flex lg:flex-wrap lg:rounded-[13px] lg:mt-[3%]">
          <div className="mr-5 w-auto">
            <img
              src={value.imageSrc}
              className="w-[50%] m-auto h-[45%] rounded-[10px] mt-4 lg:w-[250px] lg:h-[350px]"
            />
            <div className="flex mt-3 gap-4 justify-center lg:gap-2 ">
              <ButtonRead>First Chapter</ButtonRead>
              <ButtonRead>Last Chapter</ButtonRead>
            </div>
          </div>
          <div className="lg:w-[70%]">
            <h2 className="uppercase text-[23px] font-bold mt-4 lg:mt-[6%] ">
              {value.title}
            </h2>
            <div className="mt-2">
              <span className="font-semibold text-[19px]">Alternative: </span>
              <span className="text-slate-200">{value.altName?.join(",")}</span>
            </div>
            <div className="w-full flex gap-x-2 gap-y-1.5 flex-wrap h-auto mt-3">
              <span className="text-[17px] ">Tags: </span>
              {value.tags.map((value: String) => (
                <span className="bg-slate-700 px-2 py-1 rounded-[12px]">
                  {value}
                </span>
              ))}
            </div>
            <div className="mt-2">
              <span className="text-[17px] font-semibold">Authors: </span>
              <span>{value.authors}</span>
            </div>
            <div className="mt-2">
              <span className="text-[17px] font-semibold">Status: </span>
              <span>{value.status}</span>
            </div>
            <div className=" flex justify-around text-slate-300 text-[16px] mt-7 border-y-slate-300 border-y-[1px] py-2">
              <div>
                <span>Ratings</span>
                <span className="flex items-center justify-center">
                  <StarIcon className="w-8 h-8 text-yellow-500" />
                  <span className="absolute text-slate-200">
                    {value.ratings}
                  </span>
                </span>
              </div>
              <div>
                <span className="block">Views</span>
                <span className="text-white text-[17px]">{value.views}</span>
              </div>
              <div className="text-center">
                <span className="block">Bookmarks</span>
                <span className="text-[17px] text-white">{value.hearts}</span>
              </div>
            </div>
            <div className="mt-7 lg:mb-5">
              <h1 className="font-bold text-[27px]">Summary</h1>
              <SliceSummary summary={value.summary} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeadDetails;
