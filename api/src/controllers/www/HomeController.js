const Brand = require('../../models/brand')
const Category = require('../../models/category')
const Product = require('../../models/product')


const HomeController = {
    index : async (req ,res) =>{
        category = await Category.find({
            category_status : { $lte : 0 }

        })
        brand = await Brand.find({
            brand_status : { $lte : 0 }

        })
        res.render('index',{category , brand })
    },
    
    home : async (req ,res) =>{
        product = await Product.find({
            product_status : { $lte : 0 }
        }).limit(4)
        res.render('pages/home',{product})
        
    },
    
}

module.exports = HomeController