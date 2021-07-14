let initialState={
    quantity:20
}

function batReducer(state=initialState,action){
    switch (action.type) {
        case "buy_bat":
           return  {
               quantity: state.quantity - action.payload,
        
            }

    
        default:
          return state;
      }
}

export default batReducer;