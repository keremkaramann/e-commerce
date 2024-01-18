import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPrevOrder } from "../../store/actions/shoppingCartAction";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
const MyOrders = () => {
  const dispatch = useDispatch();
  const prevUserOrders = useSelector((store) => store.cart.prevOrders);
  console.log(prevUserOrders);

  useEffect(() => {
    dispatch(getPrevOrder());
  }, []);

  return (
    <>
      <Header />
      <section className="mb-12 mt-12">
        <div className="flex">
          <h2 className="font-bold text-2xl ml-10 border-b-2 border-dark-navy">
            My Orders :
          </h2>
        </div>
        <div>{prevUserOrders?.map((items) => {})}</div>
      </section>
      <Footer />
    </>
  );
};
export default MyOrders;
