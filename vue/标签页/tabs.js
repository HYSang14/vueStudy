Vue.component('tabs', {
    template: `
        <div class="tabs">
            <div class="tabs-bar">
                <div
                    :class="tabCls(item)"
                    v-for="(item, index) in navList"
                    @click="handleChange(index)">
                    {{item.label}}
                </div>
            </div>
            <div class="tabs-content">
                <slot></slot>
            </div>
        </div>
    `,
    props: {
        value: {
            type: [String, Number]
        }
    },
    data: function () {
        return {
            currentValue: this.value,
            navList: []
        }
    },
    methods: {
        tabCls(item) {
            return [
                'tabs-tab',
                {
                    'tabs-tab-active' : item.name === this.currentValue
                }
            ]
        },
        handleChange(index) {
            let nav = this.navList[index];
            let name = nav.name;
            this.currentValue = name;
            this.$emit('input', name);
        },
        getTabs () {
            // 通过遍历子组件，得到所有的pane组件
            return this.$children.filter(function (item) {
                return item.$options.name === 'pane';
            })
        },
        // 处理pane组件，获得标签名和序号
        updateNav () {
            this.navList = [];
            var that = this;
            this.getTabs().forEach( (pane, index) => {
                that.navList.push({
                    label: pane.label, // 标签名
                    name: pane.name || index // 序号
                });
                if (!pane.name) {
                    pane.name = index;
                }
                if ( index == 0) {
                    if (!that.currentValue) {
                        that.currentValue = pane.name || index;
                    }
                }
            })
            this.updateStatus();
        },
        updateStatus () {
            var tabs=this.getTabs();
            var that=this;
            // 显示当前选中的tab对应的pane组件
            tabs.forEach(function(tab){
                return tab.show = tab.name === that.currentValue;
            })
        },
    },
    mounted () {
        
    },
    watch: {
        value: function (val) {
            this.currentValue = val;
        },
        currentValue: function () {
            this.updateStatus();
        }
    }
})