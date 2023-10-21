const Brands = () => {
  const imgBrands = [
    "/src/assets/brands/fa-brands-1.png",
    "/src/assets/brands/fa-brands-2.png",
    "/src/assets/brands/fa-brands-3.png",
    "/src/assets/brands/fa-brands-4.png",
    "/src/assets/brands/fa-brands-5.png",
    "/src/assets/brands/fa-brands-6.png",
  ];
  return (
    <div className="flex mdCstm:justify-around items-center bg-[#FAFAFA] p-20 pb-20 flex-wrap xs:gap-12 middle:gap-8 xs:justify-center xs:flex-col middle:flex-row">
      {imgBrands.map((url, index) => {
        return <img key={index} src={url} alt="" />;
      })}
    </div>
  );
};
export default Brands;
