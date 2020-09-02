import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
  path: '/',
  redirect: 'news'
},
{
  path: '/contact',
  name: 'contact',
  component: () => import('@/views/contact.vue'),
  meta: {
    title: '联系人'
  }
},
{
  path: '/news',
  name: 'news',
  meta: {
    title: '消息列表'
  },
  component: () => import('@/views/news.vue')
},
{
  path: '/news/messagePanel/:tgid',
  name: 'messagePanel',
  meta: {
    title: '对话面板'
  },
  components: {
    default: () => import('@/views/news.vue'),
    subPage: () => import('@/views/messagePanel.vue')
  }
},
{
  path: '/news/messagePanel/personInfo/:tgid',
  name: 'personInfo',
  meta: {
    title: '个人信息'
  },
  components: {
    default: () => import('@/views/news.vue'),
    subPage: () => import('@/views/personInfo.vue')
  }
},
{
  path: '/news/messagePanel/personInfo/editFriendsDetail/:tgid',
  name: 'editFriendsDetail',
  meta: {
    title: '编辑好友信息'
  },
  components: {
    subPage: () => import('@/views/editFriendsDetail.vue')
  }
},
{
  path: '/mySettings',
  name: 'mySettings',
  meta: {
    title: '设置'
  },
  component: () => import('@/views/mySettings.vue')
},
{
  path: '/mySettings/edit',
  name: 'edit',
  meta: {
    title: 'edit'
  },
  components: {
    default: () => import('@/views/mySettings.vue'),
    subPage: () => import('@/views/edit.vue')
  }
},
{
  path: '/mySettings/nas',
  name: 'nas',
  meta: {
    title: 'nas'
  },
  components: {
    default: () => import('@/views/mySettings.vue'),
    subPage: () => import('@/views/nas.vue')
  }
},
{
  path: '/mySettings/pas',
  name: 'pas',
  meta: {
    title: 'pas'
  },
  components: {
    default: () => import('@/views/mySettings.vue'),
    subPage: () => import('@/views/pas.vue')
  }

},
{
  path: '/mySettings/das',
  name: 'das',
  meta: {
    title: 'das'
  },
  components: {
    default: () => import('@/views/mySettings.vue'),
    subPage: () => import('@/views/das.vue')
  }

},
{
  path: '/mySettings/language',
  name: 'language',
  meta: {
    title: 'language'
  },
  components: {
    default: () => import('@/views/mySettings.vue'),
    subPage: () => import('@/views/language.vue')
  }

},
{
  path: '/mySettings/stickers',
  name: 'stickers',
  meta: {
    title: 'stickers'
  },
  components: {
    default: () => import('@/views/mySettings.vue'),
    subPage: () => import('@/views/Stickers.vue')
  }

},
{
  path: '/mySettings/TelegramFAQ',
  name: 'TelegramFAQ',
  meta: {
    title: 'TelegramFAQ'
  },
  components: {
    default: () => import('@/views/mySettings.vue'),
    subPage: () => import('@/views/TelegramFAQ.vue')
  }
}
]

const router = new Router({
  routes,
  linkActiveClass: 'mui-active'
})

export default router
