<template>
  <div class="brands_products"><!--brands_products-->
    <h2>Thương hiệu sản phẩm</h2>
    <div class="brands-name">
        <ul class="nav nav-pills nav-stacked">
              <li v-for="bra in bras" :key="bra._id">
                <router-link to="/thuong-hieu-san-pham" v-if="bra.brand_status === 0">
                  <span class="pull-right"></span>
                  {{bra.brand_name}}
                </router-link>
              </li>
        </ul>
    </div>
  </div><!--/brands_products-->
</template>

<script>
export default {
    name :'BrandLeft'
}
</script>