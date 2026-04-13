import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", background: "#f8f8f8" }}>
      <header
        style={{
          background: "#111827",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>Doğan Hukuk Bürosu</div>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={linkStyle}>Ana Sayfa</Link>
          <Link to="/about" style={linkStyle}>Hakkımızda</Link>
          <Link to="/services" style={linkStyle}>Hizmetler</Link>
          <Link to="/makaleler" style={linkStyle}>Makaleler</Link>
          <Link to="/contact" style={linkStyle}>İletişim</Link>
        </nav>
      </header>

      <main style={{ padding: "50px 40px" }}>{children}</main>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
};

function Home() {
  return (
    <Layout>
      <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>Mehmet Doğan Avukat</h1>
      <p style={{ fontSize: "18px", maxWidth: "700px", lineHeight: "1.6" }}>
        Lüleburgaz ve Kırklareli bölgesinde profesyonel hukuki danışmanlık ve avukatlık hizmeti.
      </p>
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <h1>Hakkımızda</h1>
      <p>Doğan Hukuk Bürosu, güvenilir ve profesyonel hukuki destek sunmaktadır.</p>
    </Layout>
  );
}

function Services() {
  return (
    <Layout>
      <h1>Hizmetler</h1>
      <p>Ceza hukuku, aile hukuku, icra hukuku ve diğer hukuki alanlarda danışmanlık.</p>
    </Layout>
  );
}

function Articles() {
  return (
    <Layout>
      <h1>Makaleler</h1>
      <p>Güncel hukuki içerikler burada yer alacaktır.</p>
    </Layout>
  );
}

function Contact() {
  return (
    <Layout>
      <h1>İletişim</h1>
      <p>0543 605 35 17</p>
      <p>Lüleburgaz / Kırklareli</p>
    </Layout>
  );
}

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/makaleler" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;