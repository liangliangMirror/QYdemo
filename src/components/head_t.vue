<template>
<div>
    <van-nav-bar :left-text="city" left-arrow @click-left="onClickLeft" class="color">
      <van-icon name="search" slot="right" >
        <span class="van-span">定位</span>
      </van-icon>
    </van-nav-bar>
  <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
  <van-dropdown-item v-model="value2" :options="option3" />
</van-dropdown-menu>
    <ul class="fold">
      <li data-bn-ipg="mplace_poilist_Recommended_Topic0" v-for="(item,index) in tree" :key="item.id">
                        <a href="//m.qyer.com/place/tokyo/event/1150547/?cateid=151&amp;from=list">
                            <img :src="require('../assets/img/tree' + (index+1) + '.jpg')">
                        </a>
                        <a href="//m.qyer.com/place/tokyo/event/1150547/?cateid=151&amp;from=list" class="qui-place-link event-list-title qui-ellipsis qui-ellipsis-2">
                            锦囊精选餐厅
                        </a>
                    </li>
    </ul>
    <div class="zhe">
      <span>﹀</span>
    </div>
</div>
   
</template>
<script>
import Vue from 'vue';
import { NavBar,Icon, DropdownMenu, DropdownItem} from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(NavBar);
Vue.use(Icon);
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      city:"",
      option1: [
        { text: '景点观光', value: 0 },
        { text: '美食', value: 1 },
        { text: '休闲娱乐', value: 2 },
        { text: '赛事演出', value: 3 },
        { text: '运动户外', value: 4 },
        { text: '游览路线', value: 5 },
        { text: '文化活动', value: 6 },
        { text: '热门商圈', value: 7 },
      ],
      option2: [
        { text: '筛选', value: 'a' },
        { text: '学生', value: 'b' },
        { text: '历史', value: 'c' },
        { text: '背包客', value: 'd' },
        { text: '亲子', value: 'e' },
        { text: '摄影', value: 'f' },
        { text: '有厕所', value: 'g' },
        { text: 'WiFi', value: 'h' },
        { text: '儿童游乐区', value: 'i' },
        { text: '有包房', value: 'j' },
        { text: '可就餐', value: 'k' },
        { text: '可购纪念品', value: 'l' },
      ],
      option3: [
        { text: '默认排序', value: 'a' },
        { text: '离我最近', value: 'b' },
        { text: '人气最高', value: 'c' },
        { text: '评价最好', value: 'd' },
      ],
      tree:[{

      },{},{},{},{},{},{},{},{}],
    };
  },
    methods:{
      onClickLeft(){
        this.$router.push({ path:'/city'});
      },
      onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    },
    },
     mounted() {
    this.city=this.$route.query.city;
  }
  
  
}
</script>

<style lang="scss">
.color{
  background: #0cbf79;
}
.van-nav-bar__text,.van-icon-arrow-left:before{
  color: white;
}
.van-nav-bar__text,.van-icon-search:before,.van-span{
      color: white;
  }
.fold{
  width: 100%;
  height: 449px;
  li{
    box-sizing: border-box;
    display: inline-block;
    width: 33.33%;
    padding: 15px 6px 0;
    vertical-align: top;
    line-height: 1.25;
    font-size: 12px;
    a{
      color: #444;
    }
    img{
      width: 100%;
      display: block;
    }
  }
}
.zhe{
  width: 100%;
  height: 20px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  
}

</style>


