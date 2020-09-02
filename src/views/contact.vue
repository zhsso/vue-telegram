<template>
  <div class="tabbar-with-contact ">
    <div class="contact-wrapper">
      <div class="contact-top">
        <common-top
          v-show="topFlag"
          :header-title="headerTitle"
          @contactToast="contactToast"
          :rightUrl="contactUrl"
        >
          <template v-slot:icon>
            <i class="mui-icon mui-icon-plusempty"></i>
          </template>
        </common-top>
        <common-search
          ref="search"
          @changeLayout="change"
          @bgcObj="bgcObjHide"
          @reset="recovery"
        ></common-search>
      </div>
      <contact-list :class="{'change-top': changeTop}"></contact-list>
      <div
        :class="{'background-wrapper': bgcObj}"
        @click="recoveryAll"
      ></div>
    </div>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import commonSearch from '@/components/commont/search'
import contactList from '@/components/contact/contactList'
import { Toast } from 'mint-ui'

export default {
  name: 'contact',
  components: {
    commonTop,
    commonSearch,
    contactList
  },
  data() {
    return {
      headerTitle: '联系人',
      bgcObj: false,
      changeTop: false,
      topFlag: true,
      contactUrl: '/contact'
    }
  },
  methods: {
    change() {
      this.changeTop = true
      this.bgcObj = true
      this.topFlag = false
    },
    bgcObjHide() {
      this.bgcObj = false
    },
    recoveryAll() {
      this.$refs.search.searchCancel()
    },
    recovery() {
      this.bgcObj = false
      this.changeTop = false
      this.topFlag = true
    },
    contactToast() {
      Toast('待开发')
    }
  }
}
</script>
<style lang="scss" scoped>
.tabbar-with-contact {
  .change-top {
    top: 50px;
  }
  .search-wrapper {
    .background-list {
      top: 50px;
    }
  }
  .background-wrapper {
    overflow: auto;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50px;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>
