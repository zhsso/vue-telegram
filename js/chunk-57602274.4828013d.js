(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57602274"],{2919:function(t,s,i){"use strict";var a=i("81ab"),e=i.n(a);e.a},"81ab":function(t,s,i){},c4e4:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"person-info"},[i("div",{staticClass:"top border-bottom-1px"},[i("div",{staticClass:"left-button",on:{click:t.goback}},[i("i",{staticClass:"mintui mintui-back"}),i("label",{staticClass:"mint-button-text"},[t._v("返回")])]),i("div",{staticClass:"right-buttom",on:{click:t.goEditFirendsDetail}},[i("label",{staticClass:"mint-button-text"},[t._v("编辑")])]),i("div",{staticClass:"avatar-wrapper"},[i("img",{staticClass:"avatar clearfix",attrs:{src:t.selectedChat.user.img,width:"100",height:"100"}}),i("p",{staticClass:"name"},[t._v(t._s(t.selectedChat.user.name))]),i("p",{staticClass:"date"},[t._v("近期上线")])]),i("div",{staticClass:"icon-group"},[t._m(0),i("div",{staticClass:"icon-wrapper",on:{click:function(s){return t.updateNoticeStatus(!t.selectedChat.notifications)}}},[i("div",{staticClass:"icon-circle"},[i("i",{class:[1==t.selectedChat.notifications?"icon-notifications_off":"icon-notifications"]})]),i("p",[t._v("关闭通知")])]),t._m(1),t._m(2)])]),i("div",{staticClass:"split border-bottom-1px"}),t.selectedChat.phoneNumber?i("div",{staticClass:"phone-wrapper"},[i("p",{staticClass:"name"},[t._v("手机")]),i("p",{staticClass:"number"},[t._v(t._s(t.selectedChat.phoneNumber))])]):t._e(),t.selectedChat.bulletin?i("div",{staticClass:"phone-wrapper"},[i("p",{staticClass:"number"},[t._v(t._s(t.selectedChat.bulletin))])]):t._e(),i("div",{staticClass:"split border-bottom-1px border-top-1px"}),t._m(3)])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"icon-wrapper"},[i("div",{staticClass:"icon-circle"},[i("i",{staticClass:"icon-phone"})]),i("p",[t._v("通话")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"icon-wrapper"},[i("div",{staticClass:"icon-circle"},[i("i",{staticClass:"mintui mintui-search"})]),i("p",[t._v("搜索")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"icon-wrapper"},[i("div",{staticClass:"icon-circle"},[i("i",{staticClass:"icon-navigation-more"})]),i("p",[t._v("更多")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"media"},[i("h4",[t._v("媒体记录部分，待开发")])])}],c=i("5530"),n=i("2f62"),o={name:"personInfo",data:function(){return{}},computed:Object(c["a"])({},Object(n["c"])(["selectedChat"])),methods:Object(c["a"])(Object(c["a"])({},Object(n["b"])(["updateNoticeStatus"])),{},{goback:function(){history.go(-1)},goEditFirendsDetail:function(){var t=this.selectedChat.tgid;this.$router.push({name:"editFriendsDetail",params:{tgid:t}})}})},r=o,l=(i("2919"),i("2877")),d=Object(l["a"])(r,a,e,!1,null,"6908e973",null);s["default"]=d.exports}}]);