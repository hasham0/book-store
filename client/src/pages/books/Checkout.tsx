import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { DeliveryDetailsTS } from "../../lib/validations/delivery-validation";
import { useState } from "react";

type Props = {};

export default function Checkout({}: Props) {
  const { cartItems, totalAmount } = useAppSelector(
    (state: RootState) => state.cart,
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const currentuser = "ali@gmail.com";
  const { register, handleSubmit } = useForm<DeliveryDetailsTS>({
    defaultValues: {
      fullname: "",
      email: currentuser,
      phone_number: "",
      address: "",
      city: "",
      country: "",
      state: "",
      zipcode: "",
    },
  });

  const handleDeliveryDetailsSubmit: SubmitHandler<DeliveryDetailsTS> = (
    values,
  ) => {
    console.log("🚀 ~ Checkout ~ values:", values);
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <div className="container mx-auto max-w-screen-lg">
          <div>
            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-600">
                Cash On Delevary
              </h2>
              <p className="mb-2 text-gray-500">Total Price: ${totalAmount}</p>
              <p className="mb-6 text-gray-500">
                Items:{cartItems.length || Number(0)}
              </p>
            </div>

            <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
              <form
                onSubmit={handleSubmit(handleDeliveryDetailsSubmit)}
                className="my-8 grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3"
              >
                <div className="text-gray-600">
                  <p className="text-lg font-medium">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="fullname">Full Name</label>
                      <input
                        {...register("fullname", { required: true })}
                        type="text"
                        name="fullname"
                        id="fullname"
                        className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        {...register("email", { required: true })}
                        type="text"
                        name="email"
                        id="email"
                        className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                        disabled
                        //                        defaultValue={currentUser?.email}
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        {...register("phone_number", { required: true })}
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                        placeholder="+123 456 7890"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        {...register("address", { required: true })}
                        type="text"
                        name="address"
                        id="address"
                        className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        {...register("city", { required: true })}
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                        <input
                          {...register("country", { required: true })}
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                        />
                        <button
                          tabIndex={-1}
                          className="cursor-pointer text-gray-300 outline-none transition-all hover:text-red-600 focus:outline-none"
                        >
                          <svg
                            className="mx-2 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex={-1}
                          className="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-blue-600 focus:outline-none"
                        >
                          <svg
                            className="mx-2 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                        <input
                          {...register("state", { required: true })}
                          name="state"
                          id="state"
                          placeholder="State"
                          className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                        />
                        <button className="cursor-pointer text-gray-300 outline-none transition-all hover:text-red-600 focus:outline-none">
                          <svg
                            className="mx-2 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex={-1}
                          className="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-blue-600 focus:outline-none"
                        >
                          <svg
                            className="mx-2 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        {...register("zipcode")}
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="mt-1 flex h-10 w-full items-center rounded border bg-gray-50 px-4 transition-all"
                        placeholder=""
                      />
                    </div>

                    <div className="mt-3 md:col-span-5">
                      <div className="inline-flex items-center">
                        <input
                          onClick={() => setIsChecked((pre) => !pre)}
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="form-checkbox"
                        />
                        <label htmlFor="billing_same" className="ml-2">
                          I am aggree to the{" "}
                          <Link
                            to={""}
                            className="text-blue-600 underline underline-offset-2"
                          >
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            to={""}
                            className="text-blue-600 underline underline-offset-2"
                          >
                            Shoping Policy.
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="text-right md:col-span-5">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          disabled={!isChecked}
                          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        >
                          Place an Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
