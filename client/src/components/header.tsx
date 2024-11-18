import { FC, useState } from "react";
import AvatarImg from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineHeart, HiOutlineUser, HiShoppingCart } from "react-icons/hi";
import { navigation } from "../utils/navigation-items";
import { useAppSelector } from "../redux/hooks/hooks";
import { RootState } from "../redux/store";

type Props = {};

const Header: FC<Props> = ({}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const cartItemsLength = useAppSelector(
    (state: RootState) => state.cart.cartItems.length,
  );

  const currentUser: boolean = false;
  return (
    <header className="mx-auto max-w-screen-2xl px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* <!-- left side --> */}
        <div className="flex items-center gap-4 md:gap-16">
          {/* hamburger menu */}
          <Link to={"/"}>
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* search bar */}
          <div className="relative w-40 space-x-2 sm:w-72">
            <IoSearchOutline className="absolute inset-y-2 left-4 inline-block" />

            <input
              type="text"
              placeholder="Search here"
              className="w-full rounded-md bg-[#EAEAEA] px-8 py-1 focus:outline-none md:px-8"
            />
          </div>
        </div>
        {/* <!-- right side --> */}
        <div className="relative flex items-center space-x-2 md:space-x-3">
          <div className="">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen((pre) => !pre)}>
                  <img
                    src={AvatarImg}
                    alt="avatar"
                    className={`${currentUser && "ring-2 ring-blue-500"} size-7 rounded-full`}
                  />
                </button>
                {/* show dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 z-40 mt-2 w-48 rounded-md bg-white shadow-lg">
                    <ul className="py-2">
                      {navigation.map((item, index: number) => (
                        <li
                          key={index}
                          onClick={() => setIsDropdownOpen((pre) => !pre)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to={"/login"}>
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to={"/cart"}
            className="flex items-center rounded-md bg-primary p-1 px-2 sm:px-6"
          >
            <HiShoppingCart className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItemsLength}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
