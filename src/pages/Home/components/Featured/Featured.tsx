import React from "react";
import FeaturedCarousel from "../../Carousels/FeaturedCarousel/FeaturedCarousel";
import { StarIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    id: 1,
    imageSrc:
      "https://honeysanime.com/wp-content/uploads/2022/10/ao-no-hako-wallpaper-700x394.jpg",
    title: "Blue Box",
    rating: 5,
    tags: ["Action"],
    author: "Fukii",
  },
  {
    id: 2,
    imageSrc:
      "https://honeysanime.com/wp-content/uploads/2022/10/ao-no-hako-wallpaper-700x394.jpg",
    title: "Another Title",
    rating: 4,
    tags: ["Drama"],
    author: "Another Author",
  },
  {
    id: 3,
    imageSrc:
      "https://honeysanime.com/wp-content/uploads/2022/10/ao-no-hako-wallpaper-700x394.jpg",
    title: "Another Title",
    rating: 4,
    tags: ["Drama"],
    author: "Another Author",
  },
];

const Featured = () => {
  return (
    <>
      <div className="w-[94%] mt-10 m-auto">
        <div className=" w-[90%] mb-5 text-[20px] font-semibold m-auto">
          Featured
        </div>
        <FeaturedCarousel slides={slides} />
      </div>
    </>
  );
};

export default Featured;
