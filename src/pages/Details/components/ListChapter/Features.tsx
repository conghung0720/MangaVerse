import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findChapter,
  pushListChapter,
  reverseListChapter,
} from "../../../../store/actions/sortListChapter";
// import { addData } from "../../../store/features/sortListChapter";
import { store, useAppDispatch } from "../../../../store/store";

const Features = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSort = (): void => {
    dispatch(reverseListChapter());
  };

  const handFindChapter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(findChapter(event.target.value));
  };

  return (
    <>
      <div className="w-full mb-[5%] flex justify-between">
        <span className="font-bold">ALL MANGA CHAPTER</span>
        <div className="">
          <input
            type="text"
            placeholder="Jump to"
            className="focus:outline-none border-b-[1px] border-b-slate-400 black-3 rounded-lg text-center w-[50%] h-[80%]"
            onChange={handFindChapter}
          />
          <button
            className="black-2 py-2 px-5 w-[40%] rounded-[20px] ml-2"
            onClick={handleSort}
          >
            Sort
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
