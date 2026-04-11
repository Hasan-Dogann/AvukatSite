const ContactSection = () => {
  return (
    <section className="bg-[#f8f6f2] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-xl font-semibold text-[#1f2937] mb-3">
            İletişim
          </h2>

          <p className="text-xs text-slate-600 mb-4 leading-6">
            Avukatlık Kanunu ve meslek kuralları çerçevesinde ücretsiz danışmanlık
            verilmemektedir.
          </p>

          <div className="space-y-4 text-sm text-slate-700 leading-7">
            <div>
              <span className="font-semibold text-[#8b6b2e]">Telefon:</span>
              <br />
              0543 605 35 17
            </div>

            <div>
              <span className="font-semibold text-[#8b6b2e]">E-Posta:</span>
              <br />
              avmehmetdogan1@gmail.com
            </div>

            <div>
              <span className="font-semibold text-[#8b6b2e]">Adres:</span>
              <br />
              Kocasinan Mah. Okullar Cad.
              <br />
              Osmançeralp Apt. No:23 Kat:2 Daire:3
              <br />
              Lüleburgaz / KIRKLARELİ
            </div>
          </div>

          <div className="mt-5 rounded-xl overflow-hidden border border-slate-200">
            <iframe
              title="konum"
              src="https://www.google.com/maps?q=41.4038239,27.3553619&z=15&output=embed"
              className="w-full h-[170px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-[#1f2937] mb-4">
            İletişim Formu
          </h3>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="İsim Soyisim"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8b6b2e]"
            />

            <input
              type="tel"
              placeholder="Telefon"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8b6b2e]"
            />

            <input
              type="email"
              placeholder="E-Posta"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#8b6b2e]"
            />

            <textarea
              rows="4"
              placeholder="Mesajınız"
              className="w-full border rounded-lg px-3 py-2 text-sm resize-none outline-none focus:border-[#8b6b2e]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#1f2937] text-white py-2 text-sm rounded-lg font-semibold hover:bg-[#111827] transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;