import { useMemo, useState, useEffect } from 'react'

const WA = '27684840123'
const EMAIL = 'pcrepairdex@gmail.com'
const PHONE = '068 484 0123'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'process', label: 'How it works' },
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'book', label: 'Book' },
  { id: 'contact', label: 'Contact' },
]

const SERVICES = [
  {
    icon: '⌁',
    title: 'Remote IT support',
    blurb: 'Secure screen-share sessions for software faults, configuration, and urgent unblocking — without travel time.',
    points: ['Same-day slots when available', 'Microsoft 365 & Windows help', 'Clear time boundaries before we start'],
  },
  {
    icon: '⌂',
    title: 'On-site technician',
    blurb: 'Hands-on support at your home or office for hardware, cabling, Wi-Fi, and jobs that need a physical presence.',
    points: ['Call-out options', 'Structured visit notes', 'WhatsApp status while we work'],
  },
  {
    icon: '▣',
    title: 'PC & laptop repair',
    blurb: 'Diagnosis-first repairs: performance, storage, displays, power issues, malware, and clean Windows rebuilds.',
    points: ['Parts quoted before install', 'Honest “repair vs replace” advice', 'Data caution on every job'],
  },
  {
    icon: '⬡',
    title: 'Small business IT',
    blurb: 'Practical support for small teams — workstations, printers, backups, and day-to-day reliability.',
    points: ['Package or hourly options', 'Documented changes', 'Priority for retainer clients'],
  },
  {
    icon: '◎',
    title: 'Data & backup assist',
    blurb: 'Drive health checks, backup setup, and recovery assessment so files are not a gamble.',
    points: ['Written findings', 'No silent extras', 'Secure handling of devices'],
  },
  {
    icon: '✦',
    title: 'Upgrades that matter',
    blurb: 'SSD, memory, and tune-ups that you can feel — recommended only when they solve the real bottleneck.',
    points: ['Before/after expectations', 'Compatible parts guidance', 'Transparent labour'],
  },
]

const PRICING = [
  {
    title: 'Hourly',
    model: 'TIME & MATERIALS',
    hot: false,
    body: 'Best when the fault is unclear. You pay for real work time; we stop and agree before scope expands.',
    items: ['Ideal for diagnosis', 'Pause before extras', 'Full time visibility', 'Great for first-time clients'],
  },
  {
    title: 'Flat rate',
    model: 'FIXED PACKAGE',
    hot: true,
    body: 'One agreed price for a defined outcome. Peace of mind when you want the number locked in.',
    items: ['Scope written upfront', 'No surprise labour drift', 'Popular for known jobs', 'Clear handover checklist'],
  },
  {
    title: 'Ad-hoc rate card',
    model: 'ITEMISED COD',
    hot: false,
    body: 'Call-outs, diagnostics, and line items for once-off work — ideal for COD-style handovers.',
    items: ['Itemised quote', 'Pay on completion options', 'Mix remote + on-site', 'Parts listed separately'],
  },
]

const STEPS = [
  { n: '01', t: 'Tell us what broke', d: 'WhatsApp or the book form. Device, symptoms, and whether you prefer remote or on-site.' },
  { n: '02', t: 'Agree the model', d: 'Hourly, flat, or ad-hoc. You approve the approach before parts or deep labour.' },
  { n: '03', t: 'We diagnose & fix', d: 'Status updates while we work. No silent scope creep — we talk first.' },
  { n: '04', t: 'Handover cleanly', d: 'You know what changed. Pay on agreed terms. Device released with confidence.' },
]

const REVIEWS = [
  { q: 'Finally someone who explains the quote before touching parts. Remote session fixed our Outlook mess the same day.', a: 'Small office · Remote' },
  { q: 'On-site visit was on time, laptop runs like new after the SSD upgrade, and WhatsApp updates made it stress-free.', a: 'Home user · On-site' },
  { q: 'We keep them on call for the team. Straight talk, no upsell theatre — just machines that work.', a: 'Retail counter · Retainer-style' },
]

