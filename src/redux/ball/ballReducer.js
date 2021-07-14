let initialState = {
    balls: 5,
  
  };
  
function BallReducer(state = initialState, action) {
    // update
    switch (action.type) {
      case "buy_ball":
         return  {balls: state.balls - 1}
        
  
      case "sell_ball":
        return{
          balls: state.balls + 1,
        };
  
      default:
        return state;
    }
  }

  export default BallReducer;