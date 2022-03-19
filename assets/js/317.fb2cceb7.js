(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{899:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("kube-proxy 运行在所有 worker 节点上，，它监听 apiserver 中 service 和 Endpoint 的变化情况，创建路由规则来进行服务负载均衡。")]),s._v(" "),n("p",[s._v("本文档讲解部署 kube-proxy 的部署，使用 ipvs 模式。")]),s._v(" "),n("h2",{attrs:{id:"_1-创建-kube-proxy-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-kube-proxy-证书"}},[s._v("#")]),s._v(" 1，创建 kube-proxy 证书")]),s._v(" "),n("p",[s._v("创建证书签名请求：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-proxy-csr.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "CN": "system:kube-proxy",\n  "key": {\n    "algo": "rsa",\n    "size": 2048\n  },\n  "names": [\n    {\n      "C": "CN",\n      "ST": "BeiJing",\n      "L": "BeiJing",\n      "O": "k8s",\n      "OU": "4Paradigm"\n    }\n  ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("CN：指定该证书的 User 为 system:kube-proxy；")]),s._v(" "),n("li",[s._v("预定义的 RoleBinding system:node-proxier 将 User system:kube-proxy 与 Role system:node-proxier 绑定，该 Role 授予了调用 kube-apiserver Proxy 相关 API 的权限；")]),s._v(" "),n("li",[s._v("该证书只会被 kube-proxy 当做 client 证书使用，所以 hosts 字段为空；")])]),s._v(" "),n("p",[s._v("生成证书和私钥：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cfssl")]),s._v(" gencert -ca"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -ca-key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca-key.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -config"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca-config.json "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -profile"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes  kube-proxy-csr.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cfssljson -bare kube-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_2-创建和分发-kubeconfig-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建和分发-kubeconfig-文件"}},[s._v("#")]),s._v(" 2，创建和分发 kubeconfig 文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/k8s/bin/environment.sh\nkubectl config set-cluster kubernetes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --certificate-authority"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --server"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${KUBE_APISERVER}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\nkubectl config set-credentials kube-proxy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-certificate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --client-key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy-key.pem "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --embed-certs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\nkubectl config set-context default "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --cluster"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --kubeconfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\nkubectl config use-context default --kubeconfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kube-proxy.kubeconfig\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[s._v("--embed-certs=true：将 ca.pem 和 admin.pem 证书内容嵌入到生成的 kubectl-proxy.kubeconfig 文件中 (不加时，写入的是证书文件路径)；")])]),s._v(" "),n("p",[s._v("分发 kubeconfig 文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_name in ${NODE_NAMES[@]}\ndo\n    echo ">>> ${node_name}"\n    scp kube-proxy.kubeconfig k8s@${node_name}:/etc/kubernetes/\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_3-创建-kube-proxy-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-kube-proxy-配置文件"}},[s._v("#")]),s._v(" 3，创建 kube-proxy 配置文件")]),s._v(" "),n("p",[s._v("从 v1.10 开始，kube-proxy 部分参数可以配置文件中配置。可以使用 –write-config-to 选项生成该配置文件，或者参考 kubeproxyconfig 的类型定义源文件 ：https://github.com/kubernetes/kubernetes/blob/master/pkg/proxy/apis/kubeproxyconfig/types.go")]),s._v(" "),n("p",[s._v("创建 kube-proxy config 文件模板：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("kube-proxy.config.yaml.template "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\napiVersion: kubeproxy.config.k8s.io/v1alpha1\nbindAddress: ##NODE_IP##\nclientConnection:\n  kubeconfig: /etc/kubernetes/kube-proxy.kubeconfig\nclusterCIDR: "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLUSTER_CIDR}")]),s._v('\nhealthzBindAddress: ##NODE_IP##:10256\nhostnameOverride: ##NODE_NAME##\nkind: KubeProxyConfiguration\nmetricsBindAddress: ##NODE_IP##:10249\nmode: "ipvs"\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("ul",[n("li",[s._v("bindAddress: 监听地址；")]),s._v(" "),n("li",[s._v("clientConnection.kubeconfig: 连接 apiserver 的 kubeconfig 文件；")]),s._v(" "),n("li",[s._v("clusterCIDR: kube-proxy 根据 --cluster-cidr 判断集群内部和外部流量，指定 --cluster-cidr 或 --masquerade-all 选项后 kube-proxy 才会对访问 Service IP 的请求做 SNAT；")]),s._v(" "),n("li",[s._v("hostnameOverride: 参数值必须与 kubelet 的值一致，否则 kube-proxy 启动后会找不到该 Node，从而不会创建任何 ipvs 规则；")]),s._v(" "),n("li",[s._v("mode: 使用 ipvs 模式；")])]),s._v(" "),n("p",[s._v("为各节点创建和分发 kube-proxy 配置文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor (( i=0; i < 3; i++ ))\ndo \n    echo ">>> ${NODE_NAMES[i]}"\n    sed -e "s/##NODE_NAME##/${NODE_NAMES[i]}/" -e "s/##NODE_IP##/${NODE_IPS[i]}/" kube-proxy.config.yaml.template > kube-proxy-${NODE_NAMES[i]}.config.yaml\n    scp kube-proxy-${NODE_NAMES[i]}.config.yaml root@${NODE_NAMES[i]}:/etc/kubernetes/kube-proxy.config.yaml\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_4-创建和分发-kube-proxy-systemd-unit-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建和分发-kube-proxy-systemd-unit-文件"}},[s._v("#")]),s._v(" 4，创建和分发 kube-proxy systemd unit 文件")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-proxy.service "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=Kubernetes Kube-Proxy Server\nDocumentation=https://github.com/GoogleCloudPlatform/kubernetes\nAfter=network.target\n[Service]\nWorkingDirectory=/var/lib/kube-proxy\nExecStart=/opt/k8s/bin/kube-proxy "),n("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --config=/etc/kubernetes/kube-proxy.config.yaml "),n("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --alsologtostderr=true "),n("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --logtostderr=false "),n("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --log-dir=/var/log/kubernetes "),n("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --v=2\nRestart=on-failure\nRestartSec=5\nLimitNOFILE=65536\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("分发 kube-proxy systemd unit 文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_name in ${NODE_NAMES[@]}\ndo \n    echo ">>> ${node_name}"\n    scp kube-proxy.service root@${node_name}:/etc/systemd/system/\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_5-启动-kube-proxy-服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-kube-proxy-服务"}},[s._v("#")]),s._v(" 5，启动 kube-proxy 服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "mkdir -p /var/lib/kube-proxy"\n    ssh root@${node_ip} "mkdir -p /var/log/kubernetes && chown -R k8s /var/log/kubernetes"\n    ssh root@${node_ip} "systemctl daemon-reload && systemctl enable kube-proxy && systemctl start kube-proxy"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"_6-检查启动结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-检查启动结果"}},[s._v("#")]),s._v(" 6，检查启动结果")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh k8s@${node_ip} "systemctl status kube-proxy|grep Active"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("如果输出如下：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bash")]),s._v(" magic.sh\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":39:28 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":39:28 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":39:29 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("则正常，如果启动失败，检查日志：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("journalctl -xu kube-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_7-查看监听端口和-metrics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看监听端口和-metrics"}},[s._v("#")]),s._v(" 7，查看监听端口和 metrics")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k8s@kube-node1 abc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lnpt"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" kube-prox\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3:10256     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19061")]),s._v("/kube-proxy\ntcp        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3:10249     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19061")]),s._v("/kube-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("10249：http prometheus metrics port;")]),s._v(" "),n("li",[s._v("10256：http healthz port;")])]),s._v(" "),n("h2",{attrs:{id:"_8-查看-ipvs-路由规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-查看-ipvs-路由规则"}},[s._v("#")]),s._v(" 8，查看 ipvs 路由规则")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "/usr/sbin/ipvsadm -ln"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("输出：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bash")]),s._v(" magic.sh\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\nIP Virtual Server version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProt LocalAddress:Port Scheduler Flags\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1:443 rr persistent "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10800")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\nIP Virtual Server version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProt LocalAddress:Port Scheduler Flags\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1:443 rr persistent "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10800")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\nIP Virtual Server version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("size"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProt LocalAddress:Port Scheduler Flags\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1:443 rr persistent "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10800")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5:6443         Masq    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("可见将所有到 kubernetes cluster ip 443 端口的请求都转发到了 kube-apiserver 的 6443 端口。")])])}),[],!1,null,null,null);a.default=t.exports}}]);