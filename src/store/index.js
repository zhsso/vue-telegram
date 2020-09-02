import Vue from 'vue'
import Vuex from 'vuex'
import chat from './modules/chat'
import settings from './modules/settings'
// import * as types from './types'
// import router from '../router'
Vue.use(Vuex)
// const now = new Date()

const store = new Vuex.Store({
  // state: {
  //   // 输入的搜索值
  //   searchText: '',
  //   // 当前登录用户
  //   user: {
  //     name: 'god',
  //     img: '/img/me.jpg'
  //   },
  //   // 对话列表
  //   chatlist: [{
  //     id: 1,
  //     type: 'person',
  //     tgid: 111,
  //     unreadCount: 2,
  //     user: {
  //       name: 'kd',
  //       img: 'img/kd.png'
  //     },
  //     messages: [{
  //       content: '么么哒，妈咪爱你', // 聊天内容
  //       date: now, // 时间
  //       read: false
  //     },
  //     {
  //       content: '按回车可以发送信息，还可以给我发送表情哟按回车可以发送信息，还可以给我发送表情哟还可以给我发送表情哟按回车可以发送信',
  //       date: now,
  //       read: false
  //     }
  //     ],
  //     index: 1 // 当前在聊天列表中的位置,从1开始

  //   },
  //   {
  //     id: 2,
  //     // read: false,
  //     tgid: 222,
  //     unreadCount: 1,
  //     type: 'person',
  //     user: {
  //       name: '詹姆斯',
  //       img: 'img/james.jpg'
  //     },
  //     messages: [{
  //       content: 'Are you kidding me?',
  //       date: now,
  //       read: false
  //     }],
  //     index: 2
  //   },
  //   {
  //     id: 3,
  //     // read: true,
  //     tgid: 333,
  //     type: 'person',
  //     unreadCount: 0,
  //     user: {
  //       name: '哈登',
  //       img: 'img/hadeng.jpg'
  //     },
  //     messages: [{
  //       content: '我会跟你聊聊天的哟',
  //       date: now,
  //       read: true
  //     }],
  //     index: 3
  //   },
  //   {
  //     id: 4,
  //     // read: false,
  //     tgid: 0,
  //     unreadCount: 0,
  //     type: 'person',
  //     user: {
  //       name: '收藏夹',
  //       img: 'img/Saved Message.png'
  //     },
  //     messages: [{
  //       content: 'hello',
  //       date: now,
  //       read: true
  //     }],
  //     index: 4
  //   },
  //   {
  //     id: '5',
  //     // read: true,
  //     tgid: 'bbb',
  //     type: 'group',
  //     unreadCount: 3,
  //     user: {
  //       name: '软三讨论群',
  //       img: 'img/group.png'
  //     },
  //     messages: [{
  //       user: {
  //         name: '哈登',
  //         img: 'img/hadeng.jpg'
  //       },
  //       content: '这是一个讨论群，欢迎大家踊跃发言',
  //       date: now,
  //       read: false
  //     },
  //     {
  //       user: {
  //         name: '詹姆斯',
  //         img: 'img/james.jpg'
  //       },
  //       content: '大家好，我是詹姆斯',
  //       date: now,
  //       read: false
  //     },
  //     {
  //       user: {
  //         name: 'kd',
  //         img: 'img/kd.png'
  //       },
  //       content: '大家好，我是kd',
  //       date: now,
  //       read: false
  //     }
  //     ],
  //     index: 5
  //   },
  //   {
  //     id: 6,
  //     // read: true,
  //     tgid: 'ccc',
  //     type: 'channel',
  //     unreadCount: 3,
  //     user: {
  //       name: '软三公告频道',
  //       img: 'img/channel.png'
  //     },
  //     messages: [{
  //       content: '这是一个官方频道，只有创建者以及管理员能发言',
  //       date: now,
  //       read: false
  //     },
  //     {
  //       content: '下学期不用回学校了',
  //       date: now,
  //       read: false
  //     }, {
  //       content: '这学期大家呆在家里上网课就行了',
  //       date: now,
  //       read: false
  //     }, {
  //       content: '这是一个官方频道，只有创建者以及管理员能发言',
  //       date: now,
  //       read: false
  //     }
  //     ],
  //     index: 5
  //   }
  //   ],
  //   // 好友列表
  //   friendlist: [{
  //     id: 0,
  //     type: 'person',
  //     tgid: 444, // 微信号
  //     img: 'img/weshao.jpg', // 头像
  //     signature: '', // 个性签名
  //     nickname: 'weishao', // 昵称
  //     sex: 0, // 性别 1为男，0为女
  //     remark: '威少', // 备注
  //     area: '' // 地区
  //   },
  //   {
  //     id: 1,
  //     type: 'person',
  //     tgid: 555,
  //     img: 'img/Tom.png', // 头像
  //     signature: '每天我就萌萌哒', // 个性签名
  //     nickname: 'Amor', // 昵称
  //     sex: 0, // 性别 1为男，0为女
  //     remark: 'kt', // 备注
  //     area: '浙江 宁波' // 地区
  //   },
  //   {
  //     id: 2,
  //     type: 'person',
  //     tgid: 222,
  //     img: 'img/james.jpg',
  //     signature: '你不知道的js',
  //     nickname: 'james',
  //     sex: 1,
  //     remark: '詹姆斯',
  //     area: '奥地利 布尔根兰'
  //   },
  //   {
  //     id: 3,
  //     type: 'person',
  //     tgid: 111,
  //     img: 'img/kd.png',
  //     signature: '学习让我快乐让我成长',
  //     nickname: 'kd',
  //     sex: 1,
  //     remark: 'kd',
  //     area: '江西 赣州'
  //   },
  //   {
  //     id: 4,
  //     type: 'person',
  //     tgid: 333,
  //     img: 'img/hadeng.jpg',
  //     signature: '学习让我快乐让我成长',
  //     nickname: 'hadeng',
  //     sex: 1,
  //     remark: '哈登',
  //     area: '江西 抚州'
  //   },
  //   {
  //     id: 5,
  //     type: 'person',
  //     tgid: 666,
  //     img: 'img/men.jpg',
  //     signature: '你可以笑的很阳光！',
  //     nickname: 'men',
  //     sex: 1,
  //     remark: 'men',
  //     area: '江西 赣州'
  //   }
  //     // {
  //     //   id: 6,
  //     //   tgid: 7,
  //     //   img: 'static/images/加菲猫.jpg',
  //     //   signature: '自强不息',
  //     //   nickname: '21',
  //     //   sex: 1,
  //     //   remark: '加菲',
  //     //   area: '北京 海淀'
  //     // },
  //     // {
  //     //   id: 7,
  //     //   tgid: 8,
  //     //   img: 'static/images/mother.jpg',
  //     //   signature: '开开心心就好',
  //     //   nickname: '娄娄',
  //     //   sex: 0,
  //     //   remark: '妈咪',
  //     //   area: '江西 抚州'
  //     // },
  //     // {
  //     //   id: 8,
  //     //   tgid: 9,
  //     //   img: 'static/images/萌萌俊.jpg',
  //     //   signature: '原谅我有点蠢。。',
  //     //   nickname: '。。。。。',
  //     //   sex: 1,
  //     //   remark: '萌萌均',
  //     //   area: '江西 萍乡'
  //     // }

  //   ],
  //   // emoji表情
  //   emojis: [{
  //     file: '100.gif',
  //     code: '/::)',
  //     title: '微笑',
  //     reg: /\/::\)/g
  //   },
  //   {
  //     file: '101.gif',
  //     code: '/::~',
  //     title: '伤心',
  //     reg: /\/::~/g
  //   },
  //   {
  //     file: '102.gif',
  //     code: '/::B',
  //     title: '美女',
  //     reg: /\/::B/g
  //   },
  //   {
  //     file: '103.gif',
  //     code: '/::|',
  //     title: '发呆',
  //     reg: /\/::\|/g
  //   },
  //   {
  //     file: '104.gif',
  //     code: '/:8-)',
  //     title: '墨镜',
  //     reg: /\/:8-\)/g
  //   },
  //   {
  //     file: '105.gif',
  //     code: '/::<',
  //     title: '哭',
  //     reg: /\/::</g
  //   },
  //   {
  //     file: '106.gif',
  //     code: '/::$',
  //     title: '羞',
  //     reg: /\/::\$/g
  //   },
  //   {
  //     file: '107.gif',
  //     code: '/::X',
  //     title: '哑',
  //     reg: /\/::X/g
  //   },
  //   {
  //     file: '108.gif',
  //     code: '/::Z',
  //     title: '睡',
  //     reg: /\/::Z/g
  //   },
  //   {
  //     file: '109.gif',
  //     code: '/::\'(',
  //     title: '哭',
  //     reg: /\/::'\(/g
  //   },
  //   {
  //     file: '110.gif',
  //     code: '/::-|',
  //     title: '囧',
  //     reg: /\/::-\|/g
  //   },
  //   {
  //     file: '111.gif',
  //     code: '/::@',
  //     title: '怒',
  //     reg: /\/::@/g
  //   },
  //   {
  //     file: '112.gif',
  //     code: '/::P',
  //     title: '调皮',
  //     reg: /\/::P/g
  //   },
  //   {
  //     file: '113.gif',
  //     code: '/::D',
  //     title: '笑',
  //     reg: /\/::D/g
  //   },
  //   {
  //     file: '114.gif',
  //     code: '/::O',
  //     title: '惊讶',
  //     reg: /\/::O/g
  //   },
  //   {
  //     file: '115.gif',
  //     code: '/::(',
  //     title: '难过',
  //     reg: /\/::\(/g
  //   },
  //   {
  //     file: '116.gif',
  //     code: '/::+',
  //     title: '酷',
  //     reg: /\/::\+/g
  //   },
  //   {
  //     file: '117.gif',
  //     code: '/:--b',
  //     title: '汗',
  //     reg: /\/:--b/g
  //   },
  //   {
  //     file: '118.gif',
  //     code: '/::Q',
  //     title: '抓狂',
  //     reg: /\/::Q/g
  //   },
  //   {
  //     file: '119.gif',
  //     code: '/::T',
  //     title: '吐',
  //     reg: /\/::T/g
  //   },
  //   {
  //     file: '120.gif',
  //     code: '/:,@P',
  //     title: '笑',
  //     reg: /\/:,@P/g
  //   },
  //   {
  //     file: '121.gif',
  //     code: '/:,@-D',
  //     title: '快乐',
  //     reg: /\/:,@-D/g
  //   },
  //   {
  //     file: '122.gif',
  //     code: '/::d',
  //     title: '奇',
  //     reg: /\/::d/g
  //   },
  //   {
  //     file: '123.gif',
  //     code: '/:,@o',
  //     title: '傲',
  //     reg: /\/:,@o/g
  //   },
  //   {
  //     file: '124.gif',
  //     code: '/::g',
  //     title: '饿',
  //     reg: /\/::g/g
  //   },
  //   {
  //     file: '125.gif',
  //     code: '/:|-)',
  //     title: '累',
  //     reg: /\/:\|-\)/g
  //   },
  //   {
  //     file: '126.gif',
  //     code: '/::!',
  //     title: '吓',
  //     reg: /\/::!/g
  //   },
  //   {
  //     file: '127.gif',
  //     code: '/::L',
  //     title: '汗',
  //     reg: /\/::L/g
  //   },
  //   {
  //     file: '128.gif',
  //     code: '/::>',
  //     title: '高兴',
  //     reg: /\/::>/g
  //   },
  //   {
  //     file: '129.gif',
  //     code: '/::,@',
  //     title: '闲',
  //     reg: /\/::,@/g
  //   },
  //   {
  //     file: '130.gif',
  //     code: '/:,@f',
  //     title: '努力',
  //     reg: /\/:,@f/g
  //   },
  //   {
  //     file: '131.gif',
  //     code: '/::-S',
  //     title: '骂',
  //     reg: /\/::-S/g
  //   },
  //   {
  //     file: '133.gif',
  //     code: '/:,@x',
  //     title: '秘密',
  //     reg: /\/:,@x/g
  //   },
  //   {
  //     file: '134.gif',
  //     code: '/:,@@',
  //     title: '乱',
  //     reg: /\/:,@@/g
  //   },
  //   {
  //     file: '135.gif',
  //     code: '/::8',
  //     title: '疯',
  //     reg: /\/::8/g
  //   },
  //   {
  //     file: '136.gif',
  //     code: '/:,@!',
  //     title: '哀',
  //     reg: /\/:,@!/g
  //   },
  //   {
  //     file: '137.gif',
  //     code: '/:!!!',
  //     title: '鬼',
  //     reg: /\/:!!!/g
  //   },
  //   {
  //     file: '138.gif',
  //     code: '/:xx',
  //     title: '打击',
  //     reg: /\/:xx/g
  //   },
  //   {
  //     file: '139.gif',
  //     code: '/:bye',
  //     title: 'bye',
  //     reg: /\/:bye/g
  //   },
  //   {
  //     file: '142.gif',
  //     code: '/:handclap',
  //     title: '鼓掌',
  //     reg: /\/:handclap/g
  //   },
  //   {
  //     file: '145.gif',
  //     code: '/:<@',
  //     title: '什么',
  //     reg: /\/:<@/g
  //   },
  //   {
  //     file: '147.gif',
  //     code: '/::-O',
  //     title: '累',
  //     reg: /\/::-O/g
  //   },
  //   {
  //     file: '153.gif',
  //     code: '/:@x',
  //     title: '吓',
  //     reg: /\/:@x/g
  //   },
  //   {
  //     file: '155.gif',
  //     code: '/:pd',
  //     title: '刀',
  //     reg: /\/:pd/g
  //   },
  //   {
  //     file: '156.gif',
  //     code: '/:<W>',
  //     title: '水果',
  //     reg: /\/:<W>/g
  //   },
  //   {
  //     file: '157.gif',
  //     code: '/:beer',
  //     title: '酒',
  //     reg: /\/:beer/g
  //   },
  //   {
  //     file: '158.gif',
  //     code: '/:basketb',
  //     title: '篮球',
  //     reg: /\/:basketb/g
  //   },
  //   {
  //     file: '159.gif',
  //     code: '/:oo',
  //     title: '乒乓',
  //     reg: /\/:oo/g
  //   },
  //   {
  //     file: '195.gif',
  //     code: '/:circle',
  //     title: '跳舞',
  //     reg: /\/:circle/g
  //   },
  //   {
  //     file: '160.gif',
  //     code: '/:coffee',
  //     title: '咖啡',
  //     reg: /\/:coffee/g
  //   }
  //   ],
  //   // 得知当前选择的是与那个联系人对话
  //   selectId: 1,
  //   // 得知当前选择的是哪个好友
  //   selectFriendId: 0
  // },
  // mutations: {
  //   // 从localStorage 中获取数据
  //   [types.INIT_DATA](state) {
  //     const data = localStorage.getItem('tg-chat')
  //     if (data) {
  //       state.chatlist = JSON.parse(data)
  //     }
  //   },
  //   // 获取搜索值
  //   [types.SEARCH](state, value) {
  //     state.searchText = value
  //   },
  //   // 得知用户当前选择的是哪个对话。便于匹配对应的对话框
  //   [types.SELECT_SESSIONS](state, value) {
  //     state.selectId = value
  //   },
  //   // 得知用户当前选择的是哪个好友。
  //   [types.SELECT_FRIEND](state, value) {
  //     state.selectFriendId = value
  //   },
  //   // 发送信息
  //   [types.SEND_MESSAGE](state, msg) {
  //     const result = state.chatlist.find(session => session.id === state.selectId)
  //     result.messages.push({
  //       content: msg.content,
  //       date: new Date(),
  //       self: true
  //     })
  //     // if (result.user.name === '机器人') {
  //     //   setTimeout(() => {
  //     //     result.messages.push({
  //     //       content: msg.reply,
  //     //       date: new Date(),
  //     //       self: false
  //     //     })
  //     //   }, 500)
  //     // }
  //   },

  //   // 选择好友后，点击发送信息。判断在聊天列表中是否有该好友，有的话跳到该好友对话。没有的话
  //   // 添加该好友的对话 并置顶
  //   [types.CONTACT](state) {
  //     const result = state.friendlist.find(friend => friend.id === state.selectFriendId)
  //     const msg = state.chatlist.find(msg => msg.tgid === result.tgid)
  //     if (!msg) {
  //       state.selectId = 1
  //       for (let i = 0; i < state.chatlist.length; i++) {
  //         state.chatlist[i].id++
  //         state.chatlist[i].index++
  //       }
  //       state.chatlist.unshift({
  //         id: 1,
  //         tgid: result.tgid,
  //         unreadCount: 1,
  //         type: 'person',
  //         user: {
  //           name: result.remark,
  //           img: result.img
  //         },
  //         messages: [{
  //           content: '已经置顶聊天，可以给我发信息啦！',
  //           date: new Date(),
  //           read: false
  //         }],
  //         index: 1
  //       })
  //     } else {
  //       state.selectId = msg.index
  //     }
  //   },
  //   // 修改信息是否已读的状态
  //   [types.CHANGE_READ_STATUS](state, value) {
  //     const session = state.chatlist.find(session => session.id === state.selectId)
  //     session.messages.some((item, index) => {
  //       if (index === value) {
  //         item.read = true
  //       }
  //     })
  //   },
  //   [types.UPDATE_UNREAD_COUNT](state) {
  //     let totalCount = 0
  //     const session = state.chatlist.find(session => session.id === state.selectId)
  //     session.messages.forEach(item => {
  //       if (item.read === false) {
  //         totalCount += 1
  //       }
  //     })
  //     session.unreadCount = totalCount
  //   }
  // },
  // actions: {
  //   search: ({
  //     commit
  //   }, value) => {
  //     setTimeout(() => {
  //       commit(types.SEARCH, value)
  //     }, 100)
  //   },
  //   selectSession: ({
  //     commit
  //   }, value) => commit(types.SELECT_SESSIONS, value),
  //   selectFriend: ({
  //     commit
  //   }, value) => commit(types.SELECT_FRIEND, value),
  //   sendMessage: ({
  //     commit
  //   }, msg) => commit(types.SEND_MESSAGE, msg),
  //   contact: ({
  //     commit
  //   }) => commit(types.CONTACT),
  //   initData: ({
  //     commit
  //   }) => commit(types.INIT_DATA),
  //   changeReadStatus: ({
  //     commit
  //   }, value) => commit(types.CHANGE_READ_STATUS, value),
  //   updateUnreadCount: ({
  //     commit
  //   }) => commit(types.UPDATE_UNREAD_COUNT)

  // },
  // getters: {
  //   // 筛选出含有搜索值的聊天列表
  //   searchedChatlist(state) {
  //     const sessions = state.chatlist.filter(sessions => sessions.user.name.includes(state.searchText))
  //     return sessions
  //   },
  //   // 筛选出含有搜索值的好友列表
  //   searchedFriendlist(state) {
  //     const friends = state.friendlist.filter(friends => friends.remark.includes(state.searchText))
  //     return friends
  //   },
  //   // 获取的未读的对话列表
  //   unreadChatList(state) {
  //     const unreadList = state.chatlist.filter(item => item.unreadCount > 0)
  //     return unreadList
  //   },
  //   // 获取个人的对话列表
  //   getPersonChatList(state) {
  //     const personList = state.chatlist.filter(item => item.type === 'person')
  //     return personList
  //   },
  //   // 通过当前选择是哪个对话匹配相应的对话
  //   selectedChat(state) {
  //     const session = state.chatlist.find(session => session.id === state.selectId)
  //     return session
  //   },
  //   // 通过当前选择是哪个好友匹配相应的好友
  //   selectedFriend(state) {
  //     const friend = state.friendlist.find(friend => friend.id === state.selectFriendId)
  //     return friend
  //   },
  //   messages(state) {
  //     const session = state.chatlist.find(session => session.id === state.selectId)
  //     return session.messages
  //   },
  //   getAllCount(state) {
  //     let totalCount = 0
  //     state.chatlist.forEach(session => {
  //       if (session.read === false) {
  //         totalCount += session.messages.length
  //       }
  //     })
  //     return totalCount
  //   },
  //   // 获取所有未读的消息数量
  //   getUnreadCount(state) {
  //     let allCount = 0
  //     state.chatlist.forEach(session => {
  //       allCount += session.unreadCount
  //     })
  //     // state.chatlist.forEach(item => {
  //     //   item.messages.forEach(mes => {
  //     //     if (mes.read === false) {
  //     //       allCount += 1
  //     //     }
  //     //   })
  //     // })
  //     return allCount
  //   },
  //   // 获取当前对话面板中未读的信息数量
  //   getCurrentUnreadMesCount(state) {
  //     let count = 0
  //     const session = state.chatlist.find(session => session.id === state.selectId)
  //     session.messages.forEach(mes => {
  //       if (mes.read === false) {
  //         count += 1
  //       }
  //     })
  //     return count
  //   },
  //   // 获取除了当前会话所有的未读消息
  //   getExceptCurrentMesCount(state) {
  //     let count = 0
  //     state.chatlist.forEach(item => {
  //       if (item.id !== state.selectId) {
  //         count += item.unreadCount
  //       }
  //     })
  //     return count
  //   },
  //   // 获取未读的对话的数量
  //   getUnreadDialog(state) {
  //     let count = 0
  //     state.chatlist.forEach(item => {
  //       if (item.unreadCount > 0) {
  //         count += 1
  //       }
  //     })
  //     return count
  //   },
  //   // 获取person分组的未读对话数量
  //   getPersonUnreadCount(state) {
  //     let count = 0
  //     state.chatlist.forEach(item => {
  //       if (item.type === 'person' && item.unreadCount > 0) {
  //         count += 1
  //       }
  //     })
  //     return count
  //   }
  // },
  modules: {
    chat,
    settings
  }
})
// 监听聊天列表的值， 发生变化就保存在localStorage中
store.watch(
  (state) => state.chatlist,
  (val) => {
    localStorage.setItem('tg-chat', JSON.stringify(val))
  }
  // , {
  //   deep: true
  // }
)
export default store
