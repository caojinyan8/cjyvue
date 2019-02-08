<template>
<div>
    <shopcarhead :names="names"></shopcarhead>
    <div class="clearfloat" id="main" style="padding-top:10px">
				<div class="sign clearfloat">
					<input type="text" id="" value="" class="text text1 fl" placeholder="手机号/用户名:" v-model="username" />
					<input type="text" id="" value="" class="text text1 fl" placeholder="登录密码：" v-model="passname"/>
					<input type="button" id="" value="注册" class="btn fl" @click="reg"/>
					<!-- <a href="#" class="fr">忘记密码？</a> -->
				</div>
			</div>
</div>
    
</template>
<script>
import shopcarhead from './shopcarhead'
export default {
    data(){
        return{
            names:"注册",
            username:"",
            passname:""
        }
    },
    components:{
        shopcarhead
    },
    methods:{
        reg(){
            this.$http({
                url:'http://localhost:3000/users',
                params:{
                    username:this.username,
                    passname:this.passname
                }
            }).then((res)=>{
                //console.log(res.data)
                switch(res.data){
                    case 1:
                    alert("注册成功")
                    location.href='#/login'
                    break;
                    case 0:
                    alert("用户已经存在")
                    break;
                }
            })
        }
    }
}
</script>

