import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import sliceStrings from "../../utils/sliceStrings";
import { Comics } from "../../api/DefineTypeData";

type StylesClass = string;

interface BaseContainerProps extends Comics {
  width?: string;
  marginTop?: string;
  limitTextSummary: number;
}

const BaseContainer: React.FC<BaseContainerProps> = (props): JSX.Element => {
  const width: StylesClass = props.width || "w-[90%]";
  const limitTextSummary: number = props.limitTextSummary;
  const marginTop: StylesClass = props.marginTop || "";
  return (
    <Link
      to={`/details/${props.link}`}
      className={`black-2 lg:h-[350px] rounded-[5px] m-auto lg:flex flex-wrap relative  ${width} ${marginTop}`}
    >
      <img
        src={props.imageSrc}
        className="relative m-auto lg:m-0 w-[50%] h-[40%] lg:w-[30%] lg:h-[60%] left-2 lg:left-4 rounded-[6px] top-[-10%] object-cover"
      />
      <div className="left-1 lg:left-4 lg:w-[65%] lg:h-[50%] relative top-0 py-2 px-3.5 space-y-2 ">
        <p className="border-b py-1 mb-2 font-medium text-[19px] border-slate-500">
          {sliceStrings(props.title, 40)}
        </p>
        <p className="font-medium">
          Status:
          <span className="font-light"> {props.status}</span>
        </p>
        <p className="font-medium">
          Author:
          <span className="font-light"> {props.authors}</span>
        </p>
        <p className="font-medium">
          Tags:
          <span className="font-light">
            {props.tags.slice(1, 6).join(", ")}
          </span>
        </p>
      </div>
      <div className="relative h-[50%] lg:bottom-[10%] lg:py-3 px-4 w-full">
        <p className="">{sliceStrings(props.summary, limitTextSummary)}</p>
        <div className="w-[90%] py-3 mt-2 relative lg:absolute bottom-0 m-auto h-[30%] lg:h-[38%] items-center flex border-t border-slate-600 ">
          <p className="font-[400] mr-2">Review: </p>
          <HeartIcon className="w-6 h-6 text-rose-600" />
          <span className="font-[400]">{props.hearts}</span>
        </div>
      </div>
    </Link>
  );
};

export default BaseContainer;
