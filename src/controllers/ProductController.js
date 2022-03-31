const Category = require('../models/category')

const Product = require('../models/product')
class ProductController{
    index(req,res,next){
        Product.find({})
        .then(products =>{
            res.json({data : products})
        })
        .catch(next)
       
    }
    create(req,res,next){
        let category_name = ""
        Category.find(function(err , categories) {
            categories.forEach(function(cat) {
                category_name = cat.category_name
            })
        })
        const newProduct = new Product({
            product_name: req.body.product_name,
            product_desc: req.body.product_desc,
            category : req.body.product_,
            product_image : req.body.product_image,
            product_status: req.body.product_status,
        });
        const savedProduct = newProduct.save();
        res.json(savedProduct);
        
    }
    show(req,res,next){
        Category.findById({_id: req.params.id})
            .then(category =>{
                res.json(category)
            })
        
    }
    delete(req,res,next){
        Category.findByIdAndDelete({ _id: req.params.id })
            .then(result =>{
                res.json(result)
        })
    }
    update(req,res,next){
        Category.updateOne({_id: req.params.id}, {$set: req.body })
            .then(category =>{
                res.json(category)
            })
    }
  /*   random(req,res,next){
        const count = UserSchema.countDocuments();
        const random = floor(random() * count)
        UserSchema.findOne().skip(random)
            .then(user =>{
                res.json(user)
            })
        
    } */

    
}
module.exports = new ProductController