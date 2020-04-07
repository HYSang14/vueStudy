<template>
  <a-form-item
    :label="label"
    :required="required"
    :extra="extra"
    v-bind="formItemLayout"
    :class="formItemClassName"
    >
    <a-tree-select
      :disabled="disabled"
      :treeData="treeData"
      :treeCheckable="checkable"
      :treeCheckStrictly="checkStrictly"
      :treeNodeFilterProp="treeNodeFilterProp"
      :allowClear="allowClear"
      :placeholder="holder"
      :getPopupContainer="triggerNode => triggerNode.parentNode"
      :dropdownMatchSelectWidth="dropdownMatchSelectWidth"
      :class="tagClassName"
      @select="onSelectNode"
      @change="onChange"
      v-decorator="[
        this.fieldDecoratorId,
        {
          rules: [{
            required: this.required,
            message: `This field can not be empty!`
          }]
        }
      ]"
      ></a-tree-select>
  </a-form-item>
</template>
<script>
/**
 <tree-select label="树状选择" fieldDecoratorId="tree" :formItemLayout="formItemLayout":form="form" :treeData="treeData" checkable  checkStrictly dropdownMatchSelectWidth treeNodeFilterProp="title" allowClear/>
 */
export default {
  props: {
    label: String,
    required: Boolean,
    extra: String,
    formItemLayout: Object,
    formItemClassName: String,
    disabled: Boolean,
    treeData: Array, // 平行结构树- dataList
    checkable: Boolean, // 是否多选
    checkStrictly: Boolean, // checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true
    treeNodeFilterProp: String, //	输入项过滤对应的 treeNode 属性
    allowClear: Boolean, // 是否允许清空下拉框内值
    placeholder: String,
    dropdownMatchSelectWidth: {
      type: Boolean, // 是否依赖下拉框的宽度，默认不依赖
      default: false
    },
    tagClassName: String,
    fieldDecoratorId: String,
  },
  data (){
    return {
      holder: this.placeholder || `Please select content!`
    }
  },
  methods: {
    /**
     * 鼠标左键单击操作
     */
    onSelectNode (selectedKeys, node) {
      // 单选，只获得叶子节点的key
      if (this.checkable) {
        return false
      }
      // 单选时，智能选择叶子节点，且不关闭下拉框父节点仅可展开，折叠
      if (!node.isLeaf && this.disabledParentNode) {
        node.onExpand()
        node.onFocus()
        return false
      }
    },
    onChange (val) {
      this.$emit('change', val)
    }
  }
}
</script>
<style scoped>

</style>