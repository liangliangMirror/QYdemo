<template>
    <div>
        <section>
            <section class="commodityBar clearfix">
                <div class="commodityImgBar clearfix">
                    <img src="../assets/img/shu.jpg" width="100%" height="auto" title="[暑期]广州直飞沙巴5-6天含税机票" alt="[暑期]广州直飞沙巴5-6天含税机票" class="commodityImg">
                    <div class="mask">
                        <van-icon name="arrow-left" size="20px" @click="home" />
                    </div>
                    <div class="zw-share sharebtn">
                        <a data-bn-ipg="details-share-click" class="zw-share-button zw-share-button-white"></a>
                        <div class="zw-share-mask" style="display:none;">
                            <img src="//fes.qyerstatic.com/Fj0cF4rvFON-kXOxqwFUmmdk43E-?imageslim" class="zw-share-in-safari">
                        </div>
                    </div>
                    <p>产品编号&nbsp;139087</p>
                </div>
                <div id="toProduct">
                </div>
                <h1 id="product_title" class="tit"><a name="product">[暑期]广州直飞沙巴5-6天含税机票</a></h1>
                <div class="pInfo">
                    <div class="price">
                        <em>1499</em>元起
                    </div>
                    <div class="floorGuide">
                        <a href="#this">底价指南</a>
                    </div>
                    <div class="sold">已售&nbsp;0份</div>
                    <div class="browse">浏览&nbsp;324</div>
                </div>
            </section>
            <section class="commodityBar clearfix">
                <input type="hidden" id="lid" value="139087">
                <div class="appAttentiveBox">
                    <a>
                        <em class="tag">APP专享</em>
                        <span class="text">用穷游App预订, 更快更方便</span>
                        <p class="buy">
                            <span class="zwui-iconfont icon-arrow-right"></span>
                        </p>
                    </a>
                </div>
            </section>
            <section class="commodityBar clearfix">
                <section id="dateAndPrice" class="dateAndPrice clearfix">
                    <a data-bn-ipg="chooseproduct-click" class="link">
                        <div class="tilBar">
                            <van-icon name="records" size="22px" />
                            <span class="til">选择&nbsp;产品类型/日期</span>
                        </div>
                        <div class="monthBar">7月、8月、9月 多日期出发</div>
                        <span class="zwui-iconfont icon-arrow-right"></span>
                    </a>
                </section>
            </section>
            <section class="commodityBar clearfix">
                <div class="confirm">
                    <van-icon name="certificate" size="25px" />
                    <div class="secondConfirm">二次确认</div>
                    <div class="confirmText">二次确认商品，需要卖家确认后出行 &nbsp;请至少提前8天预订</div>
                </div>
            </section>
            <section class="commodityBar clearfix"></section>
            <section class="businessInfoBar clearfix">
                <div class="businessType">
                    <img src="../assets/img/manyou.jpg" class="logo">
                    <div class="business">
                        <div class="name">
                            <span>慢游东南亚</span>
                            <a>
                            <img src="https://fes.qyerstatic.com/FrYMU-cieG6qDgoTLONS_VCTi26n"></a>
                        </div>
                        <div class="tag">
                            <span class="inBusiness">
                                <van-icon name="wap-home" size="15px" color="green" />入驻商家
                            </span>
                            <span class="confirmBusiness">
                                <van-icon name="star-o" size="15px" color="green" />认证商家
                            </span>
                        </div>
                    </div>
                    <a class="supShop">店铺</a>
                    </div>
                </section>
        </section>
    </div>
