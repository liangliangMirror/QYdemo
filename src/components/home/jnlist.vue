<template>
  <ul class="guideList">
    <li v-for="item in title" :key="item.name">
      <a>
        <p class="pic">
          <img :src="item.img" alt />
        </p>
        <h3 class="name">{{item.name}}</h3>
        <p class="locate">{{item.locate}}</p>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          img: require("../../assets/img/chaoxian.jpg"),
          name: "朝鲜",
          locate: "朝鲜"
        },
        {
          img: require("../../assets/img/nasa.jpg"),
          name: "NASA太空探索指南",
          locate: "美国"
        },
        {
          img: require("../../assets/img/qy.jpg"),
          name: "《权力的游戏》",
          locate: "专题"
        },
        {
          img: require("../../assets/img/bael.jpg"),
          name: "北爱尔兰",
          locate: "英国"
        },
        {
          img: require("../../assets/img/kldy.jpg"),
          name: "克罗地亚",
          locate: "克罗地亚"
        },
        {
          img: require("../../assets/img/adlxy.jpg"),
          name: "安达卢西亚",
          locate: "西班牙"
        }
      ]
    };
  },
    props: ["title"],
  component: {},
  mounted() {
    // console.log(this.title);
  }
};
</script>
<style lang="scss" scoped>
.guideList {
  margin: 10px auto;
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: #fff;
  border: 1px solid #dadada;
  box-shadow: 0 2px 2px rgba(218, 218, 218, 0.4);

  li {
    width: 33%;
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;

    &:nth-child(3n) {
      border-right: none;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      padding: 10px 0;
      text-align: center;

      .name {
        padding-top: 5px;
        font-size: 13px;
        color: #2c2c2c;
        font-weight: 400;
      }

      .pic {
        img {
          display: block;
          margin: 0 auto;
          width: 64px;
          height: 96px;
        }
      }

      .locate {
        font-size: 11px;
        line-height: 15px;
        color: #939393;
      }
    }
  }
}
</style>


