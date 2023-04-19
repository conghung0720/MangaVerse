import React from "react";
import PopularTodayCarousel from "../../Carousels/PopularTodayCarousel/PopularTodayCarousel";

const slides = [
  {
    rating: 3,
    imageSrc: "https://img.abctruyen.xyz/uploads/1787/chuong-2020/10.jpg",
    title: "Boruto",
    author: "Masashi Kishimoto",
    tags: ["Action", "Fantasy", "Super Power"],
  },
  {
    rating: 4,
    imageSrc: "https://img.abctruyen.xyz/uploads/1787/chuong-2020/10.jpg",
    title: "Boruto",
    author: "Masashi Kishimoto",
    tags: ["Action", "Fantasy", "Super Power"],
  },
  {
    rating: 4,
    imageSrc: "https://img.abctruyen.xyz/uploads/1787/chuong-2020/10.jpg",
    title: "Boruto",
    author: "Masashi Kishimoto",
    tags: ["Action", "Fantasy", "Super Power"],
  },
  {
    rating: 4,
    imageSrc: "https://img.abctruyen.xyz/uploads/1787/chuong-2020/10.jpg",
    title: "Boruto",
    author: "Masashi Kishimoto",
    tags: ["Action", "Fantasy", "Super Power"],
  },
];

const PopularToday = () => {
  return <PopularTodayCarousel slides={slides} />;
};

export default PopularToday;
