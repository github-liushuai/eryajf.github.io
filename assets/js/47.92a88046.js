(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{633:function(s,a,t){"use strict";t.r(a);var e=t(9),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("公司服务端开发小伙伴来提需求啦，好像还很紧急的样子。宁静的日子也就这样被打破。据他描述，需求大概是：做一个可以咱们自己自由上传，而用户那边通过一个链接就可以下载 app 的服务。")]),s._v(" "),t("p",[s._v("经过讨论：想实现这个，一共有两部分，首先是本地将文件上传，其次是普通用户下载。")]),s._v(" "),t("p",[s._v("上传就用 sftp 了。")]),s._v(" "),t("p",[s._v("从技术角度来分析，几个要求：")]),s._v(" "),t("ul",[t("li",[s._v("1、从安全方面看，sftp 会更安全一点。")]),s._v(" "),t("li",[s._v("2、线上服务器提供在线服务，对用户需要控制，只能让用户在自己的 home 目录下活动。")]),s._v(" "),t("li",[s._v("3、用户只能使用 sftp，不能 ssh 到机器进行操作。")])]),s._v(" "),t("p",[s._v("提供 sftp 服务，可以用系统自带的 internal-sftp，也可以使用 vsftpd，这里需求不多，直接选用"),t("code",[s._v("internal-sftp")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("限制用户")]),s._v("只能在自己的 home 目录下活动，这里需要使用到"),t("code",[s._v("chroot")]),s._v("，openssh 4.8p1 以后都支持 chroot，我现在用的是 CentOS 6.3，自带的 openssh 已经是 5.3p1，足够了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -V     \n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看openssh的版本，如果低于4.8p1，需要自行升级安装，不在这里具体介绍了。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("假设，有一个名为"),t("code",[s._v("test")]),s._v("的组，这个组中的用户"),t("code",[s._v("只能使用sftp")]),s._v("，"),t("code",[s._v("不能使用ssh")]),s._v("，且 sftp 登录后只能在自己的 home 目录下活动。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2afac03587321605.jpg",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"_1、创建-sftp-组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建-sftp-组"}},[s._v("#")]),s._v(" 1、创建 sftp 组")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2、创建一个-sftp-用户-名为-erya。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建一个-sftp-用户-名为-erya。"}},[s._v("#")]),s._v(" 2、创建一个 sftp 用户，名为 "),t("code",[s._v("erya")]),s._v("。")]),s._v(" "),t("p",[s._v("（原来的教程是创建了一个系统用户，不能登陆，现在可以创建一个普通用户，然后通过秘钥进行登陆）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" erya\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" erya\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3、创建目录并分配权限。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建目录并分配权限。"}},[s._v("#")]),s._v(" 3、创建目录并分配权限。")]),s._v(" "),t("p",[s._v("test 组的用户的 home 目录统一指定到 / data/sftp 下，按用户名区分，这里先新建一个 erya 目录，然后指定 erya 的 home 为 / data/sftp/erya")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/sftp/erya\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -d /data/sftp/erya erya\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_4、配置-sshd-config。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、配置-sshd-config。"}},[s._v("#")]),s._v(" 4、配置 sshd_config。")]),s._v(" "),t("p",[s._v("编辑 ssh 配置文件 / etc/ssh/sshd_config。")]),s._v(" "),t("h3",{attrs:{id:"_1-注释如下行。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-注释如下行。"}},[s._v("#")]),s._v(" 1，注释如下行。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("  /etc/ssh/sshd_config  \n \nSubsystem      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v("    /usr/libexec/openssh/sftp-server      \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注释此行")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-添加如下几行。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加如下几行。"}},[s._v("#")]),s._v(" 2，添加如下几行。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Subsystem       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v("    internal-sftp  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这行指定使用sftp服务使用系统自带的internal-sftp")]),s._v("\n \nMatch Group "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这行用来匹配sftp组的用户，如果要匹配多个组，多个组之间用逗号分割")]),s._v("\n \n当然，也可以匹配用户\nMatch User mysftp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这样就可以匹配用户了，多个用户名之间也是用逗号分割，但我们这里按组匹配更灵活和方便")]),s._v("\n \nChrootDirectory /data/sftp/%u  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用chroot将用户的根目录指定到/data/sftp/%u，%u代表用户名，这样用户就只能在/data/sftp/%u下活动，chroot的含义，可以参考这里：http://www.ibm.com/developerworks/cn/linux/l-cn-chroot/")]),s._v("\n \nForceCommand    internal-sftp  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定sftp命令")]),s._v("\n \nAllowTcpForwarding no  \nX11Forwarding no  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这两行，如果不希望该用户能使用端口转发的话就加上，否则删掉")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("code",[s._v("注意：里边的注释是为了帮助理解，实际使用中可以去掉。")])]),s._v(" "),t("h2",{attrs:{id:"_5、设定-chroot-目录权限。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、设定-chroot-目录权限。"}},[s._v("#")]),s._v(" 5、设定 Chroot 目录权限。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root:test /data/sftp/erya\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /data/sftp/erya\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("错误的目录权限设定会导致在 log 中出现”"),t("code",[s._v("fatal: bad ownership or modes for chroot directory XXXXXX")]),s._v("” 的内容.")]),s._v(" "),t("h3",{attrs:{id:"_1-目录的权限设定有两个要点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-目录的权限设定有两个要点"}},[s._v("#")]),s._v(" 1，目录的权限设定有两个要点")]),s._v(" "),t("ul",[t("li",[s._v("1、由 ChrootDirectory 指定的目录开始一直往上到系统根目录为止的目录拥有者都只能是 root")]),s._v(" "),t("li",[s._v("2、由 ChrootDirectory 指定的目录开始一直往上到系统根目录为止都不可以具有群组写入权限")])]),s._v(" "),t("h3",{attrs:{id:"_2-所以遵循以上两个原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-所以遵循以上两个原则"}},[s._v("#")]),s._v(" 2，所以遵循以上两个原则")]),s._v(" "),t("ul",[t("li",[s._v("1）我们将 / data/sftp/erya 的所有者设置为了 root，所有组设置为 test")]),s._v(" "),t("li",[s._v("2）我们将 / data/sftp/erya 的权限设置为 755，所有者 root 有写入权限，而所有组 test 无写入权限")])]),s._v(" "),t("h2",{attrs:{id:"_6、建立-erya-用户登入后可写入的目录。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、建立-erya-用户登入后可写入的目录。"}},[s._v("#")]),s._v(" 6、建立 erya 用户登入后可写入的目录。")]),s._v(" "),t("p",[s._v("照上面设置后，在重启 sshd 服务后，用户 erya 已经可以登录，但使用 chroot 指定根目录后，根应该是无法写入的，所以要新建一个目录供 erya 上传文件。这个目录所有者为 erya，所有组为 test，所有者有写入权限，而所有组无写入权限。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data/sftp/erya/upload  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" erya:test /data/sftp/erya/upload  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /data/sftp/erya/upload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_7、重启-sshd-服务。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、重启-sshd-服务。"}},[s._v("#")]),s._v(" 7、重启 sshd 服务。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("到这里，我们就可以通过 sftp 客户端登录并可以上传文件到"),t("code",[s._v("upload")]),s._v("目录。")]),s._v(" "),t("p",[s._v("如果还是不能在此目录下上传文件，提示没有权限，检查 SElinux 是否关闭，可以使用"),t("code",[s._v("# setenforce 0")]),s._v("指令关闭临时 SElinux。\n或者修改"),t("code",[s._v("/etc/selinux/config")]),s._v("文件中的"),t("code",[s._v('SELINUX="" 为 disabled')]),s._v("，然后重启，进行永久关闭。")]),s._v(" "),t("p",[s._v("此时可以通过 Linux 命令行登陆刚才配置的 sftp 服务了。")]),s._v(" "),t("p",[s._v("常规登陆：sftp "),t("a",{attrs:{href:"mailto:erya@192.168.96.219"}},[s._v("erya@192.168.96.219")]),s._v("\n指定端口：sftp "),t("a",{attrs:{href:"mailto:erya@192.168.96.219"}},[s._v("erya@192.168.96.219")]),s._v(" -oPort=2222")]),s._v(" "),t("p",[s._v("也可以用过 file-zilla，sftp 等客户端登陆，进行上传下载。")]),s._v(" "),t("p",[s._v("然后是对下载端进行配置。")]),s._v(" "),t("h2",{attrs:{id:"_8-安装-nginx-服务。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-安装-nginx-服务。"}},[s._v("#")]),s._v(" 8，安装 nginx 服务。")]),s._v(" "),t("p",[s._v("进入到配置文件中，配置如下内容：")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n\t        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\t        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" sftp.erya.net")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\t        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),s._v(" utf-8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\t        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n\t                "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   /data/sftp/erya/upload")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\t                "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\t                "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex_exact_size")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\t                "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("autoindex_localtime")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\t          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n\t     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("code",[s._v("nginx -t")]),s._v(" 检测一下配置文件。\n"),t("code",[s._v("nginx -s reload")]),s._v("重新加载。")]),s._v(" "),t("p",[s._v("然后对刚才配置的域名进行解析配置。完成之后就可以到浏览器直接访问并进行下载了。")]),s._v(" "),t("p",[s._v("现在为了控制 sftp 授权的用户（"),t("code",[s._v("erya")]),s._v("）对服务器的权限，让他在连接工具中直接"),t("code",[s._v("免密码登陆")]),s._v("。")]),s._v(" "),t("p",[s._v("先在 root 用户下生成一对密钥对。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-keygen -t rsa")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后把公钥传给家目录下改名为"),t("code",[s._v("authorized_keys")]),s._v("，然后在登陆的时候，使用私钥文件，就实现了免密码登陆。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /root/.ssh/id_rsa.pub /home/erya/.ssh/authorized_keys\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果想通过传输的方式将公钥传输过去，那么有两种情况。")]),s._v(" "),t("h3",{attrs:{id:"_1-端口默认。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-端口默认。"}},[s._v("#")]),s._v(" 1，端口默认。")]),s._v(" "),t("p",[s._v("这种情况下，就直接使用 ssh-copy-id 的方式进行传输就好了。")]),s._v(" "),t("h3",{attrs:{id:"_2-指定端口。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-指定端口。"}},[s._v("#")]),s._v(" 2，指定端口。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("ssh-copy-id –I .ssh/id_rsa.pub “-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345")]),s._v(" abc@192.168.66.10”\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_9-sftp-客户端如何使用。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-sftp-客户端如何使用。"}},[s._v("#")]),s._v(" 9，sftp 客户端如何使用。")]),s._v(" "),t("p",[s._v("1， 将 / root/.ssh/id_rsa 文件发到本地，然后在 Xftp 的工具栏里导入。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/5f6c5c092f583e6c.gif",alt:"2018061805064048"}})]),s._v(" "),t("p",[s._v("2， 进行 erya 用户登陆的配置，IP，协议，端口，秘钥，用户名。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3f0daa6138c9e6b0.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("3， 配置完成，直接点击连接，这样用户就锁定在 upload 目录下了。")]),s._v(" "),t("p",[s._v("这样如果给别人来进行上传，直接让他在客户端，把秘钥文件发给他，就 ok 了。安全又卫生。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e7f6a9970ff90c21.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("现在，上传的文件，与 nginx 所访问到的目录文件保持了一致，只要在域名后边添加相应的文件名字，就可以直接进行下载了，把这样的效果交给服务端开发同学，只需要他这边把链接放到对应的地方就可以啦。")])])}),[],!1,null,null,null);a.default=n.exports}}]);