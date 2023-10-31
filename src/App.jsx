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
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product">
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
      </Switch>
    </>
  );
}

export default App;
