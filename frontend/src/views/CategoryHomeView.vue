<template>
  <div class="features_items"><!--features_items-->
    <h2 class="title text-center">Category Home View</h2>
    <div v-for="(pro , i) in products" :key="i">
      <div class="col-sm-4" v-if="pro.product_status == 0">
        <div class="product-image-wrapper">
          <div class="single-products">
            <div class="productinfo text-center">
              <img :src="`@/assets/images/home/${pro.product_image}`"  alt="" />
              <h2>{{pro.product_price}}.VND</h2>
              <p>{{pro.product_name}}</p>
              <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Thêm giỏ hàng</a>
            </div>
            <!-- <div class="product-overlay">
                <div class="overlay-content">
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
            </div> -->
            <img src="frontend/images/home/sale.png" class="new" alt="" />
          </div>
          <div class="choose">
            <ul class="nav nav-pills nav-justified">
              <li><a href="#"><i class="fa fa-plus-square"></i>Yêu Thích</a></li>
              <li><a href="#"><i class="fa fa-plus-square"></i>So Sánh</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div><!--features_items-->
</template>

<script>
  export default {
  name: 'CategoryHomeView'
}
</script>