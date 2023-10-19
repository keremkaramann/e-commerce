import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
const Contact = () => {
  return (
    <section>
      <Header justify={"justify-between"} />
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
      <Footer />
    </section>
  );
};
export default Contact;
