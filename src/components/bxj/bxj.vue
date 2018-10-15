<template>
    <div class="bxj">
       <div class="title">
				步行街主干道 <a href="#">+关注</a> <a href="#">按发帖时间排序</a>
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-right" src="./images/1.jpg">
					<div class="mui-media-body">
						刚看完爱情公寓！
						<p class='mui-ellipsis'>刚刚 hp1</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-right" src="./images/2.jpg">
					<div class="mui-media-body">
						水浒迷们请进，个人拍的水浒战力top10，你认同吗？
						<p class='mui-ellipsis'>2分钟前 hp2</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-right" src="./images/3.jpg">
					<div class="mui-media-body">
						周六早上去打球，这个球场什么水平？
						<p class='mui-ellipsis'>3分钟前 hp3</p>
					</div>
				</a>
			</li>
            <li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-right" src="./images/1.jpg">
					<div class="mui-media-body">
						两周年纪念日，我这算不算家里有矿？
						<p class='mui-ellipsis'>1小时前 hp4</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-right" src="./images/2.jpg">
					<div class="mui-media-body">
						我这波什么水平？老婆在国外出差昨晚突然连夜杀回家………
						<p class='mui-ellipsis'>2小时前 hp5</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-right" src="./images/3.jpg">
					<div class="mui-media-body">
						求jrs推荐体育方面的微信公众号啊
						<p class='mui-ellipsis'>3小时前 hp6</p>
					</div>
				</a>
			</li>
		</ul>
    </div>
</template>

<script>
export default {
    name:'bxj',
}
</script>

<style scoped>
    .title{
        height: 50px;
        font-size: 10px;
        padding-top:15px ;
    }
    .title a:first-child{
        display:inline-block;
        width:40px;
        height:20px;
        border:1px solid red;
        color:red;
        text-align: center
    }
    .title a:last-of-type{
        float:right
    }
</style>