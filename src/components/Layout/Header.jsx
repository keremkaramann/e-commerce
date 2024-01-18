import { useEffect, useState } from "react";
import { renewAPI } from "../../endpoint/instance";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../../src/store/actions/userAction";
import { fetchCategories } from "../../store/actions/globalRedAction";
import GravatarImage from "../Repetitive/Gravatar";
import { NavLink, Link } from "react-router-dom";
import ScrollToTop from "../Page/ScrollToTop";

//icons
import { TfiEmail } from "react-icons/tfi";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import {
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsFacebook,
  BsPerson,
  BsTelephone,
  BsSearch,
} from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import {
  decreaseCount,
  increaseCount,
  removeCart,
} from "../../store/actions/shoppingCartAction";

const Header = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navList = useSelector((store) => store.global.categories);
  const userLoginData = useSelector((store) => store.user.user);
  const itemCount = useSelector((store) => store.cart.cart);

  window.addEventListener("blur", () => {
    document.title = "Don't leave me :(";
  });
  window.addEventListener("focus", () => {
    document.title = "Welcome to Bandage";
  });

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const navHandler = () => {
    const nav = document.querySelector(".mobile-nav");
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
  };

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  const logoutHandler = () => {
    dispatch(handleLogout());
    renewAPI();
  };

  useEffect(() => {
    if (navList.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const elementClasses = event.target.classList;
      if (
        elementClasses.length > 0 &&
        !elementClasses.contains("cart-active")
      ) {
        setShowCart(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [setShowCart]);

  useEffect(() => {
    const handleClick = (event) => {
      const elementClasses = event.target.classList;
      if (elementClasses.length > 0 && !elementClasses.contains("nav-active")) {
        setShowNav(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [setShowNav]);

  return (
    <>
      <header>
        <div className="xs:hidden middle:block">
          <div className="flex justify-between p-5 text-white font-bold text-sm items-center bg-dark-navy flex-wrap">
            <div className="flex gap-4">
              <div className="text-white">
                <a href="" className="flex items-center gap-1">
                  <BsTelephone />
                  (225) 555-0118
                </a>
              </div>
              <div>
                <a href="" className="flex items-center gap-1">
                  <TfiEmail />
                  michelle.rivera@example.com
                </a>
              </div>
            </div>
            <div>
              <p>Follow Us and get a chance to win 80% off</p>
            </div>
            <div className="flex items-center gap-3">
              <p>Follow Us :</p>
              <a href="">
                <BsInstagram />
              </a>
              <a href="">
                <BsYoutube />
              </a>
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
        <nav className="p-5  xs:hidden middle:block">
          <div className={`flex justify-between items-center flex-wrap`}>
            <div>
              <Link to="/">
                <h1 className="text-2xl font-bold text-dark-navy">Bandage</h1>
              </Link>
            </div>
            <div className="font-bold text-sm text-secondary-text flex gap-3 flex-wrap">
              <NavLink
                to="/"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                Home
              </NavLink>
              <div className="relative group">
                <button
                  to="/shopping"
                  className="flex gap-1 nav-active hover:text-primary-blue duration-300 ease-in-out"
                  onClick={toggleMenu}
                >
                  Shop <FiChevronDown className="text-lg" />
                </button>
                {showNav && (
                  <div
                    className="absolute z-20 bg-white pl-6 pr-16 py-3 shadow-xl
                 border-gray-400 border-[1px] rounded-lg top-[30px] flex gap-16 justify-center"
                  >
                    <div className="flex flex-col leading-8 mb-2">
                      <h2 className="text-dark-navy text-2xl font-normal">
                        WOMAN
                      </h2>
                      {navList.map((list) => {
                        const { id, title } = list;
                        let gender = list.gender;
                        if (gender === "k") {
                          gender = "kadın";
                          return (
                            <NavLink
                              key={id}
                              to={{
                                pathname: `/shopping/${gender}/${title.toLowerCase()}`,
                                state: { id },
                              }}
                              className="font-normal ml-1 hover:text-primary-blue duration-200 ease-in-out border 
                              border-transparent hover:border-b-primary-blue"
                            >
                              {title}
                            </NavLink>
                          );
                        }
                      })}
                    </div>
                    <div className="border-l-[1px]"></div>
                    <div className="flex flex-col leading-8">
                      <h2 className="text-dark-navy text-2xl font-normal">
                        MAN
                      </h2>
                      {navList.map((list) => {
                        const { title, id } = list;
                        let gender = list.gender;
                        if (gender === "e") {
                          gender = "erkek";
                          return (
                            <NavLink
                              key={id}
                              to={{
                                pathname: `/shopping/${gender}/${title.toLowerCase()}`,
                                state: { id },
                              }}
                              className="font-normal ml-1 hover:text-primary-blue duration-500 ease-in-out border 
                              border-transparent hover:border-b-primary-blue"
                            >
                              {title}
                            </NavLink>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>
              <NavLink
                to="/about"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                About
              </NavLink>
              <NavLink
                to="/team"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                Team
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                Contact
              </NavLink>
              {userLoginData && (
                <NavLink
                  to="/myorders"
                  className="hover:text-primary-blue duration-300 ease-in-out"
                >
                  My Orders
                </NavLink>
              )}
            </div>
            <div className="flex gap-5 text-primary-blue items-center font-bold">
              <div className="flex items-center gap-1">
                {userLoginData && userLoginData.name ? (
                  <>
                    <GravatarImage email={userLoginData.email} size={50} />
                    <p className="text-sm text-secondary-text italic mr-2">
                      {userLoginData?.name}
                    </p>
                    <FiLogOut className="text-lg text-secondary-text" />
                    <p
                      onClick={logoutHandler}
                      className="text-sm text-secondary-text cursor-pointer hover:text-primary-blue duration-300 ease-in-out"
                    >
                      Logout
                    </p>
                  </>
                ) : (
                  <>
                    <BsPerson className="text-normal" />
                    <NavLink className="text-sm" to="/login">
                      Login /
                    </NavLink>
                    <NavLink className="text-sm" to="/signup">
                      Register
                    </NavLink>
                  </>
                )}
              </div>
              <BsSearch className="text-normal" />
              <div className="relative">
                <AiOutlineShoppingCart
                  className="text-xl cursor-pointer cart-active"
                  onClick={toggleCart}
                />
                <p className="text-white absolute text-xs bg-red-700 rounded-[50%] px-1.5 top-[-8px] left-3">
                  {itemCount?.length}
                </p>
                {showCart && (
                  <div
                    className="bg-white absolute top-[30px] right-0 z-20 rounded-md py-4 px-3 shadow-xl
                 border-gray-400 border-[1px] flex flex-col gap-2 w-[400px] cart-active"
                  >
                    <div>
                      <h3 className="text-dark-navy">
                        Your Cart:{" "}
                        <span className="text-secondary-text font-thin">
                          ({itemCount && itemCount?.length} Item)
                        </span>
                      </h3>
                    </div>
                    <div className="overflow-y-auto h-[198px]">
                      {itemCount && itemCount.length > 0 ? (
                        itemCount.map((item) => (
                          <div
                            key={item?.product.id}
                            className="flex items-center gap-5 border-b-[1px] border-muted-color pb-2 pt-2"
                          >
                            <img
                              src={item?.product?.images[0]?.url}
                              alt=""
                              className="w-[20%]"
                            />
                            <div className="leading-6">
                              <p className="text-dark-navy text-sm">
                                {item?.product?.name}
                              </p>
                              <p className="text-secondary-text text-xs font-normal mb-2">
                                {item?.product?.description}
                              </p>
                              <p className="text-dark-navy text-xs mt-1 mb-1 flex items-center gap-2">
                                Quantity:{" "}
                                <span className="border-[1px]">
                                  <span className="text-muted-color">
                                    <button
                                      className="px-2 py-1 bg-slate-500 cart-active"
                                      onClick={() =>
                                        dispatch(
                                          decreaseCount(item?.product?.id)
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <span className="px-2 py-1 bg-white">
                                      {item?.count}
                                    </span>
                                    <button
                                      className="px-2 py-1 bg-primary-blue cart-active"
                                      onClick={() =>
                                        dispatch(
                                          increaseCount(item?.product?.id)
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                  </span>
                                </span>
                              </p>
                              <p className="text-primary-blue">
                                $
                                {(item?.product?.price * item?.count).toFixed(
                                  2
                                )}
                              </p>
                            </div>
                            <div>
                              <FaTrashCan
                                className="text-dark-navy cursor-pointer mr-5"
                                onClick={() =>
                                  dispatch(removeCart(item?.product?.id))
                                }
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-red-600">
                          No product in your cart...
                        </p>
                      )}
                    </div>
                    <div className="flex gap-3 justify-center">
                      <NavLink to="/summary">
                        <button className="text-dark-navy bg-white px-8 py-2 border-[1px] rounded-md hover:text-white hover:bg-dark-navy duration-500 ease-in-out">
                          View Order
                        </button>
                      </NavLink>
                      <NavLink to="/checkout">
                        <button className="text-white bg-primary-blue px-8 py-2 border-[1px] rounded-md hover:bg-dark-navy duration-500 ease-in-out">
                          Checkout
                        </button>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
              <AiOutlineHeart className="text-normal" />
            </div>
          </div>
        </nav>
        <nav className="xs:block middle:hidden">
          <div className="flex justify-between items-center px-5 py-4">
            <div>
              <NavLink to="/">
                <h1 className="text-2xl font-bold text-dark-navy">Bandage</h1>
              </NavLink>
            </div>
            <div className="flex gap-5 text-2xl font-bold text-dark-navy">
              <BsSearch />
              <div className="relative">
                <NavLink to="/summary">
                  <AiOutlineShoppingCart />
                </NavLink>
                <p className="text-white absolute text-xs bg-red-700 rounded-[50%] px-1.5 top-[-8px] left-3">
                  {itemCount.length}
                </p>
              </div>
              <HiOutlineBars3BottomRight
                className="text-2xl font-bold text-dark-navy cursor-pointer"
                onClick={navHandler}
              />
            </div>
          </div>
          <div className="mobile-nav hidden duration-300 ease-in-out">
            <div className="flex items-center gap-8 text-secondary-text text-3xl flex-col py-14">
              <NavLink
                to="/"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                Home
              </NavLink>
              <NavLink
                to="/shopping"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                Product
              </NavLink>
              <NavLink
                to="/team"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                Team
              </NavLink>

              <NavLink
                to="/about"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:text-primary-blue duration-300 ease-in-out"
              >
                Contact
              </NavLink>
              {userLoginData && userLoginData.name ? (
                <div className="flex items-center gap-2">
                  <FiLogOut />
                  <p
                    onClick={logoutHandler}
                    className="text-2xl text-secondary-text cursor-pointer font-bold hover:text-primary-blue duration-300 ease-in-out"
                  >
                    Logout
                  </p>
                </div>
              ) : (
                <div className="flex items-center font-bold text-2xl">
                  <BsPerson className="mr-2" />
                  <NavLink
                    to="/login"
                    className="hover:text-primary-blue duration-300 mr-2 ease-in-out"
                  >
                    Login
                  </NavLink>
                  <p>/</p>
                  <NavLink
                    className="ml-2 hover:text-primary-blue duration-300 ease-in-out"
                    to="/signup"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <ScrollToTop />
    </>
  );
};
export default Header;
