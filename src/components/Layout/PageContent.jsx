import ProductCard from "../Repetitive/ProductCard";
import ReusableSwiper from "../Repetitive/ReusableCarouse";
import productData from "../data";
import Posts from "../Repetitive/Posts";
import { imagePosts } from "../../data/postsData";
const PageContent = () => {
  const imagePaths = [
    "/src/assets/carouselImg/shop-hero-1-product-slide-1.jpg",
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
  ];
  const imagePaths2 = [
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
    "/src/assets/carouselImg/shop-hero-1-product-slide-1.jpg",
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
    "/src/assets/carouselImg/shop-hero-1-product-slide-1.jpg",
  ];

  return (
    <>
      <ReusableSwiper imagePaths={imagePaths} />
      <section className="pt-20 pb-20 bg-[#FAFAFA]">
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-4 text-dark-navy">
            EDITOR'S PICK
          </h2>
          <p className="text-secondary-text text-sm mb-10">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <div className="relative">
            <img src="/src/assets/editorImg/filter.png" alt="" />
            <button className="px-16 py-3 bg-white font-bold absolute bottom-7 left-7">
              MEN
            </button>
          </div>
          <div className="relative">
            <img src="/src/assets/editorImg/filter (1).png" alt="" />
            <button className="px-9 py-3 bg-white font-bold absolute bottom-7 left-5">
              WOMEN
            </button>
          </div>
          <div>
            <div className="relative">
              <img
                src="/src/assets/editorImg/filter (2).png"
                alt=""
                className="mb-4"
              />
              <button className="px-6 py-3 bg-white font-bold absolute bottom-7 left-5">
                ACCESSORIES
              </button>
            </div>
            <div className="relative">
              <img src="/src/assets/editorImg/filter (3).png" alt="" />
              <button className="px-10 py-3 bg-white font-bold absolute bottom-7 left-5">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h4 className="text-secondary-text text-lg mb-4 pt-16">
            Featured Products
          </h4>
          <h2 className="font-bold text-2xl mb-4 text-dark-navy ">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-secondary-text text-sm mb-16">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div
          className="flex gap-5 justify-center px-30 flex-wrap"
          style={{ maxWidth: "1060px", margin: "0 auto " }}
        >
          {productData.map((product, index) => {
            const { url, content, department } = product;
            return (
              <ProductCard
                key={index}
                url={url}
                content={content}
                department={department}
              />
            );
          })}
        </div>
        <ReusableSwiper imagePaths={imagePaths2} />
        <div className="flex justify-evenly gap-5 flex-wrap">
          <div className="xs:order-last mdCstm:order-1 xs:p-5 mdCstm:p-0 xs:hidden mdCstm:block">
            <img
              src="/src/assets/generalImg/asian-woman-man-with-winter-clothes 1.png"
              alt=""
            />
          </div>
          <div className="xs:order-last mdCstm:order-0 xs:p-5 mdCstm:p-0 xs:block mdCstm:hidden">
            <img
              src="/src/assets/generalImg/asian-woman-man-with-winter-clothes 2.png"
              alt=""
            />
          </div>
          <div className="mt-20 p-5 xs:leading-[2.5rem] mdCstm:leading-[4rem] flex flex-col justify-center xs:order-1 mdCstm:order-0 xs:text-center mdCstm:text-left">
            <h5 className="text-muted-color text-bold">SUMMER 2020</h5>
            <h2 className="font-bold text-[2.5rem] text-dark-navy mb-5 mt-5">
              Part of the Neural <br /> Universe
            </h2>
            <p className="leading-8 text-secondary-text text-xl">
              We know how large objects will act, <br /> but things on a small
              scale.
            </p>
            <div className="xs:hidden mdCstm:block">
              <div className="flex gap-3 mt-10 xs:flex-col mdCstm:flex-row">
                <button className="btn1">BUY NOW</button>
                <button className="btn2">READ MORE</button>
              </div>
            </div>
            <div className="xs:block mdCstm:hidden">
              <div className="flex gap-3 mt-10 xs:flex-col mdCstm:flex-row items-center">
                <button className="btn1Sm">BUY NOW</button>
                <button className="btn2Sm">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 mb-32">
          <div className="leading-10 text-center mb-20">
            <h6 className="text-primary-blue text-sm font-bold mb-5">
              Practice Advice
            </h6>
            <h2 className="font-bold text-[2.5rem] mb-5">Practice Advice</h2>
            <p className="text-secondary-text text-sm">
              Problems trying to resolve the conflict between
            </p>
            <p className="text-secondary-text text-sm">
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex justify-center gap-5 flex-wrap">
            {imagePosts.map((posts, i) => {
              const { url } = posts;
              return <Posts key={i} url={url} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default PageContent;
