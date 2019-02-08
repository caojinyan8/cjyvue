<template>
<div>
    <shopcarhead :names="names"></shopcarhead>
    <div class="clearfloat" id="main" style="padding-top:10px">
				<div class="sign clearfloat">
					<input type="text" id="" value="" class="text text1 fl" placeholder="手机号/用户名:" v-model="username" />
					<input type="text" id="" value="" class="text text1 fl" placeholder="登录密码：" v-model="passname" />
					<input type="button" id="" value="登  录" class="btn fl" @click="login" />
					<router-link to="/reg"><a href="#" class="fr" style="font-size:16px">注册</a></router-link>
				</div>
			</div>
</div>
    
</template>
<script>
import shopcarhead from './shopcarhead'
export default {
    data(){
        return{
            names:"登录",
            username:'',
            passname:''
        }
    },
    components:{
        shopcarhead
    },
    methods:{
        login(){
            this.$http({
                url:`http://localhost:3000/login`,
                params:{
                    username:this.username,
                    passname:this.passname
                }
            }).then((res)=>{
                //console.log(res.data)
                switch(res.data){
                    case 0:
                    alert('登录成功')
                    localStorage.setItem('user',this.username)
                    location.href="#/user"
                    break;
                    case 1:
                    alert("用户名或者密码输入有误")
                    break;
                }

            })
        }
    }
}
</script>

