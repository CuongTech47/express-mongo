const Product = require('../../models/product')

const ProductController = {
    detailsProduct : async(req , res) => {
        const pro_details = await Product.findById(req.params.id)/* .populate('category').populate('brand') */
        if(pro_details.product_status === 0) {
            res.render('pages/product/show_product_details',{pro_details})
            console.log(pro_details)
        }
        
    }

}
module.exports = ProductController