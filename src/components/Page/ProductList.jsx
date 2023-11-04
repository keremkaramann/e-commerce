import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { BsChevronRight } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";
import productListData from "../../data/ProductList";
import ProductCard from "../Repetitive/ProductCard";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import Brands from "../Repetitive/Brands";
import { fetchCategories } from "../../store/actions/globalRedAction";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector((store) => store.global.categories);
  const [isGridClicked, setGridClicked] = useState(true);
  const [isListClicked, setListClicked] = useState(false);

  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    className:
      active === index
        ? "bg-primary-blue text-white px-6 py-9 border-[#BDBDBD]"
        : "px-6 py-9 border-[#BDBDBD] text-primary-blue",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 3) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const handleGridClick = () => {
    setGridClicked(true);
    setListClicked(false);
  };

  const handleListClick = () => {
    setListClicked(true);
    setGridClicked(false);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      <Header />
      <section className=" bg-[#FAFAFA] py-5">
        <div className=" flex items-center justify-between mx-auto p-5 w-full max-w-[1200px] xs:flex-col mdCstm:flex-row">
          <h1 className="text-dark-navy text-2xl font-bold xs:mb-10 mdCstm:mb-0">
            Shop
          </h1>
          <div></div>
          <div className="flex gap-3">
            <NavLink className="text-dark-navy text-sm font-bold" to="/">
              Home
            </NavLink>
            <BsChevronRight className="text-muted-color font-bold text-lg" />
            <a href="/products" className="text-muted-color text-sm font-bold">
              Shop
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center gap-3 flex-wrap bg-[#FAFAFA] pb-10">
          {categoriesData.map((categoryData) => {
            const { id, img, title, gender } = categoryData;
            return (
              <div
                key={id}
                className="bg-cover bg-center middle:h-[223px] middle:w-[223px] xs:h-[300px] xs:w-4/5 bg-no-repeat relative"
                style={{ backgroundImage: `url(${img})` }}
              >
                <Link to={`/shopping/:${gender}/:${title}`}>
                  <div className="bg-[#2121214b] middle:h-[223px] middle:w-[223px] text-white">
                    <div className="absolute top-[40%] left-[35%] text-center">
                      <p className="font-bold mb-3">{title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center"></div>
      </section>
      <section>
        <div className="flex justify-around items-center py-10 xs:flex-col xs:gap-5 mdCstm:flex-row mdCstm:gap-0">
          <p className="text-sm text-secondary-text font-bold">
            Showing all 12 results
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-secondary-text font-bold">Views: </p>
            <div
              className={`border-[1px] border-[#ECECEC] p-2 rounded cursor-pointer ${
                isGridClicked ? "text-black" : "text-secondary-text"
              }`}
              onClick={handleGridClick}
            >
              <HiViewGrid className="text-lg" />
            </div>
            <div
              className={`border-[1px] border-[#ECECEC] p-2 rounded cursor-pointer ${
                isListClicked ? "text-black" : "text-secondary-text"
              }`}
              onClick={handleListClick}
            >
              <BsListCheck className="text-lg font-bold" />
            </div>
          </div>
          <div>
            <select
              id="popular"
              className="bg-[#F9F9F9] border-[1px] border-[#DDDDDD] rounded text-secondary-text px-2 py-4 text-sm mr-3"
            >
              <option value="popularity" defaultValue disabled selected hidden>
                Popularity
              </option>
              <option value="mostViewed">Most Viewed</option>
              <option value="leastViewed">Least Viewed</option>
              <option value="most">Most Expensive</option>
              <option value="least">Least Expensive</option>
            </select>
            <button
              type="submit"
              className="bg-primary-blue border-[1px] border-primary-blue text-white px-7 text-sm font-light rounded py-4 hover:bg-white hover:text-primary-blue duration-500"
            >
              Filter
            </button>
          </div>
        </div>
        <div
          className={`flex justify-center flex-wrap gap-4 mt-10 my-0 mx-auto ${
            isGridClicked ? "max-w-[1060px]" : "max-w-[490px]"
          }`}
        >
          {productListData.map((product, index) => {
            const { url, content, department, id } = product;
            return (
              <Link to={`/product/${id}`} key={index}>
                <ProductCard
                  key={index}
                  url={url}
                  content={content}
                  department={department}
                />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center text-center mb-12">
          <ButtonGroup variant="outlined" className="shadow-lg rounded ">
            <IconButton
              onClick={prev}
              className="px-10 py-9 border-[#BDBDBD] text-muted-color bg-[#F3F3F3] "
            >
              <p>First</p>
            </IconButton>
            <IconButton {...getItemProps(1)}>1</IconButton>
            <IconButton {...getItemProps(2)}>2</IconButton>
            <IconButton {...getItemProps(3)}>3</IconButton>
            <IconButton
              onClick={next}
              className="px-10 py-9 text-center border-[#BDBDBD] text-primary-blue"
            >
              <p> Next</p>
            </IconButton>
          </ButtonGroup>
        </div>
        <Brands />
      </section>
      <Footer />
    </div>
  );
};
export default ProductList;
