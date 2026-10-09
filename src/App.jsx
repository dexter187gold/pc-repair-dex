import { useMemo, useState, useEffect } from 'react'

const WA = '27684840123'
const EMAIL = 'pcrepairdex@gmail.com'
const PHONE = '068 484 0123'
const TEL = 'tel:+27684840123'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'mobile', label: 'Phones & FRP' },
  { id: 'shop', label: 'Shop' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'book', label: 'Book' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'contact', label: 'Contact' },
]

const SERVICES = [
  { icon: '💻', cat: 'Computing', title: 'PC & laptop repair', blurb: 'Diagnosis, upgrades, malware cleanup, Windows rebuilds, overheating, storage, and power faults.', points: ['Parts quoted first', 'Repair vs replace honesty', 'Data caution on every job'] },
  { icon: '📡', cat: 'IT', title: 'Remote IT support', blurb: 'Secure remote sessions for software, Microsoft 365, printers, and urgent unblocking.', points: ['Same-day slots when open', 'Clear time scope', 'Business-friendly'] },
  { icon: '🏠', cat: 'IT', title: 'On-site technician', blurb: 'Hands-on at your home or office for hardware, networks, Wi-Fi, and multi-device days.', points: ['Call-out options', 'Visit notes', 'WhatsApp status'] },
  { icon: '📱', cat: 'Mobile', title: 'Smartphone repair', blurb: 'Screens, batteries, charging ports, water damage assessment, software restores, and performance.', points: ['Model-specific care', 'Quality parts options', 'Function test on return'] },
  { icon: '🔓', cat: 'Mobile', title: 'FRP & account unlocks', blurb: 'Factory Reset Protection and related Google account lock assistance for supported devices — assessed case by case.', points: ['Legitimacy checks', 'Device assessment first', 'Honest success outlook'] },
  { icon: '🛡️', cat: 'Mobile', title: 'MDM / policy removal', blurb: 'Mobile Device Management and work-profile policy assistance where legally appropriate and device-supported.', points: ['Case review required', 'Business & personal context', 'No false guarantees'] },
  { icon: '⚡', cat: 'Electronics', title: 'Electronics repair', blurb: 'Boards, power issues, accessories, and general consumer electronics diagnostics beyond pure PCs.', points: ['Bench diagnosis', 'Parts sourcing where possible', 'Clear go / no-go'] },
  { icon: '🗄️', cat: 'Data', title: 'Data & backup assist', blurb: 'Drive health, backup setup, recovery assessment before files become a gamble.', points: ['Written findings', 'Secure handling', 'No silent extras'] },
  { icon: '🚀', cat: 'Upgrades', title: 'Performance upgrades', blurb: 'SSD, RAM, and tune-ups recommended only when they fix the real bottleneck.', points: ['Before/after expectations', 'Compatible guidance', 'Transparent labour'] },
]

const SHOP = [
  { name: 'SSD upgrade kits', tag: 'Coming stock', blurb: 'Reseller-ready storage upgrades — list your SKUs here as inventory lands.', price: 'From quote' },
  { name: 'Laptop RAM modules', tag: 'Coming stock', blurb: 'Compatible memory for common business and gaming lines.', price: 'From quote' },
  { name: 'Phone batteries & screens', tag: 'Coming stock', blurb: 'Quality parts channel for popular smartphone models.', price: 'From quote' },
  { name: 'Cables & adapters', tag: 'Coming stock', blurb: 'Everyday connectivity — expand as your supplier list grows.', price: 'From quote' },
  { name: 'Refurbished devices', tag: 'Pipeline', blurb: 'Tested units with clear grade notes when you go live as reseller.', price: 'TBA' },
  { name: 'Accessories bundle', tag: 'Pipeline', blurb: 'Mice, keyboards, pouches — catalog slots ready for your brands.', price: 'TBA' },
]

