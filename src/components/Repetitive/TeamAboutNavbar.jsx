import { AiOutlineArrowRight } from "react-icons/ai";
const TeamAboutNavbar = () => {
  return (
    <div className="flex items-center p-7 justify-evenly">
      <div>
        <h1 className="font-bold text-2xl text-dark-navy">Bandage</h1>{" "}
      </div>
      <div className="text-secondary-text text-sm font- bold flex gap-5">
        <a href="/">Home</a>
        <a href="/products">Product</a>
        <a href="/contact">Pricing</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex gap-10 items-center">
        <a href="" className="text-sm font-bold text-primary-blue">
          Login
        </a>
        <button className="flex items-center gap-4 text-sm font-bold rounded-l border-[1px] border-primary-blue text-white bg-primary-blue px-6 py-4 hover:text-primary-blue hover:bg-white duration-500">
          Become a member <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};
export default TeamAboutNavbar;
