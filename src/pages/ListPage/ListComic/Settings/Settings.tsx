import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const router = [
    {
      route: "/list-chapter",
      displayName: "All Comic",
    },
    {
      route: "/list-chapter",
      displayName: "New",
    },
    {
      route: "/list-chapter",
      displayName: "Popular Today",
    },
    {
      route: "/list-chapter",
      displayName: "Top Author",
    },
  ];

  return (
    <div className="flex justify-between py-4 w-full h-[5%]">
      {router.map((val) => (
        <Link to={val.route}>{val.displayName}</Link>
      ))}
    </div>
  );
};

export default Settings;