</template>
<script>
import  Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {
    methods:{
      home(){
        this.$router.push({ path:'/home'});
      }
    }
}
</script>
<style lang="scss">
html{
    background: #f5f5f5;
}
.commodityBar {
    margin-bottom: 12.5px;
    background: #fff;
    zoom: 1;
    .commodityImgBar {
        width: 100%;
        position: relative;
        display: block;
        font-size: 40px;
        margin-bottom: 10px;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
        .mask{
            width: 100%;
            height: 60px;
            position: absolute;
            left: 0;
            top: 0;
            background-image: linear-gradient(180deg,rgba(0,0,0,.4) 0,transparent);
        }
        .sharebtn{
            position: absolute;
            top: 13px;
            right: 12px;
            z-index: 9;
            display: inline-block;
        }
        p{
            margin: 0;
            width: 100%;
            box-sizing: border-box;
            position: absolute;
            padding: 10px 0 0 8px;
            line-height: 24px;
            font-size: 12px;
            color: #fff;
            left: 0;
            bottom: 0;
            background-image: linear-gradient(180deg,transparent 0,rgba(0,0,0,.3));
        }
    }
    #product_title{
            width: 100%;
            box-sizing: border-box;
            line-height: 20px;
            background: #fff;
            padding: 0 15px 0 10px;
            color: rgba(31,32,35,.8);
            font-size: 16px;
            font-weight: 500;
            word-break: break-all;
    }
    .pInfo{
            padding:0 10px;
            font-size: 12px;
            color: rgba(31,32,35,.4);
            background-color: #fff;
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
            line-height: 20px;
            .price{
                float: left;
                em{
                    font-size: 20px;
                    padding-right: 3px;
                    color: #ff7467;
                    font-style: normal;
                    font-weight: 400;
                }
            }
            .floorGuide{
                float: left;
                padding-left: 10px;
                margin-top: 1px;
                a{
                    display: inline-block;
                    color: #40c895;
                    text-decoration: underline;
                    padding-top: 2px;
                }
            }
            .browse{

                    padding-left:13px;
                    padding-top: 1px;
                    float: right;
                    text-align: right;
                }
                .sold{
                    padding-left: 13px;
                    padding-top: 1px;
                    float: right;
                    text-align: right;
                }
            }
    .appAttentiveBox{
        display: flex;
        border-top: 1px solid #edeeee;
        margin: 2px 8px 2px 10px;
        background-color: #fff;
        font-size: 14px;
        line-height: 30px;
        position: relative;
        cursor: pointer;
        a{
            width: 95%;
            height: 45px;
            overflow: hidden;
            line-height: 45px;
            em{
                display: inline-block;
                height: 17px;
                width: 50px;
                line-height: 17px;
                text-align: center;
                vertical-align: middle;
                border-radius: 3px;
                padding: 0 4px;
                background-color: #ff7467;
                font-size: 12px;
                font-style: normal;
                font-weight: 700;
                color: #fff;
                margin-right: 7px;
                -webkit-flex-shrink: 0;
                flex-shrink: 0;
            }
        }
    }
    .dateAndPrice{
        .link{
            background: #fff;
            padding: 10px 10px 5px;
            display: block;
            text-decoration: none;
            .tilBar{
                width: 100%;
                font-size: 15px;
                line-height: 25px;
                i{
                    position: relative;
                    color: #40c895;
                    padding: 0 10px 0 1px;
                }
                .til{
                    font-size: 15px;
                    color: rgba(31,32,35,.8);
                    font-weight: 700;
                }
            }
            .monthBar{
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    color: rgba(31,32,35,.4);
                    box-sizing: border-box;
                    padding-left: 4px;
                    padding-right: 10px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 13px;
            }
        }
    }
    .confirm{
        height: 40px;
        padding: 10px 0;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        .van-icon{
            color: #ff7467;
            padding-left: 10px;
            font-size: 20px;
            font-weight: 700;
        }
        .secondConfirm{
            width: 35px;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            color: #ff7467;
            padding: 0 10px 0 4px;
        }
        .confirmText{
            overflow: hidden;
            font-size: 14px;
            padding-right: 10px;
        }
    }
}
.businessInfoBar{
    width: 100%;
    margin: 15px 0;
    position: relative;
    .businessType{
        width: 100%;
        height: 63px;
        box-sizing: border-box;
        padding: 0 10px 0 13px;
        display: -webkit-flex;
        display: flex;
        background-color: #fff;
        position: relative;
        .logo{
            width: 55px;
            height: 40px;
            margin-top: 10px;
            border: 1px solid #e9e9e9;
        }
        .business{
            padding-left: 10px;
            .name{
                width: 200px;
                height: 35px;
                font-size: 0;
                span{
                    display: block;
                    float: left;
                    max-width: calc(20rem - 28px);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding-right: 0;
                    line-height: 35px;
                    -webkit-align-items: center;
                    align-items: center;
                    font-size: 16px;
                    color: rgba(31,32,35,.8);
                }
                a{
                    height: 34px;
                    display: -webkit-flex;
                    display: flex;
                    float: left;
                    margin-left: 5px;
                    -webkit-align-items: center;
                    align-items: center;
                    img{
                        width: 22px;
                    }
                }
            }
            .tag{
                line-height: 20px;
                color: rgba(31,32,35,.4);
                .inBusiness{
                    font-size: 13px;
                    padding-right: 10px;
                }
                .confirmBusiness{
                    font-size: 13px;
                    padding-right: 10px;
                }
            }
        }
        .supShop{
            display: block;
            width: 69px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            background-color: #40c895;
            box-shadow: 0 5px 18px 0 rgba(122,208,176,.6);
            border-radius: 3px;
            position: absolute;
            right: 15px;
            top: 50%;
            margin-top: -17px;
        }
    }
  
}
    
</style>