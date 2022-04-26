<template>
  <div class="home">
    <HomeHeader/>
    <HomeSlider/>
     <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
              <CategoryLeft/>
              <BrandLeft/>
            </div>
          </div>
          <div class="col-sm-9 padding-right">
            <router-view/>
          </div>
        </div>
      </div>
    </section>
    <HomeFooter/>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import HomeSlider from '@/components/HomeSlider.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import CategoryLeft from '@/components/CategoryLeft.vue'
import BrandLeft from '@/components/BrandLeft.vue'
export default {
  components: {
   HomeHeader,
   HomeSlider,
   HomeFooter,
   CategoryLeft,
   BrandLeft
  }
}
</script>


