<template>
    <div>
        <section class="commodityBar">
            <h2 class="infoTitle">产品简介</h2>
            <div class="nodeList">
                <h3 class="threeTil titleColor">
                    <i class="zwui-iconfont zworld-icon-light"></i>
                    亮点推荐</h3>
                    <div>
                        <i class="zwui-iconfont zworld-icon-quote-l fontBGStart "></i>
                        <div class="cont"><p>南方航空，非廉航可比</p>
                            <p>直飞航班：搭乘直飞，一站直达，省去转机时间以及旅途劳累</p>
                            <p>行程自由：单机票产品，可根据自己的实际需求安排行程，灵活性更强</p>
                        </div>
                    </div>
            </div>
        </section>
        <section class="commodityBar">
            <h2 class="infoTitle">预定流程</h2>
            <div class="nodeList">
                <h3 class="threeTil titleColor">
                    <i class="zwui-iconfont zworld-icon-light"></i>
                    二次确认</h3>
                    <div>
                        <i class="zwui-iconfont zworld-icon-quote-l fontBGStart "></i>
                        <div class="cont"><p>1）因机票为团票，必须团进团出，航程不可为任何客人做调整，机票也不可改期、不可退票、不可签转、不可更换航空公司。</p>
                            <p>2）因政策团票的特殊性，出票必须收齐全体客人名单后方可操作，供应商会在您出行前1-2天将最终机票行程单发送至您的邮箱并通知您，请耐心等待</p>
                            <p>3）为了您出行顺畅，购买前先致电查询机票，产品数量有限，售完截止；</p>
                            <p>4）航班为参考航班，具体以出票为准。如遇不可抗力因素（如塌方、大雪塞车、天气、航班延误等原因），造成航班延误或取消，不视为旅行社违约。由于国际燃油价格不断变化，若航空公司通知因调整航空燃油价格而导致机票价格上升，客人需另外补交燃油升幅的差价。</p>
                            <p>5）持港澳台护照出境的客人，请自备有效回乡证、台胞证等；外籍客人请自备再次进入中国的有效签证；</p>
                        </div>
                    </div>
                    <h3 class="threeTil titleColor">
                    <i class="zwui-iconfont zworld-icon-light"></i>
                    预定流程</h3>
                    <div>
                        <p class="p"><img src="../assets/img/liucheng.png" alt=""></p>
                    </div>
            </div>
        </section>
        <div class="bookBar">
            <div class="consultCollection">
                <span data-bn-ipg="contact-supplier-click">
                    <van-icon name="service-o" size="15px" />咨询
                </span>
                <span data-bn-ipg="favor-click">
                    <van-icon name="like-o" size="15px" />收藏
                </span>
            </div>
            <div data-bn-ipg="book-click" class="book booktype">
                <a href="#this">立即预订</a>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {

}
</script>

<style lang="scss">
.commodityBar{
    width: 100%;
    background: #fff;
    margin-bottom: 12.5px;
    .infoTitle{
        width: 100%;
        font-size: 21px;
        font-weight: 600;
        color: #000;
        text-align: center;
        margin: 0;
        padding: 15px 0 12px;
    }
    .p{
        width: 90%;
        padding: 10px 15px;
        img{
            width: 100%!important;
            height: auto!important;
        }      
    }
    .nodeList{
        color: #40c895;
        .threeTil{
        height: 20px;
        line-height: 20px;
        font-size: 17px;
        font-weight: 600;
        padding: 1px 0 1px;
        margin: 0;
        padding-left: 10px;
        }
        div{
            .cont{
            padding: 0 20px;
            color: black;
            p{
                padding-bottom: 10px;
                font-weight: 400;
                }
            }
        }
    }
}
.bookBar{
    width: 100%;
    height: 45px;
    position: fixed;
    bottom: -1px;
    z-index: 12;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
    .consultCollection{
        width: 70%;
        background: #737373;
        display: -webkit-flex;
        display: flex;
        color: #fff;
        span{
            font-size: 17px;
            margin-left: 15px;
            line-height: 45px;
        }
    }
    .booktype{
        width: 30%;
        background: #ff7467;
        font-size: 20px;
        text-align: center;
        line-height: 45px;
        font-weight: 700;
        a{
            color: #fff;
        }
    }
}
</style>


