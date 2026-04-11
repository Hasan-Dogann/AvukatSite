import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Mehmet Doğan Avukat | Doğan Hukuk Bürosu</title>
        <meta
          name="description"
          content="Mehmet Doğan Avukat tarafından Lüleburgaz ve Kırklareli bölgesinde faaliyet gösteren Doğan Hukuk Bürosu hakkında bilgi alın. Profesyonel, güvenilir ve çözüm odaklı hukuki hizmet anlayışı."
        />
        <meta
          name="keywords"
          content="Mehmet Doğan kimdir, Lüleburgaz avukat, Kırklareli avukat, Doğan Hukuk Bürosu hakkında"
        />
        <meta name="author" content="Doğan Hukuk Bürosu" />
      </Helmet>

      <section className="bg-[#f8f6f2] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-16">
          
          {/* SOL TARAF */}
          <div className="text-[#1f2937]">
            <div className="border-l-4 border-[#d4b06a] pl-4">
              <h1 className="text-3xl font-bold leading-tight uppercase">
                Mehmet Doğan
              </h1>
              <p className="mt-2 text-sm tracking-[0.2em] uppercase text-[#8b6b2e] font-semibold">
                Avukat
              </p>
              <p className="mt-3 text-lg font-medium text-slate-700">
                Lüleburgaz / Kırklareli
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b2e] font-semibold">
                  Telefon
                </p>
                <p className="mt-2 text-2xl font-bold">0543 605 35 17</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b2e] font-semibold">
                  E-posta
                </p>
                <p className="mt-2 text-lg font-medium break-words">
                  avmehmetdogan1@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF */}
          <div className="text-[#1f2937]">
            <h2 className="text-3xl font-bold mb-8">Hakkımızda</h2>

            <div className="space-y-8 text-lg leading-9 text-slate-700">
              <p>
                Mehmet Doğan Hukuk Bürosu, Lüleburgaz’da bireysel ve kurumsal
                müvekkillerine güvene dayalı, dikkatli ve profesyonel bir hukuki
                hizmet sunma anlayışıyla faaliyet göstermektedir.
              </p>

              <p>
                Hukuki süreçlerin her aşamasında müvekkillerin ihtiyaçlarını doğru
                analiz ederek; açık iletişim, düzenli takip ve çözüm odaklı bir
                yaklaşım benimsemektedir. Her dosyada titizlikle çalışmak, süreci
                anlaşılır şekilde yürütmek ve müvekkilin haklarını en iyi şekilde
                savunmak temel önceliktir.
              </p>

              <p>
                Mehmet Doğan Hukuk Bürosu; hukuki danışmanlık, dava takibi ve
                uyuşmazlık çözüm süreçlerinde güvenilir bir destek sunmayı
                hedeflemekte, mesleki etik ilkeler doğrultusunda çalışmalarını
                sürdürmektedir.
              </p>

              <p>
                Kırklareli Lüleburgaz merkezli olarak faaliyet gösteren büromuz,
                her müvekkiline özenli, şeffaf ve sorumluluk sahibi bir hizmet
                anlayışıyla yaklaşmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;