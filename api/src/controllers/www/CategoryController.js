const Category = require('../../models/category')



const CategoryController = {
    showCategoryHome : async( req , res) => {
        const categories = await Category.findById(req.params.id)
        if(categories.category_status === 0) {
            res.render('pages/category/show_category',{categories})
            console.log(categories)
            
        }

        
    }
}

module.exports = CategoryController