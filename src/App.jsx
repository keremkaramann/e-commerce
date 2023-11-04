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
import { fetchCategories } from "./store/actions/globalRedAction";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleVerify());
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
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
