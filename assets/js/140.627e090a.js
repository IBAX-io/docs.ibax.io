(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{414:function(a,r,n){"use strict";n.r(r);var e=n(14),l=Object(e.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"synchronized-monitoring-tool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-monitoring-tool"}},[a._v("#")]),a._v(" Senkronize İzleme Aracı ")]),a._v(" "),r("p",[a._v("Desync_monitor, belirtilen düğümdeki veritabanının senkronize edilip edilmediğini doğrulamak için kullanılabilecek özel bir araçtır.")]),a._v(" "),r("p",[a._v("Araç, arka plan programı olarak kullanılabilir veya tek seferlik bir kontrol gerçekleştirmek için başlatılabilir.")]),a._v(" "),r("p",[a._v("Aletin çalışma prensibi aşağıdakilere dayanmaktadır:")]),a._v(" "),r("p",[a._v("1.Her blok, tüm işlemlerin tüm değişikliklerinin karmasını içerir, belirtilen düğümden son blok kimliğini sağlamasını isteyin;\n2.Ardından tüm düğümlerden bu ID ile bir blok talep edin ve yukarıdaki hash'leri karşılaştırın;\n3.Eğer hashler farklı ise, komutta belirtilen e-posta adresine bir senkronizasyon hata mesajı gönderilecektir.")]),a._v(" "),r("h2",{attrs:{id:"location"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[a._v("#")]),a._v(" Konum ")]),a._v(" "),r("p",[a._v("Araç, "),r("code",[a._v("tools/desync_monitor/")]),a._v(" dizininde bulunur.")]),a._v(" "),r("h2",{attrs:{id:"command-prompt-flags"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#command-prompt-flags"}},[a._v("#")]),a._v(" Komut istemi bayrakları ")]),a._v(" "),r("p",[a._v("Komut isteminden aşağıdaki bayraklar kullanılabilir:")]),a._v(" "),r("ul",[r("li",[a._v("confPath - Yapılandırma dosyasının yolu. Varsayılan dosya adı "),r("code",[a._v("config.toml")]),a._v("dur;")]),a._v(" "),r("li",[a._v('nodeList - İstenen bloğun virgülle ayrılmış düğüm listesi. Varsayılan "127.0.0.1:7079"dur;')]),a._v(" "),r("li",[a._v('daemonMode - Bir arka plan programı olarak başlatılır ve her N saniyede bir kimlik doğrulama gerektiğinde kullanılmalıdır. Bu bayrak varsayılan olarak "yanlış" olarak ayarlanmıştır;')]),a._v(" "),r("li",[a._v('queryingPeriod - Araç bir arka plan programı olarak başlatılırsa, bu parametre kontroller arasındaki zaman aralığını (saniye cinsinden) varsayılan olarak "1" saniye olarak ayarlar.')]),a._v(" "),r("li",[a._v("alertMessageTo – Senkronizasyon uyarı hatalarının gönderileceği e-posta adresi.\n"),r("ul",[r("li",[a._v("alertMessageSubj - Uyarı mesajındaki mesaj konusu, varsayılan olarak "),r("code",[a._v("düğüm senkronizasyonu")]),a._v(" sorunu;")]),a._v(" "),r("li",[a._v("alertMessageFrom - Mesajın gönderildiği adres.")]),a._v(" "),r("li",[a._v("smtpHost - e-posta göndermek için kullanılan SMTP sunucusu ana bilgisayarı, varsayılan olarak "),r("code",[a._v('""')]),a._v(";")]),a._v(" "),r("li",[a._v('smtpPort - e-posta mesajları göndermek için kullanılan SMTP sunucu bağlantı noktası, varsayılan olarak "25";')]),a._v(" "),r("li",[a._v("smtpUsername - SMTP sunucusu kullanıcı adı, varsayılan olarak "),r("code",[a._v('""')]),a._v(";")]),a._v(" "),r("li",[a._v("smtpPassword - SMTP sunucu şifresi, varsayılan olarak "),r("code",[a._v('""')]),a._v(".")])])])]),a._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Yapılandırma ")]),a._v(" "),r("p",[a._v("Araç, toml formatında bir yapılandırma dosyası kullanır.")]),a._v(" "),r("p",[a._v("Varsayılan olarak, ikili dosyanın başlatılacağı klasördeki config.toml dosyasını arayacaktır.")]),a._v(" "),r("p",[a._v("Dosya yolu, configPath bayrağıyla değiştirilebilir.")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('nodes_list = ["http://127.0.0.1:7079", "http://127.0.0.1:7002"]\n\n[daemon]\ndaemon = false\nquerying_period = 1\n\n[alert_message]\nto = ""\nsubject = "problem with xxx nodes"\nfrom = ""\n\n[smtp]\nhost = ""\nport = 25\nusername = ""\npassword = ""\n')])])]),r("h3",{attrs:{id:"nodes-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodes-list"}},[a._v("#")]),a._v(" node_list ")]),a._v(" "),r("ul",[r("li",[a._v("knot_list - Bilgi isteyen düğümlerin (ana bilgisayarların) listesi.")])]),a._v(" "),r("h3",{attrs:{id:"daemon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[a._v("#")]),a._v(" [arka plan programı] ")]),a._v(" "),r("p",[a._v("Daemon modunun konfigürasyonu.")]),a._v(" "),r("ul",[r("li",[a._v("daemon_mode – Bir araç, bir arka plan programı olarak çalışır ve senkronizasyon kontrollerini gerçekleştirir.")]),a._v(" "),r("li",[a._v("querying_period - Senkronizasyon kontrolleri arasındaki zaman aralığı.")])]),a._v(" "),r("h3",{attrs:{id:"alert-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alert-message"}},[a._v("#")]),a._v(" [uyarı mesajı] ")]),a._v(" "),r("p",[a._v("Uyarı mesajı parametreleri.")]),a._v(" "),r("ul",[r("li",[a._v("için - alıcının senkronizasyon hatası uyarı mesajlarının e-postası;")]),a._v(" "),r("li",[a._v("konu - mesaj konusu;")]),a._v(" "),r("li",[a._v("gönderenin e-posta adresinden.")])]),a._v(" "),r("h3",{attrs:{id:"smtp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smtp"}},[a._v("#")]),a._v(" [smtp] ")]),a._v(" "),r("p",[a._v("Senkronizasyon hata mesajlarını göndermek için kullanılan Basit Posta Aktarım Protokolü (SMTP) sunucu parametreleri.")]),a._v(" "),r("ul",[r("li",[a._v("ana bilgisayar – SMTP sunucu host;")]),a._v(" "),r("li",[a._v("bağlantı noktası –SMTP sunucu bağlantı noktası;")]),a._v(" "),r("li",[a._v("kullanıcı adı – SMTP sunucusu kullanıcı adı;")]),a._v(" "),r("li",[a._v("şifre –SMTP sunucu şifresi;")])])])}),[],!1,null,null,null);r.default=l.exports}}]);