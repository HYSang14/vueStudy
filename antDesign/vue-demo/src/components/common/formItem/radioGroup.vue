<template>
  <a-form-item :label="label" v-bind="formItemLayout" :extra="extra">
    <a-radio-group 
      v-decorator="[this.fieldDecoratorId,{initialValue: this.initialValue}]" 
      :buttonStyle="buttonStyle" v-if="isButton" @change="changeEvent" :disabled="disabled">
      <a-radio-button v-for="o of options" :key="o.key" :value="o.key">{{o.val}}</a-radio-button>
    </a-radio-group>
    <a-radio-group 
      v-decorator="[this.fieldDecoratorId,{initialValue: this.initialValue}]" 
      :buttonStyle="buttonStyle" v-else @change="changeEvent" :disabled="disabled">
      <a-radio v-for="o of options" :style="radioStyle" :key="o.key" :value="o.key">{{o.val}}</a-radio>
    </a-radio-group>
  </a-form-item>
</template>
<script>
/**
<radio-group label="性别" fieldDecoratorId="sex" :options="isSex" :initialValue="defaultCheck" :form="form" isButton:formItemLayout="formItemLayout"/>
 */
export default {
  props: {
    form: Object,
    extra: String,
    label: String,
    disabled: Boolean,
    isButton: {
      type: Boolean,
      default: false
    },
    options: Array,
    buttonStyle: { // 风格样式， outline | solid
      type: String,
      default: 'outline'
    },
    radioStyle: Object, // 单选样式
    initialValue: [String, Number], // 初始值
    fieldDecoratorId: String,
    formItemLayout: Object
  },
  data () {
    return {

    }
  },
  methods: {
    changeEvent (e) {
      this.$emit('change', e)
    }
  }

}
</script>