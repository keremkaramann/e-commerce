import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPrevOrder } from "../../store/actions/shoppingCartAction";
//lottie
import Lottie from "lottie-react";
import emptyProduct from "../../lottie/noProduct.json";
import { LuPackageOpen } from "react-icons/lu";

//pages
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const MyOrders = () => {
  const dispatch = useDispatch();
  const prevUserOrders = useSelector((store) => store.cart.prevOrders);

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
          <div className="w-2/3 mx-auto mt-10 mb-10">
            {prevUserOrders?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="rounded-t-lg border-2 border-b-primary-blue flex xs:flex-col middle:flex-row justify-between p-5 mb-10"
                >
                  <div className="flex flex-col gap-3 text-center">
                    <p className="font-semibold text-secondary-text border-b-2 border-secondary-text">
                      Order Date
                    </p>
                    <p className="font-medium">
                      {items?.order_date?.replace("T", " ").replace(/-/g, "/")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 text-center">
                    <p className="font-semibold text-secondary-text border-b-2 border-secondary-text">
                      Card No{" "}
                    </p>
                    <p className="font-medium">{items?.card_no}</p>
                  </div>
                  <div className="flex flex-col gap-3 text-center">
                    <p className="font-semibold text-secondary-text border-b-2 border-secondary-text">
                      Name on Card
                    </p>
                    <p className="font-medium">
                      {items?.card_name.toUpperCase()}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-secondary-text border-b-2 border-secondary-text">
                      Price{" "}
                    </p>
                    <p className="font-medium text-primary-blue">
                      {items?.price}$
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold text-secondary-text border-b-2 border-secondary-text">
                      Order Status
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Preparing...</p>
                      <LuPackageOpen />
                    </div>
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
