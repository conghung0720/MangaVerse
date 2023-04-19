import { Link } from "react-router-dom";
import { store, useAppDispatch, useAppSelector } from "../../../../store/store";
import Features from "./Features";

const ListChapter = (): JSX.Element => {
  const dataListChapter = useAppSelector((state) => state.sortList.dataFilter);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-y-4 px-2 lg:w-[85%] lg:m-auto lg:mt-[5%] lg:gap-4">
        <Features />
        {dataListChapter?.map((value, index) =>
          value.chapter.map((chapter: string, index) => (
            <Link
              className="black-2 cursor-pointer flex items-center p-4 w-full rounded-[10px] h-12 text-[16px] font-semibold lg:w-[24%] lg:h-[5em]"
              to={`${value.chapter_url[index]}`}
            >
              Chapter {chapter}
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default ListChapter;
