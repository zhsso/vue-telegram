<template>
  <div class="pas">
    <common-top
      class="border-bottom-1px"
      :header-title="headerTitle"
      :left-url="leftUrl"
    >
      <template v-slot:iconleft>
        <mt-button icon="back">返回</mt-button>
      </template>
    </common-top>
    <div
      ref="das"
      class="das-wrapper"
    >
      <div class="das-table">
        <split></split>
        <div class="Store-Network">
          <mt-cell
            title="存储使用"
            is-link
          ></mt-cell>
          <mt-cell
            title="网络使用"
            is-link
          ></mt-cell>
        </div>
        <div class="split-a">
          <p class="specail-a">自动下载媒体</p>
        </div>
        <div class="Cellular-wifi">
          <mt-cell
            title="移动数据"
            is-link
            label="禁用"
          ></mt-cell>
          <mt-cell
            title="WI-FI"
            is-link
            label="禁用"
          ></mt-cell>
          <mt-cell
            title="重置自动下载设置"
            style="color: #26a2ff"
          ></mt-cell>
        </div>
        <div class="split-a">
          <p class="specail-a">自动播放媒体</p>
        </div>
        <div class="GIFs-Videos">
          <mt-cell title="GIF">
            <mt-switch
              v-model="GIFs"
              @change="changeDasGif(GIFs)"
            ></mt-switch>
          </mt-cell>
          <mt-cell title="视频">
            <mt-switch
              v-model="Videos"
              @change="changeDasVideos(Videos)"
            ></mt-switch>
          </mt-cell>
        </div>
        <div class="split-a">
          <p class="specail-a">通话</p>
        </div>

        <div class="uld">
          <mt-cell
            title="节省数据流量"
            is-link
            value="从不"
          ></mt-cell>
        </div>
        <div class="split-a">
          <p class="specail-a">其他</p>
        </div>
        <div class="other">
          <mt-cell
            title="分享菜单"
            is-link
          ></mt-cell>
          <mt-cell
            title="S保存图片"
            is-link
          ></mt-cell>
          <mt-cell title="保存已编辑的图片">
            <mt-switch
              v-model="sep"
              @change="changeDasSep(sep)"
            ></mt-switch>
          </mt-cell>
          <mt-cell
            title="打开链接"
            is-link
            value="Safari(应用内)"
          ></mt-cell>
          <mt-cell title="后台下载">
            <mt-switch
              v-model="backgroundDownload"
              @change="changeDasBgc(backgroundDownload)"
            ></mt-switch>
          </mt-cell>
        </div>
        <div class="split-b border-top-1px">
          <p class="first-p">该应用程序将会在有限的时间内继续下载媒体文件</p>
          <p class="last-p">连接类型</p>
        </div>

        <div class="Proxy">
          <mt-cell
            title="代理"
            is-link
            value="无"
          ></mt-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonTop from '@/components/commont/header'
import split from '@/components/commont/split'
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'

export default {
  name: '',
  components: {
    commonTop,
    split
  },
  data() {
    return {
      headerTitle: '数据',
      leftUrl: '/mySettings',
      GIFs: true,
      Videos: true,
      sep: true,
      backgroundDownload: false
    }
  },

  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    ...mapActions([
      'changeDasGif',
      'changeDasVideos',
      'changeDasSep',
      'changeDasBgc'
    ]),
    _initScroll() {
      this.das = new BScroll(this.$refs.das, {
        click: true,
        probeType: 3
      })
      this.das.maxScrollY = -460
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common-split.scss';

.pas {
  width: 100%;
  .das-wrapper {
    background-color: #efeff4;
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
    .das-table {
      .split-a {
        height: 70px;
      }
    }
  }
}
</style>
