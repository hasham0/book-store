import { FC } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BookTS } from "../../types";
import { Link } from "react-router-dom";
import getImgURL from "../../lib/services/getImageUrl";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { addToCart } from "../../redux/features/cart/CartSlice";

type Props = {
  book: BookTS;
};

const BookCard: FC<Props> = ({ book }) => {
  const dispatched = useAppDispatch();
  const hanldeAddToCart = () => dispatched(addToCart(book));

  return (
    <div className="flex rounded-lg p-4 transition-shadow duration-300">
      <div className="flex flex-col gap-4 sm:h-72 sm:flex-row sm:items-center sm:justify-center">
        <div className="rounded-md sm:h-72 sm:flex-shrink-0">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgURL(book.coverImage)}`}
              alt={book.title}
              className="w-full cursor-pointer rounded-md bg-cover p-2 transition-all duration-200 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex h-72 flex-col justify-between">
          <Link to={`/books/${book._id}`}>
            <h3 className="mb-3 text-base font-semibold hover:text-blue-600">
              {book.title}
            </h3>
          </Link>
          <p className="mb-5 overflow-hidden text-gray-600">
            {book?.description.length > 60
              ? `${book.description.slice(0, 50)}...`
              : book?.description}
          </p>
          <p className="mb-5 font-medium">
            ${book.newPrice}{" "}
            <span className="ml-2 font-normal line-through">
              ${book.oldPrice}
            </span>
          </p>
          <button
            type="button"
            onClick={hanldeAddToCart}
            className="btn-primary flex items-center gap-1 space-x-1 px-6"
          >
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
