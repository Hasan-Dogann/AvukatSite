import { Helmet } from "react-helmet-async";
import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | Doğan Hukuk Bürosu | Lüleburgaz Avukat</title>
        <meta
          name="description"
          content="Doğan Hukuk Bürosu tarafından Lüleburgaz ve Kırklareli bölgesinde sunulan ceza hukuku, aile ve boşanma hukuku, icra hukuku, miras hukuku ve diğer tüm hukuki hizmet alanlarını inceleyin."
        />
        <meta
          name="keywords"
          content="Lüleburgaz avukat hizmetleri, ceza avukatı Lüleburgaz, boşanma avukatı, icra avukatı, miras avukatı, Kırklareli avukat"
        />
      </Helmet>

      <main>
        <section className="bg-[#f8f6f2] pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h1 className="text-4xl font-bold text-[#1f2937] mb-6">
              Hizmet Alanlarımız
            </h1>

            <p className="text-lg text-slate-700 leading-8 max-w-3xl">
              Doğan Hukuk Bürosu olarak, Lüleburgaz ve Kırklareli bölgesinde
              müvekkillerimize geniş kapsamlı hukuki danışmanlık ve dava takibi
              hizmetleri sunmaktayız. Ceza hukuku, aile ve boşanma hukuku, icra ve
              iflas hukuku, miras hukuku ve diğer tüm hukuki alanlarda profesyonel
              destek sağlamaktayız.
            </p>
          </div>

          <ServicesSection showAll={true} />
        </section>
      </main>
    </>
  );
};

export default Services;