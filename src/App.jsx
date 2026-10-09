import { useMemo, useState, useEffect } from 'react'

const WA = '27684840123'
const EMAIL = 'pcrepairdex@gmail.com'
const PHONE = '068 484 0123'

const PAGES = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'book', label: 'Book' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'contact', label: 'Contact' },
]

const SERVICES = [
  { icon: '⌁', q: 'Hermes', title: 'Remote support', body: 'Screen-share diagnosis, software fixes, and configuration without a site visit.', points: ['Same-day slots', 'Secure remote tools', 'Clear time scope'] },
  { icon: '⌂', q: 'Hephaestus', title: 'On-site support', body: 'Technician at your premises for hardware, networks, and hands-on recovery.', points: ['Call-out options', 'Home & small business', 'Status updates'] },
  { icon: '▣', q: 'Athena', title: 'PC & laptop repair', body: 'Diagnostics, upgrades, malware cleanup, Windows rebuilds, and data care.', points: ['Parts quoted first', 'Honest prognosis', 'Handover checklist'] },
  { icon: '⬡', q: 'Hestia', title: 'Business IT', body: 'Small-team support: backups, Microsoft 365, printers, workstation setup.', points: ['Flat packages', 'Retainer-friendly', 'Documented work'] },
  { icon: '◎', q: 'Apollo', title: 'Data & recovery assist', body: 'Backup setup, drive health checks, and recovery assessment before files are lost.', points: ['No silent extras', 'Written findings', 'Secure handling'] },
  { icon: '✦', q: 'Artemis', title: 'Scheduled visits', body: 'Book remote or on-site windows that fit your day — reminders before we arrive.', points: ['Calendar slots', 'Reschedule-friendly', 'WhatsApp confirm'] },
]

const PRICING = [
  { title: 'Hourly', model: 'TIME & MATERIALS', body: 'When scope is unclear. You pay for real time; we pause and agree extras first.', tag: null },
  { title: 'Flat rate', model: 'PACKAGE', body: 'One clear price for a defined job. Best when you want no surprises.', tag: 'POPULAR' },
  { title: 'Ad-hoc', model: 'RATE CARD', body: 'Call-outs, diagnostics, and line items for once-off work.', tag: null },
]

const FAQS = [
  { q: 'Do you support remote and on-site?', a: 'Yes. Remote for software and configuration; on-site for hardware, networks, and hands-on work.' },
  { q: 'How do quotes work?', a: 'We use hourly, flat-rate, or ad-hoc models. You approve the approach before parts or deep work.' },
  { q: 'Is COD available?', a: 'Many jobs can be structured COD-style — payment on completion/handover, with clear terms on the quote.' },
  { q: 'What areas do you cover?', a: 'Remote nationwide where connectivity allows; on-site by arrangement in our service area.' },
  { q: 'How do I book?', a: 'Use the Book page or WhatsApp 068 484 0123 with device, symptoms, and preferred mode.' },
  { q: 'How do I pay?', a: 'EFT and cash are common. Terms are stated on your quote or invoice.' },
]

const ROADMAP = [
  { id: 'Q1', god: 'Athena', title: 'Craft & clarity', focus: 'Home, Services, About — sharper copy, trust blocks, service depth', pages: ['home', 'services', 'about'] },
  { id: 'Q2', god: 'Hermes', title: 'Communication', focus: 'Contact, WhatsApp flows, response expectations, enquiry templates', pages: ['contact', 'book'] },
  { id: 'Q3', god: 'Hephaestus', title: 'Technical depth', focus: 'Repair detail pages, on-site vs remote guides, process visuals', pages: ['services', 'process'] },
  { id: 'Q4', god: 'Hestia', title: 'Trust & care', focus: 'FAQ, warranty language, privacy-minded policies, handover comfort', pages: ['faq', 'about'] },
  { id: 'Q5', god: 'Apollo', title: 'Insight & proof', focus: 'Why-us metrics, transparent pricing education, case-style outcomes', pages: ['home', 'pricing'] },
  { id: 'Q6', god: 'Artemis', title: 'Booking & rhythm', focus: 'Book page, schedule modes, reminder copy, reschedule path', pages: ['book', 'process'] },
]

