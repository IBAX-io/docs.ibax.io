(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{438:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[e._v("#")]),e._v(" 守护进程 ")]),e._v(" "),t("p",[e._v("该章节介绍 IBAX区块链平台 节点如何从技术角度相互交互。")]),e._v(" "),t("h2",{attrs:{id:"about-the-server-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-the-server-daemon"}},[e._v("#")]),e._v(" 关于服务端守护进程 ")]),e._v(" "),t("p",[e._v("它需在每个网络节点上运行。服务端守护进程执行服务端各个功能并支持IBAX区块链平台的区块链协议。守护进程在区块链网络中分发区块和交易、生成新区块、验证接收到的区块和交易。守护进程可以防止区块链分叉问题。")]),e._v(" "),t("h3",{attrs:{id:"honor-node-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#honor-node-daemon"}},[e._v("#")]),e._v(" 荣誉节点守护进程 ")]),e._v(" "),t("p",[e._v("荣誉节点 运行以下服务端守护进程：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("p",[t("a",{attrs:{href:"#blockgenerator-daemon"}},[e._v("BlockGenerator守护进程")])]),e._v(" "),t("blockquote",[t("p",[e._v("生成新区块。")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection守护进程")])]),e._v(" "),t("blockquote",[t("p",[e._v("从其他节点下载新区块。")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#confirmations-daemon"}},[e._v("Confirmations守护进程")])]),e._v(" "),t("blockquote",[t("p",[e._v("确认节点上存在的区块也存在于大多数其他节点上。")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator守护进程")])]),e._v(" "),t("blockquote",[t("p",[e._v("将交易和区块分发给其他主节点。")])])]),e._v(" "),t("li",[t("p",[e._v("QueueParserBlocks 守护进程")]),e._v(" "),t("blockquote",[t("p",[e._v("处理区块队列中的区块，区块队列包含来自其他节点的区块。")]),e._v(" "),t("p",[e._v("区块处理逻辑和 "),t("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection守护进程")]),e._v(" 相同。")])])]),e._v(" "),t("li",[t("p",[e._v("QueueParserTx 守护进程")]),e._v(" "),t("blockquote",[t("p",[e._v("验证交易队列中的交易。")])])]),e._v(" "),t("li",[t("p",[e._v("Scheduler 守护进程")]),e._v(" "),t("blockquote",[t("p",[e._v("按任务计划运行合约。")])])])])]),e._v(" "),t("h3",{attrs:{id:"guardian-node-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node-daemon"}},[e._v("#")]),e._v(" 守护节点 守护进程 ")]),e._v(" "),t("p",[e._v("守护节点 运行以下服务端守护进程：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection守护进程")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#confirmations-daemon"}},[e._v("Confirmations守护进程")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator守护进程")])]),e._v(" "),t("li",[e._v("QueueParserTx")]),e._v(" "),t("li",[e._v("Scheduler")])])]),e._v(" "),t("h2",{attrs:{id:"blockcollection-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockcollection-daemon"}},[e._v("#")]),e._v(" BlockCollection守护进程 ")]),e._v(" "),t("p",[e._v("BlocksCollection守护进程下载区块并将区块链与其他网络节点同步。")]),e._v(" "),t("h3",{attrs:{id:"blockchain-synchronization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-synchronization"}},[e._v("#")]),e._v(" 区块链同步 ")]),e._v(" "),t("p",[e._v("BlocksCollection守护进程通过确定区块链网络中的最大区块高度，请求新区块以及解决区块链中的分叉来同步区块链。")]),e._v(" "),t("h4",{attrs:{id:"check-for-blockchain-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-for-blockchain-updates"}},[e._v("#")]),e._v(" 区块链更新检查 ")]),e._v(" "),t("p",[e._v("BlocksCollection守护进程将当前区块ID的请求发送到所有 荣誉节点。")]),e._v(" "),t("p",[e._v("如果该守护进程的节点的当前区块ID小于任何 荣誉节点的当前区块ID，则该区块链网络节点被认为是过时的。")]),e._v(" "),t("h4",{attrs:{id:"download-new-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-new-blocks"}},[e._v("#")]),e._v(" 下载新区块 ")]),e._v(" "),t("p",[e._v("返回最大当前区块高度的节点被视为最新节点。")]),e._v(" "),t("p",[e._v("该守护进程下载所有尚未知道的区块。")]),e._v(" "),t("h4",{attrs:{id:"solving-the-fork-issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solving-the-fork-issue"}},[e._v("#")]),e._v(" 解决分叉 ")]),e._v(" "),t("p",[e._v("如果在区块链中检测到分叉，则该守护进程通过将所有区块下载到共同的父区块来向后移动分叉。")]),e._v(" "),t("p",[e._v("找到共同的父区块后，将在该守护进程的节点区块链上执行回滚，并将正确的区块添加到区块链中，直到最新的区块。")]),e._v(" "),t("h3",{attrs:{id:"tables-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tables-1"}},[e._v("#")]),e._v(" 数据表 ")]),e._v(" "),t("p",[e._v("BlocksCollection守护进程使用以下数据表：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("block_chain")]),e._v(" "),t("li",[e._v("transactions")]),e._v(" "),t("li",[e._v("transactions_status")]),e._v(" "),t("li",[e._v("info_block")])])]),e._v(" "),t("h3",{attrs:{id:"request-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-1"}},[e._v("#")]),e._v(" 请求 ")]),e._v(" "),t("p",[e._v("BlockCollection守护程序向其他守护程序发出以下请求：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("a",{attrs:{href:"#type-10"}},[e._v("Type 10")]),e._v("指向所有 "),t("strong",[e._v("荣誉节点")]),e._v(" 中最大的区块ID。")]),e._v(" "),t("li",[t("a",{attrs:{href:"#type-7"}},[e._v("Type 7")]),e._v("指向最大区块ID的数据。")])])]),e._v(" "),t("h2",{attrs:{id:"blockgenerator-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockgenerator-daemon"}},[e._v("#")]),e._v(" BlockGenerator守护进程 ")]),e._v(" "),t("p",[e._v("BlockGenerator守护进程生成新区块。")]),e._v(" "),t("h3",{attrs:{id:"pre-verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-verification"}},[e._v("#")]),e._v(" 预验证 ")]),e._v(" "),t("p",[e._v("BlockGenerator守护进程通过分析区块链中的最新区块来计划新的区块生成。")]),e._v(" "),t("p",[e._v("如果满足以下条件，则可以生成新区块：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("生成最新区块的节点位于荣誉节点列表中守护进程节点。")]),e._v(" "),t("li",[e._v("自最新未验证区块生成以来经过的最短时间。")])])]),e._v(" "),t("h3",{attrs:{id:"block-generation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block-generation"}},[e._v("#")]),e._v(" 区块生成 ")]),e._v(" "),t("p",[e._v("该守护进程生成新区块后，新区块包含所有新交易。这些交易可以从其他节点的"),t("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator守护进程")]),e._v("接收，也可以由该守护进程的节点生成。生成的区块保存在该节点数据库中。")]),e._v(" "),t("h3",{attrs:{id:"tables-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tables-2"}},[e._v("#")]),e._v(" 数据表 ")]),e._v(" "),t("p",[e._v("BlockGenerator守护程序使用以下表：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("block_chain (saves new blocks)")]),e._v(" "),t("li",[e._v("transactions")]),e._v(" "),t("li",[e._v("transactions_status")]),e._v(" "),t("li",[e._v("info_block")])])]),e._v(" "),t("h3",{attrs:{id:"request-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[e._v("#")]),e._v(" 请求 ")]),e._v(" "),t("p",[e._v("BlockGenerator守护进程不向其他守护进程发出任何请求。")]),e._v(" "),t("h2",{attrs:{id:"disseminator-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disseminator-daemon"}},[e._v("#")]),e._v(" Disseminator守护进程 ")]),e._v(" "),t("p",[e._v("Disseminator守护进程将交易和区块发送到所有 荣誉节点。")]),e._v(" "),t("h3",{attrs:{id:"guardian-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guardian-node"}},[e._v("#")]),e._v(" 守护节点 ")]),e._v(" "),t("p",[e._v("在 守护节点 上工作时，守护进程将其节点生成的交易发送到所有 荣誉节点。")]),e._v(" "),t("h3",{attrs:{id:"honor-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[e._v("#")]),e._v(" 荣誉节点 ")]),e._v(" "),t("p",[e._v("在荣誉节点上工作时，守护进程会将生成的区块和交易的哈希值发送到所有荣誉节点。")]),e._v(" "),t("p",[e._v("然后，荣誉节点响应其节点未知的交易请求。守护进程发送完整的交易数据作为响应。")]),e._v(" "),t("h3",{attrs:{id:"tables-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tables-3"}},[e._v("#")]),e._v(" 数据表 ")]),e._v(" "),t("p",[e._v("Disseminator守护进程使用以下表：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("transactions")])])]),e._v(" "),t("h3",{attrs:{id:"request-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[e._v("#")]),e._v(" 请求 ")]),e._v(" "),t("p",[e._v("Disseminator守护进程向其他守护进程发出以下请求：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("a",{attrs:{href:"#type-1"}},[e._v("Type 1")]),e._v(" 向 荣誉节点发送交易和区块哈希。")]),e._v(" "),t("li",[t("a",{attrs:{href:"#type-2"}},[e._v("Type 2")]),e._v(" 从 荣誉节点接收交易数据。")])])]),e._v(" "),t("h2",{attrs:{id:"confirmations-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confirmations-daemon"}},[e._v("#")]),e._v(" Confirmations守护进程 ")]),e._v(" "),t("p",[e._v("Confirmations守护进程检查其节点中的所有区块是否存在于大多数其他节点上。")]),e._v(" "),t("h3",{attrs:{id:"block-confirmation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block-confirmation"}},[e._v("#")]),e._v(" 区块确认 ")]),e._v(" "),t("p",[e._v("当网络中的多个节点已确认区块时，将认为该区块已被确认。")]),e._v(" "),t("p",[e._v("该守护进程从数据库中当前未确认的第一个区块开始逐个确认所有区块。")]),e._v(" "),t("p",[e._v("每个区块都以这种方式确认：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("向所有荣誉节点发送请求，该请求包含了正在确认的区块ID。")]),e._v(" "),t("li",[e._v("所有荣誉节点对该区块的哈希进行响应。")]),e._v(" "),t("li",[e._v("如果响应的哈希值与守护进程节点上的区块的哈希值匹配，则会增加确认计数器。如果哈希不匹配，取消确认计数器将增加。")])])]),e._v(" "),t("h3",{attrs:{id:"tables-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tables-4"}},[e._v("#")]),e._v(" 数据表 ")]),e._v(" "),t("p",[e._v("Confirmations守护进程使用以下数据表：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("confirmation")]),e._v(" "),t("li",[e._v("info_block")])])]),e._v(" "),t("h3",{attrs:{id:"request-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[e._v("#")]),e._v(" 请求 ")]),e._v(" "),t("p",[e._v("Confirmations守护进程向其他守护进程发出以下请求：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("a",{attrs:{href:"#type-4"}},[e._v("Type 4")]),e._v(" 向荣誉节点请求区块哈希。")])])]),e._v(" "),t("h2",{attrs:{id:"tcp-service-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-service-protocol"}},[e._v("#")]),e._v(" TCP服务协议 ")]),e._v(" "),t("p",[e._v("TCP服务协议在 荣誉节点和全节点上工作，TCP服务协议使用TCP上的二进制协议来处理来自BlocksCollection、Disseminator和Confirmation守护进程的请求。")]),e._v(" "),t("h2",{attrs:{id:"request-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-type"}},[e._v("#")]),e._v(" 请求类型 ")]),e._v(" "),t("p",[e._v("每个请求都有一个由请求的前两个字节定义的类型。")]),e._v(" "),t("h3",{attrs:{id:"type-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-1"}},[e._v("#")]),e._v(" Type 1 ")]),e._v(" "),t("h4",{attrs:{id:"request-sender-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-1"}},[e._v("#")]),e._v(" 请求发送者 ")]),e._v(" "),t("p",[t("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator守护进程")]),e._v(" 发送该请求。")]),e._v(" "),t("h4",{attrs:{id:"request-data-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-data-1"}},[e._v("#")]),e._v(" 请求数据 ")]),e._v(" "),t("p",[e._v("交易和区块哈希。")]),e._v(" "),t("h4",{attrs:{id:"request-processing-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-processing-1"}},[e._v("#")]),e._v(" 请求处理 ")]),e._v(" "),t("p",[e._v("区块哈希被添加到区块队列中。")]),e._v(" "),t("p",[e._v("对交易哈希进行解析验证，并选择节点上尚未出现的交易。")]),e._v(" "),t("h4",{attrs:{id:"response-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-1"}},[e._v("#")]),e._v(" 响应 ")]),e._v(" "),t("p",[e._v("无。处理该请求后会发出 "),t("a",{attrs:{href:"#type-2"}},[e._v("Type 2")]),e._v(" 请求。")]),e._v(" "),t("h3",{attrs:{id:"type-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-2"}},[e._v("#")]),e._v(" Type 2 ")]),e._v(" "),t("h4",{attrs:{id:"request-sender-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-2"}},[e._v("#")]),e._v(" 请求发送者 ")]),e._v(" "),t("p",[t("a",{attrs:{href:"#disseminator-daemon"}},[e._v("Disseminator守护进程")]),e._v(" 发送该请求。")]),e._v(" "),t("h4",{attrs:{id:"request-data-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-data-2"}},[e._v("#")]),e._v(" 请求数据 ")]),e._v(" "),t("p",[e._v("交易数据，包括数据大小：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("p",[t("em",[e._v("data_size")]),e._v(" (4个字节)")]),e._v(" "),t("blockquote",[t("p",[e._v("交易数据的大小，以字节为单位。")])])]),e._v(" "),t("li",[t("p",[t("em",[e._v("data")]),e._v(" (data_size个字节)")]),e._v(" "),t("blockquote",[t("p",[e._v("交易数据。")])])])])]),e._v(" "),t("h4",{attrs:{id:"request-processing-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-processing-2"}},[e._v("#")]),e._v(" 请求处理 ")]),e._v(" "),t("p",[e._v("验证交易并将其添加到交易队列中。")]),e._v(" "),t("h4",{attrs:{id:"response-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" 响应 ")]),e._v(" "),t("p",[e._v("无。")]),e._v(" "),t("h3",{attrs:{id:"type-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-4"}},[e._v("#")]),e._v(" Type 4 ")]),e._v(" "),t("h4",{attrs:{id:"request-sender-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-3"}},[e._v("#")]),e._v(" 请求发送者 ")]),e._v(" "),t("p",[t("a",{attrs:{href:"#confirmations-daemon"}},[e._v("Confirmations守护进程")]),e._v(" 发送该请求。")]),e._v(" "),t("h4",{attrs:{id:"request-data-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-data-3"}},[e._v("#")]),e._v(" 请求数据 ")]),e._v(" "),t("p",[e._v("区块ID。")]),e._v(" "),t("h4",{attrs:{id:"response-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[e._v("#")]),e._v(" 响应 ")]),e._v(" "),t("p",[e._v("区块哈希。")]),e._v(" "),t("p",[e._v("如果不存在该ID的区块，则返回 "),t("code",[e._v("0")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"type-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-7"}},[e._v("#")]),e._v(" Type 7 ")]),e._v(" "),t("h4",{attrs:{id:"request-sender-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-4"}},[e._v("#")]),e._v(" 请求发送者 ")]),e._v(" "),t("p",[t("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection守护进程")]),e._v(" 发送该请求。")]),e._v(" "),t("h4",{attrs:{id:"request-data-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-data-4"}},[e._v("#")]),e._v(" 请求数据 ")]),e._v(" "),t("p",[e._v("区块ID。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("em",[e._v("block_id")]),e._v(" (4个字节)")])])]),e._v(" "),t("h4",{attrs:{id:"response-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[e._v("#")]),e._v(" 响应 ")]),e._v(" "),t("p",[e._v("区块数据，包括数据大小。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("p",[t("em",[e._v("data_size")]),e._v(" (4个字节)")]),e._v(" "),t("blockquote",[t("p",[e._v("区块数据的大小，以字节为单位。")])])]),e._v(" "),t("li",[t("p",[t("em",[e._v("data")]),e._v(" (data_size个字节)")]),e._v(" "),t("blockquote",[t("p",[e._v("区块数据。")])])])])]),e._v(" "),t("p",[e._v("如果不存在该ID的区块，则关闭连接。")]),e._v(" "),t("h3",{attrs:{id:"type-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-10"}},[e._v("#")]),e._v(" Type 10 ")]),e._v(" "),t("h4",{attrs:{id:"request-sender-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-sender-5"}},[e._v("#")]),e._v(" 请求发送者 ")]),e._v(" "),t("p",[t("a",{attrs:{href:"#blockcollection-daemon"}},[e._v("BlockCollection守护进程")]),e._v(" 发送该请求。")]),e._v(" "),t("h4",{attrs:{id:"request-data-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-data-5"}},[e._v("#")]),e._v(" 请求数据 ")]),e._v(" "),t("p",[e._v("无")]),e._v(" "),t("h4",{attrs:{id:"response-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[e._v("#")]),e._v(" 响应 ")]),e._v(" "),t("p",[e._v("区块ID。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("em",[e._v("block_id")]),e._v(" (4个字节)")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);