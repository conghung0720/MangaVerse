import React from "react";

const ImageChapter: React.FC<{ isData: Array<any> }> = ({ isData }) => {
  return isData[0]?.flatMap((value: string) => (
    <img className="m-auto w-[70%]" src={value} loading="lazy" />
  ));
};

export default ImageChapter;
