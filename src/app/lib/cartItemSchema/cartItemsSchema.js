import mongoose from "mongoose";


export const CartSchema = new mongoose.Schema({
    category:String,
    description: String,
    imageurl:String,
    name:String,
    price:String,
    quantity:String,
    stocks:String
})

const CartItem = mongoose.models.cartitem || mongoose.model('cartitem', CartSchema);
export default CartItem;

