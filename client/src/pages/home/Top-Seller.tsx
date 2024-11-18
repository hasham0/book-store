import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BookTS } from "../../types";
import BookCard from "../books/Book-Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChangeEvent, FC, useEffect, useState } from "react";

type Props = {};

const TopSeller: FC<Props> = ({}) => {
  const [books, setBooks] = useState<BookTS[]>([]);
  const categories: Array<string> = [
    "Choose a genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
  ];
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Choose a genre");

  useEffect(() => {
    fetch("bookData.json")
      .then((res) => res.json())
      .then((result) => setBooks(result));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase(),
        );

  return (
    <section className="py-10">
      <h2 className="mb-6 text-3xl font-semibold">Top Sellers</h2>
      {/* category filter */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSelectedCategory(e.target?.value)
          }
          name="category"
          id="category"
          className="rounded-md border border-gray-300 bg-[#EAEAEA] px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index: number) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* books slides */}
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
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default TopSeller;
