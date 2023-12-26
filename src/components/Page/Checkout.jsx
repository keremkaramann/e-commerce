import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import OrderSummary from "../Repetitive/OrderSummary";
import { FaPlus } from "react-icons/fa6";
const Checkout = () => {
  return (
    <>
      <Header />
      <section className="m-10 text-clip mb-20">
        <div className="flex justify-evenly flex-wrap ">
          <div className="text-dark-navy border-y-[1px] border-muted-color mt-10">
            <h1 className="text-2xl font-bold mb-10 text-left mt-10 pl-5">
              Shipping Address
            </h1>
            <div className="px-3">
              <div className="bg-slate-200 px-28">
                <button className="flex flex-col items-center gap-3 text-xl p-4">
                  <FaPlus />
                  Add New Address
                </button>
              </div>
            </div>
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Checkout;
