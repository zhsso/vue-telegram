<template>
  <div
    class="contact-content"
    ref="contact"
  >
    <ul
      class="message-list clearfix"
      ref="ul"
      :style="{minHeight: MinHeight}"
    >
      <li
        v-for="(item, index) in searchedFriendlist"
        :key="index"
        class="seesion-list border-bottom-1px"
        @click="send(item.id, item.tgid)"
      >
        <div class="list-left">
          <img
            class="avatar"
            width="40"
            height="40"
            :src="item.img"
          >
        </div>
        <div class="list-right">
          <p class="name">{{item.remark}}</p>
          <p class="lastmsg">一个月前上线</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapGetters } from 'vuex'

export default {
  name: '',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['searchedFriendlist']),
    MinHeight: function() {
      return window.innerHeight - 90 - 50 + 1 + 'px'
    }
  },
  mounted() {
    this._initData()
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      // 给元素添加min-hight撑开盒子使得子元素未超过容器高度的时候有拉到回弹效果，当子元素超过容器高度的时候添加滚动条效果
      this.contactScroll = new BScroll(this.$refs.contact, {
        click: true,
        probeType: 3
      })
    },
    _initData() {
      this.$store.dispatch('search', '')
    },
    send(id, tgid) {
      this.$store.dispatch('selectFriend', id)
      this.$store.dispatch('contact')
      this.$router.push({ name: 'messagePanel', params: { tgid } })
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-content {
  overflow: hidden;
  position: absolute;
  top: 90px;
  bottom: 50px;
  width: 100%;
  .message-list {
    .seesion-list {
      height: 55px;
      display: flex;
      padding: 10px 14px;
      .avatar {
        border-radius: 50%;
        margin-right: 10px;
      }
      .list-right {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 56px;
      }
      .name {
        margin-bottom: 4px;
        font-size: 16px;
        color: #000;
        font-weight: 700;
      }
      .lastmsg {
        overflow: hidden;
        margin-bottom: 0;
        padding-right: 12px;
        flex: 1;
        font-size: 14px;
        line-height: 1.2;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #999;
      }
      &.border-bottom-1px::after {
        left: 64px;
      }
    }
  }
}
</style>
