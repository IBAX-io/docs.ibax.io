(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{504:function(a,r,e){"use strict";e.r(r);var i=e(51),l=Object(i.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"arka-plan-programı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arka-plan-programı"}},[a._v("#")]),a._v(" Arka plan programı")]),a._v(" "),e("p",[a._v("Bu bölümde, IBax düğümlerinin teknik açıdan birbirleriyle nasıl etkileşime girdiğini anlatacağız.")]),a._v(" "),e("h2",{attrs:{id:"sunucu-arka-plan-programı-hakkında"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sunucu-arka-plan-programı-hakkında"}},[a._v("#")]),a._v(" Sunucu arka plan programı hakkında")]),a._v(" "),e("p",[a._v("Sunucu arka plan programının, çeşitli sunucu işlevlerini yürüten ve IBax'ın blok zinciri protokolünü destekleyen her ağ düğümünde çalışması gerekir. Blok zinciri ağında, arka plan programı blokları ve işlemleri dağıtır, yeni bloklar oluşturur ve alınan blokları ve işlemleri doğrular ve fork sorununu önleyebilir.")]),a._v(" "),e("h3",{attrs:{id:"honor-dugumu-arka-plan-programı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#honor-dugumu-arka-plan-programı"}},[a._v("#")]),a._v(" Honor düğümü arka plan programı")]),a._v(" "),e("p",[a._v("Bir honor düğümü aşağıdaki sunucu arka plan programlarını çalıştırır:")]),a._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"#blockgenerator-daemon"}},[a._v("BlockGenerator arka plan programı")])]),a._v(" "),e("p",[a._v("Yeni bloklar oluşturma.")])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#blockcollection-daemon"}},[a._v("BlockCollection arka plan programı")])]),a._v(" "),e("p",[a._v("Diğer düğümlerden yeni bloklar indiriliyor.")])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#confirmations-daemon"}},[a._v("Onaylar arka plan programı")])]),a._v(" "),e("p",[a._v("Düğümdeki blokların diğer düğümlerin çoğunda da bulunduğunun doğrulanması.")])]),a._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#disseminator-daemon"}},[a._v("Disseminator arka plan programı")])]),a._v(" "),e("p",[a._v("İşlemleri ve blokları diğer onur düğümlerine dağıtma.")])]),a._v(" "),e("li",[e("p",[a._v("QueueParserBlocks arka plan programı")]),a._v(" "),e("p",[a._v("Diğer düğümlerden gelen blokları içeren kuyruktaki bloklar.")]),a._v(" "),e("p",[a._v("Blok işleme mantığı, "),e("a",{attrs:{href:"#blockcollection-daemon"}},[a._v("BlockCollection arka plan programı")]),a._v(" ile aynıdır.")])]),a._v(" "),e("li",[e("p",[a._v("QueueParserTx arka plan programı")]),a._v(" "),e("p",[a._v("Kuyruktaki işlemlerin doğrulanması.")])]),a._v(" "),e("li",[e("p",[a._v("Zamanlayıcı arka plan programı")]),a._v(" "),e("p",[a._v("Sözleşmeleri planlandığı gibi yürütmek.")])])]),a._v(" "),e("h3",{attrs:{id:"koruyucu-dugum-arka-plan-programı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#koruyucu-dugum-arka-plan-programı"}},[a._v("#")]),a._v(" Koruyucu düğüm arka plan programı")]),a._v(" "),e("p",[a._v("Bir koruyucu düğüm aşağıdaki sunucu arka plan programlarını çalıştırır:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#blockcollection-daemon"}},[a._v("BlockCollection daemon")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#confirmations-daemon"}},[a._v("Confirmations daemon")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#disseminator-daemon"}},[a._v("Disseminator daemon")])]),a._v(" "),e("li",[a._v("QueueParserTx")]),a._v(" "),e("li",[a._v("Scheduler")])]),a._v(" "),e("h2",{attrs:{id:"blockcollection-arka-plan-programı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blockcollection-arka-plan-programı"}},[a._v("#")]),a._v(" BlockCollection arka plan programı")]),a._v(" "),e("p",[a._v("Bu arka plan programı blokları indirir ve blok zincirini diğer ağ düğümleriyle senkronize eder.")]),a._v(" "),e("h3",{attrs:{id:"blok-zinciri-senkronizasyonu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blok-zinciri-senkronizasyonu"}},[a._v("#")]),a._v(" Blok zinciri senkronizasyonu")]),a._v(" "),e("p",[a._v("Bu arka plan programı, blok zinciri ağındaki maksimum blok yüksekliğini belirleyerek, yeni bloklar talep ederek ve blok zincirindeki fork sorununu çözerek blok zincirini senkronize eder.")]),a._v(" "),e("h4",{attrs:{id:"blockchain-guncellemelerini-kontrol-edin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-guncellemelerini-kontrol-edin"}},[a._v("#")]),a._v(" Blockchain güncellemelerini kontrol edin")]),a._v(" "),e("p",[a._v("Bu arka plan programı, geçerli blok id'ye tüm honor düğümlerine istek gönderir.")]),a._v(" "),e("p",[a._v("Daemon'u çalıştıran düğümün mevcut blok id, herhangi bir honor düğümünün mevcut blok id'sinden küçükse, blok zinciri ağ düğümü güncel değil olarak kabul edilir.")]),a._v(" "),e("h4",{attrs:{id:"yeni-blokları-indirin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yeni-blokları-indirin"}},[a._v("#")]),a._v(" Yeni blokları indirin")]),a._v(" "),e("p",[a._v("Mevcut en büyük blok yüksekliğini döndüren düğüm, en son düğüm olarak kabul edilir.\nDaemon tüm bilinmeyen blokları indirir.")]),a._v(" "),e("h4",{attrs:{id:"solving-the-fork-issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solving-the-fork-issue"}},[a._v("#")]),a._v(" Solving the fork issue")]),a._v(" "),e("p",[a._v("Blok zincirinde bir fork algılanırsa, arka plan programı tüm blokları ortak bir ana bloğa indirerek forku geriye doğru hareket ettirir.\nOrtak ana blok bulunduğunda, arka plan programını çalıştıran düğümde bir blok zinciri geri dönüşü gerçekleştirilir ve en sonuncusu dahil edilene kadar blok zincirine doğru blok eklenir..")]),a._v(" "),e("h3",{attrs:{id:"tablolar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tablolar"}},[a._v("#")]),a._v(" Tablolar")]),a._v(" "),e("p",[a._v("BlocksCollection arka plan programı aşağıdaki tabloları kullanır:")]),a._v(" "),e("ul",[e("li",[a._v("block_chain")]),a._v(" "),e("li",[a._v("transactions")]),a._v(" "),e("li",[a._v("transactions_status")]),a._v(" "),e("li",[a._v("info_block")])]),a._v(" "),e("h3",{attrs:{id:"istek"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek"}},[a._v("#")]),a._v(" İstek")]),a._v(" "),e("p",[a._v("BlockCollection arka plan programı, diğer arka plan programlarına aşağıdaki istekleri gönderir:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#type-10"}},[a._v("Type 10")]),a._v(", tüm honor düğümleri arasında en büyük blok ID'ye işaret eder.")]),a._v(" "),e("li",[e("a",{attrs:{href:"#type-7"}},[a._v("Tür 7")]),a._v(" en büyük blok ID'nin sahip verilere işaret eder.")])]),a._v(" "),e("h2",{attrs:{id:"blockgenerator-arka-plan-programı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blockgenerator-arka-plan-programı"}},[a._v("#")]),a._v(" BlockGenerator arka plan programı")]),a._v(" "),e("p",[a._v("BlockGenerator arka plan programı yeni bloklar oluşturur.")]),a._v(" "),e("h3",{attrs:{id:"on-dogrulama"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-dogrulama"}},[a._v("#")]),a._v(" Ön doğrulama")]),a._v(" "),e("p",[a._v("BlockGenerator arka plan programı, yeni blok oluşturma planları yapmak için blok zincirindeki en son blokları analiz eder.")]),a._v(" "),e("p",[a._v("Aşağıdaki koşullar karşılanırsa, yeni bir blok oluşturulabilir:")]),a._v(" "),e("ul",[e("li",[a._v("En son bloğu oluşturan düğüm, honor düğümü listesindeki bir düğümdedir ve arka plan programını çalıştırır.")]),a._v(" "),e("li",[a._v("En son doğrulanmamış bloğun oluşturulmasından bu yana geçen en kısa süre.")])]),a._v(" "),e("h3",{attrs:{id:"blok-olusturma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blok-olusturma"}},[a._v("#")]),a._v(" Blok oluşturma")]),a._v(" "),e("p",[a._v("Daemon tarafından oluşturulan yeni bir blok, diğer düğümlerin "),e("a",{attrs:{href:"#disseminator-daemon"}},[a._v("Disseminator arka plan programından")]),a._v(" alınabilen veya arka plan programını çalıştıran düğüm tarafından oluşturulabilen tüm yeni işlemleri içerir. Oluşturulan blok, düğüm veritabanında saklanır.")]),a._v(" "),e("h3",{attrs:{id:"tablolar-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tablolar-2"}},[a._v("#")]),a._v(" Tablolar")]),a._v(" "),e("p",[a._v("BlockGenerator arka plan programı aşağıdaki tabloları kullanır:")]),a._v(" "),e("ul",[e("li",[a._v("block_chain (saves new blocks)")]),a._v(" "),e("li",[a._v("transactions")]),a._v(" "),e("li",[a._v("transactions_status")]),a._v(" "),e("li",[a._v("info_block")])]),a._v(" "),e("h3",{attrs:{id:"istek-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-2"}},[a._v("#")]),a._v(" İstek")]),a._v(" "),e("p",[a._v("BlockGenerator arka plan programı, diğer arka plan programlarına herhangi bir istekte bulunmaz.")]),a._v(" "),e("h2",{attrs:{id:"disseminator-arka-plan-programı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disseminator-arka-plan-programı"}},[a._v("#")]),a._v(" Disseminator arka plan programı")]),a._v(" "),e("p",[a._v("Disseminator arka plan programı, tüm onur düğümlerine işlemler ve bloklar gönderir.")]),a._v(" "),e("h3",{attrs:{id:"koruyucu-dugum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#koruyucu-dugum"}},[a._v("#")]),a._v(" Koruyucu düğüm")]),a._v(" "),e("p",[a._v("Bir koruyucu düğüm üzerinde çalışırken arka plan programı, düğümü tarafından oluşturulan işlemleri tüm honor düğümlerine gönderir.")]),a._v(" "),e("h3",{attrs:{id:"honor-dugum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#honor-dugum"}},[a._v("#")]),a._v(" Honor düğüm")]),a._v(" "),e("p",[a._v("Bir honor düğümü üzerinde çalışırken, arka plan programı oluşturulan blokları ve işlem hashlerini tüm honor düğümlerine gönderir.")]),a._v(" "),e("p",[a._v("Ardından, honor düğümü, bilmediği işlem isteklerine yanıt verir. Daemon, tam işlem verilerini yanıt olarak gönderir.")]),a._v(" "),e("h3",{attrs:{id:"tablolar-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tablolar-3"}},[a._v("#")]),a._v(" Tablolar")]),a._v(" "),e("p",[a._v("Disseminator arka plan programı aşağıdaki tabloları kullanır:")]),a._v(" "),e("ul",[e("li",[a._v("transactions")])]),a._v(" "),e("h3",{attrs:{id:"istek-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-3"}},[a._v("#")]),a._v(" İstek")]),a._v(" "),e("p",[a._v("Disseminator arka plan programı, diğer arka plan programlarına aşağıdaki istekleri gönderir:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#type-1"}},[a._v("Tür 1")]),a._v(" Honor düğümüne işlemleri gönderin ve hashleri bloklayın.")]),a._v(" "),e("li",[e("a",{attrs:{href:"#type-2"}},[a._v("Type 2")]),a._v(" Honor düğümünden işlem verilerini alın.")])]),a._v(" "),e("h2",{attrs:{id:"onaylar-arka-plan-programı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onaylar-arka-plan-programı"}},[a._v("#")]),a._v(" Onaylar arka plan programı")]),a._v(" "),e("p",[a._v("Onaylar arka plan programı, düğümündeki tüm blokların diğer düğümlerin çoğunda bulunup bulunmadığını kontrol eder.")]),a._v(" "),e("h3",{attrs:{id:"blok-onayı"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blok-onayı"}},[a._v("#")]),a._v(" Blok onayı")]),a._v(" "),e("p",[a._v("Ağdaki birden fazla düğüm tarafından onaylanan bir blok, onaylanmış bir blok olarak kabul edilir.")]),a._v(" "),e("p",[a._v("Daemon, veri tabanında henüz onaylanmayan ilk bloktan başlayarak tüm blokları tek tek onaylar.")]),a._v(" "),e("p",[a._v("Her blok aşağıdaki şekilde onaylanır:")]),a._v(" "),e("ul",[e("li",[a._v("Tüm honor düğümlerine onaylanan bloğun kimliğini içeren bir istek göndermek.")]),a._v(" "),e("li",[a._v("Tüm honor düğümleri blok karmasına yanıt verir.")]),a._v(" "),e("li",[a._v("Yanıtlanan hash, arka plan programı düğümündeki bloğun hash değeriyle eşleşirse, onay sayacı değeri artar. Değilse, iptal sayaç değeri artırılır.")])]),a._v(" "),e("h3",{attrs:{id:"tablolar-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tablolar-4"}},[a._v("#")]),a._v(" Tablolar")]),a._v(" "),e("p",[a._v("Onaylar arka plan programı aşağıdaki tabloları kullanır:")]),a._v(" "),e("ul",[e("li",[a._v("confirmation")]),a._v(" "),e("li",[a._v("info_block")])]),a._v(" "),e("h3",{attrs:{id:"istek-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-4"}},[a._v("#")]),a._v(" İstek")]),a._v(" "),e("p",[a._v("Onaylar arka plan programı, diğer arka plan programlarına aşağıdaki istekleri gönderir:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#type-4"}},[a._v("Type 4")]),a._v(" Onur düğümünden blok hashlerini isteyin.")])]),a._v(" "),e("h2",{attrs:{id:"tcp-hizmet-protokolu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-hizmet-protokolu"}},[a._v("#")]),a._v(" TCP hizmet protokolü")]),a._v(" "),e("p",[a._v("TCP hizmet protokolü, BlocksCollection, Dağıtıcı ve Onay arka plan programlarından gelen istekler için TCP'deki ikili protokolü kullanan onur düğümleri ve koruyucu düğümler üzerinde çalışır.")]),a._v(" "),e("h2",{attrs:{id:"istek-turu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-turu"}},[a._v("#")]),a._v(" İstek Türü")]),a._v(" "),e("p",[a._v("Her isteğin, isteğin ilk iki baytı tarafından tanımlanan bir türü vardır.")]),a._v(" "),e("h2",{attrs:{id:"tip-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tip-1"}},[a._v("#")]),a._v(" Tip 1")]),a._v(" "),e("h4",{attrs:{id:"istek-gonderen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-gonderen"}},[a._v("#")]),a._v(" İstek gönderen")]),a._v(" "),e("p",[a._v("Bu istek "),e("a",{attrs:{href:"#disseminator-daemon"}},[a._v("Disseminator arka plan programı")]),a._v(" tarafından gönderilir.")]),a._v(" "),e("h4",{attrs:{id:"veri-iste"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#veri-iste"}},[a._v("#")]),a._v(" Veri iste")]),a._v(" "),e("p",[a._v("İşlemin ve bloğun hashi.")]),a._v(" "),e("h4",{attrs:{id:"talep-isleme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#talep-isleme"}},[a._v("#")]),a._v(" Talep işleme")]),a._v(" "),e("p",[a._v("Blok hash, blok kuyruğuna eklenir.")]),a._v(" "),e("p",[a._v("İşlem hash analiz eder ve doğrular ve henüz düğümde görünmeyen işlemleri seçer.")]),a._v(" "),e("h4",{attrs:{id:"cevap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cevap"}},[a._v("#")]),a._v(" Cevap")]),a._v(" "),e("p",[a._v("Hayır. İsteği işledikten sonra bir "),e("a",{attrs:{href:"#type-2"}},[a._v("Type 2")]),a._v(" isteği verilir.")]),a._v(" "),e("h2",{attrs:{id:"tip-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tip-2"}},[a._v("#")]),a._v(" Tip 2")]),a._v(" "),e("h4",{attrs:{id:"istek-gonderen-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-gonderen-2"}},[a._v("#")]),a._v(" İstek gönderen")]),a._v(" "),e("p",[a._v("Bu istek "),e("a",{attrs:{href:"#disseminator-daemon"}},[a._v("Disseminator arka plan programı")]),a._v(" tarafından gönderilir.")]),a._v(" "),e("h4",{attrs:{id:"veri-iste-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#veri-iste-2"}},[a._v("#")]),a._v(" Veri iste")]),a._v(" "),e("p",[a._v("Veri boyutu da dahil olmak üzere işlem verileri:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("data_size (4 bytes)")])]),a._v(" "),e("li",[e("p",[a._v("Size of the transaction data, in bytes.")])]),a._v(" "),e("li",[e("p",[a._v("data (data_size bytes)")])])]),a._v(" "),e("p",[a._v("İşlem verileri.")]),a._v(" "),e("h4",{attrs:{id:"talep-isleme-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#talep-isleme-2"}},[a._v("#")]),a._v(" Talep işleme")]),a._v(" "),e("p",[a._v("İşlemi doğrular ve işlem kuyruğuna ekler.")]),a._v(" "),e("h4",{attrs:{id:"cevap-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cevap-2"}},[a._v("#")]),a._v(" Cevap")]),a._v(" "),e("p",[a._v("Hayır.")]),a._v(" "),e("h2",{attrs:{id:"tip-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tip-4"}},[a._v("#")]),a._v(" Tip 4")]),a._v(" "),e("h4",{attrs:{id:"istek-gonderen-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-gonderen-3"}},[a._v("#")]),a._v(" İstek gönderen")]),a._v(" "),e("p",[a._v("Bu istek "),e("a",{attrs:{href:"#confirmations-daemon"}},[a._v("Onaylar arka plan programı")]),a._v(" tarafından gönderilir.")]),a._v(" "),e("h4",{attrs:{id:"veri-iste-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#veri-iste-3"}},[a._v("#")]),a._v(" Veri iste")]),a._v(" "),e("p",[a._v("Block ID.")]),a._v(" "),e("h4",{attrs:{id:"cevap-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cevap-3"}},[a._v("#")]),a._v(" Cevap")]),a._v(" "),e("p",[a._v("Block hash.")]),a._v(" "),e("p",[a._v('Bu ID\'ye sahip bir blok yoksa "0" döndürür.')]),a._v(" "),e("h2",{attrs:{id:"tip-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tip-7"}},[a._v("#")]),a._v(" Tip 7")]),a._v(" "),e("h4",{attrs:{id:"istek-gonderen-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-gonderen-4"}},[a._v("#")]),a._v(" İstek gönderen")]),a._v(" "),e("p",[a._v("Bu istek "),e("a",{attrs:{href:"#blockcollection-daemon"}},[a._v("BlockCollection arka plan programı")]),a._v(" tarafından gönderilir.")]),a._v(" "),e("h4",{attrs:{id:"veri-iste-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#veri-iste-4"}},[a._v("#")]),a._v(" Veri iste")]),a._v(" "),e("p",[a._v("Block ID.")]),a._v(" "),e("ul",[e("li",[a._v("block_id (4 bytes)")])]),a._v(" "),e("h4",{attrs:{id:"cevap-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cevap-4"}},[a._v("#")]),a._v(" Cevap")]),a._v(" "),e("p",[a._v("Veri boyutu dahil blok verileri.")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("data_size (4 bytes)")])]),a._v(" "),e("li",[e("p",[a._v("Size of the block data, in bytes.")])]),a._v(" "),e("li",[e("p",[a._v("data (data_size bytes)")])])]),a._v(" "),e("p",[a._v("Blok verileri.")]),a._v(" "),e("p",[a._v("Bu kimliğe sahip bir blok yoksa bağlantı kapatılır.")]),a._v(" "),e("h2",{attrs:{id:"tip-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tip-10"}},[a._v("#")]),a._v(" Tip 10")]),a._v(" "),e("h4",{attrs:{id:"istek-gonderen-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#istek-gonderen-5"}},[a._v("#")]),a._v(" İstek gönderen")]),a._v(" "),e("p",[a._v("Bu istek "),e("a",{attrs:{href:"#blockcollection-daemon"}},[a._v("BlockCollection arka plan programı")]),a._v(" tarafından gönderilir.")]),a._v(" "),e("h4",{attrs:{id:"veri-iste-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#veri-iste-5"}},[a._v("#")]),a._v(" Veri iste")]),a._v(" "),e("p",[a._v("Hayır.")]),a._v(" "),e("h4",{attrs:{id:"cevap-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cevap-5"}},[a._v("#")]),a._v(" Cevap")]),a._v(" "),e("p",[a._v("Block ID.")]),a._v(" "),e("ul",[e("li",[a._v("block_id (4 bytes)")])])])}),[],!1,null,null,null);r.default=l.exports}}]);