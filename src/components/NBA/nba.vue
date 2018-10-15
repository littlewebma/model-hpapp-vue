<template>
	<div class="nba">
		<hp-lb />
		<ul>
			<li v-for="(nba,index) in nbas" :key="index">
				<a href="#">
					<img :src="nba.img" alt="123">
					<p>{{nba.wenzi}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import hpLb from './lb.vue'
export default {
	name:'nba',
    data() {
        return{
                nbas: [
                    {
                        img: require('./images/1.jpg'),
                        wenzi:'看起来不错！詹姆斯身穿湖人训练服开始训练'
                    },
                    {
                        img: require('./images/2.jpg'),
                        wenzi:'塔克“嫉妒”詹姆斯的球鞋：是的，我很气'
                    },
                    {
                        img: require('./images/3.jpg'),
                        wenzi:'会玩！老鹰官推致安东尼：你的球衣马上就到！'
                    },
                    {
                        img: require('./images/4.jpg'),
                        wenzi:'侧脸杀！卢卡-东契奇拍独行侠个人定妆照'
                    },
                    {
                        img: require('./images/5.jpg'),
                        wenzi:'以赛亚-泰勒和骑士达成一年加盟协议'
                    }
                ]
        } ;
	},
	components:{
		hpLb
	}
}
</script>



<style scoped>
    .nba li{
        height:80px;
        border-bottom: 1px solid black;
        margin-top:10px
        }
    .nba p{
        font-size:12px;
        padding-left:45px;
        background: url(1.jpg) left center no-repeat
    }
    .nba img,p{
        float:left
    }
    #slider{
       width:100%;
       height:235px;
       overflow:hidden
   }
</style>