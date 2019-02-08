<template>
    <div class="products clearfloat">
					<div class="tit clearfloat">
						<img src="../assets/upload/tit1.png"/>
					</div>
					<ul class="lists clearfloat">
						<li v-for="item in list" :key="item.id">
								<router-link :to="'/detail/'+item.id+'?url='+url" class="list fl clearfloat box-s">
							<a href="javascript:;">
								<span></span>
								<img :src="item.img"/>
								<div class="bt clearfloat">
									<samp class="opa8"></samp>
									<p class="nr t_c">超值价：￥{{item.price}}</p>
								</div>
							</a>
						</router-link>
						</li>
					
						<!-- <div class="list fr clearfloat box-s">
							<a href="pro-content.html">
								<span></span>
								<img src="../assets/upload/5.jpg"/>
								<div class="bt clearfloat">
									<samp class="opa8"></samp>
									<p class="nr t_c">超值价：￥233.00</p>
								</div>
							</a>
						</div>
						<div class="list fl clearfloat box-s">
							<a href="pro-content.html">
								<span></span>
								<img src="../assets/upload/5.jpg"/>
								<div class="bt clearfloat">
									<samp class="opa8"></samp>
									<p class="nr t_c">超值价：￥233.00</p>
								</div>
							</a>
						</div>
						<div class="list fr clearfloat box-s">
							<a href="pro-content.html">
								<span></span>
								<img src="../assets/upload/5.jpg"/>
								<div class="bt clearfloat">
									<samp class="opa8"></samp>
									<p class="nr t_c">超值价：￥233.00</p>
								</div>
							</a>
						</div> -->
					</ul>
				</div>
</template>
<script>
export default {
	props:["list","url"]
}
</script>

