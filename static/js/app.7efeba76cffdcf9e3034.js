webpackJsonp([1],{"2OBe":function(t,n,s){t.exports=s.p+"static/img/banner1.4201b8c.jpg"},"4PVA":function(t,n,s){t.exports=s.p+"static/img/banner4.540657f.jpg"},"5yF8":function(t,n){},"6/ZJ":function(t,n){},"6yQ7":function(t,n){},"7QCR":function(t,n){},BNBm:function(t,n){},HCom:function(t,n){},HpH8:function(t,n){},JxNe:function(t,n){},N9ws:function(t,n){},NHnr:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s("IvJb"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var e=s("C7Lr")({name:"App"},a,!1,function(t){s("VotE")},null,null).exports,r=s("zO6J"),c=(s("eT5C"),s("S9Mg")),o={data:function(){return{banner:[{banner_url:s("2OBe")},{banner_url:s("tdk7")},{banner_url:s("wlWE")},{banner_url:s("4PVA")}]}},mounted:function(){new c.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:3e3,disableOnInteraction:!1}})}},v={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"swiper"},[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},this._l(this.banner,function(t,s){return n("div",{key:s,staticClass:"swiper-slide"},[n("img",{attrs:{src:t.banner_url}})])})),this._v(" "),n("div",{staticClass:"swiper-pagination"})])])},staticRenderFns:[]};var p=s("C7Lr")(o,v,!1,function(t){s("X8tM")},"data-v-3244c994",null).exports,l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"warning"},[n("marquee",{staticStyle:{height:"25px","line-height":"25px",color:"rgb(58, 160, 246)","white-space":"nowrap",width:"100%"},attrs:{direction:"left",scrolldelay:"100",width:"100%",onmouseover:"this.stop()",onmouseout:"this.start()",scrollamount:"10"}},[n("p",{staticStyle:{color:"rgb(58, 160, 246)"}},[this._v("友情提醒：每天15：00-19:00任务最多，记得来抢哦！如遇问题请添加客服微信:1115009958")])])],1)},staticRenderFns:[]};var _=s("C7Lr")({},l,!1,function(t){s("6yQ7")},null,null).exports,d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[this._v("苹果")]),this._v(" "),n("router-link",{attrs:{to:"/android"}},[this._v("安卓")]),this._v(" "),n("router-link",{attrs:{to:"/message"}},[this._v("资讯")])],1)},staticRenderFns:[]};var u=s("C7Lr")({},d,!1,function(t){s("BNBm")},"data-v-2bce2e5f",null).exports,h=s("aozt"),f=s.n(h),m={data:function(){return{item_list:[]}},created:function(){var t=this;f.a.get("https://chenxuba.github.io/shiwan.json").then(function(n){t.item_list=n.data})},methods:{start:function(t){window.location.href=t},showTeach:function(){this.$router.push({path:"/teach"})}}},g={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"hot"},[s("div",{staticClass:"list",on:{click:t.showTeach}},[s("div",{staticClass:"left-img"}),t._v(" "),t._m(0)]),t._v(" "),t._l(t.item_list,function(n,i){return s("div",{key:i,staticClass:"list",on:{click:function(s){t.start(n.shiwan_url)}}},[s("div",{staticClass:"left-img"},[s("img",{attrs:{src:n.pic_url}})]),t._v(" "),s("div",{staticClass:"right-txt"},[s("div",{staticClass:"t1",staticStyle:{color:"#ff0000"}},[t._v(t._s(n.title))]),t._v(" "),s("div",{staticClass:"t2"},[t._v(t._s(n.info))]),t._v(" "),s("div",{staticClass:"t3"},[t._v(t._s(n.person)+"人加入")]),t._v(" "),s("div",{staticClass:"t4"},[t._v("进入")])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"right-txt"},[n("div",{staticClass:"t1",staticStyle:{color:"red","font-weight":"700"}},[this._v("¥ 新 手 教 程 ¥ ( 新 手 必 看 )")]),this._v(" "),n("div",{staticClass:"t2"},[this._v("ASO苹果试玩教程，更多介绍！")]),this._v(" "),n("div",{staticClass:"t3"},[this._v("观看人次/6752")]),this._v(" "),n("div",{staticClass:"t4"},[this._v("观看")])])}]};var C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"more"},[this._v("\n    推荐更多\n")])},staticRenderFns:[]};var b={data:function(){return{tab:1}},components:{"app-hot":s("C7Lr")(m,g,!1,function(t){s("JxNe")},"data-v-4cdff549",null).exports,"app-more":s("C7Lr")({},C,!1,function(t){s("6/ZJ")},null,null).exports},methods:{toTab:function(t){this.tab=t}}},w={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"tab"},[s("div",{staticClass:"tab-nav"},[s("div",{staticClass:"together",class:{active:1===t.tab},on:{click:function(n){t.toTab(1)}}},[t._v("热门排行")]),t._v(" "),s("div",{staticClass:"together",class:{active:2===t.tab},on:{click:function(n){t.toTab(2)}}},[t._v("推荐更多")])]),t._v(" "),s("div",{staticClass:"tab-content"},[1===t.tab?s("app-hot"):s("app-more")],1)])},staticRenderFns:[]};var x={components:{"app-swiper":p,"app-warning":_,"app-nav":u,"app-tab":s("C7Lr")(b,w,!1,function(t){s("5yF8")},"data-v-18c62089",null).exports}},E={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"apple"},[n("app-swiper"),this._v(" "),n("app-warning"),this._v(" "),n("app-nav"),this._v(" "),n("app-tab")],1)},staticRenderFns:[]};var A=s("C7Lr")(x,E,!1,function(t){s("HCom")},"data-v-d15b898a",null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hotAndroid"},[this._v("\n    1\n")])},staticRenderFns:[]};var F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"moreAndroid"},[this._v("\n    2\n")])},staticRenderFns:[]};var $={data:function(){return{tab:1}},components:{"app-hotAndroid":s("C7Lr")({},R,!1,function(t){s("O+mL")},null,null).exports,"app-moreAndroid":s("C7Lr")({},F,!1,function(t){s("w54I")},null,null).exports},methods:{toTab:function(t){this.tab=t}}},y={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"tab"},[s("div",{staticClass:"tab-nav"},[s("div",{staticClass:"together",class:{active:1===t.tab},on:{click:function(n){t.toTab(1)}}},[t._v("热门排行")]),t._v(" "),s("div",{staticClass:"together",class:{active:2===t.tab},on:{click:function(n){t.toTab(2)}}},[t._v("推荐更多")])]),t._v(" "),s("div",{staticClass:"tab-content"},[1===t.tab?s("app-hotAndroid"):s("app-moreAndroid")],1)])},staticRenderFns:[]};var L={components:{"app-swiper":p,"app-warning":_,"app-nav":u,"app-tabAndroid":s("C7Lr")($,y,!1,function(t){s("N9ws")},"data-v-39139ece",null).exports}},k={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"android"},[n("app-swiper"),this._v(" "),n("app-warning"),this._v(" "),n("app-nav"),this._v(" "),n("app-tabAndroid")],1)},staticRenderFns:[]};var T=s("C7Lr")(L,k,!1,function(t){s("RIP+")},"data-v-3bc9a8f6",null).exports,O={components:{"app-swiper":p,"app-warning":_,"app-nav":u}},S={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"message"},[n("app-swiper"),this._v(" "),n("app-warning"),this._v(" "),n("app-nav")],1)},staticRenderFns:[]};var j=s("C7Lr")(O,S,!1,function(t){s("HpH8")},"data-v-ce4a9a16",null).exports,H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"teach"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:"static/img/beijing.jpg"}}),t._v(" "),s("div",{staticClass:"top_header"},[s("div",{staticClass:"imgsrc"},[s("img",{attrs:{src:"static/img/gonglue.png"}})]),t._v(" "),s("div",{staticClass:"title"},[s("h1",[t._v("新手必看教程")]),t._v(" "),s("p",[t._v("32591人已加入正在试玩")])])])]),t._v(" "),s("div",{staticClass:"info"},[s("p",{staticClass:"info_name"},[t._v("视频介绍ASO苹果试玩App：")]),t._v(" "),s("div",{staticClass:"audio"},[s("iframe",{attrs:{frameborder:"0",width:"80%",height:"200",src:"https://v.qq.com/txp/iframe/player.html?vid=m0373awlhvt",allowFullScreen:"true"}})]),t._v(" "),s("div",{staticClass:"txt"},[s("strong",[t._v("新手必看")]),t._v(" "),s("p",[t._v("试玩App在这里通过在平台内领取试玩任务，\n                在手机应用商店下载指定软件（帮助软件开发商提高下载量及商店排名），\n                试玩几分钟完成任务即可获得薪酬，苹果用户每个任务奖励1-4元，安卓用户1元左右。\n            ")]),t._v(" "),s("p",[t._v("\n                以下是一些新手注意事项，请大家认真研读（尤其是苹果用户），\n                以便您能更好更快的学会如何赚钱。试玩规则如下：\n            ")]),t._v(" "),s("p",[t._v("\n                苹果：1个微信+1个苹果商店账号只能绑定一台手机试玩，若用2台手机试玩，\n                需要新的微信号和新的商店账号；不能混淆。\n            ")]),t._v(" "),s("p",[t._v("\n                官方禁止任何刷机，共享App Store ID等行为，一经发现予以冻结账户，且永不解封!\n            ")]),t._v(" "),s("p",[t._v("\n                其次，苹果只能做苹果兼职的平台，安卓只能做安卓兼职的平台。\n            ")]),t._v(" "),s("strong",[t._v("能赚多少钱？")]),t._v(" "),s("p",[t._v("\n                收入因人而异，有的每月几千，有的甚至上万，当然这个跟你做的平台数量有关，\n                苹果系统有30多个兼职平台，每个平台每天都会刷新任务，\n                做的平台与任务多肯定赚的多。每个平台每天做几个任务所有平台的钱加一起也不是小数目哦！\n            ")]),t._v(" "),s("strong",[t._v("越狱苹果手机")]),t._v(" "),s("p",[t._v("\n                越狱苹果手机试玩在试玩列表中底部有越狱专区（越狱手机仅可以玩那里的平台）\n                若升级到苹果官方最新版本或者在设置中选择还原设备并抹除“我的iphone”即可试玩所有平台。\n            ")]),t._v(" "),s("strong",[t._v("收入与提现")]),t._v(" "),s("p",[t._v("\n                当我们完成任务之后，即可获得奖励，奖励是发到所做的相应平台上，\n                我们可以提现至微信钱包或者支付宝，冲话费QB都可以。大部分平台10元即可提现。\n                到账时间为工作日内0-3天。部分平台支持1元起提，实时到账微信钱包。\n            ")]),t._v(" "),s("strong",[t._v("怎样做更多任务")]),t._v(" "),s("p",[t._v("\n                很多人可能打开某个平台发现没有任务，是因为没有到刷新时间或者任务被其他人做完了。\n                各平台都会每天不定时刷新任务，下午3点后会大量刷新任务，其他时间不定时刷新。\n                个别平台有任务刷新预告表。所以要多做几个平台，这样就有机会做更多任务。\n            ")]),t._v(" "),s("strong",[t._v("下载的软件是否会造成手机速度变慢？可卸载吗")]),t._v(" "),s("p",[t._v("\n                当然可以！但是要注意，做任务前每个平台都要让你下载一个任务助手（打开平台的钥匙），\n                这个助手一定不能删并且做任务时要后台运行，否则无法获得佣金。要求试玩的软件在完成任务得到佣金后可以卸载。\n            ")]),t._v(" "),s("p",[t._v("\n                下载软件只是网络的数据传输，不会影响运行速度。\n            ")]),t._v(" "),s("p",[t._v("\n                部分平台的助手打不开如果是IOS9系统有个别平台的任务助手需要企业证书设置，设置步骤在平台文章底部的注意事项都有提示。\n            ")]),t._v(" "),s("p",[t._v("\n                如果助手闪退，是因为助手更新了，卸载后从新下载即可。\n            ")]),t._v(" "),s("div",{staticClass:"center"},[s("img",{attrs:{src:"static/img/1.png"}}),t._v(" "),s("p",[t._v("日常收入截图")]),t._v(" "),s("img",{staticClass:"img",attrs:{src:"static/img/2.png"}}),t._v(" "),s("img",{staticClass:"img",attrs:{src:"static/img/3.png"}}),t._v(" "),s("img",{staticClass:"img",attrs:{src:"static/img/4.png"}}),t._v(" "),s("img",{staticClass:"img",attrs:{src:"static/img/5.png"}})]),t._v(" "),s("strong",[t._v("如何才能赚的更多？")]),t._v(" "),s("p",[t._v("\n                1、建议按照平台顺序一个一个做，比如第一个平台任务做完了就做下一个平台。（做的平台越多赚的越多），多下载一些平台，哪个有任务做哪个。\n            ")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n                2、每个平台都有相应的任务助手（一些平台的助手第一次打开是一款小游戏或者音乐软件，需要返回下载助手的sifari页面点击激活才能正常进入试玩平台），\n                做任务时助手软件一定要后台运行，否则不会得到奖励。（助手软件不要卸载）\n            ")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n                3、有时候可能进入平台后发现没有任务，是没有到刷新的时间，可选择下一个平台试玩（每天下午15-19点大量刷新任务16点任务最多，其他时间中午11点，整点，\n                半点也会刷，把握好下午3点这个时间可以短时间赚很多）做的平台多了大家就会总结出来规律。\n            ")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n                4、建议只做限时，快速，极速任务（这些任务100%给钱），联盟任务不是100%返钱。\n            ")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n                5、收入提现：通过支付宝或微信提现，必须是实名认证的账户。工作日0-3天到账，周末或节假日会延迟至工作日统一打款，\n                请大家谅解。提现时务必核对好自己的账户信息，确保正确无误。（个别平台不需要提现，每做1个任务就秒到账微信）\n            ")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n                6，越狱苹果手机：升级到苹果官方最新版本或者在设置中选择还原设备并抹除“我的iphone”即可试玩所有平台。\n            ")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("\n                7，在我们下载平台助手后登陆的时候苹果手机会提示是否允许发送通知，建议允许发送，这样你就可以收到平台助手发送的任务通知，更多的了解更新时间，利于提高收入。\n            ")]),t._v(" "),s("strong",[t._v("如遇问题请加微信咨询")]),t._v(" "),s("img",{staticClass:"wx",attrs:{src:"static/img/6.jpeg"}})])])])}]};var I=s("C7Lr")({},H,!1,function(t){s("7QCR")},"data-v-5bd0ae76",null).exports;i.a.use(r.a);var N=new r.a({mode:"history",routes:[{path:"/",component:A},{path:"/android",component:T},{path:"/message",component:j},{path:"/teach",component:I}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:N,axios:f.a,components:{App:e},template:"<App/>"})},"O+mL":function(t,n){},"RIP+":function(t,n){},VotE:function(t,n){},X8tM:function(t,n){},eT5C:function(t,n){},tdk7:function(t,n,s){t.exports=s.p+"static/img/banner2.31597d9.jpg"},w54I:function(t,n){},wlWE:function(t,n,s){t.exports=s.p+"static/img/banner3.8fbb2ac.jpg"}},["NHnr"]);
//# sourceMappingURL=app.7efeba76cffdcf9e3034.js.map