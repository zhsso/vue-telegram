<template>
  <div class="settings">
    <common-top
      :header-title="headerTitle"
      :right-url="rightUrl"
    >
      <template v-slot:icon>
        <mt-button>编辑</mt-button>
      </template></common-top>
    <div
      class="settings-table"
      ref="settings"
    >
      <div class="settings-ul">
        <common-search></common-search>
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible"
        ></mt-actionsheet>

        <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed  special-bottom ul-1">
          <li
            class="mui-table-view-cell"
            @click="goEdit"
          >
            <div class="mui-slider-cell ">
              <div class="oa-contact-cell mui-table">
                <div class="oa-contact-avatar mui-table-cell">
                  <img
                    :src="getUserAvatar"
                    alt=""
                    width="65"
                    height="65"
                  >
                </div>
                <i class="mint-cell-allow-right person-right"></i>
                <div class="oa-contact-content mui-table-cell">
                  <div class="mui-clearfix">
                    <h4 class="oa-contact-name">{{getUserName.firstName+getUserName.lastName}}</h4>
                    <span class="oa-contact-position mui-h6">{{getUserPhone}}</span>
                  </div>
                  <p class="oa-contact-email mui-h6">
                    {{getUserEmail}}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div
          v-if="!getUserAvatar"
          class="set-avatar"
          @click="sheetVisible = true"
        >
          <mt-cell
            title="设置头像"
            style="color: #26a2ff;"
          >
          </mt-cell>
        </div>
        <split></split>
        <div class="section-a section-all">
          <mt-cell
            title="收藏夹"
            icon="more"
            is-link
            @click.native.prevent="goMespan"
          >
            <img
              slot="icon"
              src="@/assets/images/Saved Message.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="通话"
            icon="more"
            is-link
          >
            <img
              slot="icon"
              src="@/assets/images/Recent Calls.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="设备"
            icon="more"
            is-link
            value="3"
            @click.native.prevent="myToast"
          >
            <img
              slot="icon"
              src="@/assets/images/Devices.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="分组"
            icon="more"
            is-link
            @click.native.prevent="myToast"
          >
            <img
              slot="icon"
              src="@/assets/images//Chat Folders.png"
              width="30"
              height="30"
            >
          </mt-cell>
        </div>
        <split></split>
        <div class="section-b section-all">
          <mt-cell
            title="通知"
            icon="more"
            is-link
            :to="{ name: 'nas' }"
          >
            <img
              slot="icon"
              src="@/assets/images/Nofifications and Sounds.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="隐私"
            icon="more"
            is-link
            :to="{ name: 'pas' }"
          >
            <img
              slot="icon"
              src="@/assets/images/Privacy and Storage.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="数据"
            icon="more"
            is-link
            :to="{ name: 'das'}"
          >
            <img
              slot="icon"
              src="@/assets/images/Data and Storage.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="外观"
            icon="more"
            is-link
            @click.native.prevent="myToast"
          >
            <img
              slot="icon"
              src="@/assets/images/Appearance.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="语言"
            icon="more"
            is-link
            :to="{ name: 'language'}"
          >
            <img
              slot="icon"
              src="@/assets/images/Language.png"
              width="30"
              height="30"
            >
          </mt-cell>
          <mt-cell
            title="贴纸"
            icon="more"
            is-link
            :to="{ name: 'stickers'}"
          >
            <img
              slot="icon"
              src="@/assets/images/Stickeres.png"
              width="30"
              height="30"
            >
          </mt-cell>
        </div>
        <split></split>
        <div class="section-c section-all">
          <div
            class="帮助与反馈"
            @click="openConfirm"
          >
            <mt-cell
              title="Ask Question"
              icon="more"
              is-link
            >
              <img
                slot="icon"
                src="@/assets/images/Ask Question.png"
                width="30"
                height="30"
              >
            </mt-cell>
          </div>

          <mt-cell
            title="Telegram常见问题"
            icon="more"
            is-link
            :to="{ name: 'TelegramFAQ'}"
          >
            <img
              slot="icon"
              src="@/assets/images/Telegram FAQ.png"
              width="30"
              height="30"
            >
          </mt-cell>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import commonSearch from '@/components/commont/search'
import BScroll from 'better-scroll'
import split from '@/components/commont/split'
import { MessageBox, Toast } from 'mint-ui'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: '',
  components: {
    commonTop,
    commonSearch,
    split
  },
  data() {
    return {
      headerTitle: '设置',
      rightUrl: '/mySettings/edit',
      sheetVisible: false,
      actions: []
    }
  },
  computed: {
    ...mapGetters([
      'getUserName',
      'getUserPhone',
      'getUserAvatar',
      'getUserEmail',
      'selectedChatTgid'
    ])
  },

  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  mounted() {
    this.actions = [
      {
        name: '拍照',
        method: this.takePhoto
      },
      {
        name: '从相册中选择',
        method: this.openAlbum
      },
      {
        name: '网络搜索',
        method: this.openWeb
      }
    ]
  },
  methods: {
    ...mapActions(['selectSession']),
    _initScroll() {
      this.settings = new BScroll(this.$refs.settings, {
        click: true,
        probeType: 3
      })
      // console.log(this.contactScroll)
    },
    // 点击使用编程式导航跳转到 编辑个人信息
    goEdit() {
      this.$router.push({ name: 'edit' })
    },
    goMespan() {
      this.selectSession(this.selectedChatTgid)
      this.$router.push({ name: 'messagePanel', params: { tgid: 'saveMes' } })
    },
    openConfirm() {
      MessageBox({
        title: '',
        message:
          'Please note that Telegram Support is done by volunteers. We try torespond as quickly as possible, but it may take a while.<br></br>Please take a look at the Telegram FAQ: it has important troubleshooting tips and answers to most questions.',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'FAQ'
      })
        .then((actions) => {
          this.$router.push({ name: 'TelegramFAQ' })
        })
        .catch((err) => {
          if (err === 'cancel') {
            this.$router.push({ name: 'elegramFAQ' })
          }
        })
    },
    myToast() {
      Toast('待开发')
    },

    takePhoto() {
      console.log('taking photo')
    },
    openAlbum() {
      console.log('opening album')
    },
    openWeb() {
      console.log('opening web')
    },
    goBack() {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  background-color: #fff;
  .settings-table {
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 50px;
    width: 100%;
    background-color: #f7f7f7;
    .mui-table-view {
      &.special-bottom {
        .mui-table-view-cell::after {
          left: 0;
        }
      }
      .mui-table-view-cell {
        padding: 10px 12px;
        padding-right: 0;
        .oa-contact-avatar {
          img {
            border-radius: 50%;
          }
        }
        .mui-table {
          display: block;
          .mui-table-cell {
            display: inline-block;
            vertical-align: top;
            .oa-contact-position {
              margin-top: 10px;
              font-size: 14px;
            }
            .oa-contact-email {
              font-size: 14px;
              margin-top: 2px;
            }
            &.oa-contact-content {
              margin-left: 10px;
              .oa-contact-name {
                font-size: 16px;
                padding-top: 2px;
              }
            }
          }
        }
      }
    }
    ::v-deep .section-all {
      .mint-cell {
        .mint-cell-text {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
