import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShippingFast } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { order } from "../../../store/actions/shoppingCartAction";

const OrderNow = ({ orderData }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const shippingCost = 50;
  const history = useHistory();

  const isValid =
    orderData &&
    orderData.address_id &&
    orderData.order_date &&
    orderData.card_no &&
    orderData.card_name &&
    orderData.card_expire_month &&
    orderData.card_expire_year &&
    orderData.card_ccv &&
    orderData.price &&
    orderData.products &&
    orderData.products.length > 0;

  useEffect(() => {
    let sum = 0;

    cartItems.forEach((item) => {
      sum += item.product.price * item.count;
    });

    setTotalPrice(sum);
  }, [cartItems]);

  const handleOrder = () => {
    history.push("/successful");
    dispatch(order(orderData));
  };

  return (
    <div className="flex items-start mt-10 xs-p-3 middle:p-0">
      <div className="border-[1px] border-muted-color xs:w-[290px] middle:w-[400px] p-5 leading-10 text-dark-navy">
        <h1 className="text-dark-navy font-bold text-xl mb-10 mt-2">
          Order Summary
        </h1>
        <div className="flex justify-between gap-5 text-lg m-2">
          <p className="font-medium">SubTotal:</p>
          <p> ${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between gap-5 text-lg m-2">
          <div className="flex flex-col mb-2">
            <p className="font-medium mb-2">Shipping:</p>
            <span className="font-thin text-secondary-text text-sm flex items-center gap-1">
              <FaShippingFast className="font-medium" />
              {totalPrice.toFixed(2) > 500
                ? "Free shipping over $500!"
                : `Only $${(500 - totalPrice).toFixed(
                    2
                  )} left for free shipping!`}
            </span>
          </div>
          <p>
            {totalPrice.toFixed(2) > 500
              ? "-$" + shippingCost
              : "$" + shippingCost}
          </p>
        </div>
        <div className="flex text-lg m-2 flex-wrap xs:justify-center middle:justify-normal mb-5">
          <p
            className=" text-primary-blue font-medium 
                cursor-pointer border-[1px] bg-sky-200 xs:px-[3.3rem] xs:py-1 middle:py-1 middle:px-4"
          >
            Apply
          </p>
          <input
            type="text"
            placeholder="Promo Code"
            className="border-[1px] p-1 xs:w-40 text-muted-color bg-slate-100"
          />
        </div>
        <div className="flex justify-between gap-5 text-lg m-2 font-bold">
          <p className="font-bold">Total:</p>
          <p>
            $
            {totalPrice.toFixed(2) > 500
              ? (totalPrice - 50).toFixed(2)
              : (totalPrice + 50).toFixed(2)}
          </p>
        </div>

        <div
          className="flex items-center justify-center mt-5
                gap-2 bg-dark-navy py-2 text-white font-medium cursor-pointer"
        >
          <button onClick={handleOrder} disabled={!isValid}>
            ORDER
          </button>
          <FiChevronsRight />
        </div>
      </div>
    </div>
  );
};
export default OrderNow;
