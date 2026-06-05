import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Shield, Zap, Scale, Check, Bitcoin, Wallet, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTARow, SectionHeader } from "@/components/atlas/Bits";
import { HeroDashboard } from "@/components/atlas/HeroDashboard";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import logoAnimation from "@/assets/momo-logo-animation.mp4";

export default function Home() {
  return (
    <>
      {/* HERO — cream white background to match the logo video's background so
          the video blends seamlessly with the section */}
      <section className="relative overflow-hidden bg-[#FFFDF8]">
        {/* Very subtle slow-moving light — calm ambient motion */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-light absolute -top-1/4 left-[15%] h-[55vh] w-[55vh] rounded-full bg-accent/[0.06] blur-[130px]" />
          <div className="hero-light-alt absolute -bottom-1/4 right-[10%] h-[50vh] w-[50vh] rounded-full bg-accent/[0.04] blur-[130px]" />
        </div>
        <div className="container-atlas relative pt-24 md:pt-32 pb-24 md:pb-32">
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-4 items-center">
            {/* LEFT — copy (layered above the video so it stays readable) */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground backdrop-blur" style={{ animationDelay: "0.05s" }}>
                <Sparkles className="h-3 w-3 text-accent" />
                Business insurance, finally simple
              </div>
              <h1 className="mt-7 font-display text-6xl md:text-7xl lg:text-[104px] leading-[0.95] font-medium tracking-tight text-balance text-ink lg:whitespace-nowrap">
                <span className="hero-reveal block" style={{ animationDelay: "0.18s" }}>Cover that</span>
                <span className="hero-reveal block text-accent italic" style={{ animationDelay: "0.32s" }}>actually fits.</span>
              </h1>
              <p className="hero-reveal mt-7 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: "0.46s" }}>
                Momo finds the right business insurance for your company in minutes. Clearer cover, fairer prices, no jargon.
              </p>
              <div className="hero-reveal mt-9 flex justify-center lg:justify-start" style={{ animationDelay: "0.6s" }}>
                <CTARow primaryLabel="Get my analysis" />
              </div>
              <div className="hero-reveal mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2 text-xs text-muted-foreground font-mono" style={{ animationDelay: "0.72s" }}>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Free, no obligation</span>
                <span className="flex items-center gap-1.5"><Check className="h-3 w-3" /> FCA-aware</span>
                <span className="flex items-center gap-1.5"><Check className="h-3 w-3" /> Human-reviewed</span>
                <span className="flex items-center gap-1.5"><Bitcoin className="h-3 w-3" /> Pay in crypto or card</span>
              </div>
            </div>

            {/* RIGHT — enlarged animated brand logo (on top on mobile). Same
                background as the hero, so it reads as one with the page */}
            <div className="hero-reveal order-first lg:order-none relative z-0 -mx-6 sm:mx-0 w-full lg:max-w-7xl lg:-my-32 lg:ml-12 lg:-mr-48 xl:-mr-80" style={{ animationDelay: "0.1s", animationDuration: "1.4s" }}>
              <video
                className="aspect-video w-full object-contain bg-[#FFFDF8] origin-center lg:scale-[1.8]"
                style={{
                  // Strong feather on ALL four edges (left/right AND top/bottom).
                  // Two linear gradients are intersected so a pixel only shows
                  // where both are opaque; the wide central band stays fully
                  // opaque to keep the logo untouched, edges fade to transparent.
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, #000 24%, #000 76%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, #000 24%, #000 76%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                  maskComposite: "intersect",
                }}
                src={logoAnimation}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Momo AI logo animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section">
        <div className="container-atlas">
          <Reveal>
            <SectionHeader
              eyebrow="Why Momo"
              title={<>Insurance that <span className="text-accent italic">works for you.</span></>}
              description="Built for modern businesses who want clarity, speed and cover that genuinely matches their risk."
            />
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            <Reveal delay={0}>
              <ValueCard
                icon={Zap}
                title="Minutes, not weeks"
                body="Tell us about your business once. Get a clear picture of what cover you need and what it should cost - fast."
              />
            </Reveal>
            <Reveal delay={120}>
              <ValueCard
                icon={Shield}
                title="Cover that fits"
                body="No generic packages. We match your actual exposures to the right policies, and flag the gaps most brokers miss."
              />
            </Reveal>
            <Reveal delay={240}>
              <ValueCard
                icon={Scale}
                title="Fair, transparent pricing"
                body="See what you're paying for and why. We negotiate with insurers so you don't pay for cover you don't need."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {[
              { value: 60, suffix: "s", label: "Average time to a full analysis" },
              { value: 3, suffix: "", label: "Steps to get covered" },
              { value: 100, suffix: "%", label: "FCA-aware process" },
            ].map((m, i) => (
              <Reveal key={m.label} delay={i * 110}>
                <div className="h-full bg-card p-8 text-center md:text-left">
                  <div className="font-display text-4xl md:text-5xl font-medium text-ink tracking-tight">
                    <CountUp end={m.value} suffix={m.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow text-muted-foreground">
                <span className="h-px w-6 bg-muted-foreground/40" />
                Live picture
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight text-balance">
                One view of your <span className="text-accent italic">whole insurance stack.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-md">
                Cover, quotes, renewals and gaps in a single place. No more scattered PDFs or chasing brokers for updates.
              </p>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-7">
              <HeroDashboard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — step-by-step process timeline */}
      <section className="section pt-0">
        <div className="container-atlas">
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              title={<>Covered in <span className="text-accent italic">four calm steps.</span></>}
              description="No long forms, no pressure. A clear path from question to cover."
            />
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            {/* connecting line behind the step nodes */}
            <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-border" aria-hidden="true" />
            {[
              { title: "Tell us about your business", body: "Drop in your company website - that's it. No long questionnaires." },
              { title: "Get your instant analysis", body: "See the cover you likely need, the gaps to close and fair pricing." },
              { title: "Review with a human", body: "An expert sense-checks your recommendations. No jargon, no pressure." },
              { title: "Get covered, your way", body: "Bind the right policies and pay by card, bank transfer or crypto." },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 150} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card font-display text-lg font-medium text-accent shadow-card">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display text-xl text-ink tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <Reveal className="lg:col-span-7">
                <div className="eyebrow text-muted-foreground">
                  <span className="h-px w-6 bg-muted-foreground/40" />
                  Pay your way
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight">
                  Card, bank transfer or <span className="text-accent italic">crypto.</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Settle your premium in pounds, dollars or euros, or pay in Bitcoin, Ethereum or USDC. Same cover, your choice of rails.
                </p>
              </Reveal>
              <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                <Reveal delay={0}><PayTile icon={CreditCard} label="Card" sub="Visa, Mastercard, Amex" /></Reveal>
                <Reveal delay={110}><PayTile icon={Wallet} label="Bank" sub="ACH, SEPA, Faster Payments" /></Reveal>
                <Reveal delay={220}><PayTile icon={Bitcoin} label="Crypto" sub="BTC, ETH, USDC" accent /></Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SIMPLE */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="rounded-3xl border border-border bg-gradient-paper p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-12 items-center">
              <Reveal className="lg:col-span-6">
                <div className="eyebrow text-muted-foreground">
                  <span className="h-px w-6 bg-muted-foreground/40" />
                  60-second analysis
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight text-balance">
                  See your insurance picture before you talk to anyone.
                </h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Drop in your company website. We'll show you the cover you likely need,
                  the gaps to close, and what good pricing looks like.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Personalised risk overview",
                    "Recommended policies, ranked",
                    "Pricing benchmarks",
                    "What to ask your current broker",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3 text-ink">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm md:text-base">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Button asChild variant="atlas" size="lg" className="group">
                    <Link to="/insurance-analysis">Run free analysis <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={150} className="lg:col-span-6">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-elev">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    your-company.com
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    <Sample label="Industry" value="SaaS / Fintech" />
                    <Sample label="Risk profile" value="Moderate" />
                    <Sample label="Essential cover" value="Cyber, PI, EL" accent />
                    <Sample label="Estimated annual premium" value="£4,800 – £6,200" />
                    <Sample label="Gaps to close" value="3" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section bg-secondary/40">
        <div className="container-atlas">
          <Reveal>
            <SectionHeader
              eyebrow="Who we help"
              title={<>Built for <span className="text-accent italic">modern businesses.</span></>}
              description="From early-stage startups to established firms - if your business is moving fast, your insurance should too."
            />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "SaaS & Tech", body: "Cyber, PI and IP cover for software companies." },
              { tag: "Fintech", body: "Regulated cover for payments, lending and crypto." },
              { tag: "AI Companies", body: "Specialist cover for AI products and model risk." },
              { tag: "Professional Services", body: "PI, management liability and cyber done right." },
            ].map((s, i) => (
              <Reveal key={s.tag} delay={i * 110}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-accent/50 hover:shadow-elev hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">{s.tag}</div>
                  <p className="mt-4 text-ink leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 pt-4">
        <div className="container-atlas">
          <div className="rounded-3xl border border-border bg-gradient-paper p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-light opacity-30" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <Reveal className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight max-w-2xl">
                  Get the right cover. <span className="text-accent italic">In minutes.</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Free analysis. No credit card. No sales call required.
                </p>
              </div>
              <CTARow primaryLabel="Get my analysis" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ icon: Icon, title, body }: { icon: React.ComponentType<{className?:string}>; title: string; body: string }) {
  return (
    <div className="group relative h-full rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elev hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 font-display text-2xl text-ink tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Sample({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2.5 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "text-accent font-semibold font-mono" : "text-ink font-medium font-mono"}>{value}</span>
    </div>
  );
}

function PayTile({ icon: Icon, label, sub, accent }: { icon: React.ComponentType<{className?:string}>; label: string; sub: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 flex flex-col gap-2 ${accent ? "border-accent/50 bg-accent/5" : "border-border bg-background"}`}>
      <Icon className={`h-5 w-5 ${accent ? "text-accent" : "text-ink"}`} />
      <div className="font-display font-semibold text-ink text-sm">{label}</div>
      <div className="text-[11px] text-muted-foreground font-mono leading-tight">{sub}</div>
    </div>
  );
}
