import Vue from 'vue'
import Router from 'vue-router'
import nba from'../components/NBA/nba.vue'
import cba from'../components/CBA/cba.vue'
import soccer from'../components/soccer/soccer.vue'
import dj from'../components/dj/dj.vue'
import bxj from'../components/bxj/bxj.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/nba'},
    {name: 'nba',path: '/nba',component: nba,meta:{keepAlive:true}},
    {name: 'cba',path: '/cba',component: cba},
    {name: 'soccer',path: '/soccer',component: soccer},
    {name: 'dj',path: '/dj',component: dj},
    {name: 'bxj',path: '/bxj',component: bxj}
  ]
})
