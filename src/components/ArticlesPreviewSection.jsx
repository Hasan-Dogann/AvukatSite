import { Link } from "react-router-dom";
import articlesData from "../data/articlesData";

const ArticlesPreviewSection = () => {
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b6b2e] font-semibold">
              DOĞAN HUKUK BÜROSU
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#1f2937]">
              Makaleler
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl leading-7">
              Resmî mevzuat temelleri esas alınarak hazırlanmış bilgilendirici
              içeriklere buradan ulaşabilirsiniz.
            </p>
          </div>

          <Link
            to="/makaleler"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-[#1f2937] text-[#1f2937] text-sm font-semibold hover:bg-[#1f2937] hover:text-white transition"
          >
            Tümü Gör
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl border border-slate-200 bg-[#f8f6f2] p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6b2e] mb-3">
                {article.category}
              </p>

              <h3 className="text-lg font-bold text-[#1f2937] leading-7 mb-3 min-h-[56px]">
                {article.title}
              </h3>

              <p className="text-sm text-slate-600 leading-7 mb-5">
                {article.summary}
              </p>

              <Link
                to={`/makaleler/${article.slug}`}
                className="text-sm font-semibold text-[#8b6b2e] hover:text-[#1f2937] transition"
              >
                Devamını Oku →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPreviewSection;