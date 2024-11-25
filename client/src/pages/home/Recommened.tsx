import "swiper/css";
import "swiper/css/pagination";
import { BookTS } from "../../types";
import BookCard from "../books/Book-Card";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type Props = {};

const Recommened: FC<Props> = ({}) => {
  const [books, setBooks] = useState<BookTS[]>([]);

  useEffect(() => {
    fetch("bookData.json")
      .then((res) => res.json())
      .then((result) => setBooks(result));
  }, []);
  return (
    <section className="py-6">
      <h2 className="mb-6 text-3xl font-semibold">Recommended for you </h2>
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
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(7, 14).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Recommened;
