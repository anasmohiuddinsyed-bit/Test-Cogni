export default function Landing() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0b1220]/70 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-xl flex items-center gap-2">
            <img src="/cognivators-logo.png" alt="Cognivators logo" className="h-6 w-6 rounded-sm" />
            Cognivators
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#posentia" className="hover:opacity-80">POSENTIA</a>
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#cases" className="hover:opacity-80">Case studies</a>
            <a href="#security" className="hover:opacity-80">Security</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://posentia.cognivators.com" className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 transition">Talk to POSENTIA</a>
            <a href="#book" className="rounded-xl px-4 py-2 bg-sky-500 text-neutral-950 font-semibold hover:bg-sky-400 transition">Book a demo</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-28">
          <div className="max-w-3xl">
            <div className="text-xs md:text-sm text-neutral-300 mb-3">Cognivators — <span className="text-white">The Intelligence Infrastructure Company</span></div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              The <span className="text-sky-400">intelligence infrastructure</span> for real-time business decisions.
            </h1>
            <p className="mt-5 text-neutral-300 text-lg">
              Cognivators builds human-grade AI systems that plug into your stack and speak your data. Our flagship product, <span className="font-semibold">POSENTIA</span>, is an interactive AI auditor that finds cost leaks and compliance risks in minutes—then explains them like a teammate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://posentia.cognivators.com" className="rounded-xl px-5 py-3 bg-sky-500 text-neutral-950 font-semibold hover:bg-sky-400 transition">Talk to POSENTIA</a>
              <a href="#how" className="rounded-xl px-5 py-3 bg-white/10 hover:bg-white/20">See how it works</a>
            </div>
            <div className="mt-6 text-sm text-neutral-400">No installs • Works with POS, accounting & logs • SOC-readiness playbook</div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center text-neutral-400 text-xs">
          <span>Works with: Stripe</span>
          <span>Square</span>
          <span>QuickBooks</span>
          <span>Shopify POS</span>
          <span>Azure / AWS / GCP</span>
        </div>
      </section>

      {/* POSENTIA feature */}
      <section id="posentia" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">POSENTIA — your interactive AI auditor</h2>
            <p className="mt-4 text-neutral-300">
              Upload a CSV or connect live systems. POSENTIA parses transactions, fees, and anomalies in real time, then talks you through the why—and the fix. It’s like pairing with a staff analyst who never sleeps.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-200">
              <li className="flex gap-3"><Dot/> <span>Finds hidden fees, duplicate charges, and settlement drift automatically</span></li>
              <li className="flex gap-3"><Dot/> <span>Conversational explanations with drill-down and citations</span></li>
              <li className="flex gap-3"><Dot/> <span>One-click remediation: exports, alerts, and resolver emails</span></li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="https://posentia.cognivators.com" className="rounded-xl px-5 py-3 bg-sky-500 text-neutral-950 font-semibold hover:bg-sky-400 transition">Talk to POSENTIA</a>
              <a href="#book" className="rounded-xl px-5 py-3 bg-white/10 hover:bg-white/20">Get a guided audit</a>
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-neutral-900 p-4 shadow-2xl">
            <div className="rounded-xl bg-black aspect-video w-full overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-sky-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z"/></svg>
                </div>
                <p className="text-neutral-200 font-medium">Live avatar preview</p>
                <p className="text-neutral-400 text-sm mt-1">Drop your CSV and ask, “Where are we leaking margin?”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h3 className="text-2xl md:text-3xl font-semibold">How it works</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card step="1" title="Connect or upload" body="Securely connect POS/accounting or upload CSVs. No installs, no engineers required." />
            <Card step="2" title="Audit in seconds" body="Our models score fees, anomalies, and compliance risk with sources for every claim." />
            <Card step="3" title="Fix with one click" body="Generate dispute letters, export GL-ready entries, or trigger alerts to your provider." />
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="cases" className="border-t border-white/10 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h3 className="text-2xl md:text-3xl font-semibold">Early results</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Case title="Cafe chain (6 sites)" metric="$4,800/mo recovered" blurb="Found duplicate settlement fees across three terminals; auto-generated disputes saved ops 12 hrs." />
            <Case title="Boutique retail" metric="$2,100/mo saved" blurb="Flagged tier misclassification; provider corrected within 48h." />
            <Case title="Quick-serve" metric="3.2% margin uplift" blurb="Detected split tenders producing off-by-one rounding over thousands of receipts." />
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Security & compliance first</h3>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li className="flex gap-3"><Shield/> <span>SOC-readiness controls (access logging, least privilege, data retention)</span></li>
              <li className="flex gap-3"><Shield/> <span>Tokenized ingestion; optional on-device redaction for PII</span></li>
              <li className="flex gap-3"><Shield/> <span>Data residency controls on Azure / AWS / GCP</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-neutral-900">
            <p className="text-neutral-200 font-medium">Compliance note</p>
            <p className="mt-2 text-neutral-400 text-sm">We provide SOC readiness artifacts and vendor DSAs on request. Production systems run in isolated VPCs; no customer data used for training.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">Ready to see hidden dollars in your data?</h3>
          <p className="mt-3 text-neutral-300">Get a free AI audit and a 15-minute walkthrough. No commitment.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="https://posentia.cognivators.com" className="rounded-xl px-6 py-3 bg-sky-500 text-neutral-950 font-semibold hover:bg-sky-400 transition">Talk to POSENTIA</a>
            <a href="https://cal.com/" className="rounded-xl px-6 py-3 bg-white/10 hover:bg-white/20">Book a demo</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Cognivators — The Intelligence Infrastructure Company</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Security</a>
            <a href="#" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Dot(){
  return (
    <svg className="mt-1 h-5 w-5 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>
  );
}
function Shield(){
  return (
    <svg className="mt-1 h-5 w-5 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 4v6c0 5-3.8 9.4-7 10-3.2-.6-7-5-7-10V6l7-4z"/></svg>
  );
}

function Card({step,title,body}:{step:string,title:string,body:string}){
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-neutral-900/40">
      <div className="text-xs text-neutral-400">Step {step}</div>
      <h4 className="mt-1 text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-neutral-300 text-sm">{body}</p>
    </div>
  )
}

function Case({title,metric,blurb}:{title:string,metric:string,blurb:string}){
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-neutral-900/40">
      <div className="text-sm text-neutral-400">{title}</div>
      <div className="mt-1 text-2xl font-semibold text-sky-400">{metric}</div>
      <p className="mt-2 text-neutral-300 text-sm">{blurb}</p>
    </div>
  )
}
