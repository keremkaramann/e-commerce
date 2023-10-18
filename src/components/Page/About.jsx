import TeamAboutHeader from "../Repetitive/TeamAboutNavbar";
import Footer from "../Layout/Footer";
import Counter from "../Repetitive/Counter";
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
      <section>
        <Counter to={15} from={0} />
      </section>
      <Footer />
    </div>
  );
};
export default About;
