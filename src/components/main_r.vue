<template>
    <div class="main">
      <div class="logo">
        <img src="../assets/img/dongjing.jpg" alt="">
        <div class="titles">
          <p class="cn">东京</p>
          <p class="en">Tokyo</p>
      </div>
      <div class="like wrap">
          <span class="icon"><van-icon name="like-o" size="25px" /></span>
          <span class="text">想去</span>
      </div>
      <div class="arrived wrap">
          <span class="icon"><van-icon name="flag-o" size="25px" /></span>
          <span class="text">去过</span>
      </div>
      </div>
      <van-grid square>
      <van-grid-item
        v-for="item in trees"
        :key="item.id"
        icon="point-gift"
        :text="item.character"
        @click="ceshi"
      />
    </van-grid>
      <div class="collect">
        <p><van-icon name="like-o" size="15px" />我收藏的东京目的地</p>
        <p>></p>
      </div>
      <unmissable-r></unmissable-r>
      <discount-L></discount-L>
      <play-t></play-t> 
      <div class="recommend">
        <a class="btn">
                在app中查看更多穷游er推荐玩乐
            </a>
      </div>
      <unmissable-r></unmissable-r>
      <discount-L></discount-L>
      <play-t></play-t> 
      <div class="recommend">
        <a class="btn">
                在app中查看更多推荐美食
            </a>
      </div>
      <unmissable-r></unmissable-r>
      <ul class="note-list">
        <li v-for="item in tour" :key="item.id">
          <a href="#">
                <p>{{item.title}}</p>
                <div class="note-info"><span>{{item.username}}</span><span>{{item.time}}</span><span>{{item.like}}人喜欢</span></div>
            </a>
        </li>
      </ul>
      <div class="recommend">
        <a class="btn">
                在app中查看更多推荐游记
            </a>
      </div>
      <div class="recommend-about">
        <div class="rd-top">相关推荐</div>
        <div class="rd-sec-wrap">
          <div class="rd-left">
           <a class="rd-section" href="#" v-for="item in tree" :key="item.id">
            <div class="rd-cover"><img class="rd-cover-img" src="../assets/img/file1.gif"></div>
              <div class="rd-description">情人节特辑 | 旅行超燃混剪，我们闪闪发光的2018 北京 美国 日本 巴厘岛 </div>
                <div class="rd-message">
                  <div class="rd-author"> <img src="../assets/img/file1.jpg"> 
                     <span>二砚与马桶</span>
                  </div> 
                  <div class="rd-like">
                    <img src="//fes.qyerstatic.com/Fj-VcWESzlI9yWVjHLGTIgxSyyiq">
                    <span>649</span>
                 </div>
                </div>
            </a>
          </div>
          <div class="rd-right">
            <a class="rd-section" href="#" v-for="item in tree" :key="item.id">
              <div class="rd-cover">
                <img class="rd-cover-img" src="../assets/img/file2.gif">
              </div>
              <div class="rd-description">Hello穷游的小伙伴们大家好，我是演员王智！ 很开心可以加入穷游这个大家庭，我</div>
              <div class="rd-message"> <div class="rd-author">
                <img src="../assets/img/file2.jpg">
                <span>演员王智</span>
                </div>
              <div class="rd-like">
                <img src="//fes.qyerstatic.com/Fj-VcWESzlI9yWVjHLGTIgxSyyiq">
                <span>6.8k</span>
              </div>
              </div>
            </a>
          </div>
      </div>
      <div class="rd-down-btn rd-sec-wrap">
        <a href="#">
          <img src="../assets/img/open.png">
        </a>
      </div>
  </div>
  <unmissable-r></unmissable-r>
  <div class="landscape">
    <div class="box-track">
      <ul>
      <li v-for="(item,index) in tours" :key="item.id">
        <a href="#" class="qui-place-link">
              <div class="poi-img" style="height: 104px;"><img :src="require('../assets/img/liang' + (index+1) + '.jpg')"></div>
                <div class="poi-info">
                      <p class="poi-title">{{item.title}}</p>
                </div>
          </a>
      </li>
    </ul>
    </div>
    
  </div>
