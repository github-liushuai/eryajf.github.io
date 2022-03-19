(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{665:function(s,a,t){"use strict";t.r(a);var e=t(9),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1、安装配置-alertmanager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装配置-alertmanager"}},[s._v("#")]),s._v(" 1、安装配置 Alertmanager")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf alertmanager-0.15.2.linux-amd64.tar.gz -C /usr/local/\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" alertmanager-0.15.2.linux-amd64/ alertmanager\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_2-创建启动文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建启动文件"}},[s._v("#")]),s._v(" 2，创建启动文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/alertmanager.service \n添加如下内容：\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("alertmanager\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://github.com/prometheus/alertmanager\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prometheus\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/alertmanager/alertmanager --config.file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/alertmanager/alert-test.yml\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("Alertmanager 安装目录下默认有 alertmanager.yml 配置文件，可以创建新的配置文件，在启动时指定即可。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/alertmanager\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" alert-test.yml\nglobal:\n  smtp_smarthost: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp.163.com:25'")]),s._v("\n  smtp_from: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Linuxlql@163.com'")]),s._v("\n  smtp_auth_username: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Linuxlql@163.com'")]),s._v("\n  smtp_auth_password: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123546'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是邮箱的授权密码，不是登录密码")]),s._v("\n  smtp_require_tls: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\ntemplates:\n  - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/alertmanager/template/*.tmpl'")]),s._v("\nroute:\n  group_by: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alertname'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cluster'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'service'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 10m\n  receiver: default-receiver\nreceivers:\n- name: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default-receiver'")]),s._v("\n  email_configs:\n  - to: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'liqilong@edspay.com'")]),s._v("\n    html: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n    headers: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Subject: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[WARN] 报警邮件 test"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("邮箱一开始使用的是公司的邮箱，结果在后边验证的时候，总是会报错"),t("code",[s._v('level=error ts=2019-01-26T06:21:59.062483579Z caller=notify.go:332 component=dispatcher msg="Error on notify" err="*smtp.plainAuth failed: unencrypted connection"')]),s._v("，也在"),t("a",{attrs:{href:"https://github.com/gjmzj/kubeasz/issues/448",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("看了一些人踩坑的报告，试验了 25、465、587 端口，发现均无效果，最后改成 163 邮箱，直接就生效了。")]),s._v(" "),t("ul",[t("li",[s._v("smtp_smarthost：是用于发送邮件的邮箱的 SMTP 服务器地址 + 端口；")]),s._v(" "),t("li",[s._v("smtp_auth_password：是发送邮箱的授权码而不是登录密码；")]),s._v(" "),t("li",[s._v("smtp_require_tls：不设置的话默认为 true，当为 true 时会有 starttls 错误，为了简单这里设置为 false；")]),s._v(" "),t("li",[s._v("templates：指出邮件的模板路径；")]),s._v(" "),t("li",[s._v("receivers 下 html 指出邮件内容模板名，这里模板名为 “alert.html”，在模板路径中的某个文件中定义。")]),s._v(" "),t("li",[s._v("headers：为邮件标题；")])]),s._v(" "),t("h3",{attrs:{id:"_3-配置告警规则。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置告警规则。"}},[s._v("#")]),s._v(" 3，配置告警规则。")]),s._v(" "),t("p",[s._v("配置 rule.yml。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/prometheus\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" rule.yml\ngroups:\n- name: alert-rules.yml\n  rules:\n  - alert: InstanceStatus "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alert 名字")]),s._v("\n    expr: up"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("job"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux-node01"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断条件")]),s._v("\n    for: 10s "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 条件保持 10s 才会发出 alter")]),s._v("\n    labels: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 alert 的标签")]),s._v("\n      severity: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"critical"')]),s._v("\n    annotations:  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alert 的其他标签，但不用于标识 alert")]),s._v("\n      description: 服务器  已当机超过 20s\n      summary: 服务器  运行状态\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("在 prometheus.yml 中指定 rule.yml 的路径")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" prometheus.yml \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# my global config")]),s._v("\nglobal:\n  scrape_interval:     15s "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Set the scrape interval to every 15 seconds. Default is every 1 minute.")]),s._v("\n  evaluation_interval: 15s "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Evaluate rules every 15 seconds. The default is every 1 minute.")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrape_timeout is set to the global default (10s).")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Alertmanager configuration")]),s._v("\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      - localhost:9093 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里修改为 localhost")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.")]),s._v("\nrule_files:\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - "first_rules.yml"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - "second_rules.yml"')]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/prometheus/rule.yml"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A scrape configuration containing exactly one endpoint to scrape:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Here it's Prometheus itself.")]),s._v("\nscrape_configs:\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.")]),s._v("\n  - job_name: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prometheus'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# metrics_path defaults to '/metrics'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scheme defaults to 'http'.")]),s._v("\n    static_configs:\n    - targets: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9090'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost:9100'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  - job_name: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'111.4'")]),s._v("\n    scrape_interval: 5s\n    static_configs:\n    - targets: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.111.4:9100'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("p",[s._v("重启 Prometheus 服务：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R prometheus.prometheus /usr/local/prometheus/rule.yml\n$ systemctl restart prometheus\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_4-编写邮件模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-编写邮件模板"}},[s._v("#")]),s._v(" 4，编写邮件模板")]),s._v(" "),t("p",[s._v("注意：文件后缀为 tmpl")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -pv /alertmanager/template/\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /alertmanager/template/alert.tmpl\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("table"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("报警名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("开始时间"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/tr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/tr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/table"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"_5-启动-alertmanager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-alertmanager"}},[s._v("#")]),s._v(" 5，启动 Alertmanager")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R prometheus.prometheus /usr/local/alertmanager\n$ systemctl daemon-reload\n$ systemctl start alertmanager.service\n$ systemctl status alertmanager.service\n$ ss -tnl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9093")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_6-验证效果。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-验证效果。"}},[s._v("#")]),s._v(" 6，验证效果。")]),s._v(" "),t("p",[s._v("此时到管理界面可以看到如下信息：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2c56e4cd40852c98.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("然后停止 111.4 节点上的 node_exporter 服务，然后再看效果。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ systemctl stop node_exporter.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9b5eafaa31412097.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("接着邮箱应该会收到邮件：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/b52717b8a86c810d.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);