import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axiosInstance from "../instance";
const SignUp = () => {
  const [store, useStore] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role_id: "customer",
      store: {
        name: "",
        tax_no: "",
        bank_account: "",
      },
    },
    mode: "all",
  });

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    useStore(selectedRole === "store");
  };

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <section className="w-1/2 mx-auto mt-20 mb-20">
        <h2 className="mb-10 font-bold text-4xl text-dark-navy">Sign Up</h2>
        <form onSubmit={handleSubmit(handleForm)} className="">
          <div className="flex gap-2 flex-col mb-6">
            <label htmlFor="name" className="text-dark-navy font-bold ">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Full Name Required!",
                minLength: {
                  value: 3,
                  message: "Full Name has to be at least 3 characters!",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please enter only letters (A-Z, a-z).",
                },
              })}
              className="bg-gray-200 focus:bg-white p-3 rounded-lg"
              placeholder="Full Name"
            />
            {errors.name && (
              <p className="text-red-600 font-bold text-sm animate-shake">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-col mb-6">
            <label htmlFor="email" className="text-dark-navy font-bold ">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email address required!",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className="bg-gray-200 focus:bg-white p-3  rounded-lg"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 font-bold text-sm animate-shake">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-col mb-6">
            <label htmlFor="password" className="text-dark-navy font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="bg-gray-200 focus:bg-white p-3 rounded-lg"
              placeholder="***************"
            />
            {errors.password && (
              <p className="text-red-600 font-bold text-sm animate-shake">
                {errors.email?.password}
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-col mb-6">
            <label htmlFor="role_id" className="text-dark-navy font-bold">
              Select Role
            </label>
            <select
              name="role_id"
              id="role_id"
              className="bg-gray-200 focus:bg-white p-3 rounded-lg"
              onChange={handleRoleChange}
            >
              <option value="customer">Customer</option>
              <option value="store">Store</option>
            </select>
          </div>
          {store && (
            <>
              <div className="flex gap-2 flex-col mb-6">
                <label htmlFor="storeName" className="text-dark-navy font-bold">
                  Store Name
                </label>
                <input
                  type="text"
                  id="storeName"
                  {...register("store.name")}
                  className="bg-gray-200 focus:bg-white p-3 rounded-lg"
                  placeholder="Store Name"
                />
              </div>
              <div className="flex gap-2 flex-col mb-6">
                <label htmlFor="tax_no" className="text-dark-navy font-bold">
                  Store Tax ID
                </label>
                <input
                  type="text"
                  id="tax_no"
                  {...register("store.tax_no")}
                  className="bg-gray-200 focus:bg-white p-3 rounded-lg"
                  placeholder="TXXXXVXXXXXX"
                />
              </div>
              <div className="flex gap-2 flex-col mb-6">
                <label
                  htmlFor="bank_account"
                  className="text-dark-navy font-bold"
                >
                  Store Bank Account
                </label>
                <input
                  type="text"
                  id="bank_account"
                  {...register("store.bank_account")}
                  className="bg-gray-200 focus:bg-white p-3 rounded-lg"
                  placeholder="IBAN Address"
                />
              </div>
            </>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 text-white text-sm bg-primary-blue border-solid 
              border-[1px] border-primary-blue rounded
               "
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};
export default SignUp;
