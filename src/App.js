import { useEffect } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from "./Payment";
import Orders from './Orders';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { auth } from './firebase';

import { useStateValue } from './StateProvider';


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NOmqfSFkBbc1fpu2qAp2u2phWe2t3n0lAcaiffTaqjOAIRQkRxPFDhHYjPsne4Bk3GiOILstIXiroibsTnNTkfT00QaDznm4b"
);


function App() {


  const [{basket ,user},dispatch]=useStateValue();

  

   
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);


      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
           {/* <Header /> */}
           <Routes>
              <Route path='/'  element={<><Header /><Home/></>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/checkout' element={<><Header/><Checkout/></>} />  
              <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment /></Elements></>} /> 
              <Route path='/orders' element={<><Header/><Orders/></>} />        
           </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
