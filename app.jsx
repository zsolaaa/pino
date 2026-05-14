/* eslint-disable */
// app.jsx — Pinocchio app shell + routing + nav + footer + tweaks panel

const { useState, useEffect } = React;

function NavBar({ route, onNav }) {
  const links = [
    { k:"home",    label:"Kezdőlap" },
    { k:"menu",    label:"Étlap" },
    { k:"gallery", label:"Galéria" },
    { k:"about",   label:"Rólunk" },
    { k:"contact", label:"Kapcsolat" },
  ];
  return (
    <nav className="nav">
      <div className="container nav-row">
        <button className="nav-brand" onClick={() => onNav("home")} style={{background:"none",border:0,padding:0,cursor:"pointer",color:"inherit"}}>
          <span className="flag"><span></span><span></span><span></span></span>
          <span>Pinocchio</span>
        </button>
        <div className="nav-links">
          {links.map(l => (
            <button
              key={l.k}
              className={`nav-link ${route===l.k ? "active" : ""}`}
              onClick={() => onNav(l.k)}>
              {l.label}
            </button>
          ))}
        </div>
        <a href={`tel:+36307556846`} className="nav-phone">
          <span className="dot"></span>
          +36 30 755 6846
        </a>
      </div>
    </nav>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span className="nav-brand" style={{fontSize:28}}>
                <span className="flag"><span></span><span></span><span></span></span>
                <span>Pinocchio</span>
              </span>
            </div>
            <p className="footer-tagline">Toszkána íze, Baján.</p>
            <p style={{marginTop:24, color:"var(--fg-mute)", fontSize:13.5, maxWidth:"40ch", lineHeight:1.6}}>
              Családi pizzéria a belváros szívében. Kemencében sült pizzák,
              kézzel készült paszták, válogatott olasz alapanyagok.
            </p>
          </div>

          <div>
            <h5>Oldalak</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNav("home");}}>Kezdőlap</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNav("menu");}}>Étlap</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNav("gallery");}}>Galéria</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNav("about");}}>Rólunk</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNav("contact");}}>Kapcsolat</a></li>
            </ul>
          </div>

          <div>
            <h5>Kapcsolat</h5>
            <ul>
              <li><a href="tel:+36307556846">+36 30 755 6846</a></li>
              <li><a href="mailto:hello@pinocchiopizza.hu">hello@pinocchiopizza.hu</a></li>
              <li style={{color:"var(--fg-mute)"}}>Tóth Kálmán tér 5.</li>
              <li style={{color:"var(--fg-mute)"}}>6500 Baja</li>
            </ul>
          </div>

          <div>
            <h5>Nyitvatartás</h5>
            <ul>
              <li>Minden nap</li>
              <li style={{fontFamily:"var(--display)", fontSize:24}}>11:00 — 22:00</li>
            </ul>

            <h5 style={{marginTop:28}}>Kövess</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PINOCCHIO PIZZÉRIA · BAJA</span>
          <span>MINDEN JOG FENNTARTVA</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── Tweaks defaults ─────────────────────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mode": "minimal",
  "accent": "#c8362a",
  "showReviews": true,
  "scale": 100
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState(() => {
    const h = (location.hash || "").replace("#/","").replace("#","");
    const valid = ["home","menu","gallery","about","contact"];
    return valid.includes(h) ? h : "home";
  });

  // Apply mode + accent to <html>
  useEffect(() => {
    document.documentElement.dataset.mode = t.mode || "minimal";
    document.documentElement.style.setProperty("--accent", t.accent || "#c8362a");
  }, [t.mode, t.accent]);

  // Apply scale via root font size
  useEffect(() => {
    document.documentElement.style.fontSize = ((t.scale || 100) / 100 * 16) + "px";
  }, [t.scale]);

  const onNav = (r) => {
    setRoute(r);
    location.hash = "/" + r;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const onHash = () => {
      const h = (location.hash || "").replace("#/","").replace("#","");
      const valid = ["home","menu","gallery","about","contact"];
      if (valid.includes(h)) setRoute(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const PageComp = {
    home: HomePage,
    menu: MenuPage,
    gallery: GalleryPage,
    about: AboutPage,
    contact: ContactPage,
  }[route];

  return (
    <div className="app">
      <NavBar route={route} onNav={onNav} />
      <PageComp onNav={onNav} t={t} />
      <Footer onNav={onNav} />

      <TweaksPanel>
        <TweakSection label="Hangulat" />
        <TweakRadio
          label="Stílus"
          value={t.mode}
          options={[
            { value:"minimal",   label:"Minimál" },
            { value:"editorial", label:"Editorial" },
            { value:"bold",      label:"Bold" },
          ]}
          onChange={(v) => setTweak("mode", v)}
        />
        <TweakColor
          label="Akcentus"
          value={t.accent}
          options={["#c8362a", "#1f6a3a", "#a37a2b", "#3c3c3c", "#7a2a1f"]}
          onChange={(v) => setTweak("accent", v)}
        />

        <TweakSection label="Tartalom" />
        <TweakToggle
          label="Vélemények szekció"
          value={t.showReviews}
          onChange={(v) => setTweak("showReviews", v)}
        />

        <TweakSection label="Tipográfia" />
        <TweakSlider
          label="Méret"
          value={t.scale}
          min={85} max={120} step={5} unit="%"
          onChange={(v) => setTweak("scale", v)}
        />

        <TweakSection label="Navigáció" />
        <TweakSelect
          label="Oldal"
          value={route}
          options={[
            { value:"home",    label:"Kezdőlap" },
            { value:"menu",    label:"Étlap" },
            { value:"gallery", label:"Galéria" },
            { value:"about",   label:"Rólunk" },
            { value:"contact", label:"Kapcsolat" },
          ]}
          onChange={(v) => onNav(v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