const PRICING = [
  { title: 'Hourly', model: 'TIME & MATERIALS', hot: false, body: 'When the fault is unclear. Pay for real time; we pause before scope expands.', items: ['Diagnosis-friendly', 'Visible time', 'Pause before extras', 'Great first contact'] },
  { title: 'Flat rate', model: 'FIXED PACKAGE', hot: true, body: 'One agreed price for a defined outcome — popular when you want certainty.', items: ['Scope written up front', 'No labour drift', 'Clear handover', 'Known job types'] },
  { title: 'Ad-hoc rate card', model: 'ITEMISED', hot: false, body: 'Call-outs, line items, and COD-style handovers for once-off work.', items: ['Itemised quote', 'Parts separate', 'Mix remote + bench', 'Pay-on-completion options'] },
]

const STEPS = [
  { n: '01', t: 'Tell us the device & fault', d: 'WhatsApp or the booking form. PC, phone, or electronics — symptoms and urgency.' },
  { n: '02', t: 'We recommend a path', d: 'Remote, on-site, or bench. Hourly, flat, or ad-hoc. You approve before deep work.' },
  { n: '03', t: 'Repair with updates', d: 'Status while we work. Parts never installed without your say-so.' },
  { n: '04', t: 'Handover & next steps', d: 'Tested outcome, clear notes, and optional shop parts if you want upgrades.' },
]

const FAQS = [
  { q: 'Is PC REPAIR DEX only for computers?', a: 'No. We handle PCs and laptops, smartphones, FRP/MDM-related work where appropriate, electronics repair, and IT support — plus a product catalog path for reseller stock.' },
  { q: 'Do you guarantee every FRP or MDM job?', a: 'No honest shop does. We assess the device first, explain likelihood, and only proceed when the path is legitimate and supported.' },
  { q: 'Remote or on-site — how do I choose?', a: 'Software and account issues are often remote. Hardware, screens, batteries, and physical diagnostics are on-site or bench.' },
  { q: 'Can I buy parts and accessories here?', a: 'The Shop page is ready for your catalog. As you add supplier stock, products will list with pricing and enquiry CTAs.' },
  { q: 'How do quotes work?', a: 'Hourly, flat-rate, or ad-hoc rate card. You see the model before major labour or parts.' },
  { q: 'What is the fastest way to reach you?', a: 'WhatsApp 068 484 0123. Use the booking form so device, mode, and symptoms arrive in one message.' },
  { q: 'Do you work with small businesses?', a: 'Yes — workstations, phones used for work, printers, and practical IT keep-the-lights-on support.' },
  { q: 'Is COD possible?', a: 'Many jobs can be structured pay-on-completion. Terms are written on the quote.' },
]

const QUARTERS = [
  { id: 'Q1', god: 'Athena', title: 'Craft', focus: 'Home clarity, service architecture, brand voice' },
  { id: 'Q2', god: 'Hermes', title: 'Reach', focus: 'WhatsApp/email paths, booking form, response UX' },
  { id: 'Q3', god: 'Hephaestus', title: 'Craft depth', focus: 'PC, electronics, bench process pages' },
  { id: 'Q4', god: 'Hestia', title: 'Trust', focus: 'FAQ, policies tone, handover comfort' },
  { id: 'Q5', god: 'Apollo', title: 'Proof', focus: 'Pricing education, reviews, metrics storytelling' },
  { id: 'Q6', god: 'Artemis', title: 'Booking', focus: 'Schedule modes, form quality, reminder copy' },
  { id: 'Q7', god: 'Poseidon', title: 'Catalog depth', focus: 'Shop structure, product slots, reseller flow' },
  { id: 'Q8', god: 'Ares', title: 'Speed', focus: 'Urgent CTAs, mobile tap-to-call, conversion friction cuts' },
  { id: 'Q9', god: 'Demeter', title: 'Growth', focus: 'Upsell-ready shop, bundles, repeat-client paths' },
  { id: 'Q10', god: 'Zeus', title: 'Authority', focus: 'Premium brand finish, competitive positioning, polish' },
]