function waUrl(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text || 'Hi PC REPAIR DEX — I need IT help.')}`
}

export default function App() {
  const [page, setPage] = useState(() => {
    const h = (typeof location !== 'undefined' && location.hash.replace('#', '')) || 'home'
    return PAGES.some((p) => p.id === h) ? h : 'home'
  })
  const [form, setForm] = useState({ name: '', phone: '', service: 'Remote support', mode: 'remote', message: '', when: '' })

  useEffect(() => {
    const onHash = () => {
      const h = location.hash.replace('#', '') || 'home'
      if (PAGES.some((p) => p.id === h)) setPage(h)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = (id) => {
    setPage(id)
    location.hash = id
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const enquiryText = useMemo(() => {
    return [
      '*PC REPAIR DEX* — website enquiry',
      `Name: ${form.name || '—'}`,
      `Phone: ${form.phone || '—'}`,
      `Service: ${form.service}`,
      `Mode: ${form.mode}`,
      form.when ? `Preferred time: ${form.when}` : null,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')
  }, [form])

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand" onClick={() => go('home')} role="link" tabIndex={0}>
            <img src="/dex.svg" alt="" />
            PC REPAIR <span>DEX</span>
          </div>
          <nav className="nav-links">
            {PAGES.map((p) => (
              <button key={p.id} type="button" className={page === p.id ? 'active' : p.id === 'roadmap' ? 'hide-sm' : ''} onClick={() => go(p.id)}>
                {p.label}
              </button>
            ))}
            <a className="btn btn-primary" href={waUrl()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main className="container page">
        {page === 'home' && (
          <section>
            <div className="eyebrow">
              <span className="dot" /> Website · Mythos roadmap · not invoicing
            </div>
            <div className="hero-grid">
              <div>
                <h1>
                  PC repair & IT support that feels <em>clear</em>, not chaotic.
                </h1>
                <p className="lead">
                  Remote or on-site. Honest quotes. Status you can understand. This site is the public face of{' '}
                  <strong>PC REPAIR DEX</strong> — built page by page under a six-quarter Mythos plan.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1rem' }}>
                  <button type="button" className="btn btn-primary" onClick={() => go('book')}>
                    Book support
                  </button>
                  <a className="btn btn-wa" href={waUrl()} target="_blank" rel="noreferrer">
                    {PHONE}
                  </a>
                  <button type="button" className="btn btn-ghost" onClick={() => go('services')}>
                    View services
                  </button>
                </div>
                <div className="stats">
                  <div className="stat">
                    <b>Remote</b>
                    <span>Screen-share help</span>
                  </div>
                  <div className="stat">
                    <b>On-site</b>
                    <span>Technician visits</span>
                  </div>
                  <div className="stat">
                    <b>6 quarters</b>
                    <span>Website Mythos plan</span>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                  <span>dex://site</span>
                  <span>
                    <span className="dot" /> pages live
                  </span>
                </div>
                <div className="terminal">
                  <div className="info">$ mythos plan --target website</div>
                  <div className="ok">✓ Q1 Athena → craft pages</div>
                  <div className="ok">✓ Q2 Hermes → contact & WhatsApp</div>
                  <div className="ok">✓ Q3 Hephaestus → technical depth</div>
                  <div className="ok">✓ Q4 Hestia → trust & FAQ</div>
                  <div className="ok">✓ Q5 Apollo → proof & pricing education</div>
                  <div className="ok">✓ Q6 Artemis → booking rhythm</div>
                  <div className="warn">→ Invoicing stays in SAID — not this site</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <h2 style={{ marginBottom: '0.75rem' }}>Popular services</h2>
              <div className="grid-3">
                {SERVICES.slice(0, 3).map((s) => (
                  <article key={s.title} className="card">
                    <div className="mythos-tag">{s.q}</div>
                    <div className="icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </article>
                ))}
              </div>
              <button type="button" className="btn btn-ghost" style={{ marginTop: '1rem' }} onClick={() => go('services')}>
                All services →
              </button>
            </div>
          </section>
        )}

        {page === 'services' && (
          <section>
            <div className="mythos-tag">Hephaestus · Athena</div>
            <h1>Services</h1>
            <p className="lead">Every offering is written for humans first — what we do, when remote vs on-site, what you can expect.</p>
            <div className="grid-3">
              {SERVICES.map((s) => (
                <article key={s.title} className="card">
                  <div className="mythos-tag">{s.q}</div>
                  <div className="icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul>
                    {s.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'pricing' && (
          <section>
            <div className="mythos-tag">Apollo · transparency</div>
            <h1>Pricing models</h1>
            <p className="lead">We educate first — pick a model that matches the job. Exact amounts are quoted for your device and scope.</p>
            <div className="grid-3">
              {PRICING.map((m) => (
                <article key={m.title} className={`card price-card${m.tag ? ' featured' : ''}`}>
                  {m.tag && <span className="tag">{m.tag}</span>}
                  <h3>{m.title}</h3>
                  <div className="model">{m.model}</div>
                  <p>{m.body}</p>
                  <button type="button" className="btn btn-ghost" onClick={() => go('book')}>
                    Ask for this model
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'process' && (
          <section>
            <div className="mythos-tag">Hephaestus · Artemis</div>
            <h1>How a job runs</h1>
            <p className="lead">A simple path from first message to handover — without mystery fees.</p>
            <div className="grid-2">
              {[
                ['01', 'Tell us the fault', 'WhatsApp or Book form. Device, symptoms, remote or on-site preference.'],
                ['02', 'Agree the model', 'Hourly, flat, or ad-hoc. Approve before parts or deep work.'],
                ['03', 'Work & updates', 'Clear status while we diagnose and fix.'],
                ['04', 'Handover', 'Pay on agreed terms. You leave knowing what changed.'],
              ].map(([n, t, b]) => (
                <article key={n} className="card">
                  <div className="mono" style={{ color: 'var(--amber)', fontSize: '0.8rem' }}>
                    {n}
                  </div>
                  <h3>{t}</h3>
                  <p>{b}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'about' && (
          <section>
            <div className="mythos-tag">Athena · Hestia</div>
            <h1>About PC REPAIR DEX</h1>
            <p className="lead">
              We are an IT support and PC repair practice focused on clarity: remote when it saves you time, on-site when
              hands-on is required, and quotes that match the work.
            </p>
            <div className="grid-2">
              <article className="card">
                <h3>What we stand for</h3>
                <ul>
                  <li>Explain before you spend</li>
                  <li>Remote / on-site chosen deliberately</li>
                  <li>No silent extras on parts</li>
                  <li>Handover you can trust</li>
                </ul>
              </article>
              <article className="card">
                <h3>Contact</h3>
                <p>
                  WhatsApp <strong>{PHONE}</strong>
                  <br />
                  Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
                <p style={{ marginTop: '0.75rem' }}>This website is updated under a six-quarter Mythos roadmap (website only).</p>
              </article>
            </div>
          </section>
        )}

        {page === 'faq' && (
          <section>
            <div className="mythos-tag">Hestia · trust</div>
            <h1>FAQ</h1>
            <p className="lead">Straight answers so you can decide faster.</p>
            <div className="faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {page === 'book' && (
          <section>
            <div className="mythos-tag">Artemis · schedule</div>
            <h1>Book support</h1>
            <p className="lead">Tell us what you need. We continue on WhatsApp with {PHONE}.</p>
            <div className="contact-grid">
              <form
                className="form panel"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.open(waUrl(enquiryText), '_blank', 'noopener')
                }}
              >
                <label>
                  Name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label>
                  Phone
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="08x…" />
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
                  Mode
                  <select value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })}>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="either">Either</option>
                  </select>
                </label>
                <label>
                  Preferred time (optional)
                  <input value={form.when} onChange={(e) => setForm({ ...form, when: e.target.value })} placeholder="e.g. tomorrow afternoon" />
                </label>
                <label>
                  What is wrong?
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </label>
                <button type="submit" className="btn btn-primary">
                  Continue on WhatsApp
                </button>
              </form>
              <div>
                <div className="contact-item">
                  <b>WhatsApp</b>
                  <a href={waUrl()} target="_blank" rel="noreferrer">
                    {PHONE}
                  </a>
                </div>
                <div className="contact-item">
                  <b>Email</b>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <div className="contact-item">
                  <b>Tip</b>
                  <span>Include device model and whether the issue is software or hardware.</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === 'roadmap' && (
          <section>
            <div className="mythos-tag">Website only · 6 quarters</div>
            <h1>Mythos website roadmap</h1>
            <p className="lead">
              Six quarters aimed at <strong>this website’s pages</strong> — not invoicing. Each quarter targets roughly a
              large batch of page, content, UX, SEO, and trust improvements (planned at scale; shipped iteratively).
            </p>
            {ROADMAP.map((q) => (
              <div key={q.id} className="roadmap-q">
                <h3>
                  {q.id} · {q.god} — {q.title}
                </h3>
                <p>
                  {q.focus}
                  <br />
                  Pages: {q.pages.join(', ')} · Target intensity: ~500 improvement items in the full plan
                </p>
                <button type="button" className="btn btn-ghost" style={{ marginTop: '0.5rem' }} onClick={() => go(q.pages[0])}>
                  Open {q.pages[0]}
                </button>
              </div>
            ))}
            <article className="card" style={{ marginTop: '1rem' }}>
              <h3>Out of scope on this site</h3>
              <p>Invoicing, billing engines, and back-office ops stay in SAID. This repo is public web pages only.</p>
            </article>
          </section>
        )}

        {page === 'contact' && (
          <section>
            <div className="mythos-tag">Hermes · reach us</div>
            <h1>Contact</h1>
            <p className="lead">Fastest reply is WhatsApp. Email works for longer write-ups.</p>
            <div className="grid-2">
              <div className="contact-item">
                <b>WhatsApp</b>
                <a href={waUrl()} target="_blank" rel="noreferrer">
                  {PHONE}
                </a>
              </div>
              <div className="contact-item">
                <b>Email</b>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact-item">
                <b>Book a slot</b>
                <button type="button" className="btn btn-ghost" onClick={() => go('book')}>
                  Open book form
                </button>
              </div>
              <div className="contact-item">
                <b>Services</b>
                <button type="button" className="btn btn-ghost" onClick={() => go('services')}>
                  Browse services
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong style={{ color: 'var(--text)' }}>PC REPAIR DEX</strong>
            <div>
              {PHONE} · {EMAIL}
            </div>
          </div>
          <div className="footer-links">
            {PAGES.map((p) => (
              <button key={p.id} type="button" onClick={() => go(p.id)}>
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
