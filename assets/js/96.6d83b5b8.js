(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{475:function(e,s,t){"use strict";t.r(s);var a=t(51),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"synchronized-monitoring-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-monitoring-tool"}},[e._v("#")]),e._v(" Synchronized Monitoring Tool")]),e._v(" "),t("p",[e._v("Desync_monitor is a special tool that can be used to verify whether the database on the specified node has been synchronized.")]),e._v(" "),t("p",[e._v("The tool can be used as a daemon or can be started to perform a one-time check.")]),e._v(" "),t("p",[e._v("The operating principle of the tool is based on the following:")]),e._v(" "),t("p",[e._v("1.Each block contains the hash of all changes of all transactions, request the specified node to provide its last block ID;\n2.Then request a block with this ID from all nodes and compare the above hashes;\n3.If the hashes are different, a synchronization error message will be sent to the email address specified in the command.")]),e._v(" "),t("h2",{attrs:{id:"location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" Location")]),e._v(" "),t("p",[e._v("The tool is located in the "),t("code",[e._v("tools/desync_monitor/")]),e._v(" directory.")]),e._v(" "),t("h2",{attrs:{id:"command-prompt-flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-prompt-flags"}},[e._v("#")]),e._v(" Command prompt flags")]),e._v(" "),t("p",[e._v("The following flags can be used from the command prompt:")]),e._v(" "),t("ul",[t("li",[e._v("confPath - Path of the configuration file. The default file name is "),t("code",[e._v("config.toml")]),e._v(";")]),e._v(" "),t("li",[e._v("nodesList - Node list of the requested block, separated by commas. The default is "),t("code",[e._v("127.0.0.1:7079")]),e._v(";")]),e._v(" "),t("li",[e._v("daemonMode - Started as a daemon and should be used when authentication is required every N seconds. This flag is set to "),t("code",[e._v("false")]),e._v(" by default;")]),e._v(" "),t("li",[e._v("queryingPeriod - If the tool is started as a daemon, this parameter sets the time interval (in seconds) between checks, "),t("code",[e._v("1")]),e._v(" second by default.")]),e._v(" "),t("li",[e._v("alertMessageTo – The email address to which synchronization warning errors will be sent.\n"),t("ul",[t("li",[e._v("alertMessageSubj - Message subject in the warning message, the "),t("code",[e._v("node synchronization")]),e._v(" problem by default;")]),e._v(" "),t("li",[e._v("alertMessageFrom - Address where the message was sent.")]),e._v(" "),t("li",[e._v("smtpHost - SMTP server host, used to send emails, the "),t("code",[e._v('""')]),e._v(" by default;")]),e._v(" "),t("li",[e._v("smtpPort - SMTP server port, used to send email messages, "),t("code",[e._v("25")]),e._v(" by default;")]),e._v(" "),t("li",[e._v("smtpUsername - SMTP server username, "),t("code",[e._v('""')]),e._v(" by default;")]),e._v(" "),t("li",[e._v("smtpPassword - SMTP server password, "),t("code",[e._v('""')]),e._v(" by default.")])])])]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("The tool uses a configuration file in toml format.")]),e._v(" "),t("p",[e._v("By default, it will look for the config.toml file in the folder where to start up the binary file.")]),e._v(" "),t("p",[e._v("The file path can be changed with the configPath flag.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('nodes_list = ["http://127.0.0.1:7079", "http://127.0.0.1:7002"]\n\n[daemon]\ndaemon = false\nquerying_period = 1\n\n[alert_message]\nto = ""\nsubject = "problem with xxx nodes"\nfrom = ""\n\n[smtp]\nhost = ""\nport = 25\nusername = ""\npassword = ""\n')])])]),t("h3",{attrs:{id:"nodes-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodes-list"}},[e._v("#")]),e._v(" nodes_list")]),e._v(" "),t("ul",[t("li",[e._v("nodes_list - List of nodes (hosts) requesting information.")])]),e._v(" "),t("h3",{attrs:{id:"daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[e._v("#")]),e._v(" [daemon]")]),e._v(" "),t("p",[e._v("Configuration of the daemon mode.")]),e._v(" "),t("ul",[t("li",[e._v("daemon_mode – A tool works as a daemon and performs synchronization checks.")]),e._v(" "),t("li",[e._v("querying_period - Time interval between synchronization checks.")])]),e._v(" "),t("h3",{attrs:{id:"alert-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alert-message"}},[e._v("#")]),e._v(" [alert_message]")]),e._v(" "),t("p",[e._v("Warning message parameters.")]),e._v(" "),t("ul",[t("li",[e._v("to - recipient's e-mail of synchronization error warning messages;")]),e._v(" "),t("li",[e._v("subject - message subject;")]),e._v(" "),t("li",[e._v("from - sender's e-mail.")])]),e._v(" "),t("h3",{attrs:{id:"smtp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smtp"}},[e._v("#")]),e._v(" [smtp]")]),e._v(" "),t("p",[e._v("Simple Mail Transfer Protocol (SMTP) server parameters, used to send synchronization error messages.")]),e._v(" "),t("ul",[t("li",[e._v("host – SMTP server hose;")]),e._v(" "),t("li",[e._v("port –SMTP server port;")]),e._v(" "),t("li",[e._v("username – SMTP server user name;")]),e._v(" "),t("li",[e._v("password –SMTP server password;")])])])}),[],!1,null,null,null);s.default=o.exports}}]);