import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { BsChevronRight } from "react-icons/bs";

const ProductList = () => {
  const imgCover = [
    "/src/assets/cardContentImg/1.jpg",
    "/src/assets/cardContentImg/2.jpg",
    "/src/assets/cardContentImg/3.jpg",
    "/src/assets/cardContentImg/4.jpg",
    "/src/assets/cardContentImg/5.jpg",
  ];

  return (
    <div>
      <Header bgColor={"products-bg"} justify={"justify-around"} />
      <section className=" bg-[#FAFAFA] py-5">
        <div className=" flex items-center justify-between mx-auto p-5 w-full max-w-[1200px]">
          <h1 className="text-dark-navy text-2xl font-bold">Shop</h1>
          <div></div>
          <div className="flex gap-3">
            <a href="/" className="text-dark-navy text-sm font-bold">
              Home
            </a>
            <BsChevronRight className="text-muted-color font-bold text-lg" />
            <a href="/products" className="text-muted-color text-sm font-bold">
              Shop
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center gap-3 flex-wrap bg-[#FAFAFA] pb-10">
          {imgCover.map((urls, index) => {
            return (
              <div
                key={index}
                className="bg-cover bg-center h-[223px] w-[223px] bg-no-repeat relative"
                style={{ backgroundImage: `url(${urls})` }}
              >
                <div className="bg-[#2121214b] h-[223px] w-[223px] text-white">
                  <div className="absolute top-[40%] left-[35%] text-center">
                    <p className="font-bold mb-3">CLOTHS</p>
                    <p className="text-sm">5 Items</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center"></div>
      </section>
      <Footer />
    </div>
  );
};
export default ProductList;
