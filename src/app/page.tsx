const stats = [
  { label: "Videos delivered", value: "100+" },
  { label: "Years in dev", value: "5" },
  { label: "Countries shot", value: "21" },
  { label: "Avg turnaround", value: "48h" },
];

const services = [
  {
    title: "UGC VIDEO PACKAGES",
    description:
      "Concepts, scripting, filming, editing, hooks, captions, and multiple variants.",
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Landing pages, full sites, performance tuning, and SEO foundations that scale.",
  },
  {
    title: "CREATIVE ADD-ONS",
    description:
      "Creative strategy, A/B testing, content repurposing, and campaign kits.",
  },
];

const pricing = [
  {
    name: "Starter UGC",
    price: "3",
    unit: "videos / month",
    detail: "Best for testing new hooks and angles.",
  },
  {
    name: "Growth UGC",
    price: "8",
    unit: "videos / month",
    detail: "Scale creative output with fast iteration.",
  },
  {
    name: "Web Dev Sprint",
    price: "1",
    unit: "site in 10 days",
    detail: "Single-page or multi-page build with launch support.",
  },
];

const testimonials = [
  {
    quote:
      "Abie shipped 6 UGC concepts in a week and our CTR jumped by 28% in the first test.",
    name: "Rhea, Growth Lead",
  },
  {
    quote:
      "She rebuilt our landing page and we launched in 10 days with a clean, bold look.",
    name: "Jon, Founder",
  },
  {
    quote:
      "We finally had a creator who understands product and can talk like an engineer.",
    name: "Maya, Product Marketing",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <div className="noise" aria-hidden="true" />

      <header className="relative z-10 border-b-2 border-border">
        <div className="mx-auto flex w-full max-w-[95vw] items-center justify-between px-4 py-6 md:px-8">
          <div className="text-xs font-bold uppercase tracking-widest">
            Abie Maxey
          </div>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
            <a className="transition-colors hover:text-accent" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-accent" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-accent" href="#pricing">
              Pricing
            </a>
            <a
              className="transition-colors hover:text-accent"
              href="#testimonials"
            >
              Testimonials
            </a>
          </nav>
          <a
            className="hidden h-12 items-center justify-center border-2 border-border px-6 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background md:flex"
            href="#contact"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main className="relative z-10 flex flex-col">
        <section
          id="hero"
          className="border-b-2 border-border py-20 md:py-32"
        >
          <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Digital nomad / software engineer / ugc creator
            </p>
            <h1 className="mt-6 text-[clamp(3rem,12vw,14rem)] font-bold uppercase leading-[0.8] tracking-tighter">
              UGC VIDEOS{" "}
              <span className="text-accent">+ WEB DEV</span> FOR BRANDS THAT MOVE
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-tight text-muted-foreground md:text-xl lg:text-2xl">
              Abie builds high-converting UGC and modern websites for brands
              that travel fast. Engineer precision with creator energy.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="flex h-14 items-center justify-center bg-accent px-8 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:scale-105 active:scale-95"
                href="#contact"
              >
                Book a Free Consult
              </a>
              <a
                className="flex h-14 items-center justify-center border-2 border-border px-8 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
                href="#services"
              >
                View Work
              </a>
            </div>

            <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background p-6 text-left"
                >
                  <div className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="relative min-h-[320px] border-2 border-border bg-muted p-8 md:min-h-[420px]">
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-2 text-[6rem] font-bold text-background/20 md:text-[8rem]"
                >
                  01
                </span>
                <div className="flex h-full flex-col justify-between">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Travel frame
                  </p>
                  <div className="border-2 border-border bg-background p-6">
                    <p className="text-2xl font-bold uppercase tracking-tight">
                      UGC in motion
                    </p>
                    <p className="mt-2 text-base text-muted-foreground md:text-lg">
                      Shot on the road, engineered for performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative border-2 border-border bg-background p-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-4 top-2 text-[6rem] font-bold text-muted md:text-[8rem]"
                >
                  02
                </span>
                <div className="grid gap-6">
                  <div className="border-2 border-border bg-muted p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      UGC frame
                    </p>
                    <p className="mt-3 text-xl font-bold uppercase tracking-tight">
                      Hook + value + proof
                    </p>
                  </div>
                  <div className="border-2 border-border bg-muted p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Website preview
                    </p>
                    <p className="mt-3 text-xl font-bold uppercase tracking-tight">
                      Conversion-focused build
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="marquee marquee--fast bg-accent text-accent-foreground"
          aria-label="Stats marquee"
        >
          <div className="marquee__track py-6 text-xl font-bold uppercase tracking-tight md:text-2xl">
            {stats.map((stat) => (
              <span key={stat.label}>
                {stat.value} {stat.label}
              </span>
            ))}
            {stats.map((stat) => (
              <span key={`${stat.label}-dup`} aria-hidden="true">
                {stat.value} {stat.label}
              </span>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="border-b-2 border-border py-24 md:py-32"
        >
          <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-6 -top-12 text-[6rem] font-bold text-muted md:text-[10rem]"
                >
                  03
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  About Abie
                </p>
                <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl">
                  Engineer brain. Creator heart.
                </h2>
                <p className="mt-6 max-w-2xl text-lg font-medium leading-tight text-muted-foreground md:text-xl lg:text-2xl">
                  Abie is a software engineer turned creator who builds UGC that
                  performs and websites that convert. Currently based in Lisbon,
                  traveling worldwide.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border-2 border-border bg-muted p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Passport ready
                  </p>
                  <p className="mt-4 text-2xl font-bold uppercase tracking-tight">
                    21 countries
                  </p>
                </div>
                <div className="border-2 border-border bg-muted p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Build speed
                  </p>
                  <p className="mt-4 text-2xl font-bold uppercase tracking-tight">
                    10-day launches
                  </p>
                </div>
                <div className="border-2 border-border bg-muted p-8 md:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Values
                  </p>
                  <p className="mt-4 text-lg font-medium text-muted-foreground md:text-xl">
                    Speed, authenticity, measurable growth, and real-world
                    storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-b-2 border-border py-24 md:py-32"
        >
          <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Services
                </p>
                <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl">
                  Built for speed and scroll.
                </h2>
              </div>
              <p className="max-w-xl text-lg font-medium leading-tight text-muted-foreground md:text-xl lg:text-2xl">
                Choose a full UGC pipeline, a web sprint, or a hybrid stack that
                ties both together.
              </p>
            </div>

            <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative border-2 border-border bg-background p-8 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-4 text-[6rem] font-bold text-muted group-hover:text-accent-foreground md:text-[8rem]"
                  >
                    0{index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-accent-foreground">
                    {service.title}
                  </p>
                  <p className="mt-6 text-lg font-medium leading-tight text-muted-foreground group-hover:text-accent-foreground md:text-xl">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="border-b-2 border-border py-24 md:py-32"
        >
          <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Pricing
                </p>
                <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl">
                  Packages with room to flex.
                </h2>
              </div>
              <p className="max-w-xl text-lg font-medium leading-tight text-muted-foreground md:text-xl lg:text-2xl">
                All packages include a discovery call and revision rounds.
                Request a custom quote for blended bundles.
              </p>
            </div>

            <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
              {pricing.map((tier, index) => (
                <div
                  key={tier.name}
                  className="group relative border-2 border-border bg-background p-10 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-6 text-[6rem] font-bold text-muted group-hover:text-accent-foreground md:text-[8rem]"
                  >
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-accent-foreground">
                    {tier.name}
                  </p>
                  <div className="mt-8 text-[6rem] font-bold leading-none md:text-[8rem]">
                    {tier.price}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-accent-foreground">
                    {tier.unit}
                  </p>
                  <p className="mt-6 text-lg font-medium text-muted-foreground group-hover:text-accent-foreground">
                    {tier.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="flex h-14 items-center justify-center border-2 border-border px-8 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
                href="#contact"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="border-b-2 border-border py-24 md:py-32"
        >
          <div className="mx-auto w-full max-w-[95vw] px-4 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Testimonials
            </p>
            <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl">
              Proof in motion.
            </h2>
          </div>
          <div className="marquee marquee--slow mt-12 bg-background text-foreground">
            <div className="marquee__track py-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-[260px] border-2 border-border bg-muted p-6 text-left md:min-w-[420px]"
                >
                  <p className="text-lg font-medium leading-tight text-foreground md:text-xl">
                    {testimonial.quote}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {testimonial.name}
                  </p>
                </div>
              ))}
              {testimonials.map((testimonial) => (
                <div
                  key={`${testimonial.name}-dup`}
                  aria-hidden="true"
                  className="min-w-[260px] border-2 border-border bg-muted p-6 text-left md:min-w-[420px]"
                >
                  <p className="text-lg font-medium leading-tight text-foreground md:text-xl">
                    {testimonial.quote}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative z-10 bg-accent text-accent-foreground">
        <div className="mx-auto w-full max-w-[95vw] px-4 py-20 md:px-8 md:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                Ready to build
              </p>
              <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.85] tracking-tighter md:text-7xl lg:text-8xl">
                Let's ship your next launch.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-tight md:text-xl lg:text-2xl">
                Email hello@abiemaxey.com or book a call. Working remotely
                worldwide.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
              <a className="transition-opacity hover:opacity-70" href="#hero">
                Back to top
              </a>
              <a className="transition-opacity hover:opacity-70" href="#about">
                About
              </a>
              <a
                className="transition-opacity hover:opacity-70"
                href="#services"
              >
                Services
              </a>
              <a
                className="transition-opacity hover:opacity-70"
                href="#pricing"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-widest">
            <a className="transition-opacity hover:opacity-70" href="#">
              TikTok
            </a>
            <a className="transition-opacity hover:opacity-70" href="#">
              Instagram
            </a>
            <a className="transition-opacity hover:opacity-70" href="#">
              LinkedIn
            </a>
            <a className="transition-opacity hover:opacity-70" href="#">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
