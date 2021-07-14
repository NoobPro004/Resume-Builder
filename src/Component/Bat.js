import React,{useState} from 'react'
import {connect} from "react-redux";
function Bat(props) {

    const [bat,setBat]=useState(5);
    const [value,setValue]=useState("");
    return (
        <div>
           <h1>Number of Bats-{props.quantity}</h1> 
           <input value={value} onChange={(e)=>{
               setValue(e.target.value)
           }}></input>
           <button onClick={()=>{
            //    setBat(Math.max(bat-value,0));
            props.setBat(value);
               setValue("");
           }}>Buy Bat</button>
        </div>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variables change  
    return store.bat;
}
// dispatch action provide to reducer
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
       setBat:(val)=>{
           dispatch({
               type:"buy_bat",
               payload:val
           })
       }
       }
    }


export default connect(mapStateToProps,
    mapDispatchtoProps)(Bat)
