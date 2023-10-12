import { TfiAlarmClock } from "react-icons/tfi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
const Posts = ({ url }) => {
  return (
    <div>
      <div className="relative text-center">
        <img src={url} alt="" />
        <p className="bg-[#E74040] text-white px-1 py-1 w-1/5 text-sm font-bold absolute top-4 left-4">
          NEW
        </p>
      </div>
      <div className="shadow-lg p-4">
        <div className="flex gap-4 mb-2">
          <p className="text-[#8EC2F2] text-xs">Google</p>
          <p className="text-xs text-secondary-text">Trending</p>
          <p className="text-xs text-secondary-text">New</p>
        </div>
        <p className="text-lg text-dark-navy mb-2">
          Loudest à la Madison #1 <br /> (L'integral)
        </p>
        <p className="text-sm text-secondary-text mb-2">
          We focus on ergonomics and meeting <br /> you where you work. It's
          only a <br /> keystroke away.
        </p>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-1">
            <TfiAlarmClock className="text-primary-blue " />
            <p className="text-secondary-text text-xs">22 April 2021</p>
          </div>
          <div className="flex flex justify-between items-center gap-1">
            <AiOutlineAreaChart className="text-[#23856D]" />
            <p className="text-secondary-text text-xs">22 April 2021</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5 items-center mb-5">
          <a href="" className="text-secondary-text font-bold text-sm">
            Learn More
          </a>
          <BsChevronRight className="text-primary-blue text-lg" />
        </div>
      </div>
    </div>
  );
};
export default Posts;
