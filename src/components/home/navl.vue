<template>
  <section class="item-nav-wrapper">
    <ul>
      <li class="item" v-for="(item,key) in imgs " :key="key">
        <a href="###" data-bn-ipg="mindex-nav-guide" class="item-btn">
          <i class="item-icon" :style="item"></i>
          <span>{{spans[key]}}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      spans: [
        "锦囊",
        "行程助手",
        "游记",
        "Biu",
        "问答",
        "目的地",
        "酒店",
        "商城",
        "约伴",
        "专栏"
      ],
      imgs: {
        0: "background:no-repeat center/100% url(//fes.qyerstatic.com/FjiWdzANqPB2Nm0wtDTvrr8HDrsg?imageslim);",
        1: "background:no-repeat center/100% url(//fes.qyerstatic.com/Fgg0Tsbl5u7zvbNnmVhjDJd-3I-_?imageslim);",
        2: "background:no-repeat center/100% url(//fes.qyerstatic.com/FoRfPUtUloa5MqNwOv5iIcqQ4rHv?imageslim);",
        3: "background:no-repeat center/100% url(//fes.qyerstatic.com/FkMxtgHBTCKsjaLBZ1B7xHGg08QT?imageslim);",
        4: "background:no-repeat center/100% url(//fes.qyerstatic.com/FsqBlRsF2hnYNrfR9YhCWQqD2j_P?imageslim);",
        5: "background:no-repeat center/100% url(//fes.qyerstatic.com/Fgh5NStqSlSjuK7vtLSwOXg4RwNz?imageslim);",
        6: "background:no-repeat center/100% url(//fes.qyerstatic.com/Fvv-TfNa_RKqKW0sTcp2BqwgVJNZ?imageslim);",
        7: "background:no-repeat center/100% url(//fes.qyerstatic.com/FmZQUj73tzL9QixhyTBUtpxbxBqt?imageslim);",
        8: "background:no-repeat center/100% url(//fes.qyerstatic.com/Ft-_BNtwDwbLCwNbk8a6JKMx_OME?imageslim);",
        9: "background:no-repeat center/100% url(//fes.qyerstatic.com/Fibzv7V9e1eoPD7XT4C0uC-hZIf7?imageslim);"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.item-nav-wrapper {
  margin-top: 12.5px;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      box-sizing: border-box;
      flex: 0 0 20%;
      padding: 5px;
      width: 20%;
      .item-btn {
        display: block;
        position: relative;
        .item-icon {
          display: block;
          width: 100%;
          padding-bottom: 100%;
          margin: 0 auto;
        }
        span {
          display: block;
          width: 100%;
          font-size: 12px;
          margin-top: -7px;
          text-align: center;
          color: rgba(0, 0, 0, 0.8);
          font-weight: 500;
        }
      }
    }
  }
}
</style>
