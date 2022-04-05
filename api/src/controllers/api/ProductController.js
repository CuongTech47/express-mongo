const Category = require("../../models/category");
const Brand = require("../../models/brand");
const Product = require("../../models/product");

const ProductController = {
  //ADD PRODUCT
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      if (req.body.category) {
        const category = Category.findById(req.body.category);
        await category.updateOne({ $push: { products: savedProduct._id } });
      }
      if (req.body.brand) {
        const brand = Brand.findById(req.body.brand);
        await brand.updateOne({ $push: { products: savedProduct._id } });
      }
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL PRODUCTS
  getAllProducts: async (req, res) => {
    try {
      const allProducts = await Product.find();
      res.status(200).json({data :allProducts});
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A PRODUCTS
  getAnProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate("category").populate("brand")
      res.status(200).json({data :product});
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE PRODUCT
  updateProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE PRODUCT
  deleteProduct: async (req, res) => {
    try {
      await Category.updateMany(
        { products: req.params.id },
        { $pull: { books: req.params.id } }
      )
      await Brand.updateMany(
        { products: req.params.id },
        { $pull: { books: req.params.id } }
      )
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = ProductController;
