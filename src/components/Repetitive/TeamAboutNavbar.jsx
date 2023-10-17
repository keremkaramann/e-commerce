import { AiOutlineArrowRight } from "react-icons/ai";
const TeamAboutNavbar = () => {
  return (
    <div className="flex items-center p-7">
      <div>
        <h1 className="font-bold text-2xl text-dark-navy">Bandage</h1>{" "}
      </div>
      <div className="text-secondary-text text-sm font- bold flex gap-5">
        <a href="/">Home</a>
        <a href="/products">Product</a>
        <a href="/contact">Pricing</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex gap-5">
        <a href="">Login</a>
        <button className="flex items-center gap-4">
          Become a member <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};
export default TeamAboutNavbar;
