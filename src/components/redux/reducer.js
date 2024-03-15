

const initialState = {
    cartItems : [],
    totalItems : 0,
    subTotal : 0,
};
console.log(initialState.cartItems);


const cartReducer = (state=initialState, action)=>
{
    // console.log(action.payload)
    switch(action.type)
    {
        case 'ADD_TO_CART':
            const{name, description, price, category} = action.payload;  // Desctrutcure product from payload
            return{
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
            

        case 'REMOVE_FROM_CART':
            // const {productId} = action.payload; // Use productId for clarity
            return{
                // ...state,
                // cartItems: state.cartItems.filter((item)=>item._id !== productId)
            };
            
        default:
            return state;
    }
}


export default cartReducer;