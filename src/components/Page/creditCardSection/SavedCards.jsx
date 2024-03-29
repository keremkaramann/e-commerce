import { useState } from "react";
import { useSelector } from "react-redux";
import EditCardFields from "./EditCardFields";

const SavedCards = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [cardId, setCardId] = useState(0);
  const creditCards = useSelector((store) => store.cart.payment);

  const handleEdit = (id) => {
    setShowEdit(!showEdit);
    setCardId(id);
  };

  return (
    <>
      {creditCards?.map((card) => {
        const { id, card_no, expire_month, expire_year } = card;
        return (
          <div key={id} className="mb-5 mt-10">
            <div className="mb-2">
              <div className="flex justify-between px-1">
                <div>
                  <input type="radio" id="titleAddress" name="titleAddress" />
                </div>
                <div className="border-b-2 border-dark-navy">
                  <button onClick={() => handleEdit(id)}>Edit</button>
                </div>
              </div>
            </div>
            <div className="bg-slate-300/20 border-2 border-primary-blue px-3 py-5 rounded-md xs:w-full middle:w-[338px]">
              <div>
                <div className="flex justify-between items-center gap-1">
                  <p className="font-medium">Credit Card</p>
                  <img
                    src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                    alt="master_card_logo"
                    className="w-24 h-12"
                  />
                </div>
                <div className="text-sm mt-5 font-bold flex flex-col items-end">
                  <p>{card_no} </p>
                  <div className="flex">
                    <p>{String(expire_month)?.padStart(2, 0)}</p>
                    <span>/</span>
                    <p>{expire_year} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {showEdit && <EditCardFields handleEdit={handleEdit} cardId={cardId} />}
    </>
  );
};
export default SavedCards;
