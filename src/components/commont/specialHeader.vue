<template>
  <div class="special-header">
    <div
      class="left-button"
      @click="goback"
    ><i class="mintui mintui-back"></i><label class="mint-button-text">返回</label></div>
    <div class="right-buttom"><label class="mint-button-text">编辑</label></div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    goback() {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.special-header {
  .left-button {
    position: absolute;
    left: 5px;
    top: 0;
    background-color: #fff;
    color: #26a2ff;
    .mint-button-icon {
      vertical-align: top;
      font-weight: 700;
    }
  }
  .right-buttom {
    position: absolute;
    right: 0;
    top: 0;
    padding: 14px;
    padding-top: 0;

    background-color: #fff;
    color: #26a2ff;
    font-size: 18px;
  }
}
</style>
