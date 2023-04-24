import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ChevronLeftIcon as ButtonBackPage,
  ChevronRightIcon as ButtonNextPage,
} from "@heroicons/react/24/solid";
import { useSearchParams } from "react-router-dom";
import GetParamsSearch from "../../routers/GetParamsSearch";
import { current } from "@reduxjs/toolkit";

const Pagination: React.FC<{ sizePagination: number }> = (
  props
): JSX.Element => {
  let [searchParams, setSearchParams] = useSearchParams();
  const isGetAllParams: Record<string, string> = GetParamsSearch();
  
  
  let currentPage: number = Number(searchParams.get("page")) || 1;
  const sizePagination: number = props.sizePagination;
  let fullSizePage: number = useMemo(
    () =>
      Math.round(sizePagination / 6) > 5 ? 5 : Math.round(sizePagination / 6),
    [sizePagination]
  );
  let lastPage: number = Math.round(sizePagination / 6) + 1;

  const multiPages: number[] = useMemo(() => {
    return new Array(fullSizePage).fill(null).map((_, index) => {
      if (currentPage > 3 && currentPage <= lastPage - 2) {
        return index + currentPage - 2;
      }
      
      if (currentPage > 3 && currentPage > lastPage - 2) {
        return lastPage + index - 4;
      }
      return 1 + index;
    });
  }, [currentPage]);

  const clickNumberChangePage = useCallback(
    (value: string) => () => {
      isGetAllParams["page"] = value;
      setSearchParams(isGetAllParams);
    },
    [setSearchParams]
  );

  const handleBackPage = () => {
    isGetAllParams["page"] = String(currentPage - 1);
    currentPage > 1 && setSearchParams(isGetAllParams);
  };

  const handleNextPage = () => {
    isGetAllParams["page"] = String(currentPage + 1);
    setSearchParams(isGetAllParams);
  };

  if (sizePagination <= 0 || currentPage > fullSizePage) return <></>;

  return (
    <div className="shadow-lg text-center flex items-center rounded-[7px] w-[60%] border-slate-50 lg:w-[40%] justify-center gap-2 m-auto h-[60px] lg:h-[50px] mt-[3%]">
      <p className=" h-[70%] rounded-[7px] w-[10%] flex items-center">
        <ButtonBackPage
          className="h-5 w-5 m-auto cursor-pointer"
          onClick={handleBackPage}
        />
      </p>
      {multiPages.map((val) => (
        <p
          key={val}
          id="pagination"
          onClick={clickNumberChangePage(String(val))}
          className={`${
            val === currentPage ? "bg-slate-600" : ""
          } h-[70%] rounded-[7px] cursor-pointer w-[100%] lg:w-[8%] flex items-center justify-center`}
        >
          {val}
        </p>
      ))}
      <p className="h-[70%] rounded-[7px] w-[10%] flex items-center justify-center">
        <ButtonNextPage
          className="h-5 w-5 cursor-pointer"
          onClick={handleNextPage}
        />
      </p>
    </div>
  );
};

export default Pagination;
