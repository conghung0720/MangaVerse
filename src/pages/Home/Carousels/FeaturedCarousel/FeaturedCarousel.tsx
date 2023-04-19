import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LayoutFeatured from "../../components/Featured/LayoutFeatured";

// import Swiper and modules styles
import "../FeaturedCarousel/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ButtonLeft, ButtonRight } from "./ButtonPrevAndNext";
import { DataDisplayCarousel } from "../../DefineType.types";

const FeaturedCarousel = ({ slides }: DataDisplayCarousel): JSX.Element => {
  return (
    <Swiper
      spaceBetween={-30}
      slidesPerView={2}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".next-slide",
        prevEl: ".prev-slide",
      }}
      modules={[Navigation, Pagination]}
    >
      {slides.map((val) => (
        <SwiperSlide>
          <LayoutFeatured
            title={val.title}
            imageSrc={val.imageSrc}
            rating={val.rating}
            tags={val.tags}
            author={val.author}
          />
        </SwiperSlide>
      ))}
      <div className="flex justify-center text-yellow-600 mt-[-2%] gap-[10%]">
        <ButtonLeft />
        <ButtonRight />
      </div>
    </Swiper>
  );
};
export default FeaturedCarousel;
