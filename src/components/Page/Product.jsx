import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Brands from "../Repetitive/Brands";
import { useParams } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Example from "../Repetitive/ProductCaoursel";
import { useState } from "react";
import bestSellerData from "../../data/bestseller";
import BestSellerCard from "../Repetitive/BestSellerProductCard";

const Product = () => {
  const { id } = useParams();
  const colorOptions = [
    {
      name: "Primary",
      className: "bg-primary-blue color-picker2",
    },
    {
      name: "Success",
      className: "bg-success-color color-picker2",
    },
    {
      name: "Alert",
      className: "bg-alert-color color-picker2",
    },
    {
      name: "Navy",
      className: "bg-dark-navy color-picker2",
    },
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  return (
    <section>
      <Header />
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
      <div className="bg-[#FAFAFA] flex justify-center xs:gap-5 middle:gap-20 flex-wrap pb-12">
        <div>
          <Example />
        </div>
        <div className=" xs:w-full middle:w-[40%] xs:p-10 middle:p-0">
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
          <div className="border-b-2 border-muted-color w-3/4 mb-8"></div>
          <ul className="flex gap-2 xs:mb-14 middle:mb-20">
            {colorOptions.map((colorOption, index) => (
              <li
                key={index}
                className={`color-option ${colorOption.className} ${
                  selectedColor === colorOption.name
                    ? "border-solid border-2 border-black"
                    : ""
                }`}
                onClick={() => handleColorClick(colorOption.name)}
              ></li>
            ))}
          </ul>
          <div className="flex items-center gap-3 xs:flex-wrap middle:flex-nowrap">
            <button className="px-4 py-2 rounded border-[1px] bg-primary-blue border-primary-blue text-white hover:bg-white hover:text-primary-blue duration-500">
              Select Options
            </button>
            <AiOutlineHeart className="addToChart" />
            <AiOutlineShoppingCart className="addToChart" />
            <AiFillEye className="addToChart" />
          </div>
        </div>
      </div>

      <div className="bg-white pb-14">
        <div className="text-secondary-text text-sm flex justify-center xs:gap-5 middle:gap-10 py-10">
          <p className="font-semibold">Description</p>
          <p className="font-bold">Additional Information</p>
          <div className="flex gap-1">
            <p className="font-bold">Reviews</p>
            <p>(0)</p>
          </div>
        </div>
        <div className="xs:hidden middle:block">
          <div className="border-b-2 border-[#ECECEC] mb-12 w-[79%] mx-auto"></div>
        </div>
        <div className="max-w-[1170px] w-full mx-auto">
          <div className="flex gap-8 xs:flex-wrap xs:justify-center middle:justify-normal xs:p-6 middle:p-2">
            <div>
              <img src="/src/assets/productImg.png" alt="" />
            </div>
            <div className="middle:w-[28%] xs:w-full">
              <h3 className="text-dark-navy font-bold text-2xl mb-8">
                the quick fox jumps over
              </h3>
              <div className="text-sm text-secondary-text">
                <p className="mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <h3 className="text-dark-navy font-bold text-2xl mb-8">
                  the quick fox jumps over
                </h3>
                <div className="flex mb-2 gap-3 text-secondary-text ">
                  <BsChevronRight />
                  <p className="text-sm font-bold">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex mb-2 gap-3 text-secondary-text ">
                  <BsChevronRight />
                  <p className="text-sm font-bold">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex mb-2 gap-3 text-secondary-text ">
                  <BsChevronRight />
                  <p className="text-sm font-bold">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex mb-2 gap-3 text-secondary-text ">
                  <BsChevronRight />
                  <p className="text-sm font-bold">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-dark-navy font-bold text-2xl mb-8">
                  the quick fox jumps over
                </h3>
                <div className="flex mb-2 gap-3 text-secondary-text ">
                  <BsChevronRight />
                  <p className="text-sm font-bold">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex mb-2 gap-3 text-secondary-text ">
                  <BsChevronRight />
                  <p className="text-sm font-bold">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex mb-2 gap-3 text-secondary-text ">
                  <BsChevronRight className="text-lg" />
                  <p className="text-sm font-bold">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-14">
        <div className="mb-10 max-w-[1060px] flex justify-center mx-auto gap-14">
          <h3 className="text-dark-navy text-2xl font-bold ">
            BESTSELLER PRODUCTS
          </h3>
          <h3 className="text-dark-navy text-2xl font-bold invisible xs:hidden middle:block">
            BESTSELLER PRODUCTS
          </h3>
          <h3 className="text-dark-navy text-2xl font-bold invisible xs:hidden middle:block">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="border-b-2 border-muted-color mb-12 w-[72%] mx-auto"></div>
        <div className="flex justify-center gap-6 flex-wrap max-w-[1060px] mx-auto w-full xs:px-3 middle:px-1">
          {bestSellerData.map(({ key, url, content, department }) => {
            return (
              <BestSellerCard
                key={key}
                url={url}
                content={content}
                department={department}
              />
            );
          })}
        </div>
      </div>
      <Brands />
      <Footer />
    </section>
  );
};
export default Product;
