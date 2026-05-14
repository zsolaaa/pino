/* eslint-disable */
// pages.jsx — page-level components for Pinocchio Pizzéria
// (loaded as a Babel script; everything is attached to window at the bottom)

const { useState, useMemo, useEffect } = React;

const PHONE = "+36 30 755 6846";
const ADDRESS_LINE1 = "Tóth Kálmán tér 5.";
const ADDRESS_LINE2 = "6500 Baja";
const EMAIL = "hello@pinocchiopizza.hu";

const DAYS = [
  { key:"H",  full:"Hétfő"    },
  { key:"K",  full:"Kedd"     },
  { key:"Sz", full:"Szerda"   },
  { key:"Cs", full:"Csütörtök"},
  { key:"P",  full:"Péntek"   },
  { key:"Szo",full:"Szombat"  },
  { key:"V",  full:"Vasárnap" },
];

function PlaceholderImage({ label, tone="warm" }) {
  const cls = {
    warm:  "tile-warm",
    dark:  "tile-dark",
    red:   "tile-red",
    cream: "tile-cream",
  }[tone] || "tile-warm";
  return (
    <div className={`feat-img ${cls}`}>
      <div className="feat-img-stripe"></div>
      <span className="label">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HOME
───────────────────────────────────────────────────────────── */
function HomePage({ onNav, t }) {
  const today = new Date().getDay(); // 0=Sun
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <main className="page" data-screen-label="Kezdőlap">

      {/* HERO */}
      <section className="hero hero-photo">
        <img className="hero-img" src="assets/hero-pizza.png" alt="Pinocchio pizza" />
        <div className="hero-vignette"></div>
        <div className="hero-content">
          <div className="hero-eyebrow"><span className="bar"></span><span>Pinocchio Pizzéria · Baja</span></div>
          <h1 className="hero-title">Toszkána<br/>íze <em>Baján.</em></h1>
          <p className="hero-sub">
            Kemencében sült pizzák, kézzel készült friss paszták.
            Hosszú kelesztésű tészta, válogatott olasz alapanyagok,
            és minden falatban egy darabka Itália.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => onNav("menu")}>Étlap megnyitása</button>
            <button className="btn btn-ghost-light" onClick={() => onNav("contact")}>Asztalfoglalás</button>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <div>
              <div className="eyebrow">A pulton legnépszerűbb</div>
              <h2 className="section-title">Három kedvenc<br/>a kemencéből.</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => onNav("menu")}>Teljes étlap →</button>
          </header>

          <div className="featured-grid">
            <article className="feat-card">
              <div className="feat-img">
                <img src="assets/pizza-pinocchio.png" alt="Pinocchio pizza" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />
              </div>
              <div className="feat-head">
                <h3 className="feat-name">Pinocchio</h3>
                <span className="feat-price">3 590 Ft</span>
              </div>
              <p className="feat-desc">Paradicsomszósz, mozzarella, rukkola, pármai sonka és parmezán forgács. A névadó.</p>
            </article>

            <article className="feat-card">
              <div className="feat-img">
                <img src="assets/pizza-bruno.png" alt="Bruno pizza" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />
              </div>
              <div className="feat-head">
                <h3 className="feat-name">Bruno</h3>
                <span className="feat-price">3 590 Ft</span>
              </div>
              <p className="feat-desc">Paradicsomszósz, négysajtos alap és olasz főtt sonka. Vendégeink visszatérő kedvence.</p>
            </article>

            <article className="feat-card">
              <div className="feat-img">
                <img src="assets/pizza-diavola.png" alt="Diavola Verde pizza" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />
              </div>
              <div className="feat-head">
                <h3 className="feat-name">Diavola Verde</h3>
                <span className="feat-price">3 590 Ft</span>
              </div>
              <p className="feat-desc">Paradicsomszósz, mozzarella, csípős olasz szalámi, friss rukkola, koktélparadicsom.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TWO COL PROMO */}
      <section className="section-tight">
        <div className="container two-col">
          <div>
            <div className="eyebrow">A konyháról</div>
            <h2 className="section-title" style={{marginTop:12, marginBottom:24}}>
              Hosszú kelesztés.<br/>Friss alapanyag.<br/>Semmi rejtegetnivaló.
            </h2>
            <p style={{fontSize:17, color:"var(--fg-soft)", lineHeight:1.6, maxWidth:"52ch", marginBottom:28}}>
              Tésztánkat hagyományos olasz módszerrel készítjük: 24–48 órán át pihen,
              mire a kemencébe kerül. Sajtjaink és sonkáink Itáliából érkeznek,
              a paradicsomszószt házilag főzzük.
            </p>
            <button className="btn btn-ghost" onClick={() => onNav("about")}>Rólunk →</button>
          </div>
          <PlaceholderImage label="// KONYHA — tészta nyújtás közben" tone="cream" />
        </div>
      </section>

      {/* REVIEWS */}
      {t.showReviews && (
        <section className="section" style={{borderTop:"1px solid var(--line)"}}>
          <div className="container">
            <header className="section-head">
              <div>
                <div className="eyebrow">Vendégeink</div>
                <h2 className="section-title">Mit mondanak<br/>rólunk.</h2>
              </div>
              <div className="mono" style={{color:"var(--fg-mute)"}}>4.8 / 5 · Google</div>
            </header>

            <div className="reviews-grid">
              {REVIEWS.map((r, i) => (
                <article className="review" key={i}>
                  <div className="review-stars">★★★★★</div>
                  <p className="review-quote">„{r.quote}"</p>
                  <div className="review-meta">
                    <div className="review-avatar">{r.name[0]}</div>
                    <div>
                      <b>{r.name}</b><br/>
                      <span>{r.when}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT TEASER */}
      <section className="section-tight">
        <div className="container two-col" style={{alignItems:"start"}}>
          <div>
            <div className="eyebrow">Találkozunk</div>
            <h2 className="section-title" style={{marginTop:12, marginBottom:24}}>
              Egy lépésnyire a<br/>Sugovica partjától.
            </h2>
            <p style={{fontSize:17, color:"var(--fg-soft)", lineHeight:1.6, maxWidth:"50ch", marginBottom:28}}>
              Üdvözlünk a belvárosi pizzériánkban. Asztalfoglaláshoz hívj minket,
              vagy gyere be — szívesen ülünk veled is egy kávéra.
            </p>
            <div className="hero-actions">
              <a href={`tel:${PHONE.replace(/\s/g,'')}`} className="btn btn-dark">{PHONE}</a>
              <button className="btn btn-ghost" onClick={() => onNav("contact")}>Térkép & kapcsolat →</button>
            </div>
          </div>
          <PlaceholderImage label="// TÉRKÉP / ENTERIŐR" tone="warm" />
        </div>
      </section>

    </main>
  );
}

const REVIEWS = [
  { name:"Eszter K.", when:"2 hete · helyben evett", quote:"A Pinocchio pizza tényleg úgy érződik, mintha Itáliában lennénk. A tészta lágy, a feltétek frissek. Visszamegyünk." },
  { name:"Bence T.",  when:"1 hónapja · elvitel",    quote:"A Tartufo e N'Duja egy bomba. Csípős, krémes, mély íz. Bajai pizzaként eddig nem ismert szintre emeli a műfajt." },
  { name:"Anna V.",   when:"3 hete · helyben evett", quote:"Kicsi, csendes hely, de az étel és a kiszolgálás kiváló. A gnocchi al formaggi mennyei volt." },
];

/* ─────────────────────────────────────────────────────────────
   MENU
───────────────────────────────────────────────────────────── */
function MenuPage() {
  const [tab, setTab] = useState("ALL");
  const [q, setQ] = useState("");

  const sections = useMemo(() => {
    const all = window.MENU_DATA;
    const keys = tab === "ALL" ? Object.keys(all) : [tab];
    return keys.map(k => {
      const sec = all[k];
      const items = q
        ? sec.items.filter(it =>
            (it.name + " " + it.desc).toLowerCase().includes(q.toLowerCase()))
        : sec.items;
      return { key:k, ...sec, items };
    }).filter(s => s.items.length);
  }, [tab, q]);

  return (
    <main className="page" data-screen-label="Étlap">
      <div className="container menu-header">
        <div className="eyebrow" style={{marginBottom:24}}>Étlap · 2026</div>
        <h1 className="menu-title">Étlap</h1>
        <div className="menu-intro">
          <p style={{fontFamily:"var(--display)", fontSize:"clamp(20px, 2vw, 28px)", fontStyle:"italic", lineHeight:1.3, color:"var(--fg-soft)"}}>
            Frissen sült pizzák,<br/>házi tésztából készült paszták.<br/>
            Olasz ízek, minőségi alapanyagok.
          </p>
          <div style={{fontSize:14.5, color:"var(--fg-mute)", lineHeight:1.65, maxWidth:"50ch"}}>
            Áraink Forintban (HUF) értendők és tartalmazzák az ÁFA-t. Az étlapon feltüntetett árak
            szervízdíjat nem tartalmaznak. Az ételekben található allergénekről kollégánk
            szívesen tájékoztat a pultnál.
          </div>
        </div>

        <div className="menu-controls">
          <div className="menu-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{opacity:.5}}>
              <circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <input
              type="text"
              placeholder="Keress pizzára, alapanyagra... (pl. szarvasgomba, vega)"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
            {q && <button onClick={()=>setQ("")} style={{background:"none",border:0,color:"var(--fg-mute)",cursor:"pointer",fontSize:18,padding:0}}>×</button>}
          </div>
        </div>

        <div className="menu-tabs">
          {[
            {k:"ALL",      label:"Mindegyik"},
            {k:"PIZZA",    label:"Pizza"},
            {k:"PASTA",    label:"Pasta"},
            {k:"SALATA",   label:"Saláta"},
            {k:"EXTRA",    label:"Extra feltétek"},
            {k:"ITAL",     label:"Italok"},
            {k:"KAVE",     label:"Üdítők & kávé"},
            {k:"DESSZERT", label:"Desszertek"},
          ].map(({k,label}) => (
            <button key={k} className={`menu-tab ${tab===k ? "active" : ""}`} onClick={()=>setTab(k)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        {sections.length === 0 && (
          <div className="menu-empty">Nem találtunk találatot „{q}"-ra. Próbálkozz másik kifejezéssel.</div>
        )}

        {sections.map(sec => (
          <section className="menu-section" key={sec.key}>
            <div className="menu-section-head">
              <h2 className="menu-section-title">{sec.label}</h2>
              <p className="menu-section-note">{sec.note}</p>
            </div>

            <div className="menu-list">
              {sec.items.map(it => (
                <div className="menu-item" key={it.n + it.name}>
                  <span className="menu-item-num">{String(it.n).padStart(2,"0")}</span>
                  <div className="menu-item-body">
                    <span className="menu-item-name">
                      {it.name}{it.spicy && <span style={{color:"var(--accent)",marginLeft:8,fontSize:14}}>·</span>}{it.spicy && <span style={{color:"var(--accent)",fontSize:11,marginLeft:4,fontFamily:"var(--mono)",letterSpacing:".1em"}}>CSÍPŐS</span>}
                    </span>
                    <span className="menu-item-desc">{it.desc}</span>
                  </div>
                  <span className="menu-item-price">{it.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="menu-foot">
          Áraink Forintban (HUF) értendők és tartalmazzák az ÁFA-t. Csomagolás 200 Ft, extra pizzaszósz 300 Ft,
          extra csípős pizzaszósz 300 Ft. Igény szerint cserélhető pasta-tészta: tagliatelle, spagetti, gnocchi, penne.
        </div>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────────────────────── */
function GalleryPage() {
  const tiles = [
    { size:"s-3x2", tone:"warm",  label:"// 01", cap:"Margherita, frissen sütve" },
    { size:"s-2x2", tone:"red",   label:"// 02", cap:"Diavola Verde" },
    { size:"s-1x2", tone:"cream", label:"// 03", cap:"Tészta, kelesztés alatt" },
    { size:"s-2x1", tone:"dark",  label:"// 04", cap:"" },
    { size:"s-2x2", tone:"warm",  label:"// 05", cap:"Carbonara, közeli" },
    { size:"s-2x1", tone:"cream", label:"// 06", cap:"Az enteriőr" },
    { size:"s-4x2", tone:"dark",  label:"// 07", cap:"Kemence, üzem közben" },
    { size:"s-2x2", tone:"red",   label:"// 08", cap:"Birra Moretti csapolt" },
    { size:"s-3x2", tone:"warm",  label:"// 09", cap:"Bruno, dobozban" },
    { size:"s-3x1", tone:"cream", label:"// 10", cap:"Asztalterítés" },
  ];
  return (
    <main className="page" data-screen-label="Galéria">
      <div className="container menu-header">
        <div className="eyebrow" style={{marginBottom:24}}>Galéria</div>
        <h1 className="menu-title">Pillanatok<br/><span style={{fontStyle:"italic"}}>a konyhából.</span></h1>
        <p style={{fontSize:17, color:"var(--fg-soft)", maxWidth:"56ch", marginTop:24, fontFamily:"var(--display)", fontStyle:"italic"}}>
          A tészta, a kemence, a tányér. Néhány kép arról, amit a vendégeink minden este látnak.
        </p>
      </div>

      <div className="container" style={{paddingBottom:96}}>
        <div className="gallery-grid">
          {tiles.map((tl, i) => (
            <div key={i} className={`tile ${tl.size} tile-${tl.tone}`}>
              <div className="tile-stripe"></div>
              <span className="label">{tl.label}</span>
              {tl.cap && <span className="caption">{tl.cap}</span>}
            </div>
          ))}
        </div>

        <div style={{marginTop:32, fontSize:13, color:"var(--fg-mute)", fontFamily:"var(--mono)", letterSpacing:".06em"}}>
          // Helyőrző képek — a végleges galériát saját fotókkal töltöd fel
        </div>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────────────────────── */
function AboutPage({ onNav }) {
  return (
    <main className="page" data-screen-label="Rólunk">
      <div className="container about-hero">
        <h1>Rólunk.</h1>
        <p>Vannak helyek, amelyek csupán éttermek. És vannak helyek, amelyek történetekből születnek.</p>
      </div>

      <div className="container about-grid">
        <div className="about-img">
          <img src="assets/about-rolunk.jpeg" alt="Pinocchio asztal pizzákkal" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />
        </div>

        <div className="about-stack">
          <h3>A Pinocchio egy ilyen hely.</h3>
          <p>
            Egy család vagyunk, akiket az olasz konyha iránti szenvedély kötött össze
            még jóval azelőtt, hogy közösen álmodtunk volna éttermet. Az évek során
            megtanultuk: az igazi kézműves olasz konyha titka nem csupán a recept — hanem
            a figyelem, a türelem és az a megmagyarázhatatlan többlet, amelyet csak akkor
            ad az ember, ha igazán szívügyének tekinti a munkáját.
          </p>
          <h3>Nálunk minden pizza és minden tészta kézzel készül.</h3>
          <p>
            Gondosan, szívvel és lélekkel — nem kompromisszumokból, hanem
            meggyőződésből. Hiszünk abban, hogy egy jól elkészített étel több mint
            táplálék: pillanat, amelyre vissza lehet emlékezni. Ezért törekszünk arra,
            hogy minden egyes tányér, amelyet az asztalra teszünk, ezt az érzést
            hordozza magában.
          </p>
          <p style={{fontFamily:"var(--display)", fontStyle:"italic", fontSize:22, color:"var(--fg)", marginTop:12}}>
            Köszönjük, hogy betértél hozzánk.<br/>Reméljük, nemcsak egyszer.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="pillars">
          <div className="pillar">
            <div className="num">24</div>
            <h4>órás kelesztés</h4>
            <p>Tésztánk hosszan pihen, hogy könnyű, emészthető és ízekben gazdag legyen.</p>
          </div>
          <div className="pillar">
            <div className="num">100%</div>
            <h4>olasz alapanyag</h4>
            <p>Sajtjaink, sonkáink és lisztünk közvetlenül Itáliából érkeznek.</p>
          </div>
          <div className="pillar">
            <div className="num">2013</div>
            <h4>óta Baján</h4>
            <p>Több mint egy évtizede sütjük a városnak — és minden évben tanulunk újat.</p>
          </div>
        </div>
      </div>

      <div className="container" style={{padding:"clamp(40px, 6vw, 80px) 0"}}>
        <div style={{borderTop:"1px solid var(--line)", paddingTop:48, display:"flex", justifyContent:"space-between", alignItems:"center", gap:24, flexWrap:"wrap"}}>
          <h3 style={{fontFamily:"var(--display)", fontSize:"clamp(28px, 3vw, 40px)", lineHeight:1.1, maxWidth:"18ch"}}>
            Ahol minden falat <em style={{color:"var(--accent)"}}>Toszkánát</em> idézi.
          </h3>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => onNav("menu")}>Étlap</button>
            <button className="btn btn-ghost" onClick={() => onNav("contact")}>Foglalj asztalt →</button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────── */
function ContactPage() {
  const [form, setForm] = useState({ first:"", last:"", email:"", phone:"", guests:"2", date:"", message:"" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.first) return;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ first:"", last:"", email:"", phone:"", guests:"2", date:"", message:"" });
  };

  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <main className="page" data-screen-label="Kapcsolat">
      <div className="container contact-grid">
        <div className="contact-info">
          <div>
            <div className="eyebrow" style={{marginBottom:24}}>Kapcsolat</div>
            <h1 style={{fontFamily:"var(--display)", fontSize:"clamp(64px, 8vw, 140px)", lineHeight:.9, letterSpacing:"-.02em"}}>
              Foglalj<br/>asztalt.
            </h1>
            <p style={{marginTop:24, fontSize:17, color:"var(--fg-soft)", maxWidth:"40ch", lineHeight:1.55}}>
              Telefonon vagy az űrlapon keresztül — szívesen tartunk neked helyet.
            </p>
          </div>

          <div className="contact-block">
            <div className="eyebrow">Cím</div>
            <div className="val">{ADDRESS_LINE1}<br/>{ADDRESS_LINE2}</div>
          </div>

          <div className="contact-block">
            <div className="eyebrow">Telefon</div>
            <div className="val"><a href={`tel:${PHONE.replace(/\s/g,'')}`}>{PHONE}</a></div>
          </div>

          <div className="contact-block">
            <div className="eyebrow">Email</div>
            <div className="val" style={{fontSize:22}}><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
          </div>

          <div className="contact-block">
            <div className="eyebrow">Nyitvatartás</div>
            <div className="val" style={{fontSize:18}}>Minden nap · 11:00 — 22:00</div>
          </div>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="eyebrow">Asztalfoglalás / üzenet</div>
          <h2 style={{fontFamily:"var(--display)", fontSize:36, lineHeight:1.1, marginBottom:8}}>
            Írj nekünk pár sort.
          </h2>

          <div className="form-row">
            <div className="field">
              <label>Vezetéknév</label>
              <input type="text" value={form.last} onChange={upd("last")} />
            </div>
            <div className="field">
              <label>Keresztnév *</label>
              <input type="text" required value={form.first} onChange={upd("first")} />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label>Email *</label>
              <input type="email" required value={form.email} onChange={upd("email")} />
            </div>
            <div className="field">
              <label>Telefon</label>
              <input type="tel" value={form.phone} onChange={upd("phone")} />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label>Időpont</label>
              <input type="datetime-local" value={form.date} onChange={upd("date")} />
            </div>
            <div className="field">
              <label>Fő</label>
              <select value={form.guests} onChange={upd("guests")}>
                {[2,3,4,5,6,7,8,"8+"].map(n => <option key={n} value={n}>{n} fő</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label>Üzenet</label>
            <textarea placeholder="Pl. szülinapot ünnepelünk, allergia, különleges kérés..." value={form.message} onChange={upd("message")}></textarea>
          </div>

          <div className="form-actions">
            <span className="form-note">A * jelölt mezők kitöltése kötelező.</span>
            <button type="submit" className="btn btn-dark">
              {sent ? "✓ Köszönjük!" : "Foglalás elküldése"}
            </button>
          </div>
        </form>
      </div>

      <div className="container" style={{paddingBottom:64}}>
        <div className="eyebrow" style={{marginBottom:12}}>Megtalálsz</div>
        <div className="map">
          <div className="map-grid"></div>
          <div className="map-river"></div>
          {/* schematic streets */}
          <div style={{position:"absolute", left:"30%", top:0, bottom:0, width:1, background:"var(--line)"}}></div>
          <div style={{position:"absolute", left:0, right:0, top:"65%", height:1, background:"var(--line)"}}></div>
          <div className="map-pin">
            <div className="pin"></div>
            <div className="lbl">Pinocchio · {ADDRESS_LINE1}</div>
          </div>
          <div style={{position:"absolute", left:18, top:18, fontFamily:"var(--mono)", fontSize:10, letterSpacing:".16em", color:"var(--fg-mute)"}}>// BAJA · TÓTH KÁLMÁN TÉR</div>
          <div style={{position:"absolute", right:18, bottom:18, fontFamily:"var(--mono)", fontSize:10, letterSpacing:".16em", color:"var(--fg-mute)"}}>// SUGOVICA →</div>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { HomePage, MenuPage, GalleryPage, AboutPage, ContactPage });
