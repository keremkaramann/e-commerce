import { TfiEmail } from "react-icons/tfi";
import { FiChevronDown } from "react-icons/fi";
import { Route, Switch, Link } from "react-router-dom";

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

const Header = () => {
  const navHandler = () => {
    const nav = document.querySelector(".mobile-nav");
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
  };

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
              <h1 className="text-2xl font-bold text-dark-navy">Bandage</h1>
            </div>
            <div className="font-bold text-sm text-secondary-text flex gap-3 flex-wrap">
              <Link to="/">Home</Link>
              <a href="/products" className="flex gap-1">
                Shop <FiChevronDown className="text-lg" />
              </a>
              <a href="/about">About</a>
              <a href="/team">Team</a>
              <a href="/contact">Contact</a>
              <a href="/product">Pages</a>
            </div>
            <div className="flex gap-5 text-primary-blue items-center font-bold">
              <div className="flex items-center gap-1">
                <BsPerson className="text-normal" />
                <a href="" className="text-sm">
                  Login / Register
                </a>
              </div>
              <BsSearch className="text-normal" />
              <AiOutlineShoppingCart className="text-normal" />
              <AiOutlineHeart className="text-normal" />
            </div>
          </div>
        </nav>
        <nav className="xs:block middle:hidden">
          <div className="flex justify-between items-center px-5 py-4">
            <div>
              <h1 className="text-2xl font-bold text-dark-navy">Bandage</h1>
            </div>
            <div className="flex gap-5 text-2xl font-bold text-dark-navy">
              <BsSearch />
              <AiOutlineShoppingCart />
              <HiOutlineBars3BottomRight
                className="text-2xl font-bold text-dark-navy cursor-pointer"
                onClick={navHandler}
              />
            </div>
          </div>
          <div className="mobile-nav hidden duration-300 ease-in-out">
            <div className="flex items-center gap-8 text-secondary-text text-3xl flex-col py-14">
              <a href="/">Home</a>
              <a href="/products">Product</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
