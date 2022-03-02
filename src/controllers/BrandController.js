
const Brand = require('../models/brand')


class BrandController{
    index(req,res,next){
        Brand.find({})
            .then(brands =>{
                res.json({data : brands})
            })
            .catch(next)
        
    }
    create(req,res,next){
        const newBrand = new Brand({
            brand_name: req.body.brand_name,
            brand_desc: req.body.brand_desc,
            brand_status: req.body.brand_status,
        });
	
	    const savedBrand = newBrand.save();
	    res.json(savedBrand);
    }
    show(req,res,next){
        Brand.findById({_id: req.params.id})
            .then(brand =>{
                res.json(brand)
            })
        
    }
    delete(req,res,next){
        Brand.findByIdAndDelete({ _id: req.params.id })
            .then(result =>{
                res.json(result)
        })
    }
    update(req,res,next){
        Brand.updateOne({_id: req.params.id}, {$set: req.body })
            .then(brand =>{
                res.json(brand)
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
module.exports = new BrandController