

const initialState = {
    cartItems : [],
    totalItems : 0,
    subTotal : 0,
};


const cartReducer = (state=initialState, action)=>
{
    // console.log('Sub Total: ',state.subTotal)
    console.log('Total Items: ',state.cartItems)
    switch(action.type)
    {
        case 'ADD_TO_CART':
            
            const{_id, name, description, price, category, stocks, imageurl} = action.payload;
            // Check if product already exist in the cartItems array of objects
            const existingProduct = state.cartItems.find(item => item.name === name && item._id === action.payload._id);  // Check name and unique ID
            if(existingProduct)
            {
                // Product already exists, update quantity
                return{
                    ...state,
                    cartItems: state.cartItems.map(item => 
                        item.name === name && item._id === action.payload._id ? {...item, quantity: item.quantity+1}:item
                        ),
                    // Calculate total items and subtotal here
                    totalItems: state.cartItems.reduce((acc, item) => acc+item.quantity, 0),
                    subTotal: state.cartItems.reduce((acc, item) => acc+item.price * item.quantity, 0),
                }
                    
            }
            else
            {
                // New product, add it with quantity 1
                return{
                    ...state,
                    cartItems: [...state.cartItems, {_id, name, description, price, category, stocks, imageurl, quantity: 1}],
                    // Calculate total items and subtotal here
                    totalItems: state.cartItems.reduce((acc, item)=> acc + item.quantity, 0),
                    subTotal: state.cartItems.reduce((acc, item)=>acc + item.price * item.quantity, 0),
                }
            }

            // return{...state, cartItems: [...state.cartItems, action.payload]}
            

        case 'REMOVE_FROM_CART':
            return{
                // ...state,
                // cartItems: state.cartItems.filter((item)=>item._id !== productId)
            };
            
        default:
            return state;
    }
}


export default cartReducer;