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
import ReusableSwiper from "../Repetitive/ReusableCarouse";
import PageContent from "./PageContent";

const Header = () => {
  const imagePaths = [
    "/src/assets/carouselImg/shop-hero-1-product-slide-1.jpg",
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
  ];

  return (
    <>
      <header>
        <div className="bg-[#252B42] flex justify-between p-5 text-white font-bold text-sm  items-center">
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
        <nav className="p-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Bandage</h1>
          </div>
          <div className="font-bold text-sm text-secondary-text flex gap-3">
            <Link to="/">Home</Link>
            <a href="" className="flex gap-1">
              Shop <FiChevronDown className="text-lg" />
            </a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Pages</a>
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
        </nav>
      </header>
    </>
  );
};
export default Header;
