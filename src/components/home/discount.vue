<template>
  <section class="ui-section-wrapper z-world-slide">
    <h3-l :title="title"></h3-l>
    <div class="ui-section-body">
      <ul class="index-choiceProduct-list">
        <li v-for="(item,key,index) of discounts" :key="key">
          <a>
            <div class="pic">
              <img width="100%" :src="require('../../assets/img/navl' + (index+1) + '.jpg')" />
            </div>
            <p>{{item.title}}</p>
            <p class="price">
              <em>{{item.pice}}</em>元起
            </p>
          </a>
        </li>
        <li class="read-more">
          <a>
            <span class="icon"></span>
            <p class="text">
              千款折扣
              <br />查看更多
            </p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import h3L from "./h3l";
export default {
  components: {
    h3L
  },
  data() {
    return {
      title: "主打折扣",
      discounts: {
        大阪: {
          title:
            "[暑期][甩尾]天津往返大阪/冲绳/北海道/名古屋4-7天往返含税机票（冲绳全程赠送WIFI+180得日本三年多次旅游签证）",
          pice: 999
        },
        上海: {
          title:
            "[6月-10月]上海直飞大阪/名古屋/高松（四国香川）/北海道/佐贺（九州）/茨城（东京）5-7天往返含税日本机票(含当地交通卡/景点门票/DIY制作+全程自由安排+随时出发+可加购当地热门景点门票）",
          pice: 1299
        },
        泰国: {
          title:
            "[家庭/个人]北京/天津直飞泰国曼谷/普吉岛3-30天往返含税机票(套票可选，可配联运，可A进B出，五星海航)",
          pice: 2399
        },
        首尔: {
          title: "天津直飞首尔3-180天往返含税机票（含行李额+天津航空）",
          pice: 1499
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.ui-section-wrapper {
  background-color: #fff;
  margin-top: 30px;
  overflow-x: scroll;
  .index-choiceProduct-list {
    box-sizing: border-box;
    width: 100%;
    padding: 0 15px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      background-color: transparent;
    }
    li.read-more {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      vertical-align: top;
      margin-left: 10px;
      width: 163px;
      height: 190px;
      border: none;
      text-align: center;
      .icon {
        display: block;
        font-size: 30px;
        width: 37.5px;
        height: 37.5px;
        margin: 0 auto;
        background: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTUxMiAwYTUxMiA1MTIgMCAxIDAgNTEyIDUxMkE1MTIgNTEyIDAgMCAwIDUxMiAwem0xNTguNzIgNTM0LjUyOEwzOTguNTI0IDgwNi43MjRhMzIuMDE3IDMyLjAxNyAwIDAgMS00NS4yNjEtNDUuMjk1TDYwMi43MDkgNTEyIDM1My4yOCAyNjIuNTM3YTMyLjAxNyAzMi4wMTcgMCAwIDEgNDUuMjYtNDUuMjYxTDY3MC43MiA0ODkuNDJhMzIuNDI3IDMyLjQyNyAwIDAgMSAwIDQ1LjEwN3oiIG9wYWNpdHk9Ii4yIi8+PC9zdmc+)
          50% / contain no-repeat;
      }
      p {
        font-weight: 400;
        font-size: 0.26rem;
      }
    }
    li {
      display: inline-block;
      box-sizing: border-box;
      width: 163px;
      height: 190px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background: #fff;
      margin-right: 6.75px;
      &::-webkit-scrollbar {
        background-color: transparent;
      }
      em {
        font-size: 12px;
        color: #ff7467;
        font-family: special;
        font-style: normal;
      }
      a {
        display: block;
      }
      .pic {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 66.66%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          vertical-align: top;
          width: 100%;
          height: 100%;
        }
      }
      p {
        height: 28.5px;
        overflow: hidden;
        margin-top: 6px;
        font-size: 12px;
        line-height: 14.25px;
        color: #1f2023;
        width: 100%;
        padding: 0 7.5px;
        box-sizing: border-box;
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        font-weight: 600;
      }
    }
  }
}
</style>
