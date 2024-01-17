import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  editAddress,
  editCard,
} from "../../../store/actions/shoppingCartAction";
import cityList from "../../../data/cityList";
//icons
import { AiOutlineClose } from "react-icons/ai";

const EditCardFields = ({ handleEdit, cardId }) => {
  const dispatch = useDispatch();
  const cardList = useSelector((store) => store.cart.payment);

  const foundCredit = cardList.find((credit) => credit.id === cardId);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      id: cardId,
      card_no: foundCredit.card_no,
      expire_month: foundCredit.expire_month.toString().padStart(2, "0"),
      expire_year: foundCredit.expire_year,
      name_on_card: foundCredit.name_on_card,
    },
    mode: "all",
  });

  const handleForm = (data) => {
    dispatch(editCard(data));
    handleEdit();
  };
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="block">
        <div className="fixed align-middle z-50 top-0 left-0 w-full h-full overflow-scroll bg-slate-300/50">
          <div className="bg-white mx-auto my-14 overflow-x-hidden overflow-y-auto max-w-[520px] max-h-[620px] rounded-lg">
            <div className="flex flex-row justify-between border-b-[1px] border-muted-color p-3">
              <h2 className="font-bold text-dark-navy text-lg">
                Edit Credit Card
              </h2>
              <button onClick={handleEdit}>
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-2 flex flex-col">
                <label htmlFor="card" className="font-medium">
                  Credit Card Number*
                </label>
                <input
                  type="text"
                  id="card"
                  name="card"
                  className="bg-slate-400/20 py-2 rounded-md mt-2 px-3"
                  {...register("card_no", {
                    required: "Card field is required!",
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: "Please enter a valid credit card.",
                    },
                  })}
                />
                {errors.card_no && (
                  <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                    {errors.card_no?.message}
                  </p>
                )}
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="name" className="font-medium">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-slate-400/20 py-2 rounded-md mt-2 px-3"
                  {...register("name_on_card", {
                    required: "Name field is required!",
                    pattern: {
                      value: /^[a-zA-ZğĞüÜşŞıİöÖçÇ\s]+$/u,
                      message: "Please enter a valid name!",
                    },
                  })}
                />
                {errors.name_on_card && (
                  <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                    {errors.name_on_card?.message}
                  </p>
                )}
              </div>
              <div className="flex gap-5">
                <div className="">
                  <p className="mt-2 font-medium">Expire Date*</p>
                  <select
                    id="month"
                    name="month"
                    className="bg-slate-400/20 w-28 py-2 rounded-md mt-2 mr-3 px-1"
                    {...register("expire_month", {
                      required: "Month*",
                    })}
                  >
                    <option value="" defaultValue>
                      Month
                    </option>
                    {[...Array(12).keys()].map((month) => (
                      <option
                        key={month + 1}
                        value={String(month + 1).padStart(2, "0")}
                      >
                        {String(month + 1).padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                  {errors?.expire_month && (
                    <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                      {errors.expire_month?.message}
                    </p>
                  )}
                  <select
                    id="year"
                    name="year"
                    className="bg-slate-400/20 w-28 py-2 rounded-md mt-2 px-2"
                    {...register("expire_year", {
                      required: "Year*",
                    })}
                  >
                    <option value="" defaultValue>
                      Year
                    </option>
                    {[...Array(10).keys()].map((index) => {
                      const startYear = 2023;
                      const nextYear = startYear + index;
                      return (
                        <option key={nextYear} value={nextYear}>
                          {nextYear}
                        </option>
                      );
                    })}
                  </select>
                  {errors.expire_year && (
                    <p className="text-red-600 font-bold text-xs animate-shake mt-1">
                      {errors.expire_year?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="p-3 ml-5 mr-5 pb-10">
              <div className="flex justify-center">
                <button
                  disabled={!isValid}
                  className="font-bold text-white px-36 
                    py-3 bg-primary-blue hover:bg-black duration-500 ease-in-out rounded-md"
                >
                  EDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default EditCardFields;
