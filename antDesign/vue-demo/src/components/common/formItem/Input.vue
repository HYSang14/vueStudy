<template>
  <a-form-item v-bind="formItemLayout" :label="label" :extra="extra" :class="formItemClassName">
    <a-input
      v-decorator="[
        this.fieldDecoratorId,
        {
          rules: [
            {
              max: this.max,
              message: `Please enter less ${this.max} characteries`
            },{
              required:this.required,
              message: `This field can not be empty`
            },{
              pattern: this.ignoreValidator ? '' : this.regExpression,
              message: this.errorMsg || `Please enter the correct type!`
              }
            ],
          validateFirst: true,
          validateTrigger: this.validateTrigger
        }
      ]"
      :type="type"
      :placeholder="holder"
      autocomplete="off"
      :disabled="disabled"
      :class="tagClassName"
    />
  </a-form-item>
</template>
<script>
/**引用：
 *<Input label="昵称" :formItemLayout="formItemLayout" type="text" required fieldDecoratorId="fieldDecoratorId" />
 */
export default {
  props: {
    max: {
      type: Number,
      default: 9999
    },
    initialValue: String, // 默认值
    label: String, // 标题
    extra: String, //额外的提示信息
    disabled: Boolean, // 是否禁用
    errorMsg: String, // 正则失败信息
    placeholder: String,
    regExpression: RegExp,
    formItemLayout: Object, // 布局
    fieldDecoratorId: String, // 字段
    ignoreValidator:Boolean, // 是否取消验证
    type: String,
    formItemClassName: String, // <a-form-item>类样式名
    tagClassName: String, // <a-form-item>内的标签类样式名
    required: Boolean,
    validateTrigger: {
      type: String,
      default: "blur"
    }
  },
  data() {
    return {
      holder: this.placeholder || `Please enter content!`
    };
  }
};
</script>
<style>
</style>