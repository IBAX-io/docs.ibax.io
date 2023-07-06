(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{332:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"server-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration-file"}},[t._v("#")]),t._v(" Fichier de configuration du serveur ")]),t._v(" "),s("p",[t._v("Dans cette section, nous allons introduire les paramètres dans le fichier de configuration du serveur.")]),t._v(" "),s("h2",{attrs:{id:"introduction-to-the-server-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-the-server-configuration-file"}},[t._v("#")]),t._v(" Introduction au fichier de configuration du serveur ")]),t._v(" "),s("p",[t._v("Le fichier de configuration du serveur définit la configuration du nœud d'IBAX.")]),t._v(" "),s("h2",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" Emplacement ")]),t._v(" "),s("p",[t._v("Ce fichier se trouve dans le répertoire de travail du serveur et porte le nom "),s("code",[t._v("config.toml")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"sections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sections"}},[t._v("#")]),t._v(" Sections ")]),t._v(" "),s("p",[t._v("Le fichier de configuration comprend les sections suivantes :")]),t._v(" "),s("blockquote",[s("p",[t._v("Section générale")])]),t._v(" "),s("p",[t._v("Il définit le répertoire de travail DataDir, le répertoire du premier bloc FirstBlockPath et d'autres paramètres.")]),t._v(" "),s("blockquote",[s("p",[t._v("[TCPServer]")])]),t._v(" "),s("p",[t._v("Il définit les paramètres du service TCP.")]),t._v(" "),s("p",[t._v("TCPServer est utilisé pour l'interaction réseau entre les nœuds.")]),t._v(" "),s("blockquote",[s("p",[t._v("[HTTP]")])]),t._v(" "),s("p",[t._v("Il définit les paramètres du service HTTP.")]),t._v(" "),s("p",[t._v("HTTPServer fournit des API RESTful.")]),t._v(" "),s("blockquote",[s("p",[t._v("[DB]")])]),t._v(" "),s("p",[t._v("Il définit les paramètres de la base de données du nœud PostgreSQL.")]),t._v(" "),s("blockquote",[s("p",[t._v("[StatsD]")])]),t._v(" "),s("p",[t._v("Il définit les paramètres du collecteur d'indicateurs d'opération du nœud StatsD.")]),t._v(" "),s("blockquote",[s("p",[t._v("[Centrifugo]")])]),t._v(" "),s("p",[t._v("Il définit les paramètres du service de notification Centrifugo.")]),t._v(" "),s("blockquote",[s("p",[t._v("[Log]")])]),t._v(" "),s("p",[t._v("Il définit les paramètres du service de journalisation Log.")]),t._v(" "),s("blockquote",[s("p",[t._v("[TokenMovement]")])]),t._v(" "),s("p",[t._v("Il définit les paramètres du service de circulation des jetons TokenMovement.")]),t._v(" "),s("h2",{attrs:{id:"an-example-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-example-configuration-file"}},[t._v("#")]),t._v(" Un fichier de configuration exemple ")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("PidFilePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data/go-ibax.pid"')]),t._v("\nLockFilePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data/go-ibax.lock"')]),t._v("\nDataDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data"')]),t._v("\nKeysDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data"')]),t._v("\nTempDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/folders/_l/9md_m4ms1651mf5pbng1y1xh0000gn/T/ibax-temp"')]),t._v("\nFirstBlockPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ibax-data/1block"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TLS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nTLSCert "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nTLSKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nOBSMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\nHTTPServerMaxBodySize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1048576")]),t._v("\nMaxPageGenerationTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\nNodesAddr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TCPServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7078")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7079")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ibax"')]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5432")]),t._v("\n  User "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postgres"')]),t._v("\n  Password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("\n  LockTimeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("StatsD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8125")]),t._v("\n  Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ibax"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Centrifugo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Secret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  LogTo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stdout"')]),t._v("\n  LogLevel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERROR"')]),t._v("\n  LogFormat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Syslog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Facility "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kern"')]),t._v("\n  Tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go-ibax"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TokenMovement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  Port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  Username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  Password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  To "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  From "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  Subject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);