const FAQS = [
  { q: 'Do you offer both remote and on-site support?', a: 'Yes. Remote is ideal for software and configuration. On-site is for hardware, networks, and anything that needs hands on the machine or premises.' },
  { q: 'How do you price jobs?', a: 'Three models: hourly (time & materials), flat-rate packages, and ad-hoc rate cards. We recommend a model after we understand the fault — you approve before major work.' },
  { q: 'Can I pay on completion (COD-style)?', a: 'Many jobs can be structured that way. Terms are written on your quote so there are no surprises at handover.' },
  { q: 'Will you replace parts without asking?', a: 'No. Parts are quoted and approved first. If diagnosis changes the plan, we pause and talk.' },
  { q: 'What should I prepare before remote support?', a: 'A stable internet link, admin access if possible, and a short note of error messages or when the issue started.' },
  { q: 'Do you work with small businesses?', a: 'Yes — workstations, printers, backups, and practical day-to-day IT for small teams.' },
  { q: 'How fast can you respond?', a: 'WhatsApp is the fastest channel (068 484 0123). Same-day remote slots are often available; on-site depends on schedule and area.' },
  { q: 'Is my data safe?', a: 'We treat devices carefully, avoid unnecessary copies, and tell you before any destructive steps (like a clean OS install).' },
]

