import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface TypeData {
  data: Object;
}

const HandleKeySkipChapter = ({ data }: TypeData) => {
  const { chapter: currentChapter, nameOfComics } = useParams();
  const getCurParamsChapter : string = currentChapter || "";
  const navigate = useNavigate();

  const { dataOfChapter }: any = data;
  const { chapter_url } = dataOfChapter.at(0);

  let checkCurrentChapter: number = dataOfChapter?.indexOf(
    currentChapter || "_Not Position_"
  );

  let [getPosCurrentChapter, setPosCurrentChapter] =
    useState<number>(checkCurrentChapter);

  const HandleKeyChangeChapter = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === "ArrowRight" && getPosCurrentChapter > 0) {
      setPosCurrentChapter(--getPosCurrentChapter);
      navigate(`/details/${nameOfComics}/${chapter_url[getPosCurrentChapter]}`);
    }

    if (key === "ArrowLeft" && getPosCurrentChapter < chapter_url?.length - 1) {
      setPosCurrentChapter(++getPosCurrentChapter);
      navigate(`/details/${nameOfComics}/${chapter_url[getPosCurrentChapter]}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", HandleKeyChangeChapter);

    return () => window.removeEventListener("keydown", HandleKeyChangeChapter);
  }, [currentChapter]);

  return <></>;
};

export default HandleKeySkipChapter;
