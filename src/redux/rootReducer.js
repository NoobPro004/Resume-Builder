import { combineReducers } from "redux";
import batReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";
import userReducer from "./Users/userReducer";
const rootReducer=combineReducers({
b:BallReducer,
bat:batReducer,
User:userReducer
})

export default rootReducer;