import mongoose from "mongoose";


export const CartSchema = new mongoose.Schema({
    _id: String,
    category: String,
    description: String,
    imageurl: String,
    name: String,
    price: String,
    quantity: String,
    stocks: String
})

const CartItem = mongoose.models.cartitems || mongoose.model('cartitems', CartSchema);
export default CartItem;

