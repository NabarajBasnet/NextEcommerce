

export const AddToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});



export const RemoveFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: { productId },  // Enclosing productId in an object
});
