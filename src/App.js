import React from 'react';
import Ball from './Component/Ball'
import Bat from './Component/Bat';
import Users from './Component/Users'
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Ecommerce from './cartPOC/Ecommerce';
import EcommerceStore from "./cartPOC/app/store";
function App() {
  return (
    // redux Example
    // <Provider store={store}>
    //   <div className="App">
    //   <Ball></Ball>
    //   <Bat></Bat>
    //   <Users></Users>
    //       </div>
    // </Provider>
    <Provider store={EcommerceStore}>
      <Ecommerce></Ecommerce>
    </Provider>
  );
}

export default App;
