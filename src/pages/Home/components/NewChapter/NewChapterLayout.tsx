import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import sliceStrings from "../../../../utils/sliceStrings";
import BaseContainer from "../../../../components/BaseContainer/BaseContainer";
import { Comics } from "../../../../api/DefineTypeData";

const NewChapterLayout: React.FC<Comics> = (props) => {
  return (
    <BaseContainer
      marginTop="mt-[20%]"
      limitTextSummary={160}
      width="w-[90%]"
      authors={props.authors}
      tags={props.tags}
      hearts={props.hearts}
      title={props.title}
      status={props.status}
      summary={props.summary}
      imageSrc={props.imageSrc}
    />
  );
};

export default NewChapterLayout;