</div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Grid, GridItem } from 'vant';
import playT from "../components/play_t";
import unmissableR from "../components/unmissable_r";
import discountL from "../components/home/discount";
Vue.use(Icon);
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      tour:[{
        id:'1',
        title:'与东京的初次相遇——2019春节东京(迪士尼)/箱根/河口湖/镰仓亲子游记（6万字，完结）',
        username:'myamnesia',
        time:'2019-02-27',
        like:'550'
      },
      {
        id:'2',
        title:'逆转型亲子游❀樱花前奏中の母女関東日记 （箱根镰仓东京交通全攻略+东京的20个一日游玩法介绍）',
        username:'宣尛見',
        time:'2019-04-26',
        like:'706'
      },
      {
        id:'3',
        title:'【从平成走向令和】——2019五一7日6晚东京游（东京/箱根/镰仓/日光/吉祥寺）——带着妈妈外婆去日本',
        username:'菲丽斯斯斯密达',
        time:'2019-05-05',
        like:'242'
      },
      {
        id:'4',
        title:'日本深度游之东京探店 | 代官山10家逛吃推荐+8家剁手中古店/涩谷不得不去的6家CAFE/中目黑吃逛全攻略',
        username:'谢谢菜菜',
        time:'2019-06-17',
        like:'247'
      }],
      tours:[{
        id:'1',
        title:'籍根'
      },{
        id:'2',
        title:'京都'
      },{
        id:'3',
        title:'富士山地区'
      },{
        id:'4',
        title:'镰仓'
      },{
        id:'5',
        title:'大阪'
      },{
        id:'6',
        title:'富士河口湖'
      },{
        id:'7',
        title:'横滨'
      },{
        id:'8',
        title:'奈良'
      }],
      trees:[{character:'景点游玩'},{character:'美食'},{character:'交通'},{character:'浏览路线'},{character:'签证'},{character:'机酒自由行'},{character:'景点门票'},{character:'WiFi电话卡'}],
      tree:[{},{}]
    };
  },  
  methods: {
    ceshi(){
      this.$router.push({path:'./aaa'});
    }
  },
  components:{
    playT,
    unmissableR,
    discountL,
  }
}
</script>

