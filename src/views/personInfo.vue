<template>
  <div class="person-info">
    <div class="top border-bottom-1px">
      <div
        class="left-button"
        @click="goback"
      ><i class="mintui mintui-back"></i><label class="mint-button-text">返回</label></div>
      <div class="right-buttom" @click="goEditFirendsDetail"><label class="mint-button-text">编辑</label></div>
      <div class="avatar-wrapper">
        <img
          :src="selectedChat.user.img"
          width="100"
          height="100"
          class="avatar clearfix"
        >
        <p class="name">{{selectedChat.user.name}}</p>
        <p class="date">近期上线</p>
      </div>
      <div class="icon-group">
        <div class="icon-wrapper">
          <div class="icon-circle"><i class="icon-phone"></i></div>
          <p>通话</p>
        </div>
        <div
          class="icon-wrapper"
          @click="updateNoticeStatus(!selectedChat.notifications)"
        >
          <div class="icon-circle"><i :class="[selectedChat.notifications==true?'icon-notifications_off':'icon-notifications']"></i></div>
          <p>关闭通知</p>
        </div>
        <div class="icon-wrapper">
          <div class="icon-circle"><i class="mintui mintui-search"></i></div>
          <p>搜索</p>
        </div>
        <div class="icon-wrapper">
          <div class="icon-circle"><i class="icon-navigation-more"></i></div>
          <p>更多</p>
        </div>
      </div>
    </div>
    <div class="split border-bottom-1px"></div>
    <div
      class="phone-wrapper"
      v-if="selectedChat.phoneNumber"
    >
      <p class="name">手机</p>
      <p class="number">{{selectedChat.phoneNumber}}</p>
    </div>
    <div
      class="phone-wrapper"
      v-if="selectedChat.bulletin"
    >
      <p class="number">{{selectedChat.bulletin}}</p>
    </div>
    <div class="split border-bottom-1px border-top-1px"></div>
    <div class="media">
      <h4>媒体记录部分，待开发</h4>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'personInfo',

  data() {
    return {}
  },
  computed: {
    ...mapGetters(['selectedChat'])
  },

  methods: {
    ...mapActions(['updateNoticeStatus']),
    goback() {
      history.go(-1)
    },
    goEditFirendsDetail() {
      const tgid = this.selectedChat.tgid
      this.$router.push({ name: 'editFriendsDetail', params: { tgid } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/specialHead.scss';

.person-info {
  .top {
    position: relative;
    padding-bottom: 10px;
    .avatar-wrapper {
      margin-top: 15px;
      text-align: center;
      img {
        border-radius: 50%;
      }
      .name {
        margin-top: 5px;
        font-size: 20px;
        font-weight: 600;
        color: #000;
      }
      .date {
        font-size: 16px;
        margin-top: -6px;
      }
    }
    .icon-group {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      .icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
        width: 60px;
        height: 60px;
        .icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          line-height: 38px;
          text-align: center;
          background-color: #26a2ff;
          i {
            color: #fff;
            font-size: 20px;
          }
        }

        p {
          margin-top: 5px;
        }
        &.icon-wrapper:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
  .split {
    width: 100%;
    height: 20px;
    background-color: #efeff4;
  }
  .phone-wrapper {
    margin-top: 10px;
    margin-left: 10px;
    .name {
      color: #000;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .number {
      font-size: 16px;
      font-weight: 700;
      color: #26a2ff;
    }
  }
}
</style>
