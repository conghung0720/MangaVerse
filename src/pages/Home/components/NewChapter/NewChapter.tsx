import React from "react";
import NewChapterCarousel from "../../Carousels/NewChapterCarousel";
import { useGetNewestQuery } from "../../../../api/api";

const NewChapter = () => {
  const { data: dataNewest, isSuccess } = useGetNewestQuery({
    first: 1,
    last: 12,
  });

  return <NewChapterCarousel slides={dataNewest} />;
};

export default NewChapter;
