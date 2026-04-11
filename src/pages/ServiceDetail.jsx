import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <>
        <Helmet>
          <title>Hizmet Bulunamadı | Doğan Hukuk Bürosu</title>
          <meta
            name="description"
            content="Aradığınız hizmet sayfasına ulaşılamadı. Doğan Hukuk Bürosu’nun tüm hukuki hizmet alanlarını incelemek için hizmetler sayfasına dönebilirsiniz."
          />
        </Helmet>

        <main className="bg-[#f8f6f2] min-h-screen py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-3xl font-bold text-[#1f2937]">
              Hizmet bulunamadı
            </h1>
            <Link
              to="/services"
              className="inline-block mt-6 text-[#8b6b2e] font-semibold"
            >
              Hizmetler sayfasına dön
            </Link>
          </div>
        </main>
      </>
    );
  }

  const pageTitle = `${service.title} | Mehmet Doğan Avukat | Lüleburgaz`;
  const pageDescription = `${service.title} alanında Doğan Hukuk Bürosu tarafından Lüleburgaz ve Kırklareli bölgesinde sunulan profesyonel hukuki danışmanlık ve avukatlık hizmetleri hakkında bilgi alın.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={`${service.title}, Lüleburgaz avukat, Kırklareli avukat, Mehmet Doğan Avukat, Doğan Hukuk Bürosu`}
        />
        <meta name="author" content="Doğan Hukuk Bürosu" />
      </Helmet>

      <main className="bg-[#f8f6f2] min-h-screen">
        <section className="bg-[#1f2937] text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4b06a] font-semibold">
              DOĞAN HUKUK BÜROSU
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold">
              {service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-200 leading-8">
              {service.shortDescription}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={service.image}
                alt={`${service.title} - Doğan Hukuk Bürosu Lüleburgaz`}
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1f2937] mb-8">
                {service.title} Hizmeti
              </h2>

              <div className="space-y-6 text-lg leading-8 text-slate-700">
                {service.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-white shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-[#1f2937] mb-4">
                  Hukuki Destek İçin Bizimle İletişime Geçin
                </h3>
                <p className="text-slate-700 leading-8">
                  Doğan Hukuk Bürosu olarak Lüleburgaz ve Kırklareli bölgesinde,
                  müvekkillerimize hukuki süreçlerin her aşamasında dikkatli,
                  şeffaf ve profesyonel destek sunmaktayız. {service.title} alanında
                  detaylı bilgi almak ve hukuki değerlendirme talep etmek için
                  bizimle iletişime geçebilirsiniz.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-md bg-[#1f2937] text-white font-semibold hover:bg-[#111827] transition"
                  >
                    İletişime Geçin
                  </Link>

                  <Link
                    to="/services"
                    className="px-6 py-3 rounded-md border border-[#1f2937] text-[#1f2937] font-semibold hover:bg-[#1f2937] hover:text-white transition"
                  >
                    Tüm Hizmetler
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetail;