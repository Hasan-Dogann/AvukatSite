import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>İletişim | Doğan Hukuk Bürosu | Lüleburgaz</title>
        <meta
          name="description"
          content="Doğan Hukuk Bürosu iletişim bilgilerine ulaşın. Mehmet Doğan Avukat ile Lüleburgaz ve Kırklareli bölgesinde hukuki danışmanlık ve avukatlık hizmetleri için iletişime geçebilirsiniz."
        />
        <meta
          name="keywords"
          content="Lüleburgaz avukat iletişim, Kırklareli avukat iletişim, Mehmet Doğan iletişim, Doğan Hukuk Bürosu adres telefon"
        />
        <meta name="author" content="Doğan Hukuk Bürosu" />
      </Helmet>

      <main className="bg-[#f8f6f2] min-h-screen">
        <section className="bg-[#1f2937] text-white py-14">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4b06a] font-semibold">
              DOĞAN HUKUK BÜROSU
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-bold">İletişim</h1>

            <p className="mt-4 max-w-2xl text-slate-300 text-sm md:text-base leading-7">
              Mehmet Doğan ile iletişime geçmek için aşağıdaki bilgileri
              kullanabilir veya iletişim formu aracılığıyla tarafımıza
              ulaşabilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-2xl overflow-hidden shadow border">
              <iframe
                title="Doğan Hukuk Bürosu Harita Konumu"
                src="https://www.google.com/maps?q=41.4038239,27.3553619&z=17&output=embed"
                className="w-full h-[320px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] mb-6">
                İletişim Bilgileri
              </h2>

              <div className="space-y-5 text-slate-700 leading-8 text-sm md:text-base">
                <p>
                  Avukatlık Kanunu ve meslek kuralları çerçevesinde ücretsiz
                  danışmanlık verilmemektedir.
                </p>

                <div>
                  <strong>Telefon:</strong>
                  <br />
                  0543 605 35 17
                </div>

                <div>
                  <strong>E-Posta:</strong>
                  <br />
                  avmehmetdogan1@gmail.com
                </div>

                <div>
                  <strong>Adres:</strong>
                  <br />
                  Kocasinan Mah. Okullar Cad.
                  <br />
                  Osmançeralp Apt. No:23 Kat:2 Daire:3
                  <br />
                  Lüleburgaz / KIRKLARELİ
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow border">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#1f2937]">
                İletişim Formu
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="İsim Soyisim"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#8b6b2e]"
                />

                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#8b6b2e]"
                />

                <input
                  type="email"
                  placeholder="E-Posta"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#8b6b2e]"
                />

                <input
                  type="text"
                  placeholder="Konu"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#8b6b2e]"
                />

                <textarea
                  rows="5"
                  placeholder="Mesajınız"
                  className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:border-[#8b6b2e]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#1f2937] text-white py-3 rounded-lg font-semibold hover:bg-[#111827]"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;