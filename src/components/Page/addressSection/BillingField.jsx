import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import cityList from "../../../data/cityList";
import { saveBillingAddress } from "../../../store/actions/shoppingCartAction";
const BillingField = ({ handleBilling }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "all",
  });
  const handleForm = (data) => {
    dispatch(saveBillingAddress(data));
  };
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="block">
        <div className="fixed align-middle z-50 top-0 left-0 w-full h-full overflow-scroll bg-slate-300/50">
          <div className="bg-white mx-auto my-14 overflow-x-hidden overflow-y-auto max-w-[520px] max-h-[620px] rounded-lg">
            <div className="flex flex-row justify-between border-b-[1px] border-muted-color p-3">
              <h2 className="font-bold text-dark-navy text-lg">
                Add New Address
              </h2>
              <button onClick={handleBilling}>
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
            <div className="p-3 flex justify-around gap-2 flex-wrap">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-dark-navy font-bold mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is Required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters!",
                    },
                    pattern: {
                      value: /^[A-Za-zıöÖİğĞşŞçÇ ]+$/,
                      message: "Please enter only letters (A-Z, a-z).",
                    },
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.name?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="surname"
                  className="text-dark-navy font-bold mb-2"
                >
                  Surname*
                </label>
                <input
                  type="text"
                  id="surname"
                  {...register("surname", {
                    required: "Surname is Required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters!",
                    },
                    pattern: {
                      value: /^[A-Za-zıöÖİğĞşŞçÇ ]+$/,
                      message: "Please enter only letters (A-Z, a-z).",
                    },
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                  placeholder="Surname"
                />
                {errors.surname && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.surname?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="p-3 flex justify-around gap-2 flex-wrap">
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-dark-navy font-bold mb-2"
                >
                  Phone*
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register("phone", {
                    required: "Phone is Required!",
                    minLength: {
                      value: 3,
                      message: "Enter valid phone number",
                    },
                    pattern: {
                      value: /^0\d{10}$/,
                      message: "Please enter valid number!",
                    },
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                  placeholder="0(__)__ __ __"
                />
                {errors.phone && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.phone?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="text-dark-navy font-bold mb-2">
                  City*
                </label>
                <select
                  id="city"
                  {...register("city", {
                    required: "City is required!",
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 w-[194px] h-[40px] rounded-lg"
                >
                  <option value="" disabled>
                    Select a city
                  </option>
                  {cityList.map((city, id) => {
                    return (
                      <option key={id} value={city.name}>
                        {city.name}
                      </option>
                    );
                  })}
                </select>
                {errors.city && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.city?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="p-3 flex justify-around gap-2 flex-wrap">
              <div className="flex flex-col">
                <label
                  htmlFor="district"
                  className="text-dark-navy font-bold mb-2"
                >
                  District*
                </label>
                <input
                  type="text"
                  id="district"
                  {...register("district", {
                    required: "District is Required!",
                    minLength: {
                      value: 3,
                      message: "Enter valid district",
                    },
                    pattern: {
                      value: /^[A-Za-zıöÖİğĞşŞçÇ]{3,40}$/,
                      message: "Please enter more than 4 characters!",
                    },
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                  placeholder="District"
                />
                {errors.district && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.district?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="neighborhood"
                  className="text-dark-navy font-bold mb-2"
                >
                  Neighborhood*
                </label>
                <input
                  type="text"
                  id="neighborhood"
                  {...register("neighborhood", {
                    required: "Neighborhood is Required!",
                    minLength: {
                      value: 3,
                      message: "Enter valid neighborhood",
                    },
                    pattern: {
                      value: /^[A-Za-zıöÖİğĞşŞçÇ]{3,40}$/,
                      message: "Please enter more than 4 characters!",
                    },
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 rounded-lg"
                  placeholder="Neighborhood"
                />
                {errors.neighborhood && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.neighborhood?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="p-3 ml-5 mr-5">
              <div className="">
                <label
                  htmlFor="address"
                  className="text-dark-navy font-bold mb-2"
                >
                  Address*
                </label>
                <textarea
                  id="address"
                  {...register("address", {
                    required: "Address is Required!",
                    minLength: {
                      value: 4,
                      message: "Enter valid Address",
                    },
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 rounded-lg w-full"
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.address?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="p-3 ml-5 mr-5">
              <div className="">
                <label
                  htmlFor="title"
                  className="text-dark-navy font-bold mb-2"
                >
                  Address Title*
                </label>
                <input
                  type="input"
                  id="title"
                  {...register("title", {
                    required: "Title is Required!",
                    minLength: {
                      value: 2,
                      message: "Enter valid title",
                    },
                    pattern: {
                      value: /^[A-Za-zıöÖİğĞşŞçÇ ]{2,20}$/,
                      message: "Please enter more than 4 characters!",
                    },
                  })}
                  className="bg-gray-200/50 focus:bg-white p-2 rounded-lg w-full"
                  placeholder="Title"
                />
                {errors.title && (
                  <p className="text-red-600 font-medium text-sm animate-shake">
                    {errors?.title?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="p-3 ml-5 mr-5">
              <div className="flex justify-center">
                <button
                  disabled={!isValid}
                  className="font-bold text-white px-36 
                    py-3 bg-primary-blue hover:bg-black duration-500 ease-in-out rounded-md"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default BillingField;