<style lang="scss">
body{
  -webkit-overflow-scrolling: touch;
}
.van-icon-point-gift:before {
    color: skyblue;
}
 .main{
    .logo{
      height: 180px;
      position: relative;
      img{
      width: 100%;
      height: 100%;
    }
    .titles{
      position:absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60px;
      padding: 20px 10px 0;
      color: #fff;
      .cn{
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 20px;
        line-height: 26px;
        font-weight: 700;
      }
      .en{
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        font-weight: 400;
        padding-left: 2px;
      }
    }
    }
    .like{
      right: 76px;
    }
    .wrap{
        position: absolute;
        color: #fff;
        bottom: 9px;
        font-size: 12px;
        .icon{
            display: block;
            width: 22px;
            height: 22px;
        }
    }
    .arrived{
          right: 25px;
    }
    img{
      width: 100%;
    }
    .collect{
      height: 50px;
      border-top: 1px solid #ececec;
      border-bottom: 1px solid #ececec;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
    }
    .note-list{
      list-style: none;
      li{
        a{
            display: block;
            margin-left: 10px;
            padding: 12px 10px 10px 0;
            border-bottom: 1px solid #ececec;
            color: #444;
            font-size: 14px;
            p{
              overflow: hidden;
              line-height: 1.5;
            }
            .note-info{
              span{
                    margin-right: 10px;
                    padding-right: 10px;
                    border-right: 1px solid #ececec;
                    color: #848484;
                    font-size: 12px;
              }
              span:last-child {
                    margin-right: 0.5px;
                    padding-right: 0;
                    border-right: none;
              }
            }
        }
      }
    }
    .recommend{
       text-align: center;
       padding: 10px 0;
       margin: 0 5px;
       border-top: 1px solid rgba(0,0,0,.03);
       .btn{
          padding: 7px 13px;
          border-radius: 4px;
          box-sizing: border-box;
          border: .5px solid #11bf79;
          text-align: center;
          font-size: 14px;
          height: 34px;
          color: #11bf79;
          display: inline-block;
          line-height: 21px;
       }
    }
    .recommend-about{
      .rd-top{
        line-height: 60px;
        font-size: 16px;
        font-weight: 700;
        color: rgba(0,0,0,.8);
        text-align: left;
        padding: 0 20px;
        background: #fff;
        border-top: 1px solid rgba(0,0,0,0.1);
      }
      .rd-sec-wrap{
            padding: 0 15px;
            display: -webkit-box;
            display: -moz-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            background: #f8f8f8;
            .rd-left{
                width: 50%;
                margin-right: 10px;
                .rd-section{
                    display: block;
                    text-decoration: none;
                    background: #fff;
                    box-sizing: border-box;
                    -webkit-column-break-inside: avoid;
                    break-inside: avoid;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    overflow: hidden;
                    -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,.06);
                    box-shadow: 2px 2px 3px rgba(0,0,0,.06);
                    .rd-cover{
                      box-sizing: border-box;
                      img{
                          width: 100%;
                          display: block;
                          border-radius: 5px 5px 0 0;
                          background: #e3e3e3;
                      }
                    }
                    .rd-description{
                          margin: 6px 0 10px;
                          color: rgba(0,0,0,.8);
                          font-size: 14px;
                          font-weight: 700;
                          display: -webkit-box;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 2;
                          max-height: 50px;
                          overflow: hidden;
                          line-height: 20px;
                          padding: 0 10px;
                          font-size: 16px;
                    }
                    .rd-message{
                      display: flex;
                      justify-content: space-between;
                      -webkit-box-pack: center;
                      -webkit-box-align: center;
                      align-items: center;
                      padding: 0 10px 10px 10px;
                      .rd-author{
                            display: flex;
                            -webkit-box-pack: center;
                            -webkit-box-align: center;
                            align-items: center;
                            img{
                                  width: 21px;
                                  height: 21px;
                                  margin-right: 8px;
                                  border-radius: 100%;
                                  margin-right: 4px;
                            }
                            span{
                                  font-size: 12px;
                                  color: #9d9d9d;
                                  max-width: 70px;
                                  white-space: nowrap;
                                  overflow: hidden;
                                  text-overflow: ellipsis;
                            }
                      }
                      .rd-like{
                            display: flex;
                            -webkit-box-pack: center;
                            -webkit-box-align: center;
                            align-items: center;
                            img{
                                  width: 16px;
                                  margin-right: 4px;
                            }
                            span{
                              font-size: 15px;
                              color: rgba(0,0,0,.8);
                              max-width: 40px;
                              white-space: nowrap;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              font-weight: 700;
                              font-family: "DINCondensed-Bold";
                              display: inline-block;
                              margin-top: 4px;
                            }
                      }
                    }
                }
            }
            .rd-right{
                width: 50%;
                .rd-section{
                    display: block;
                    text-decoration: none;
                    background: #fff;
                    box-sizing: border-box;
                    -webkit-column-break-inside: avoid;
                    break-inside: avoid;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    overflow: hidden;
                    -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,.06);
                    box-shadow: 2px 2px 3px rgba(0,0,0,.06);
                    .rd-cover{
                      box-sizing: border-box;
                      img{
                          width: 100%;
                          display: block;
                          border-radius: 5px 5px 0 0;
                          background: #e3e3e3;
                      }
                    }
                    .rd-description{
                          margin: 6px 0 10px;
                          color: rgba(0,0,0,.8);
                          font-size: 14px;
                          font-weight: 700;
                          display: -webkit-box;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 2;
                          max-height: 50px;
                          overflow: hidden;
                          line-height: 20px;
                          padding: 0 10px;
                          font-size: 16px;
                    }
                    .rd-message{
                      display: flex;
                      justify-content: space-between;
                      -webkit-box-pack: center;
                      -webkit-box-align: center;
                      align-items: center;
                      padding: 0 10px 10px 10px;
                      .rd-author{
                            display: flex;
                            -webkit-box-pack: center;
                            -webkit-box-align: center;
                            align-items: center;
                            img{
                                  width: 21px;
                                  height: 21px;
                                  margin-right: 8px;
                                  border-radius: 100%;
                                  margin-right: 4px;
                            }
                            span{
                                  font-size: 12px;
                                  color: #9d9d9d;
                                  max-width: 70px;
                                  white-space: nowrap;
                                  overflow: hidden;
                                  text-overflow: ellipsis;
                            }
                      }
                      .rd-like{
                            display: flex;
                            -webkit-box-pack: center;
                            -webkit-box-align: center;
                            align-items: center;
                            img{
                                  width: 16px;
                                  margin-right: 4px;
                            }
                            span{
                              font-size: 15px;
                              color: rgba(0,0,0,.8);
                              max-width: 40px;
                              white-space: nowrap;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              font-weight: 700;
                              font-family: "DINCondensed-Bold";
                              display: inline-block;
                              margin-top: 4px;
                            }
                      }
                    }
                }
            }
      }
      .rd-down-btn {
            padding: 20px 0 10px 0;
            text-align: center;
            background: #f8f8f8;
            a{
              box-sizing: border-box;
              img{
                    width: 50% !important;
              }
            }
      }
    }
    .landscape{
      height: 126px;
      margin-top: 10px;
      .box-track{
        overflow-x: auto;
        overflow-y: scroll;
        &::-webkit-scrollbar{
          background-color: transparent;
        }
        ul{
          width: 940px;
          li{
            width: 116px;
            display: block;
            float: left;
            padding-left: 12px;
            box-sizing: border-box;
            a{
              color: #444;
              -webkit-tap-highlight-color: rgba(0,0,0,0);
              .poi-img{
                height: 104px;
                img{
                    height: 100%;
                    display: block;
                }
              }
              .poi-info{
                    line-height: 1;
                    font-size: 0;
                    p{
                          line-height: 1;
                          font-size: 12px;
                          margin-top:10px;
                    }
              }
            }
          }
        }
      }
    }
  }
</style>