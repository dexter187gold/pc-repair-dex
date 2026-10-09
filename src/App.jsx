import { useMemo, useState } from 'react'

const WA = '27684840123' // 068 484 0123
const SAID_URL = 'https://github.com/dexter187gold/said'
const EMAIL = 'pcrepairdex@gmail.com'
const PHONE_DISPLAY = '068 484 0123'

const services = [
  {
    icon: '⌁',
    title: 'Remote support',
    body: 'Screen-share diagnosis, software fixes, and configuration without leaving your desk.',
    points: ['Same-day slots', 'Secure remote tools', 'Hourly or fixed quote'],
  },
  {
    icon: '⌂',
    title: 'On-site support',
    body: 'Technician at your premises for hardware, networks, and hands-on recovery.',
    points: ['Call-out available', 'Business & home', 'Job card status updates'],
  },
  {
    icon: '▣',
    title: 'PC & laptop repair',
    body: 'Diagnostics, upgrades, virus cleanup, Windows rebuilds, and data care.',
    points: ['COD transparent pricing', 'Parts quoted first', 'Warranty options'],
  },
  {
    icon: '⬡',
    title: 'Business IT',
    body: 'Small-team support: backups, Microsoft 365, printers, and workstation setup.',
    points: ['Flat packages', 'Retainers', 'Invoicing via SAID'],
  },
  {
    icon: '◎',
    title: 'Data & recovery assist',
    body: 'Backup setup, drive health checks, and recovery assessment before you lose files.',
    points: ['No surprise bills', 'Honest prognosis', 'Secure handling'],
  },
  {
    icon: '✦',
    title: 'Quotes that make sense',
    body: 'Hourly, flat-rate, or ad-hoc rate card — the same models clients trust on our job cards.',
    points: ['PDF quotes', 'WhatsApp updates', 'Pay on completion options'],
  },
]

const models = [
  {
    title: 'Hourly',
    model: 'TIME & MATERIALS',
    blurb: 'Best when scope is unclear. You only pay for real time — we pause and agree extras first.',
    rate: 'From your rate card',
    featured: false,
  },
  {
    title: 'Flat rate',
    model: 'PACKAGE / SLA-STYLE',
    blurb: 'One clear price for a defined job. Peace of mind when you want no surprises.',
    rate: 'Quoted upfront',
    featured: true,
  },
  {
    title: 'Ad-hoc',
    model: 'RATE CARD',
    blurb: 'Mix of call-outs, diagnostics, and line items. Ideal for once-off COD clients.',
    rate: 'Itemised COD',
    featured: false,
  },
]

