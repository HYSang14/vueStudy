<template>
  <a-form-item :label="label" v-bind="formItemLayout" :extra="extra" :class="formItemClassName">
    <a-input
      v-decorator="[
        this.fieldDecoratorId,
        {
          rules: [{
            required: this.required,
            message: `This field can not be empty!`
          },{
            max: this.max,
            message: `Please enter less ${this.max} characteristices`
          },{
            pattern: this.ignoreValidator ? '' : this.regExpression,
            message: this.errorMsg || `Please enter the correct type`
          },{
            validator: this.validateFn
          }],
          validateFirst: true,
          validateTrigger: this.validateTrigger
        }
      ]"
      type="password"
      v-npassword
      :placeholder="holder"
      :maxLength="max"
      autocomplete="newpassword"
      :disabled="disabled"
      :class="tagClassName"
    ></a-input>
  </a-form-item>
</template>
<script>
/*
<password-input :form="form" label="密码" :formItemLayout="formItemLayout" required :max="20" fieldDecoratorId="password" placeholder="Please enter your password"/>
<password-input :form="form" placeholder="Please make sure your password" label="确认密码" :formItemLayout="formItemLayout" required fieldDecoratorId="confirmPassword" :max="20" matchMainPasswordKey="password"/> 
*/
export default {
  props: {
    form: Object, // 表单对象
    max: { // 密码输入最大值
      type: Number,
      default: 30
    },
    min: {
      type: Number,
      default: 5
    },
    /**用于跟确认密码联合校验的主密码字段名
     * 若无联合校验，则去掉此项
     * 若有联合校验， 则主密码和确认密码组件均要有次字段
     */
    matchMainPasswordKey: String,
    extra: String,
    label: String,
    errorMsg: String,
    ignoreValidator: Boolean,
    regExpression: RegExp,
    required: Boolean,
    disabled: Boolean,
    placeholder: String,
    formItemClassName: String,
    tagClassName: String,
    formItemLayout: Object,
    fieldDecoratorId: String,
    validateTrigger: {
      type: String,
      default: "blur"
    } 
  },
  data () {
    return {
      holder: this.placeholder || `Please enter the password!`
    }
  },
  directives: {
    npassword: {
      bind(el) {
        el.setAttribute('readonly', 'true')
        el.addEventListener('click', _ => {
          el.removeAttribute('readonly')
        })
        el.addEventListener('blur', _ => {
          el.setAttribute('readonly', 'true')
        })
      }
    }
  },
  methods:{
    validateFn (rule, value, callback) {
      const {getFieldValue, validateFields} = this.form
      // 联合校验规则
      if (rule.field === this.matchMainPasswordKey) {
        // 密码 关联 确认密码 校验
        validateFields(['confirmPassword'], {force: true})
      }
      if (rule.field === 'confirmPassword') {
        // 确认密码 关联 密码 校验
        const pwd = getFieldValue(this.matchMainPasswordKey) || ''
        const confirmPwd = value || ''
        if (pwd !== confirmPwd) {
          callback(new Error(`The two passwords did not match`))
        }
      }
      callback()
    }
  }
}
</script>
<style scoped>

</style>