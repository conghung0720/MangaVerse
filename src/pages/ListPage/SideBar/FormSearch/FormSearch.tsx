import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Keyword } from "../..";

const FormSearch= ({keyword} : Keyword ) => {
  const [isSearchParams, setIsSearchParams] = useSearchParams();

  const [isKeywordSearch, setIsKeywordSearch] = useState<string>(keyword);
  
  //////////////////////////
  let checkAllParams: IterableIterator<[string, string]> =
    isSearchParams.entries();

  let getAllParams: Record<string, string> = {};

  for (let [key, value] of checkAllParams) {
    getAllParams[key] = value;
  }
  //Above code doing get all current params
  ///////////////////

  const handleSearchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    setIsKeywordSearch(value);
    getAllParams["keyword"] = value;
    setIsSearchParams(getAllParams);
  };

  return (
    <form className=" mt-7 flex border-b border-slate-600  items-center">
      <MagnifyingGlassIcon className="h-6 w-6 text-slate-500 black-3" />
      <input
        onChange={handleSearchKeyword}
        value={isKeywordSearch}
        type="text"
        placeholder="Search here"
        className="w-full h-10 black-3 ml-3 focus:outline-none"
      />
    </form>
  );
};

export default FormSearch;
