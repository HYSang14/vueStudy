// 脚手架项目中各个模块是相互独立的，其他模块无法直接读取Vue这个对象。只能通过函数传参的形式将Vue传入到另外一个模块中，这个模块接收以后再对Vue对象进行操作。
// Vue中有一个方法可以将Vue这个对象传递给vue的插件模块，他就是Vue.use()
// Vue.use(plugin)这个方法执行后，会运行plugin.install(Vue)。并将Vue作为参数传递给这个模块，之后这个模块就可以对Vue这个对象进行操作了

// 创建对象
var myPlugin = {};

// 为对象添加install方法，接收Vue这个对象
myPlugin.install = function (Vue) {
    console.log('install方法执行了')
    // 为全局的Vue实例挂载了一个$getMsg的方法
    Vue.prototype.$getMsg = function (cb) {
        console.log(cb)
        setTimeout(function (){
            var res = '返回的数据';
            cb && cb(res)
        }, 2000)
    }

    // 添加全局自定义指令
    Vue.directive('upper-text', function (el, binding) {
        el.innerText = binding.value.toUpperCase()
    })
    // 添加全局过滤器
    Vue.filter('toLowerCase', function (val){
        return val.toLowerCase()
    })

    // 添加类方法
    Vue.myGlobalMethods = function (){
        console.log('我是类方法')
    }
}

export default myPlugin