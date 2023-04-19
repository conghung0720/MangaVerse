import React from "react";
import ButtonGreen from "../../../components/Button/ButtonGreen";
import FormSearch from "./FormSearch/FormSearch";
import FormTags from "./FormTags/FormTags";
import RouterList from "./RouterList/RouterList";
import Type from "./Type/Type";
import { Keyword } from "..";

const SideBar = (props : Keyword) => {
  return (
    <div className="black-3 rounded-lg w-full lg:w-[30%] p-5 lg:h-[50%]">
      <RouterList />
      <FormSearch keyword={props.keyword}/>
      <FormTags />
      <Type />
      {/* <ButtonGreen>Apply filter</ButtonGreen> */}
    </div>
  );
};

export default SideBar;
