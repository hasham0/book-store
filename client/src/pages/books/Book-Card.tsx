import { FC } from "react";
import { BsCartPlusFill } from "react-icons/bs";
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
      <div className="flex flex-col rounded-md border p-2 shadow-md md:flex-row">
        <div className="min-h-80">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgURL(book.coverImage)}`}
              alt={book.title}
              className="h-full min-h-80 w-full cursor-pointer rounded-md object-fill transition-all duration-200 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex max-h-80 flex-col items-center justify-between p-3">
          <Link
            to={`/books/${book._id}`}
            className="p-2 text-base font-semibold hover:text-blue-600"
          >
            <h3>{book.title}</h3>
          </Link>
          <p className="mb-5 hidden text-gray-600 md:block">
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
            className="btn-primary"
          >
            <BsCartPlusFill className="size-6 sm:size-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
