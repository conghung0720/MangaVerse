import React from "react";
import { NavLink } from "react-router-dom";



const RouterList = () => {
  const isHighLight  = {
    actived: "text-white font-medium text-[19px]",
    nonActived: "text-gray-400 text-[19px]",
  };

  const linkTo = [
    {
      link: "/list-chapter",
      nameLink: "List Manga",
    },
    {
      link: "/bookmark-list",
      nameLink: "Bookmark",
    },
    {
      link: "/my-collection",
      nameLink: "My Collection",
    },
  ];

  return (
    <>
      <div className=" flex justify-between">
        {linkTo.map((val) => (
          <NavLink
            to={val.link}
            className={({ isActive }) =>
              isActive ? isHighLight.actived : isHighLight.nonActived
            }
          >
            {val.nameLink}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default RouterList;
