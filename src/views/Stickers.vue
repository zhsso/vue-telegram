<template>
  <div class="Stickers">
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
    <split></split>
    <mt-cell
      title="通过表情贴纸"
      is-link
      value="全部"
    ></mt-cell>
    <mt-cell
      title="T热门贴纸"
      is-link
      value="8"
    ></mt-cell>
    <mt-cell
      title="装饰"
      is-link
    ></mt-cell>
    <mt-cell title="L循环动态贴纸">
      <mt-switch
        v-model="Stickers"
        @change="changeStickersLas(Stickers)"
      ></mt-switch>
    </mt-cell>
    <div class="split-b border-top-1px">
        <p class="first-p">Animated stickers will play continuously in chats.</p>
        <p class="last-p">STICKERS SETS</p>
      </div>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import split from '@/components/commont/split'
import { mapActions } from 'vuex'

export default {
  name: '',
  components: {
    commonTop,
    split
  },
  data() {
    return {
      headerTitle: '贴纸',
      rightUrl: '/mySettings',
      leftUrl: '/mySettings',
      Stickers: true
    }
  },
  methods: {
    ...mapActions(['changeStickersLas'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common-split.scss';
</style>
