<template>
 
 <swipe class="my-swipe" :speed="100" :auto="1000">
    <swipe-item class="slide1"> <img :src="img" height="168" alt=""/></swipe-item>
    <swipe-item class="slide2"> <img :src="img1" height="168" alt=""/></swipe-item>
    <swipe-item class="slide3"> <img :src="img2" height="168" alt=""/></swipe-item>
  </swipe>
</template>
<script>
  import 'vue-swipe/dist/vue-swipe.css';
  import { Swipe, SwipeItem } from 'vue-swipe';
  export default{
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    props:["img","img1","img2"]
  }
</script>
<style>
  .my-swipe {
    margin-top: 46px;
    height: 168px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }


</style>