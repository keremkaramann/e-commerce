import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import OrderSummary from "../Repetitive/OrderSummary";

const Checkout = () => {
  return (
    <>
      <Header />
      <section className="m-10 text-clip">
        <OrderSummary />
      </section>
      <Footer />
    </>
  );
};
export default Checkout;