export default function App() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Remote support',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const waHref = useMemo(() => {
    const text = [
      '*PC REPAIR DEX* — website enquiry',
      `Name: ${form.name || '—'}`,
      `Phone: ${form.phone || '—'}`,
      `Service: ${form.service}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')
    return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`
  }, [form])

  const onSubmit = (e) => {
    e.preventDefault()
    window.open(waHref, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">
            <img src="/dex.svg" alt="" />
            PC REPAIR <span>DEX</span>
          </a>
          <nav className="nav-links">
            <a className="hide-sm" href="#services">
              Services
            </a>
            <a className="hide-sm" href="#pricing">
              Pricing
            </a>
            <a className="hide-sm" href="#process">
              Process
            </a>
            <a className="hide-sm" href="#said">
              SAID
            </a>
            <a href="#contact" className="btn btn-primary">
              Get help
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="dot" /> IT · 2026 stack · South Africa
              </div>
              <h1>
                PC repair & IT support that feels <em>clear</em>, not chaotic.
              </h1>
              <p className="lead">
                Remote or on-site. Transparent COD quotes. Status updates that build trust — powered by the same
                workflows we run in <strong>SAID</strong>.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#contact">
                  Request support
                </a>
                <a className="btn btn-wa" href={waHref} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
                <a className="btn btn-ghost" href="#pricing">
                  See pricing models
                </a>
              </div>
              <div className="stats">
                <div className="stat">
                  <b>Remote</b>
                  <span>Screen-share fixes</span>
                </div>
                <div className="stat">
                  <b>On-site</b>
                  <span>Technician visits</span>
                </div>
                <div className="stat">
                  <b>COD</b>
                  <span>Pay on completion options</span>
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <span>dex://status</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="dot" /> live
                </span>
              </div>
              <div className="terminal">
                <div className="info">$ dex diagnose --client first-time</div>
                <div className="ok">✓ Pricing model: hourly | flat | ad-hoc</div>
                <div className="ok">✓ Job card + WhatsApp status ready</div>
                <div className="warn">→ Quote before parts · no silent extras</div>
                <div className="info">$ dex dispatch --mode remote|onsite</div>
                <div className="ok">✓ SAID ticket linked · timer · invoice</div>
                <div>Devices released after payment confirmation (COD).</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <h2>Services built for real IT days</h2>
            <p className="section-lead">
              Home users and small teams. We fix machines, unblock work, and keep communication simple — the way
              modern SA repair shops win trust.
            </p>
            <div className="grid-3">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <div className="icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="container">
            <h2>Three pricing models — same honesty</h2>
            <p className="section-lead">
              Matches the PC REPAIR DEX quote layouts: hourly for discovery work, flat rate for defined packages,
              ad-hoc for rate-card jobs.
            </p>
            <div className="pricing-grid">
              {models.map((m) => (
                <article key={m.title} className={`price-card${m.featured ? ' featured' : ''}`}>
                  {m.featured && <span className="tag">POPULAR</span>}
                  <h3>{m.title}</h3>
                  <div className="model">{m.model}</div>
                  <p>{m.blurb}</p>
                  <div className="rate">
                    {m.rate} <small>ZAR</small>
                  </div>
                  <a className="btn btn-ghost" href="#contact">
                    Ask for this model
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <div className="container">
            <h2>How a job runs</h2>
            <p className="section-lead">Simple path from first message to signed job card — without mystery fees.</p>
            <div className="steps">
              <div className="step">
                <div className="n">01</div>
                <h3>Tell us the fault</h3>
                <p>WhatsApp or form. Device, symptoms, remote vs on-site preference.</p>
              </div>
              <div className="step">
                <div className="n">02</div>
                <h3>Quote model</h3>
                <p>Hourly, flat, or ad-hoc COD. You approve before parts or deep work.</p>
              </div>
              <div className="step">
                <div className="n">03</div>
                <h3>Repair & updates</h3>
                <p>Job card status on WhatsApp. Timer and notes live in SAID.</p>
              </div>
              <div className="step">
                <div className="n">04</div>
                <h3>Handover</h3>
                <p>Pay on agreed terms. Invoice, receipt, and device release.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="said">
          <div className="container">
            <div className="said-banner">
              <div>
                <h3>Run on SAID</h3>
                <p>
                  PC REPAIR DEX operations — tickets, remote/on-site services, COD invoices, field job packs, and
                  WhatsApp statements — are built on the open SAID stack.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                <a className="btn btn-primary" href={SAID_URL} target="_blank" rel="noreferrer">
                  View SAID on GitHub
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Book a demo chat
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Get help today</h2>
            <p className="section-lead">WhatsApp 068 484 0123 · pcrepairdex@gmail.com</p>
            <div className="contact-grid">
              <form className="contact form panel" onSubmit={onSubmit}>
                <label>
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Phone / WhatsApp
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="08x xxx xxxx"
                  />
                </label>
                <label>
                  Service
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option>Remote support</option>
                    <option>On-site support</option>
                    <option>PC / laptop repair</option>
                    <option>Business IT</option>
                    <option>Quote only</option>
                  </select>
                </label>
                <label>
                  What is wrong?
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Device, symptoms, urgent?"
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Open WhatsApp enquiry
                </button>
                {sent && (
                  <p style={{ color: 'var(--green)', fontSize: '0.85rem' }}>
                    WhatsApp should open with your message pre-filled.
                  </p>
                )}
              </form>
              <div className="contact-side">
                <div className="contact-item">
                  <b>WhatsApp</b>
                  <a href={waHref} target="_blank" rel="noreferrer">
                    068 484 0123
                  </a>
                </div>
                <div className="contact-item">
                  <b>Email</b>
                  <a href={`mailto:${EMAIL}`}>pcrepairdex@gmail.com</a>
                </div>
                <div className="contact-item">
                  <b>Service modes</b>
                  <span>Remote · On-site · Workshop / collection by arrangement</span>
                </div>
                <div className="contact-item">
                  <b>Payment</b>
                  <span>EFT · Cash · COD-friendly terms on approved quotes</span>
                </div>
                <div className="contact-item">
                  <b>Operations platform</b>
                  <a href={SAID_URL} target="_blank" rel="noreferrer">
                    github.com/dexter187gold/said
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong style={{ color: 'var(--text)' }}>PC REPAIR DEX</strong>
            <div>Intelligent PC repair & IT support · Linked to SAID</div>
          </div>
          <div className="mono">© {new Date().getFullYear()} · Deploy on Cloudflare Pages</div>
        </div>
      </footer>
    </>
  )
}
