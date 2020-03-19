<template>
  <a-form-item
    :label="label"

    :extra="extra"
    :class="formItemClassName"
    :labelCol="formItemLayout && formItemLayout.labelCol"
    :wrapperCol="formItemLayout && formItemLayout.wrapperCol"
    >
    <a-input 
        :v-decorator="[
      this.fieldDecoratorId,
      {
        rules: [{
          required: this.required,
          whitespace: false,
          message: `请输入正确格式！` 
        },{
          max: this.max,
          message:  `Please enter less ${this.max} characteries!`
        },{
          pattern: this.ignoreValidator ? '' : this.regExpression,
          message: this.errorMsg || `Please enter correct type!`
        }],
        validateFirst: true,
        validateTrigger: this.validateTrigger
      }
    ]"
      :type="type" 
      :key="fieldDecoratorId" 
      :placeholder="holder"
     autocomplete="off" 
     :disabled="disabled" 
     :class="tagClassName" 
     @keydown.enter="keyEnter" 
     @change="onChange"
     @blur="blurEvent"
    />
  </a-form-item>
</template>
<script>
export default {
  props: {
    form: Object, // 表单对象
    max: { // 文本输入最大值
      type: Number,
      default: 9999
    },
    type: String, // input输入类型
    initialValue: String, // 默认值
    extra: String, // 额外的提示信息
    label: String, // 标题
    disabled: Boolean, // 是否禁用
    required: Boolean, // 是否必选
    errorMsg: String, // 正则失败信息
    placeholder: String, 
    regExpression: RegExp, // 正则校验
    validateTrigger: { // 检验子节点值的时机
      type: String,
      default: 'blur'
    },
    formItemClassName: String, // <a-form-item>类样式名
    tagClassName: String, // <a-form-item>内的标签类样式名
    ignoreValidator: Boolean, // 是否跳过验证
    formItemLayout: Object, // 布局
    fieldDecoratorId: String // key字段
  },
  data() {
    return {
      holder: this.placeholder || `Please enter content!`
    }
  },
  mounted () {
    console.log(this.fieldDecoratorId)
    console.log(this.required)
  },
  watch: {
    placeholder (val) {
      this.removeCache()
    },
    max (val) {
      this.removeCache()
    }
  },
  methods: {
    removeCache() {
      this.holder = this.placeholder || `Please enter content!`
    },
    onChange (e) {
      this.$emit('change', e.target.value)
    },
    keyEnter (e) {
      this.$emit('keyEnter', e.target.value)
    },
    blurEvent (e) {
      this.$emit('blur', e.target.value)
    }
  }
};
</script>
<style scoped>
</style>