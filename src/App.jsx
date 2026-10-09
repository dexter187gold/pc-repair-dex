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
    { title: 'PC & laptop repair', text: 'Diagnosis, upgrades, malware cleanup, rebuilds, storage and power faults.' },
    { title: 'Remote IT support', text: 'Screen-share help for software, Microsoft 365, printers and urgent unblocking.' },
    { title: 'On-site technician', text: 'Hardware, networks and Wi-Fi at your home or office.' },
  ]},
  { group: 'Phones & mobile', items: [
    { title: 'Smartphone repair', text: 'Screens, batteries, charging ports, software restores and performance.' },
    { title: 'FRP assistance', text: 'Factory Reset Protection help on supported devices — assessed case by case.' },
    { title: 'MDM / policy help', text: 'Work-profile and MDM-related assistance where ownership and support allow.' },
  ]},
  { group: 'Electronics & data', items: [
    { title: 'Electronics repair', text: 'Board-level and consumer electronics diagnostics beyond PCs.' },
    { title: 'Data & backup assist', text: 'Drive health, backup setup and recovery assessment.' },
    { title: 'Performance upgrades', text: 'SSD, RAM and tune-ups when they fix the real bottleneck.' },
  ]},
]

const PRICING = [
  { title: 'Hourly', text: 'Best when the fault is unclear. You pay for real time; we pause before extras.' },
  { title: 'Flat rate', text: 'One agreed price for a defined job. Most popular when you want certainty.' },
  { title: 'Ad-hoc', text: 'Itemised call-outs and line items — suited to once-off or COD-style work.' },
]

const STEPS = [
  { n: '1', t: 'Describe the device', d: 'WhatsApp or the book form — model, symptoms, urgency.' },
  { n: '2', t: 'Agree the path', d: 'Remote, on-site or bench. Hourly, flat or ad-hoc.' },
  { n: '3', t: 'Repair with updates', d: 'Status while we work. Parts only after you approve.' },
  { n: '4', t: 'Handover', d: 'Tested result and clear next steps.' },
]

const FAQS = [
  { q: 'Do you only fix PCs?', a: 'No. We also handle smartphones, FRP/MDM assessments, electronics and IT support.' },
  { q: 'Is every FRP or MDM job guaranteed?', a: 'No. We assess the device first and only proceed when the path is legitimate and supported.' },
  { q: 'How do I book?', a: 'Use the Book page form or WhatsApp 068 484 0123. The form prefills your details into chat.' },
  { q: 'When does the shop open?', a: 'Shop is coming soon. We will list reseller products (parts, accessories, devices) when stock is ready.' },
  { q: 'What is SA Invoice Desk / Pro?', a: 'Our invoicing products for service businesses — tickets, quotes and invoices. See the SA Invoice page.' },
  { q: 'Remote or on-site?', a: 'Software issues are often remote. Hardware, screens and physical work are on-site or bench.' },
]

const QUARTERS = [
  ['Q1 Athena', 'Page structure & readability'],
  ['Q2 Hermes', 'Booking & contact clarity'],
  ['Q3 Hephaestus', 'Service depth (PC / phone / electronics)'],
  ['Q4 Hestia', 'Trust & FAQ'],
  ['Q5 Apollo', 'Pricing education'],
  ['Q6 Artemis', 'Booking form quality'],
  ['Q7 Poseidon', 'Shop coming-soon → live catalog'],
  ['Q8 Ares', 'Mobile conversion (call / WA)'],
  ['Q9 Demeter', 'SA Invoice Desk & Pro promotion'],
  ['Q10 Zeus', 'Premium brand polish'],
]

