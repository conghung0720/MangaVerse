import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery, useGetImagesQuery } from "../../api/api";
import ImageChapter from "./components/ImageChapter/ImageChapter";
import SideBar from "./components/SideBar/SideBar";
import HandleKeySkipChapter from "./components/Features/HandleKeySkipChapter";
import Header from "../../components/Header/Header";

const Chapter = () => {
  const { nameOfComics, chapter } = useParams();
  const { data: isData, isSuccess } = useGetImagesQuery({
    nameComics: nameOfComics,
    chapter,
  });

  const { data: dataToUrlChapter, isSuccess: successDetails } =
    useGetDetailsQuery({
      url: nameOfComics,
    });

  return (
    <div className="relative">
      <Header/>
      {isSuccess && <ImageChapter isData={isData} />}
      {successDetails && <HandleKeySkipChapter data={dataToUrlChapter.at(0)} />}
    </div>
  );
};

export default Chapter;
