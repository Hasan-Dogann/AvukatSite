const articlesData = [
  {
    id: 1,
    slug: "turkiye-cumhuriyeti-anayasasi-temel-ilkeler",
    title: "Türkiye Cumhuriyeti Anayasası ve Temel İlkeler",
    category: "Genel Hukuk",
    summary:
      "Anayasa; devletin temel yapısını, temel hak ve özgürlükleri ve kamu gücünün sınırlarını belirleyen en üst hukuk normudur.",
    content: `
Türkiye Cumhuriyeti Anayasası, hukuk düzeninin temelini oluşturan ana metindir. Devletin temel nitelikleri, kişilerin temel hak ve özgürlükleri ile yasama, yürütme ve yargı organlarının işleyişi anayasal çerçevede düzenlenir.

Uygulamada anayasal ilkeler; mülkiyet hakkı, adil yargılanma, kişi özgürlüğü, eşitlik ve hukuk devleti gibi birçok alanda doğrudan önem taşır. Bu nedenle anayasal hükümler, yalnızca kamu hukuku bakımından değil, özel hukuk uyuşmazlıklarının değerlendirilmesinde de temel bir referans niteliğindedir.

Hukuki ihtilafların çözümünde ilgili özel kanun hükümlerinin yanı sıra anayasal güvencelerin de birlikte değerlendirilmesi gerekir.
    `,
    date: "10 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "T.C. Anayasası",
  },
  {
    id: 2,
    slug: "avukatlik-kanunu-ve-avukatin-rolu",
    title: "Avukatlık Kanunu ve Avukatın Hukuki Rolü",
    category: "Avukatlık Hukuku",
    summary:
      "Avukatlık, kamu hizmeti niteliği taşıyan ve savunmayı temsil eden bağımsız bir meslektir. Avukat, hukuki uyuşmazlıkların adalet ve hakkaniyete uygun çözümünde önemli rol üstlenir.",
    content: `
Avukatlık mesleği, yalnızca dava takibi ile sınırlı olmayan; hukuki ilişkilerin düzenlenmesine, uyuşmazlıkların adalet ve hakkaniyete uygun biçimde çözülmesine katkı sunan bir meslektir.

Avukat, hukuki bilgisini ve tecrübesini müvekkilinin yararına kullanırken aynı zamanda hukuk düzeninin doğru işletilmesine de katkı sağlar. Bu yönüyle avukatlık, serbest meslek niteliği taşımakla birlikte kamu hizmeti boyutu da olan özel bir alandır.

Hak kaybı yaşamamak, süreci usule uygun yönetmek ve doğru hukuki stratejiyi belirlemek açısından profesyonel destek büyük önem taşır.
    `,
    date: "11 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "1136 Sayılı Avukatlık Kanunu",
  },
  {
    id: 3,
    slug: "ceza-hukukunda-temel-ilkeler",
    title: "Ceza Hukukunda Temel İlkeler",
    category: "Ceza Hukuku",
    summary:
      "Ceza hukuku; suç sayılan fiilleri, bunlara bağlanan yaptırımları ve ceza sorumluluğunun esaslarını düzenler. Kanunilik ve savunma hakkı bu alanın temel güvenceleridir.",
    content: `
Ceza hukukunda temel yaklaşım, bir fiilin ancak kanunda açıkça suç olarak tanımlanmış olması halinde cezalandırılabilmesidir. Bu nedenle kanunilik ilkesi ceza hukukunun merkezindedir.

Soruşturma ve kovuşturma sürecinde kişinin savunma hakkı, delillerin hukuka uygunluğu ve usuli güvenceler dikkatle değerlendirilmelidir. Her dosya kendi olay örgüsü ve delil yapısı içinde incelenir.

Ceza hukuku süreçleri, sonuçları bakımından ciddi hak kayıplarına yol açabileceği için dikkatli ve profesyonel hukuki takip gerektirir.
    `,
    date: "12 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "5237 Sayılı Türk Ceza Kanunu",
  },
  {
    id: 4,
    slug: "aile-ve-bosanma-hukukunda-genel-cerceve",
    title: "Aile ve Boşanma Hukukunda Genel Çerçeve",
    category: "Aile Hukuku",
    summary:
      "Aile ve boşanma hukukunda evlilik birliği, boşanma sebepleri, velayet, nafaka ve mal rejimi gibi başlıklar Türk Medenî Kanunu çerçevesinde değerlendirilir.",
    content: `
Aile hukuku, kişilerin aile birliği içindeki hak ve yükümlülüklerini düzenleyen temel hukuk alanlarından biridir. Boşanma sürecinde yalnızca evliliğin sona ermesi değil, velayet, nafaka, kişisel ilişki ve mal paylaşımı gibi başlıklar da birlikte değerlendirilir.

Anlaşmalı ve çekişmeli boşanma davaları farklı usul ve sonuçlar doğurabilir. Bu nedenle davanın niteliğine göre taleplerin ve hukuki stratejinin doğru belirlenmesi gerekir.

Aile hukukuna ilişkin uyuşmazlıklarda hem hukuki hem de kişisel sonuçlar önemli olduğundan dikkatli bir süreç yönetimi gerekir.
    `,
    date: "13 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "4721 Sayılı Türk Medenî Kanunu",
  },
  {
    id: 5,
    slug: "tazminat-hukukunda-sorumluluk-esaslari",
    title: "Tazminat Hukukunda Sorumluluk Esasları",
    category: "Tazminat Hukuku",
    summary:
      "Tazminat hukuku; zararın doğumu, sorumluluk şartları, illiyet bağı ve maddi-manevi taleplerin değerlendirilmesini kapsar.",
    content: `
Tazminat taleplerinde temel değerlendirme; zararın varlığı, zarar ile olay arasındaki uygun illiyet bağı ve hukuki sorumluluk şartlarının oluşup oluşmadığıdır.

Maddi tazminat ekonomik kayıpların giderilmesini, manevi tazminat ise kişilik değerlerinde meydana gelen ihlalin telafisini amaçlar. Her uyuşmazlıkta zararın kapsamı ve ispat durumu ayrıca incelenir.

Tazminat dosyalarında doğru hukuki nitelendirme ve delillerin zamanında sunulması belirleyici önem taşır.
    `,
    date: "14 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "6098 Sayılı Türk Borçlar Kanunu",
  },
  {
    id: 6,
    slug: "is-hukukunda-calisma-iliskisi-ve-haklar",
    title: "İş Hukukunda Çalışma İlişkisi ve Haklar",
    category: "İş Hukuku",
    summary:
      "İş hukuku; işçi ile işveren arasındaki çalışma ilişkisini, çalışma şartlarını, fesih süreçlerini ve tarafların hak ve sorumluluklarını düzenler.",
    content: `
İş hukuku, iş sözleşmesine dayalı çalışma ilişkilerinin çerçevesini belirleyen temel hukuk alanıdır. Ücret, çalışma süresi, izin, iş güvencesi ve fesih şartları bu alanın başlıca konularıdır.

İşe iade, kıdem tazminatı, ihbar tazminatı, fazla mesai ve yıllık izin alacakları uygulamada sıkça karşılaşılan uyuşmazlıklar arasında yer alır. Her dosyada sözleşme yapısı, kayıtlar ve fiili çalışma koşulları birlikte değerlendirilmelidir.

Sürelerin kaçırılmaması ve hak kaybı yaşanmaması bakımından iş hukuku süreçlerinin dikkatle takip edilmesi gerekir.
    `,
    date: "15 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "4857 Sayılı İş Kanunu",
  },
  {
    id: 7,
    slug: "gayrimenkul-ve-kira-uyusmazliklari",
    title: "Gayrimenkul ve Kira Uyuşmazlıkları",
    category: "Gayrimenkul Hukuku",
    summary:
      "Gayrimenkul ve kira ilişkilerinde sözleşme şartları, tahliye, kira bedeli ve tarafların borçları Türk Borçlar Kanunu çerçevesinde değerlendirilir.",
    content: `
Gayrimenkul hukukunda kira sözleşmeleri, tahliye süreçleri, kira bedelinin tespiti ve kullanım ilişkileri önemli yer tutar. Özellikle konut ve çatılı işyeri kiralarında tarafların hak ve yükümlülükleri ayrı dikkat gerektirir.

Uygulamada tahliye taahhüdü, kira artışı, temerrüt ve sözleşmenin sona ermesine ilişkin uyuşmazlıklar sıkça gündeme gelir. Bu tür dosyalarda sözleşme metni ve taraf davranışları belirleyici olur.

Gayrimenkul kaynaklı uyuşmazlıklarda hem maddi durum hem de usuli süreç dikkatle değerlendirilmelidir.
    `,
    date: "16 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "6098 Sayılı Türk Borçlar Kanunu",
  },
  {
    id: 8,
    slug: "miras-hukukunda-paylasim-ve-haklar",
    title: "Miras Hukukunda Paylaşım ve Haklar",
    category: "Miras Hukuku",
    summary:
      "Miras hukukunda yasal mirasçılık, saklı pay, vasiyetname, mirasın reddi ve terekenin paylaşımı Türk Medenî Kanunu çerçevesinde ele alınır.",
    content: `
Miras hukukunda temel mesele, miras bırakanın malvarlığının kimlere ve hangi esaslara göre geçeceğinin belirlenmesidir. Yasal mirasçılık düzeni ile saklı pay kuralları bu alandaki temel dayanaklardır.

Vasiyetname, mirasın reddi, miras ortaklığı ve paylaşım davaları uygulamada sık karşılaşılan başlıklardandır. Her uyuşmazlık, aile yapısı ve malvarlığı durumuna göre farklı sonuçlar doğurabilir.

Miras uyuşmazlıklarında belge yapısı ve hukuki sıralamanın doğru kurulması büyük önem taşır.
    `,
    date: "17 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "4721 Sayılı Türk Medenî Kanunu",
  },
  {
    id: 9,
    slug: "icra-takibi-ve-alacak-tahsili",
    title: "İcra Takibi ve Alacak Tahsili",
    category: "İcra Hukuku",
    summary:
      "İcra hukuku; alacakların yasal yollarla tahsilini, takip süreçlerini, itiraz prosedürlerini ve cebri icra usullerini düzenler.",
    content: `
İcra takibi, alacaklının alacağını hukuki yolla tahsil etmesini sağlayan teknik bir süreçtir. Takibin türü, alacağın niteliğine göre değişebilir.

Ödeme emri, itiraz, haciz, satış ve tahsil aşamaları takip hukukunun temel adımlarını oluşturur. Sürelerin doğru hesaplanması ve usul işlemlerinin eksiksiz yürütülmesi önemlidir.

İcra dosyalarında yapılacak bir usul hatası dahi süreci doğrudan etkileyebileceğinden profesyonel hukuki destek önem taşır.
    `,
    date: "18 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "2004 Sayılı İcra ve İflas Kanunu",
  },
  {
    id: 10,
    slug: "idare-hukukunda-dava-ve-basvuru-surecleri",
    title: "İdare Hukukunda Dava ve Başvuru Süreçleri",
    category: "İdare Hukuku",
    summary:
      "İdare hukukunda kamu gücü kullanılarak tesis edilen işlemler, başvuru yolları ve yargısal denetim usulleri belirli süre ve kurallara tabidir.",
    content: `
İdare hukuku uyuşmazlıklarında idari işlem veya eylemin niteliği, başvuru süresi ve görevli yargı yolu özel önem taşır. İdari işlemlere karşı açılacak davalarda sürelerin kaçırılmaması belirleyici olabilir.

İptal davası, tam yargı davası ve idareye başvuru prosedürleri uygulamada sık karşılaşılan hukuki başlıklardır. Bu alanda dava şartları ve usul hükümleri ayrı dikkat gerektirir.

Kamu kurumlarıyla yaşanan uyuşmazlıklarda dosyanın niteliğine uygun hukuki yolun en başta doğru belirlenmesi gerekir.
    `,
    date: "19 Nisan 2026",
    author: "Mehmet Doğan",
    sourceLabel: "2577 Sayılı İdari Yargılama Usulü Kanunu",
  },
];

export default articlesData;