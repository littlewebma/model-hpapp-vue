<template>
    <div class="nav-hp">
        <ul>
            <li v-for="(item,index) in navs" :key="index">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'nav-hp',
    data() {
        return{
                navs: [
                {
                    name:'NBA',
                    path: '/nba'
                },
                {
                    name:'CBA',
                    path: '/cba'
                },
                {
                    name:'足球',
                    path: '/soccer'
                },
                {
                    name:'电竞',
                    path: '/dj'
                },
                
                {
                    name:'步行街',
                    path: '/bxj'
                }
            ]
        } ;
    }
}
</script>

<style scoped>
    .nav-hp{
        background: red;
        height:45px;
        width:100%;
    }
    .nav-hp li{
        background: red;
        width:20%;
        text-align: center;
        float:left;
        padding-top:10px
    }
    .nav-hp li>a{
        color:white
        }
</style>
