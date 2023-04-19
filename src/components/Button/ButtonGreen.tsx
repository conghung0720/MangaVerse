import React from "react";

interface TextInButton {
  children: string | number;
}

const ButtonGreen = (props: TextInButton) => {
  return (
    <button className="w-full h-auto py-4 green rounded-lg">
      {props.children}
    </button>
  );
};

export default ButtonGreen;
