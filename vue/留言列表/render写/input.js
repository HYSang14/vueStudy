Vue.component('vInput', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    render: function (h) {
        var that = this;
        return h('div', [
            h('span', '昵称：'),
            h('input', {
                attrs: {
                    type: 'text'
                },
                domProps: {
                    value: this.value
                },
                on: {
                    input: function(e) {
                        that.value = e.target.value;
                        that.$emit('input', e.target.value);
                    }
                }
            })
        ]);
    }
})
Vue.component('vTextarea', {
    props: {
        value:{
            type: String,
            default: ''
        }
    },
    render: function (h) {
        var that = this;
        return h('div', [
            h('span', '留言内容：'),
            h('textarea', {
                attrs: {
                    placeholder: '请输入留言'
                },
                domProps: {
                    value: this.value
                },
                ref: 'message',
                on: {
                    input: function (e) {
                        that.value = e.target.value;
                        that.$emit('input', e.target.value);
                    }
                }
            })
        ]);
    },
    methods: {
        focus: function () {
            this.$refs.message.focus()
        }
    }
})