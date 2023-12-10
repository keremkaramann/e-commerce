import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
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
        <section className="my-5 p-8 w-[1200px] mx-auto">
          <h1 className="font-bold text-2xl mb-10">
            Your Cart {cartItems.length} Item
          </h1>
          {cartItems?.map((item) => {
            return (
              <div
                key={item?.product?.id}
                className="flex items-center justify-between gap-10 shadow-xl border-[1px] border-muted-color p-7 mb-7"
              >
                <input type="checkbox" className="text-2xl p-2" checked />
                <img
                  src={item?.product?.images[0]?.url}
                  alt="product-img"
                  className="w-1/12"
                />
                <div>
                  <p className="text-dark-navy font-bold text-lg">
                    {item?.product?.name}
                  </p>
                  <p className="text-secondary-text text-sm">
                    {" "}
                    {item?.product?.description}
                  </p>
                </div>
                <div className="flex gap-3 border-[1px]">
                  <button
                    className="py-3 px-4 bg-muted-color"
                    onClick={() => dispatch(decreaseCount(item?.product?.id))}
                  >
                    -
                  </button>
                  <p className="py-3 px-3 text-dark-navy">{item?.count}</p>
                  <button
                    className="py-3 px-4 bg-primary-blue"
                    onClick={() => dispatch(increaseCount(item?.product?.id))}
                  >
                    +
                  </button>
                </div>
                <p>${item?.product?.price}</p>
                <RiDeleteBin5Line
                  className="text-4xl cursor-pointer"
                  onClick={() => dispatch(removeCart(item?.product?.id))}
                />
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
