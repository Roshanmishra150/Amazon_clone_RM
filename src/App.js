import React, { useEffect } from "react"
import './css/App.css';
import Header from "./header"
import Home from "./home"
import Footer from "./Footer"
import Orders from "./orders"
import Checkout from "./checkout"
import Login from "./Login"
import Payment from "./payment"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51ItaWLSCWOJDdAshR931qatvkqBZWuSPRl70NXjnqHcOF5U8gXRdB3Ds5Umezp1WAMVS7erAovaw0URHGO0gWLw2009MZRefgA');

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    // WILL ONLY RUN ONCE WHEN THE APP COMPONENT LOADS ....
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // USERJUST LOGGED IN 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //  user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            
            <Route path="/checkout">
              <Header/>
              <Checkout />
            </Route>

            <Route path="/payment">
              <Header/>
              <Elements stripe={promise} >
                <Payment/>
              </Elements>
            </Route>

            <Route path="/">
              <Header/>
              <Home />
              <Footer />
            </Route>
            
          </Switch>
        </div>
    </Router>
  );
}

export default App;





// https://clone-by-rm.web.app