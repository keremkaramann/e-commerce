import TeamAboutHeader from "../Repetitive/TeamAboutNavbar";
import Footer from "../Layout/Footer";
import Counter from "../Repetitive/Counter";
import TeamCard from "../Repetitive/TeamCard";
const About = () => {
  const TeamCardData = [
    {
      url: "/src/assets/teamsHeader/teamCard/team-1-user-3 (1).jpg",
    },
    {
      url: "/src/assets/teamsHeader/teamCard/team-1-user-1 (2).jpg",
    },
    {
      url: "/src/assets/teamsHeader/teamCard/team-1-user-1 (1).jpg",
    },
  ];
  return (
    <div>
      <TeamAboutHeader />
      <section className="flex items-center justify-evenly">
        <div>
          <h5 className="font-bold text-lg text-dark-navy mb-10">
            ABOUT COMPANY
          </h5>
          <h1 className="font-bold text-dark-navy text-[3.6rem] mb-10">
            ABOUT US
          </h1>
          <p className="text-secondary-text text-xl mb-10 w-[396px]">
            We know how large objects will act, but things on a small scale
          </p>
          <button
            className="bg-primary-blue border-[1px] border-primary-blue 
          rounded text-white px-9 py-3 hover:text-primary-blue duration-500 hover:bg-white"
          >
            Get Quote Now
          </button>
        </div>
        <div>
          <img src="/src/assets/about/none.png" alt="" />
        </div>
      </section>
      <section className="flex items-center justify-evenly mt-24 mb-24">
        <div>
          <p className="text-[#E74040] font-sm mb-10">Problems trying</p>
          <h3 className="font-bold text-2xl text-dark-navy w-[380px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div>
          <p className="text-sm text-secondary-text w-[520px] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>
      <section className="flex justify-evenly mb-40 mt-24">
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={15} from={0} />K
          </div>
          <p className="counterP">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={150} from={0} />K
          </div>
          <p className="counterP">Monthly Visitors</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={15} from={0} />
          </div>
          <p className="counterP">Countries Worldwide</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex font-bold text-dark-navy text-[3.4rem]">
            <Counter to={100} from={0} />+
          </div>
          <p className="counterP">Top Partners</p>
        </div>
      </section>
      <section className="flex justify-center mb-40 p-10">
        <img src="/src/assets/about/Video card.png" alt="" />
      </section>
      <section>
        <div className="text-center mt-14 mb-5">
          <h1 className="font-bold text-[2.5rem] text-dark-navy">
            Meet Our Team
          </h1>
        </div>
        <div className="text-center mb-32">
          <p className="text-sm text-secondary-text">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap max-w-[1060px] mx-auto w-full mb-20">
          {TeamCardData.map((item, index) => {
            const { url } = item;
            return <TeamCard key={index} url={url} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
