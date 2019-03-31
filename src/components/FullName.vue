<template>
    <div>
        FirstName:<input type="text" v-model="firstname">
        LastName:<input type="text" v-model="lastname">
        <h1>{{ fullname }}</h1>
    </div>
</template>
<script>
export default {
    name: 'FullName',
    data () {
        return {
            firstname: 'zhang',
            lastname: 'jia',
        }
    },
    computed: { //计算
        //compunted擅长处理的情景: 一个数据受多个数据的影响。
        //fullname 依赖firstname和lastname  ,在两者变动的时候fullname才会相应的改变
        //注意：就算fullname没有在data中声明,也是直接可以在computed中写入的
        fullname: function () {
            return this.firstname + '' + this.lastname
        } 
    },
    watch:{ //监听(观察)
        //watch擅长处理的情景: 一个数据影响多个数据
        //注意：这里
        firstname:function(val){
            return this.fullname = val + '' + this.lastname
        }
    }

}
</script>

