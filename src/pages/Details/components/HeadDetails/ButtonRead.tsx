import React from "react";

const ButtonRead: React.FC<{ children: string}> = (props) => {
  return (
    <button className="bg-rose-600 rounded-[5px] py-2 px-6">
      {props.children}
    </button>
  );
};

export default ButtonRead;
