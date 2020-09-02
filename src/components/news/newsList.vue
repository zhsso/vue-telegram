<template>
  <div>
    <div
      ref="news"
      class="news-content"
      :class="{'change-top': isTop}"
    >
      <ul
        ref="ul"
        class="message-list clearfix"
        :style="{minHeight: ulMinHeight}"
      >

        <slot name="search"></slot>
        <div
          class="nav"
          v-show="!issearchAll && !issticky"
        >
          <mt-button
            size="small"
            :class="{'btn-bottom': active === 'all'}"
            @click.native.prevent="goAll"
          >all</mt-button>
          <mt-button
            size="small"
            :class="{'btn-bottom': active === 'person'}"
            @click.native.prevent="goPerson"
          >Personal<mt-badge
              v-show="getPersonUnreadCount > 0"
              type="primary"
              size="small"
            >{{getPersonUnreadCount}}</mt-badge>
          </mt-button>
          <mt-button
            size="small"
            :class="{'btn-bottom': active === 'unread'}"
            @click.native.prevent="goUnread"
          >Unread<mt-badge
              v-show="getUnreadDialog > 0"
              type="primary"
              size="small"
            >{{getUnreadDialog}}</mt-badge>
          </mt-button>
        </div>
        <div
          class="page-tab-container"
          v-show="!issearchAll"
        >
          <mt-tab-container
            ref="mtc"
            v-model="active"
            swipeable
            class="page-tabbar-tab-container"
          >
            <mt-tab-container-item
              id="all"
              :style="{minHeight: ulMinHeight}"
            >
              <mt-cell
                v-for="item in searchedChatlist"
                :key="item.tgid"
              >
                <li
                  ref="newsLi"
                  class="seesion-list border-bottom-1px"
                  @click="selectSession(item.id);gomesPan(item.tgid)"
                >
                  <div class="list-left">
                    <img
                      :alt="item.user.name"
                      :src="item.user.img"
                      class="avatar"
                      width="56"
                      height="56"
                    >
                  </div>
                  <div class="list-right">
                    <p class="name">{{item.user.name}}</p>
                    <span class="time">{{item.messages[item.messages.length-1].date | formatTime}}</span>
                    <mt-badge
                      v-show="item.unreadCount > 0"
                      size="normal"
                      :class="[item.notifications==false?'notice-off':'mint-badge']"
                    >{{item.unreadCount}}</mt-badge>
                    <p class="lastmsg">{{item.messages[item.messages.length-1].content}}</p>
                  </div>
                </li>
              </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item
              id="person"
              :style="{minHeight: ulMinHeight}"
            >
              <mt-cell
                v-for="item in getPersonChatList"
                :key="item.tgid"
              >
                <li
                  ref="newsLi"
                  class="seesion-list border-bottom-1px"
                  @click="selectSession(item.id);gomesPan(item.tgid)"
                >
                  <div class="list-left">
                    <img
                      width="56"
                      height="56"
                      :alt="item.user.name"
                      :src="item.user.img"
                      class="avatar"
                    >
                  </div>
                  <div class="list-right">
                    <p class="name">{{item.user.name}}</p>
                    <span class="time">{{item.messages[item.messages.length-1].date | formatTime}}</span>
                    <mt-badge
                      v-show="item.unreadCount > 0"
                      type="primary"
                      size="normal"
                      :class="[item.notifications==false?'notice-off':'mint-badge']"
                    >{{item.unreadCount}}</mt-badge>
                    <p class="lastmsg">{{item.messages[item.messages.length-1].content}}</p>
                  </div>
                </li>
              </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item
              id="unread"
              :style="{minHeight: ulMinHeight}"
            >
              <mt-cell
                v-for="item in unreadChatList"
                :key="item.tgid"
              >
                <li
                  ref="newsLi"
                  class="seesion-list border-bottom-1px"
                  @click="selectSession(item.id);gomesPan(item.tgid)"
                >
                  <div class="list-left">
                    <img
                      :alt="item.user.name"
                      :src="item.user.img"
                      class="avatar"
                      width="56"
                      height="56"
                    >
                  </div>
                  <div class="list-right">
                    <p class="name">{{item.user.name}}</p>
                    <span class="time">{{item.messages[item.messages.length-1].date | formatTime}}</span>
                    <mt-badge
                      v-show="item.unreadCount > 0"
                      type="primary"
                      size="normal"
                      :class="[item.notifications==false?'notice-off':'mint-badge']"
                    >{{item.unreadCount}}</mt-badge>
                    <p class="lastmsg">{{item.messages[item.messages.length-1].content}}</p>
                  </div>
                </li>
              </mt-cell>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
        <li
          v-for="item in searchedChatlist"
          v-show="issearchAll"
          :key="item.tgid"
          ref="newsLi"
          class="seesion-list border-bottom-1px"
          @click="selectSession(item.id);gomesPan(item.tgid)"
        >
          <div class="list-left">
            <img
              :alt="item.user.name"
              :src="item.user.img"
              class="avatar"
              width="56"
              height="56"
            >
          </div>
          <div class="list-right">
            <p class="name">{{item.user.name}}</p>
            <span class="time">{{item.messages[item.messages.length-1].date | formatTime}}</span>
            <mt-badge
              v-show="item.unreadCount > 0"
              type="primary"
              size="normal"
            >{{item.unreadCount}}</mt-badge>
            <p class="lastmsg">{{item.messages[item.messages.length-1].content}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="nav sticky"
      v-show="issticky"
    >
      <mt-button
        size="small"
        :class="{'btn-bottom': active === 'all'}"
        @click.native.prevent="goAll"
      >all</mt-button>
      <mt-button
        size="small"
        :class="{'btn-bottom': active === 'person'}"
        @click.native.prevent="goPerson"
      >Personal<mt-badge
          v-show="getPersonUnreadCount > 0"
          type="primary"
          size="small"
        >{{getPersonUnreadCount}}</mt-badge>
      </mt-button>
      <mt-button
        size="small"
        :class="{'btn-bottom': active === 'unread'}"
        @click.native.prevent="goUnread"
      >Unread<mt-badge
          v-show="getUnreadDialog > 0"
          type="primary"
          size="small"
        >{{getUnreadDialog}}</mt-badge>
      </mt-button>
    </div>
  </div>

</template>

<script>
// import commonSearch from '@/components/commont/search'
import BScroll from 'better-scroll'
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: '',
  filters: {
    formatTime(time) {
      return moment(time).format('HH:mm')
    }
  },
  // props: {
  //   isTop: {
  //     type: Boolean,
  //     defalut: false
  //   }
  // },
  data() {
    return {
      active: 'all',
      issearchAll: false,
      issticky: false,
      isTop: false
    }
  },
  computed: {
    ...mapGetters([
      'searchedChatlist',
      'getUnreadDialog',
      'unreadChatList',
      'getPersonChatList',
      'getPersonUnreadCount'
    ]),
    // 需求，为了让子元素高度不大于包装盒子的高度的时候也有上下拉动效果同时顶层有吸附作用
    // 为了让左右滑动区域在非mint-cell部分也能滑动，扩大向下的可滑动区域同时左右滑动第一个li置顶

    ulMinHeight: function() {
      return window.innerHeight - 40 - 50 + 1 + 'px'
    }
  },
  watch: {
    // 监听路由的变化，当路由的名字是/news/messagePanel时侯更新this.newsScroll产生滚动效果
    $route(to, from) {
      if (from.name === 'messagePanel') {
        this.BSrefresh()
      }
    },
    // 监听active的变化, 因为左右滑动有大概250毫秒左右的时间所以需要等大于这个时间BS重新刷新才有效果
    active: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        setTimeout(() => {
          this.BSrefresh()
        }, 300)
      }
    }
  },
  mounted() {
    this._initData()
    this.$nextTick(() => {
      this._initScroll()
    })
    // this.expendArea()
  },
  methods: {
    ...mapActions(['selectSession']),
    _initScroll() {
      this.newsScroll = new BScroll(this.$refs.news, {
        click: true,
        probeType: 3,
        mouseWheel: true
      })
      this.newsScroll.on('scroll', (pos) => {
        // const Y = Math.abs(Math.round(pos.y))
        if (-pos.y > 83) {
          this.issticky = true
        } else {
          this.issticky = false
        }
      })
    },
    _initData() {
      this.$store.dispatch('search', '')
    },
    gomesPan(tgid) {
      // 路由跳转之前重置搜索框，以防跳转是通过点击搜索结果进行跳转
      this.$emit('searchCancel')
      this.$router.push({ name: 'messagePanel', params: { tgid } })
    },
    goAll() {
      this.active = 'all'
    },
    goPerson() {
      this.active = 'person'
    },
    goUnread() {
      this.active = 'unread'
    },
    BSrefresh() {
      this.newsScroll.refresh()
    },
    changeSearchData() {
      this.issearchAll = true
    },
    resetSearch() {
      this.issearchAll = false
    },
    changeTop() {
      this.isTop = true
    },
    cancelChangeTop() {
      this.isTop = false
    }
  }
}
</script>

