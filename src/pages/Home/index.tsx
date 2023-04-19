import React from "react";
import Featured from "./components/Featured/Featured";
import NewChapter from "./components/NewChapter/NewChapter";
import Header from "../../components/Header/Header";
import PopularToday from "./components/PopularToday/PopularToday";

const index = (): JSX.Element => {
  return (
    <>
      <Header />
      <Featured />
      <NewChapter />
      <PopularToday />
    </>
  );
};

export default index;
