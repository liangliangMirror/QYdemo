<template>
    <div class="play">
        <p v-for="(item,index) in list" :key="item.id"><img :src="require('../assets/img/wu' + (index+1) + '.jpg')"><span>{{item.title}}</span></p>
      </div>
</template>
<script>
export default {
    data() {
    return {
      list:[{
        id:'1',
        img:'../images/300_200.jpg',
        title:'锦囊精选餐厅之东京篇'
      },
      {
        id:'2',
        img:'../images/300_200(1).jpg',
        title:'东京景点好评Top10'
      },
      {
        id:'3',
        img:'../images/300_200(2).jpg',
        title:'日本温泉'
      },
      {
        id:'4',
        img:'../images/300_200(3).jpg',
        title:'东京亲子游'
      }] 
    };
  },
}
</script>

<style lang="scss">
.play{
    height:245px;
    width: 100%;
    padding: 10px;
    p{
       width: 44%;
       float: left;
       padding: 5px 6px;
       position: relative;
       color: white;
     }
     img{
       border-radius: 5px;
        -webkit-filter: blur(2px);
     }
     span{
       position: absolute;
           top: 50%;
           left: 50%;
           margin-top: -15px;
           margin-left: -50%;
           width: 100%;
           text-align: center;
     }
    }
</style>
