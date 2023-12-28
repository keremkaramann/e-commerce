import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import OrderSummary from "../Repetitive/OrderSummary";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const Checkout = () => {
  const [showAddressInput, setShowAddressInput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "all",
  });

  const handleAddNewAddress = () => {
    setShowAddressInput(!showAddressInput);
  };

  return (
    <>
      <Header />
      <section className="m-10 text-clip mb-20">
        <div className="flex xs:justify-center middle:justify-around flex-wrap ">
          <div className="border-y-[1px] border-muted-color gap-4">
            <div className="flex flex-row gap-2 cursor-pointer justify-end mt-10">
              <input type="checkbox" id="sameAddressCheckbox" />
              <label htmlFor="sameAddressCheckbox">
                Ship to the same address as billing
              </label>
            </div>
            <div className="flex flex-wrap middle:justify-normal xs:justify-center mb-10">
              <div className="text-dark-navy mt-5">
                <h1 className="text-2xl font-bold mb-10 text-left mt-10 pl-5">
                  Shipping Address
                </h1>
                <div className="px-3 mb-10">
                  <div className="bg-slate-200 px-16">
                    <button
                      className="flex flex-col items-center gap-3 text-xl p-4 "
                      onClick={handleAddNewAddress}
                    >
                      <FaPlus />
                      Add New Address
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-dark-navy mt-5">
                <h1 className="text-2xl font-bold mb-10 text-left mt-10 pl-5">
                  Bill Address
                </h1>
                <div className="px-3 mb-10">
                  <div className="bg-slate-200 px-16">
                    <button className="flex flex-col items-center gap-3 text-xl p-4">
                      <FaPlus />
                      Add New Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <NavLink
            to="shopping"
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
        {showAddressInput && (
          <div className="block">
            <div className="fixed align-middle z-50 top-0 left-0 w-full h-full overflow-scroll bg-slate-300/50">
              <div className="bg-white m-auto overflow-x-hidden overflow-y-auto max-w-[520px] rounded-lg">
                <div className="flex flex-row justify-between border-b-[1px] border-muted-color p-3">
                  <h2 className="font-bold text-dark-navy text-lg">
                    Add New Address
                  </h2>
                  <button onClick={handleAddNewAddress}>
                    <AiOutlineClose className="text-2xl" />
                  </button>
                </div>
                <div className="p-3 flex justify-around gap-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-dark-navy font-bold mb-2"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", {
                        required: "Name is Required!",
                        minLength: {
                          value: 3,
                          message: "At least 3 characters!",
                        },
                        pattern: {
                          value: /^[A-Za-zıöÖİğĞşŞçÇ ]+$/,
                          message: "Please enter only letters (A-Z, a-z).",
                        },
                      })}
                      className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="text-red-600 font-medium text-sm animate-shake">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="surname"
                      className="text-dark-navy font-bold mb-2"
                    >
                      Surname*
                    </label>
                    <input
                      type="text"
                      id="surname"
                      {...register("surname", {
                        required: "Surname is Required!",
                        minLength: {
                          value: 3,
                          message: "At least 3 characters!",
                        },
                        pattern: {
                          value: /^[A-Za-zıöÖİğĞşŞçÇ ]+$/,
                          message: "Please enter only letters (A-Z, a-z).",
                        },
                      })}
                      className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                      placeholder="Surname"
                    />
                    {errors.surname && (
                      <p className="text-red-600 font-medium text-sm animate-shake">
                        {errors.surname?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-3 flex justify-around gap-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-dark-navy font-bold mb-2"
                    >
                      Phone*
                    </label>
                    <input
                      type="text"
                      id="phone"
                      {...register("phone", {
                        required: "Phone is Required!",
                        minLength: {
                          value: 3,
                          message: "Enter valid phone number",
                        },
                        pattern: {
                          value: /^0\d{10}$/,
                          message: "Please enter valid number!",
                        },
                      })}
                      className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                      placeholder="0(__)__ __ __"
                    />
                    {errors.phone && (
                      <p className="text-red-600 font-medium text-sm animate-shake">
                        {errors.phone?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="city"
                      className="text-dark-navy font-bold mb-2"
                    >
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      {...register("city", {
                        required: "city is Required!",
                        minLength: {
                          value: 3,
                          message: "At least 3 characters!",
                        },
                        pattern: {
                          value: /^[A-Za-zıöÖİğĞşŞçÇ ]+$/,
                          message: "Please enter only letters (A-Z, a-z).",
                        },
                      })}
                      className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                      placeholder="city"
                    />
                    {errors.city && (
                      <p className="text-red-600 font-medium text-sm animate-shake">
                        {errors.city?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};
export default Checkout;
