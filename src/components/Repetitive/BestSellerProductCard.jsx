const BestSellerCard = ({ url, content, department, price }) => {
  return (
    <div className="bg-white">
      <img src={url} alt="product-img" className="xs:w-[348px] middle:w-full" />
      <div className="mt-5 py-2 pb-4 px-5 ">
        <p className="text-dark-navy font-bold">{content} </p>
        <p className="text-secondary-text font-bold text-sm mt-5 mb-5">
          {department}
        </p>
        <div className="flex gap-2 mb-5">
          <p className="text-[#BDBDBD] text-bold">$16.48</p>
          <p className="text-bold text-[#23856D]">$6.48</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
