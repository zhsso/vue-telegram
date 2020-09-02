<template>
  <div class="edit-friends-detail">
    <mt-actionsheet
      v-model="sheetVisible"
      :actions="actions"
    ></mt-actionsheet>
    <mt-actionsheet
      v-model="sheetVisible2"
      :actions="actions2"
    ></mt-actionsheet>
    <div
      class="left-button"
      @click.stop="goback"
    ><i class="mintui mintui-back"></i><label class="mint-button-text">返回</label></div>
    <div
      class="right-buttom"
      @click.stop="editFinsh"
    ><label class="mint-button-text">完成</label></div>
    <div class="avatar-wrapper border-bottom-1px">
      <img
        :src="selectedChat.user.img"
        width="100"
        height="100"
        class="avatar"
      >
    </div>
    <div class="edit-name">
      <div class="edit-first-name"><input
          type="text"
          placeholder="Name"
          v-model="Name"
        ></div>
    </div>
    <div class="split border-top-1px border-bottom-1px"></div>
    <mt-cell
      title="通知"
      is-link
      :value="noticeValue"
      @click.native="sheetVisible = true"
      :actions="actions"
    ></mt-cell>
    <mt-cell
      title="声音"
      is-link
      value="默认(音符)"
    ></mt-cell>
    <mt-cell title="显示预览">
      <mt-switch
        v-model="value"
        @change="changeValue(value)"
      ></mt-switch>
    </mt-cell>
    <div class="split border-top-1px"></div>

    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell"
        style="text-align: center;"
        @click="sheetVisible2 = true"
      >
        <label class="text-name">删除联系人</label>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'editFriendsDetail',
  data() {
    return {
      Name: '',
      value: false,
      sheetVisible: false,
      sheetVisible2: false,
      actions: [],
      actions2: [],
      noticeValue: '启动'
    }
  },
  computed: {
    ...mapGetters(['selectedChat'])
  },

  created() {
    this.Name = this.selectedChat.user.name
  },
  mounted() {
    this.actions = [
      {
        name: '启动',
        method: this.startUp
      },
      {
        name: '关闭通知一小时',
        method: this.cloneOneHour
      },
      {
        name: '关闭通知2天',
        method: this.cloneTwoday
      },
      {
        name: '禁用',
        method: this.openDiable
      }
    ]
    this.actions2 = [
      {
        name: '删除联系人',
        method: this.deleteContact
      }
    ]
  },
  methods: {
    ...mapActions(['updateNoticeStatus', 'updateDeleteList']),
    goback() {
      history.go(-1)
    },
    editFinsh() {
      history.go(-1)
    },
    changeValue(value) {
      console.log(value)
    },
    startUp() {
      this.updateNoticeStatus(true)
      this.noticeValue = '启动'
    },
    cloneOneHour() {
      this.updateNoticeStatus(false)
      this.noticeValue = '关闭通知一小时'
    },
    cloneTwoday() {
      this.updateNoticeStatus(false)
      this.noticeValue = '关闭通知2天'
    },
    openDiable() {
      this.updateNoticeStatus(false)
      this.noticeValue = '禁用'
    },
    deleteContact() {
      this.updateDeleteList()
      this.$router.push({ name: 'news' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/specialHead.scss';

.edit-friends-detail {
  position: relative;
  padding-bottom: 10px;
  .avatar-wrapper {
    margin-top: 15px;
    text-align: center;
    padding-bottom: 20px;
    img {
      border-radius: 50%;
    }
  }
  .edit-name {
    margin-left: 16px;
    flex: 1;
    font-size: 18px;
    input {
      height: 35px;
      border: none;
      outline: medium;
    }
    input::placeholder {
      color: #d6d6da;
    }
    .edit-first-name {
      height: 35px;
      line-height: 35px;
    }
  }
  .split {
    width: 100%;
    height: 20px;
    background-color: #efeff4;
  }
  ::v-deep .mint-cell-title {
    color: #000;
  }
  .text-name {
    color: #e33e33;
  }
}
</style>
