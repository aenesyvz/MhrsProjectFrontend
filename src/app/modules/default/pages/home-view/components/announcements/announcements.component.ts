import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/DTOs/announcementDtos';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  title: string = "Duyurular";
  selectAnnouncement: Announcement | null = null;

  announcementList: Announcement[] = [
    {
      id: "1",
      title: "MHRS'DE CEPTEN RANDEVU HATIRLATMA DÖNEMİ",
      explain: "Sağlık Bakanlığına bağlı tüm sağlık kurum ve kuruluşlarına muayene randevu hizmeti sunan Merkezi Hekim Randevu Sistemi (MHRS), gelişmiş teknolojiler ışığında yenilenmeye ve hizmet kalitesini artırmaya devam ediyor." +
        "2010 yılından bu yana tüm Türkiye’ye kesintisiz hizmet veren MHRS, randevulara artan talebe karşılık yeni bir uygulamayı daha hayata geçirdi. MHRS’de yoğunlaşan talebe cevap vermek, randevuları hatırlatarak MHRS kolaylığından yararlanma oranını yükseltmek ve gerekli durumda iptalini gerçekleştirerek muayene saatlerini tekrar randevuya açmak için randevu tarihinden 1 gün önce vatandaşlara tercihine göre SMS ve sesli arama ile randevu hatırlatma/iptal servislerini hayata geçirdi. Böylece, gidemeyeceği muayene randevularının iptalini gerçekleştiren vatandaşlar diğer vatandaşların MHRS’ den faydalanmasına katkı sağlayacak.",
      url: "jjjjjjjjjjj"
    },
    {
      id: "2",
      title: "MHRS e-DEVLET BULUŞMASI",
      explain: "e-Devlet şifresi olan vatandaşlarımız, MHRS üyeliği bulunmasa bile mhrs.gov.tr adresinden e-Devlet girişiyle de MHRS'nin sunduğu hizmetlerden yararlanabilmektedir."
        + "Ana sayfada bulunan 'Randevu Al' butonu tıklandıktan sonra açılan sayfada 'e-Devlet ile Giriş' seçilerek, kullanıcı bilgileri doldurulup, sisteme kolayca giriş sağlanacaktır. e-Devlet üzerinden mhrs.gov.tr'ye giriş yapan vatandaşlar; randevu oluşturma, iptal etme, geçmiş randevularını görüntüleme gibi bütün hizmetlere kolayca erişebilecektir",
      url: "jjjjjjjjjjj"
    },
    {
      id: "3",
      title: "ÖNCELİKLİ HASTALAR UYGULAMASI",
      explain: "İhtiyaçları önceliğimiz olan 65 yaş üstü, kanser hastası, kimsesiz, riskli gebe ve engelli vatandaşlarımız için MHRS'de randevu önceliği uygulaması başlatıldı." +
        "Hekimlerimizin günlük belli kontenjanları otomatik olarak bu vatandaşlarımıza ayrılmaktadır. Sağlık Bakanlığı kayıtlarında 'öncelikli' kaydı bulunan vatandaşlarımız kendilerine ayrılmış olan kontenjandan faydalanarak randevu alabilmektedirler.",
      url: "jjjjjjjjjjj"
    },
    {
      id: "4",
      title: "MHRS Çalışma Usul ve Esasları Hakkında Yönerge Yayınlandı",
      explain: "T.C. Sağlık Bakanlığı, Sağlık Bilgi Sistemleri Genel Müdürlüğü tarafından Merkezi Hekim Randevu Sistemi (MHRS) yönergesinde sistemin teknik alt yapısı ve işleyişine dair bazı düzenlemeler yapılan yönergeyi onayladı." +

        "Vatandaşların, Sağlık Bakanlığına bağlı sağlık kuruluşlarından hizmet almasını kolaylaştırmak maksadıyla yapılan güncelleme, 2016 yılı itibari ile hayata geçti." +

        "İlgili yönerge için tıklayınız",
      url: "jjjjjjjjjjj"
    },
    {
      id: "5",
      title: "MHRS'DEN GURURLANDIRAN ÖDÜL",
      explain: "Daha önce EMEA (Avrupa, Orta Asya ve Afrika) bölgesinin “Best Outsourcing Partnership” (En İyi Dış Kaynak Ortaklığı) kategorisinde 2017 yılı birincisi olan MHRS, şimdi de kıtalararası dünya birinciliğini elde etti." +

        "Türkiye'nin öz kaynakları ile hayat bulan ve hastanelere tek merkezden randevu alma imkanı sunan MHRS, uluslararası büyük bir ödül daha kazandı. Dünyada, ülkesindeki tüm hastaneleri merkezi randevu sisteminde buluşturan ilk ve tek sistem olan MHRS, tescillenen başarısı ile bizleri bir kez daha gururlandırdı." +

        "Londra'da düzenlenen, Avrupa, Amerika, Orta Asya ve Afrika'dan birçok temsilcinin yarıştığı ve Çağrı merkezi sektörünün en saygın yarışmalarından olan Contact Center World Awards'a 'Best Outsourcing Partnership' (En İyi Dış Kaynak Ortaklığı) kategorisinde katılan MHRS, dünyanın en iyi çağrı merkezlerini geride bırakarak 2017 yılı dünya birincisi oldu.",
      url: "jjjjjjjjjjj"
    },
    {
      id: "6",
      title: "SEMT POLİKLİNİKLERİNE RANDEVU VERİLMEYE BAŞLANDI",
      explain: "Sağlık Bakanlığına bağlı hastanelerin semt polikliniklerine MHRS üzerinden randevu oluşturabilme uygulaması Türkiye genelinde hizmete girdi. Vatandaşlar, bundan böyle MHRS üzerinden semt polikliniklerini ayrı bir kurum gibi görüntüleyip randevu alabilecek." +

        "Semt polikliniklerine ayrı birer kurum gibi MHRS üzerinden randevu oluşturabilme uygulaması tüm Türkiye'de hizmete girdi. Vatandaşların ALO182’ye alternatif olarak aynı bilgilere erişerek muayene randevusu alabildiği mhrs.gov.tr ve MHRS Mobil uygulamasında yapılan güncelleme ile semt poliklinikleri artık bağlı olduğu ana hastanenin altında ayrı ayrı listelenecek." +

        "Uygulama ile Sağlık bakanlığına bağlı hastanelerin çeşitli lokasyonlarında bulunan alt polikliniklerine dair bilgiler görüntülenebilecek. Bu sayede vatandaşların en yakın hizmet noktasını seçerek randevu alabilmesi ve alt polikliniklere ana hastanenin ismi ile randevu verildiğinde yaşanan karışıklıkların giderilmesi amaçlanıyor.",
      url: "jjjjjjjjjjj"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  openAnnouncementDetail(announcementId: string) {
    this.selectAnnouncement = this.announcementList.find(x => x.id === announcementId)!;
  }

  closeAnnouncementDetail() {
    this.selectAnnouncement = null;
  }

}
