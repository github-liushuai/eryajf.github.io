(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{628:function(s,a,e){"use strict";e.r(a);var t=e(9),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用yum安装了epel，然后再安装软件就报错了。")]),s._v(" "),e("p",[s._v("调整yum源内容为如下：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("epel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Enterprise Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" - "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://download.fedoraproject.org/pub/epel/7/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-7&arch=$basearch")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("failovermethod")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("priority\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("epel-debuginfo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Enterprise Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" - "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v(" - Debug\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://download.fedoraproject.org/pub/epel/7/"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/debug\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-debug-7&arch=$basearch")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("failovermethod")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("priority\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("epel-source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Extra Packages "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Enterprise Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" - "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v(" - Source\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://download.fedoraproject.org/pub/epel/7/SRPMS\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-source-7&arch=$basearch")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("failovermethod")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("priority\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("blockquote",[e("p",[s._v("修改 去掉了 baseurl 前面的 # ，在 metalink 前面 加了 #")])])])}),[],!1,null,null,null);a.default=r.exports}}]);