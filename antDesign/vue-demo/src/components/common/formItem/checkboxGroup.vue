<template>
  <a-form-item :label="label" v-bind="formItemLayout" :form="form">
    <a-checkbox-group @change="onChange" 
      v-decorator="[
      this.fieldDecoratorId,
      {
        initialValue: this.defaultValue
      }]"
    >
     <a-checkbox v-for="o of options" :key="o.key" :value="o.key">{{o.val}}</a-checkbox>
    </a-checkbox-group>
  </a-form-item>
</template>
<script>
/**
 <checkbox-group label="复选" fieldDecoratorId="checkbox":formItemLayout="formItemLayout" :form="form" :options="checkboxItem":defaultValue="checkInitialValue" />
 */
export default {
  props: {
    form: Object,
    label: String,
    options: Array,
    span: [String,Number],
    defaultValue: Array,
    formItemLayout: Object,
    fieldDecoratorId: String
  },
  data() {
    return {};
  },
  methods: {
    onChange(e) {
      this.$emit("checkChange", e);
    }
  }
};
</script>
<style scoped>
</style>
