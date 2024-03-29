import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddress,
  fetchCreditCard,
  saveCard,
} from "../../../store/actions/shoppingCartAction";
//pages
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import OrderNow from "./Order";
//icons
import { FaAddressBook, FaRegCreditCard } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import CreditInstallment from "./CreditInstallment";
import SavedCards from "./SavedCards";

const CreditCard = () => {
  const [sum, setSum] = useState(0);
  const addressStore = useSelector((store) => store.cart.address);
  const cart = useSelector((store) => store.cart.cart);
  const creditCard = useSelector((store) => store.cart.payment);

  const dispatch = useDispatch();

  let singleAddress = addressStore[0];
  let addressId = addressStore[0]?.id;

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 19);

  const userProducts = cart?.map((item) => {
    const { count } = item;
    const { id, name } = item.product;

    return { product_id: id, count, detail: name };
  });

  const orderData = {
    address_id: addressId,
    order_date: formattedDate,
    card_no: creditCard[0]?.card_no,
    card_name: creditCard[0]?.name_on_card,
    card_expire_month: parseInt(
      String(creditCard[0]?.expire_month).padStart(2, "0")
    ),
    card_expire_year: creditCard[0]?.expire_year,
    card_ccv: 123,
    price: parseInt(
      sum.toFixed(2) > 500
        ? sum.toFixed(2)
        : (Number(sum.toFixed(2)) + 50).toFixed(2)
    ),
    products: userProducts,
  };

  useEffect(() => {
    let summary = 0;
    cart.forEach((item) => {
      summary += item.product.price * item.count;
    });
    setSum(summary);
  }, [cart]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
      card_ccv: "",
    },
    mode: "all",
  });

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber == null) {
      return;
    }
    const formattedNumber =
      "(" +
      phoneNumber.slice(1, 4) +
      ") " +
      phoneNumber.slice(4, 7) +
      " *** ** " +
      phoneNumber.slice(9);
    return formattedNumber;
  };

  useEffect(() => {
    dispatch(fetchCreditCard());
    dispatch(fetchAddress());
  }, []);

  const handleForm = (data) => {
    const card = {
      card_no: data.card_no,
      expire_month: data.expire_month,
      expire_year: data.expire_year,
      name_on_card: data.name_on_card,
    };
    dispatch(saveCard(card));
  };

  return (
    <>
      <Header />
      <section className="m-10 text-clip mb-20">
        <div className="flex xs:justify-center middle:justify-around flex-wrap">
          <div className="gap-4">
            <div className="flex flex-wrap middle:justify-normal xs:justify-center mb-10 gap-3">
              <div className="text-dark-navy">
                <div className="flex flex-wrap justify-center">
                  <div className="mb-1 border-[1px] bg-slate-400/20 p-5">
                    <h1 className="text-xl font-bold mb-5 mt-5 flex items-center gap-2">
                      Shipping Address
                      <FaAddressBook />
                    </h1>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-1">
                        <p className="font-bold">
                          {singleAddress?.title
                            ? singleAddress.title.charAt(0).toUpperCase() +
                              singleAddress.title.slice(1)
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div className="xs:w-full middle:w-[338px]">
                      <div>
                        <div className="flex text-sm font-bold gap-8">
                          <div className="flex items-center gap-1">
                            <span>
                              {singleAddress?.name} {singleAddress?.surname}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <IoIosPhonePortrait className="text-xl" />
                            <span>
                              {formatPhoneNumber(singleAddress?.phone)}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm mt-5 font-bold">
                          <p>{singleAddress?.address}</p>
                          <p>
                            {singleAddress?.district}/{singleAddress?.city}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-1 border-[1px] border-b-[5px] p-5 w-[352px] border-b-primary-blue/70 shadow-xl">
                    <h1 className="text-xl font-bold mb-5 mt-5 text-primary-blue flex items-center gap-2">
                      Payment Options
                      <FaRegCreditCard />
                    </h1>
                    <div>
                      <p className="text-sm">
                        You can make payment via{" "}
                        <span className="font-bold">BANK AND CREDIT CARD</span>{" "}
                        OR <span className="font-bold">SHOPPING CREDIT</span>
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-10 text-left mt-10 pl-5">
                  Credit Card Information
                </h1>
                <div className="mb-10 flex flex-wrap xs:justify-center middle:justify-normal">
                  <div className="px-16 rounded-md border-r-[1px]">
                    <form onSubmit={handleSubmit(handleForm)}>
                      <div className="mb-2 flex flex-col">
                        <label htmlFor="card" className="font-medium">
                          Credit Card Number*
                        </label>
                        <input
                          type="text"
                          id="card"
                          name="card"
                          className="bg-slate-400/20 py-2 rounded-md mt-2 px-3"
                          {...register("card_no", {
                            required: "Card field is required!",
                            pattern: {
                              value: /^[0-9]{16}$/,
                              message: "Please enter a valid credit card.",
                            },
                          })}
                        />
                        {errors.card_no && (
                          <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                            {errors.card_no?.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 flex flex-col">
                        <label htmlFor="name" className="font-medium">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="bg-slate-400/20 py-2 rounded-md mt-2 px-3"
                          {...register("name_on_card", {
                            required: "Name field is required!",
                            pattern: {
                              value: /^[a-zA-ZğĞüÜşŞıİöÖçÇ\s]+$/u,
                              message: "Please enter a valid name!",
                            },
                          })}
                        />
                        {errors.name_on_card && (
                          <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                            {errors.name_on_card?.message}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-5">
                        <div className="">
                          <p className="mt-2 font-medium">Expire Date*</p>
                          <select
                            id="month"
                            name="month"
                            className="bg-slate-400/20 w-28 py-2 rounded-md mt-2 mr-3 px-1"
                            {...register("expire_month", {
                              required: "Month*",
                            })}
                          >
                            <option value="" defaultValue>
                              Month
                            </option>
                            {[...Array(12).keys()].map((month) => (
                              <option
                                key={month + 1}
                                value={String(month + 1).padStart(2, "0")}
                              >
                                {String(month + 1).padStart(2, "0")}
                              </option>
                            ))}
                          </select>
                          {errors?.expire_month && (
                            <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                              {errors.expire_month?.message}
                            </p>
                          )}
                          <select
                            id="year"
                            name="year"
                            className="bg-slate-400/20 w-28 py-2 rounded-md mt-2 px-2"
                            {...register("expire_year", {
                              required: "Year*",
                            })}
                          >
                            <option value="" defaultValue>
                              Year
                            </option>
                            {[...Array(10).keys()].map((index) => {
                              const startYear = 2023;
                              const nextYear = startYear + index;
                              return (
                                <option key={nextYear} value={nextYear}>
                                  {nextYear}
                                </option>
                              );
                            })}
                          </select>
                          {errors.expire_year && (
                            <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                              {errors.expire_year?.message}
                            </p>
                          )}
                        </div>
                        <div className="mt-2">
                          <p className="font-medium">CVV*</p>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            className="bg-slate-400/20 w-20 py-2 rounded-md mt-2 px-2"
                            {...register("card_ccv", {
                              required: "CCV*",
                              pattern: {
                                value: /^\d{3}$/,
                                message: "CCV*",
                              },
                            })}
                          />
                          {errors.card_ccv && (
                            <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                              {errors.card_ccv?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-end mt-10">
                        <button
                          className="flex flex-col items-center gap-3 text-xl
                        bg-primary-blue px-5 py-2 rounded-md text-white hover:bg-dark-navy
                            ease-in-out duration-500"
                          disabled={!isValid}
                        >
                          SAVE
                        </button>
                      </div>
                    </form>
                    <SavedCards />
                  </div>
                  <CreditInstallment />
                </div>
              </div>
            </div>
          </div>
          <div>
            <OrderNow orderData={orderData} />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <NavLink
            to="/shopping"
            className="text-primary-blue font-medium text-end"
          >
            <p
              className="bg-sky-200 border-[1px] border-sky-200 hover:bg-white 
            ease-in-out duration-500 px-2 py-2"
            >
              Continue Shopping
            </p>
          </NavLink>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default CreditCard;
