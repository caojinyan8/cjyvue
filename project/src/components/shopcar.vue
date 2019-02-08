<template>
<div class="shopcar">
<shopcarhead :names="names"></shopcarhead>
<shopcarcontent></shopcarcontent>
<settlement></settlement>
</div>
</template>
<script>
import shopcarhead from './shopcarhead'
import shopcarcontent from './shopcarcontent'
import settlement from './settlement.vue'
export default {
    data(){
        return{
            names:"购物车"
        }
    },
    components:{
        shopcarhead,shopcarcontent,settlement
    }
}
</script>

