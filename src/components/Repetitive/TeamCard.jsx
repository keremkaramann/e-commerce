import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const TeamCard = ({ url }) => {
  return (
    <div className="xs:mb-10 middle:mb-20">
      <img src={url} alt="" />
      <div className="text-center mb-5 mt-5">
        <p className="font-bold text-dark-navy mb-5">Username</p>
        <p className="text-sm font-bold text-secondary-text mb-5">Profession</p>
        <div className="xs:hidden middle:block">
          <div className="flex gap-3 text-primary-blue text-2xl justify-center">
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
        <div className="xs:block middle:hidden">
          <div className="flex gap-3 text-2xl justify-center">
            <a href="">
              <AiFillFacebook className="text-[#335BF5]" />
            </a>
            <a href="">
              <AiOutlineInstagram className="text-[#E51F5A]" />
            </a>
            <a href="">
              <AiOutlineTwitter className="text-[#21A6DF]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
