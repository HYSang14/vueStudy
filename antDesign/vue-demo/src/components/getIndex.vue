<template>
  <div>
    <a-form :form="form">
      <Input
        label="昵称"
        :formItemLayout="formItemLayout"
        type="text"
        required
        fieldDecoratorId="name"
      />
      <password-input
        :form="form"
        label="密码"
        :formItemLayout="formItemLayout"
        required
        :max="20"
        fieldDecoratorId="password"
        placeholder="Please enter your password"
      />
      <password-input
        :form="form"
        placeholder="Please make sure your password"
        label="确认密码"
        :formItemLayout="formItemLayout"
        required
        fieldDecoratorId="confirmPassword"
        :max="20"
        matchMainPasswordKey="password"
      />  
      <radio-group
        label="性别"
        fieldDecoratorId="sex"
        :options="isSex"
        :initialValue="defaultCheck"
        :form="form"
        isButton
        :formItemLayout="formItemLayout"
      />
      <select-options
        label="爱好"  
        mode="multiple"
        required
        fieldDecoratorId="hobby"
        :options="hobby"
        :form="form"
        :initialValue="defaultSelect"
        :formItemLayout="formItemLayout"
      />
      <switch-item
        label="是否开启"
        fieldDecoratorId="isOpen"
        :formItemLayout="formItemLayout"
        :form="form"
      />
      <tree-select
        label="树状选择"
        fieldDecoratorId="tree"
        :formItemLayout="formItemLayout"
        :form="form"
        :treeData="treeData"
        checkable
        checkStrictly
        dropdownMatchSelectWidth
        treeNodeFilterProp="title"
        allowClear
      />
      <checkbox-group
        label="复选"
        fieldDecoratorId="checkbox"
        :formItemLayout="formItemLayout"
        :form="form"
        :options="checkboxItem"
        :defaultValue="checkInitialValue"
      />
    </a-form>
    <button @click="submit">submit</button>
  </div>
</template>
<script>
import Input from "./common/Input.vue";
import PasswordInput from './common/passwordInput.vue';
import RadioGroup from './common/radioGroup.vue';
import SelectOptions from './common/selectOptions.vue';
import SwitchItem from './common/switchItem.vue';
import TreeSelect from './common/treeSelect.vue';
import CheckboxGroup from './common/checkboxGroup.vue';
export default {
  components: {
    Input,
    PasswordInput,
    RadioGroup,
    SelectOptions,
    SwitchItem,
    TreeSelect,
    CheckboxGroup
  },
  data: function() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 16 }
      },
      defaultCheck: 1,
      isSex: [
        {"key": 1, "val": "male"},
        {"key": 2, "val": "female"}
      ],
      hobby: [
        {"key": 1, "val": '吃鸡'},
        {"key": 2, "val": 'lol'},
        {"key": 3, "val": '明日之后'}
      ],
      defaultSelect: 1,
      treeData: [{
        children: [{
          children: [],
          isLeaf: true,
          key: '-99',
          level: 2,
          parentKey: "0",
          realTitle: '默认分类',
          title: '默认分类',
          value: '-99'
        },{
          children:[{
            children: [],
            isLeaf: true,
            key: 5,
            level: 3,
            parentKey: "1",
            realTitle: '宋英哲',
            title: '宋英哲',
            value: 5,
          }],
          isLeaf: false,
          key: '1',
          levle: 2,
          parentKey: "0",
          realTitle: '孙鹏',
          title: '孙鹏',
          value: '1'
        }],
        isLeaf: false,
        key: '0',
        level: 1,
        parentKey: '-1',
        realTitle: '全部分类',
        title:'全部分类',
        value: 0
      }],
      checkboxItem: [
        {key: 1, val: '你好'},
        {key: 2, val: '我好'},
        {key: 3, val: '大家好'}
      ],
      checkInitialValue: [1]
    };
  },
  methods: {
    submit() {
      this.form.validateFields((err, values) => {
        if (err) {
          console.log(err);
        } else {
          console.log(values);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>

</style>
