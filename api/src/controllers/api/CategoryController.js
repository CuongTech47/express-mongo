const Category = require('../../models/category')

const Product = require('../../models/product')

const CategoryController = {
    //ADD CATEGORY
    addCategory: async (req,res) => {
        try {
            const newCategory = new Category(req.body)
            const savedCatgory = await newCategory.save()
            res.status(200).json(savedCatgory)
            
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // getAllCategories
    getAllCategories : async (req , res) => {
        try {
            const categories = await Category.find()
            res.status(200).json({data : categories})
            
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // GET AN CATEGORY
    getAnCategory : async(req,res)=>{
        try {
            const category = await Category.findById(req.params.id).populate("products")
            res.status(200).json({data :category})
        } catch (error) {
            res.status(500).json(error)
        }   
    },
    //UPDATE CATEGORY
    updateCategory : async(req , res)=>{
        try {
            const category = await Category.findById(req.params.id)
            await category.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
            
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //DELETE CATEGORY
    deleteCategory : async(req,res)=>{
        try {
            await Product.updateMany({ category: req.params.id }, { category: null })
            await Category.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted successfully!")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
  /*   random(req,res,next){
        const count = UserSchema.countDocuments();
        const random = floor(random() * count)
        UserSchema.findOne().skip(random)
            .then(user =>{
                res.json(user)
            })
        
    } */
    // pagination(req , res , next) {
    //     let perPage = 2 
    //     let page = req.params.page || 1

    //     Category.find()
    //     .skip((perPage * page) - perPage)
    //     .limit(perPage)
    //     .exec((err , categories)=>{
    //         Category.countDocuments((err , count)=>{
    //             if(err) return next(err)
    //             res.json({data : categories})
    //         })
    //     })

    // }

    
}
module.exports = CategoryController