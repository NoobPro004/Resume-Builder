import React from 'react';
import Ball from './Component/Ball'
import Bat from './Component/Bat';
import {Provider} from "react-redux";
import store from "./store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Ball></Ball>
      <Bat></Bat>
          </div>
    </Provider>
    
  );
}

export default App;
