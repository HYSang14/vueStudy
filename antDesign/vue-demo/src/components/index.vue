<template>
  <div>
    hello world
    <p>{{msg}}</p>
    <!-- 使用插件的过滤器 -->
    <p>{{msg | toLowerCase}}</p>
    <!-- 使用插件的自定义指令 -->
    <p v-upper-text="msg"></p>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Good Life",
      content: "默认的值"
    };
  },
  mounted() {
    //页面初次渲染后请求数据
    this.$getMsg(res => {
      this.content = res;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>