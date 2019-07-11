<template>
  <footer class="m-index-footer">
    <p class="links">
      <a href="javascript:;">手机版</a>
      <a href="javascript:;">电脑版</a>
      <a href="//app.qyer.com">APP</a>
      <a href="/feedback">意见反馈</a>
    </p>
    <p class="copy-right">
      2004-2019 ©北京穷游天下科技发展有限公司™
      <br />京ICP备12003524号&nbsp;|&nbsp;电话 010 64554669
    </p>
  </footer>
</template>
<style lang="scss" scoped>
.m-index-footer::before {
  content: "";
  display: block;
  height: 6px;
  background-color: #2bab79;
}
.m-index-footer {
  padding-bottom: 24px;
  background-color: #2d3741;
  text-align: center;

  .links {
    height: 48px;
    color: #fff;
    font-size: 18px;
    a {
      display: inline-block;
      padding: 12px;
      color: #9ea3ab;
    }
  }
  .copy-right {
    color: #656669;
    background-color: #2d3741;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>

<script>
export default {};
</script>

