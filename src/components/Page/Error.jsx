import Lottie from "lottie-react";
import spaceError from "../../lottie/animation_loh9chq7.json";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="bg-dark-navy h-[1250px]">
      <div className="flex justify-center pt-8 mb-4">
        <div>
          <Link className="btn1Sm" to="/">
            Go Back To Home Page
          </Link>
        </div>
      </div>
      <Lottie animationData={spaceError} loop={true} />
    </div>
  );
};
export default Error;
