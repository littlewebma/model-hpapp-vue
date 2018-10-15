<template>
    <div class="nav-lb">
       <div class="mui-content">
			<div id="slider" class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="./image/4.jpg">
							<p class="mui-slider-title">鹈鹕签下2015年探花</p>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="./image/1.jpg">
							<p class="mui-slider-title">新赛季薪资榜：库里第一 詹皇保罗并列第二</p>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="./image/2.jpg">
							<p class="mui-slider-title">詹姆斯看到了留胡子的库兹马赤膊训练，不知道在想些什么</p>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="./image/3.jpg">
							<p class="mui-slider-title">猛龙由于商业原因被NBA排除在圣诞大战之外</p>
						</a>
					</div>
					<div class="mui-slider-item">
						<a href="#">
							<img src="./image/4.jpg">
							<p class="mui-slider-title">鹈鹕签下2015年探花</p>
						</a>
					</div>
					<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#">
							<img src="./image/1.jpg">
							<p class="mui-slider-title">新赛季薪资榜：库里第一 詹皇保罗并列第二</p>
						</a>
					</div>
				</div>
				<div class="mui-slider-indicator mui-text-right">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>
		</div> 
    </div>
</template>
<script>
export default {
    name:'nav-lb',
}
</script>

<style scoped>
</style>
