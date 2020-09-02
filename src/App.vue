<template>
  <div id="app">
    <div
      class="main-page"
      :class="{'hideLeft': $route.path.split('/').length > 2}"
    >
      <transition>
        <keep-alive
          tag='div'
          class="content"
        >
          <router-view name="default"></router-view>
        </keep-alive>
        <!-- <keep-alive>
        <router-view :key=$route.fullPath></router-view>
      </keep-alive> -->
      </transition>
      <nav class="mui-bar mui-bar-tab">
        <router-link
          class="mui-tab-item"
          to="/contact"
        >
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">联系人</span>
        </router-link>
        <router-link
          class="mui-tab-item"
          to="/news"
        >
          <span class="mui-icon icon-bubbles2"><span
              v-show="getUnreadCount>0"
              class="mui-badge"
            >{{getUnreadCount}}</span></span>
          <span class="mui-tab-label">对话</span>
        </router-link>
        <router-link
          class="mui-tab-item"
          to="/mySettings"
        >
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </router-link>
      </nav>
    </div>
    <!-- :exclude="['message-panel']" -->
    <transition
      :enter-active-class="enterAnimate"
      :leave-active-class="leaveAnimate"
      :duration="{ enter: 100, leave: 100 }"
    >
        <router-view
          name="subPage"
          class="sub-page"
        ></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      enterAnimate: '', // 页面进入时的动效
      leaveAnimate: '' // 页面离开时的动效
    }
  },
  computed: {
    ...mapGetters(['getUnreadCount'])
  },
  watch: {
    // 监听 $route 为不同级别路由页面设置过渡效果
    $route(to, from) {
      const toPage = to.path.split('/').length
      const formPage = from.path.split('/').length
      // 同一级路由页面无需设置过渡效果
      if (toPage === formPage) {
        return
      }
      this.enterAnimate =
        toPage > formPage
          ? 'animate__animated animate__fadeInRight'
          : 'animate__animated animate__fadeInLeft'
      this.leaveAnimate =
        toPage > formPage
          ? 'animate__animated animate__fadeOutLeft'
          : 'animate__animated animate__fadeOutRight'
    }
  },
  created() {
    this.$store.dispatch('initData')
  }
}
</script>

<style>
@import 'assets/css/app.css';
</style>
