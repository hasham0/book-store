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
    <div className="flex justify-center rounded-lg p-4 transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row">
        <div className="h-80 min-h-80">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgURL(book.coverImage)}`}
              alt={book.title}
              className="h-full min-h-80 w-full cursor-pointer rounded-md object-fill p-2 transition-all duration-200 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex max-h-80 flex-col items-center justify-between">
          <Link to={`/books/${book._id}`}>
            <h3 className="mb-3 p-1 text-sm font-semibold hover:text-blue-600">
              {book.title}
            </h3>
          </Link>
          <p className="mb-5 hidden text-gray-600 sm:block">
            {book?.description.length > 30
              ? `${book.description.slice(0, 30)}...`
              : book?.description}
          </p>
          <p className="mb-5 font-medium">
            ${book.newPrice}
            <span className="ml-2 font-normal line-through">
              ${book.oldPrice}
            </span>
          </p>

          <button
            type="button"
            onClick={hanldeAddToCart}
            className="btn-primary flex items-center gap-x-3"
          >
            <FiShoppingCart className="size-6 sm:size-8" />
            <p className="text-sm sm:font-bold">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
