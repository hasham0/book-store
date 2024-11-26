import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "../books/Book-Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChangeEvent, FC, useState } from "react";
import { useAllBooksQuery } from "../../redux/api/bookApi";

type Props = {};

const TopSeller: FC<Props> = ({}) => {
  const { data: books, isLoading, isError } = useAllBooksQuery();

  const categories: Array<string> = [
    "Choose a genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
  ];
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Choose a genre");

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books?.data
      : books?.data.filter(
          (book) => book.category === selectedCategory.toLowerCase(),
        );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>something went wrong</div>;

  return (
    <section className="py-6">
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
        {filteredBooks?.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopSeller;
