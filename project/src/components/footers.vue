<template>
    <div class="footer clearfloat box-s" id="footer">
				<ul>
					<router-link to="/home" active-class="cur" tag="li">
						<a href="javascript:;">
							<p class="icon12"></p>
							<p class="tit">首页</p>
						</a>
					</router-link>
					<router-link to="/classify" active-class="cur" tag="li">
						<a href="javascript:;">
							<p class="icon13"></p>
							<p class="tit">分类</p>
						</a>
					</router-link>
					<router-link to="/shopcar" active-class="cur" tag="li">
						<a href="javascript:;">
							<p class="icon14"></p>
							<p class="tit">购物车</p>
						</a>
					</router-link>
					<router-link to="/user" active-class="cur" tag="li">
						<a href="javascript:;">
							<p class="icon15"></p>
							<p class="tit">个人中心</p>
						</a>
					</router-link>
				</ul>
			</div>
</template>
<style>

/*footer*/
.footer{width: 100%; height: 3em; z-index: 99; left: 0; bottom: 0; position: fixed; border-top: 1px solid #e9e9e9; background-color: #f6f8f7;}
.footer ul li{width: 25%; float: left; text-align: center;}
.footer ul li .tit{color: #4b4b4b; font-size: .75em;}
.icon12{background: url(../assets/img/nav1.png) center no-repeat; background-size: 55%; height: 1.9em; max-width: 40px; margin: 0 auto;}
.icon13{background: url(../assets/img/nav2.png) center no-repeat; background-size: 55%; height: 1.9em; max-width: 40px; margin: 0 auto;}
.icon14{background: url(../assets/img/nav3.png) center no-repeat; background-size: 46%; height: 1.9em; max-width: 54px; margin: 0 auto;}
.icon15{background: url(../assets/img/nav4.png) center no-repeat; background-size: 50%; height: 1.9em; max-width: 42px; margin: 0 auto;}
.icon31{background: url(../assets/img/icon17.png) center no-repeat; background-size: 55%; height: 1.9em; max-width: 40px; margin: 0 auto;}

.footer2 ul li{width: 33.333%;}

.footer1 .list{width: 22%;}
.footer1 .btn{width: 24.343%; margin-left: 2%; font-size: 1em;}
.footer1 .btn .gcar{width: 100%; height: 2.5em; line-height: 2.5em; background-color: #fb7b0a; color: #fff; border-radius: 5px; -webkit-border-radius: 5px; margin-top: .75em;}
.footer1 .btn .gcar1{background-color: #e71b70;}

.footer .cur .icon12{background: url(../assets/img/nav1-1.png) center no-repeat; background-size: 55%; height: 1.9em; max-width: 40px; margin: 0 auto;}
.footer .cur .icon13{background: url(../assets/img/nav2-1.png) center no-repeat; background-size: 55%; height: 1.9em; max-width: 40px; margin: 0 auto;}
.footer .cur .icon14{background: url(../assets/img/nav3-1.png) center no-repeat; background-size: 46%; height: 1.9em; max-width: 54px; margin: 0 auto;}
.footer .cur .icon15{background: url(../assets/img/nav4-1.png) center no-repeat; background-size: 50%; height: 1.9em; max-width: 42px; margin: 0 auto;}
.footer .cur .tit{color: #ea2979;}
</style>
