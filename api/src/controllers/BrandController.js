
const Brand = require('../models/brand')

const Product = require('../models/product')

const  BrandController = {

    //ADD BRAND
    addBrand: async (req,res) => {
        try {
            const newBrand = new Brand(req.body)
            const savedBrand = await newBrand.save()
            res.status(200).json(savedBrand)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // GET All BRAND
    getAllBrands : async (req , res) => {
        try {
            const brands = await Brand.find()
            res.status(200).json({data : brands})
            
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // GET AN BRAND
    getAnBrand : async(req,res)=>{
        try {
            const brand = await Brand.findById(req.params.id).populate("products")
            res.status(200).json(brand)
        } catch (error) {
            res.status(500).json(error)
        }   
    },
    //UPDATE BRAND
    updateBrand : async(req , res)=>{
        try {
            const brand = await Brand.findById(req.params.id)
            await brand.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
            
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //DELETE BRAND
    deleteBrand : async(req,res)=>{
        try {
            await Product.updateMany({ brand: req.params.id }, { brand: null })
            await Brand.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted successfully!")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    // pagination(req , res , next) {
    //     let perPage = 2 
    //     let page = req.params.page || 1

    //     Brand.find()
    //     .skip((perPage * page) - perPage)
    //     .limit(perPage)
    //     .exec((err , categories)=>{
    //         Brand.countDocuments((err , count)=>{
    //             if(err) return next(err)
    //             res.json({data : categories})
    //         })
    //     })

    // }

    
}
module.exports = BrandController