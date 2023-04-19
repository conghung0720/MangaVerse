import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import GetParamsSearch from "../../../../routers/GetParamsSearch";

const FormTags = (): JSX.Element => {
  const theTagsChoose: string[] = JSON.parse(
    process.env.REACT_APP_TAGS || "[]"
  );
  const [isValueTags, setIsValueTags] = useState<string[]>([]);
  const [isSearchParams, setIsSearchParams] = useSearchParams();
  const getAllParams = GetParamsSearch();

  const handleTagsParams = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value : string = String(event.currentTarget.value);
    if (!isValueTags?.includes(value)) {
      setIsValueTags([...isValueTags, value]);
    }
    if (isValueTags?.includes(value)) {
      const checkIndex : number = isValueTags?.findIndex((val) => value === val);
      const removeValue : string[] = isValueTags?.filter(
        (value) => value !== isValueTags[checkIndex]
      );
      setIsValueTags([...removeValue]);
    }
  };

  useEffect(() => {
    getAllParams["tags"] = isValueTags?.join("+") || "";
    setIsSearchParams(getAllParams);
  }, [isSearchParams, isValueTags]);

  return (
    <>
      <div className="mt-4 mb-2 flex justify-between">
        <span>Tags</span>
        <ChevronDownIcon className="h-6 w-6 mr-[-3%] transition duration-400 ease-in-out cursor-pointer hover:rotate-180 " />
      </div>
      <div className="h-[39vh] overflow-y-scroll scrollbar">
        <ul className="space-y-2 flex flex-wrap lg:block">
          {theTagsChoose.map((val, index) => (
            <li className="w-[33%] h-[10%] lg:w-full">
              <CheckBox onChange={handleTagsParams} value={index}>
                {val}
              </CheckBox>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FormTags;
