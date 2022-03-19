(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{720:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("网上有很多文章，都是在介绍了部署之后，就完事儿了，真正系统认真地把实际应用场景中的配置内容分享的，则是少之又少，有分享的，也都是含糊不清，让人难以学习，这里我特别将日常生产中常用的一些软件配置方式，一一过了一遍，并整理分享，愿阅读本篇文章的你能有所收获。")]),s._v(" "),a("p",[s._v("另外，我所分享出来的，可能只是我个人的一种思路方案，如果您有更加简便合理的方案，欢迎留言分享交流！")]),s._v(" "),a("h2",{attrs:{id:"_1-zabbix配置ldap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-zabbix配置ldap"}},[s._v("#")]),s._v(" 1，zabbix配置LDAP")]),s._v(" "),a("p",[s._v("zabbix在配置起来是比较简单的，我们直接使用最外层的用户授权即可，亦即不用过分深入再对用户进行分组管理，因为zabbix自身还会有一层授权控制。")]),s._v(" "),a("p",[s._v("那么所有的配置如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/fa1a09754ff3cf27.jpg",alt:"image-20191020233943407"}})]),s._v(" "),a("p",[s._v("说明：")]),s._v(" "),a("ul",[a("li",[s._v("认证方式：选择LDAP。")]),s._v(" "),a("li",[s._v("LDAP主机：可以填IP，这里我写了配置LDAP时用的域名，注意记得将此域名写入到本机hosts解析。")]),s._v(" "),a("li",[s._v("端口：默认389.")]),s._v(" "),a("li",[s._v("基于DN：此处填写 "),a("code",[s._v("ou=People,dc=eryajf,dc=net")]),s._v("，表示用户基于People这一分组下维护。")]),s._v(" "),a("li",[s._v("搜索属性：uid。")]),s._v(" "),a("li",[s._v("绑定DN：此处填写 "),a("code",[s._v("cn=admin,dc=eryajf,dc=net")]),s._v("，表示绑定到根域上去。")]),s._v(" "),a("li",[s._v("登陆：Admin，这个用户与zabbix管理账户重叠，但是要注意需要先在LDAP中创建此用户，并设置密码。")]),s._v(" "),a("li",[s._v("用户密码：将上一步创建用户的密码写在这里，点击测试，如果没毛病，将会通过测试。")])]),s._v(" "),a("h2",{attrs:{id:"_2-gitlab。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-gitlab。"}},[s._v("#")]),s._v(" 2，Gitlab。")]),s._v(" "),a("p",[s._v("默认情况下，Gitlab没有开启ldap的认证，这个功能需要通过配置文件来启用，所以在现有Gitlab中，往配置文件里边添加如下配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/gitlab/gitlab.rb\nexternal_url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://10.133.205.206'")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_enable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_address'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smtp.163.com"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_user_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Linuxlql@163.com'")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxxx"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_domain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"smtp.163.com"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_authentication'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" :plain\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gitlab_rails['smtp_authentication'] = \"login\"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gitlab_rails['smtp_enable_starttls_auto'] = true")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp_enable_starttls_auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_email_from'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Linuxlql@163.com"')]),s._v("\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git_user_email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Linuxlql@163.com"')]),s._v("\ngit_data_dir "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/git"')]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ldap_enabled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ldap_servers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OpenLDAP'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随便自定义")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'host'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10.3.0.42'")]),s._v(",   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ldap的server地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'port'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("389")]),s._v(",    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ldap端口")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uid'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sn'")]),s._v(",    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置为cn或者sn都可以，但要注意用户名称将会以此处配置为依据")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'encryption'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'plain'")]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加密")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bind_dn'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cn=admin,dc=eryajf,dc=net'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 管理员账号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eryajf@456'")]),s._v(",   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 管理员密码")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'active_directory'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" false,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'base'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ou=People,dc=eryajf,dc=net'")]),s._v(",   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 核心配置，表示从哪一层读取用户信息")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'allow_username_or_email_login'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" true,  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否启用邮件作为用户名登陆")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'verify_certificates'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" true,    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("配置添加之后，依旧像安装时候那样，重载一下配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gitlab-ctl reconfigure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("重载过程如果不报错，可以使用如下命令验证功能是否可用：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ gitlab-rake gitlab:ldap:check\nChecking LDAP "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nLDAP: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Server: ldapmain\nLDAP authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Success\nLDAP "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" with access to your GitLab server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("only showing the first "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    DN: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test01,ou"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("people,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net    cn: ceshi\n    DN: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test02,ou"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("people,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net    cn: test02\n    DN: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test03,ou"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("people,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net    cn: test03\n    DN: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin,ou"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("people,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net     cn: Admin\n    DN: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("liql,ou"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("people,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net  cn: liql\nChecking LDAP "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Finished\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("可以看到会刷出来当前所有的用户，此时配置就已经完成了，再次访问Gitlab，发现已经多了一个ldap登陆的选项。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9587428f3f28f0a4.jpg",alt:"image-20191024192805089"}})]),s._v(" "),a("p",[s._v("使用ldap用户名密码进行登陆即可，此时登陆进去是没有任何项目的权限，如果需要某权限，可以对用户进行组或者单项目的授权。")]),s._v(" "),a("h2",{attrs:{id:"_3-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-jenkins"}},[s._v("#")]),s._v(" 3，Jenkins")]),s._v(" "),a("p",[s._v("以上两种应用，都是基于最外层的用户进行管理的，并没有再细化分组，这种配置方式，是有其原因的，因为两者都是在默认登陆之后，用户无任何权限，需要通过管理员重新授权，从而获得相应的权限。")]),s._v(" "),a("p",[s._v("而Jenkins就不太一样了，Jenkins启用了ldap登陆之后，默认是登录用户就是管理员权限，尽管我们还可以通过更细化权限划分的插件来实现管控，但是这仍然让人觉得不那么优雅。")]),s._v(" "),a("p",[s._v("因此，在Jenkins这里，打算采用基于应用分组的方式进行配置。")]),s._v(" "),a("p",[s._v("配置之前，首先创建用户以及应用组，那么授权的时候，直接针对应用组授权即可。")]),s._v(" "),a("p",[s._v("创建普通用户：")]),s._v(" "),a("ul",[a("li",[s._v("在People之下点击创建新条目")]),s._v(" "),a("li",[s._v("模板选择默认")]),s._v(" "),a("li",[a("strong",[s._v("ObjectClasses")]),s._v("选择"),a("strong",[s._v("inetOrgPerson")]),s._v("，然后点击继续")]),s._v(" "),a("li",[s._v("从上而下填写，RDN选择 "),a("code",[s._v("User Name(uid)")])]),s._v(" "),a("li",[s._v("然后开始正式的人员信息填写\n"),a("ul",[a("li",[s._v("cn：zhangs")]),s._v(" "),a("li",[s._v("sn：zhangs")]),s._v(" "),a("li",[s._v("displayName：张三")]),s._v(" "),a("li",[s._v("电子邮件：zhangs@qq.com")]),s._v(" "),a("li",[s._v("ou：People")]),s._v(" "),a("li",[s._v("密码：123456")]),s._v(" "),a("li",[s._v("User Name：zhangs")])])])]),s._v(" "),a("p",[s._v("然后点击创建，提交之后，一个普通用户就创建成功了。一般情况下，应用直接通过这一层来管理用户即可。")]),s._v(" "),a("p",[s._v("但是有些情况下，再另外拉出来一个分组，从软件的角度来分组，会更好一些。")]),s._v(" "),a("p",[s._v("创建一个应用组：")]),s._v(" "),a("ul",[a("li",[s._v("在Group之下创建新条目")]),s._v(" "),a("li",[s._v("模板选择默认")]),s._v(" "),a("li",[a("strong",[s._v("ObjectClasses")]),s._v("选择"),a("strong",[s._v("groupOfNames")]),s._v("，然后点击继续")]),s._v(" "),a("li",[s._v("从上而下填写，RDN选择 "),a("code",[s._v("cn(cn)")])]),s._v(" "),a("li",[s._v("然后开始填写组信息\n"),a("ul",[a("li",[s._v("cn：jenkins")]),s._v(" "),a("li",[s._v("member：点击后边的搜索框，选择将要包含的用户")])])])]),s._v(" "),a("p",[s._v("然后点击创建，提交之后，就创建了一个jenkins组，配置ldap的时候，可以基于这个组来进行管理。")]),s._v(" "),a("p",[s._v("创建完成后的架构模式如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2c6fe417dcbebc61.jpg",alt:"image-20191024210149443"}})]),s._v(" "),a("p",[s._v("可以看到，此时在Jenkins这个组里边，加入了三个用户，实际生产当中，原有用户应该已经存在，此时可以新增群组，然后将需要访问Jenkins应用的用户，加入进来，而没有加入这个组的用户，将无法访问。")]),s._v(" "),a("p",[s._v("下边进入正式配置，新版本的Jenkins已经默认集成了ldap，因此不需要额外安装插件，直接点击"),a("code",[s._v("系统管理")]),s._v("—>"),a("code",[s._v("Configure Global Security")]),s._v("，按照下边的内容，进行配置即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/f7a177e07970d420.jpg",alt:"image-20191024210039994"}})]),s._v(" "),a("p",[s._v("配置完成，下边会有一个test，此时可以用其中一个账号密码进行测试，看到如下输出，则说明配置成功：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7ab975446072e495.jpg",alt:"image-20191024210612711"}})]),s._v(" "),a("p",[s._v("保存之后，就可以通过ldap当中，Jenkins组内的用户名密码进行登陆了，这里只是解决了用户能够登陆Jenkins的问题，具体Jenkins中详细的用户权限分配，可以参考"),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/1445.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章进行配置"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_4-jumpserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-jumpserver"}},[s._v("#")]),s._v(" 4，jumpserver")]),s._v(" "),a("p",[s._v("直接进入到jumpserver的系统设置里边，如下内容，进行配置，几项工具配置下来，基本上都熟悉了各个配置的概念了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2f51411f4b354ec9.jpg",alt:"image-20191025163733208"}})]),s._v(" "),a("p",[s._v("配置完毕，可以点击测试连接，会看到导入几个用户的提示，然后点击提交配置，提交之后，可以点击一键导入，将对应用户导入进来：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2dc87514007ccf87.jpg",alt:"image-20191025163956397"}})]),s._v(" "),a("p",[s._v("然后点击导入，即可将ldap中的用户导入到jumpserver中了。")]),s._v(" "),a("h2",{attrs:{id:"_5-harbor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-harbor"}},[s._v("#")]),s._v(" 5，harbor")]),s._v(" "),a("p",[s._v("常规来讲，harbor的认证，也像zabbix那样，只取用ldap最外层即可，也就是People下的所有人，都可以登录harbor，然后再针对不同的项目，对不同的用户进行授权即可。")]),s._v(" "),a("p",[s._v("这种配置比较简单，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ea296e7fcaa3b862.jpg",alt:"image-20191029135235857"}})]),s._v(" "),a("p",[s._v("配置完成之后，可以点击一下测试看看效果，如果成功，则可以保存启用。")]),s._v(" "),a("p",[s._v("当然，如果人员数量很大，也可以走按组分配的方向，可以基于如上配置进行：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8314ac21dcdc645f.jpg",alt:"image-20191029140020957"}})]),s._v(" "),a("p",[s._v("同样，先测试是否可用，成功之后点击保存即可。保存之后，可以用其中一个用户进行登陆验证，可以在用户设置里边看到来自于LDAP。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/97d8bda4e5ee609a.jpg",alt:"image-20191029140226307"}})]),s._v(" "),a("h2",{attrs:{id:"_6-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-nginx"}},[s._v("#")]),s._v(" 6，NGINX")]),s._v(" "),a("h3",{attrs:{id:"_1-基于全员的认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基于全员的认证"}},[s._v("#")]),s._v(" 1，基于全员的认证")]),s._v(" "),a("p",[s._v("NGINX基于ldap的认证，一旦出手，谁与争锋，日常业务当中，有太多页面内容，通过NGINX代理，有时需要添加认证以提高安全，使用NGINX的密码策略，又极不方便，容易出现一个账号多人使用的情况，而今接入到ldap，所有权限回归到ldap中，简直不要太优雅。")]),s._v(" "),a("p",[s._v("NGINX基于ldap的认证需要 "),a("code",[s._v("nginx-auth-ldap")]),s._v("模块儿，可以在原有已经在用的NGINX中，添加进去，或者直接全新的NGINX进行配置。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /opt\ngit clone https://github.com/nginxinc/nginx-ldap-auth\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后编译安装NGINX：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf nginx-1.14.0.tar.gz\nyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib zlib-devel openssl openssl-devel pcre pcre-devel libxslt-devel \n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module --with-http_realip_module --add-module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/nginx-auth-ldap\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后进入正式配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" /usr/local/nginx/conf/nginx.conf\nworker_processes  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nevents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    sendfile        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    log_format json "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("escape")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{ "remote_addr": "$remote_addr",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"@timestamp":"$time_iso8601",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_uri": "$request_uri",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"verb": "$request_method",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"httpversion": "$server_protocol",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"response": "$status", \'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"body_bytes_sent": "$body_bytes_sent", \'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"referrer": "$http_referer", \'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"user_agent": "$http_user_agent", \'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"server_name": "$host",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_time": "$request_time",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"upstream_response_time": "$upstream_response_time",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"realpath_root": "$realpath_root",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"cookie": "$http_cookie",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_body": "$request_body",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"nginx_version": "$nginx_version",\'')]),s._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"scheme": "$scheme"}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    access_log /data/log/tmp.log json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    error_log /data/log/error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ldap_server "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url ldap://10.3.0.42:389/DC"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eryajf,DC"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("net?cn?sub?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("objectClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    binddn "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn=admin,dc=eryajf,dc=net"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    binddn_passwd "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123465")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        require valid_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    ldap_server test_ldap1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ldap://10.3.0.42:389/DC=eryajf,DC=net?uid?sub?(&(objectClass=organizationalPerson))"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        binddn "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn=admin,dc=eryajf,dc=net"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        binddn_passwd "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        require valid_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#group_attribute People;")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#group_attribute_is_dn on;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#require group "cn=jenkins,ou=Group,dc=eryajf,dc=net";')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            auth_ldap "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Forbidden"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            auth_ldap_servers test_ldap1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            root   /usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])]),a("p",[s._v("说明：最开始我使用的 "),a("code",[s._v("test")]),s._v("的配置，对于许多地方并没有过于在意，但是在请求的时候，总是进入死循环，输入用户名密码之后又跳入到了让输入用户名密码的界面，然后错误日志里边打印了一条："),a("code",[s._v("[error] 11539#0: *388 http_auth_ldap: Could not find user DN,")]),s._v("，然后在官方issue中，看到一个不错的解答：https://github.com/kvspb/nginx-auth-ldap/issues/133")]),s._v(" "),a("p",[s._v("最后根据回答里边说明的，结合自己配置的实际情况，使用了 "),a("code",[s._v("test_ldap1")]),s._v("这个server，整体验证通过。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/409ecc5c1766332b.gif",alt:"Oct-30-2019 17-18-38"}})]),s._v(" "),a("p",[s._v("然后就可以利用这种思路，给很多web界面套上这种管理方案了。")]),s._v(" "),a("h3",{attrs:{id:"_2-基于特定组的认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于特定组的认证"}},[s._v("#")]),s._v(" 2，基于特定组的认证")]),s._v(" "),a("p",[s._v("以上配置用于验证用户层级的权限，也就是配置之后，所有的用户都可以访问对应的域名，这样似乎仍然有一丢丢不理想，对于一些重要的域名而言，显得权限放开的过宽。于是我想到通过组来进行权限的控制，这个配置的成型，同样也是经历千辛万苦各方验证而来，网上真正找到可用的，并不多，因此能看到这个地方的朋友，绝对是有缘了。")]),s._v(" "),a("p",[s._v("这个配置如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ldap_server test_ldap1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ldap://10.3.0.42:389/DC=eryajf,DC=net?uid?sub?(&(objectClass=organizationalPerson))"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    binddn "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn=admin,dc=eryajf,dc=net"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    binddn_passwd "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf@456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    group_attribute member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    group_attribute_is_dn on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    require group "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cn=jenkins,ou=Group,dc=eryajf,dc=net"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        auth_ldap "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Forbidden"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        auth_ldap_servers test_ldap1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        root   /usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("这样就把权限控制在 "),a("code",[s._v("jenkins")]),s._v("这个组内了，其他人访问的时候，是被拒绝的。")]),s._v(" "),a("p",[s._v("如果你当前使用的是openresty，那么可以"),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/5019.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考这篇文章进行模块的添加"),a("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);