(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{387:function(a,o,t){"use strict";t.r(o);var e=t(14),s=Object(e.a)({},(function(){var a=this,o=a._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"decentralized-proof-of-authority-consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decentralized-proof-of-authority-consensus"}},[a._v("#")]),a._v(" 분산된 권한 증명(Proof-of-Authority) 합의 ")]),a._v(" "),o("ul",[o("li",[o("p",[a._v("분산된 권한 증명 합의란 무엇인가요?")])]),a._v(" "),o("li",[o("p",[a._v("DPoA 합의의 장점")])]),a._v(" "),o("li",[o("p",[a._v("DPoA 합의와 일반적인 공격 수단")])]),a._v(" "),o("li",[o("p",[a._v("IBAX에서의 DPoA 합의 구현")])])]),a._v(" "),o("p",[a._v("이 섹션에서는 분산된 권한 증명 합의인 DPoA의 개념과 IBAX에서의 구현에 대해 설명하겠습니다.")]),a._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#what-is-decentralized-proof-of-authority-consensus"}},[a._v("분산 Proof-of-Authority 콘센서스란?")]),a._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#advantages-of-dpoa-consensus"}},[a._v("DPoA 콘센서스의 장점")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#dpoa-consensus-and-common-means-of-attack"}},[a._v("DPoA 콘센서스와 일반적인 공격 수단")]),a._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#dos"}},[a._v("DoS 공격")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#percent-attack-51"}},[a._v("51% 공격")])])])]),a._v(" "),o("li",[o("a",{attrs:{href:"#implementation-of-dpoa-consensus-in-ibax"}},[a._v("IBAX에서 DPoA 콘센서스의 구현")]),a._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#honor-node"}},[a._v("Honor 노드")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#leader-node"}},[a._v("Leader 노드")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#generation-of-new-blocks"}},[a._v("새로운 블록 생성")])]),a._v(" "),o("li",[o("a",{attrs:{href:"#forks"}},[a._v("포크(Forks)")])])])])])])]),a._v(" "),o("h2",{attrs:{id:"what-is-decentralized-proof-of-authority-consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-decentralized-proof-of-authority-consensus"}},[a._v("#")]),a._v(" 분산 Proof-of-Authority 콘센서스란? ")]),a._v(" "),o("p",[a._v("IBAX 네트워크는 상업 응용 시나리오와 실제 환경을 고려하여 분산된 권한 증명(DPoA, Decentralized Proof of Authority)이라는 새로운 합의 메커니즘을 구축했습니다.")]),a._v(" "),o("p",[a._v("분산화는 우리의 확고한 신념이었습니다. 이는 단순히 IBAX의 인프라 네트워크 환경을 의미하는 것뿐만 아니라, IBAX 네트워크에서 생성된 각 ecoLib에 분산화를 뿌리내리고 기술적인 솔루션을 사용하여 각 ecoLib에서 고도의 자체 조정을 실현하기 위한 것입니다. 고도로 분산된 자체 조정을 위해 전체 아키텍처와 기술적인 구현에서 많은 변경을 가했습니다. 그러나 실제로는 중앙집중식 관리 개념을 피할 수 없습니다. 중앙집중화와 분산화 사이의 균형을 찾기 위해 DPoA 합의 메커니즘 외에도 특정 보상 및 인센티브 프로그램을 마련했습니다.")]),a._v(" "),o("p",[a._v("IBAX 네트워크는 분산화, 약간의 중앙집중화, 그리고 인증 기관을 결합한 새로운 합의 메커니즘인 DPoA(Decentralized Proof of Authority)를 생성했습니다. 이는 IBAX 공공 네트워크뿐만 아니라 각 사용자와 사용자 그룹이 생성한 ecoLibs에도 적용됩니다. 이로써 완전히 자체 조정되고 분산된, 공정하고 투명하며 부정 방지가 가능한 탈중앙화 자율 조직(DAO)가 생성됩니다.")]),a._v(" "),o("p",[a._v("DPoA는 네트워크 공격에 대한 방지 메커니즘을 가지며, 네트워크를 보호하고 새로운 IBXC 코인을 생성하는 Mint 노드를 생성할 수 있습니다. IBAXCoin 소지자는 Mint & Stake Emission 보상을 위해 IBXC 유동성 잔액의 일부를 Mint 노드에 스테이킹할 수 있습니다. Minting과 staking은 공격의 비용과 난이도를 증가시키고 IBXC 코인의 총 가치를 비례적으로 증가시키는 역할을 합니다. 이 메커니즘을 통해 어떤 공격의 발생 확률과 피해는 무한히 가까운 제로에 수렴하게 됩니다.")]),a._v(" "),o("h2",{attrs:{id:"advantages-of-dpoa-consensus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#advantages-of-dpoa-consensus"}},[a._v("#")]),a._v(" DPoA 콘센서스의 장점 ")]),a._v(" "),o("p",[a._v("Proof-of-Authority (PoA) 합의와 비교하여, DPoA 합의는 다음과 같은 이점을 가지고 있습니다:")]),a._v(" "),o("ul",[o("li",[o("p",[a._v("고성능 하드웨어가 필요하지 않습니다. PoW 합의와 비교하여, DPoA 합의를 구현하는 노드는 복잡한 수학 논리 작업을 해결하기 위해 계산 리소스를 소비하지 않습니다.")])]),a._v(" "),o("li",[o("p",[a._v("새로운 블록 생성 간격이 예측 가능합니다. 반면 PoW 및 PoS 합의의 경우 각각 다른 시간 간격이 필요합니다.")])]),a._v(" "),o("li",[o("p",[a._v("높은 거래 처리량을 갖습니다. 인가된 네트워크 노드에 의해 지정된 시간 간격으로 순차적으로 블록이 생성되므로 거래 확인 속도가 빨라집니다.")])]),a._v(" "),o("li",[o("p",[a._v("51%의 노드가 손상되지 않는 한 손상된 노드와 악의적인 노드에 대한 허용성이 있습니다. IBAX는 노드를 차단하고 블록 생성 권한을 취소하는 메커니즘을 구현합니다.")])])]),a._v(" "),o("h2",{attrs:{id:"dpoa-consensus-and-common-means-of-attack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dpoa-consensus-and-common-means-of-attack"}},[a._v("#")]),a._v(" DPoA 콘센서스와 일반적인 공격 수단 ")]),a._v(" "),o("h3",{attrs:{id:"dos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dos"}},[a._v("#")]),a._v(" DoS ")]),a._v(" "),o("p",[a._v("공격자는 대상 노드로 대량의 거래와 블록을 보내서 그 작동을 방해하고 서비스를 사용할 수 없게 만들려고 할 수 있습니다.")]),a._v(" "),o("p",[a._v("DPoA 메커니즘은 DoS 공격에 대항할 수 있습니다:")]),a._v(" "),o("ul",[o("li",[o("p",[a._v("네트워크 노드가 미리 인증되었기 때문에, DoS 공격을 견딜 수 있는 노드에게만 블록 생성 권한을 부여할 수 있습니다.")])]),a._v(" "),o("li",[o("p",[a._v("특정 기간 동안 honor 노드가 사용 불가능하면 honor 노드 목록에서 제외될 수 있습니다.")])])]),a._v(" "),o("h3",{attrs:{id:"percent-attack-51"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#percent-attack-51"}},[a._v("#")]),a._v(" 51% 공격 ")]),a._v(" "),o("p",[a._v("DPoA 합의 방식의 경우, 51% 공격은 공격자가 네트워크 노드의 51%를 통제해야 합니다. 그러나 PoW 합의 방식의 경우, 공격자는 네트워크의 51% 계산 성능을 획득해야 합니다. 허가된 블록체인 네트워크에서 노드 통제를 얻는 것은 계산 성능 획득보다 훨씬 어렵습니다.")]),a._v(" "),o("p",[a._v("예를 들어, PoW 합의 방식을 구현한 네트워크에서는 공격자가 제어하는 네트워크 세그먼트의 계산 성능(성능)을 증가시켜 통제하는 노드의 비율을 높일 수 있습니다. 하지만 DPoA 합의 방식에서는 노드의 계산 성능이 블록체인 네트워크 결정에 영향을 미치지 않기 때문에 이는 의미가 없습니다.")]),a._v(" "),o("h2",{attrs:{id:"implementation-of-dpoa-consensus-in-ibax"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-dpoa-consensus-in-ibax"}},[a._v("#")]),a._v(" IBAX에서 DPoA 콘센서스의 구현 ")]),a._v(" "),o("h3",{attrs:{id:"honor-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[a._v("#")]),a._v(" Honor 노드 ")]),a._v(" "),o("p",[a._v("IBAX에서는 온라인 노드만이 새로운 블록을 생성할 수 있으며, 이 노드들은 블록체인 네트워크와 분산 원장을 유지합니다.")]),a._v(" "),o("p",[a._v("온라인 노드 목록은 블록체인 레지스트리에 저장되며, 노드의 순서는 노드들이 새로운 블록을 생성하는 순서를 결정합니다.")]),a._v(" "),o("h3",{attrs:{id:"leader-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#leader-node"}},[a._v("#")]),a._v(" Leader 노드 ")]),a._v(" "),o("p",[a._v("다음 공식은 현재 "),o("strong",[a._v("리더 노드")]),a._v("를 결정합니다. 즉, 현재 시간에 새로운 블록을 생성해야하는 노드입니다.")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("leader = ((time - first) / step) % nodes\n")])])]),o("blockquote",[o("p",[a._v("leader")])]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[a._v("Current leader node.\n")])])]),o("blockquote",[o("p",[a._v("time")])]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[a._v("Current time (UNIX).\n")])])]),o("blockquote",[o("p",[a._v("first")])]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[a._v("First block generation time (UNIX).\n")])])]),o("blockquote",[o("p",[a._v("step")])]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[a._v("Number of seconds in the block generation interval.\n")])])]),o("blockquote",[o("p",[a._v("nodes")])]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[a._v("Total number of honor nodes.\n")])])]),o("h3",{attrs:{id:"generation-of-new-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generation-of-new-blocks"}},[a._v("#")]),a._v(" 새로운 블록 생성 ")]),a._v(" "),o("p",[a._v("새로운 블록은 현재 시간 간격의 "),o("a",{attrs:{href:"#leader-node"}},[a._v("리더 노드")]),a._v(" 에 의해 생성됩니다. 각 시간 간격에서 리더 역할은 명예 노드 목록에서 다음 명예 노드로 전달됩니다.")]),a._v(" "),o("p",[o("img",{attrs:{src:"/block-generation.png",alt:"avatar"}})]),a._v(" "),o("p",[a._v("a) 새로운 블록 생성을 위한 단계")]),a._v(" "),o("p",[a._v("새로운 블록을 생성하기 위한 주요 단계는 다음과 같습니다:")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("노드의 트랜잭션 큐에서 모든 새로운 트랜잭션을 수집합니다.")])]),a._v(" "),o("li",[o("p",[a._v("트랜잭션을 하나씩 실행합니다. 잘못된 또는 실행할 수 없는 트랜잭션은 거부됩니다.")])]),a._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/kr/reference/platform-parameters.html#configure-the-generation-of-blocks"}},[a._v("블록 생성 제한")]),a._v(" 이 준수되는지 확인합니다.")],1)]),a._v(" "),o("li",[o("p",[a._v("유효한 트랜잭션으로 블록을 생성하고, 온라인 노드의 개인 키를 사용하여 ECDSA 알고리즘으로 블록에 서명합니다.")])]),a._v(" "),o("li",[o("p",[a._v("이 블록을 다른 온라인 노드들에게 전송합니다.")])])]),a._v(" "),o("p",[a._v("b) 새 블록 확인")]),a._v(" "),o("p",[a._v("다른 명예 노드에서 새 블록을 확인하는 단계:")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("새로운 블록을 수신하고 다음을 확인합니다:")]),a._v(" "),o("ul",[o("li",[o("p",[a._v("새로운 블록이 현재 간격의 리더 노드에 의해 생성되었는지 여부를 확인합니다.")])]),a._v(" "),o("li",[o("p",[a._v("현재 간격의 리더 노드에 의해 생성된 다른 블록이 있는지 확인합니다.")])]),a._v(" "),o("li",[o("p",[a._v("새로운 블록이 올바르게 서명되었는지 확인합니다.")])])])]),a._v(" "),o("li",[o("p",[a._v("블록에서 트랜잭션을 하나씩 실행합니다. 트랜잭션이 성공적으로 실행되었는지 및 "),o("RouterLink",{attrs:{to:"/kr/reference/platform-parameters.html#configure-the-generation-of-blocks"}},[a._v("블록 생성 제한")]),a._v(" 내에서 수행되었는지 확인합니다.")],1)]),a._v(" "),o("li",[o("p",[a._v("이전 단계에 따라 블록을 추가하거나 거부합니다:")]),a._v(" "),o("ul",[o("li",[o("p",[a._v("블록 유효성 검증이 성공적인 경우, 새로운 블록을 현재 노드의 블록체인에 추가합니다.")])]),a._v(" "),o("li",[o("p",[a._v("블록 유효성 검증이 실패한 경우, 블록을 거부하고 "),o("strong",[a._v("bad block")]),a._v(" 트랜잭션을 전송합니다.")])]),a._v(" "),o("li",[o("p",[a._v("이러한 잘못된 블록을 생성한 온라인 노드가 계속해서 잘못된 블록을 생성하는 경우, 해당 노드를 차단하거나 온라인 노드 목록에서 제외할 수 있습니다.")])])])])]),a._v(" "),o("h3",{attrs:{id:"forks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forks"}},[a._v("#")]),a._v(" 포크 ")]),a._v(" "),o("p",[o("strong",[a._v("포크")]),a._v("는 블록체인의 다른 부분과 독립적으로 생성된 하나 이상의 블록을 포함하는 대체 블록체인의 버전입니다.")]),a._v(" "),o("p",[a._v("포크는 네트워크 일부가 동기화되지 않을 때 발생하는 경우가 일반적입니다. 높은 네트워크 대기 시간, 의도적 또는 무의식적인 시간 제한 위반, 노드에서의 시간 비동기화 등이 포크의 원인일 수 있습니다. 네트워크 노드가 상당한 지리적 분포를 가지고 있다면, 블록 생성 간격을 늘려야 합니다.")]),a._v(" "),o("p",[a._v("포크는 가장 긴 블록체인 규칙을 따르는 방식으로 해결됩니다. 두 개의 블록체인 버전이 감지되면, 온라인 노드는 더 짧은 블록체인을 롤백하고 더 긴 블록체인을 받아들입니다.")]),a._v(" "),o("p",[o("img",{attrs:{src:"/block-fork-resolution.png",alt:"avatar"}})])])}),[],!1,null,null,null);o.default=s.exports}}]);