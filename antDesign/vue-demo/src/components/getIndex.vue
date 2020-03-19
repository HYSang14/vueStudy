<template>
    <div>
        <a-form :form="form">    
            <Input
                :label="label"
                :formItemLayout="formItemLayout"
                type="text"
                fieldDecoratorId="fieldDecoratorId"
            />
        </a-form>
        <button @click="submit">submit</button>
    </div>

</template>
<script>
import Input from './common/Input1.vue'
export default {
    components: {
        Input
    },
    data: function () {
        return {
            form: this.$form.createForm(this, {name: 'coordinated'}),
            label: '姓名',
            formItemLayout: {
                labelCol: {span: 5},
                wrapperCol: {span: 16}
            },
        }
    },
    methods: {
        submit() {
            this.form.validateFields((err, values) => {
                console.log(values)
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }
        
    }
}
</script>
<style lang="less" scoped>

</style>
