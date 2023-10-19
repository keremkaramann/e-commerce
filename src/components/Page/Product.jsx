import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Brands from "../Repetitive/Brands";
import { BsChevronRight } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Example from "../Repetitive/ProductCaoursel";

const Product = () => {
  const colorOptions = [
    {
      name: "Primary",
      className: "bg-primary-blue color-picker",
    },
    {
      name: "Success",
      className: "bg-success-color color-picker",
    },
    {
      name: "Alert",
      className: "bg-alert-color color-picker",
    },
    {
      name: "Navy",
      className: "bg-dark-navy color-picker",
    },
  ];
  return (
    <section>
      <Header justify={"justify-between"} />
      <div className="bg-[#FAFAFA] py-5">
        <div className="flex items-center mx-auto p-5 w-full max-w-[1200px] xs:flex-col middle:flex-row">
          <div></div>
          <div className="flex gap-3">
            <a href="/" className="text-dark-navy text-sm font-bold">
              Home
            </a>
            <BsChevronRight className="text-muted-color font-bold text-lg" />
            <a href="/products" className="text-muted-color text-sm font-bold">
              Shop
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex justify-center gap-10">
        <div>
          <Example />
        </div>
        <div className="w-1/2">
          <h4 className="dark-navy text-lg mb-3 mt-3">Floating Phone</h4>
          <div className="flex items-center gap-2 text-2xl text-[#F3CD03] mb-4">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className="text-secondary-text font-bold text-sm">10 Reviews</p>
          </div>
          <p className="text-2xl font-bold text-dark-navy mb-2">$1,139.33</p>
          <p className="text-sm font-bold text-secondary-text mb-7">
            Availability : <span className="text-primary-blue">In Stock </span>
          </p>
          <p className="text-[#858585] text-sm mb-5">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do
            met sent. RELIT official consequent door ENIM RELIT Mollie. <br />
            Excitation venial consequent sent nostrum met.
          </p>
          <div className="border-b-2 border-muted-color w-3/4"></div>
        </div>
      </div>
      <Brands />
      <Footer />
    </section>
  );
};
export default Product;
