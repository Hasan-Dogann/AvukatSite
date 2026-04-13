import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Doğan Hukuk Bürosu | Mehmet Doğan Avukat | Lüleburgaz Kırklareli</title>
        <meta
          name="description"
          content="Doğan Hukuk Bürosu, Mehmet Doğan Avukat tarafından Lüleburgaz ve Kırklareli bölgesinde profesyonel hukuki danışmanlık ve avukatlık hizmeti sunmaktadır."
        />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/makaleler" element={<Articles />} />
        <Route path="/makaleler/:slug" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;