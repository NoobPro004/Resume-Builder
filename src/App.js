import React from 'react';
import Ball from './Component/Ball'
import Bat from './Component/Bat';
import Users from './Component/Users'
import {Provider} from "react-redux";
import store from "./store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Ball></Ball>
      <Bat></Bat>
      <Users></Users>
          </div>
    </Provider>
    
  );
}

export default App;
