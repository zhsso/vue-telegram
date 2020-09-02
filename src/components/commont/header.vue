<template>
  <div class="common-head">
    <mt-header :title="headerTitle">

      <router-link
        :to="leftUrl"
        slot="left"
      >
        <mt-badge
          type="error"
          size="small"
          v-if="badgeFlag && getExceptCurrentMesCount > 0"
        >{{getExceptCurrentMesCount}}</mt-badge>
        <slot name="iconleft"></slot>
      </router-link>
      <router-link
        slot="right"
        class="edit"
        :to="rightUrl"
        @click.native.prevent="Toast"
      >
        <slot name="icon"></slot>

      </router-link>
    </mt-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    headerTitle: {
      type: String,
      default: ''
    },
    leftUrl: {
      type: String,
      default: '/'
    },
    rightUrl: {
      type: String,
      default: '/'
    },
    badgeFlag: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['getExceptCurrentMesCount'])
  },
  methods: {
    Toast() {
      this.$emit('newsToast')
      this.$emit('contactToast')
    }
  }
}
</script>

<style lang="scss" scoped>
.common-head {
  // background-color: #F7F7F7;
  position: relative;
  z-index: 1;
  ::v-deep .mint-header {
    background-color: #f7f7f7;
    color: #26a2ff;
    .mintui-back {
      font-weight: 700;
      font-size: 20px;
    }
     .mint-badge {
      display: block;
      position: absolute;
      left: 18px;
      top: 2px;
      z-index: 1;
    }
    .mint-button-text {
      font-weight: 700;
      font-size: 16px;
      vertical-align: middle;
      .avatar {
        display: block;
        margin-top: 2px;
        border-radius: 50%;
      }
    }
    .mint-header-title {
      color: #000;
      font-weight: 700;
    }
    .edit {
      color: #26a2ff;
      font-size: 16px;
    }
    .mui-icon-plusempty {
      // font-weight: 700;
      color: #26a2ff;
      font-size: 26px;
    }
    .mui-icon-compose {
      color: #26a2ff;
      font-size: 26px;
    }
    .edit-left {
      color: #26a2ff;
      font-size: 16px;
    }
  }
}
</style>
