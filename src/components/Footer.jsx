import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Footer = () => {
  const footerServices = servicesData.slice(0, 6);

  return (
    <footer className="bg-[#0f2d63] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">DOĞAN HUKUK BÜROSU</h3>

          <div className="space-y-3 text-sm text-slate-100">
            {footerServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block hover:text-[#d4b06a] transition"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">MENÜ</h3>

          <div className="space-y-3 text-sm">
            <Link to="/" className="block hover:text-[#d4b06a] transition">
              ANASAYFA
            </Link>
            <Link to="/about" className="block hover:text-[#d4b06a] transition">
              HAKKIMIZDA
            </Link>
            <Link
              to="/services"
              className="block hover:text-[#d4b06a] transition"
            >
              HİZMETLERİMİZ
            </Link>
            <Link
              to="/makaleler"
              className="block hover:text-[#d4b06a] transition"
            >
              MAKALELER
            </Link>
            <Link
              to="/contact"
              className="block hover:text-[#d4b06a] transition"
            >
              İLETİŞİM
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">İLETİŞİM</h3>

          <div className="space-y-3 text-sm leading-7 text-slate-100">
            <p>📞 0543 605 35 17</p>
            <p>✉️ avmehmetdogan1@gmail.com</p>
            <p>
              Kocasinan Mah. Okullar Cad.
              <br />
              Osmançeralp Apt. No:23 Kat:2 Daire:3
              <br />
              Lüleburgaz / KIRKLARELİ
            </p>
          </div>

          <div className="mt-4 rounded-xl overflow-hidden border border-white/20">
            <iframe
              title="Doğan Hukuk Bürosu Konum"
              src="https://www.google.com/maps?q=41.4038239,27.3553619&z=15&output=embed"
              className="w-full h-[140px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center text-xs text-slate-200">
          Hukuki danışmanlık hizmetleri ücretlidir.
        </div>
      </div>
    </footer>
  );
};

export default Footer;