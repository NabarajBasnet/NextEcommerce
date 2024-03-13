

const initialState = {
    // cartItems: [1,2,3],
    cartItems: 0,
}

const cartReducer = (state=initialState, action)=>
{
    switch(action.type)
    {
        case 'ADD_TO_CART':
            return{
                ...state, cartItems: state.cartItems+1

                // ...state,
                // cartItems:[...state.cartItems, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state, cartItems: state.cartItems-1
                // ...state,
                // cartItems:[...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}


export default cartReducer;