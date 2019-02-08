<template>
    <div class="home">
        <banner :img="img" :img1="img1" :img2="img2"></banner>
        <xiaokuang></xiaokuang>
        <lista :list="homelist" :url="'homelist'"></lista>
        <listb :list="homemain" :url="'homemain'"></listb>
    </div>
</template>
<script>
import banner from './banner.vue'
import xiaokuang from './xiaokuang'
import lista from './lista.vue'
import listb from './listb.vue'

import {mapGetters} from 'vuex'
export default {
    data(){
      return{
        img:"./upload/banner.jpg",
        img1:"./upload/banner.jpg",
        img2:"./upload/banner.jpg"
      }

    },
    components:{
        banner,xiaokuang,lista,listb
    },
   computed:mapGetters([
       'homelist','homemain'
   ]),
   mounted(){
       let url=`/data/homelist.json`;
       this.$store.dispatch('VIEW_HOMELIST',url)

       let urll=`/data/homemain.json`;
       this.$store.dispatch('VIEW_HOMEMAIN',urll)
   }
}
</script>

