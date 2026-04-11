import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImage from "../assets/hero-law.jpg";
import ServicesSection from "../components/ServicesSection";
import ArticlesPreviewSection from "../components/ArticlesPreviewSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  const lawOfficeSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Doğan Hukuk Bürosu",
    image: "https://www.doganhukukburosu.com/preview.jpg",
    url: "https://www.doganhukukburosu.com",
    telephone: "+90 543 605 35 17",
    email: "avmehmetdogan1@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kocasinan Mah. Okullar Cad. Osmançeralp Apt. No:23 Kat:2 Daire:3",
      addressLocality: "Lüleburgaz",
      addressRegion: "Kırklareli",
      addressCountry: "TR",
    },
    areaServed: ["Lüleburgaz", "Kırklareli", "Türkiye"],
    founder: {
      "@type": "Person",
      name: "Mehmet Doğan",
      jobTitle: "Avukat",
    },
    serviceType: [
      "Ceza Hukuku",
      "Aile ve Boşanma Hukuku",
      "Tazminat Hukuku",
      "İş Hukuku",
      "Gayrimenkul Hukuku",
      "Miras Hukuku",
      "İcra Hukuku",
      "İdare Hukuku",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Doğan Hukuk Bürosu | Mehmet Doğan Avukat | Lüleburgaz Kırklareli</title>
        <meta
          name="description"
          content="Doğan Hukuk Bürosu, Mehmet Doğan Avukat tarafından Lüleburgaz ve Kırklareli bölgesinde ceza hukuku, aile hukuku, icra hukuku, miras hukuku ve diğer hukuki alanlarda profesyonel avukatlık ve danışmanlık hizmeti sunmaktadır."
        />
        <meta
          name="keywords"
          content="Lüleburgaz avukat, Kırklareli avukat, Mehmet Doğan Avukat, Doğan Hukuk Bürosu, ceza avukatı, boşanma avukatı, icra avukatı, miras avukatı"
        />
        <meta name="author" content="Doğan Hukuk Bürosu" />
        <script type="application/ld+json">
          {JSON.stringify(lawOfficeSchema)}
        </script>
      </Helmet>

      <main>
        <section
          className="relative h-[72vh] min-h-[540px] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "right top",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#0f172a]/60 to-[#0f172a]/40"></div>

          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.28em] text-[#d4b06a] font-semibold">
                DOĞAN HUKUK BÜROSU
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]">
                Hukuki Süreçlerinizde
                <span className="block mt-2 text-[#efe2c2]">
                  Güçlü ve Güvenilir Destek
                </span>
              </h1>

              <p className="mt-6 text-base md:text-xl leading-8 text-slate-200 max-w-xl">
                Müvekkillerimize şeffaf, dikkatli ve profesyonel bir yaklaşımla
                hukuki danışmanlık ve dava takibi hizmeti sunuyoruz.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-md bg-[#d4b06a] text-slate-950 font-semibold text-sm md:text-base hover:opacity-90 transition"
                >
                  Bize Ulaşın
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3 rounded-md border border-white text-white font-semibold text-sm md:text-base hover:bg-white hover:text-slate-950 transition"
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f6f2] py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
            <div className="text-[#1f2937]">
              <div className="border-l-4 border-[#d4b06a] pl-4">
                <h2 className="text-2xl font-bold uppercase">Mehmet Doğan</h2>

                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[#8b6b2e] font-semibold">
                  Avukat
                </p>

                <p className="mt-3 text-base text-slate-700">
                  Lüleburgaz / Kırklareli
                </p>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8b6b2e] font-semibold">
                    Ofis
                  </p>
                  <p className="mt-1 text-lg font-bold">Doğan Hukuk Bürosu</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8b6b2e] font-semibold">
                    Telefon
                  </p>
                  <p className="mt-1 text-lg font-bold">0543 605 35 17</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8b6b2e] font-semibold">
                    E-posta
                  </p>
                  <p className="mt-1 text-sm">avmehmetdogan1@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] mb-6">
                Hakkımızda
              </h2>

              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Mehmet Doğan, Lüleburgaz’da bireysel ve kurumsal
                  müvekkillerine güvene dayalı, dikkatli ve profesyonel bir
                  hukuki hizmet sunma anlayışıyla faaliyet göstermektedir.
                </p>

                <p>
                  Hukuki süreçlerin her aşamasında ihtiyaçları doğru analiz
                  ederek; açık iletişim, düzenli takip ve çözüm odaklı bir
                  yaklaşım benimsemektedir.
                </p>

                <p>
                  Doğan Hukuk Bürosu; hukuki danışmanlık, dava takibi ve
                  uyuşmazlık çözüm süreçlerinde güvenilir bir destek sunmayı
                  hedeflemektedir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ArticlesPreviewSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;