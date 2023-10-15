import { useState } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { BsChevronRight } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";
import productListData from "../../data/ProductList";
import ProductCard from "../Repetitive/ProductCard";

const ProductList = () => {
  const [isGridClicked, setGridClicked] = useState(true);
  const [isListClicked, setListClicked] = useState(false);

  const handleGridClick = () => {
    setGridClicked(true);
    setListClicked(false);
  };

  const handleListClick = () => {
    setListClicked(true);
    setGridClicked(false);
  };
  const imgCover = [
    "/src/assets/cardContentImg/1.jpg",
    "/src/assets/cardContentImg/2.jpg",
    "/src/assets/cardContentImg/3.jpg",
    "/src/assets/cardContentImg/4.jpg",
    "/src/assets/cardContentImg/5.jpg",
  ];

  return (
    <div>
      <Header bgColor={"products-bg"} justify={"justify-around"} />
      <section className=" bg-[#FAFAFA] py-5">
        <div className=" flex items-center justify-between mx-auto p-5 w-full max-w-[1200px] xs:flex-col mdCstm:flex-row">
          <h1 className="text-dark-navy text-2xl font-bold xs:mb-10 mdCstm:mb-0">
            Shop
          </h1>
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
      </section>
      <section>
        <div className="flex justify-center gap-3 flex-wrap bg-[#FAFAFA] pb-10">
          {imgCover.map((urls, index) => {
            return (
              <div
                key={index}
                className="bg-cover bg-center mdCstm:h-[223px] mdCstm:w-[223px] xs:h-[300px] xs:w-4/5 bg-no-repeat relative"
                style={{ backgroundImage: `url(${urls})` }}
              >
                <div className="bg-[#2121214b] mdCstm:h-[223px] mdCstm:w-[223px] text-white">
                  <div className="absolute top-[40%] left-[35%] text-center">
                    <p className="font-bold mb-3">CLOTHS</p>
                    <p className="text-sm">5 Items</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center"></div>
      </section>
      <section>
        <div className="flex justify-around items-center py-10 xs:flex-col xs:gap-5">
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
            const { url, content, department } = product;
            return (
              <ProductCard
                key={index}
                url={url}
                content={content}
                department={department}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ProductList;
