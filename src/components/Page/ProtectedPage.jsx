import { useState, useEffect } from "react";

const ProtectedPage = ({ PageComponent, fromUrl }) => {
  const [redirectCount, setRedirectCount] = useState(5);

  useEffect(() => {
    let countDownInterval;

    if (!localStorage.getItem("token")) {
      countDownInterval = setInterval(() => {
        setRedirectCount((prevCount) => prevCount - 1);
      }, 1000);
    }
    //redirect
    setTimeout(() => {
      clearInterval(countDownInterval);

      window.location.href = "/login";
    }, 5000);

    return () => {
      clearInterval(countDownInterval);
    };
  }, [fromUrl]);

  return localStorage.getItem("token") ? (
    <PageComponent />
  ) : (
    <section className="bg-dark-navy h-screen xs:pt-10 xs:px-10 middle:pt-20 middle:px-20">
      <div
        className="flex flex-col justify-center font-medium xs:text-normal middle:text-3xl 
      animate-pulse border-[1px] border-white leading-10 text-white text-center p-10"
      >
        <p className="mb-4">You need to login first to buy items.</p>
        <p>Redirecting to Login page in {redirectCount} seconds...</p>
      </div>
    </section>
  );
};
export default ProtectedPage;
