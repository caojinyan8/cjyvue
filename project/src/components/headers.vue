<template>
    <div class="header clearfloat box-s" id="header">
				<div class="search clearfloat fl">
					<input type="button" id="" value="" class="btn fl" />
					<input type="text" id="" value="" placeholder="搜索你需要的宝贝" class="text" />
				</div>
				<div class="left fr clearfloat">
					<span class="icon2"></span>
					<p class="t_c">购物车</p>
				</div>
				<div class="left fr clearfloat">
					<span class="icon1"></span>
					<p class="t_c">在线服务</p>
				</div>				
			</div>
</template>
<style>

/*header*/
.header{width: 100%; height: 3.5em; background-color: #fff; border-bottom: 2px solid #ee2a7b; padding: .75em 5% 0 5%; position: fixed; top: 0; left: 0; z-index: 99;}
.header .search{width: 61.75%; height: 2em; background-color: #e5e4e4; border-radius: 5px; -webkit-border-radius: 5px;}
.header .search .btn{width: 20%; max-width: 40px; height: 2.7em; background: url(../assets/img/search.png) center no-repeat; background-size: 50%; border-radius: 5px 0 0 5px; -webkit-border-radius: 5px 0 0 5px;}
.header .search .text{width: 80%; height: 2.7em; background-color: #e5e4e4; font-size: .7em; border-radius: 0 5px 5px 0; -webkit-border-radius: 0 5px 5px 0;}
.header .left{width: 16.6875%; text-align: center; margin-left: 2%; margin-top: -.3em;}
.header .left .icon1,.icon2{width: 35%; max-width: 24px; display: -webkit-inline-box; background: url(../assets/img/wxiao.png) center no-repeat; background-size: 100%; height: 1.5em;}
.header .left p{color: #666666; font-size: .7em; line-height: .5em;}
.header .left .icon2{background: url(../assets/img/shopcar.png) center no-repeat; background-size: 100%;}
.header1{border-bottom: 1px solid #c9c9c9;}
.header1 .search{width: 100%;}

.icon32{width: 55%; max-width: 28px; display: -webkit-inline-box; background: url(../assets/img/menu.png) center no-repeat; background-size: 100%; height: 3em;}

.header2{width: 100%; height: 3.5em; background-color: #f6f8f7; border-bottom: 1px solid #e9e9e9; padding: 0 5%; position: fixed; top: 0; left: 0; z-index: 99;}
.header2 .left1,.header2 .right1{width: 20%; height: 3.5em;/* max-width: 56px;*/}
.header2 .left1 .back{display: block; width: 100%; height: 3.5em; background: url(../assets/img/back.png) center left no-repeat; background-size: 38%; max-width: 40px;}
.header2 .middle{width: 60%; text-align: center; height: 3.5em; line-height: 3.5em;}
.header2 .right1 .back{display: block; width: 100%; height: 3.5em; background: url(../assets/img/home.png)right center no-repeat; background-size: 50%; max-width: 56px; float: right;}
.header2 .right1 .back1{display: block; width: 100%; height: 3.5em; background: url(../assets/img/icon16.png)right center no-repeat; background-size: 40%; max-width: 56px; float: right;}

.header3 .left{margin-top:-.5em; text-align: left; width: 15%;}
.header3 .search{width: 83%;}

.header4 .left{margin-top:-.55em; text-align: left; width: 25%;}
.header4 .search{width: 73%;}
.icon45{width: 43px; height: 43px; border: 2px solid #eb9cbd; background: url(../assets/upload/10.jpg) center no-repeat; border-radius: 50%; overflow: hidden; display: block;}


</style>

