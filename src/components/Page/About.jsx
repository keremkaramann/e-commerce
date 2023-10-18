import TeamAboutHeader from "../Repetitive/TeamAboutNavbar";
import Footer from "../Layout/Footer";
const About = () => {
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
      <Footer />
    </div>
  );
};
export default About;
