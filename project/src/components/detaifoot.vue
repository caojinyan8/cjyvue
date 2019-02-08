<template>
    <div class="footer footer1 clearfloat box-s" id="footer">
				<ul>
					<li class="list">
						<a href="#">
							<p class="icon31"></p>
							<p class="tit">在线服务</p>
						</a>
					</li>
					
					<li class="list">
						
					</li>
					<li class="btn">
						<input type="button" name="" id="" value="加入购物车" class="gcar" />
					</li>
					<router-link to="/shopcar" class="btn btn1" tag="li">
					<input type="button" name="" id="" value="立即购买" class="gcar gcar1" @click="add(detail)"/>
					</router-link>
					<!-- <li class="btn btn1">
						<input type="button" name="" id="" value="立即购买" class="gcar gcar1" />
					</li> -->
				</ul>
			</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
	methods:mapActions([
		'add'
	]),
	props:["detail"]
}
</script>

