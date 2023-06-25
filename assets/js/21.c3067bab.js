(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{296:function(e,t,n){"use strict";n.r(t);var i=n(14),r=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"server-configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration-file"}},[e._v("#")]),e._v(" Serverkonfigurationsdatei ")]),e._v(" "),t("p",[e._v("In diesem Abschnitt stellen wir Parameter in der Serverkonfigurationsdatei vor.")]),e._v(" "),t("h2",{attrs:{id:"introduction-to-the-server-configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-the-server-configuration-file"}},[e._v("#")]),e._v(" Einführung in die Serverkonfigurationsdatei ")]),e._v(" "),t("p",[e._v("Die Serverkonfigurationsdatei definiert die Knotenkonfiguration von IBAX.")]),e._v(" "),t("h2",{attrs:{id:"location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" Standort ")]),e._v(" "),t("p",[e._v("Diese Datei befindet sich im Arbeitsverzeichnis des Servers und heißt "),t("code",[e._v("config.toml")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"sections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sections"}},[e._v("#")]),e._v(" Abschnitte ")]),e._v(" "),t("p",[e._v("Die Konfigurationsdatei besteht aus den folgenden Abschnitten:")]),e._v(" "),t("blockquote",[t("p",[e._v("Allgemeiner Teil")])]),e._v(" "),t("p",[e._v("Es definiert das Arbeitsverzeichnis DataDir, das erste Blockverzeichnis FirstBlockPath und andere Parameter.")]),e._v(" "),t("blockquote",[t("p",[e._v("[TCP-Server]")])]),e._v(" "),t("p",[e._v("Es definiert die TCP-Dienstparameter.")]),e._v(" "),t("p",[e._v("TCPServer wird für die Netzwerkinteraktion zwischen Knoten verwendet.")]),e._v(" "),t("blockquote",[t("p",[e._v("[HTTP]")])]),e._v(" "),t("p",[e._v("Es definiert die HTTP-Dienstparameter.")]),e._v(" "),t("p",[e._v("HTTPServer bietet RESTful-APIs.")]),e._v(" "),t("blockquote",[t("p",[e._v("[DB]")])]),e._v(" "),t("p",[e._v("Es definiert Parameter der PostgreSQL-Knotendatenbank.")]),e._v(" "),t("blockquote",[t("p",[e._v("[StatistikD]")])]),e._v(" "),t("p",[e._v("Es definiert Parameter des Kollektors StatsD für die Knotenbetriebsanzeige.")]),e._v(" "),t("blockquote",[t("p",[e._v("[Zentrifuge]")])]),e._v(" "),t("p",[e._v("Es definiert Parameter des Benachrichtigungsdienstes Centrifugo.")]),e._v(" "),t("blockquote",[t("p",[e._v("[Protokoll]")])]),e._v(" "),t("p",[e._v("Es definiert Parameter des Protokolldienstes Log.")]),e._v(" "),t("blockquote",[t("p",[e._v("[TokenBewegung]")])]),e._v(" "),t("p",[e._v("Es definiert Parameter des Token-Zirkulationsdienstes TokenMovement.")]),e._v(" "),t("h2",{attrs:{id:"an-example-configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-example-configuration-file"}},[e._v("#")]),e._v(" Eine Beispielkonfigurationsdatei ")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PidFilePath = "/IBAX-data/go-ibax.pid"\nLockFilePath = "/IBAX-data/go-ibax.lock"\nDataDir = "/IBAX-data"\nKeysDir = "/IBAX-data"\nTempDir = "/var/folders/_l/9md_m4ms1651mf5pbng1y1xh0000gn/T/IBAX-temp"\nFirstBlockPath = "/IBAX-data/1block"\nTLS = false\nTLSCert = ""\nTLSKey = ""\nOBSMode = "none"\nHTTPServerMaxBodySize = 1048576\nMaxPageGenerationTime = 3000\nNodesAddr = []\n\n[TCPServer]\n  Host = "127.0.0.1"\n  Port = 7078\n\n[HTTP]\n  Host = "127.0.0.1"\n  Port = 7079\n\n[DB]\n  Name = "IBAX"\n  Host = "127.0.0.1"\n  Port = 5432\n  User = "postgres"\n  Password = "123456"\n  LockTimeout = 5000\n\n[StatsD]\n  Host = "127.0.0.1"\n  Port = 8125\n  Name = "IBAX"\n\n[Centrifugo]\n  Secret = "127.0.0.1"\n  URL = "127.0.0.1"\n\n[Log]\n  LogTo = "stdout"\n  LogLevel = "ERROR"\n  LogFormat = "text"\n  [Log.Syslog]\n  Facility = "kern"\n  Tag = "go-ibax"\n\n[TokenMovement]\n  Host = ""\n  Port = 0\n  Username = ""\n  Password = ""\n  To = ""\n  From = ""\n  Subject = ""\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);