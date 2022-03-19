(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{875:function(t,e,a){"use strict";a.r(e);var r=a(9),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("三位一体的图，顾名思义就是在一张图里边，聚合进来三个维度的字段，这种图在一些特定时候，会更加直观地帮助我们对一些业务情况进行判断。")]),t._v(" "),a("p",[t._v("以往画图经验当中，针对两个维度的内容绘图并不算难，常规来说，我们想要统计一下某个接口在时间长河当中被请求的次数，只需要在metrics里边定义Y轴，然后再将X轴定义为时间参照即可成型，大概如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ed748c851384d211.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("现在的需求是，想要在这个基础之上，同时加上与之对应的请求的IP的一个情况，就需要再添加一个维度进来了，这个时候，如果维度添加的不对，或者位置不对，可能都是无法成功的，现在直奔主题。")]),t._v(" "),a("p",[t._v("创建一个"),a("code",[t._v("area")]),t._v("（区域）的视图，然后有如下三大步骤需要配置：")]),t._v(" "),a("h2",{attrs:{id:"_1-y轴总定义。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-y轴总定义。"}},[t._v("#")]),t._v(" 1，Y轴总定义。")]),t._v(" "),a("ul",[a("li",[t._v("创建"),a("code",[t._v("Y-Axis")]),t._v("—>"),a("strong",[t._v("Aggregation")]),t._v("选择"),a("code",[t._v("count")]),t._v("–>Custom Label写入"),a("code",[t._v("访问次数")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/aa69daa00bbda8b4.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_2-ip字段定义。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ip字段定义。"}},[t._v("#")]),t._v(" 2，IP字段定义。")]),t._v(" "),a("ul",[a("li",[t._v("下边Buckets中添加Split Slices—>聚合选择Terms—>字段选择"),a("code",[t._v("remote_addr.keyword")]),t._v("—>order By选择"),a("code",[t._v("metric:次数")]),t._v("—>order选择"),a("code",[t._v("Descending")]),t._v("—>size选择"),a("code",[t._v("10")]),t._v("—>点选下边的 "),a("code",[t._v("Group other values in separate bucket")]),t._v("，里边的other表示可以另外添加一个维度，也可以把other这个字段重新命名。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/441a8235b3eeb52d.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_3-基础维度。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-基础维度。"}},[t._v("#")]),t._v(" 3，基础维度。")]),t._v(" "),a("ul",[a("li",[t._v("继续添加一个X-Axis—>聚合选择Date Histogram–>字段选择@timestamp–>其余默认即可。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/66cdb9e9b91fcc93.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("这些内容配置完成之后，基本上就有了一个简单的雏形，另外还有一些其他的配置项，能够让结果更加完善美满一些。")]),t._v(" "),a("h2",{attrs:{id:"_4-其他配置项。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他配置项。"}},[t._v("#")]),t._v(" 4，其他配置项。")]),t._v(" "),a("p",[a("code",[t._v("metrics")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3e17d970145eee3e.jpg",alt:"image"}})]),t._v(" "),a("p",[a("code",[t._v("Y-Axes")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7b47383eb5c286dc.jpg",alt:"image"}})]),t._v(" "),a("p",[a("code",[t._v("X-Axis")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8478b021806296dd.jpg",alt:"image"}})]),t._v(" "),a("p",[a("code",[t._v("第三栏内容：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/323d10c5a4781797.jpg",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"_5-最终效果图。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-最终效果图。"}},[t._v("#")]),t._v(" 5，最终效果图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b9170e08cc273627.jpg",alt:"image"}})]),t._v(" "),a("p",[t._v("可以看到后面大背景绿色的是当前接口所有请求的流量走势，下边花花绿绿的则是同时聚合的IP的显示。最后可以保存一下，投放到总控台去了。")])])}),[],!1,null,null,null);e.default=s.exports}}]);