(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{616:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("今天做一个简单的日志清理脚本，然后却总是会报出"),a("code",[s._v("command not found")]),s._v("的错误，一时也是懵住了，困了一大会儿才找到原因，可能这就是经验不够丰富的原因吧。")]),s._v(" "),a("p",[s._v("这是什么原因，一般报错这个错误的，在 Linux 系统当中，都是说没有这个命令，但是我用的 ls，难道真的是被删根，连 ls 都没有了吗。\n先来看看脚本都写了什么吧。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/tomcat/logs\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v("/  -mtime +1 -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.log*"')]),s._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("看上去挺正常的一个脚本，重复执行仍旧如此。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b92935f1672d6522.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("现在，有两个思路可以来进行一下排查：")]),s._v(" "),a("ul",[a("li",[s._v("1， 可能系统当中真的没有脚本当中出现的命令，或者脚本当中的命令书写不规范，需要仔细检查。")]),s._v(" "),a("li",[s._v("2， 那就是我今天犯的错误了，在定义变量的时候，使用了 PATH 这个变量名，这在 Linux 中就犯了大忌，因为这个临时定义的名称，会被当做环境变量而将系统中的环境变量给覆盖，在环境变量下的命令们就像一群一直从那个独木桥回家的小羊，突然一天独木桥被砍断，他们就会觉得找不到回家的路了一样。")])]),s._v(" "),a("p",[s._v("此时，将 PATH 更改成 Path 或者其他，再回去执行刚才的脚本，发现就不会报这个错了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);