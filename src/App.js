import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from  './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe("pk_test_51HPwWWAYJHq942rfIlgssImPyZLLGilCXPd4ST1OwKIUsBcYAiwNFxgr5ofnzxqDUrTmuX9woDf4ceVYRgWP1xNi00wyTCFtyx");


function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if (authUser) {
        //the user just logged in / the user was logged in 

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
              <Orders />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/checkout">
            <Header />
              <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />  
              <Home />
            <Footer/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
