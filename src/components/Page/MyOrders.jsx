import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPrevOrder } from "../../store/actions/shoppingCartAction";
const MyOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrevOrder());
  }, []);

  return <div>MyOrders</div>;
};
export default MyOrders;
