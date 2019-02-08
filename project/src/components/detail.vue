<template>
   	<div id="main" class="clearfloat">
           <shopcarhead :names="names"></shopcarhead>
           <banner :img="img" :img1="img1" :img2="img2"></banner>
				<div class="pro-top clearfix box-s">
					<p class="tit">{{detail.title}}</p>
					<p class="price"><span>原价：¥{{detail.oldprice}}</span>&nbsp;¥{{detail.price}}</p>
				</div>
				<div class="pro-bottom clearfix box-s fl">
					<ul>
						<li>销量：100</li>
						<li class="shoucang">收藏</li>
						<li class="zixun">在线咨询</li>
					</ul>
				</div>
				<div class="pro-tab">
					<div class="hd">
						<ul>
							<li>商品详情</li>
							<li>商品属性</li>
							<li>评价</li>
						</ul>
					</div>
					<div class="bd clearfix box-s">
						<div class="lh">
								3
						</div>
						<div class="lh">
								2
						</div>
						<div class="lh">
								1
						</div>
					</div>
				</div>
    <detailfoot :detail="detail"></detailfoot>
				
			</div> 
</template>
<script>
import banner from './banner' 
import detailfoot from './detaifoot'
import shopcarhead from './shopcarhead'
import {mapActions} from 'vuex'
export default {
	data(){
		return{
			names:"宝贝详情",
			detail:{},
			img:"./upload/5.jpg",
        	img1:"./upload/8.jpg",
        	img2:"./upload/5.jpg"
		}
	},
    components:{
        banner,detailfoot,shopcarhead
	},
	mounted(){
		// console.log(this.$route.params)
		// console.log(this.$route.query)
		let url=this.$route.query.url
		let id=this.$route.params.id
		console.log(url,id)
		this.$http({
			url:`data/${url}.json`
		}).then(res=>{this.detail=res.data[id-1]
		console.log("ggg",this.detail)
			console.log("fff",res.data[id])
		})
	}
}
</script>

