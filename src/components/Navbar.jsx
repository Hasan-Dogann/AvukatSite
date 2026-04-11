import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    `transition hover:text-[#d4b06a] ${
      location.pathname === path ? "text-[#d4b06a]" : "text-white"
    }`;

  const mobileNavLinkClass = (path) =>
    `block rounded-lg px-4 py-3 text-sm font-semibold transition ${
      location.pathname === path
        ? "bg-[#111827] text-[#d4b06a]"
        : "text-white hover:bg-[#111827]"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      <div className="bg-[#111827] text-white border-b border-[#c8a96b]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-7 flex items-center justify-between text-[11px]">
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-slate-300">✉️ avmehmetdogan1@gmail.com</span>
            <span className="text-slate-300">📞 +90 543 605 35 17</span>
          </div>

          <div className="sm:hidden text-slate-300 text-[10px]">
            ✉️ avmehmetdogan1@gmail.com
          </div>

          <Link
            to="/contact"
            className="font-semibold text-[#d4b06a] hover:text-white transition"
          >
            AVUKATA YAZIN
          </Link>
        </div>
      </div>

      <nav className="bg-[#1f2937]/95 backdrop-blur text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-col justify-center pr-4 md:pr-6 border-r border-slate-600 h-9">
              <h1 className="text-lg md:text-xl font-bold tracking-wide leading-none">
                DOĞAN
              </h1>
              <span className="text-[9px] md:text-[10px] tracking-[0.22em] text-[#d4b06a] uppercase mt-1">
                Hukuk Bürosu
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-6 pl-6 text-[14px] font-semibold">
              <Link to="/" className={navLinkClass("/")}>
                Anasayfa
              </Link>

              <span className="text-slate-500">|</span>

              <Link to="/about" className={navLinkClass("/about")}>
                Hakkımızda
              </Link>

              <span className="text-slate-500">|</span>

              <Link to="/services" className={navLinkClass("/services")}>
                Hizmetlerimiz
              </Link>

              <span className="text-slate-500">|</span>

              <Link to="/makaleler" className={navLinkClass("/makaleler")}>
                Makaleler
              </Link>

              <span className="text-slate-500">|</span>

              <Link to="/contact" className={navLinkClass("/contact")}>
                İletişim
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-600 text-white hover:bg-[#111827] transition"
            aria-label="Menüyü aç"
          >
            <span className="text-xl leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-slate-700 bg-[#1f2937]">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <Link to="/" className={mobileNavLinkClass("/")} onClick={closeMenu}>
                Anasayfa
              </Link>

              <Link
                to="/about"
                className={mobileNavLinkClass("/about")}
                onClick={closeMenu}
              >
                Hakkımızda
              </Link>

              <Link
                to="/services"
                className={mobileNavLinkClass("/services")}
                onClick={closeMenu}
              >
                Hizmetlerimiz
              </Link>

              <Link
                to="/makaleler"
                className={mobileNavLinkClass("/makaleler")}
                onClick={closeMenu}
              >
                Makaleler
              </Link>

              <Link
                to="/contact"
                className={mobileNavLinkClass("/contact")}
                onClick={closeMenu}
              >
                İletişim
              </Link>

              <div className="pt-3 mt-3 border-t border-slate-700 text-xs text-slate-300 space-y-2">
                <p>📞 +90 543 605 35 17</p>
                <p>✉️ avmehmetdogan1@gmail.com</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;