import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleVerify } from "./store/actions/userAction";
import Home from "./components/Page/Home";
import ProductList from "./components/Page/ProductList";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Team from "./components/Page/Team";
import About from "./components/Page/About";
import Contact from "./components/Page/Contact";
import Product from "./components/Page/Product";
import SignUp from "./components/Page/SignUp";
import Login from "./components/Page/Login";
import Error from "./components/Page/Error";
import Summary from "./components/Page/Summary";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleVerify());
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shopping">
          <ProductList />
        </Route>
        <Route path="/:gender/:categoryId/:id/:productNameSlug">
          <Product />
        </Route>
        <Route path="/summary" exact>
          <Summary />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
