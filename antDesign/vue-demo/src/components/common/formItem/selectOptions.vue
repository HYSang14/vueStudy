<template>
  <a-form-item
    :label="label"
    :extra="extra"
    :class="formItemClassName"
    v-bind="formItemLayout"
    >
    <a-select
      v-decorator="[
        this.fieldDecoratorId,
        {
          initialValue: this.initialValue || undefined,
          rules: [{
            required: this.required,
            message: `This field can not be empty!`
          }]
        }
      ]"
      showArrow
      :allowClear="allowClear"
      :mode="mode"
      :showSearch="showSearch"
      :getPopupContainer="triggerNode => triggerNode.parentNode"
      :disabled="disabled"
      @search="onSearch"
      optionFilterProp="children"
      :filterOption="onFilterOption"
      :placeholder="holder"
      :class="tagClassName"
      @change="onChange"
      >
      <a-select-option v-for="o of options" :key="o.key" :disabled="disabled" :value="o.val"> {{o.val}}</a-select-option>
    </a-select>
  </a-form-item>
</template>
<script>
/**
 <select-options label="爱好" mode="multiple" required fieldDecoratorId="hobby" :options="hobby" :form="form" :initialValue="defaultSelect" :formItemLayout="formItemLayout"/>
 */
export default {
  props: {
    form: Object,
    label: String,
    extra: String,
    required: Boolean,
    disabled: Boolean,
    initialValue: [String, Number, Array],
    allowClear: Boolean, // 是否清除
    mode: String, //多选 'default' | 'multiple' | 'tags' | 'combobox'
    options: Array, // 选项
    showSearch: Boolean, // 是否搜索
    fieldDecoratorId: String, // key字段
    placeholder: String,
    formItemClassName: String,
    tagClassName: String,
    formItemLayout: Object,
  },
  data (){
    return {
      holder: this.placeholder || `Please select the content`
    }
  },
  methods: {
    onFilterOption(input, option) {
      console.log(input, option)
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onChange (val) {
      this.$emit('change', val)
    },
    onSearch (val) {
      this.$emit('search', val)
    }
  }
}
</script>
<style scoped>

</style>