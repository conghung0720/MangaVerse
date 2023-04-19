import React from "react";
import CheckBox from "../../../../components/CheckBox/CheckBox";

const Type = () => {
  const typeComic = ["All", "Manga", "Manhua"];
  const status = ["All", "On Going", "Complete"];
  const format = ["Black White", "Colored"];
  return (
    <>
      <div className="flex text-[18px] mt-4">
        <span className="w-[34%]">Type Comic</span>
        <span className="w-[33%]">Status</span>
        <span>Format</span>
      </div>
      <div className="mb-[10%] flex justify-between">
        <div className="w-[33%]">
          {typeComic.map((val) => (
            <p className="mt-[5%]">
              <CheckBox>{val}</CheckBox>
            </p>
          ))}
        </div>
        <div className="w-[33%]">
          {status.map((val) => (
            <p className="mt-[5%]">
              <CheckBox val={val}>{val}</CheckBox>
            </p>
          ))}
        </div>
        <div className=" w-[33%]">
          {format.map((val) => (
            <p className="mt-[5%]">
              <CheckBox>{val}</CheckBox>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Type;
