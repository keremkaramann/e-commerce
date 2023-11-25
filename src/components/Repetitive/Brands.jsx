import br1 from "/src/assets/brands/fa-brands-1.png";
import br2 from "/src/assets/brands/fa-brands-2.png";
import br3 from "/src/assets/brands/fa-brands-3.png";
import br4 from "/src/assets/brands/fa-brands-4.png";
import br5 from "/src/assets/brands/fa-brands-5.png";
import br6 from "/src/assets/brands/fa-brands-6.png";
const Brands = () => {
  const imgBrands = [br1, br2, br3, br4, br5, br6];
  return (
    <div className="flex mdCstm:justify-around items-center bg-[#FAFAFA] p-28 flex-wrap xs:gap-12 middle:gap-8 xs:justify-center xs:flex-col middle:flex-row">
      {imgBrands.map((url, index) => {
        return <img key={index} src={url} alt="" />;
      })}
    </div>
  );
};
export default Brands;
