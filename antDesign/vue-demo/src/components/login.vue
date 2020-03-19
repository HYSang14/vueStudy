<template>
    <div id="v-login">
        <div class="bg">
            <h1 >登录</h1>
            <a-form  @submit="handleSubmit">
                <a-form-item>
                    <a-input v-model="name" v-decorator="['username', {rules: [{required: true, message: 'Please input your name!'}]}]" placeholder="Username"> 
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,0.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-model="upwd" v-decorator="['password', {rules: [{required: true, message: 'Please input your Password!'}]}]" placeholder="password" type="password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,0.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox class="rememberLogin" v-model="isRemember" v-decorator="['rember',{valuePropName: 'checked', initialValue: true,}]">
                        Remember me
                    </a-checkbox>
                </a-form-item>
                <a-form-item style="text-align: center;">
                    <a-button style="width:100%;" type="primary" html-type="submit" class="login-form-button">
                        Log in 
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div> 
</template>
<script>
import axios from "axios"
export default {
    data: function () {
        return {
            name: '',
            upwd: '',
            isRemember: ''
        }
    },
    mounted(){
    },
    methods: {
        handleSubmit () {
            if (!this.name) return;
            if (!this.upwd) return;
            console.log(this.name,this.upwd)
            var that = this;
            axios.get("http://localhost:3000/msg/login?name=" + this.name + "&upwd=" + this.upwd).then(res => {
                console.log(res.data);
                if (res.data.length > 0) {
                    let storage = window.sessionStorage;
                    storage.setItem("isLogin",true)
                    this.$notification.open({
                        message: 'Notification Title',
                        description: '登录成功',
                    });
                    that.$router.push('/index')
                } else {
                    this.$notification.open({
                        message: 'Notification Title',
                        description: '登录失败',
                    });
                }
            });
        },
    }
}
</script>
<style lang='less' scoped>
    #v-login{
        height:100%;
        width: 100%;
        background-image: url('../assets/images/bg.513c26cf.png');
        position:relative;
    }
    .bg{
        height:50%;
        width: 20%;
        position: absolute;
        left: 40%;
        top:25%;
    }
    h1{
        color: #fff;
        text-align: center;
        margin-bottom:30px;
    }
    .rememberLogin{
        color: #fff !important;
    }
</style>