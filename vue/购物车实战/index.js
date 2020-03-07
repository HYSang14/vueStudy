var app = new Vue({
    el: '#app',
    data: {
        list :[
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            }
        ],
        //选中的商品列表
        checkList: [],
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for(var i = 0; i < this.checkList.length; i++) {
                var item = this.checkList[i];
                total += item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        }
    },
    mounted: function (){
        //默认全选
        this.checkAll();
        this.checkAllElement(document.querySelector('.checkAll'))
    },
    methods: {
        //减少
        handleReduce: function (index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        //增加
        handleAdd: function (index) {
            this.list[index].count++;
        },
        //移除
        handleRemove: function (index) {
            this.list.splice(index, 1);
        },
        //全选或全不选
        checkAllOrNot: function (event) {
            if (event.target.checked){ //全选
                this.checkAll();
            } else { //全不选
                this.checkInItem('noCheckAll');
                this.checkList.splice(0);//清空列表
            }
        },
        //全选
        checkAll: function (){
            this.checkInItem('checkAll');
            this.checkList = this.list.concat();//复制商品列表
        },
        /**
         * 全选或者全不选
         * @param {*} type  
         */
        checkInItem: function (type){
            var items = document.querySelectorAll('.checkItem');
            for(var i = 0; i < items.length; i++) {
                var item =items[i];
                if (type == 'checkAll') { //全选
                    item.checked = true;
                } else { //全不选
                    item.checked = false;
                }
            }
        },
        //勾选或不勾选
        checkItem: function (event, index) {
            var element = event.target;
            var $allCheck = document.querySelector('.checkAll');
            if (element.checked) { //勾选，加入已选择列表
                this.checkList.push(this.list[index]);
                this.checkAllElement($allCheck);
            } else { //不勾选，从已选择列表中去除
                this.checkList.splice(index,1);
                $allCheck.checked = false;
            }
        },
        //勾选全选框
        checkAllElement: function (element){
            if (this.checkList.length == this.list.length){
                element.checked = true;
            }
        }
    }
})