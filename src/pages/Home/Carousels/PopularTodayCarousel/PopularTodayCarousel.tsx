import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PopularTodayLayout from "../../components/PopularToday/PopularTodayLayout";
import { DefineDataManga } from "../../DefineType.types";


interface DataInput {
  slides: DefineDataManga[];
}

const index = ({ slides }: DataInput) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((val) => (
          <SwiperSlide>
            <PopularTodayLayout
              title={val.title}
              rating={val.rating}
              author={val.author}
              tags={val.tags.map((value, index) =>
                index !== val.tags.length - 1 ? value + ", " : value
              )}
              imageSrc={val.imageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default index;
