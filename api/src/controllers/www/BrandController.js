const Brand = require('../../models/brand')

const BrandController = {

    showBrandHome : async(req , res)=>{
        let bra = await Brand.findById(req.params.id).populate('products')
        let pro_brand = bra.products
        if(bra.brand_status ===0){
            res.render('pages/brand/show_brand',{pro_brand , bra})
            
        }
        
    }

}

module.exports = BrandController