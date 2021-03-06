import Navbar from "./components/Navbar"
import Card from "./components/Card"
import CardDesc from "./components/CardDesc"
import Cart from "./components/Cart"
import Login from "./components/Login"
import Register from "./components/Register"
import ProductInfo  from "./components/ProductInfo"
import Products from "./components/Products"
import ItemState from "./context/item/ItemState"
import AuthState from "./context/auth/AuthState"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (

    <AuthState>
      <ItemState>
      
          <Router>
        <div className="App">
          <Navbar/>
          <Switch>
              <Route exact path="/">
                <Card/>
              </Route>
              {/* <Route exact path="/products">
                <Products/>
                <ProductInfo/>
              </Route> */}
              <Route exact path="/cart">
                <Cart/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/register">
                <Register/>
              </Route>
              <Route exact path="/detail/:id">
                <CardDesc/>
              </Route>
      
            </Switch>
        </div>
            </Router>
      </ItemState>
    </AuthState>
  );
}

export default App;
