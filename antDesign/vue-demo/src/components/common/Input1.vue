<template>
    <a-form-item v-bind="formItemLayout" :label="label">
        <a-input
            v-decorator="[
                this.fieldDecoratorId,
                {
                    rules: [
                        {
                            type:'email',
                            message: `Please enter correct type`
                        },
                        {
                            required:this.required,
                            message: `This field can not be empty`
                        },
                    ],
                    validateTrigger:'blur'
                }
            ]"
            />
    </a-form-item>
</template>
<script>
export default {
    props: {
        label:String, // 标题
        formItemLayout: Object, // 布局
        fieldDecoratorId: String, // 字段
        type: String,
        required: Boolean,
        validateTrigger: {
            type: String,
            default: 'blur'
        }
    },
    mounted () {
        console.log(this.fieldDecoratorId)
    },
    data (){
        return {

        }
    }
}
</script>
<style