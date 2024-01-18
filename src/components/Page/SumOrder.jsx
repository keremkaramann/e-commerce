import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import confetti from "canvas-confetti";
import Lottie from "lottie-react";
import orderChecked from "../../lottie/checkedAnimation.json";
//pages
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const SumOrder = () => {
  const user = useSelector((store) => store.user.user);

  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

  useEffect(() => {
    fire();
  }, []);

  return (
    <>
      <Header />
      <section className="pt-14 mb-14 flex justify-center">
        <div className="shadow-2xl shadow-slate-700 p-10 text-center">
          <Lottie
            animationData={orderChecked}
            style={{ height: 150 }}
            loop={false}
          />

          <p className="font-medium text-xl mb-2">Hey {user?.name}, </p>
          <p className="font-bold text-3xl mb-2">Your Order is Confirmed!</p>
          <p className="font-medium text-xl">
            We'll send you a shipping confirmation email
          </p>
          <p className="font-medium text-xl">as soon as your order ships.</p>
          <div className="mt-5">
            <NavLink to="/shopping" className="text-white font-medium text-end">
              <p
                className="bg-primary-blue hover:bg-dark-navy rounded-lg
              ease-in-out duration-500 px-2 py-2 text-center"
              >
                Continue Shopping
              </p>
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default SumOrder;
