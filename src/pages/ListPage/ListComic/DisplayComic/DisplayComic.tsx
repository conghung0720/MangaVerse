import BaseContainer from "../../../../components/BaseContainer/BaseContainer";
import { useFilterDataQuery, useGetNewestQuery } from "../../../../api/api";
import { useSearchParams } from "react-router-dom";
import { Keyword } from "../..";


const DisplayComic = ({keyword} : Keyword): JSX.Element => {
  let [isSearchParams, setIsSearchParams] = useSearchParams();
  let currentPage: number = Number(isSearchParams.get("page")) || 1;
  let lastForSliceData: number = currentPage * 5 + currentPage;
  let firstForSliceData: number = lastForSliceData - 5;

  const { data: isDataDisplay } = useFilterDataQuery({
    tags: isSearchParams.get("tags"),
    search: keyword,
    first: firstForSliceData,
    last: lastForSliceData,
  });

  return (
    <>
      {isDataDisplay?.map((val : any) => (
        <BaseContainer
          marginTop="mt-[6%]"
          limitTextSummary={150}
          width="lg:w-[46%]"
          imageSrc={val.imageSrc}
          title={val.title}
          status={val.status}
          authors={val.authors}
          tags={val.tags}
          summary={val.summary}
          hearts={val.hearts}
          link={val.dataOfChapter[0].link}
        />
      ))}
    </>
  );
};

export default DisplayComic;
