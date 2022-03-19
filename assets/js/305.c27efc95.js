(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{888:function(s,n,a){"use strict";a.r(n);var t=a(9),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-安装-cfssl-工具集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-cfssl-工具集"}},[s._v("#")]),s._v(" 1，安装 cfssl 工具集")]),s._v(" "),a("p",[s._v("从现在开始，所有的操作都在 kube-node1 的 k8s 用户家目录下执行。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pkg.cfssl.org/R1.2/cfssl_linux-amd64\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cfssljson_linux-amd64 /opt/k8s/bin/cfssljson\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cfssl_linux-amd64 /opt/k8s/bin/cfssl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cfssl-certinfo_linux-amd64 /opt/k8s/bin/cfssl-certinfo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /opt/k8s/bin/*\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/k8s/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2-创建根证书-ca"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建根证书-ca"}},[s._v("#")]),s._v(" 2，创建根证书 (CA)")]),s._v(" "),a("p",[s._v("CA 证书是集群所有节点共享的，只需要创建一个 CA 证书，后续创建的所有证书都由它签名。")]),s._v(" "),a("h3",{attrs:{id:"_1-创建配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建配置文件"}},[s._v("#")]),s._v(" 1，创建配置文件")]),s._v(" "),a("p",[s._v("CA 配置文件用于配置根证书的使用场景 (profile) 和具体参数 (usage，过期时间、服务端认证、客户端认证、加密等)，后续在签名其它证书时需要指定特定场景。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ca-config.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "signing": {\n    "default": {\n      "expiry": "87600h"\n    },\n    "profiles": {\n      "kubernetes": {\n        "usages": [\n            "signing",\n            "key encipherment",\n            "server auth",\n            "client auth"\n        ],\n        "expiry": "87600h"\n      }\n    }\n  }\n}\nEOF')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("ul",[a("li",[s._v("signing：表示该证书可用于签名其它证书，生成的 ca.pem 证书中 CA=TRUE；")]),s._v(" "),a("li",[s._v("server auth：表示 client 可以用该该证书对 server 提供的证书进行验证；")]),s._v(" "),a("li",[s._v("client auth：表示 server 可以用该该证书对 client 提供的证书进行验证；")])]),s._v(" "),a("h3",{attrs:{id:"_2-创建证书签名请求文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建证书签名请求文件"}},[s._v("#")]),s._v(" 2，创建证书签名请求文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ca-csr.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "CN": "kubernetes",\n  "key": {\n    "algo": "rsa",\n    "size": 2048\n  },\n  "names": [\n    {\n      "C": "CN",\n      "ST": "BeiJing",\n      "L": "BeiJing",\n      "O": "k8s",\n      "OU": "4Paradigm"\n    }\n  ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("CN：Common Name，kube-apiserver 从证书中提取该字段作为请求的用户名 (User Name)，浏览器使用该字段验证网站是否合法；")]),s._v(" "),a("li",[s._v("O：Organization，kube-apiserver 从证书中提取该字段作为请求用户所属的组 (Group)；")]),s._v(" "),a("li",[s._v("kube-apiserver 将提取的 User、Group 作为 RBAC 授权的用户标识；")])]),s._v(" "),a("h3",{attrs:{id:"_3-生成-ca-证书和私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成-ca-证书和私钥"}},[s._v("#")]),s._v(" 3，生成 CA 证书和私钥")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cfssl")]),s._v(" gencert -initca ca-csr.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cfssljson -bare ca\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/11/23 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":46:19 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" generating a new CA key and certificate from CSR\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/11/23 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":46:19 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" generate received request\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/11/23 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":46:19 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" received CSR\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/11/23 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":46:19 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" generating key: rsa-2048\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/11/23 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":46:20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" encoded CSR\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("/11/23 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":46:20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" signed certificate with serial number "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("652945881726401134885162916242742430723518895911")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ls")]),s._v(" ca*\nca-config.json  ca.csr  ca-csr.json  ca-key.pem  ca.pem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_3-分发证书文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-分发证书文件"}},[s._v("#")]),s._v(" 3，分发证书文件")]),s._v(" "),a("p",[s._v("将生成的 CA 证书、秘钥文件、配置文件拷贝到所有节点的 /etc/kubernetes/cert 目录下。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}"\n    scp ca*.pem ca-config.json k8s@${node_ip}:/etc/kubernetes/cert\ndone\nEOF')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("k8s 账户需要有读写 /etc/kubernetes 目录及其子目录文件的权限")])]),s._v(" "),a("h2",{attrs:{id:"_4-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[s._v("#")]),s._v(" 4，参考")]),s._v(" "),a("ul",[a("li",[s._v("各种 CA 证书类型："),a("a",{attrs:{href:"https://github.com/kubernetes-incubator/apiserver-builder/blob/master/docs/concepts/auth.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/kubernetes-incubator/apiserver-builder/blob/master/docs/concepts/auth.md"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);