<template>
    <div class="dibu dibu1 clearfloat box-s">
				<span class="price fl"><samp>合计：</samp>¥{{total}}</span>
				<a href="#" class="shopcar fr">
					去结算
				</a>
			</div>
</template>
<script>

import {mapGetters} from 'vuex'
export default {
	computed:mapGetters(['total'])
}
</script>

