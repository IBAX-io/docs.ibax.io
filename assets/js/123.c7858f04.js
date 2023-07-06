(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{395:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"server-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration-file"}},[t._v("#")]),t._v(" Server Configuration File ")]),t._v(" "),s("p",[t._v("In this section, we will introduce parameters in the server configuration file.")]),t._v(" "),s("h2",{attrs:{id:"introduction-to-the-server-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-the-server-configuration-file"}},[t._v("#")]),t._v(" Introduction to the server configuration file ")]),t._v(" "),s("p",[t._v("The server configuration file defines the node configuration of IBAX.")]),t._v(" "),s("h2",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" Location ")]),t._v(" "),s("p",[t._v("This file is located in the working directory of the server and is named "),s("code",[t._v("config.toml")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"sections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sections"}},[t._v("#")]),t._v(" Sections ")]),t._v(" "),s("p",[t._v("The configuration file consists the following sections:")]),t._v(" "),s("blockquote",[s("p",[t._v("general section")])]),t._v(" "),s("p",[t._v("It defines the working directory DataDir, the first block directory FirstBlockPath and other parameters.")]),t._v(" "),s("blockquote",[s("p",[t._v("[TCPServer]")])]),t._v(" "),s("p",[t._v("It defines the TCP service parameters.")]),t._v(" "),s("p",[t._v("TCPServer is used for the network interaction between nodes.")]),t._v(" "),s("blockquote",[s("p",[t._v("[HTTP]")])]),t._v(" "),s("p",[t._v("It defines the HTTP service parameters.")]),t._v(" "),s("p",[t._v("HTTPServer provides RESTful APIs.")]),t._v(" "),s("blockquote",[s("p",[t._v("[DB]")])]),t._v(" "),s("p",[t._v("It defines parameters of the PostgreSQL node database.")]),t._v(" "),s("blockquote",[s("p",[t._v("[StatsD]")])]),t._v(" "),s("p",[t._v("It defines parameters of the node operation indicator collector StatsD.")]),t._v(" "),s("blockquote",[s("p",[t._v("[Centrifugo]")])]),t._v(" "),s("p",[t._v("It defines parameters of the notification service Centrifugo.")]),t._v(" "),s("blockquote",[s("p",[t._v("[Log]")])]),t._v(" "),s("p",[t._v("It defines parameters of the log service Log.")]),t._v(" "),s("blockquote",[s("p",[t._v("[TokenMovement]")])]),t._v(" "),s("p",[t._v("It defines parameters of the token circulation service TokenMovement.")]),t._v(" "),s("h2",{attrs:{id:"an-example-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-example-configuration-file"}},[t._v("#")]),t._v(" An example configuration file ")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("PidFilePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data/go-ibax.pid"')]),t._v("\nLockFilePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data/go-ibax.lock"')]),t._v("\nDataDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data"')]),t._v("\nKeysDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data"')]),t._v("\nTempDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/folders/_l/9md_m4ms1651mf5pbng1y1xh0000gn/T/ibax-temp"')]),t._v("\nFirstBlockPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data/1block"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TLS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nTLSCert "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nTLSKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nOBSMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\nHTTPServerMaxBodySize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1048576")]),t._v("\nMaxPageGenerationTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\nNodesAddr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TCPServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7078")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7079")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ibax"')]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5432")]),t._v("\n  User "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postgres"')]),t._v("\n  Password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("\n  LockTimeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("StatsD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8125")]),t._v("\n  Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ibax"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Centrifugo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Secret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  LogTo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stdout"')]),t._v("\n  LogLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR"')]),t._v("\n  LogFormat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Syslog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Facility "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kern"')]),t._v("\n  Tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go-ibax"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TokenMovement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  Username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  Password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  To "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  From "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  Subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);