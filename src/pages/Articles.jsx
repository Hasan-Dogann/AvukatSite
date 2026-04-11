import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import articlesData from "../data/articlesData";
import Footer from "../components/Footer";

const Articles = () => {
  return (
    <>
      <Helmet>
        <title>Makaleler | Doğan Hukuk Bürosu</title>
        <meta
          name="description"
          content="Doğan Hukuk Bürosu tarafından hazırlanan hukuki bilgilendirme yazıları ve makaleler."
        />
      </Helmet>

      <main className="bg-[#f8f6f2] min-h-screen">
        <section className="bg-[#1f2937] text-white py-14">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4b06a] font-semibold">
              DOĞAN HUKUK BÜROSU
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-bold">Makaleler</h1>

            <p className="mt-4 max-w-3xl text-slate-300 text-sm md:text-base leading-7">
              Hukukun farklı alanlarına ilişkin, mevzuat temelli ve bilgilendirici
              içeriklere bu sayfadan ulaşabilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesData.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8b6b2e] font-semibold mb-3">
                    {article.category}
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-[#1f2937] leading-8 mb-3">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-500 mb-3">
                    {article.date} • {article.author}
                  </p>

                  <p className="text-sm md:text-base text-slate-600 leading-7 mb-5">
                    {article.summary}
                  </p>

                  <Link
                    to={`/makaleler/${article.slug}`}
                    className="inline-block text-sm font-semibold text-[#8b6b2e] hover:text-[#1f2937] transition"
                  >
                    Devamını Oku →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Articles;