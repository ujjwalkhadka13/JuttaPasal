import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";


// @desc Fetch all Products
// @route GET /api/products
// @access Public


const getProducts = asyncHandler(async (req, res) => {
    // console.log(req)
    const products = await Product.find({});
    res.json(products);


});
// @desc Fetch a product
// @route GET /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.json(product);
    } else {
        conso
        res.status(404);
        throw new Error('Resource not found');
    } 


});
//@desc Create Products
// @route POST /api/products
// @access Private/Admin


const createProduct = asyncHandler(async (req, res) => {    
    console.log(req.body)
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    })
    if(req.body[0]==true){
        product.thrift =true;
    }
    const createProduct = await product.save();
    res.status(201).json(createProduct);

});
// @desc Update a Products
// @route PUT /api/products/:id
// @access Private/Admin


const updateProduct = asyncHandler(async (req, res) => {
    const {name, price, description, image,brand,countInStock } = req.body;
    console.log(req.body)
    const product = await Product.findById(req.params.id);
    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.countInStock = countInStock;

        const updatedProduct = await product.save();
        res.json(updatedProduct);


    }else{
        res.status(404);
        throw new Error('Resource not found');

    }
});
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
  
    if (product) {
      await Product.deleteOne({ _id: product._id });
      res.json({ message: 'Product removed' });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  });
export { getProducts, getProductsById, createProduct,updateProduct,deleteProduct };

