<template>
  <div class="message-panel clearfix">
    <common-top
      :header-title="selectedChat.user.name"
      :right-url="rightUrl"
      :badge-flag="badgeFlag"
    >
      <template v-slot:iconleft>
        <mt-button
          icon="back"
          @click.native.prevent="stopBS"
        >返回</mt-button>
      </template>
      <template v-slot:icon>
        <mt-button><img
            :src="selectedChat.user.img"
            width="30"
            height="30"
            class="avatar"
          ></mt-button>
      </template>
    </common-top>
    <message-list
      class="border-top-1px"
      ref="meslist"
    ></message-list>
    <send-foot></send-foot>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import sendFoot from '@/components/news/sendfoot'
import messageList from '@/components/news/messageList'
import { mapGetters } from 'vuex'

export default {
  name: 'messagePanel',
  components: {
    commonTop,
    sendFoot,
    messageList
  },
  data() {
    return {
      rightUrl: '/news',
      badgeFlag: true
      // time: moment(new Date()).format('HH:mm')
    }
  },
  computed: {
    ...mapGetters(['selectedChat'])
  },
  created() {
    this.rightUrl = '/news/messagePanel/personInfo/' + this.selectedChat.tgid
    // this.$root.$emit('goNavHide')
  },
  methods: {
    // 父元素调用子元素的方法，立即停止滚动事件。防止滚动未结束时候按返回发生clientHight和scrollHeight报undefined错误
    stopBS() {
      this.$refs.meslist.stopBs()
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.message-panel {
  position: relative;
  z-index: 2;
  height: 100vh;
  width: 100%;

  background-color: #fff;
}
</style>
