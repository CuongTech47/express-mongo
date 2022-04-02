const Category = require('../models/category')


class CategoryController{
    index(req,res,next){
        Category.find({})
            .then(categories =>{
                res.json({data : categories})
            })
            .catch(next)
    }
    create(req,res,next){
        const newCategory = new Category({
            category_name: req.body.category_name,
            category_desc: req.body.category_desc,
            category_status: req.body.category_status,
        });
	    const savedCategory = newCategory.save();
	    res.json(savedCategory);
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
    pagination(req , res , next) {
        let perPage = 2 
        let page = req.params.page || 1

        Category.find()
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err , categories)=>{
            Category.countDocuments((err , count)=>{
                if(err) return next(err)
                res.json({data : categories})
            })
        })

    }

    
}
module.exports = new CategoryController