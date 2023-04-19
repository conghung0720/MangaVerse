import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../../api/api";
import Header from "../../components/Header/Header";
import { pushListChapter } from "../../store/actions/sortListChapter";
import { store } from "../../store/store";
import HeadDetails from "./components/HeadDetails/HeadDetails";
import ListChapter from "./components/ListChapter/ListChapter";

const Details = (): JSX.Element => {
  const { nameOfComics } = useParams();
  const { data: isData, isSuccess } = useGetDetailsQuery({ url: nameOfComics });
  const dataForListChapter = isData?.at(0).dataOfChapter;

  store.dispatch(pushListChapter(dataForListChapter));

  return (
    <>
      <Header />
      {isSuccess && <HeadDetails isData={isData} />}
      {isSuccess && <ListChapter />}
    </>
  );
};

export default Details;
