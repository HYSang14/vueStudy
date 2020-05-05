// 为所有的VUE实例挂载一个getMethods方法
Vue.prototype.$getMsg = function (cb){
    setTimeout(function (){
        var res = '返回的数据';
        cb && cb(res)
    }, 2000)
}
// 添加全局的自定义属性
Vue.directive('upper-text', function (el, binding) {
    el.innerText = binding.value.toUpperCase();
})

// 添加全局过滤器
Vue.filter('toLowerCase', function (val) {
    return val.toLowerCase()
})
// 添加类方法
Vue.myGlobalMethods = function (){
    console.log('我是Vue的类方法')
}