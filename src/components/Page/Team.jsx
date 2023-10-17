import TeamAboutNavbar from "../Repetitive/TeamAboutNavbar";
import Footer from "../Layout/Footer";
import { BsChevronRight } from "react-icons/bs";
import TeamCard from "../Repetitive/TeamCard";
import { teamData } from "../../data/teamData";

const Team = () => {
  return (
    <div>
      <TeamAboutNavbar />
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
        <div className="mb-16 flex gap-2">
          <img src="/src/assets/teamsHeader/teams1.png" alt="teams" />
          <div className="flex gap-2">
            <div className="flex middle:flex-col xs:flex-row gap-4">
              <img src="/src/assets/teamsHeader/teams2.png" alt="" />
              <img src="/src/assets/teamsHeader/teams4.png" alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <img src="/src/assets/teamsHeader/teams3.png" alt="" />
              <img src="/src/assets/teamsHeader/teams5.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="xs:block middle:hidden">
        <div className="mb-16 flex gap-2 flex-col justify-center">
          <img
            src="/src/assets/teamsHeader/responsiveImg/team1mb.png"
            alt="teams"
          />
          <div className="flex gap-2 flex-wrap justify-center">
            <img
              src="/src/assets/teamsHeader/responsiveImg/team2mb.png"
              alt="teams"
            />
            <img
              src="/src/assets/teamsHeader/responsiveImg/unsplash_PSmDDeXaEWE.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            <img
              src="/src/assets/teamsHeader/responsiveImg/unsplash_1-aA2Fadydc.png"
              alt=""
            />
            <img
              src="/src/assets/teamsHeader/responsiveImg/unsplash_mcSDtbWXUZU.png"
              alt=""
            />
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
      <Footer />
    </div>
  );
};
export default Team;
