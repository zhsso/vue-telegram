<template>
  <div>
    <div
      class="foot border-top-1px clearfix"
      v-if="selectedChat.type !== 'channel'"
    >
      <div class="local-link icon-attachment"></div>
      <div class="input"><input
          type="text"
          placeholder="输入消息..."
          v-model="Message"
          @keyup="onKeyup"
        >
        <div class="more">
          <i class="mui-icon mui-icon-paperplane"></i>
        </div>
      </div>
      <div
        class="voice"
        :class="{'icon-keyboard_voice': voiceFlag, 'icon-arrow-up-alt1': upFlag, 'mui-icon mui-icon-camera': vedioFlag}"
        @click="changeType"
        v-longpress="sendMessage"
      ></div>
    </div>
    <div
      v-if="selectedChat.type === 'channel'"
      class="foot border-top-1px clearfix foot-person"
      @click="updateNoticeStatus(!selectedChat.notifications)"
    >
      <p>{{channelMes}}</p>
    </div>
  </div>

</template>

<script>
import { Toast } from 'mint-ui'
import { mapGetters, mapActions } from 'vuex'

let voiceStatus = true
let vedioStatus = false
export default {
  name: 'sendfoot',
  data() {
    return {
      Message: '',
      voiceFlag: true,
      upFlag: false,
      vedioFlag: false
    }
  },
  computed: {
    ...mapGetters(['selectedChat', 'selectedChatNotice']),
    channelMes() {
      return this.selectedChat.notifications ? '关闭通知' : '开启通知'
    }
  },
  watch: {
    Message: function(newval, oldval) {
      if (this.Message !== '') {
        this.voiceFlag = false
        this.vedioFlag = false
        this.upFlag = true
      } else {
        this.upFlag = false
        this.voiceFlag = voiceStatus
        this.vedioFlag = vedioStatus
      }
    }
  },
  // 监听输入框的内容返回不同的icon
  methods: {
    ...mapActions(['updateNoticeStatus']),
    sendMessage() {
      if (
        this.upFlag === false &&
        this.voiceFlag === true &&
        this.vedioFlag === false
      ) {
        Toast({ message: '正在录音', duration: 2000 })
      } else {
        Toast({ message: '正在拍视频', duration: 2000 })
      }
    },
    // 点击切换不同的图标
    changeType() {
      if (this.voiceFlag === false && this.vedioFlag === true) {
        this.vedioFlag = false
        this.voiceFlag = true
        voiceStatus = this.voiceFlag
        vedioStatus = this.vedioFlag
        // console.log('语音模式')
        Toast({ message: '语音模式', duration: 1000 })

        this.Message = ''
      } else if (this.voiceFlag === true && this.vedioFlag === false) {
        this.voiceFlag = false
        this.vedioFlag = true
        voiceStatus = this.voiceFlag
        vedioStatus = this.vedioFlag
        // console.log('视频模式')
        Toast({ message: '视频模式', duration: 1000 })
      } else {
        const msg = {
          content: this.Message
        }
        this.$store.dispatch('sendMessage', msg)
        console.log('发文字消息了')
        this.Message = ''
      }
    },
    // 按回车发送信息
    onKeyup(e) {
      if (e.keyCode === 13 && this.Message.trim() !== '') {
        const mes = {
          content: this.Message
        }
        this.$store.dispatch('sendMessage', mes)
        this.Message = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #fff;
  .local-link,
  .voice,
  .input {
    width: 45px;
    text-align: center;
    line-height: 50px;
    color: #939ba6;
  }
  .local-link {
    font-size: 28px;
  }
  .voice {
    font-size: 34px;
    &.icon-arrow-up-alt1 {
      color: #26a2ff;
    }
  }
  .input {
    flex: 1;
    color: #000;
    input {
      padding-right: 36px;
    }
    .more {
      position: absolute;
      right: 50px;
      bottom: -4px;
      i {
        color: #939ba6;
        font-size: 35px;
      }
    }
    input {
      border-radius: 150px;
    }
    input::placeholder {
      color: #939ba6;
    }
  }
}
.foot-person {
  p {
    height: 100%;
    width: 100%;
    line-height: 50px;
    text-align: center;
    color: #26a2ff;
    font-size: 18px;
  }
}
</style>
