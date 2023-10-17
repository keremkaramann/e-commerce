import TeamAboutNavbar from "../Repetitive/TeamAboutNavbar";
import Footer from "../Layout/Footer";
import { BsChevronRight } from "react-icons/bs";

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
      <Footer />
    </div>
  );
};
export default Team;
