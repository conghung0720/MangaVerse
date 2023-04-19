import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const GetParamsSearch = (): Record<string, string> => {
  const [isSerachParams, setIsSearchParams] = useSearchParams();
  const [isGetAllParams, setIsGetAllParams] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    const checkAllParams: IterableIterator<[string, string]> =
      isSerachParams.entries();
    for (let [key, value] of checkAllParams) {
      isGetAllParams[key] = value;
    }
  }, [setIsSearchParams]);
  return isGetAllParams;
};

export default GetParamsSearch;
