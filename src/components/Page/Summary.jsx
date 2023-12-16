import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";
import Lottie from "lottie-react";
import emptyProduct from "../../lottie/noProduct.json";
import { NavLink } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import {
  removeCart,
  increaseCount,
  decreaseCount,
} from "../../store/actions/shoppingCartAction";

const Summary = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const shippingCost = 50;

  //error page
  const NoProducts = () => {
    return (
      <div className="font-bold text-2xl text-dark-navy text-center mb-20 mt-10">
        <h1 className="mb-3">There is no Product in your Cart...</h1>
        <div className="w-1/4 mx-auto">
          <Lottie animationData={emptyProduct} loop={true} />
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
      </div>
    );
  };

  return (
    <>
      <Header />
      {cartItems.length <= 0 ? (
        <NoProducts />
      ) : (
        <section className="my-5 p-5 flex justify-around flex-wrap">
          <div>
            <h1 className="font-bold text-2xl mb-8 text-dark-navy">
              Your Cart{" "}
              <span className="text-secondary-text font-thin">
                ({cartItems.length} Item)
              </span>
            </h1>
            {cartItems?.map((item, index) => {
              return (
                <div
                  key={item?.product?.id}
                  className={`flex items-center xs:flex-wrap middle:flex-nowrap 
                            xs:justify-center middle:justify-around gap-3
                            ${
                              index === 0
                                ? ""
                                : "border-t-[1px] border-muted-color"
                            } py-2 px-3`}
                >
                  <div className="flex gap-3 justify-center p-1">
                    <input type="checkbox" className="text-2xl p-2" />
                    <img
                      src={item?.product?.images[0]?.url}
                      alt="product-img"
                      className="xs:w-3/12 middle:w-[100px]"
                    />
                  </div>
                  <div>
                    <p className="text-dark-navy font-bold xs:text-xs middle:text-lg">
                      {item?.product?.name}
                    </p>
                    <p className="text-secondary-text text-xs w-[160px]">
                      {" "}
                      {item?.product?.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center xs:gap-2 middle:gap-3 border-[1px]">
                      <button
                        className="xs:py-2 xs:px-3 middle:py-2 middle:px-3 bg-slate-500"
                        onClick={() =>
                          dispatch(decreaseCount(item?.product?.id))
                        }
                      >
                        -
                      </button>
                      <p className="xs:py-1 xs:px-2 middle:py-2 middle:px-2 text-dark-navy">
                        {item?.count}
                      </p>
                      <button
                        className="xs:py-2 xs:px-3 middle:py-2 middle:px-3 bg-primary-blue"
                        onClick={() =>
                          dispatch(increaseCount(item?.product?.id))
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="xs:text-sm middle:text-lg font-bold">
                      ${(item?.product?.price * item?.count).toFixed(2)}
                    </p>
                  </div>
                  <div className="">
                    <BsFillTrash3Fill
                      className=" text-2xl cursor-pointer"
                      onClick={() => dispatch(removeCart(item?.product?.id))}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex xs:justify-center middle:justify-end pt-5 border-t-[1px] border-muted-color">
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
          </div>
          <div className="flex items-start mt-20">
            <div className="border-[1px] border-muted-color xs:w-[300px] middle:w-[400px] p-5 leading-10 text-dark-navy">
              <h1 className="text-dark-navy font-bold text-xl mb-10 mt-2">
                Order Summary
              </h1>
              <div className="flex justify-between gap-5 text-lg m-2">
                <p className="font-medium">SubTotal:</p>
                <p> ${123.99}</p>
              </div>
              <div className="flex justify-between gap-5 text-lg m-2">
                <div>
                  <p className="font-medium">Shipping:</p>
                </div>
                <p> ${shippingCost}</p>
              </div>
              <div className="flex justify-between gap-5 text-lg m-2 font-bold">
                <p className="font-bold">Total:</p>
                <p> $</p>
              </div>
              <NavLink to="">
                <div
                  className="flex items-center justify-center mt-5
                gap-2 bg-dark-navy py-2 text-white font-medium"
                >
                  <button>CHECKOUT</button>
                  <FiChevronsRight />
                </div>
              </NavLink>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};
export default Summary;
