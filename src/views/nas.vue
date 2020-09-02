<template>
  <div class="nas">
    <common-top
      :header-title="headerTitle"
      :left-url="leftUrl"
      class="border-bottom-1px"
    >
      <template v-slot:iconleft>
        <mt-button icon="back">返回</mt-button>
      </template>
    </common-top>
    <div
      class="nas-wrapper "
      ref="nas"
    >
      <div class="nas-table">

        <div class="split-a">
          <p class="specail-a">显示通知</p>
        </div>
        <div class="all-info">
          <mt-cell
            title="所有账户"
          >
            <mt-switch
              v-model="value1"
              @change="changeNoteAllCount(value1)"
            ></mt-switch>
          </mt-cell>
        </div>

        <div class="split-a">
          <p class="specail-a">消息通知</p>
        </div>
        <div class="news-info">
          <mt-cell title="提醒">
            <mt-switch
              v-model="value2"
              @change="changeNoteMesShow(value2)"
            ></mt-switch>
          </mt-cell>
          <mt-cell title="消息预览">
            <mt-switch
              v-model="value3"
              @change="changeNoteMesPre(value3)"
            ></mt-switch>
          </mt-cell>
          <mt-cell
            title="声音"
            is-link
            value="音符"
          ></mt-cell>
          <mt-cell
            title="例外"
            is-link
            value="添加"
          ></mt-cell>
        </div>

        <div class="split-b border-top-1px">
          <p class="first-p">为特定用户设置自定义通知。</p>
          <p class="last-p">群组通知</p>
        </div>
        <!-- <h2>nas</h2> -->
        <div class="group-info">
          <mt-cell title="提醒">
            <mt-switch
              v-model="value4"
              @change="changeNoteGroupShow(value4)"
            ></mt-switch>
          </mt-cell>
          <mt-cell title="消息预览">
            <mt-switch
              v-model="value5"
              @change="changeNoteGroupPre(value5)"
            ></mt-switch>
          </mt-cell>
          <mt-cell
            title="声音"
            is-link
            value="音符"
          ></mt-cell>
          <mt-cell
            title="例外"
            is-link
            value="添加"
          ></mt-cell>
        </div>
        <div class="split-b border-top-1px split-c">
          <p class="first-p">为特定群组设置自定义通知。</p>
          <p class="last-p">频道通知</p>
        </div>
        <div class="channel-info">
          <mt-cell title="提醒">
            <mt-switch
              v-model="value6"
              @change="changeNoteChannelShow(value6)"
            ></mt-switch>
          </mt-cell>
          <mt-cell title="消息预览">
            <mt-switch
              v-model="value7"
              @change="changeNoteChannelPre(value7)"
            ></mt-switch>
          </mt-cell>
          <mt-cell
            title="声音"
            is-link
            value="音符"
          ></mt-cell>
          <mt-cell
            title="例外"
            is-link
            value="添加"
          ></mt-cell>
        </div>
        <div class="split-b border-top-1px">
          <p class="first-p">为特定频道设置自定义通知。</p>
          <p class="last-p">应用内通知</p>
        </div>
        <div class="inApp-info">
          <mt-cell title="应用内提示音">
            <mt-switch
              v-model="value8"
              @change="changeNoteAppSounds(value8)"
            ></mt-switch>
          </mt-cell>
          <mt-cell title="应用内振动">
            <mt-switch
              v-model="value9"
              @change="changeNoteAppVibrate(value9)"
            ></mt-switch>
          </mt-cell>
          <mt-cell title="应用内消息预览">
            <mt-switch
              v-model="value10"
              @change="changeNoteAppPre(value10)"
            ></mt-switch>
          </mt-cell>

        </div>
        <split></split>
        <div class="nolc-info">
          <mt-cell title="在锁定屏幕上的名称">
            <mt-switch
              v-model="value11"
              @change="changeNoteNols(value11)"
            ></mt-switch>
          </mt-cell>
        </div>
        <div class="split-b border-top-1px">
          <p class="first-p">在设备锁定时显示通知中的名称。要禁用，请确保“显示预览”也设置为“解锁时或“从不”<span>ios设置>通知</span>。</p>
          <p class="last-p">角标</p>
        </div>
        <div class="badge-info">
          <mt-cell title="包含频道">
            <mt-switch
              v-model="value12"
              @change="changeNoteBadgeChannel(value12)"
            ></mt-switch>
          </mt-cell>
          <mt-cell title="统计未读消息">
            <mt-switch
              v-model="value13"
              @change="changeNoteBadgeUnread(value13)"
            ></mt-switch>
          </mt-cell>
        </div>
        <div class="split-a border-top-1px split-f">
          <p>关闭显示未读对话数而非未读消息数。</p>
        </div>
        <div class="new-contact-info">
          <mt-cell title="联系人加入 telegram">
            <mt-switch
              v-model="value14"
              @change="changeNoteNewContact(value14)"
            ></mt-switch>
          </mt-cell>
        </div>
        <div class="split-a border-top-1px split-f">
          <p>当您有联系人加入Telegram时接收推送通知。</p>
        </div>
        <div class="new-contact-info">
          <mt-cell
            title="重置所有通知设置"
            style="color: red;"
          >
          </mt-cell>
        </div>
        <div class="split-a border-top-1px split-f">
          <p>撤消您对所有联系人，群组和频道的自定义通知设置。。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import split from '@/components/commont/split'
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'

export default {
  name: '',
  components: {
    commonTop,
    split
  },
  data() {
    return {
      headerTitle: '通知',
      leftUrl: '/mySettings',
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true,
      value7: true,
      value8: true,
      value9: true,
      value10: true,
      value11: true,
      value12: true,
      value13: true,
      value14: true
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    ...mapActions([
      'changeNoteAllCount',
      'changeNoteMesShow',
      'changeNoteMesPre',
      'changeNoteGroupShow',
      'changeNoteGroupPre',
      'changeNoteChannelShow',
      'changeNoteChannelPre',
      'changeNoteAppSounds',
      'changeNoteAppVibrate',
      'changeNoteAppPre',
      'changeNoteNols',
      'changeNoteBadgeChannel',
      'changeNoteBadgeUnread',
      'changeNoteNewContact'
    ]),
    _initScroll() {
      this.nas = new BScroll(this.$refs.nas, {
        click: true,
        probeType: 3
      })
      this.nas.maxScrollY = -1070
    },
    goBack() {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common-split.scss';
.nas {
  background-color: #efeff4;
  width: 100%;
  .nas-wrapper {
    background-color: #f7f7f7;
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
    // .nas-table {
    // // .split-a,
    // // .split-b {
    // //   position: relative;
    // //   box-sizing: border-box;
    // //   width: 100%;
    // //   height: 55px;
    // //   padding: 8px 16px;
    // //   p {
    // //     color: #7d7d82;
    // //     span {
    // //       color: #26a2ff;
    // //     }
    // //   }
    // // }
    // // .split-a {
    // //   height: 55px;
    // //   .specail-a {
    // //     position: absolute;
    // //     bottom: 0;
    // //   }
    // // }
    // // .split-b {
    // //   height: 95px;
    // //   .last-p {
    // //     position: absolute;
    // //     bottom: 0;
    // //   }
    // // }
    // }
  }
}
</style>
