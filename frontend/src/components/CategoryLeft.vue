<template>
  <h2>Danh mục sản phẩm</h2>
  <div class="panel-group category-products" id="accordian" ><!--category-productsr-->
      <div v-for="cat in cats" :key="cat._id">
        <router-link to="/danh-muc-san-pham">
            <div class="panel panel-default" v-if="cat.category_status === 0">
              <div class="panel-heading">
                <h4 class="panel-title"><a href="">{{cat.category_name}}</a></h4>
              </div>
            </div>
      </router-link>
    </div>
  </div><!--/category-products-->
</template>

<script>
export default {
    name: 'CategoryLeft'
}
</script>