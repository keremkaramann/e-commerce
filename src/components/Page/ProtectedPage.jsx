import { useState } from "react";
import { useHistory } from "react-router-dom";

const ProtectedPage = ({ PageComponent, fromUrl }) => {
  const history = useHistory();
  const [counter, setCounter] = useState(3);

  const checkUserLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <PageComponent />;
    } else {
      setTimeout(() => {
        setCounter((prevCounter) => prevCounter - 1);
        history.push({
          pathname: "/login",
          state: { referrer: fromUrl },
        });
      }, 3000);
      return (
        <section className="bg-dark-navy h-screen xs:pt-10 xs:px-10 middle:pt-20 middle:px-20">
          <div
            className="flex flex-col justify-center font-medium xs:text-normal middle:text-3xl 
      animate-pulse border-[1px] border-white leading-10 text-white text-center p-10"
          >
            <p className="mb-4">You need to login first to buy items.</p>
            <p>Redirecting to Login page in {counter} seconds...</p>
          </div>
        </section>
      );
    }
  };

  return checkUserLoggedIn();
};
export default ProtectedPage;
