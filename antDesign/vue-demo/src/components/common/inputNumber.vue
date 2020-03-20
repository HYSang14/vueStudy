<template>
    <a-form-item v-bind="formItemLayout" :label="label" :extra="extra" :class="formItemClassName">
        <a-input-number
            v-decorator="[
                this.fieldDecoratorId,
                {
                    initialValue: this.initialValue,
                    rules: [{
                        required: this.required,
                        message:  `This field can not be empty!`
                    }],
                    validateFirst: true,
                    validateTrigger: this.validateTrigger
                }
            ]"
            :min="min"
            :max="max"
            :step="step"
            @change="changeEvent"
            :size="size"
            :formatter="formatter"
            :precision="precision"
            :disabled="disabled"
            :placeholder="placeholder"
            :class="tagClassName"
            autocomplete="off"
        >

        </a-input-number>
    </a-form-item>
</template>
<script>
export default {
    props: {
        formatter: Function, // 指定输入框展示值的格式
        size: String, // 输入框大小，
        initialValue: Number, // 默认初始值
        extra: String, // 额外提示信息
        label: String, // label标签文本
        disabled: Boolean, // 是否禁用
        required: Boolean, // 是否必填
        placeholder: String,
        step: {
            type: Number,
            default: 1
        },
        min: { // 最小值
            type: Number,
            default: -9999999999
        },
        max: { // 最大值
            type: Number,
            default: 9999999999
        },
        precision: { // 数值精度
            type: Number,
            default: 0
        },
        formItemClassName: String,
        tagClassName: String,
        validateTrigger: String,
        formItemLayout: Object,
        fieldDecoratorId: String,
    },
    data (){
        return {

        }
    },
    methods: {
        changeEvent(e) {
            this.$emit('numberChange', e)
        }
    }
}
</script>
<style scoped>

</style>
