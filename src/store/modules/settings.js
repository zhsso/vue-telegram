import * as types from '../types'
const state = {
  userName: {
    firstName: 'ddd',
    lastName: 'sss'
  },
  userPhone: 18922223333,
  userAvatar: 'https://cdn.jsdelivr.net/gh/xxydrr/my_pic/img/20200905225513.jpg',
  userEmail: 'iluxxyd@gmail.com',
  userBio: '',
  notifications: {
    allAccounts: true,
    mesNote: {
      showNote: true,
      mesPre: true
    },
    groupNote: {
      showNote: true,
      mesPre: true
    },
    channelNote: {
      showNote: true,
      mesPre: true
    },
    inAppNote: {
      sounds: true,
      vibrate: true,
      preview: true
    },
    NOLS: true,
    badgeNote: {
      channel: true,
      countUnreadMes: true
    },
    newContact: true
  },
  language: [],
  stickers: {
    las: true
  },
  DAS: {
    gifs: false,
    videos: false,
    sep: true,
    bgcDown: false
  }
}

const mutations = {
  [types.CHANGE_NOTE_ALL_ACCOUNTS](state, value) {
    state.notifications.allAccounts = value
  },
  [types.CHANGE_NOTE_MES_SHOW](state, value) {
    state.notifications.mesNote.showNote = value
  },
  [types.CHANGE_NOTE_MES_PRE](state, value) {
    state.notifications.mesNote.mesPre = value
  },
  [types.CHANGE_NOTE_GROUP_SHOW](state, value) {
    state.notifications.groupNote.showNote = value
  },
  [types.CHANGE_NOTE_GROUP_PRE](state, value) {
    state.notifications.groupNote.mesPre = value
  },
  [types.CHANGE_NOTE_CHANNEL_SHOW](state, value) {
    state.notifications.channelNote.showNote = value
  },
  [types.CHANGE_NOTE_CHANNEL_PRE](state, value) {
    state.notifications.channelNote.mesPre = value
  },
  [types.CHANGE_NOTE_APP_SOUNDS](state, value) {
    state.notifications.inAppNote.sounds = value
  },
  [types.CHANGE_NOTE_APP_VIBRATE](state, value) {
    state.notifications.inAppNote.vibrate = value
  },
  [types.CHANGE_NOTE_APP_PREVIEW](state, value) {
    state.notifications.inAppNote.preview = value
  },
  [types.CHANGE_NOTE_NOLS](state, value) {
    state.notifications.NOLS = value
  },
  [types.CHANGE_NOTE_BADGE_CHANNEL](state, value) {
    state.notifications.badgeNote.channel = value
  },
  [types.CHANGE_NOTE_BADGE_UNREAD](state, value) {
    state.notifications.badgeNote.countUnreadMes = value
  },
  [types.CHANGE_NOTE_NEW_CONTACT](state, value) {
    state.notifications.newContact = value
  },
  [types.CHANGE_STICKERS_LAS](state, value) {
    state.stickers.las = value
  },
  [types.CHANGE_DAS_GIF](state, value) {
    state.DAS.gifs = value
  },
  [types.CHANGE_DAS_VIDEOS](state, value) {
    state.DAS.videos = value
  },
  [types.CHANGE_DAS_SEP](state, value) {
    state.DAS.sep = value
  },
  [types.CHANGE_DAS_BGC](state, value) {
    state.DAS.bgcDown = value
  },
  [types.UPDATE_USER_FIRST_NAME](state, value) {
    state.userName.firstName = value
  },
  [types.UPDATE_USER_LAST_NAME](state, value) {
    state.userName.lastName = value
  },
  [types.UPDATE_USER_AVATAR](state, value) {
    state.userName.userAvatar = value
  },
  [types.UPDATE_USER_PHONE](state, value) {
    state.userPhone = value
  },
  [types.UPDATE_USER_EMAIL](state, value) {
    state.userEmail = value
  },
  [types.UPDATE_USER_BIO](state, value) {
    state.userBio = value
  }
}
const actions = {
  changeNoteAllCount: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_ALL_ACCOUNTS, value),
  changeNoteMesShow: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_MES_SHOW, value),
  changeNoteMesPre: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_MES_PRE, value),
  changeNoteGroupShow: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_GROUP_SHOW, value),
  changeNoteGroupPre: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_GROUP_PRE, value),
  changeNoteChannelShow: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_CHANNEL_SHOW, value),
  changeNoteChannelPre: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_CHANNEL_PRE, value),
  changeNoteAppSounds: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_APP_SOUNDS, value),
  changeNoteAppVibrate: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_APP_VIBRATE, value),
  changeNoteAppPre: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_APP_PREVIEW, value),
  changeNoteNols: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_NOLS, value),
  changeNoteBadgeChannel: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_BADGE_CHANNEL, value),
  changeNoteBadgeUnread: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_BADGE_UNREAD, value),
  changeNoteNewContact: ({
    commit
  }, value) => commit(types.CHANGE_NOTE_NEW_CONTACT, value),
  changeStickersLas: ({
    commit
  }, value) => commit(types.CHANGE_STICKERS_LAS, value),
  changeDasGif: ({
    commit
  }, value) => commit(types.CHANGE_DAS_GIF, value),
  changeDasVideos: ({
    commit
  }, value) => commit(types.CHANGE_DAS_VIDEOS, value),
  changeDasSep: ({
    commit
  }, value) => commit(types.CHANGE_DAS_SEP, value),
  changeDasBgc: ({
    commit
  }, value) => commit(types.CHANGE_DAS_BGC, value),
  updateUserFirstName: ({
    commit
  }, value) => commit(types.UPDATE_USER_FIRST_NAME, value),
  updateUserLastName: ({
    commit
  }, value) => commit(types.UPDATE_USER_LAST_NAME, value),
  updateUserPhone: ({
    commit
  }, value) => commit(types.UPDATE_USER_PHONE, value),
  updateUserAvatar: ({
    commit
  }, value) => commit(types.UPDATE_USER_AVATAR, value),
  updateUserEmail: ({
    commit
  }, value) => commit(types.UPDATE_USER_EMAIL, value),
  updateUserBio: ({
    commit
  }, value) => commit(types.UPDATE_USER_BIO, value)
}
const getters = {
  getUserName: state => state.userName,
  getUserPhone: state => state.userPhone,
  getUserAvatar: state => state.userAvatar,
  getUserEmail: state => state.userEmail,
  getUserBio: state => state.userBio

}

export default {
  state,
  actions,
  getters,
  mutations
}
