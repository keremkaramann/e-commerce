import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPrevOrder } from "../../store/actions/shoppingCartAction";
//lottie
import Lottie from "lottie-react";
import emptyProduct from "../../lottie/noProduct.json";
//pages
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const MyOrders = () => {
  const dispatch = useDispatch();
  const prevUserOrders = useSelector((store) => store.cart.prevOrders);
  console.log(prevUserOrders);

  useEffect(() => {
    dispatch(getPrevOrder());
  }, []);
  //error page
  const NoProducts = () => {
    return (
      <div className="font-bold text-2xl text-dark-navy text-center mb-20">
        <h1 className="mb-3">There is no Product to Show...</h1>
        <Lottie animationData={emptyProduct} loop={true} />
      </div>
    );
  };
  return (
    <>
      <Header />
      {prevUserOrders.length > 0 ? (
        <section className="mb-16 mt-12">
          <div className="flex">
            <h2 className="font-bold text-2xl ml-10 border-b-2 border-dark-navy">
              My Orders :
            </h2>
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center mt-12 px-5 max-w-[1080px] w-full mx-auto">
            {prevUserOrders?.map((items) => {
              return (
                <div className="shadow-xl shadow-slate-500 w-80 p-8 leading-8 border-4 border-primary-blue rounded-lg">
                  <h1 className="font-bold">Order Summary</h1>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Card No :</p>
                    <p className="font-medium">{items.card_no}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Name on Card :</p>
                    <p className="font-medium">{items.card_name}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Date :</p>

                    <p className="font-medium">
                      {items.order_date.replace("T", " ")}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Price :</p>
                    <p className="font-medium">{items.price}$</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <div className="w-72 mx-auto mt-20">
          <NoProducts />
        </div>
      )}

      <Footer />
    </>
  );
};
export default MyOrders;
