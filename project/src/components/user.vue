<template>
<div>
	<shopcarhead :names="names"></shopcarhead>
    <div id="main" class="clearfloat">

				<div class="p-top clearfloat">
					<a href="personal.html">
						<div class="tu">
							<img src="img/touxiang.png"/>
						</div>
						<b class="name">{{username}}</b>
						<router-link to="/login"><b class="name" @click="zhuxiao">注销</b></router-link>
					</a>
					<div class="p-bottom clearfloat">
						<ul>
							<a href="#">
								<li class="box-s">
									<span class="opa6"></span>
									<p class="bt">消费总额</p>
									<p class="price">0.00</p>
								</li>
							</a>
							<a href="#">
								<li class="box-s">
									<span class="opa6"></span>
									<p class="bt">我的积分</p>
									<p class="price">0</p>
								</li>
							</a>
							<a href="#">
								<li class="box-s">
									<span class="opa6"></span>
									<p class="bt">我的足迹</p>
									<p class="price">0</p>
								</li>
							</a>
						</ul>
					</div>
				</div>
				<div class="p-lie clearfloat">
					<ul>
						<li>
							<a href="my-order.html" class="icon16 fl box-s">待付款<span class="fr">|</span></a>							
						</li>
						<li>
							<a href="my-order.html" class="icon17 fl box-s">待收货<span class="fr">|</span></a>							
						</li>
						<li>
							<a href="my-order.html" class="icon18 fl box-s">全部订单</a>							
						</li>
					</ul>
				</div>
				<div class="p-list clearfloat">
					<ul>
						<a href="collection.html">
							<li class="box-s">
								<p class="fl icon19">我的收藏</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="shopcar.html">
							<li class="box-s">
								<p class="fl icon20">我的购物车</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="#">
							<li class="box-s">
								<p class="fl icon21">会员等级</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="#">
							<li class="box-s">
								<p class="fl icon22">我的优惠券</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="#">
							<li class="box-s">
								<p class="fl icon23">我的佣金</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="address.html">
							<li class="box-s">
								<p class="fl icon24">配送地址</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="balance.html">
							<li class="box-s">
								<p class="fl icon25">消费记录</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="xiugai.html">
							<li class="box-s">
								<p class="fl icon26">修改密码</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="dinpu.html">
							<li class="box-s">
								<p class="fl icon27">我的店铺</p>
								<span class="back fr"></span>
							</li>
						</a>
						<a href="#">
							<li class="box-s">
								<p class="fl icon28">账号绑定</p>
								<span class="back fr"></span>
							</li>
						</a>
					</ul>
				</div>
			</div>
</div>
</template>
<script>
import shopcarhead from './shopcarhead'
export default {
data(){
	return {
		names:'个人中心',
		username:""
	}
},
	components:{
		shopcarhead
	},
	methods:{
		zhuxiao(){
			localStorage.clear()
		
		}
	},
	beforeRouteEnter(to,from,next){
		//console.log("j",next)
		if(localStorage.getItem("user")){
			next(_this=>{
				_this.username=localStorage.getItem('user')
			})
		}else{
			next('/login')
		}
	}
}
</script>


