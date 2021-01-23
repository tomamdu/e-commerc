
import React,{ useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from "./StateProvider"
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51ICWXeH0pdj33Yc7d4xFdzOydv038KWC4zzS4YCKnka9WJTVWwlcqoBhRjlgpZoArFSwPFCkGTWPW1eua3cAoNSx00gkfUr5cb');

function App() {
   const [{}, dispatch] = useStateValue();
   useEffect(()=>{
     // will only run once when the app component loads
     auth.onAuthStateChanged(authUser =>{
        console.log('THE USER IS >>>', authUser);

        if(authUser){
           //the user just logged in / the user was logged in
           dispatch({
              type:'SET_USER',
              user: authUser
           })
        }else{
           //the user is logged out
           dispatch({
            type:'SET_USER',
            user: null
         })
        }
     })
   },[])
  return (
    
    <Router>
          <div className="app">
            
          
          <Switch>
            <Route path="/login">
                <Login/>
             </Route>
             <Route path="/payment">
                <Header/>
                <Elements stripe={promise}>
                      <Payment/>
                </Elements>
                
             </Route>
             <Route path="/checkout">
                <Header/>
                
                <Checkout/>
             </Route>
             <Route path="/">
                <Header/>
                <Home/>
            </Route>
          </Switch>
          
      
         </div>
  
   </Router>
      
  );
}

export default App;
