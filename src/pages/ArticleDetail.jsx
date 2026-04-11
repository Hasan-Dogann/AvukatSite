import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import articlesData from "../data/articlesData";
import Footer from "../components/Footer";

const ArticleDetail = () => {
  const { slug } = useParams();

  const article = articlesData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <>
        <main className="min-h-screen bg-[#f8f6f2] py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#1f2937] mb-4">
              Makale bulunamadı
            </h1>

            <Link
              to="/makaleler"
              className="text-[#8b6b2e] font-semibold hover:text-[#1f2937] transition"
            >
              ← Makalelere dön
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Doğan Hukuk Bürosu</title>
        <meta name="description" content={article.summary} />
      </Helmet>

      <main className="bg-[#f8f6f2] min-h-screen">
        <section className="bg-[#1f2937] text-white py-14">
          <div className="max-w-5xl mx-auto px-6">
            <Link
              to="/makaleler"
              className="inline-block text-sm font-semibold text-[#d4b06a] hover:text-white transition mb-6"
            >
              ← Tüm makalelere dön
            </Link>

            <p className="text-xs uppercase tracking-[0.22em] text-[#d4b06a] font-semibold mb-3">
              {article.category}
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {article.title}
            </h1>

            <p className="mt-5 text-sm md:text-base text-slate-300">
              {article.date} • {article.author}
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm">
              <p className="text-sm text-[#8b6b2e] font-semibold mb-6">
                Kaynak dayanağı: {article.sourceLabel}
              </p>

              <div className="text-slate-700 text-base md:text-lg leading-9 whitespace-pre-line">
                {article.content}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ArticleDetail;