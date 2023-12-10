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
        <section className="my-5 p-8 max-w-[1200px] w-full mx-auto">
          <h1 className="font-bold text-2xl mb-10">
            Your Cart {cartItems.length} Item
          </h1>
          {cartItems?.map((item) => {
            return (
              <div
                key={item?.product?.id}
                className="flex items-center xs:flex-wrap middle:flex-nowrap xs:justify-center middle:justify-between xs:gap-3 middle:gap-10 shadow-lg border-[1px] border-muted-color p-5 mb-7"
              >
                <div className="flex gap-4 items-center">
                  <input type="checkbox" className="text-2xl p-2" checked />
                  <img
                    src={item?.product?.images[0]?.url}
                    alt="product-img"
                    className="xs:w-3/12 middle:w-2/12"
                  />
                  <div>
                    <p className="text-dark-navy font-bold xs:text-xs middle:text-lg">
                      {item?.product?.name}
                    </p>
                    <p className="text-secondary-text text-xs">
                      {" "}
                      {item?.product?.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center xs:gap-2 middle:gap-3 border-[1px]">
                    <button
                      className="xs:py-2 xs:px-2 middle:py-3 middle:px-4 bg-muted-color"
                      onClick={() => dispatch(decreaseCount(item?.product?.id))}
                    >
                      -
                    </button>
                    <p className="xs:py-1 xs:px-1 middle:py-3 middle:px-4 text-dark-navy">
                      {item?.count}
                    </p>
                    <button
                      className="xs:py-2 xs:px-2 middle:py-3 middle:px-4 bg-primary-blue"
                      onClick={() => dispatch(increaseCount(item?.product?.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="xs:text-sm middle:text-lg">
                    ${item?.product?.price}
                  </p>
                  <div>
                    <BsFillTrash3Fill
                      className=" text-2xl cursor-pointer"
                      onClick={() => dispatch(removeCart(item?.product?.id))}
                    />
                  </div>
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
