import { useMemo, useState, useEffect } from 'react'

const WA = '27684840123'
const EMAIL = 'pcrepairdex@gmail.com'
const PHONE = '068 484 0123'
const TEL = 'tel:+27684840123'
const SAID = 'https://github.com/dexter187gold/said'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'shop', label: 'Shop' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'book', label: 'Book' },
  { id: 'software', label: 'SA Invoice' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

const SERVICES = [
  { group: 'Computers', items: [
    { title: 'PC & laptop repair', text: 'Diagnosis, upgrades, malware cleanup, rebuilds, storage and power faults.', client: 'You get a clear fault report before any parts are ordered.' },
    { title: 'Remote IT support', text: 'Screen-share help for software, Microsoft 365, printers and urgent unblocking.', client: 'Stay at your desk — we connect securely and fix what we can online.' },
    { title: 'On-site technician', text: 'Hardware, networks and Wi-Fi at your home or office.', client: 'We come to you when the job cannot be done remotely.' },
  ]},
  { group: 'Phones & mobile', items: [
    { title: 'Smartphone repair', text: 'Screens, batteries, charging ports, software restores and performance.', client: 'Quote first — you approve before the device is opened for parts.' },
    { title: 'FRP assistance', text: 'Factory Reset Protection help on supported devices — assessed case by case.', client: 'Honest assessment: we say if success is unlikely before you pay for deep work.' },
    { title: 'MDM / policy help', text: 'Work-profile and MDM-related assistance where ownership and support allow.', client: 'We check legitimacy and support path before promising outcomes.' },
  ]},
  { group: 'Electronics & data', items: [
    { title: 'Electronics repair', text: 'Board-level and consumer electronics diagnostics beyond PCs.', client: 'Go / no-go advice so you are not funding a hopeless board.' },
    { title: 'Data & backup assist', text: 'Drive health, backup setup and recovery assessment.', client: 'Priority on safe handling — we talk before any destructive steps.' },
    { title: 'Performance upgrades', text: 'SSD, RAM and tune-ups when they fix the real bottleneck.', client: 'Only recommended when it will change how the machine feels day to day.' },
  ]},
]

const NEED_OPTIONS = [
  { id: 'laptop', label: 'My laptop or PC is slow / broken', service: 'PC & laptop repair', device: 'Laptop / PC', hint: 'We will ask for model and symptoms, then recommend remote or bench.' },
  { id: 'remote', label: 'I need help online (software)', service: 'Remote IT support', device: 'Laptop / PC', hint: 'Remote is fastest when Windows, email or apps misbehave.' },
  { id: 'phone', label: 'My phone needs repair', service: 'Smartphone repair', device: 'Smartphone', hint: 'Screens and batteries are quoted before open.' },
  { id: 'frp', label: 'FRP or account lock on a phone', service: 'FRP assistance', device: 'Smartphone', hint: 'Assessment first — not every device can be helped.' },
  { id: 'onsite', label: 'Someone must come to me', service: 'On-site technician', device: 'Laptop / PC', hint: 'Share your area and urgency on the booking form.' },
  { id: 'other', label: 'Something else / not sure', service: 'Not sure — advise me', device: 'Laptop / PC', hint: 'Describe the device and problem — we will guide the path.' },
]

const PRICING = [
  { title: 'Hourly', text: 'Best when the fault is unclear. You pay for real time; we pause before extras.', client: 'You only pay for time used, with a stop-point before scope grows.' },
  { title: 'Flat rate', text: 'One agreed price for a defined job. Most popular when you want certainty.', client: 'You know the number before work starts on that package.' },
  { title: 'Ad-hoc', text: 'Itemised call-outs and line items — suited to once-off or COD-style work.', client: 'Every line is visible — useful when jobs mix travel and parts.' },
]

const STEPS = [
  { n: '1', t: 'You describe the device', d: 'Model, what went wrong, how urgent — form or WhatsApp.' },
  { n: '2', t: 'We agree the path together', d: 'Remote, on-site or bench. Hourly, flat or ad-hoc — your choice after advice.' },
  { n: '3', t: 'Work with updates', d: 'You hear progress. Parts only after you approve.' },
  { n: '4', t: 'You get a clear handover', d: 'What changed, what to watch, and support if something feels off.' },
]

const FAQS = [
  { q: 'What do I need ready before I message you?', a: 'Device model, a short description of the fault, and whether you prefer remote, on-site or drop-off. Photos of error screens help.' },
  { q: 'Will you replace parts without asking?', a: 'No. You approve parts and the pricing model before that spend.' },
  { q: 'Do you only fix PCs?', a: 'No. Smartphones, FRP/MDM assessments (case by case), electronics and IT support are included.' },
  { q: 'Is FRP or MDM always possible?', a: 'No. We assess first and say clearly if the path is weak or unsupported.' },
  { q: 'How do I book?', a: 'Use the Book page — the form opens WhatsApp with your details already filled.' },
  { q: 'When does the shop open?', a: 'Coming soon. For a part now, WhatsApp the model number.' },
  { q: 'What is SA Invoice Desk / Pro?', a: 'Invoicing products for service businesses. See the SA Invoice page if you run a shop yourself.' },
]

function wa(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text || 'Hi PC REPAIR DEX — I need help.')}`
}

function BrandLockup({ onClick, compact }) {
  return (
    <button type="button" className="brand-lockup" onClick={onClick} aria-label="PC REPAIR DEX home">
      <img className="brand-mark" src="/dex.svg" alt="" width={44} height={44} />
      <span className="brand-text">
        <span className="brand-name">PC REPAIR <em>DEX</em></span>
        {!compact && <span className="brand-tag">Professional device &amp; IT services</span>}
      </span>
    </button>
  )
}

function Cta({ go }) {
  return (
    <div className="cta-bar">
      <div>
        <strong>You choose the next step</strong>
        <p>Book with the form, or message WhatsApp — same team, same number.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <button type="button" className="btn btn-primary" onClick={() => go('book')}>Book as a client</button>
        <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">WhatsApp {PHONE}</a>
      </div>
    </div>
  )
}

function BookingForm({ preset }) {
  const [f, setF] = useState({
    name: '',
    phone: '',
    device: preset?.device || 'Laptop / PC',
    service: preset?.service || 'PC & laptop repair',
    mode: 'either',
    when: '',
    message: '',
  })

  useEffect(() => {
    if (preset) {
      setF((prev) => ({
        ...prev,
        device: preset.device || prev.device,
        service: preset.service || prev.service,
      }))
    }
  }, [preset])

  const filled = [f.name, f.phone, f.message].filter((x) => String(x).trim().length > 0).length
  const progress = Math.round((filled / 3) * 100)

  const text = useMemo(() => [
    '*PC REPAIR DEX* — client booking',
    `Name: ${f.name || '—'}`,
    `Phone: ${f.phone || '—'}`,
    `Device: ${f.device}`,
    `Service: ${f.service}`,
    `Mode: ${f.mode}`,
    f.when ? `When: ${f.when}` : null,
    f.message ? `Issue: ${f.message}` : null,
  ].filter(Boolean).join('\n'), [f])

  return (
    <form
      className="form card"
      onSubmit={(e) => {
        e.preventDefault()
        window.open(wa(text), '_blank', 'noopener')
      }}
    >
      <h3>Your booking details</h3>
      <p className="dim">For you: one message with everything filled. For us: we can quote faster.</p>
      <div className="form-progress" aria-hidden="true"><div style={{ width: `${progress}%` }} /></div>
      <p className="dim" style={{ marginTop: '-0.35rem' }}>{progress < 100 ? 'Complete name, phone and issue to send.' : 'Ready to send on WhatsApp.'}</p>
      {preset?.hint && <div className="form-hint">{preset.hint}</div>}
      <div className="form-row">
        <label>Your name<input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} placeholder="Full name" /></label>
        <label>Your WhatsApp number<input required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} placeholder="08x…" /></label>
      </div>
      <div className="form-row">
        <label>Your device
          <select value={f.device} onChange={(e) => setF({ ...f, device: e.target.value })}>
            <option>Laptop / PC</option>
            <option>Smartphone</option>
            <option>Tablet</option>
            <option>Electronics</option>
          </select>
        </label>
        <label>What you need
          <select value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })}>
            <option>PC & laptop repair</option>
            <option>Remote IT support</option>
            <option>On-site technician</option>
            <option>Smartphone repair</option>
            <option>FRP assistance</option>
            <option>MDM / policy help</option>
            <option>Electronics repair</option>
            <option>Not sure — advise me</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>How should we help?
          <select value={f.mode} onChange={(e) => setF({ ...f, mode: e.target.value })}>
            <option value="remote">Remote — I stay where I am</option>
            <option value="onsite">On-site — come to me</option>
            <option value="bench">Bench — I can drop off</option>
            <option value="either">Advise me</option>
          </select>
        </label>
        <label>Preferred time<input value={f.when} onChange={(e) => setF({ ...f, when: e.target.value })} placeholder="Optional" /></label>
      </div>
      <label>Describe the problem (for a faster quote)
        <textarea required rows={4} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} placeholder="What happens? When did it start? Any error text?" />
      </label>
      <button type="submit" className="btn btn-primary btn-lg">Send my request on WhatsApp</button>
    </form>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [menu, setMenu] = useState(false)
  const [serviceTab, setServiceTab] = useState('Computers')
  const [need, setNeed] = useState(null)
  const [priceSel, setPriceSel] = useState('Flat rate')
  const [stepHover, setStepHover] = useState(null)
  const [bookPreset, setBookPreset] = useState(null)

  useEffect(() => {
    const sync = () => {
      const h = (location.hash || '#home').slice(1)
      if (NAV.some((n) => n.id === h)) setPage(h)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const go = (id, preset) => {
    if (preset) setBookPreset(preset)
    setPage(id)
    setMenu(false)
    location.hash = id
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeGroup = SERVICES.find((g) => g.group === serviceTab) || SERVICES[0]

  return (
    <>
      <header className="header">
        <div className="wrap header-inner">
          <BrandLockup onClick={() => go('home')} />
          <nav className="nav-d" aria-label="Primary">
            {NAV.map((n) => (
              <button key={n.id} type="button" className={page === n.id ? 'on' : ''} onClick={() => go(n.id)}>{n.label}</button>
            ))}
          </nav>
          <div className="header-actions">
            <a className="btn btn-wa btn-sm" href={wa()} target="_blank" rel="noreferrer">{PHONE}</a>
            <button type="button" className="burger" aria-expanded={menu} onClick={() => setMenu((v) => !v)}>{menu ? 'Close' : 'Menu'}</button>
          </div>
        </div>
        <div className={`wrap drawer${menu ? ' open' : ''}`}>
          {NAV.map((n) => (
            <button key={n.id} type="button" className={page === n.id ? 'on' : ''} onClick={() => go(n.id)}>{n.label}</button>
          ))}
        </div>
      </header>

      <main className="wrap page">
        {page === 'home' && (
          <>
            <section className="hero">
              <div>
                <p className="eyebrow">For clients who want clarity</p>
                <h1>You explain the problem. We handle the path.</h1>
                <p className="lead">
                  PC REPAIR DEX is built around your time: clear options, quotes you approve, and WhatsApp updates —
                  whether it is a PC, phone, or electronics job.
                </p>
                <div className="hero-actions">
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => go('book')}>Start as a client</button>
                  <a className="btn btn-wa btn-lg" href={wa()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                  <button type="button" className="btn btn-ghost btn-lg" onClick={() => go('services')}>Browse services</button>
                </div>
                <div className="pills">
                  <span className="pill">You approve parts</span>
                  <span className="pill">You choose remote or on-site</span>
                  <span className="pill">You get a plain-language quote</span>
                </div>
              </div>
              <div className="card">
                <p className="label">Interactive — what do you need?</p>
                <p className="dim" style={{ marginBottom: '0.65rem' }}>Tap one — we prefill booking for you.</p>
                <div className="chooser">
                  {NEED_OPTIONS.map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      className={`chooser-btn${need === o.id ? ' active' : ''}`}
                      onClick={() => {
                        setNeed(o.id)
                        go('book', { service: o.service, device: o.device, hint: o.hint })
                      }}
                    >
                      {o.label}
                      <span>{o.hint}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <div className="benefit-row">
              <div className="benefit">
                <strong>For you</strong>
                <p>Fewer surprises — model, quote style, and parts approval before spend.</p>
              </div>
              <div className="benefit">
                <strong>For us</strong>
                <p>Better intake means faster, accurate help and less back-and-forth.</p>
              </div>
              <div className="benefit">
                <strong>Together</strong>
                <p>WhatsApp as the shared thread from first message to handover.</p>
              </div>
            </div>

            <section className="section">
              <div className="section-head">
                <h2>How it feels on your side</h2>
                <p>Four steps — hover to focus. Full booking lives on the Book page only.</p>
              </div>
              <div className="steps">
                {STEPS.map((s) => (
                  <article
                    key={s.n}
                    className={`step${stepHover === s.n ? ' active' : ''}`}
                    onMouseEnter={() => setStepHover(s.n)}
                    onMouseLeave={() => setStepHover(null)}
                  >
                    <div className="n">Step {s.n}</div>
                    <h3>{s.t}</h3>
                    <p className="dim">{s.d}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="section-head">
                <h2>Service map</h2>
                <p>Short view — open Services for client benefits on each line.</p>
              </div>
              <div className="grid-3">
                {SERVICES.map((g) => (
                  <article key={g.group} className="card">
                    <p className="label">{g.group}</p>
                    <ul>
                      {g.items.map((i) => (
                        <li key={i.title}><strong style={{ color: 'var(--text)' }}>{i.title}</strong></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="section">
              <div className="section-head">
                <h2>If you run a repair business too</h2>
                <p>SA Invoice Desk &amp; Pro — paperwork that matches field work.</p>
              </div>
              <div className="product-banner">
                <article className="product-card">
                  <span className="badge">SA Invoice Desk</span>
                  <h3>Desk</h3>
                  <p className="muted">Quotes and invoices for solo techs and small counters.</p>
                  <button type="button" className="btn btn-primary btn-sm" style={{ marginTop: '0.75rem' }} onClick={() => go('software')}>For business owners</button>
                </article>
                <article className="product-card">
                  <span className="badge">SA Invoice Pro</span>
                  <h3>Pro</h3>
                  <p className="muted">Tickets, field jobs and richer document workflows.</p>
                  <a className="btn btn-ghost btn-sm" style={{ marginTop: '0.75rem' }} href={SAID} target="_blank" rel="noreferrer">View stack</a>
                </article>
              </div>
            </section>

            <div className="coming" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem' }}>Shop — coming soon</h2>
              <p>Parts and accessories will appear here. Need something now? WhatsApp the model.</p>
              <button type="button" className="btn btn-ghost" onClick={() => go('shop')}>Shop status</button>
            </div>

            <Cta go={go} />
          </>
        )}

        {page === 'services' && (
          <>
            <p className="eyebrow">Client view</p>
            <h1>Services — what you receive</h1>
            <p className="lead">Each line includes what it means for you, not only what we do on the bench.</p>
            <div className="tabs" role="tablist">
              {SERVICES.map((g) => (
                <button key={g.group} type="button" role="tab" aria-selected={serviceTab === g.group} className={`tab${serviceTab === g.group ? ' on' : ''}`} onClick={() => setServiceTab(g.group)}>
                  {g.group}
                </button>
              ))}
            </div>
            <div className="grid-3">
              {activeGroup.items.map((i) => (
                <article key={i.title} className="card">
                  <h3>{i.title}</h3>
                  <p>{i.text}</p>
                  <p style={{ marginTop: '0.65rem', color: 'var(--sky)', fontSize: '0.92rem' }}><strong>For you:</strong> {i.client}</p>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    style={{ marginTop: '0.75rem' }}
                    onClick={() => go('book', { service: i.title, device: activeGroup.group === 'Phones & mobile' ? 'Smartphone' : 'Laptop / PC', hint: i.client })}
                  >
                    Book this
                  </button>
                </article>
              ))}
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'shop' && (
          <>
            <p className="eyebrow">Catalog</p>
            <h1>Shop</h1>
            <div className="coming">
              <h2>Coming soon</h2>
              <p>We are not listing products yet. When the catalog opens, you will see parts and accessories with clear enquiry paths.</p>
              <a className="btn btn-wa" href={wa('Hi — I need a part quote. Model:')} target="_blank" rel="noreferrer">Ask for a part on WhatsApp</a>
            </div>
          </>
        )}

        {page === 'pricing' && (
          <>
            <p className="eyebrow">Your options</p>
            <h1>Pricing models</h1>
            <p className="lead">Tap a model to select it — then book with that preference in mind. Exact rands depend on your device.</p>
            <div className="grid-3">
              {PRICING.map((p) => (
                <article
                  key={p.title}
                  className={`card price-card${priceSel === p.title ? ' selected' : ''}`}
                  onClick={() => setPriceSel(p.title)}
                  onKeyDown={(e) => e.key === 'Enter' && setPriceSel(p.title)}
                  role="button"
                  tabIndex={0}
                >
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <p style={{ marginTop: '0.55rem', color: 'var(--sky)', fontSize: '0.9rem' }}><strong>For you:</strong> {p.client}</p>
                </article>
              ))}
            </div>
            <p className="dim" style={{ marginTop: '1rem' }}>Selected: <strong style={{ color: 'var(--text)' }}>{priceSel}</strong> — mention it when you book.</p>
            <button type="button" className="btn btn-primary" style={{ marginTop: '0.75rem' }} onClick={() => go('book', { hint: `Client prefers ${priceSel} pricing model.` })}>
              Book with {priceSel}
            </button>
            <Cta go={go} />
          </>
        )}

        {page === 'book' && (
          <>
            <p className="eyebrow">Client intake</p>
            <h1>Book</h1>
            <p className="lead">This is the only page with the full form — so your details stay in one place and we both save time.</p>
            <div className="grid-2">
              <BookingForm preset={bookPreset} />
              <div className="contact-list">
                <div className="contact-item">
                  <strong>Prefer to type less?</strong>
                  <a href={wa()} target="_blank" rel="noreferrer">Open WhatsApp {PHONE}</a>
                </div>
                <div className="contact-item">
                  <strong>Prefer a call?</strong>
                  <a href={TEL}>{PHONE}</a>
                </div>
                <div className="contact-item">
                  <strong>What you get after sending</strong>
                  <span className="muted">A reply with the recommended path (remote / on-site / bench) and pricing model.</span>
                </div>
              </div>
            </div>
          </>
        )}

        {page === 'software' && (
          <>
            <p className="eyebrow">For business owners</p>
            <h1>SA Invoice Desk &amp; Pro</h1>
            <p className="lead">If you are a client with a broken laptop, use Book. If you run a service business, these products help you quote and invoice cleanly.</p>
            <div className="product-banner">
              <article className="product-card">
                <span className="badge">SA Invoice Desk</span>
                <h3>Desk</h3>
                <p className="muted">Day-to-day quotes and invoices for solo technicians and small counters.</p>
                <a className="btn btn-primary" style={{ marginTop: '0.85rem' }} href={SAID} target="_blank" rel="noreferrer">Open product stack</a>
              </article>
              <article className="product-card">
                <span className="badge">SA Invoice Pro</span>
                <h3>Pro</h3>
                <p className="muted">Tickets, field workflows and advanced documents when you outgrow a basic invoice pad.</p>
                <a className="btn btn-ghost" style={{ marginTop: '0.85rem' }} href={SAID} target="_blank" rel="noreferrer">Explore Pro</a>
              </article>
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'about' && (
          <>
            <p className="eyebrow">Company</p>
            <h1>About PC REPAIR <span style={{ color: 'var(--sky)' }}>DEX</span></h1>
            <p className="lead">
              A professional device and IT service company — computers, phones, electronics — with a client-first booking
              path and optional SA Invoice products for shops.
            </p>
            <div className="grid-2">
              <article className="card">
                <h3>What clients can expect</h3>
                <ul>
                  <li>Plain language before payment decisions</li>
                  <li>Parts approval before install</li>
                  <li>Honest limits on FRP / MDM work</li>
                  <li>WhatsApp as the shared job thread</li>
                </ul>
              </article>
              <article className="card">
                <h3>Company contact</h3>
                <p className="muted">WhatsApp {PHONE}<br />Email {EMAIL}</p>
              </article>
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'faq' && (
          <>
            <p className="eyebrow">Before you book</p>
            <h1>FAQ</h1>
            <p className="lead">Answers from the client side — what you need, what we will not do silently.</p>
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

        {page === 'contact' && (
          <>
            <p className="eyebrow">Reach the company</p>
            <h1>Contact</h1>
            <p className="lead">Direct channels only. Bookings use the Book page so your job details stay structured.</p>
            <div className="contact-list" style={{ maxWidth: '28rem' }}>
              <div className="contact-item">
                <strong>WhatsApp</strong>
                <a href={wa()} target="_blank" rel="noreferrer">{PHONE}</a>
              </div>
              <div className="contact-item">
                <strong>Call</strong>
                <a href={TEL}>{PHONE}</a>
              </div>
              <div className="contact-item">
                <strong>Email</strong>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact-item">
                <strong>Start a job request</strong>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => go('book')}>Open client booking form</button>
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/dex.svg" alt="" width="32" height="32" />
              <div>
                <strong>PC REPAIR DEX</strong>
                <div className="dim" style={{ fontSize: '0.75rem' }}>Professional device &amp; IT services</div>
              </div>
            </div>
            <p>Client-first repair and IT. Shop coming soon. SA Invoice for business owners.</p>
            <p style={{ marginTop: '0.45rem' }}>{PHONE}<br />{EMAIL}</p>
          </div>
          <div>
            <h4>Clients</h4>
            <button type="button" onClick={() => go('services')}>Services</button>
            <button type="button" onClick={() => go('pricing')}>Pricing</button>
            <button type="button" onClick={() => go('book')}>Book</button>
            <button type="button" onClick={() => go('faq')}>FAQ</button>
          </div>
          <div>
            <h4>Company</h4>
            <button type="button" onClick={() => go('about')}>About</button>
            <button type="button" onClick={() => go('shop')}>Shop</button>
            <button type="button" onClick={() => go('software')}>SA Invoice</button>
            <button type="button" onClick={() => go('contact')}>Contact</button>
          </div>
          <div>
            <h4>Chat</h4>
            <a href={wa()} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={TEL}>Call</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} PC REPAIR DEX</span>
          <span>{PHONE} · {EMAIL}</span>
        </div>
      </footer>

      <a className="btn btn-wa float-wa" href={wa()} target="_blank" rel="noreferrer">Chat</a>
    </>
  )
}
