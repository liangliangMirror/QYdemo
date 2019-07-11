<template>
  <div class="ui-section-head">
    <span class="ui-section-title">{{title}}</span>
    <!---->
  </div>
</template>
<style lang="scss" scoped>
.ui-section-head {
  position: relative;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  color: #000;
  padding-left: 11.25px;
  padding-bottom: 11.25px;
  font-weight: 700;
}
</style>

<script>
export default {
  props: ["title"]
};
</script>
