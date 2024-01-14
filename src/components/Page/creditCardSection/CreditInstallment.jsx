import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const CreditInstallment = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const shippingCost = 50;

  const lastPrice =
    totalPrice.toFixed(2) > 500
      ? totalPrice.toFixed(2)
      : (Number(totalPrice.toFixed(2)) + shippingCost).toFixed(2);

  useEffect(() => {
    let sum = 0;

    cartItems.forEach((item) => {
      sum += item.product.price * item.count;
    });

    setTotalPrice(sum);
  }, [cartItems]);
  return (
    <div className="ml-10">
      <p className="font-medium">Select Installment Amount</p>
      <div className="flex text-sm justify-between gap-20 mb-4">
        <div className="border-b-[2px] border-dark-navy py-2">
          <p>Installments</p>
        </div>
        <div className="border-b-[2px] border-dark-navy  py-2">
          <p>Monthly Payments</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-2 flex gap-3">
          <input
            type="radio"
            id="singlePayment"
            name="installmentAmount"
            value="123"
            defaultChecked
          />
          <label htmlFor="singlePayment">Single Payment</label>
        </div>
        <label htmlFor="singlePayment" className="mt-3">
          {lastPrice}$
        </label>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-2 flex gap-3">
          <input type="radio" id="two" name="installmentAmount" value="123" />
          <label htmlFor="two">2</label>
        </div>
        <label htmlFor="two">{(lastPrice / 2).toFixed(2)}$</label>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-2 flex gap-3">
          <input type="radio" id="four" name="installmentAmount" value="123" />
          <label htmlFor="four">4</label>
        </div>
        <label htmlFor="four">{(lastPrice / 4).toFixed(2)}$</label>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-2 flex gap-3">
          <input type="radio" id="six" name="installmentAmount" value="123" />
          <label htmlFor="six">6</label>
        </div>
        <label htmlFor="six">{(lastPrice / 6).toFixed(2)}$</label>
      </div>
    </div>
  );
};
export default CreditInstallment;
