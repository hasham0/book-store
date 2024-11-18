import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  totalProductsAmountInCart,
  removeFromCart,
} from "../../redux/features/cart/CartSlice";
import getImgURL from "../../lib/services/getImageUrl";
import { useEffect } from "react";
import Button from "../../components/button";
import { FaPlus, FaMinus } from "react-icons/fa6";

type Props = {};

export default function Cart({}: Props) {
  const dispatched = useAppDispatch();
  const { cartItems, totalAmount } = useAppSelector(
    (state: RootState) => state.cart,
  );

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice * item.quantity, 0)
    .toFixed(2);

  useEffect(() => {
    dispatched(totalProductsAmountInCart(Number(totalPrice)));
  }, [totalPrice]);

  const handleRemoveFromCart = (id: number) => {
    dispatched(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatched(clearCart());
  };
  return (
    <div>
      {" "}
      <div className="mt-12 flex h-full flex-col overflow-hidden bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">
              Shopping cart
            </div>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                onClick={handleClearCart}
                className="relative -m-2 rounded-md bg-red-500 px-2 py-1 text-white transition-all duration-200 hover:bg-secondary"
              >
                <span className="">Clear Cart</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              {cartItems.length > 0 ? (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li key={product?._id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt=""
                          src={`${getImgURL(product?.coverImage)}`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to="/">{product?.title}</Link>
                            </h3>
                            <p className="sm:ml-4">
                              $
                              {(product?.newPrice * product?.quantity).toFixed(
                                2,
                              )}
                            </p>
                          </div>
                          <p className="mt-1 text-sm capitalize text-gray-500">
                            <strong>Category: </strong>
                            {product?.category}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                          <div className="flex items-center gap-3">
                            <Button
                              buttonLabel={<FaPlus />}
                              hanldeClick={() =>
                                dispatched(increaseQuantity(product._id))
                              }
                            />

                            <p className="p-2 text-gray-500">
                              <strong>Qty:</strong> {product.quantity}
                            </p>
                            <Button
                              buttonLabel={<FaMinus />}
                              hanldeClick={() =>
                                dispatched(decreaseQuantity(product._id))
                              }
                            />
                          </div>
                          <div className="flex">
                            <button
                              onClick={() => handleRemoveFromCart(product._id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No product found!</p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalAmount ? totalAmount : 0}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              or
              <button
                type="button"
                className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
