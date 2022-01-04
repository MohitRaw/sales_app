import "./App.css";
import Product from "./components/product/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "./components/checkoutPage/CheckoutPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Product />
          </Route>
          <Route path="/checkoutPage">
            <CheckoutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
