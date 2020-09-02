<template>
  <div class="search">
    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search" :class="{'mintui-search-after': searchObj}"></i>
        <input
          ref="input"
          type="search"
          v-model="search"
          :placeholder="placeholder"
          class="mint-searchbar-core"
          @click="searchShow"
          @keyup.enter="searchChange"
        >
      </div>
      <a
        v-show="visible"
        v-text="cancelText"
        class="mint-searchbar-cancel"
        @click="searchCancel"
      >
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: '',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      issearchObj: false,
      search: '',
      placeholder: '搜索',
      cancelText: '取消',
      visible: false,
      searchObj: false
    }
  },
  watch: {
    search: function(newVal, oldVal) {
      if (this.search !== '') {
        this.$store.dispatch('search', this.search)
        this.$emit('bgcObj')
      }
    }
  },
  methods: {
    searchChange() {
      this.$store.dispatch('search', this.search)
    },
    searchCancel() {
      this.search = ''
      this.$store.dispatch('search', '')
      this.visible = false
      this.searchObj = false
      // 触发父组件的方法恢复样式
      this.$emit('reset')
    },
    searchShow() {
      this.searchObj = true
      this.$store.dispatch('search', this.content)
      this.visible = true
      // 触发父组件的方法改变样式
      this.$emit('changeLayout')
    }
  }

}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  ::v-deep .mint-searchbar {
    background-color: #f7f7f7;
    .mint-searchbar-inner {
      background-color: #e9e9e9;
      height: 34px;
      border-radius: 10px;

      .mintui-search::before {
        font-size: 16px;
      }

      .mintui-search {
        position: relative;
        z-index: 10;
        left: 42%;
        &.mintui-search-after {
          left: 10px;
        }
      }
      // input::placeholder {
      //   text-align: left;
      // }
    }
  }

  .mint-searchbar-core {
    position: relative;
    top: 7px;
    background-color: #e9e9e9;
  }
  &.search-obj {
    ::v-deep .common-search {
      .mint-searchbar {
        .mint-searchbar-inner {
          .mintui-search {
            left: 10px;
          }
        }
      }
    }
  }
}
</style>
