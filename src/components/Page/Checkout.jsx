import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../../store/actions/shoppingCartAction";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { FaPlus } from "react-icons/fa6";
import OrderSummary from "../Repetitive/OrderSummary";
import AddressField from "../Repetitive/AddressField";
import { IoMdPerson, IoIosPhonePortrait } from "react-icons/io";

const Checkout = () => {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [shipToSameAddress, setShipToSameAddress] = useState(true);
  const addressStore = useSelector((store) => store.cart.address);

  const dispatch = useDispatch();

  const handleAddNewAddress = () => {
    setShowAddressInput(!showAddressInput);
  };
  const handleCheckboxChange = () => {
    setShipToSameAddress(!shipToSameAddress);
  };

  const formatPhoneNumber = (phoneNumber) => {
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
    dispatch(fetchAddress());
  }, []);

  return (
    <>
      <Header />
      <section className="m-10 text-clip mb-20">
        <div className="flex xs:justify-center middle:justify-around flex-wrap ">
          <div className="border-y-[1px] border-muted-color gap-4">
            <div className="flex flex-row gap-2 cursor-pointer justify-end mt-10">
              <input
                type="checkbox"
                id="sameAddressCheckbox"
                checked={shipToSameAddress}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="sameAddressCheckbox">
                Ship to the same address as billing
              </label>
            </div>
            <div className="flex flex-wrap middle:justify-normal xs:justify-center mb-10">
              <div className="text-dark-navy mt-5">
                <h1 className="text-2xl font-bold mb-10 text-left mt-10 pl-5">
                  Shipping Address
                </h1>
                <div className="mb-10">
                  <div className="bg-slate-200 px-16 rounded-md">
                    <button
                      className="flex flex-col items-center gap-3 text-xl p-4"
                      onClick={handleAddNewAddress}
                    >
                      <FaPlus />
                      Add New Address
                    </button>
                  </div>
                </div>
                {Object.keys(addressStore)?.map((key, index) => {
                  let address = addressStore[key];
                  return (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <div className="flex gap-1">
                          <input
                            type="radio"
                            id="titleAddress"
                            name="titleAddress"
                            checked
                          />
                          <label htmlFor="titleAddress">
                            {address?.title
                              ? address.title.charAt(0).toUpperCase() +
                                address.title.slice(1)
                              : ""}
                          </label>
                        </div>
                        <div>
                          <span className="border-b-[2px] border-dark-navy cursor-pointer text-sm">
                            Edit
                          </span>
                        </div>
                      </div>
                      <div className="bg-sky-200/50 border-2 border-primary-blue px-3 py-5 rounded-md">
                        <div>
                          <div className="flex justify-between text-xs font-bold">
                            <div className="flex items-center gap-1">
                              <IoMdPerson className="text-xl" />
                              <span>
                                {address?.name} {address?.surname}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <IoIosPhonePortrait className="text-xl" />
                              <span>{formatPhoneNumber(address.phone)}</span>
                            </div>
                          </div>
                          <div className="text-sm mt-5 font-bold">
                            <p>{address?.address}</p>
                            <p>
                              {address?.district}/{address?.city}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {!shipToSameAddress && (
                <div className="text-dark-navy mt-5">
                  <h1 className="text-2xl font-bold mb-10 text-left mt-10 pl-5">
                    Bill Address
                  </h1>
                  <div className="px-3 mb-10">
                    <div className="bg-slate-200 px-16 rounded-md">
                      <button className="flex flex-col items-center gap-3 text-xl p-4">
                        <FaPlus />
                        Add New Address
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <OrderSummary />
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
        {showAddressInput && (
          <AddressField handleAddNewAddress={handleAddNewAddress} />
        )}
      </section>
      <Footer />
    </>
  );
};
export default Checkout;
