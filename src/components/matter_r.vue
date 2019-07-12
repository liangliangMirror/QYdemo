<template>
    <div>
        <ul class="poi-list">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                    <li v-for="item in list" :key="item.id" class="cl">
                <a>
                        <div class="poi-img">
                            <img width="60" height="60" src="../assets/img/fa1.jpg">
                            <span>穷游er推荐</span>
                        </div>
                        <div class="poi-info">
                            <p class="poi-title qui-ellipsis qui-ellipsis-1">
                                东京迪士尼度假区
                            </p>
                            <div class="poi-star">
                                <span class="icon-place icon-place-star-fill"></span><span class="icon-place icon-place-star-fill"></span><span class="icon-place icon-place-star-fill"></span><span class="icon-place icon-place-star-fill"></span><span class="icon-place icon-place-star-half"></span>
                            </div>
                            <span class="poi-points">
                                    9.4
                            </span>
                            <span class="poi-person">5856人去过</span>
                            <div class="poi-tags-distance">
                                <span>主题公园/游乐场/民俗村</span>
                            </div>
                        </div>
                </a>
                <ul class="discount-list">
                    <li>
                        <a href="//z.qyer.com/deal/133137/" data-bn-ipg="mplace_poilist_POI_LastMinute" class="qui-place-link clearfix">
                            <div class="discount-price-person">
                                <span class="discount-price"><em>323</em>元起</span>
                                <span class="discount-person">14人已购买</span>
                            </div>
                            <p class="discount-title qui-ellipsis qui-ellipsis-2"><span><i>折</i></span>东京迪士尼乐园电子票（乐园/海洋 一日票二日票  指定日期+扫码入园无需换票+保证入园）</p>
                         </a>
                    </li>
                </ul>
            </li>
                </van-list>
        </ul>
    </div>
</template>

<script>
import { List } from 'vant';
import Vue from 'vue';
Vue.use(List);
export default {
    data(){
        return{
            list:[{},{},{},{},{}],
            loading: false,
            finished: false
        }
    },
    methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 15) {
          this.finished = true;
        }
      }, 1500);
    }
  }
}
</script>
<style lang="scss">
    ol,ul{
        list-style: none;
    }
    .poi-list{
        padding: 0 12px;
       .cl{
        margin-top: 30px;
        a{
            display: block;
            overflow: hidden;
            .poi-img{
                position: relative;
                float: left;
                width: 60px;
                height: 60px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                span{
                        position: absolute;
                        bottom: 2px;
                        left: 2px;
                        height: 26px;
                        line-height: 28px;
                        background-color: #2bab79;
                        font-size: 20px;
                        color: #fff;
                        border-radius: 4px;
                        padding: 0 3px;
                        overflow: hidden;
                        white-space: nowrap;
                        -webkit-transform: scale(.5);
                        -ms-transform: scale(.5);
                        transform: scale(.5);
                        -webkit-transform-origin: left bottom;
                        -ms-transform-origin: left bottom;
                        transform-origin: left bottom;
                    }
            }
            .poi-info{
                margin-left: 70px;
                line-height: 1;
                .poi-title{
                    line-height: 1.2;
                    display: block;
                    font-weight: 700;
                }
                .poi-star{
                    color: #0cbf79;
                    display: inline-block;
                    margin-top: 5px;
                }
                .poi-points{
                        font-size: 12px;
                        color: #444;
                        margin-left: 4px;
                    }
                .poi-person{
                        border-left: 1px solid #e1e1e1;
                        padding-left: 10px;
                        margin-left: 6px;
                        font-size: 12px;
                        color: #444;
                }
                .poi-tags-distance{
                    color: #848484;
                    margin-top: 12px;
                    position: relative;
                    padding-right: 10px;
                    line-height: 12px;
                    overflow: hidden;
                    span{
                        margin-right: 12px;
                        white-space: nowrap;
                        float: left;
                        font-size: 12px;
                        color: #848484;
                    }
                }
            }
        }
        .discount-list{
            position: relative;
            border: 1px solid #ececec;
            margin-top: 12px;
            line-height: 1.5;
            li{
                a{
                    display: block;
                    padding: 10px;
                    color: #444;
                    .discount-price-person{
                        float: right;
                        text-align: right;
                        min-width: 82px;
                        min-height: 30px;
                        border-left: 1px solid #ececec;
                        padding-left: 6px;
                        margin-left: 6px;
                        line-height: 1.4;
                        .discount-price{
                            font-size: 1px;
                            color: #848484;
                            em{
                                font-size: 14px;
                                font-weight: 400;
                                color: #ff7466;
                            }
                        }
                        .discount-person{
                            display: block;
                            font-size: 1px;
                            color: #848484;
                        }
                    }
                    p{
                        font-size: 12px;
                        padding-left: 15px;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        span{
                            background-color: #ff7466;
                            color: #fff;
                            border-radius: 2px;
                            display: inline-block;
                            width: 13px;
                            height: 13px;
                            line-height: 13px;
                            overflow: hidden;
                            text-align: center;
                            position: absolute;
                            margin: 2px 0 0 -15px;
                            i{
                                font-style: normal;
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
       } 
    }
</style>

