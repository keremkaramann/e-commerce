import { useSelector } from "react-redux";
const SavedCards = () => {
  const creditCards = useSelector((store) => store.cart.payment);
  return (
    <div className="mb-5 mt-10">
      <div className="flex justify-between mb-2">
        <div className="flex gap-1">
          <input
            type="radio"
            id="titleAddress"
            name="titleAddress"
            defaultChecked
          />
          <label htmlFor="titleAddress">asdsd</label>
        </div>
      </div>
      <div className="bg-slate-300/20 border-2 border-red-600 px-3 py-5 rounded-md xs:w-full middle:w-[338px]">
        <div>
          <div className="flex items-center justify-between gap-1">
            <img
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
              alt="mastercardlogo"
              className="w-24 h-12"
            />
          </div>
          <div className="text-sm mt-5 font-bold flex flex-col items-end">
            <p>asd</p>
            <p>asds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SavedCards;
