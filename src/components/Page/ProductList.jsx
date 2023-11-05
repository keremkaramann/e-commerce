import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions/globalRedAction";
import { fetchProducts } from "../../store/actions/productAction";
//pages
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import ProductCard from "../Repetitive/ProductCard";
import productListData from "../../data/ProductList";
import Brands from "../Repetitive/Brands";
//icons
import { BsChevronRight } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";
import { IconButton, ButtonGroup } from "@material-tailwind/react";

const ProductList = () => {
  const dispatch = useDispatch();
  //categories
  const categoriesData = useSelector((store) => store.global.categories);
  const sortedCategories = categoriesData.sort((a, b) => b.rating - a.rating);
  const slicedCategories = sortedCategories.slice(0, 5);

  //products
  const productData = useSelector((store) => store.product.productList);
  const fetched = useSelector((store) => store.product.fetchState);

  const [filterText, setFilterText] = useState("");
  const [filteredProduct, setFilteredProduct] = useState();
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
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Header />
      <section className=" bg-[#FAFAFA] py-5">
        <div className=" flex items-center justify-between mx-auto p-5 w-full max-w-[1200px] xs:flex-col mdCstm:flex-row">
          <h1 className="text-dark-navy text-2xl font-bold xs:mb-10 mdCstm:mb-0">
            Shop
          </h1>
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
          {slicedCategories?.map((categoryData) => {
            const { id, img, title, gender } = categoryData;
            return (
              <div
                key={id}
                className="bg-cover bg-center middle:h-[223px] middle:w-[223px] xs:h-[300px] xs:w-4/5 bg-no-repeat relative"
                style={{ backgroundImage: `url(${img})` }}
              >
                <Link to={`/shopping/${gender}/${title}`}>
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
            Showing all {productData.total} results
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
            <input
              type="text"
              placeholder="Search Product..."
              className="bg-[#F9F9F9] border-[1px] border-[#DDDDDD] rounded text-secondary-text py-3 px-2"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
          <div>
            <select
              id="popular"
              className="bg-[#F9F9F9] border-[1px] border-[#DDDDDD] rounded text-secondary-text px-2 py-4 text-sm mr-3"
            >
              <option value="popularity" hidden>
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
          {fetched === "Fetched" ? (
            productData.products
              ?.filter((p) =>
                p.name
                  .toLocaleLowerCase()
                  .includes(filterText.toLocaleLowerCase())
              )
              ?.map((product) => {
                const { images, name, description, id, price } = product;
                return (
                  <Link
                    to={`/product/${id}`}
                    key={id}
                    state={{
                      description: description,
                      images: images,
                      name: name,
                      price: price,
                    }}
                  >
                    <ProductCard
                      images={images}
                      name={name}
                      desc={description}
                      price={price}
                    />
                  </Link>
                );
              })
          ) : (
            <div role="status" className="flex justify-end mb-14">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
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
