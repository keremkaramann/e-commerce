import { useEffect } from "react";
import { API, renewAPI } from "../../endpoint/instance";
import { useDispatch } from "react-redux";
import { TfiEmail } from "react-icons/tfi";
import { FiChevronDown } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import GravatarImage from "../Repetitive/Gravatar";
import { useSelector } from "react-redux";
import { handleLogout, setUser } from "../../../src/store/actions/userAction";
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
  const userLoginData = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const navHandler = () => {
    const nav = document.querySelector(".mobile-nav");
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
  };

  const logoutHandler = () => {
    dispatch(handleLogout());
    renewAPI();
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      API.get("/verify")
        .then((res) => {
          dispatch(setUser(res.data));
          renewAPI();
        })
        .catch((err) => {
          localStorage.removeItem("token");
          renewAPI();
        });
    }
  }, []);

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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products" className="flex gap-1">
                Shop <FiChevronDown className="text-lg" />
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/team">Team</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="flex gap-5 text-primary-blue items-center font-bold">
              <div className="flex items-center gap-1">
                {userLoginData && userLoginData.name ? (
                  <>
                    <GravatarImage email={userLoginData.email} size={50} />
                    <p className="text-sm text-secondary-text italic mr-2">
                      {userLoginData?.name}
                    </p>
                    <p
                      onClick={logoutHandler}
                      className="text-sm text-secondary-text cursor-pointer"
                    >
                      / Logout
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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Product</NavLink>
              <NavLink to="/team">Team</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
