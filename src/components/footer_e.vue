<template>
    <div class="footer">
        <p>2004-2017 © 穷游网™ qyer.com All rights reserved.</p>
        <p class="switchStyle"><span class="current">手机版</span><span><a href="#">电脑版</a></span><span><a href="#">APP</a></span></p>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
.footer{
    height: 40px;
    flex-direction: column;
    color: #9ea3ab;
    margin: 20px 0;
    text-align: center;
    font-size: 10px;
    line-height: 20px;
    p{
     width: 100%;
     height: 20px;
     text-align: center;
     font-size: 10px;
     line-height: 20px;
     span{
         margin-right: 25px;
     }
     a{
         color: black;
         text-decoration: none
     }
    }
 }
</style>


