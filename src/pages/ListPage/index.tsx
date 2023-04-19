import React from "react";
import { useGetAllSizeQuery, useGetNewestQuery } from "../../api/api";
import Header from "../../components/Header/Header";
import ListComic from "./ListComic/ListComic";
import Filter from "./SideBar/SideBar";
import { useSearchParams } from "react-router-dom";

export interface Keyword {
  keyword: string;
}

const ListPage = () => {
  let [isSearchParams, setIsSearchParams] = useSearchParams();
  const { data: sizeData, isSuccess } = useGetAllSizeQuery(1);
  let currentSearch: string = isSearchParams.get("keyword") || "";

  return (
    <>
      <Header />
      <main className="lg:p-12 lg:flex">
        <Filter keyword={currentSearch} />
        {isSuccess && <ListComic keyword={currentSearch} SizeData={sizeData} />}
      </main>
    </>
  );
};

export default ListPage;
