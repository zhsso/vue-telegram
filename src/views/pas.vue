<template>
  <div class="pas">
    <common-top
      class="border-bottom-1px"
      :header-title="headerTitle"
      :left-url="leftUrl"
    >
      <template v-slot:iconleft>
        <mt-button icon="back">返回</mt-button>
      </template>
    </common-top>
    <div
      class="pas-wrapper"
      ref="pas"
    >
      <div
        class="pas-table"
      >
        <split></split>
        <mt-cell
          title="封禁用户"
          icon="more"
          is-link
          value="带链接"
        >
          <span>10</span>
          <img
            slot="icon"
            src="@/assets/images/Block User.png"
            width="30"
            height="30"
          >
        </mt-cell>
        <mt-cell
          title="锁定密码 & Touch ID"
          icon="more"
          is-link
          value="带链接"
        >
          <span>关闭</span>
          <img
            slot="icon"
            src="@/assets/images/Passcode & Touch ID.png"
            width="30"
            height="30"
          >
        </mt-cell>
        <mt-cell
          title="两部验证"
          icon="more"
          is-link
          value="带链接"
        >
          <span>打开</span>
          <img
            slot="icon"
            src="@/assets/images/Two-Setp Verification.png"
            width="30"
            height="30"
          >
        </mt-cell>
        <div class="split-a">
          <p class="specail-a">隐私</p>
        </div>
        <div class="privacy">
          <mt-cell
            title="手机号码"
            is-link
            value="没有人"
          ></mt-cell>
          <mt-cell
            title="近期上线"
            is-link
            value="联系人"
          ></mt-cell>
          <mt-cell
            title="个人头像"
            is-link
            value="联系人"
          ></mt-cell>
          <mt-cell
            title="通话"
            is-link
            value="所有人"
          ></mt-cell>
          <mt-cell
            title="转发消息"
            is-link
            value="联系人"
          ></mt-cell>
          <mt-cell
            title="群组和频道"
            is-link
            value="联系人"
          ></mt-cell>
        </div>
        <div class="split-b border-top-1px">
          <p class="first-p">Change who can add you to groups and channels.</p>
          <p class="last-p">自动删除我的账号</p>
        </div>
        <div class="admc">
          <mt-cell
            title="如果未上线"
            is-link
            value="12 月"
          ></mt-cell>
        </div>
        <div class="split-b border-top-1px">
          <p class="first-p">If you do not come online at least once within thisperiod, your account will be deleted along with all messages and contacts.</p>
        </div>
        <div class="Data-settings">
          <mt-cell
            title="数据设置"
            is-link
          ></mt-cell>
        </div>
        <div class="split-a">
          <p class="specail-a">Control which of your data is stored in the cloud and used by Telegram to enable advanced features.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import split from '@/components/commont/split'
import BScroll from 'better-scroll'

export default {
  name: '',
  components: {
    commonTop,
    split
  },
  data() {
    return {
      headerTitle: '隐私',
      leftUrl: '/mySettings',
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() {
      this.pas = new BScroll(this.$refs.pas, {
        click: true,
        probeType: 3
      })
      this.pas.maxScrollY = -280
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common-split.scss';

.pas {
  width: 100%;
  .pas-wrapper {
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
    background-color: #efeff4;
    ::v-deep .pas-table {
      .privacy {
        font-weight: 700;
      }
    }
  }
}
</style>
