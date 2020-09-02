<template>
  <div class="edit">
    <common-top
      :header-title="headerTitle"
      :left-url="leftUrl"
      :right-url="rightUrl"
    >
      <template v-slot:iconleft>
        <mt-button icon="back">返回</mt-button>
      </template>
      <template v-slot:icon>
        <mt-button @click="updateFinsh">完成</mt-button>
      </template>
    </common-top>
    <div class="edit-wrapper clearfix">
      <mt-actionsheet
        v-model="sheetVisible"
        :actions="actions"
      ></mt-actionsheet>
      <ul class="edit-personal-warpper">
        <li class="edit-personal">
          <div
            class="eidt-avatar"
            @click="sheetVisible = true"
          >
            <img
              :src="getUserAvatar"
              width="70"
              height="70"
            >
          </div>
          <div class="edit-name">
            <div class="edit-first-name border-1px"><input
                type="text"
                placeholder="First Name"
                v-model="firstName"
              ></div>
            <div class="edit-last-name"><input
                type="text"
                placeholder="Last Name"
                v-model="lastName"
              ></div>
          </div>
        </li>
      </ul>
      <p class="edit-personal-warpper-info">你可以在此输入你的姓名，也可以在需要时上存头像</p>
      <div class="edit-bio">
        <input
          type="text"
          placeholder="bio"
          v-model="Bio"
        >
      </div>
      <div class="edit-bio-info  border-top-1px">
        <p>您可以在此输入任何有关您个人的信息，诸如：年龄，工作或居住城市。
        </p>
        <p>示例：23岁，来自旧金山的设计师。</p>
      </div>
      <div class="edit-importance">
        <mt-cell
          title="更改手机号码"
          is-link
          value="+86 1892 2223 333"
          class="my-phone-account my-phone "
        ></mt-cell>
        <mt-cell
          title="更改用户名"
          is-link
          value="@T-mac"
          class="my-phone-account"
        ></mt-cell>
      </div>
      <split></split>
      <ul class="mui-table-view">
        <li
          class="mui-table-view-cell"
          style="text-align: center;"
        >
          <a>添加账号</a>
        </li>
      </ul>
      <split></split>
      <ul class="mui-table-view">
        <li
          class="mui-table-view-cell"
          style="text-align: center;"
        >
          <a>退出登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import split from '@/components/commont/split'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: '',
  components: {
    commonTop,
    split
  },
  data() {
    return {
      headerTitle: '编辑资料',
      leftUrl: '/mySettings',
      rightUrl: '/mySettings',
      sheetVisible: false,
      actions: [],
      firstName: '',
      lastName: '',
      Bio: ''
    }
  },
  computed: {
    ...mapGetters([
      'getUserName',
      'getUserPhone',
      'getUserAvatar',
      'getUserEmail',
      'getUserBio',
      'getUserAvatar'
    ])
  },
  created() {
    this.firstName = this.getUserName.firstName
    this.lastName = this.getUserName.lastName
    this.Bio = this.getUserBio
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
    ...mapActions([
      'updateUserFirstName',
      'updateUserLastName',
      'updateUserPhone',
      'updateUserAvatar',
      'updateUserEmail',
      'updateUserBio'
    ]),
    updateFinsh() {
      this.updateUserFirstName(this.firstName)
      this.updateUserLastName(this.lastName)
      this.updateUserBio(this.Bio)
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
@import '@/assets/scss/mixin.scss';
.edit {
  background-color: #efeff4;
  width: 100%;
  // height: 100%;
  min-height: 100vh;
  .edit-wrapper {
    position: relative;
    // background-color: #EFEFF4;
    .edit-personal-warpper {
      border-top: 1px solid #d2d1d5;
      border-bottom: 1px solid #d2d1d5;
      box-sizing: border-box;
      height: 100px;
      background-color: #fff;
      padding: 15px 0 15px 16px;
      .edit-personal {
        display: flex;
        align-content: center;
        .eidt-avatar {
          img {
            border-radius: 50%;
          }
        }
        .edit-name {
          margin-left: 16px;
          flex: 1;
          font-size: 18px;
          input {
            border: none;
            outline: medium;
          }
          input::placeholder {
            color: #d6d6da;
          }
          .edit-first-name {
            height: 35px;
            @include border-1px(#d2d1d5);
            line-height: 35px;
          }
          .edit-last-name {
            height: 35px;
            line-height: 35px;
          }
        }
      }
    }
    .edit-personal-warpper-info {
      border-bottom: 1px solid #d2d1d5;
      height: 50px;
      padding: 8px 16px;
      margin: 0;
    }
    .edit-bio {
      width: 100%;
      height: 45px;
      background-color: #fff;
      border-bottom: 1px solid #d2d1d5;
      input {
        border: none;
        outline: medium;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
      }
      input::placeholder {
        color: #d6d6da;
        font-size: 20px;
      }
    }
    .edit-bio-info {
      width: 100%;
      padding: 8px 16px;
      margin: 0;
      height: 80px;
      p {
        margin: 0;
        line-height: 18px;
        font-size: 14px;
      }
    }
    .edit-importance {
      .my-phone-account {
        height: 45px;
      }
      .border-1px::after {
        left: 10px;
      }
    }
  }
}
</style>
