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
import axios from 'axios'
export default {
    name :'BrandLeft',
    data () {
    return {
      data: {
        brand_name: '',
        brand_status: null
      },
      bras: []
    }
  },
  async created () {
    const res = await axios.get('http://localhost:3030/api/v1/brand')
    if (res.status === 200) {
      this.bras = res.data.data
    } else {
      this.swr()
    }
  }
}
</script>