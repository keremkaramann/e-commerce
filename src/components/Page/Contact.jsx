import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return (
    <section>
      <Header />
      <div className="flex justify-evenly xs:flex-wrap middle:flex-nowrap">
        <div className="flex flex-col justify-center middle:w-2/5 xs:w-full xs:text-center middle:text-start xs:p-5 middle:p-0">
          <h5 className="font-bold text-dark-navy mb-10">CONTACT US</h5>
          <h1 className="font-bold text-dark-navy middle:text-[3.6rem] xs:text-[2.5rem] mb-10">
            Get in touch today!
          </h1>
          <h4 className="text-2xl text-secondary-text mb-10">
            We know how large objects will act, but things on a small scale
          </h4>
          <h3 className="text-dark-navy font-bold text-2xl mb-5">
            Phone ; +451 215 215
          </h3>
          <h3 className="text-dark-navy font-bold text-2xl mb-10">
            Fax : +451 215 215
          </h3>
          <div className="flex gap-6 text-4xl mb-10 text-dark-navy xs:justify-center middle:justify-start">
            <a href="">
              <AiOutlineTwitter />
            </a>
            <a href="">
              <AiFillFacebook />
            </a>
            <a href="">
              <AiOutlineInstagram />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="xs:p-4 middle:p-0">
          <img src="/src/assets/contactgb.png" alt="" />
        </div>
      </div>
      <div className="mb-20 mt-20 xs:bg-[#F6F6F6] middle:bg-white xs:pt-20 xs:pb-0 xs:px-2  middle:pt-0 middle:px-0">
        <div className="font-bold text-dark-navy text-center mb-12">
          <h6 className="text-sm">VISIT OUR OFFICE</h6>
          <h2 className="text-[2.5rem] ">
            We help small businesses <br /> with big ideas
          </h2>
        </div>
        <div className="flex justify-center xs:mt-10 middle:mt-28 xs:flex-wrap middle:flex-nowrap xs:gap-10 middle:gap:0">
          <div className="text-center py-[5.7rem] px-14 xs:bg-white">
            <div className="flex justify-center">
              <BsTelephone className="text-primary-blue text-7xl text-center mb-4" />
            </div>
            <div className="text-sm text-dark-navy font-bold">
              <p>georgia.young@example.com</p>
              <p className="mb-3 mt-1">georgia.young@ple.com</p>
              <p className="mb-4">Get Support</p>
            </div>
            <button
              className="hover:bg-primary-blue hover:text-white duration-500 text-primary-blue border-[1px]
             border-primary-blue px-7 py-3 middle:rounded-full"
            >
              Submit Request
            </button>
          </div>
          <div className="text-center bg-dark-navy py-[5.7rem] px-14">
            <div className="flex justify-center">
              <ImLocation className="text-primary-blue text-7xl text-center mb-4" />
            </div>
            <div className="text-sm text-white font-bold">
              <p>georgia.young@example.com</p>
              <p className="mb-3 mt-1">georgia.young@ple.com</p>
              <p className="mb-4">Get Support</p>
            </div>
            <button
              className="hover:bg-primary-blue hover:text-white duration-500 text-primary-blue border-[1px]
             border-primary-blue px-7 py-3 middle:rounded-full"
            >
              Submit Request
            </button>
          </div>
          <div className="text-center py-[5.7rem] px-14 xs:bg-white">
            <div className="flex justify-center">
              <IoIosMail className="text-primary-blue text-7xl text-center mb-4" />
            </div>
            <div className="text-sm text-dark-navy font-bold">
              <p>georgia.young@example.com</p>
              <p className="mb-3 mt-1">georgia.young@ple.com</p>
              <p className="mb-4">Get Support</p>
            </div>
            <button
              className="hover:bg-primary-blue hover:text-white duration-500 text-primary-blue border-[1px]
             border-primary-blue px-7 py-3 middle:rounded-full"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 mb-32">
        <div className="flex justify-center mb-5 mt-5">
          <img src="/src/assets/contactArrow.png" alt="" />
        </div>
        <div className="font-bold text-dark-navy">
          <h5 className="mb-5">WE Can't WAIT TO MEET YOU</h5>
          <h1 className="text-[3.5rem] mb-5">Let’s Talk</h1>
        </div>
        <button
          className="text-sm font-bold rounded-lg border-[1px]
         border-primary-blue text-white bg-primary-blue px-10 py-4 hover:text-primary-blue
          hover:bg-white duration-500"
        >
          Try it free now
        </button>
      </div>
      <Footer />
    </section>
  );
};
export default Contact;
