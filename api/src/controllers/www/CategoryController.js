const Category = require('../../models/category')

const CategoryController = {
    showCategoryHome : async( req , res) => {
        const cat = await Category.findById(req.params.id).populate('products')
        const pro_cat = cat.products
        if(cat.category_status === 0) {
            res.render('pages/category/show_category',{pro_cat ,cat})
            console.log(cat.category_name)
        }
    }
}
module.exports = CategoryController