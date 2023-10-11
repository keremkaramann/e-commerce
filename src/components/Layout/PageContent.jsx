import ProductCard from "../Repetitive/ProductCard";
import ReusableSwiper from "../Repetitive/ReusableCarouse";

const PageContent = () => {
  const imagePaths = [
    "/src/assets/carouselImg/shop-hero-1-product-slide-1.jpg",
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
  ];
  const imagePaths2 = [
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
    "/src/assets/carouselImg/shop-hero-2-product-slide-2.png",
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
        <div className="flex gap-5 justify-center flex-wrap px-32">
          <ProductCard
            url={"/src/assets/productCardImg/product-cover-5.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
          <ProductCard
            url={"/src/assets/productCardImg/product4.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
          <ProductCard
            url={"/src/assets/productCardImg/product3.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
          <ProductCard
            url={"/src/assets/productCardImg/product2.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
          <ProductCard
            url={"/src/assets/productCardImg/product2.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
          <ProductCard
            url={"/src/assets/productCardImg/product2.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
          <ProductCard
            url={"/src/assets/productCardImg/product2.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
          <ProductCard
            url={"/src/assets/productCardImg/product2.png"}
            content={"Graphic design"}
            department={"English Department"}
          />
        </div>
        <ReusableSwiper imagePaths={imagePaths2} />
      </section>
    </>
  );
};
export default PageContent;
