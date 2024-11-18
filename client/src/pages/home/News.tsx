import "swiper/css";
import { FC } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { news } from "../../utils/new-items";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type Props = {};

const News: FC<Props> = ({}: Props) => {
  return (
    <section className="py-16">
      <h2 className="mb-6 text-3xl font-semibold">News </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news.length > 0 &&
          news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-between">
                {/* content */}
                <div className="py-4">
                  <Link to="/">
                    <h3 className="mb-4 text-lg font-medium hover:text-blue-500">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="mb-5 h-[4px] w-12 bg-primary"></div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default News;