<style lang="scss" scoped>
.news-content {

  overflow: hidden;
  position: absolute;
  top: 40px;
  bottom: 50px;
  width: 100%;
  background-color: #f7f7f7;
  &.change-top {
    top: 0;
  }
  .message-list {
    width: 100%;
    .item {
      display: inline-block;
    }
    .nav {
      padding: 0 10px;
      ::v-deep .mint-button {
        position: relative;
        padding-left: 14px;
        padding-right: 14px;
        box-shadow: none;
        border-radius: 0;
        background-color: #f7f7f7;
        .mint-badge {
          display: inline-block;
          position: relative;
          font-size: 10px;
          padding: 1px 5px;
          right: -4px;
          bottom: 2px;
          background-color: #4f8bf6;
        }
        &.btn-bottom {
          color: #4f8bf6;
          border-bottom: 3px solid #4f8bf6;
        }
        &.mint-button::after {
          content: none;
        }
      }
    }
    ::v-deep .page-tab-container {
      .mint-cell-wrapper {
        padding: 0;
        .mint-cell-title {
          flex: 0;
        }
        .mint-cell-value {
          flex: 1;
        }
      }
    }

    .seesion-list {
      height: 76px;
      width: 100%;
      display: flex;
      padding: 10px 12px;
      .avatar {
        border-radius: 50%;
        margin-right: 12px;
      }
      .list-right {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 56px;
        .mint-badge {
          display: block;
          position: absolute;
          right: 0;
          bottom: 4px;
          background-color: #4f8bf6;
          &.notice-off {
            background-color: #b5b4ba;
          }
        }
      }
      .name {
        margin-bottom: 4px;
        font-size: 16px;
        color: #000;
        font-weight: 700;
      }
      .time {
        position: absolute;
        right: 0;
        top: 0;
        color: #999;
        font-size: 10px;
        vertical-align: top;
      }
      .lastmsg {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 0;
        padding-right: 12px;
        flex: 1;
        font-size: 16px;
        max-width: 260px;
        min-height: 39px;
        line-height: 1.2;
        text-overflow: ellipsis;
        color: #999;
      }
      &.border-bottom-1px::after {
        left: 80px;
      }
    }
  }
}
.sticky {
  position: -webkit-sticky; /* safari 浏览器 */
  position: sticky; /* 其他浏览器 */
  width: 100%;
  top: 40px;
  background-color: #f7f7f7;
  &.nav {
    padding: 0 10px;
    ::v-deep .mint-button {
      position: relative;
      padding-left: 14px;
      padding-right: 14px;
      // margin-left: 10px;
      box-shadow: none;
      border-radius: 0;
      background-color: #f7f7f7;
      .mint-badge {
        display: inline-block;
        position: relative;
        font-size: 10px;
        padding: 1px 5px;
        right: -4px;
        bottom: 2px;
        background-color: #4f8bf6;
      }
      &.btn-bottom {
        color: #4f8bf6;
        border-bottom: 3px solid #4f8bf6;
      }
      &.mint-button::after {
        content: none;
      }
    }
  }
}
</style>
