import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import TeamCard from "../Repetitive/TeamCard";
import { teamData } from "../../data/teamData";
//icons
import { BsChevronRight } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
//img path
import teams1 from "/src/assets/teamsHeader/teams1.png";
import teams2 from "/src/assets/teamsHeader/teams2.png";
import teams3 from "/src/assets/teamsHeader/teams4.png";
import teams4 from "/src/assets/teamsHeader/teams3.png";
import teams5 from "/src/assets/teamsHeader/teams5.png";
import teams6 from "/src/assets/teamsHeader/responsiveImg/team1mb.png";
import teams7 from "/src/assets/teamsHeader/responsiveImg/team2mb.png";
import teams8 from "/src/assets/teamsHeader/responsiveImg/unsplash_PSmDDeXaEWE.png";
import teams9 from "/src/assets/teamsHeader/responsiveImg/unsplash_1-aA2Fadydc.png";
import teams10 from "/src/assets/teamsHeader/responsiveImg/unsplash_mcSDtbWXUZU.png";

const Team = () => {
  return (
    <div>
      <Header />
      <section className="text-center mt-12 mb-12 font-bold">
        <h5 className="text-xl text-secondary-text mb-5">WHAT WE DO</h5>
        <h1 className=" xs:text-[2.5rem] middle:text-[3.6rem] text-dark-navy mb-5 xs:p-5 middle:p-0">
          Innovation tailored for you
        </h1>
        <div className="flex gap-3 items-center justify-center">
          <a href="/" className="text-dark-navy text-sm">
            Home
          </a>
          <BsChevronRight className="text-muted-color" />
          <a href="/team" className="text-secondary-text text-sm">
            Team
          </a>
        </div>
      </section>
      <section className="xs:hidden middle:block">
        <div className="mb-16 flex gap-2 justify-center flex-wrap">
          <img src={teams1} alt="teams" />
          <div className="flex gap-2">
            <div className="flex middle:flex-col xs:flex-row gap-4">
              <img src={teams2} alt="" />
              <img src={teams3} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <img src={teams4} alt="" />
              <img src={teams5} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="xs:block middle:hidden">
        <div className="mb-16 flex flex-col justify-center">
          <img src={teams6} alt="teams" />
          <div className="flex justify-center flex-wrap mx-auto gap-1 mt-3">
            <img src={teams7} alt="teams" />
            <img src={teams8} alt="" />
          </div>
          <div className="flex justify-center flex-wrap gap-1 mt-3 mx-auto">
            <img src={teams9} alt="" />
            <img src={teams10} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="text-center mt-14 mb-20">
          <h1 className="font-bold text-[2.5rem] text-dark-navy">
            Meet Our Team
          </h1>
        </div>
        <div className="flex justify-center gap-6 flex-wrap max-w-[1060px] mx-auto w-full">
          {teamData.map((item, index) => {
            const { url } = item;
            return <TeamCard key={index} url={url} />;
          })}
        </div>
      </section>
      <section className="text-center xs:p-5 middle:p-0">
        <h2 className="font-bold text-dark-navy text-[2.5rem] mb-10">
          Start your 14 days free trial
        </h2>
        <p className="text-sm text-secondary-text mb-10 w-full max-w-md mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button
          className=" mb-10 rounded border-[1px] border-primary-blue bg-primary-blue 
        duration-500 text-white text-sml px-9 py-3 hover:text-primary-blue hover:bg-white"
        >
          Try it free now
        </button>
        <div className="flex gap-6 text-4xl justify-center mb-10">
          <a href="">
            <AiOutlineTwitter className="text-[#21A6DF]" />
          </a>
          <a href="">
            <AiFillFacebook className="text-[#395185]" />
          </a>
          <a href="">
            <AiOutlineInstagram className="text-black" />
          </a>
          <a href="">
            <AiFillLinkedin className="text-[#0A66C2]" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Team;
