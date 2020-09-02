<template>
  <div class="language">
    <common-top
      :header-title="headerTitle"
      :right-url="rightUrl"
      :left-url="leftUrl"
    >
      <template v-slot:iconleft>
        <mt-button icon="back">返回</mt-button>
      </template>
      <template v-slot:icon>
        <mt-button>Edit</mt-button>
      </template>
    </common-top>
    <div
      class="language-wrapper"
      ref="language"
    >
      <div class="language-table">
        <common-search></common-search>

        <ul class="mui-table-view mui-table-view-radio">
          <li
            v-for="(item, index) in Languages"
            :key="index"
            class="mui-table-view-cell"
            :class="{ 'mui-selected': item.isActive}"
            @click="ActiveCheck(item)"
          >
            <a class="mui-navigate-right">
              {{item.language}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import commonSearch from '@/components/commont/search'
import BScroll from 'better-scroll'
export default {
  name: '',
  components: {
    commonTop,
    commonSearch
  },
  data() {
    return {
      headerTitle: '语言',
      rightUrl: '/mySettings',
      leftUrl: '/mySettings',
      Languages: [
        { language: 'English', isActive: false },
        { language: 'Albanian', isActive: false },
        { language: 'Amharic', isActive: false },
        { language: 'Arabic', isActive: false },
        { language: 'Azerbaijan', isActive: false },
        { language: 'Basque', isActive: false },
        { language: 'Belarusian', isActive: false },
        { language: 'Bulgarian', isActive: false },
        { language: 'Catalan', isActive: false },
        { language: 'Chinese(simplified)', isActive: true },
        { language: 'Chinese(Traditional)', isActive: false },
        { language: 'Croatia', isActive: false },
        { language: 'Czech', isActive: false },
        { language: 'Danish', isActive: false },
        { language: 'Dutch', isActive: false }
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  mounted() {
    this._initScroll()
  },
  methods: {
    _initScroll() {
      this.language = new BScroll(this.$refs.language, {
        click: true,
        probeType: 3
      })
      this.language.maxScrollY = -20
    },
    ActiveCheck(items) {
      this.Languages.forEach((item) => {
        item.isActive = false
        if (item.language === items.language) {
          item.isActive = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.language {
  width: 100%;
  .language-wrapper {
    background-color: #efeff4;
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
  }
}
</style>
