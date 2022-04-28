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
import axios from 'axios'
export default {
    name: 'CategoryLeft',
    data () {
    return {
      data: {
        category_name: '',
        category_status: null
      },
      cats: []
    }
  },
  async created () {
    const res = await axios.get('http://localhost:3030/api/v1/category')
    console.log(res.data.data)
    if (res.status === 200) {
      this.cats = res.data.data
    } else {
      this.swr()
    }
  }
}
</script>