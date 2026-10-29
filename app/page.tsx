import Image from "next/image";
import {
  Mail,
  ArrowDownToLine,
  Code2,
  Building2,
  ExternalLink,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { TechBadge } from "@/components/tech-badge";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const shippedProjects = portfolio.experience.reduce((n, exp) => n + exp.projects.length, 0);

const stats = [
  { value: "4+", label: "Years building for the web" },
  { value: String(shippedProjects), label: "Projects shipped" },
  { value: String(portfolio.experience.length), label: "Companies & clients" },
];

const pillLink =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Navbar
        brand={portfolio.shortName}
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
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                  {portfolio.experience[0].role} at {portfolio.experience[0].company}
                </p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  <span className="text-gradient">{portfolio.name}</span>
                </h1>
                <p className="mt-4 text-base font-medium text-white/85 sm:text-lg">
                  {portfolio.title} · Golang, PHP, Java & React
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  {portfolio.intro}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/55">
                  <MapPin className="h-4 w-4" />
                  {portfolio.location}
                </p>
              </Reveal>

              <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#contact" variant="primary">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </ButtonLink>
                <ButtonLink href="/cv.pdf" variant="secondary" download="CV - Reza Fauzan Adhima.pdf">
                  <ArrowDownToLine className="h-4 w-4" />
                  Download CV
                </ButtonLink>
              </Reveal>

              <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-2">
                <a className={pillLink} href={portfolio.links.github} target="_blank" rel="noreferrer">
                  <Code2 className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
                <a className={pillLink} href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                  <Building2 className="h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
                <a className={pillLink} href={portfolio.links.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.06}>
              <Card className="relative overflow-hidden p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_30%_0%,rgba(34,211,238,0.18),transparent_55%)]" />
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-none overflow-hidden rounded-2xl ring-1 ring-cyan-300/30">
                      <Image
                        src={portfolio.avatar.src}
                        alt={portfolio.avatar.alt}
                        fill
                        sizes="64px"
                        loading="eager"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{portfolio.shortName}</p>
                      <p className="text-xs text-white/55">{portfolio.tagline}</p>
                    </div>
                  </div>

                  <dl className="mt-6 grid grid-cols-3 gap-2">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col-reverse gap-1 rounded-xl border border-white/8 bg-white/[0.03] p-3"
                      >
                        <dt className="text-[11px] leading-4 text-white/55">{s.label}</dt>
                        <dd className="text-2xl font-semibold text-cyan-200">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 text-sm font-medium text-white/85">Highlights</p>
                  <ul className="mt-3 space-y-3 text-sm leading-6 text-white/70">
                    {portfolio.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                        {h}
                      </li>
                    ))}
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
          title="Backend at heart, fullstack in practice"
          description="What I'm working on now and how I got here."
        >
          <Reveal>
            <Card className="p-6 sm:p-8">
              <div className="space-y-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                {portfolio.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Card>
          </Reveal>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Tech I use to ship"
          description="The tools behind the projects below, grouped for quick scanning."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.skills.map((group, idx) => (
              <Reveal key={group.group} delay={idx * 0.04}>
                <Card className="h-full p-6">
                  <p className="text-sm font-semibold text-white">{group.group}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <TechBadge key={s} name={s} />
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
          title="Where I've worked"
          description="Every role, with the projects I delivered there and what changed because of them."
        >
          <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
            {portfolio.experience.map((exp, idx) => (
              <li key={`${exp.company}-${exp.role}`} className="relative">
                <span
                  className={`absolute top-7 -left-[29px] h-2.5 w-2.5 rounded-full sm:-left-[37px] ${
                    exp.end ? "bg-white/30" : "bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                  }`}
                />
                <Reveal delay={Math.min(idx, 3) * 0.04}>
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <div>
                        <p className="text-base font-semibold text-white">{exp.company}</p>
                        <p className="mt-1 text-sm text-cyan-100/80">{exp.role}</p>
                      </div>
                      <p className="text-sm text-white/55 sm:text-right">
                        {exp.start === exp.end ? exp.start : `${exp.start} — ${exp.end ?? "Present"}`}
                        {exp.location ? <span className="block text-xs">{exp.location}</span> : null}
                      </p>
                    </div>

                    <div className="mt-6 space-y-6">
                      {exp.projects.map((proj) => (
                        <div key={proj.name} className="border-t border-white/8 pt-5 first:border-t-0 first:pt-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <p className="text-sm font-semibold text-white/90">
                              {proj.name}
                              <span className="font-normal text-white/50"> — {proj.summary}</span>
                            </p>
                            <p className="text-xs text-white/45">{proj.period}</p>
                          </div>
                          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
                            {proj.highlights.map((h) => (
                              <li key={h} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/35" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {proj.tech.map((t) => (
                              <TechBadge key={t} name={t} className="px-2.5 py-0.5 text-[11px] text-white/60" />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work"
          description="Internal systems, e-commerce, government dashboards, and a bit of hardware."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {portfolio.projects.map((p, idx) => (
              <Reveal key={p.name} delay={(idx % 2) * 0.05} className="h-full">
                <Card className="group flex h-full flex-col overflow-hidden">
                  <div className="relative h-36 overflow-hidden border-b border-white/8 bg-[radial-gradient(400px_160px_at_0%_0%,rgba(34,211,238,0.22),transparent_70%)]">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <span className="absolute -right-2 -bottom-6 text-[96px] leading-none font-semibold tracking-tighter text-white/[0.05] transition duration-500 group-hover:text-cyan-200/10">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="relative flex h-full flex-col justify-between p-6">
                      <div className="flex items-center justify-between">
                        <Badge className="border-cyan-300/25 bg-cyan-300/10 text-cyan-100">{p.category}</Badge>
                        <span className="text-xs text-white/50">{p.year}</span>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{p.name}</p>
                        <p className="text-xs text-white/50">{p.context}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-sm leading-6 text-white/70">{p.description}</p>
                    <p className="mt-3 flex gap-2 text-sm leading-6 text-cyan-50/85">
                      <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-cyan-300" />
                      {p.impact}
                    </p>
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-5">
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                      {p.links?.demo || p.links?.github ? (
                        <div className="flex items-center gap-2">
                          {p.links.github ? (
                            <a
                              href={p.links.github}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
                              aria-label={`${p.name} source code`}
                            >
                              <Code2 className="h-4 w-4" />
                            </a>
                          ) : null}
                          {p.links.demo ? (
                            <a
                              href={p.links.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white"
                              aria-label={`${p.name} live site`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : null}
                        </div>
                      ) : null}
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
          description="Formal training, bootcamps, and certifications."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {portfolio.education.map((e, idx) => (
              <Reveal key={e.institution} delay={idx * 0.05}>
                <Card className="h-full p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-base font-semibold text-white">{e.institution}</p>
                    {e.start || e.end ? (
                      <p className="flex-none text-xs text-white/55">
                        {[e.start, e.end].filter(Boolean).join(" — ")}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-cyan-100/80">
                    {e.degree}
                    {e.location ? <span className="text-white/50"> · {e.location}</span> : null}
                  </p>
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

            <Reveal delay={0.06}>
              <Card className="h-full p-6 sm:p-8">
                <p className="text-base font-semibold text-white">Certifications & Training</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                  {portfolio.certifications.map((c) => (
                    <li key={c.name} className="flex items-start justify-between gap-4">
                      <span>
                        <span className="font-medium text-white/85">{c.name}</span>
                        <span className="block text-white/55">{c.issuer}</span>
                      </span>
                      <span className="mt-1 text-xs text-white/55">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's build something great"
          description="Open to backend and fullstack roles, as well as freelance projects. The fastest way to reach me is WhatsApp or email."
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <p className="text-sm font-semibold text-white">Direct</p>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <a className="flex items-center gap-3 hover:text-white" href={`mailto:${portfolio.email}`}>
                    <Mail className="h-4 w-4 text-cyan-300" /> {portfolio.email}
                  </a>
                  <a
                    className="flex items-center gap-3 hover:text-white"
                    href={portfolio.links.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Phone className="h-4 w-4 text-cyan-300" /> {portfolio.phone}
                    <span className="text-white/45">(WhatsApp)</span>
                  </a>
                  <a
                    className="flex items-center gap-3 hover:text-white"
                    href={portfolio.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Building2 className="h-4 w-4 text-cyan-300" /> LinkedIn
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                  <a
                    className="flex items-center gap-3 hover:text-white"
                    href={portfolio.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 className="h-4 w-4 text-cyan-300" /> github.com/rezafauzan
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                  <p className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-cyan-300" /> {portfolio.location}
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.06}>
              <Card className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-white">Message</p>
                <ContactForm email={portfolio.email} />
              </Card>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/8 py-10">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} {portfolio.name}. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex gap-4 text-sm text-white/55">
            <a className="hover:text-white" href={portfolio.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-white" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-white" href={`mailto:${portfolio.email}`}>
              Email
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
