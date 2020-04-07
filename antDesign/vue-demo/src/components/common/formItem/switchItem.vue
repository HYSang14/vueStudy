<template>
  <a-form-item :label="label" :extra="extra" :class="formItemClassName" v-bind="formItemLayout">
    <a-switch
      :disabled="disabled"
      :unCheckedChildren="textArr[1]"
      :loading="loading"
      @change="onChange"
      :checkedChildren="textArr[0]"
      :class="tagClassName"
      v-decorator="[
        this.fieldDecoratorId,
        {initialValue: this.initialValue || false}
      ]"
      ></a-switch>
  </a-form-item>
</template>
<script>
/**
<switch-item label="是否开启" fieldDecoratorId="isOpen" :formItemLayout="formItemLayout" :form="form"/>
 */
export default {
  props: {
    label: String,
    extra: String,
    formItemClassName: String,
    formItemLayout: Object,
    disabled: Boolean,
    textArray: Array, // 开关文本
    loading: Boolean,
    tagClassName: String,
    fieldDecoratorId: String,
    initialValue: Boolean
  },
  data (){
    return {
      textArr: this.textArray || ['open', 'close']
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', e)
    }
  }
}
</script>
<style scoped>

</style>