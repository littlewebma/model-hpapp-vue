<template>
    <div class="soccer">
        <p class="top">足球</p>
        <ul>
            <li v-for="(item,index) in soccers" :key="index">
                <a href="#">
                    <p>{{item.wenzi}}</p>
                    <span>足球话题区</span>
                </a>
            </li>
        </ul>
        <p><a href="#">进入足球专区查看更多</a></p>
    </div>
</template>

<script>
export default {
    name:'soccer',
    data() {
        return{
                soccers: [
                {
                    wenzi:'魔力鸟：面对一支投入比我们更多的优秀球队踢得很出色，我们必须习惯这一点！'
                },
                {
                    wenzi:'卢克肖若能重回巅峰，怕是8000万级别的引援，最强边后卫已在阵中？'
                },
                {
                    wenzi:'队长袖标加成？感觉今天的博格巴真的很拼踢的也好！'
                },
                {
                    wenzi:'什么情况...瓦尔迪机敏啊，曼联后防线集体走神了？'
                },
                {
                    wenzi:'直接被伊赫纳乔抗倒，林德罗夫到底是什么水平的中卫？'
                },
                {
                    wenzi:'德赫亚又现精彩扑救，为什么世界杯时候他发挥不佳？'
                }
            ]
        } ;
    }
}
</script>

<style scoped>
    .top{
        background:url(1.jpg) left center no-repeat;
        padding-left:10px;
        padding-top:5px;
        height:35px;
        border-bottom:1px solid black
    }
    li{
        border-bottom:1px solid black
    }
    li p{
        margin-bottom:0
    }
    span{
        font-size:10px;
        color:#8f8f94
    }
    p>a{
        color:red
    }
</style>