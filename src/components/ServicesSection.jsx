import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServicesSection = () => {
  return (
    <section className="bg-[#f8f6f2] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8b6b2e] font-semibold">
            DOĞAN HUKUK BÜROSU
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#1f2937]">
            Çalışma Alanlarımız
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-sm h-[190px] block border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/20 group-hover:from-black/55 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <h3 className="text-white text-lg md:text-xl font-semibold leading-7 drop-shadow-md">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;