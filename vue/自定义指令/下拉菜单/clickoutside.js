Vue.directive('clickoutside', {
    // 只调用一次，指令第一次绑定到元素时调用
    bind: function (el, binding, vnode) {
        function documentHandler (e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e)
            }
        }
        console.table(el)
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    // 只调用一次，指令与元素解绑时调用
    unbind: function (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
});