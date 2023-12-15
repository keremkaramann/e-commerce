import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";
import Lottie from "lottie-react";
import emptyProduct from "../../lottie/noProduct.json";
import {
  removeCart,
  increaseCount,
  decreaseCount,
} from "../../store/actions/shoppingCartAction";

const Summary = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  //error page
  const NoProducts = () => {
    return (
      <div className="font-bold text-2xl text-dark-navy text-center mb-20 mt-10">
        <h1 className="mb-3">There is no Product in your Cart...</h1>
        <div className="w-1/4 mx-auto">
          <Lottie animationData={emptyProduct} loop={true} />
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
        <section className="my-5 p-8 max-w-[920px] w-full mx-auto">
          <h1 className="font-bold text-2xl mb-8 text-dark-navy">
            Your Cart{" "}
            <span className="text-secondary-text font-thin">
              ({cartItems.length} Item)
            </span>
          </h1>
          {cartItems?.map((item) => {
            return (
              <div
                key={item?.product?.id}
                className="flex items-center xs:flex-wrap middle:flex-nowrap xs:justify-center 
                middle:justify-around xs:gap-3 middle:gap-10 shadow-lg border-[1px] border-muted-color py-2 px-3 mb-5"
              >
                <div className="flex gap-3 justify-center">
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
                      onClick={() => dispatch(decreaseCount(item?.product?.id))}
                    >
                      -
                    </button>
                    <p className="xs:py-1 xs:px-2 middle:py-2 middle:px-2 text-dark-navy">
                      {item?.count}
                    </p>
                    <button
                      className="xs:py-2 xs:px-3 middle:py-2 middle:px-3 bg-primary-blue"
                      onClick={() => dispatch(increaseCount(item?.product?.id))}
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
        </section>
      )}
      <Footer />
    </>
  );
};
export default Summary;
