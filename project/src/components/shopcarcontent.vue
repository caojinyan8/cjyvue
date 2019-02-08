<template>
    <div class="main clearfloat shopcarmain" id="main">
				<p class="shopcar-tit box-s">已购商品</p>
				<div class="shop-list fl clearfloat box-s mb10"  v-for="item in shopcar" :key="item.id">
					<div class="tu clearfloat fl">
						<span></span>
						<img :src="item.img"/>
					</div>
					<div class="pro-price pro-price1 fr clearfloat box-s">
						<p class="bt">{{item.title}}</p>
						<p class="fu-bt">{{item.inbags}}</p>
						<div class="jiage fl">
							<span class="tejia"><samp>¥</samp>{{item.price}}</span>
						</div>
						<div class="you fr">
							<ul>
								<li class="first" @click="change({id:item.id,num:-1})">-</li>
								<li class="shu">{{item.number}}</li>
								<li class="last" @click="change({id:item.id,num:1})">+</li>
							</ul>
						</div>
					</div>
				</div>
			
				
			</div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
	computed:mapGetters(['shopcar','total']),
	methods:mapActions(['change'])
}
</script>

