import * as types from '../types'
const now = new Date()

const state = {
  // 输入的搜索值
  searchText: '',
  // 当前登录用户
  user: {
    name: 'god',
    img: 'img/me.jpg'
  },
  // 对话列表
  chatList: [{
    id: 1,
    type: 'person',
    tgid: 111,
    unreadCount: 2,
    notifications: true,
    phoneNumber: '+86 19997777888',
    user: {
      name: 'kd',
      img: 'img/kd.png'
    },
    messages: [{
      content: '又是被代码搞失眠的一晚', // 聊天内容
      date: now, // 时间
      read: false
    },
    {
      content: '有哪些老鸟程序员知道而新手不知道的小技巧？程序不等于数据结构加算法， 而等于搜索引擎加英语',
      date: now,
      read: false
    }
    ],
    index: 1 // 当前在聊天列表中的位置,从1开始

  },
  {
    id: 2,
    // read: false,
    tgid: 222,
    unreadCount: 3,
    type: 'person',
    notifications: false,
    phoneNumber: '+86 19997777856',

    user: {
      name: '詹姆斯',
      img: 'img/james.jpg'
    },
    messages: [{
      content: '前端工程师说，我去相亲网站找女朋友去了。朋友问，找到了么？工程师说，找到了他们页面的一个 Bug。',
      date: now,
      read: false
    },
    {
      content: '前端工程师说，我去相亲网站找女朋友去了。朋友问，找到了么？工程师说，找到了他们页面的一个 Bug。',
      date: now,
      read: false
    },
    {
      content: '前端工程师说，我去相亲网站找女朋友去了。朋友问，找到了么？工程师说，找到了他们页面的一个 Bug。',
      date: now,
      read: false
    }],
    index: 2
  },
  {
    id: 3,
    // read: true,
    tgid: 333,
    type: 'person',
    unreadCount: 0,
    notifications: true,
    phoneNumber: '+86 19997777444',
    user: {
      name: '哈登',
      img: 'img/hadeng.jpg'
    },
    messages: [{
      content: '来跟我聊天，我教你后撤步',
      date: now,
      read: true
    }],
    index: 3
  },
  {
    id: 4,
    // read: false,
    tgid: 'saveMes',
    unreadCount: 0,
    type: 'person',
    notifications: true,
    user: {
      name: '收藏夹',
      img: 'img/Saved Message.png'
    },
    messages: [{
      content: 'hello',
      date: now,
      read: true
    }],
    index: 4
  },
  {
    id: 5,
    // read: true,
    tgid: 'bbb',
    type: 'group',
    unreadCount: 14,
    notifications: true,
    bulletin: '本群是以讨论大家的学习生活为目的',
    user: {
      name: '软三讨论群',
      img: 'img/group.png'
    },
    messages: [{
      user: {
        name: '哈登',
        img: 'img/hadeng.jpg'
      },
      content: '这是一个讨论群，欢迎大家踊跃发言',
      date: now,
      read: false
    },
    {
      user: {
        name: '詹姆斯',
        img: 'img/james.jpg'
      },
      content: '大家好，我是詹姆斯',
      date: now,
      read: false
    },
    {
      user: {
        name: 'kd',
        img: 'img/kd.png'
      },
      content: '大家好，我是kd',
      date: now,
      read: false
    },
    {
      user: {
        name: '詹姆斯',
        img: 'img/james.jpg'
      },
      content: '前端工程师说，我去相亲网站找女朋友去了。朋友问，找到了么？工程师说，找到了他们页面的一个 Bug。',
      date: now,
      read: false
    },
    {
      user: {
        name: '詹姆斯',
        img: 'img/james.jpg'
      },
      content: 'Talk is cheap. Show me the code',
      date: now,
      read: false
    },
    {
      user: {
        name: '詹姆斯',
        img: 'img/james.jpg'
      },
      content: '屁话少说，放码过来。',
      date: now,
      read: false
    },
    {
      user: {
        name: 'kd',
        img: 'img/kd.png'
      },
      content: '有哪些老鸟程序员知道而新手不知道的小技巧？程序不等于数据结构加算法， 而等于搜索引擎加英语',
      date: now,
      read: false
    },
    {
      user: {
        name: '哈登',
        img: 'img/hadeng.jpg'
      },
      content: '看到一个脑残的 Code，忍不住骂了句：靠，这个码是哪个 SB 写的？仔细一看，原来是自己上个月写的',
      date: now,
      read: false
    }, {
      user: {
        name: '哈登',
        img: 'img/hadeng.jpg'
      },
      content: '如何让别人明白「学习或从事计算机专业的人不一定会修电脑」？我是学法学的是不是要搓个火球给你看啊？',
      date: now,
      read: false
    }, {
      user: {
        name: '哈登',
        img: 'img/hadeng.jpg'
      },
      content: '如何反驳「程序员离开电脑就是废物」这个观点？不不不，很多程序员在电脑前也是废物。',
      date: now,
      read: false
    },
    {
      user: {
        name: 'kd',
        img: 'img/kd.png'
      },
      content: '有哪些老鸟程序员知道而新手不知道的小技巧？程序不等于数据结构加算法， 而等于搜索引擎加英语',
      date: now,
      read: false
    },
    {
      user: {
        name: '哈登',
        img: 'img/hadeng.jpg'
      },
      content: '看到一个脑残的 Code，忍不住骂了句：靠，这个码是哪个 SB 写的？仔细一看，原来是自己上个月写的',
      date: now,
      read: false
    }, {
      user: {
        name: '哈登',
        img: 'img/hadeng.jpg'
      },
      content: '如何让别人明白「学习或从事计算机专业的人不一定会修电脑」？我是学法学的是不是要搓个火球给你看啊？',
      date: now,
      read: false
    }, {
      user: {
        name: '哈登',
        img: 'img/hadeng.jpg'
      },
      content: '如何反驳「程序员离开电脑就是废物」这个观点？不不不，很多程序员在电脑前也是废物。',
      date: now,
      read: false
    }
    ],
    index: 5
  },
  {
    id: 6,
    tgid: 'ccc',
    type: 'channel',
    unreadCount: 3,
    notifications: true,
    user: {
      name: '软三公告频道',
      img: 'img/channel.png'
    },
    messages: [{
      content: '这是一个官方频道，只有创建者以及管理员能发言',
      date: now,
      read: false
    },
    {
      content: '下学期不用回学校了',
      date: now,
      read: false
    }, {
      content: '这学期大家呆在家里上网课就行了',
      date: now,
      read: false
    }, {
      content: '这是一个官方频道，只有创建者以及管理员能发言',
      date: now,
      read: false
    }
    ],
    index: 6
  }
  ],
  // 好友列表
  friendList: [{
    id: 0,
    type: 'person',
    tgid: 444, // 微信号
    img: 'img/weshao.jpg', // 头像
    remark: '威少', // 备注
    notifications: true,
    phoneNumber: '+86 19997777578'

  },
  {
    id: 1,
    type: 'person',
    tgid: 555,
    img: 'img/Tom.png', // 头像
    remark: 'kt', // 备注
    notifications: true,
    phoneNumber: '+86 19997777666'
  },
  {
    id: 2,
    type: 'person',
    tgid: 222,
    img: 'img/james.jpg',
    remark: '詹姆斯',
    notifications: true,
    phoneNumber: '+86 19997777856'
  },
  {
    id: 3,
    type: 'person',
    tgid: 111,
    img: 'img/kd.png',
    remark: 'kd',
    notifications: true,
    phoneNumber: '+86 19997777888'

  },
  {
    id: 4,
    type: 'person',
    tgid: 333,
    img: 'img/hadeng.jpg',
    remark: '哈登',
    notifications: true,
    phoneNumber: '+86 19997777444'

  },
  {
    id: 5,
    type: 'person',
    tgid: 666,
    img: 'img/men.png',
    remark: 'men',
    notifications: true,
    phoneNumber: '+86 19997777333'

  }
  ],
  // 得知当前选择的是与那个联系人对话
  selectId: 1,
  // 得知当前选择的是哪个好友
  selectFriendId: 0
}
// emoji表情

