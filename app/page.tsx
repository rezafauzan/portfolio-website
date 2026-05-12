import Image from "next/image";
import { Mail, ArrowDownToLine, Code2, Building2, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Navbar
        items={[
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "education", label: "Education" },
          { id: "contact", label: "Contact" },
        ]}
      />

      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(900px_500px_at_50%_0%,rgba(34,211,238,0.22),transparent_55%)]" />
        <Container className="relative py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <Reveal>
                <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                  SOFTWARE ENGINEER PORTFOLIO
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  <span className="text-gradient">{portfolio.name}</span>
                </h1>
                <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
                  {portfolio.title}
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  {portfolio.intro}
                </p>
              </Reveal>

              <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#contact" variant="primary">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </ButtonLink>
                <ButtonLink href="/cv.pdf" variant="secondary">
                  <ArrowDownToLine className="h-4 w-4" />
                  Download CV
                </ButtonLink>
              </Reveal>

              <Reveal delay={0.12} className="mt-10 flex flex-wrap gap-2">
                {portfolio.links.github ? (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white"
                    href={portfolio.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 className="h-4 w-4" />
                    GitHub
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ) : null}
                {portfolio.links.linkedin ? (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white"
                    href={portfolio.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Building2 className="h-4 w-4" />
                    LinkedIn
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ) : null}
              </Reveal>
            </div>

            <Reveal delay={0.06}>
              <Card className="relative overflow-hidden p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_30%_0%,rgba(34,211,238,0.18),transparent_55%)]" />
                <div className="relative">
                  <p className="text-sm font-medium text-white/85">Highlights</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                      Product-minded engineer with a focus on clean UI and performance.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300/90 shadow-[0_0_20px_rgba(34,211,238,0.45)]" />
                      Strong fundamentals, readable code, and pragmatic delivery.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
                      Comfortable owning features end-to-end across frontend & backend.
                    </li>
                  </ul>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </header>

      <main>
        <Section
          id="about"
          eyebrow="About"
          title="A bit about me"
          description="How I think, what I enjoy building, and what I optimize for."
        >
          <Reveal>
            <Card className="p-6 sm:p-8">
              <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-strong:text-white">
                <p>
                  I’m a software engineer who loves building fast, clean, and reliable web experiences. I care about the
                  details—layout, interaction, and performance—because that’s what users feel.
                </p>
                <p>
                  I’m especially interested in modern frontend architecture with Next.js, design systems, and thoughtful
                  animation that makes a product feel premium without being distracting.
                </p>
              </div>
            </Card>
          </Reveal>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Tech I use to ship"
          description="Grouped for quick scanning—optimized for recruiter readability."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.skills.map((group, idx) => (
              <Reveal key={group.group} delay={idx * 0.04}>
                <Card className="h-full p-6">
                  <p className="text-sm font-semibold text-white">{group.group}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <Badge key={s.name}>{s.name}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Impact-driven work"
          description="A timeline view focused on outcomes and what changed because I was there."
        >
          <div className="space-y-4">
            {portfolio.experience.map((exp, idx) => (
              <Reveal key={`${exp.company}-${exp.role}`} delay={idx * 0.05}>
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">
                        {exp.role} · {exp.company}
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        {exp.start} — {exp.end ?? "Present"}
                        {exp.location ? ` · ${exp.location}` : ""}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-white/70">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/35" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work"
          description="A few projects I’m most proud of—designed to show scope and craft."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {portfolio.projects.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 0.05}>
                <Card className="group overflow-hidden">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:opacity-100"
                      priority={idx === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-white">{p.name}</p>
                        <p className="mt-2 text-sm leading-6 text-white/70">{p.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {p.links?.github ? (
                          <a
                            href={p.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
                            aria-label="GitHub link"
                          >
                            <Code2 className="h-4 w-4" />
                          </a>
                        ) : null}
                        {p.links?.demo ? (
                          <a
                            href={p.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
                            aria-label="Demo link"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Education & credentials"
          description="The foundation—plus anything notable along the way."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {portfolio.education.map((e, idx) => (
              <Reveal key={e.institution} delay={idx * 0.05}>
                <Card className="p-6 sm:p-8">
                  <p className="text-base font-semibold text-white">{e.institution}</p>
                  <p className="mt-1 text-sm text-white/70">{e.degree}</p>
                  {e.start || e.end ? (
                    <p className="mt-2 text-xs text-white/55">
                      {[e.start, e.end].filter(Boolean).join(" — ")}
                    </p>
                  ) : null}
                  {e.notes?.length ? (
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-white/70">
                      {e.notes.map((n) => (
                        <li key={n} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/35" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Card>
              </Reveal>
            ))}

            {portfolio.certifications?.length ? (
              <Reveal delay={0.06}>
                <Card className="p-6 sm:p-8">
                  <p className="text-base font-semibold text-white">Certifications</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                    {portfolio.certifications.map((c) => (
                      <li key={c.name} className="flex items-start justify-between gap-4">
                        <span>
                          <span className="font-medium text-white/85">{c.name}</span>
                          {c.issuer ? <span className="text-white/55"> · {c.issuer}</span> : null}
                        </span>
                        {c.year ? <span className="text-xs text-white/55">{c.year}</span> : null}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ) : null}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s build something great"
          description="Send a message—I'll reply as soon as I can."
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <Card className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-white">Direct</p>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <a className="block hover:text-white" href={`mailto:${portfolio.email}`}>
                    {portfolio.email}
                  </a>
                  {portfolio.links.linkedin ? (
                    <a
                      className="flex items-center gap-2 hover:text-white"
                      href={portfolio.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Building2 className="h-4 w-4" /> LinkedIn{" "}
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : null}
                  {portfolio.links.github ? (
                    <a
                      className="flex items-center gap-2 hover:text-white"
                      href={portfolio.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Code2 className="h-4 w-4" /> GitHub{" "}
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : null}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.06}>
              <Card className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-white">Message</p>
                <form className="mt-5 space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-xs font-medium text-white/60">Name</span>
                      <input
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                        placeholder="Your name"
                        name="name"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-xs font-medium text-white/60">Email</span>
                      <input
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                        placeholder="you@company.com"
                        name="email"
                        type="email"
                      />
                    </label>
                  </div>
                  <label className="block space-y-2">
                    <span className="text-xs font-medium text-white/60">Message</span>
                    <textarea
                      className="min-h-[132px] w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                      placeholder="Tell me a bit about what you’re building…"
                      name="message"
                    />
                  </label>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs text-white/50">
                      This form is UI-only for now (we can wire it to an email/API).
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full bg-cyan-300/15 px-5 py-2.5 text-sm font-medium text-cyan-50 ring-1 ring-inset ring-cyan-300/40 hover:bg-cyan-300/20 hover:ring-cyan-300/55"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Card>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/8 py-10">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} {portfolio.name}. Built with Next.js.
          </p>
          <p className="text-sm text-white/55">
            <span className="text-white/70">Accent:</span> cyan on dark · clean motion · recruiter-friendly
          </p>
        </Container>
      </footer>
    </div>
  );
}