function wa(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text || 'Hi PC REPAIR DEX — I need help.')}`
}

function Cta({ go }) {
  return (
    <div className="cta-bar">
      <div>
        <strong>Need help now?</strong>
        <p>Book online or message WhatsApp — we will recommend remote, on-site or bench.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <button type="button" className="btn btn-primary" onClick={() => go('book')}>Book</button>
        <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer">WhatsApp {PHONE}</a>
      </div>
    </div>
  )
}

function BookingForm() {
  const [f, setF] = useState({
    name: '', phone: '', device: 'Laptop / PC', service: 'PC & laptop repair',
    mode: 'either', when: '', message: '',
  })
  const text = useMemo(() => [
    '*PC REPAIR DEX* — booking',
    `Name: ${f.name || '—'}`,
    `Phone: ${f.phone || '—'}`,
    `Device: ${f.device}`,
    `Service: ${f.service}`,
    `Mode: ${f.mode}`,
    f.when ? `When: ${f.when}` : null,
    f.message ? `Issue: ${f.message}` : null,
  ].filter(Boolean).join('\n'), [f])

  return (
    <form className="form card" onSubmit={(e) => { e.preventDefault(); window.open(wa(text), '_blank', 'noopener') }}>
      <h3>Booking form</h3>
      <p className="dim" style={{ marginBottom: '0.25rem' }}>Sends to WhatsApp with your details filled in.</p>
      <div className="form-row">
        <label>Name<input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
        <label>Phone<input required value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} placeholder="08x…" /></label>
      </div>
      <div className="form-row">
        <label>Device
          <select value={f.device} onChange={(e) => setF({ ...f, device: e.target.value })}>
            <option>Laptop / PC</option>
            <option>Smartphone</option>
            <option>Tablet</option>
            <option>Electronics</option>
          </select>
        </label>
        <label>Service
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
        <label>Mode
          <select value={f.mode} onChange={(e) => setF({ ...f, mode: e.target.value })}>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="bench">Bench / drop-off</option>
            <option value="either">Either</option>
          </select>
        </label>
        <label>Preferred time<input value={f.when} onChange={(e) => setF({ ...f, when: e.target.value })} placeholder="Optional" /></label>
      </div>
      <label>Issue<textarea required rows={4} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} placeholder="Symptoms, model, urgency…" /></label>
      <button type="submit" className="btn btn-primary btn-lg">Send on WhatsApp</button>
    </form>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const sync = () => {
      const h = (location.hash || '#home').slice(1)
      if (NAV.some((n) => n.id === h) || h === 'roadmap') setPage(h)
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
      <header className="header">
        <div className="wrap header-inner">
          <button type="button" className="brand" onClick={() => go('home')}>
            <img src="/dex.svg" alt="" width="36" height="36" />
            <span>
              <span className="brand-name">PC REPAIR DEX</span>
              <span className="brand-sub" style={{ display: 'block' }}>Devices · IT · SA Invoice</span>
            </span>
          </button>
          <nav className="nav-d">
            {NAV.map((n) => (
              <button key={n.id} type="button" className={page === n.id ? 'on' : ''} onClick={() => go(n.id)}>{n.label}</button>
            ))}
          </nav>
          <div className="header-actions">
            <a className="btn btn-wa btn-sm" href={wa()} target="_blank" rel="noreferrer">{PHONE}</a>
            <button type="button" className="burger" onClick={() => setMenu((v) => !v)}>{menu ? 'Close' : 'Menu'}</button>
          </div>
        </div>
        <div className={`wrap drawer${menu ? ' open' : ''}`}>
          {NAV.map((n) => (
            <button key={n.id} type="button" className={page === n.id ? 'on' : ''} onClick={() => go(n.id)}>{n.label}</button>
          ))}
          <button type="button" onClick={() => go('roadmap')}>Roadmap</button>
        </div>
      </header>

      <main className="wrap page">
        {page === 'home' && (
          <>
            <section className="hero">
              <div>
                <p className="eyebrow">Repair · IT · mobile · electronics</p>
                <h1>Clear help for the devices you actually use</h1>
                <p className="lead">
                  PC REPAIR DEX handles computers, phones, electronics and IT support.
                  Book a diagnosis, message WhatsApp, or explore SA Invoice for your paperwork.
                </p>
                <div className="hero-actions">
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => go('book')}>Book a diagnosis</button>
                  <a className="btn btn-wa btn-lg" href={wa()} target="_blank" rel="noreferrer">WhatsApp {PHONE}</a>
                  <button type="button" className="btn btn-ghost btn-lg" onClick={() => go('services')}>Services</button>
                </div>
                <div className="pills">
                  <span className="pill">PC & laptop</span>
                  <span className="pill">Smartphones</span>
                  <span className="pill">FRP / MDM</span>
                  <span className="pill">Electronics</span>
                  <span className="pill">Remote & on-site</span>
                </div>
              </div>
              <div className="card">
                <p className="label">How it works</p>
                <div className="steps" style={{ gridTemplateColumns: '1fr', gap: '0.65rem' }}>
                  {STEPS.map((s) => (
                    <div key={s.n}>
                      <div className="n">{s.n}. {s.t}</div>
                      <p className="dim">{s.d}</p>
                    </div>
                  ))}
                </div>
                <button type="button" className="btn btn-ghost btn-sm" style={{ marginTop: '1rem' }} onClick={() => go('book')}>
                  Open booking form →
                </button>
              </div>
            </section>

            <section className="section">
              <div className="section-head">
                <h2>What we fix</h2>
                <p>Full detail lives on the Services page — here is the short map.</p>
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
              <button type="button" className="btn btn-ghost" style={{ marginTop: '1rem' }} onClick={() => go('services')}>Full services →</button>
            </section>

            <section className="section">
              <div className="section-head">
                <h2>Software for your business</h2>
                <p>Run jobs and invoices with the same stack we build for service work.</p>
              </div>
              <div className="product-banner">
                <article className="product-card">
                  <span className="badge">Product</span>
                  <h3>SA Invoice Desk</h3>
                  <p className="muted">Day-to-day quoting and invoicing desk for technicians and small IT shops.</p>
                  <a className="btn btn-primary btn-sm" style={{ marginTop: '0.85rem' }} href={SAID} target="_blank" rel="noreferrer">View on GitHub</a>
                </article>
                <article className="product-card">
                  <span className="badge">Product</span>
                  <h3>SA Invoice Pro</h3>
                  <p className="muted">Advanced workflows — tickets, field jobs, payments and documents for growing teams.</p>
                  <button type="button" className="btn btn-ghost btn-sm" style={{ marginTop: '0.85rem' }} onClick={() => go('software')}>Learn more</button>
                </article>
              </div>
            </section>

            <section className="section">
              <div className="coming" style={{ padding: '1.75rem' }}>
                <h2 style={{ fontSize: '1.35rem' }}>Shop — coming soon</h2>
                <p>Parts, accessories and reseller stock will list here. Enquire on WhatsApp if you need something now.</p>
                <button type="button" className="btn btn-ghost" onClick={() => go('shop')}>Shop status</button>
              </div>
            </section>

            <Cta go={go} />
          </>
        )}

        {page === 'services' && (
          <>
            <p className="eyebrow">Capabilities</p>
            <h1>Services</h1>
            <p className="lead">Organised by device type. Pricing models are on the Pricing page; booking is on Book.</p>
            {SERVICES.map((g) => (
              <section key={g.group} className="section">
                <h2>{g.group}</h2>
                <div className="grid-3" style={{ marginTop: '0.85rem' }}>
                  {g.items.map((i) => (
                    <article key={i.title} className="card">
                      <h3>{i.title}</h3>
                      <p>{i.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
            <Cta go={go} />
          </>
        )}

        {page === 'shop' && (
          <>
            <p className="eyebrow">Catalog</p>
            <h1>Shop</h1>
            <div className="coming">
              <h2>Coming soon</h2>
              <p>
                We are preparing a product catalog for parts, accessories and reseller lines.
                Nothing is listed for sale on this page yet.
              </p>
              <p className="dim">Need a part today? Message WhatsApp with the model number.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <a className="btn btn-wa" href={wa('Hi — I need a part / accessory quote')} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
                <button type="button" className="btn btn-ghost" onClick={() => go('contact')}>Contact</button>
              </div>
            </div>
          </>
        )}

        {page === 'pricing' && (
          <>
            <p className="eyebrow">Models</p>
            <h1>Pricing</h1>
            <p className="lead">We choose a model to match the job, then quote your figure. No duplicate service lists here — see Services for what we do.</p>
            <div className="grid-3">
              {PRICING.map((p) => (
                <article key={p.title} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'book' && (
          <>
            <p className="eyebrow">Appointments</p>
            <h1>Book</h1>
            <p className="lead">One form. One WhatsApp message with everything filled in. This is the only page with the full booking form.</p>
            <div className="grid-2">
              <BookingForm />
              <div className="contact-list">
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
                  <strong>Tip</strong>
                  <span className="muted">Include device model and whether it is hardware, software or account lock.</span>
                </div>
              </div>
            </div>
          </>
        )}

        {page === 'software' && (
          <>
            <p className="eyebrow">Products</p>
            <h1>SA Invoice Desk &amp; Pro</h1>
            <p className="lead">
              Built for South African service businesses — quotes, invoices, tickets and field workflows.
              Pair your repair brand with software that matches how you already work.
            </p>
            <div className="product-banner">
              <article className="product-card">
                <span className="badge">SA Invoice Desk</span>
                <h3>Desk edition</h3>
                <p className="muted">
                  Streamlined desk for creating quotes and invoices, tracking clients and keeping COD-friendly paperwork tidy.
                  Ideal for solo techs and small counters.
                </p>
                <ul className="muted" style={{ marginTop: '0.75rem', paddingLeft: '1.1rem' }}>
                  <li>Quotes & invoices</li>
                  <li>Client records</li>
                  <li>Clear document flow</li>
                </ul>
                <a className="btn btn-primary" style={{ marginTop: '1rem' }} href={SAID} target="_blank" rel="noreferrer">Open SAID / Desk stack</a>
              </article>
              <article className="product-card">
                <span className="badge">SA Invoice Pro</span>
                <h3>Pro edition</h3>
                <p className="muted">
                  Full operations layer: tickets, remote/on-site jobs, payments hooks and document actions —
                  for teams that outgrow a simple invoice pad.
                </p>
                <ul className="muted" style={{ marginTop: '0.75rem', paddingLeft: '1.1rem' }}>
                  <li>Tickets & field tools</li>
                  <li>Money & status workflows</li>
                  <li>Advanced documents</li>
                </ul>
                <a className="btn btn-ghost" style={{ marginTop: '1rem' }} href={SAID} target="_blank" rel="noreferrer">Explore Pro on GitHub</a>
              </article>
            </div>
            <p className="dim" style={{ marginTop: '1rem' }}>
              Want a demo chat? WhatsApp {PHONE} and mention <strong>SA Invoice</strong>.
            </p>
            <Cta go={go} />
          </>
        )}

        {page === 'about' && (
          <>
            <p className="eyebrow">Brand</p>
            <h1>About PC REPAIR DEX</h1>
            <p className="lead">
              A practical device and IT service brand — computers, phones, electronics — with software products under
              SA Invoice Desk and SA Invoice Pro for shops that need paperwork as sharp as their repairs.
            </p>
            <div className="grid-2">
              <article className="card">
                <h3>Service principles</h3>
                <ul>
                  <li>Explain before you spend</li>
                  <li>Approve parts before install</li>
                  <li>Honest limits on FRP / MDM work</li>
                  <li>WhatsApp as the default channel</li>
                </ul>
              </article>
              <article className="card">
                <h3>Contact</h3>
                <p className="muted">
                  WhatsApp {PHONE}<br />
                  Email {EMAIL}
                </p>
              </article>
            </div>
            <Cta go={go} />
          </>
        )}

        {page === 'faq' && (
          <>
            <p className="eyebrow">Help</p>
            <h1>FAQ</h1>
            <p className="lead">Short answers. Service lists stay on Services; booking stays on Book.</p>
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
            <p className="eyebrow">Reach us</p>
            <h1>Contact</h1>
            <p className="lead">For bookings use the Book page. Here are direct channels only — no repeated forms.</p>
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
                <strong>Book a job</strong>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => go('book')}>Open booking form</button>
              </div>
              <div className="contact-item">
                <strong>SA Invoice products</strong>
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => go('software')}>Desk & Pro</button>
              </div>
            </div>
          </>
        )}

        {page === 'roadmap' && (
          <>
            <p className="eyebrow">10 quarters</p>
            <h1>Mythos roadmap</h1>
            <p className="lead">Website-only programme. Shop, SA Invoice promotion, readability and conversion — not invoicing engine work on this repo.</p>
            <div className="roadmap-list">
              {QUARTERS.map(([k, v]) => (
                <div key={k} className="roadmap-item">
                  <strong>{k}</strong>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <strong style={{ display: 'block', marginBottom: '0.4rem' }}>PC REPAIR DEX</strong>
            <p>Devices, IT support, and SA Invoice software. Shop coming soon.</p>
            <p style={{ marginTop: '0.5rem' }}>{PHONE}<br />{EMAIL}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <button type="button" onClick={() => go('services')}>Services</button>
            <button type="button" onClick={() => go('shop')}>Shop</button>
            <button type="button" onClick={() => go('pricing')}>Pricing</button>
            <button type="button" onClick={() => go('book')}>Book</button>
          </div>
          <div>
            <h4>Products</h4>
            <button type="button" onClick={() => go('software')}>SA Invoice Desk</button>
            <button type="button" onClick={() => go('software')}>SA Invoice Pro</button>
            <a href={SAID} target="_blank" rel="noreferrer">SAID on GitHub</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={wa()} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={TEL}>Call</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
            <button type="button" onClick={() => go('faq')}>FAQ</button>
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