function wa(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text || 'Hi PC REPAIR DEX — I need help with a device.')}`
}

function Cta({ go }) {
  return (
    <div className="cta">
      <div>
        <h3>Book a diagnosis today</h3>
        <p>PC, phone, FRP/MDM assessment, or electronics — message the fault and we will map the fastest honest path.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
        <a className="btn btn-wa btn-lg" href={wa()} target="_blank" rel="noreferrer">
          WhatsApp {PHONE}
        </a>
        <a className="btn btn-call btn-lg" href={TEL}>
          Call
        </a>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => go('book')}>
          Booking form
        </button>
      </div>
    </div>
  )
}

function BookingForm({ compact }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    device: 'Laptop / PC',
    service: 'PC & laptop repair',
    mode: 'either',
    when: '',
    message: '',
  })
  const text = useMemo(
    () =>
      [
        '*PC REPAIR DEX* — booking request',
        `Name: ${form.name || '—'}`,
        `Phone: ${form.phone || '—'}`,
        form.email ? `Email: ${form.email}` : null,
        `Device: ${form.device}`,
        `Service: ${form.service}`,
        `Mode: ${form.mode}`,
        form.when ? `Preferred: ${form.when}` : null,
        form.message ? `Issue: ${form.message}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    [form]
  )

  return (
    <form
      className={`form panel${compact ? '' : ''}`}
      onSubmit={(e) => {
        e.preventDefault()
        window.open(wa(text), '_blank', 'noopener')
      }}
    >
      {!compact && (
        <div style={{ marginBottom: '0.35rem' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>Booking form</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>Submits into WhatsApp with your details prefilled — fastest path to {PHONE}.</p>
        </div>
      )}
      <div className="form-row">
        <label>
          Full name
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
        </label>
        <label>
          Phone / WhatsApp
          <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="08x…" />
        </label>
      </div>
      <label>
        Email (optional)
        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={EMAIL} />
      </label>
      <div className="form-row">
        <label>
          Device type
          <select value={form.device} onChange={(e) => setForm({ ...form, device: e.target.value })}>
            <option>Laptop / PC</option>
            <option>Smartphone</option>
            <option>Tablet</option>
            <option>Electronics / other</option>
          </select>
        </label>
        <label>
          Service needed
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
            {SERVICES.map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
            <option>Not sure — advise me</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Preferred mode
          <select value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })}>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="bench">Drop-off / bench</option>
            <option value="either">Either — you advise</option>
          </select>
        </label>
        <label>
          Preferred time
          <input value={form.when} onChange={(e) => setForm({ ...form, when: e.target.value })} placeholder="e.g. Today after 15:00" />
        </label>
      </div>
      <label>
        Describe the issue
        <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Model, symptoms, error messages, urgency…" />
      </label>
      <button type="submit" className="btn btn-primary btn-lg">
        Send via WhatsApp
      </button>
    </form>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const sync = () => {
      const h = (location.hash || '#home').slice(1)
      if (NAV.some((n) => n.id === h)) setPage(h)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const go = (id) => {
    setPage(id)
    setMenu(false)
    location.hash = id
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap topbar-row">
          <button type="button" className="logo" onClick={() => go('home')}>
            <img src="/dex.svg" alt="" width="40" height="40" />
            <div className="logo-text">
              <strong>PC REPAIR DEX</strong>
              <span>Devices · Phones · Electronics · IT</span>
            </div>
          </button>
          <nav className="nav-links" aria-label="Primary">
            {NAV.filter((n) => !['roadmap'].includes(n.id)).map((n) => (
              <button key={n.id} type="button" className={page === n.id ? 'on' : ''} onClick={() => go(n.id)}>
                {n.label}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="btn btn-call btn-sm hide-m" href={TEL}>
              Call
            </a>
            <a className="btn btn-wa btn-sm" href={wa()} target="_blank" rel="noreferrer">
              {PHONE}
            </a>
            <button type="button" className="burger" onClick={() => setMenu((v) => !v)}>
              {menu ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        <div className={`wrap drawer${menu ? ' open' : ''}`}>
          {NAV.map((n) => (
            <button key={n.id} type="button" className={page === n.id ? 'on' : ''} onClick={() => go(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
      </header>

      <main id="main" className="wrap page">
        {page === 'home' && (
          <>
            <section className="hero">
              <div>
                <div className="kicker">
                  <span className="dot" /> Premium repair · IT · mobile · electronics
                </div>
                <h1>
                  The device shop that <span className="g">actually</span> fixes the hard stuff
                </h1>
                <p className="lead">
                  PCs, laptops, smartphones, FRP/MDM assistance, electronics, and IT support — with quotes you can
                  understand and a booking path that respects your time.
                </p>
                <div className="hero-cta">
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => go('book')}>
                    Book a diagnosis
                  </button>
                  <a className="btn btn-wa btn-lg" href={wa()} target="_blank" rel="noreferrer">
                    WhatsApp {PHONE}
                  </a>
                  <a className="btn btn-ghost btn-lg" href={TEL}>
                    Tap to call
                  </a>
                </div>
                <div className="trustbar">
                  <span className="pill">Computers & laptops</span>
                  <span className="pill">Smartphones</span>
                  <span className="pill">FRP / MDM assess</span>
                  <span className="pill">Electronics</span>
                  <span className="pill">Remote + on-site</span>
                  <span className="pill">Shop catalog ready</span>
                </div>
                <div className="stats">
                  <div className="stat">
                    <b>PC</b>
                    <span>Repair & IT</span>
                  </div>
                  <div className="stat">
                    <b>Phone</b>
                    <span>Repair & unlocks*</span>
                  </div>
                  <div className="stat">
                    <b>Bench</b>
                    <span>Electronics</span>
                  </div>
                  <div className="stat">
                    <b>Shop</b>
                    <span>Reseller path</span>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="term">
                  <div className="row">
                    <span>dex://command</span>
                    <span>
                      <span className="dot" /> intake open
                    </span>
                  </div>
                  <div className="info">$ accept --device pc|phone|electronics</div>
                  <div className="ok">✓ FRP / MDM cases assessed individually</div>
                  <div className="ok">✓ Remote · on-site · bench modes</div>
                  <div className="warn">→ Parts & policy work: approve first</div>
                  <div className="vio">$ catalog --status reseller-ready</div>
                  <div className="ok">✓ Shop slots waiting for your stock lists</div>
                  <div style={{ marginTop: '0.8rem', color: 'var(--dim)' }}>
                    {PHONE} · {EMAIL}
                  </div>
                </div>
              </div>
            </section>

            <div className="strip">
              <div>
                <b>Above-the-fold clarity</b>
                <span>What we do · how to reach us · what happens next</span>
              </div>
              <div>
                <b>Sticky WhatsApp & call</b>
                <span>Highest-ROI actions for local service</span>
              </div>
              <div>
                <b>Booking form built-in</b>
                <span>Device · service · mode · symptoms</span>
              </div>
            </div>

            <section className="block">
              <h2>Flagship services</h2>
              <p className="sub">Not a tiny PC-only shop — full stack for modern device problems.</p>
              <div className="grid-3">
                {SERVICES.slice(0, 6).map((s) => (
                  <article key={s.title} className="card">
                    <div className="tag">{s.cat}</div>
                    <div className="ic">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                  </article>
                ))}
              </div>
              <button type="button" className="btn btn-ghost mt" onClick={() => go('services')}>
                All services →
              </button>
            </section>

            <section className="block">
              <h2>Book without the runaround</h2>
              <p className="sub">Form → WhatsApp with every field filled. That is how busy clients convert.</p>
              <div className="grid-2">
                <BookingForm />
                <div>
                  <div className="citem">
                    <b>WhatsApp</b>
                    <a href={wa()} target="_blank" rel="noreferrer">
                      {PHONE}
                    </a>
                  </div>
                  <div className="citem">
                    <b>Call</b>
                    <a href={TEL}>{PHONE}</a>
                  </div>
                  <div className="citem">
                    <b>Email</b>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                  <div className="citem">
                    <b>Shop</b>
                    <span>Product catalog page is live — add SKUs when your reseller stock arrives.</span>
                    <button type="button" className="btn btn-ghost btn-sm mt" onClick={() => go('shop')}>
                      View shop
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <Cta go={go} />
          </>
        )}

        {page === 'services' && (
          <>
            <div className="kicker">
              <span className="dot" /> Full capability map
            </div>
            <h1>
              Services that cover the <span className="g">real</span> device world
            </h1>
            <p className="lead">Computing, mobile, electronics, data, and IT — structured so clients find themselves in seconds.</p>
            <div className="grid-3">
              {SERVICES.map((s) => (
                <article key={s.title} className="card">
                  <div className="tag">{s.cat}</div>
                  <div className="ic">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'mobile' && (
          <>
            <div className="kicker">
              <span className="dot" /> Smartphones · FRP · MDM
            </div>
            <h1>
              Mobile work done with <span className="g">spine</span>
            </h1>
            <p className="lead">
              Screens, batteries, software, FRP and MDM-related assistance — assessed honestly, never oversold.
            </p>
            <div className="grid-3">
              {SERVICES.filter((s) => s.cat === 'Mobile').map((s) => (
                <article key={s.title} className="card">
                  <div className="ic">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="card mt">
              <h3>Important note</h3>
              <p>
                FRP and MDM jobs are evaluated per device and per situation. We do not promise outcomes we cannot
                support, and we do not assist with devices where ownership cannot be reasonably established.
              </p>
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'shop' && (
          <>
            <div className="kicker">
              <span className="dot" /> Reseller catalog
            </div>
            <h1>
              Shop — <span className="g">ready</span> for your stock
            </h1>
            <p className="lead">
              Product slots are live. When you add supplier catalogs, replace these placeholders with real SKUs, prices,
              and photos.
            </p>
            <div className="grid-3">
              {SHOP.map((p) => (
                <article key={p.name} className="card shop-card">
                  <div className="tag">{p.tag}</div>
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                  <div className="price-tag">{p.price}</div>
                  <span className="stock">Enquire to reserve · catalog expanding</span>
                  <a className="btn btn-ghost btn-sm" href={wa(`Hi — I am interested in: ${p.name}`)} target="_blank" rel="noreferrer">
                    Enquire on WhatsApp
                  </a>
                </article>
              ))}
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'pricing' && (
          <>
            <div className="kicker">
              <span className="dot" /> Models
            </div>
            <h1>
              Pricing without the <span className="g">fog</span>
            </h1>
            <p className="lead">Lead with the model. Quote the number for the specific device and scope.</p>
            <div className="grid-3">
              {PRICING.map((p) => (
                <article key={p.title} className={`card price${p.hot ? ' hot' : ''}`}>
                  {p.hot && <span className="badge">POPULAR</span>}
                  <h3>{p.title}</h3>
                  <div className="model">{p.model}</div>
                  <p>{p.body}</p>
                  <ul className="checks">
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <button type="button" className="btn btn-ghost" onClick={() => go('book')}>
                    Request this model
                  </button>
                </article>
              ))}
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'process' && (
          <>
            <div className="kicker">
              <span className="dot" /> Workflow
            </div>
            <h1>
              How work <span className="g">moves</span>
            </h1>
            <p className="lead">Four steps from first message to tested handover.</p>
            <div className="steps">
              {STEPS.map((s) => (
                <article key={s.n} className="step">
                  <div className="n">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{s.d}</p>
                </article>
              ))}
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'about' && (
          <>
            <div className="kicker">
              <span className="dot" /> Brand
            </div>
            <h1>
              PC REPAIR DEX is built for <span className="g">operators</span>
            </h1>
            <p className="lead">
              Not a single-trick PC bench. A premium service brand across computers, phones, electronics, IT support, and
              a reseller catalog path — so clients stop shopping five different “guys”.
            </p>
            <div className="grid-2">
              <article className="card">
                <h3>What we optimise for</h3>
                <ul>
                  <li>Clarity in the first five seconds</li>
                  <li>Honest limits on FRP / MDM work</li>
                  <li>Parts approval before install</li>
                  <li>WhatsApp as the default channel</li>
                  <li>Shop ready when your stock is</li>
                </ul>
              </article>
              <article className="card">
                <h3>Contact</h3>
                <p>
                  WhatsApp <strong>{PHONE}</strong>
                  <br />
                  Call <a href={TEL}>{PHONE}</a>
                  <br />
                  Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </article>
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'faq' && (
          <>
            <div className="kicker">
              <span className="dot" /> Answers
            </div>
            <h1>
              FAQ — <span className="g">no fluff</span>
            </h1>
            <div className="faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'book' && (
          <>
            <div className="kicker">
              <span className="dot" /> Booking
            </div>
            <h1>
              Book <span className="g">now</span>
            </h1>
            <p className="lead">Full intake form. Lands on WhatsApp with structure — not a vague “hi”.</p>
            <div className="grid-2">
              <BookingForm />
              <div>
                <div className="citem">
                  <b>Prefer chat first?</b>
                  <a href={wa()} target="_blank" rel="noreferrer">
                    Open WhatsApp {PHONE}
                  </a>
                </div>
                <div className="citem">
                  <b>Prefer voice?</b>
                  <a href={TEL}>Call {PHONE}</a>
                </div>
                <div className="citem">
                  <b>What to include</b>
                  <span>Device model, OS, whether it powers on, and if the issue is hardware, software, or account lock.</span>
                </div>
              </div>
            </div>
          </>
        )}

        {page === 'roadmap' && (
          <>
            <div className="kicker">
              <span className="dot" /> 10-quarter Mythos · website
            </div>
            <h1>
              Roadmap built to <span className="g">outdistance</span> competitors
            </h1>
            <p className="lead">
              Ten gods · ten quarters · website-only scope (not invoicing backends). Planned at high intensity (~500
              items per quarter in the full programme).
            </p>
            {QUARTERS.map((q) => (
              <div key={q.id} className="roadmap-item">
                <h3>
                  {q.id} · {q.god} — {q.title}
                </h3>
                <p>{q.focus}</p>
              </div>
            ))}
          </>
        )}

        {page === 'contact' && (
          <>
            <div className="kicker">
              <span className="dot" /> Reach
            </div>
            <h1>
              Contact <span className="g">DEX</span>
            </h1>
            <p className="lead">Sticky WhatsApp, tap-to-call, email, and the booking form — friction removed on purpose.</p>
            <div className="grid-2">
              <div>
                <div className="citem">
                  <b>WhatsApp</b>
                  <a href={wa()} target="_blank" rel="noreferrer">
                    {PHONE}
                  </a>
                </div>
                <div className="citem">
                  <b>Call</b>
                  <a href={TEL}>{PHONE}</a>
                </div>
                <div className="citem">
                  <b>Email</b>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <button type="button" className="btn btn-primary mt" onClick={() => go('book')}>
                  Open booking form
                </button>
              </div>
              <BookingForm compact />
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <button type="button" className="logo" onClick={() => go('home')} style={{ marginBottom: '0.6rem' }}>
              <img src="/dex.svg" alt="" width="32" height="32" />
              <div className="logo-text">
                <strong>PC REPAIR DEX</strong>
                <span>Devices · Phones · Electronics · IT</span>
              </div>
            </button>
            <p>Premium repair and IT brand — computers, smartphones, FRP/MDM assessments, electronics, and a reseller shop path.</p>
          </div>
          <div>
            <h4>Services</h4>
            <button type="button" onClick={() => go('services')}>
              All services
            </button>
            <button type="button" onClick={() => go('mobile')}>
              Phones & FRP
            </button>
            <button type="button" onClick={() => go('shop')}>
              Shop
            </button>
            <button type="button" onClick={() => go('pricing')}>
              Pricing
            </button>
          </div>
          <div>
            <h4>Company</h4>
            <button type="button" onClick={() => go('about')}>
              About
            </button>
            <button type="button" onClick={() => go('process')}>
              Process
            </button>
            <button type="button" onClick={() => go('faq')}>
              FAQ
            </button>
            <button type="button" onClick={() => go('roadmap')}>
              Roadmap
            </button>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={wa()} target="_blank" rel="noreferrer">
              WhatsApp {PHONE}
            </a>
            <a href={TEL}>Call {PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button type="button" onClick={() => go('book')}>
              Booking form
            </button>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} PC REPAIR DEX · Premium device services</span>
          <span className="mono">
            {PHONE} · {EMAIL}
          </span>
        </div>
      </footer>

      <a className="btn btn-wa floating-wa" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        Chat {PHONE}
      </a>
    </>
  )
}
