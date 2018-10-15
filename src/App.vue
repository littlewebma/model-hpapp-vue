<template>
  <div id="app">
    <head-hp />
	<nav-hp />
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
	<foot-hp />
  </div>
</template>

<script>
	import headHp from'./components/head-hp.vue'
	import footHp from'./components/foot-hp.vue'
	import navHp from'./components/hpnav/nav-hp.vue'
	import nba from'./components/NBA/nba.vue'
	export default{
		name:'app',
		components: {
			headHp,
			footHp,
			navHp,
			nba
		}
	}
</script>
 
<style>
	*{
    margin:0;
    padding:0
}
ul,li,ol{
    list-style:none
}
a{
    text-decoration:none
}
.fl{
    float:left
}
.fr{
    float:right
}
.cl{
	clear:both
}
</style>
