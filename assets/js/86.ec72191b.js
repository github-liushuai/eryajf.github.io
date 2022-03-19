(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{672:function(t,s,a){"use strict";a.r(s);var e=a(9),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-简单解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单解释"}},[t._v("#")]),t._v(" 1，简单解释")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("by:")]),t._v(" 向量中只保留列出的标签(维度)，其余标签则移除，必须指明标签列表。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("without:")]),t._v(" 用于从计算结果中移除列举的标签(维度)，而保留其它标签。")])])]),t._v(" "),a("p",[t._v("通常如上两个函数都配合"),a("code",[t._v("sum()")]),t._v("函数一同出现，by用于聚合我们关心的列，而without则可以直接理解为by的相反用法。")]),t._v(" "),a("h2",{attrs:{id:"_2-简单示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-简单示例"}},[t._v("#")]),t._v(" 2，简单示例")]),t._v(" "),a("p",[t._v("首先有一个基础字段查询：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("prometheus_http_requests_total\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/131e836c5ee8dcc8.jpg",alt:"image-20210802211525363"}})]),t._v(" "),a("p",[t._v("这里随便拿出一条结果来做参照：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("prometheus_http_requests_total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200"')]),t._v(",endpoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),t._v(",handler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/-/reload"')]),t._v(",instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.26.10.182:8080"')]),t._v(",job"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prometheus"')]),t._v(",namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"monitoring"')]),t._v(",pod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prometheus-1"')]),t._v(",roles"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"monitor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15467")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("通常我们结合sum来得出每个instance的value：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prometheus_http_requests_total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" by "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/72c865c3651e115f.jpg",alt:"image-20210802211629103"}})]),t._v(" "),a("p",[t._v("此处可以看到使用sum函数之后可通过by方法获取到我们关心的字段。")]),t._v(" "),a("p",[t._v("那么without的用法如上边相反，比如有一个roles的字段我们用不到，可以使用如下方法：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prometheus_http_requests_total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" without "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9b1f5e202123e862.jpg",alt:"image-20210802211924802"}})]),t._v(" "),a("p",[t._v("能够看到对应的roles字段没有了。without方法多用在表格的绘制中，让我们能够灵活地控制字段的取舍。")])])}),[],!1,null,null,null);s.default=r.exports}}]);