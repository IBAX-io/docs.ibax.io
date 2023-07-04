(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{324:function(e,t,a){"use strict";a.r(t);var i=a(14),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"the-ibax-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-ibax-network"}},[e._v("#")]),e._v(" The IBAX Network ")]),e._v(" "),t("p",[e._v("In this section, we will brief you how to use IBAX.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#the-ibax-network"}},[e._v("The IBAX Network")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#application-developers"}},[e._v("Application developers")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#ecolib-members"}},[e._v("ECOLIB members")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#ecolib-applications-and-platform-applications"}},[e._v("ECOLIB applications and platform applications")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#underlying-model"}},[e._v("Underlying model")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#implementation"}},[e._v("Implementation")])])])])]),e._v(" "),t("p",[e._v("If you are interested in the development, use or management of applications in IBAX, then you may not need to understand it at all.")]),e._v(" "),t("p",[e._v("In IBAX, the blockchain and the blockchain network are hidden from ECOLIB members, administrators, and application developers. IBAX offers "),t("RouterLink",{attrs:{to:"/fr/reference/api2.html"}},[e._v("RESTful API")]),e._v(" for all user groups, which provide a tamper-proof and distributed access to the "),t("strong",[e._v("global state")]),e._v(" of the blockchain.")],1),e._v(" "),t("h2",{attrs:{id:"application-developers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-developers"}},[e._v("#")]),e._v(" Application developers ")]),e._v(" "),t("p",[e._v("In technical terms, the "),t("strong",[e._v("global state")]),e._v(" is a set of data, which is implemented via IBAX's database. From the perspective of application developers, an application interacts with the database by querying, inserting and updating tables.")]),e._v(" "),t("p",[e._v("In IBAX, transactions are written into the blockchain by implementing various contracts. These transactions will call contract codes implemented by blockchain network nodes, which will update the global state (database) accordingly.")]),e._v(" "),t("p",[e._v("For application developers, a contract is a function that data will be written to the database when it is implemented. Pages are like scripts and the page code is a set of page "),t("RouterLink",{attrs:{to:"/fr/topics/templates2.html"}},[e._v("template")]),e._v(" functions, some of these functions display page elements, while other data comes from the database. Application developers do not need to understand what are transactions, block generation and consensus algorithms, just use it.")],1),e._v(" "),t("h2",{attrs:{id:"ecolib-members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecolib-members"}},[e._v("#")]),e._v(" ECOLIB members ")]),e._v(" "),t("p",[e._v("Applications written by developers run in an environment called "),t("RouterLink",{attrs:{to:"/fr/concepts/thesaurus.html#ecolib"}},[e._v("ECOLIB")]),e._v(". An application usually serves a specific purpose and complete various tasks together with several other applications.")],1),e._v(" "),t("p",[e._v("A user must become a member of an ECOLIB if wants to access applications in it, and it can be a member of multiple different ECOLIBs at the same time.")]),e._v(" "),t("p",[e._v("ECOLIB members can view and modify the database from application pages, just like filling out forms, clicking buttons and navigating pages in a common web application.")]),e._v(" "),t("h2",{attrs:{id:"ecolib-applications-and-platform-applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecolib-applications-and-platform-applications"}},[e._v("#")]),e._v(" ECOLIB applications and platform applications ")]),e._v(" "),t("p",[e._v("Applications may fall into "),t("strong",[e._v("ECOLIB applications")]),e._v(" and "),t("strong",[e._v("platform applications")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("ECOLIB applications")])]),e._v(" "),t("p",[e._v("An ECOLIB application implements certain unique functions or business processes of an ECOLIB, but it is only available in that ECOLIB.")]),e._v(" "),t("blockquote",[t("p",[e._v("Platform applications")])]),e._v(" "),t("p",[e._v("A platform application is applicable to all ECOLIBs. Any application could be developed as a platform application. IBAX developers would provide platform applications that support the core functions for ECOLIB governance, such as voting, notification, and ECOLIB member role management.")]),e._v(" "),t("h2",{attrs:{id:"underlying-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#underlying-model"}},[e._v("#")]),e._v(" Underlying model ")]),e._v(" "),t("blockquote",[t("p",[e._v("Definition of layers")])]),e._v(" "),t("p",[e._v("IBAX consists of several layers:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("User interaction layer")]),e._v(" "),t("p",[e._v("ECOLIB members interact with the application through pages and page elements.")])]),e._v(" "),t("li",[t("p",[e._v("Application layer")]),e._v(" "),t("p",[e._v("Application developers interact with the global state (data tables) through contract codes and page codes.")])]),e._v(" "),t("li",[t("p",[e._v("Global state layer")]),e._v(" "),t("p",[e._v("Update and synchronize the global state (database) based on operations written to the distributed ledger (blockchain)")])]),e._v(" "),t("li",[t("p",[e._v("Blockchain layer")]),e._v(" "),t("p",[e._v("Update the distributed ledger with new blocks. Operations (transactions) saved in new blocks must be performed on the global state.")])]),e._v(" "),t("li",[t("p",[e._v("Node network layer")]),e._v(" "),t("p",[e._v("It implemented the IBAX Network protocol, which distributes, verifies transactions and generates new blocks on the node network. Similarly, new blocks are distributed and verified by the node network.")]),e._v(" "),t("p",[e._v("The distributed ledger of all nodes is kept in sync. If having conflicts in a node, the node will identify which blockchains are considered valid and invalid blockchains will be rolled back accordingly.")])]),e._v(" "),t("li",[t("p",[e._v("Transaction layer")]),e._v(" "),t("p",[e._v("Transactions are the basis for generating blocks and blockchain protocols, and transactions themselves are the results of operations performed at the user interaction layer. Transactions are generated by Weaver.")]),e._v(" "),t("p",[e._v("When a user or developer performs an operation such as clicking a button on a page or implement a contract from the code editor, Weaver will convert this operation into a transaction and send it to the network node connected to it.")])])]),e._v(" "),t("p",[e._v("Therefore, the flow of transactions is as follows:")]),e._v(" "),t("ul",[t("li",[e._v("A user operation in a user page will become a transaction;")]),e._v(" "),t("li",[e._v("The transaction is contained in a block;")]),e._v(" "),t("li",[e._v("The block is included in the blockchain;")]),e._v(" "),t("li",[e._v("The change of operation will cause the global state of the blockchain to change, and such operation will be applied to the database;")]),e._v(" "),t("li",[e._v("Any database change will be reflected in the application.")])]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation ")]),e._v(" "),t("p",[e._v("IBAX has two major components, i.e. server "),t("a",{attrs:{href:"https://github.com/IBAX-io/go-ibax",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ibax"),t("OutboundLink")],1),e._v(" and Weaver "),t("a",{attrs:{href:"https://github.com/IBAX-io/weaver",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source code"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Weaver:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Providing the user pages;")])]),e._v(" "),t("li",[t("p",[e._v("Providing the IDE for application development;")])]),e._v(" "),t("li",[t("p",[e._v("Storing public keys of user accounts and perform authorization;")])]),e._v(" "),t("li",[t("p",[e._v("Requesting database data from application pages and display application pages to users;")])]),e._v(" "),t("li",[t("p",[e._v("Sending transactions to the server through "),t("RouterLink",{attrs:{to:"/fr/reference/api2.html"}},[e._v("REST APIs")]),e._v(";")],1),e._v(" "),t("p",[e._v("In order to automatically create transactions against user operations, Weaver will convert such operations into transactions when application developers implement a contract from the IDE.")])])]),e._v(" "),t("p",[e._v("Server:")]),e._v(" "),t("ul",[t("li",[e._v("Keeping the global state (database) of the node;")]),e._v(" "),t("li",[e._v("Implementation of the blockchain protocol;")]),e._v(" "),t("li",[e._v("Implementation of contract codes in the IBAX "),t("RouterLink",{attrs:{to:"/fr/topics/vm.html"}},[e._v("Virtual Machine")]),e._v(";")],1),e._v(" "),t("li",[e._v("Implementation of page codes in the "),t("RouterLink",{attrs:{to:"/fr/topics/templates2.html"}},[e._v("Template Engine")]),e._v(";")],1),e._v(" "),t("li",[e._v("Implementation of "),t("RouterLink",{attrs:{to:"/fr/reference/api2.html"}},[e._v("RESTful API")]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);