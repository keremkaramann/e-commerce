import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddress,
  fetchCreditCard,
  saveCard,
} from "../../store/actions/shoppingCartAction";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaAddressBook, FaRegCreditCard } from "react-icons/fa";
import OrderNow from "../Repetitive/Order";

const CreditCard = () => {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const addressStore = useSelector((store) => store.cart.address);
  const creditCards = useSelector((store) => store.cart.payment);
  let singleAddress = addressStore[0];

  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.cart);
  const shippingCost = 50;
  const lastPrice =
    totalPrice.toFixed(2) > 500
      ? totalPrice.toFixed(2)
      : (Number(totalPrice.toFixed(2)) + shippingCost).toFixed(2);

  useEffect(() => {
    let sum = 0;

    cartItems.forEach((item) => {
      sum += item.product.price * item.count;
    });

    setTotalPrice(sum);
  }, [cartItems]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      card: "",
      month: "",
      year: "",
      cvv: "",
    },
    mode: "all",
  });

  const dispatch = useDispatch();

  const handleAddNewAddress = () => {
    setShowAddressInput(!showAddressInput);
  };

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
    dispatch(saveCard(data));
  };
  return (
    <>
      <Header />
      <section className="m-10 text-clip mb-20">
        <div className="flex xs:justify-center middle:justify-around flex-wrap">
          <div className="gap-4">
            <div className="flex flex-wrap middle:justify-normal xs:justify-center mb-10 gap-3">
              <div className="text-dark-navy">
                <div className="flex">
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
                <div className="mb-10 flex">
                  <div className="px-16 rounded-md border-r-[1px]">
                    <label htmlFor="card" className="font-medium">
                      Credit Card Number*
                    </label>
                    <form onSubmit={handleSubmit(handleForm)}>
                      <div>
                        <input
                          type="text"
                          id="card"
                          name="card"
                          className="bg-slate-400/20 w-60 py-2 rounded-md mt-2 px-3"
                          {...register("card", {
                            required: "Card field is required!",
                            pattern: {
                              value: /^[0-9]{16}$/,
                              message: "Please enter a valid credit card.",
                            },
                          })}
                        />
                        {errors.card && (
                          <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                            {errors.card?.message}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-5">
                        <div className="">
                          <p className="mt-2 font-medium">Expire Date*</p>
                          <select
                            id="month"
                            name="month"
                            className="bg-slate-400/20 w-20 py-2 rounded-md mt-2 mr-3 px-1"
                            {...register("month", {
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
                          {errors?.month && (
                            <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                              {errors.month?.message}
                            </p>
                          )}
                          <select
                            id="year"
                            name="year"
                            className="bg-slate-400/20 w-20 py-2 rounded-md mt-2 px-2"
                            {...register("year", {
                              required: "Year*",
                            })}
                          >
                            <option value="" defaultValue>
                              Year
                            </option>
                            {[...Array(15).keys()].map((index) => {
                              const startYear = 2023;
                              const nextYear = startYear + index;
                              return (
                                <option key={nextYear} value={nextYear}>
                                  {nextYear}
                                </option>
                              );
                            })}
                          </select>
                          {errors.year && (
                            <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                              {errors.year?.message}
                            </p>
                          )}
                        </div>
                        <div className="mt-2">
                          <p className="font-medium">CVV*</p>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            className="bg-slate-400/20 w-12 py-2 rounded-md mt-2 px-2"
                            {...register("cvv", {
                              required: "CVV*",
                              pattern: {
                                value: /^[0-9]{3}$/,
                                message: "CVV*",
                              },
                            })}
                          />
                          {errors.cvv && (
                            <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                              {errors.cvv?.message}
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
                    <div className="mb-5 mt-10">
                      <div className="flex justify-between mb-2">
                        <div className="flex gap-1">
                          <input
                            type="radio"
                            id="titleAddress"
                            name="titleAddress"
                            defaultChecked
                          />
                          <label htmlFor="titleAddress">asdsd</label>
                        </div>
                      </div>
                      <div className="bg-slate-300/20 border-2 border-red-600 px-3 py-5 rounded-md xs:w-full middle:w-[338px]">
                        <div>
                          <div className="flex items-center justify-between gap-1">
                            <img
                              src="https://cdn.freelogovectors.net/wp-content/uploads/2018/04/yapi_kredi_bankasi_logo.png"
                              alt="yapıkredi"
                              className="w-24 h-5"
                            />
                            <img
                              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                              alt="mastercardlogo"
                              className="w-24 h-12"
                            />
                          </div>
                          <div className="text-sm mt-5 font-bold flex flex-col items-end">
                            <p>asd</p>
                            <p>asds</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-10">
                    <p className="font-medium">Select Installment Amount</p>
                    <div className="flex text-sm justify-between gap-20 mb-4">
                      <div className="border-b-[2px] border-dark-navy py-2">
                        <p>Installments</p>
                      </div>
                      <div className="border-b-[2px] border-dark-navy  py-2">
                        <p>Monthly Payments</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mt-2 flex gap-3">
                        <input
                          type="radio"
                          id="singlePayment"
                          name="installmentAmount"
                          value="123"
                          defaultChecked
                        />
                        <label htmlFor="singlePayment">Single Payment</label>
                      </div>
                      <label htmlFor="singlePayment">{lastPrice}$</label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mt-2 flex gap-3">
                        <input
                          type="radio"
                          id="two"
                          name="installmentAmount"
                          value="123"
                        />
                        <label htmlFor="two">2</label>
                      </div>
                      <label htmlFor="two">{(lastPrice / 2).toFixed(2)}$</label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mt-2 flex gap-3">
                        <input
                          type="radio"
                          id="four"
                          name="installmentAmount"
                          value="123"
                        />
                        <label htmlFor="four">4</label>
                      </div>
                      <label htmlFor="four">
                        {(lastPrice / 4).toFixed(2)}$
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mt-2 flex gap-3">
                        <input
                          type="radio"
                          id="six"
                          name="installmentAmount"
                          value="123"
                        />
                        <label htmlFor="six">6</label>
                      </div>
                      <label htmlFor="six">{(lastPrice / 6).toFixed(2)}$</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <OrderNow />
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
