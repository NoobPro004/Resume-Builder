import { combineReducers } from "redux";
import batReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";
const rootReducer=combineReducers({
b:BallReducer,
bat:batReducer
})

export default rootReducer;