function wa(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text || `Hi PC REPAIR DEX — I need IT help.`)}`
}

function CtaBand({ go }) {
  return (
    <div className="cta-band">
      <div>
        <h3>Ready when you are</h3>
        <p>Message us on WhatsApp with the device and the symptom — we will recommend remote or on-site and a pricing model.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        <a className="btn btn-wa btn-lg" href={wa()} target="_blank" rel="noreferrer">
          WhatsApp {PHONE}
        </a>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => go('book')}>
          Book online
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [menu, setMenu] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Remote IT support',
    mode: 'remote',
    when: '',
    message: '',
  })

  useEffect(() => {
    const fromHash = () => {
      const h = (location.hash || '#home').slice(1)
      if (NAV.some((n) => n.id === h)) setPage(h)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  const go = (id) => {
    setPage(id)
    setMenu(false)
    location.hash = id
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const enquiry = useMemo(
    () =>
      [
        '*PC REPAIR DEX* — website booking',
        `Name: ${form.name || '—'}`,
        `Phone: ${form.phone || '—'}`,
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
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="wrap nav-row">
          <button type="button" className="brand" onClick={() => go('home')}>
            <img src="/dex.svg" alt="" width="38" height="38" />
            PC REPAIR <em>DEX</em>
          </button>

          <nav className="nav-desk" aria-label="Primary">
            {NAV.map((n) => (
              <button key={n.id} type="button" className={page === n.id ? 'on' : ''} onClick={() => go(n.id)}>
                {n.label}
              </button>
            ))}
          </nav>

          <div className="nav-cta">
            <a className="btn btn-ghost btn-sm" href={`mailto:${EMAIL}`}>
              Email
            </a>
            <a className="btn btn-wa btn-sm" href={wa()} target="_blank" rel="noreferrer">
              {PHONE}
            </a>
            <button type="button" className="burger" aria-label="Menu" onClick={() => setMenu((v) => !v)}>
              {menu ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        <div className={`wrap mobile-panel${menu ? ' open' : ''}`}>
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
                  <span className="dot" /> Professional IT · Remote & on-site · South Africa
                </div>
                <h1>
                  IT support that looks as sharp as it <span className="grad">works</span>
                </h1>
                <p className="lead">
                  PC REPAIR DEX delivers remote and on-site support with quotes you can understand, status you can trust,
                  and handovers that feel finished — not vague.
                </p>
                <div className="hero-actions">
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => go('book')}>
                    Book support
                  </button>
                  <a className="btn btn-wa btn-lg" href={wa('Hi PC REPAIR DEX — I need help with my device.')} target="_blank" rel="noreferrer">
                    WhatsApp {PHONE}
                  </a>
                  <button type="button" className="btn btn-ghost btn-lg" onClick={() => go('pricing')}>
                    Pricing models
                  </button>
                </div>
                <div className="trust-row">
                  <span className="pill">Transparent quotes</span>
                  <span className="pill">Parts approved first</span>
                  <span className="pill">WhatsApp updates</span>
                  <span className="pill">COD-friendly options</span>
                </div>
                <div className="stats">
                  <div className="stat">
                    <b>Remote</b>
                    <span>Screen-share sessions</span>
                  </div>
                  <div className="stat">
                    <b>On-site</b>
                    <span>Technician visits</span>
                  </div>
                  <div className="stat">
                    <b>Clear</b>
                    <span>Hourly · flat · ad-hoc</span>
                  </div>
                </div>
              </div>

              <div className="panel">
                <div className="terminal">
                  <div className="h">
                    <span>dex://operations</span>
                    <span>
                      <span className="dot" /> available
                    </span>
                  </div>
                  <div className="info">$ intake --channel whatsapp</div>
                  <div className="ok">✓ Fault captured · mode = remote | onsite</div>
                  <div className="ok">✓ Pricing model recommended</div>
                  <div className="warn">→ Parts never installed without approval</div>
                  <div className="info">$ dispatch --update client</div>
                  <div className="ok">✓ Status on WhatsApp · handover checklist</div>
                  <div style={{ marginTop: '0.75rem', color: 'var(--faint)' }}>
                    Prefer human talk? {PHONE} · {EMAIL}
                  </div>
                </div>
              </div>
            </section>

            <div className="strip">
              <div>
                <strong>Same-day remote when slots open</strong>
                <div>
                  <span>Message the fault — we reply with next steps</span>
                </div>
              </div>
              <div>
                <strong>On-site by arrangement</strong>
                <div>
                  <span>Hardware · Wi-Fi · workstations</span>
                </div>
              </div>
              <div>
                <strong>Business-friendly</strong>
                <div>
                  <span>Small teams · printers · backups</span>
                </div>
              </div>
            </div>

            <section className="block">
              <div className="section-head">
                <h2>Services clients actually need</h2>
                <p>Not a bloated catalogue — focused work that gets people productive again.</p>
              </div>
              <div className="grid-3">
                {SERVICES.slice(0, 3).map((s) => (
                  <article key={s.title} className="card">
                    <div className="icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                  </article>
                ))}
              </div>
              <button type="button" className="btn btn-ghost mt" onClick={() => go('services')}>
                Full service list →
              </button>
            </section>

            <section className="block">
              <div className="section-head">
                <h2>Pricing without the fog</h2>
                <p>Pick a model that fits the job. Exact figures are quoted for your device and scope.</p>
              </div>
              <div className="grid-3">
                {PRICING.map((p) => (
                  <article key={p.title} className={`card price${p.hot ? ' hot' : ''}`}>
                    {p.hot && <span className="badge">MOST CHOSEN</span>}
                    <h3>{p.title}</h3>
                    <div className="model">{p.model}</div>
                    <p>{p.body}</p>
                  </article>
                ))}
              </div>
              <button type="button" className="btn btn-ghost mt" onClick={() => go('pricing')}>
                Compare models →
              </button>
            </section>

            <section className="block">
              <div className="section-head">
                <h2>What clients say</h2>
                <p>Clarity beats hype — here is the tone we aim for every job.</p>
              </div>
              <div className="grid-3">
                {REVIEWS.map((r) => (
                  <blockquote key={r.a} className="quote">
                    <p>“{r.q}”</p>
                    <footer>
                      <strong>{r.a}</strong>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>

            <CtaBand go={go} />
          </>
        )}

        {page === 'services' && (
          <>
            <div className="kicker">
              <span className="dot" /> Capabilities
            </div>
            <h1>
              Services built for <span className="grad">real faults</span>
            </h1>
            <p className="lead">From a frozen laptop to a shop counter that cannot print — we match the method to the problem.</p>
            <div className="grid-3">
              {SERVICES.map((s) => (
                <article key={s.title} className="card">
                  <div className="icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul>
                    {s.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <CtaBand go={go} />
          </>
        )}

        {page === 'pricing' && (
          <>
            <div className="kicker">
              <span className="dot" /> Transparent models
            </div>
            <h1>
              Pricing you can <span className="grad">defend</span>
            </h1>
            <p className="lead">Competitors hide the model. We lead with it — then quote the number for your specific job.</p>
            <div className="grid-3">
              {PRICING.map((p) => (
                <article key={p.title} className={`card price${p.hot ? ' hot' : ''}`}>
                  {p.hot && <span className="badge">MOST CHOSEN</span>}
                  <h3>{p.title}</h3>
                  <div className="model">{p.model}</div>
                  <p>{p.body}</p>
                  <ul className="list">
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
            <CtaBand go={go} />
          </>
        )}

        {page === 'process' && (
          <>
            <div className="kicker">
              <span className="dot" /> Workflow
            </div>
            <h1>
              How a job <span className="grad">actually</span> runs
            </h1>
            <p className="lead">Four steps. No mystery fees. No radio silence.</p>
            <div className="steps">
              {STEPS.map((s) => (
                <article key={s.n} className="step">
                  <div className="n">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{s.d}</p>
                </article>
              ))}
            </div>
            <CtaBand go={go} />
          </>
        )}

        {page === 'about' && (
          <>
            <div className="kicker">
              <span className="dot" /> PC REPAIR DEX
            </div>
            <h1>
              Built for people who are <span className="grad">done</span> with vague tech help
            </h1>
            <p className="lead">
              We are a professional IT support and PC repair practice. Remote when it is smarter. On-site when it must be.
              Quotes that name the model before the work begins.
            </p>
            <div className="grid-2">
              <article className="card">
                <h3>Operating principles</h3>
                <ul>
                  <li>Explain before you spend</li>
                  <li>Approve parts before install</li>
                  <li>Update on WhatsApp when it matters</li>
                  <li>Handover with a clear outcome</li>
                  <li>Respect data and downtime</li>
                </ul>
              </article>
              <article className="card">
                <h3>Contact</h3>
                <p style={{ marginBottom: '0.75rem' }}>
                  WhatsApp <strong>{PHONE}</strong>
                  <br />
                  Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
                <p style={{ color: 'var(--muted)' }}>
                  Tell us the device, the symptom, and whether you are home or at work — we will recommend the path.
                </p>
              </article>
            </div>
            <CtaBand go={go} />
          </>
        )}

        {page === 'reviews' && (
          <>
            <div className="kicker">
              <span className="dot" /> Social proof
            </div>
            <h1>
              Outcomes over <span className="grad">hype</span>
            </h1>
            <p className="lead">Representative feedback from the standard we hold ourselves to on every job.</p>
            <div className="grid-3">
              {REVIEWS.map((r) => (
                <blockquote key={r.a} className="quote">
                  <p>“{r.q}”</p>
                  <footer>
                    <strong>{r.a}</strong>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="grid-3 mt">
              {['Clear quotes', 'On-time remote slots', 'Respect for data', 'No silent parts', 'Business-aware', 'Human WhatsApp'].map(
                (t) => (
                  <div key={t} className="card">
                    <h3>{t}</h3>
                    <p>Non-negotiable in how PC REPAIR DEX shows up.</p>
                  </div>
                )
              )}
            </div>
            <CtaBand go={go} />
          </>
        )}

        {page === 'faq' && (
          <>
            <div className="kicker">
              <span className="dot" /> Answers
            </div>
            <h1>
              FAQ — <span className="grad">straight</span>
            </h1>
            <p className="lead">Everything people ask before they message us.</p>
            <div className="faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <CtaBand go={go} />
          </>
        )}

        {page === 'book' && (
          <>
            <div className="kicker">
              <span className="dot" /> Booking
            </div>
            <h1>
              Book <span className="grad">support</span>
            </h1>
            <p className="lead">Submit the form — it opens WhatsApp with your details ready for {PHONE}.</p>
            <div className="grid-2">
              <form
                className="form panel"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.open(wa(enquiry), '_blank', 'noopener')
                }}
              >
                <label>
                  Full name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </label>
                <label>
                  Phone / WhatsApp
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="08x xxx xxxx" />
                </label>
                <label>
                  Service
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    {SERVICES.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Preferred mode
                  <select value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })}>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="either">Either — you advise</option>
                  </select>
                </label>
                <label>
                  Preferred time (optional)
                  <input value={form.when} onChange={(e) => setForm({ ...form, when: e.target.value })} placeholder="e.g. Today after 16:00" />
                </label>
                <label>
                  Describe the issue
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Device, error messages, when it started…" />
                </label>
                <button type="submit" className="btn btn-primary btn-lg">
                  Continue on WhatsApp
                </button>
              </form>
              <div className="contact-side">
                <div className="citem">
                  <b>WhatsApp</b>
                  <a href={wa()} target="_blank" rel="noreferrer">
                    {PHONE}
                  </a>
                </div>
                <div className="citem">
                  <b>Email</b>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <div className="citem">
                  <b>Tip for faster help</b>
                  <span>Send the model, OS, and whether the issue is software or hardware. Photos of error screens help.</span>
                </div>
                <div className="citem">
                  <b>Emergency tone</b>
                  <span>If the business is down, say so in the first line — we prioritise unblock work when we can.</span>
                </div>
              </div>
            </div>
          </>
        )}

        {page === 'contact' && (
          <>
            <div className="kicker">
              <span className="dot" /> Reach us
            </div>
            <h1>
              Contact <span className="grad">PC REPAIR DEX</span>
            </h1>
            <p className="lead">WhatsApp is fastest. Email works for longer briefs and attachments.</p>
            <div className="grid-2">
              <div className="citem">
                <b>WhatsApp</b>
                <a href={wa()} target="_blank" rel="noreferrer">
                  {PHONE}
                </a>
                <div style={{ marginTop: '0.75rem' }}>
                  <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">
                    Open chat
                  </a>
                </div>
              </div>
              <div className="citem">
                <b>Email</b>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <div style={{ marginTop: '0.75rem' }}>
                  <a className="btn btn-ghost" href={`mailto:${EMAIL}?subject=IT%20support%20request`}>
                    Compose email
                  </a>
                </div>
              </div>
              <div className="citem">
                <b>Book a structured request</b>
                <span>Use the booking form so we get mode, service, and symptoms in one shot.</span>
                <div style={{ marginTop: '0.75rem' }}>
                  <button type="button" className="btn btn-primary" onClick={() => go('book')}>
                    Open book form
                  </button>
                </div>
              </div>
              <div className="citem">
                <b>Hours mindset</b>
                <span>We aim to answer WhatsApp quickly during the working day. Complex on-site work is scheduled deliberately.</span>
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <button type="button" className="brand" onClick={() => go('home')} style={{ marginBottom: '0.75rem' }}>
              <img src="/dex.svg" alt="" width="32" height="32" />
              PC REPAIR <em>DEX</em>
            </button>
            <p>Professional remote & on-site IT support and PC repair. Clear models. Human updates.</p>
            <p style={{ marginTop: '0.75rem' }}>
              {PHONE}
              <br />
              {EMAIL}
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            {NAV.slice(0, 5).map((n) => (
              <button key={n.id} type="button" onClick={() => go(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
          <div>
            <h4>Help</h4>
            {NAV.slice(5).map((n) => (
              <button key={n.id} type="button" onClick={() => go(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
          <div>
            <h4>Actions</h4>
            <a href={wa()} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
            <a href={`mailto:${EMAIL}`}>Email us</a>
            <button type="button" onClick={() => go('book')}>
              Book support
            </button>
            <button type="button" onClick={() => go('pricing')}>
              Pricing models
            </button>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} PC REPAIR DEX · All rights reserved</span>
          <span className="mono">068 484 0123 · pcrepairdex@gmail.com</span>
        </div>
      </footer>
    </>
  )
}
