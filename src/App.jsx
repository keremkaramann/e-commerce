import Home from "./components/Page/Home";
import ProductList from "./components/Page/ProductList";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Team from "./components/Page/Team";
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
        <Route path="/team">
          <Team />
        </Route>
      </Switch>
    </>
  );
}

export default App;
