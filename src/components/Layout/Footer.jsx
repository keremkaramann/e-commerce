import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#FAFAFA] pt-16 pb-16">
        <div className="max-w-1/2 w-full mx-auto flex justify-between mb-16">
          <h1 className="font-bold text-2xl">Bandage</h1>
          <div className="flex gap-3 text-cs-footer-blue text-2xl">
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <AiOutlineInstagram />
            </a>
            <a href="">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
        <div className="bg-white pt-10 pb-10">
          <div className="max-w-1/2 w-full mx-auto flex xs:gap-10 mdCstm:gap-20 xs:justify-center mdCstm:justify-between flex-wrap">
            <div className="font-bold leading-8">
              <h5 className="text-[#252B42]">Company Info</h5>
              <div className="text-secondary-text text-sm leading-8">
                <a href="">
                  <p>Carrier</p>
                </a>
                <a href="">
                  <p>We are hiring</p>
                </a>
                <a href="">
                  <p>About Us</p>
                </a>
                <a href="">
                  <p>Blog</p>
                </a>
              </div>
            </div>
            <div className="font-bold leading-8">
              <h5 className="text-[#252B42]">Legal</h5>
              <div className="text-secondary-text text-sm leading-8">
                <a href="">
                  <p>About Us</p>
                </a>
                <a href="">
                  <p>Carrier</p>
                </a>
                <a href="">
                  <p>We are hiring</p>
                </a>
                <a href="">
                  <p>Blog</p>
                </a>
              </div>
            </div>
            <div className="font-bold leading-8">
              <h5 className="text-[#252B42]">Features</h5>
              <div className="text-secondary-text text-sm leading-8">
                <a href="">
                  <p>Business Marketing</p>
                </a>
                <a href="">
                  <p>User Analytic</p>
                </a>
                <a href="">
                  <p>Live Chat</p>
                </a>
                <a href="">
                  <p>Unlimited Support</p>
                </a>
              </div>
            </div>
            <div className="font-bold leading-8">
              <h5 className="text-[#252B42]">Resources</h5>
              <div className="text-secondary-text text-sm leading-8">
                <a href="">
                  <p>IOS & Android</p>
                </a>
                <a href="">
                  <p>Watch a Demo</p>
                </a>
                <a href="">
                  <p>Customers</p>
                </a>
                <a href="">
                  <p>API</p>
                </a>
              </div>
            </div>
            <div className="font-bold leading-8">
              <h5 className="text-[#252B42] mb-4">Get In Touch</h5>
              <div className="text-secondary-text text-sm leading-8">
                <label htmlFor="mail">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-sm py-4 bg-[#F9F9F9] px-4 text-sm text-secondary-text font-normal border-[#e6e6e6] "
                  />
                  <button
                    type="submit"
                    className="bg-cs-footer-blue text-white px-4 text-sm font-light rounded-sm py-4"
                  >
                    Subscribe
                  </button>
                </label>
                <p className="text-xs font-normal text-secondary-text mt-5">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-1/2 w-full mx-auto text-secondary-text text-sm font-bold">
          <p className="mt-10">Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
