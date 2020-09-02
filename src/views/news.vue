<template>
  <div class="news">
    <common-top
      v-show="topFlag"
      :header-title="headerTitle"
      @newsToast="newsToast"
    >
      <template v-slot:iconleft>
        <mt-button
          class="edit-left"
          @click.native.prevent="newsToast"
        >编辑</mt-button>
      </template>
      <template v-slot:icon>
        <i class="mui-icon mui-icon-compose"></i>
      </template>
    </common-top>
    <news-list
      ref="newList"
      @searchCancel="searchCancel"
    ><template v-slot:search>
        <common-search
          ref="search"
          :content="'***'"
          @changeLayout="change"
          @reset="recovery"
        ></common-search>
      </template></news-list>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import commonSearch from '@/components/commont/search'
import newsList from '@/components/news/newsList'
import { Toast } from 'mint-ui'

export default {
  name: 'news',
  components: {
    commonTop,
    newsList,
    commonSearch
  },
  data() {
    return {
      headerTitle: '对话',
      topFlag: true
    }
  },
  methods: {
    change() {
      this.$refs.newList.changeSearchData()
      this.$refs.newList.changeTop()
      this.topFlag = false
    },
    recovery() {
      this.$refs.newList.resetSearch()
      this.$refs.newList.cancelChangeTop()
      this.topFlag = true
    },
    searchCancel() {
      this.$refs.search.searchCancel()
    },
    newsToast() {
      Toast('待开发')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
