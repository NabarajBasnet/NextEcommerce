
import mongoose from "mongoose"

const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    category: String,
    stocks: String,
    imageurl: String,
})


const Product = mongoose.models.acmeproducts || mongoose.model('acmeproducts', productsSchema);
export default Product;