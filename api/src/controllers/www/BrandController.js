const Brand = require('../../models/brand')

const BrandController = {

    showBrandHome : async(req , res)=>{
        let brands = await Brand.findById(req.params.id)
        if(brands.brand_status ===0){
            console.log(brands)
            res.render('pages/brand/show_brand',{brands})
        }
        
    }

}

module.exports = BrandController