const mutations = {
  // 从localStorage 中获取数据
  [types.INIT_DATA](state) {
    const data = localStorage.getItem('tg-chat')
    const id = localStorage.getItem('tg-selectId')
    if (data) {
      state.chatList = JSON.parse(data)
    }
    if (id) {
      state.selectId = JSON.parse(id)
    }
  },
  // 获取搜索值
  [types.SEARCH](state, value) {
    state.searchText = value
  },
  // 得知用户当前选择的是哪个对话。便于匹配对应的对话框
  [types.SELECT_SESSIONS](state, value) {
    state.selectId = value
  },
  // 得知用户当前选择的是哪个好友。
  [types.SELECT_FRIEND](state, value) {
    state.selectFriendId = value
  },
  // 发送信息
  [types.SEND_MESSAGE](state, msg) {
    const result = state.chatList.find(session => session.id === state.selectId)
    result.messages.push({
      content: msg.content,
      date: new Date(),
      self: true
    })
  },

  // 选择好友后，点击发送信息。判断在聊天列表中是否有该好友，有的话跳到该好友对话。没有的话
  // 添加该好友的对话 并置顶
  [types.CONTACT](state) {
    const result = state.friendList.find(friend => friend.id === state.selectFriendId)
    const msg = state.chatList.find(msg => msg.tgid === result.tgid)
    if (!msg) {
      state.selectId = 1
      for (let i = 0; i < state.chatList.length; i++) {
        state.chatList[i].id++
        state.chatList[i].index++
      }
      state.chatList.unshift({
        id: 1,
        tgid: result.tgid,
        unreadCount: 1,
        type: 'person',
        notifications: true,
        phoneNumber: result.phoneNumber,
        user: {
          name: result.remark,
          img: result.img
        },
        messages: [{
          content: '加入对话列表并且把你置顶了，欢迎来撩我',
          date: new Date(),
          read: false
        }],
        index: 1
      })
    } else {
      state.selectId = msg.index
    }
  },
  // 修改信息是否已读的状态
  [types.CHANGE_READ_STATUS](state, value) {
    const session = state.chatList.find(session => session.id === state.selectId)
    session.messages.some((item, index) => {
      if (index === value) {
        item.read = true
      }
    })
  },
  // 更新与某个对话中的未读消息数量
  [types.UPDATE_UNREAD_COUNT](state) {
    let totalCount = 0
    const session = state.chatList.find(session => session.id === state.selectId)
    session.messages.forEach(item => {
      if (item.read === false) {
        totalCount += 1
      }
    })
    session.unreadCount = totalCount
  },
  // 更新是否显示通知的状态
  [types.UPDATE_NOTICE_STATUS](state, value) {
    const session = state.chatList.find(session => session.id === state.selectId)
    session.notifications = value
  },
  // 更新删除联系人后的列表
  [types.UPDATE_DELETE_LIST](state) {
    const session = state.chatList.find(session => session.id === state.selectId)

    state.chatList.forEach((item, index, arr) => {
      if (item.tgid === session.tgid) {
        arr.splice(index, 1)
      }
      if (item.id >= state.selectId) {
        arr[index].id--
        arr[index].index--
      }
    })
    state.friendList.forEach((item, index, arr) => {
      if (item.tgid === session.tgid) {
        arr.splice(index, 1)
      }
    })
  }
}
const actions = {
  search: ({
    commit
  }, value) => {
    setTimeout(() => {
      commit(types.SEARCH, value)
    }, 100)
  },
  selectSession: ({
    commit
  }, value) => commit(types.SELECT_SESSIONS, value),
  selectFriend: ({
    commit
  }, value) => commit(types.SELECT_FRIEND, value),
  sendMessage: ({
    commit
  }, msg) => commit(types.SEND_MESSAGE, msg),
  contact: ({
    commit
  }) => commit(types.CONTACT),
  initData: ({
    commit
  }) => commit(types.INIT_DATA),
  changeReadStatus: ({
    commit
  }, value) => commit(types.CHANGE_READ_STATUS, value),
  updateUnreadCount: ({
    commit
  }) => commit(types.UPDATE_UNREAD_COUNT),
  updateNoticeStatus: ({
    commit
  }, value) => commit(types.UPDATE_NOTICE_STATUS, value),
  updateDeleteList: ({
    commit
  }) => commit(types.UPDATE_DELETE_LIST)
}
const getters = {
  // 筛选出含有搜索值的聊天列表
  searchedChatlist(state) {
    const sessions = state.chatList.filter(sessions => sessions.user.name.includes(state.searchText))
    return sessions
  },
  // 筛选出含有搜索值的好友列表
  searchedFriendlist(state) {
    const friends = state.friendList.filter(friends => friends.remark.includes(state.searchText))
    return friends
  },
  // 获取的未读的对话列表
  unreadChatList(state) {
    const unreadList = state.chatList.filter(item => item.unreadCount > 0)
    return unreadList
  },
  // 获取个人的对话列表
  getPersonChatList(state) {
    const personList = state.chatList.filter(item => item.type === 'person')
    return personList
  },
  // 通过当前选择是哪个对话匹配相应的对话
  selectedChat(state) {
    const session = state.chatList.find(session => session.id === state.selectId)
    return session
  },
  // 根据tgid找出特殊的收藏夹的id
  selectedChatTgid(state) {
    const session = state.chatList.find(session => session.tgid === 'saveMes')
    return session.id
  },
  // 通过当前选择是哪个好友匹配相应的好友
  selectedFriend(state) {
    const friend = state.friendList.find(friend => friend.id === state.selectFriendId)
    return friend
  },
  messages(state) {
    const session = state.chatList.find(session => session.id === state.selectId)
    return session.messages
  },
  getAllCount(state) {
    let totalCount = 0
    state.chatList.forEach(session => {
      if (session.read === false) {
        totalCount += session.messages.length
      }
    })
    return totalCount
  },
  // 获取所有未读的消息数量
  getUnreadCount(state) {
    let allCount = 0
    state.chatList.forEach(session => {
      allCount += session.unreadCount
    })
    return allCount
  },
  // 获取当前对话面板中未读的信息数量
  getCurrentUnreadMesCount(state) {
    let count = 0
    const session = state.chatList.find(session => session.id === state.selectId)
    session.messages.forEach(mes => {
      if (mes.read === false) {
        count += 1
      }
    })
    return count
  },
  // 获取除了当前会话所有的未读消息
  getExceptCurrentMesCount(state) {
    let count = 0
    state.chatList.forEach(item => {
      if (item.id !== state.selectId) {
        count += item.unreadCount
      }
    })
    return count
  },
  // 获取未读的对话的数量
  getUnreadDialog(state) {
    let count = 0
    state.chatList.forEach(item => {
      if (item.unreadCount > 0) {
        count += 1
      }
    })
    return count
  },
  // 获取person分组的未读对话数量
  getPersonUnreadCount(state) {
    let count = 0
    state.chatList.forEach(item => {
      if (item.type === 'person' && item.unreadCount > 0) {
        count += 1
      }
    })
    return count
  },
  getUserInfo: state => state.user
}

export default {
  state,
  actions,
  getters,
  mutations
}
