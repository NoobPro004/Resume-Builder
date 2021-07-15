import React from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import NavBar from "./cartComponents/NavBar"
import HomePage from "./cartComponents/HomePage"
import CartPage from "./cartComponents/CartPage"
import ProductPage from "./cartComponents/ProductPage"
function Ecommerce() {
    return (
        <Router>
            <NavBar></NavBar>
            <Switch>
                <Route path="/product" component={ProductPage}></Route>
                <Route path="/cart" component={CartPage}></Route>
                <Route path="/" component={HomePage}></Route>
                <Redirect to ="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Ecommerce
