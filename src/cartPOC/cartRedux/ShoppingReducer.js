import {products} from "../data/data";

let initialState={
    products,
}

function BallReducer(state=initialState,actions){
switch(actions.type){
    default:
        return state;
}
}

export default BallReducer