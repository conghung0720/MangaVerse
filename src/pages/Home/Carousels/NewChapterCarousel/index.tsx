import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@heroicons/react/24/solid";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NewChapterLayout from "../../components/NewChapter/NewChapterLayout";
import { Comics } from "../../../../api/DefineTypeData";

interface DataDisplay {
  slides: Comics[];
}

const NewChapterCarousel: React.FC<DataDisplay> = ({ slides }): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={-30}
        modules={[]}
        className="mySwiper"
      >
        {slides?.map((val) => (
          <SwiperSlide>
            <NewChapterLayout
              authors={val.authors}
              tags={val.tags}
              hearts={val.hearts}
              title={val.title}
              status={val.status}
              summary={val.summary}
              imageSrc={val.imageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewChapterCarousel;
