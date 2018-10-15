<template>
    <div class="cba">
      <ul>
          <li v-for="(cba,index) in cbas" :key="index">
              <a href="#">
                  <img :src="cba.img" alt="123">
                  {{cba.wenzi}}
              </a>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    name:'cba',
    data() {
        return{
                cbas: [
                    {
                        img: require('./images/1.jpg'),
                        wenzi:'赵继伟左脚脚踝三处骨折，正制定治疗方案'
                    },
                    {
                        img: require('./images/2.jpg'),
                        wenzi:'福建男篮官宣签约安德鲁-尼科尔森'
                    },
                    {
                        img: require('./images/3.jpg'),
                        wenzi:'辽宁队官宣：莱斯特-哈德森和球队完成续约'
                    },
                    {
                        img: require('./images/4.jpg'),
                        wenzi:'莱斯特-哈德森即将和辽宁队完成续约'
                    },
                    {
                        img: require('./images/5.jpg'),
                        wenzi:'周鹏晒冰疗照：最近恢复得不错，希望后面没大问题'
                    }
                ]
        } ;
    }
}
</script>

<style scoped>
    li{
        font-size: 12px;
        height:80px;
        border-bottom: 1px solid black;
        margin-top:10px
        }
    a{
        color:black
    }
    img{
        float:left
    }
</style>