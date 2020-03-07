Vue.component('pane',{
    name: 'pane',
    template: `
        <div :class="getCls()">
            <slot></slot>
        </div>
    `,
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {
            show: true
        }
    },
    methods: {
        updateNav () {
            this.$parent.updateNav();
        },
        getCls() {
            return [
                'pane',
                {
                    'pane-active': this.show
                }
            ]
        }
    },
    watch: {
        label () {
            this.updateNav()
        }
    },
    mounted() {
        this.updateNav()
    }
})