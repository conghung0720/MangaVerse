import React from "react";
import Pagination from "../../../components/Pagination/Pagination";
import DisplayComic from "./DisplayComic/DisplayComic";
import Settings from "./Settings/Settings";
import { useGetAllSizeQuery } from "../../../api/api";
import { Keyword } from "..";

interface SizeData extends Keyword {
  SizeData : number
}

const ListComic  = (props : SizeData) => {
  return (
    <>
      <main className="lg:w-[72%] lg:ml-[5%] inline-flex flex-wrap">
        <Settings />
        <DisplayComic keyword={props.keyword}/>
        {<Pagination sizePagination={props.SizeData} />}
      </main>
    </>
  );
};

export default ListComic;
