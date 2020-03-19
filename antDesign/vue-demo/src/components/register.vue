<template>
    <div id="v-register">
        <div class="bg">
            <h1>注册</h1>
            <a-form @submit="handleReg">
                <a-form-item style="color: #fff;" v-bind="formItemLayout" label="昵称：">
                    <a-input v-decorator="['name', {
                        rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail'
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail'
                        }]
                    }]"/>
                </a-form-item>
            </a-form>
        </div>        
    </div>
</template>
<script>
export default {
    data: function (){
        return {
            name: '',
            password: '',
            phone: '',
            email: '',
            sex: 2,
            formItemLayout: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            }
        }
    },
    methods: {
        handleReg () {
            console.log(this.name)
        }
    }
}
</script>
<style scoped>
    #v-register{
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
</style>