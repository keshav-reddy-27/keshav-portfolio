import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ArrowDownToLine, MapPin, Code2 } from "lucide-react";

const RESUME = {
  name: "KESHAVARDHAN REDDY B",
  role: "B.Tech CSE (AI & ML) • ML / AI & Full‑Stack Developer",
  summary:
    "AI/ML and full‑stack developer with hands‑on projects in NLP (DistilBERT NER), computer vision (CNN+LSTM captioning), and web apps. Comfortable with Python, PyTorch, Transformers, React, and SQL; keen on building reliable ML systems with clean UIs.",
  location: "Hyderabad, India",
  email: "keshavardhanreddyb@gmail.com",
  socials: {
    github: "https://github.com/keshav-reddy-27",
    linkedin: "https://www.linkedin.com/in/keshavardhan-reddy-b-845552308",
  },
  skills: [
    "Python","Java","PyTorch","Transformers","TensorFlow","Keras","OpenCV","NumPy","Pandas","Matplotlib",
    "JavaScript","React","HTML","CSS","Django","SQL"
  ],
  experience: [
    {
      company: "VISWAM.AI",
      role: "AI Intern",
      start: "May 2025",
      end: "Jun 2025",
      bullets: [
        "Participated in the 4‑week Summer of AI Internship; contributed to practical AI tasks and code submissions.",
        "Built hands‑on mini‑projects and documented learnings; collaborated with peers and mentors."
      ],
      certificate: "/internship.pdf"
    }
  ],
  projects: [
    {
      title: "NERIFY — Named Entity Recognition (DistilBERT)",
      description:
        "Trained and fine‑tuned DistilBERT on CoNLL‑2003 for token classification; recognizes multi‑word entities accurately and handles real‑world text noise.",
      tags: ["NLP","DistilBERT","PyTorch","Token Classification"],
      image: "/nerify.png",
      repo: "https://github.com/keshav-reddy-27",
    },
    {
      title: "Smart Health Detection Chatbot",
      description:
        "Symptom‑collection chatbot (Python + HTML/CSS/JS) that suggests medicines based on curated online data and user reviews.",
      tags: ["Chatbot","Web","Python","JS"],
      image: "/smarthealth.png",
      repo: "https://github.com/keshav-reddy-27",
    },
  ],
  education: [
    {
      school: "Malla Reddy University, Hyderabad",
      degree: "B.Tech in Computer Science (AI & ML) — CGPA: 8.4",
      period: "Sep 2022 – Present",
    },
  ],
};

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const Avatar = () => (
  <div className="relative h-36 w-36 shrink-0 md:h-40 md:w-40">
    <img
      src="/avatar.png"
      alt="Profile"
      className="h-full w-full rounded-full object-cover border border-white/20 shadow-md"
    />
    {/* Optional open-to-work ring */}
    {/* <img src="/open-to-work.png" className="pointer-events-none absolute inset-0 h-full w-full" /> */}
  </div>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

const SectionTitle = ({ title, icon }) => (
  <div className="mb-6 flex items-center gap-3">
    <div className="h-6 w-1 rounded bg-gradient-to-b from-cyan-400 via-cyan-300 to-cyan-200" />
    <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
      {icon}
      <span className="uppercase tracking-wider text-white/90">{title}</span>
    </div>
  </div>
);

const ProjectCard = ({ p }) => (
  <motion.article
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md hover:border-white/20 transition"
  >
    <img src={p.image} alt={p.title} className="aspect-video w-full object-cover" />
    <div className="p-5">
      <h3 className="text-lg font-semibold tracking-tight mb-2">{p.title}</h3>
      <p className="text-sm text-white/80 mb-3">{p.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {p.tags?.map((t) => <Pill key={t}>{t}</Pill>)}
      </div>
      {p.repo && (
        <a href={p.repo} className="text-sm inline-flex items-center gap-1 opacity-90 hover:opacity-100">
          Code <Github size={14} />
        </a>
      )}
    </div>
  </motion.article>
);

export default function Portfolio() {
  return (
    <div id="top" className="min-h-screen bg-[#0b0d10] text-white antialiased selection:bg-cyan-300 selection:text-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">{RESUME.name.split(" ")[0]}</a>
          <div className="hidden gap-5 md:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm text-white/80 hover:text-white">{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href={RESUME.socials.github} aria-label="GitHub" className="rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10">
              <Github size={16} />
            </a>
            <a href={RESUME.socials.linkedin} aria-label="LinkedIn" className="rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pt-14 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider">
            <Code2 size={14} /> AI/ML • Full‑Stack Developer
          </div>
          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">
              {RESUME.name}
            </span>
          </h1>
          <p className="mt-2 text-xl text-white/90">{RESUME.role}</p>
          <div className="mt-2 h-1 w-24 rounded bg-gradient-to-r from-cyan-400 to-cyan-200" />
          <p className="mt-4 max-w-3xl text-white/80">{RESUME.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-1"><MapPin size={16} /> {RESUME.location}</span>
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${RESUME.email}`}>
              <Mail size={16} /> {RESUME.email}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20">
              <ArrowDownToLine size={16} /> Download Resume
            </a>
            <a href={RESUME.socials.github} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
              <Github size={18} /> GitHub
            </a>
            <a href={RESUME.socials.linkedin} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <div><img src="/avatar.png" alt="Profile" className="h-36 w-36 md:h-40 md:w-40 rounded-full object-cover border border-white/20 shadow-md" /></div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        {/* Experience */}
        <section id="experience">
          <SectionTitle title="Experience" icon={<span className="opacity-90">💼</span>} />
          <div className="space-y-4">
            {RESUME.experience.map((e) => (
              <div key={e.company} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-tight">{e.role} • {e.company}</h3>
                  <span className="text-xs text-white/70">{e.start} – {e.end}</span>
                </div>
                <ul className="mt-3 list-outside list-disc space-y-2 pl-5 text-sm text-white/85">
                  {e.bullets?.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
                {e.certificate && (
                  <div className="mt-4">
                    <div className="text-xs text-white/70 mb-2">Certificate</div>
                    <object data={e.certificate} type="application/pdf" className="w-full h-72 rounded border border-white/10">
                      <a href={e.certificate} className="underline">View certificate (PDF)</a>
                    </object>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <SectionTitle title="Skills" icon={<span className="opacity-90">🛠️</span>} />
          <div className="flex flex-wrap gap-2">
            {RESUME.skills.map((s) => <Pill key={s}>{s}</Pill>)}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <SectionTitle title="Projects" icon={<span className="opacity-90">🚀</span>} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESUME.projects.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <SectionTitle title="Education" icon={<span className="opacity-90">🎓</span>} />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold tracking-tight">{RESUME.education[0].degree} • {RESUME.education[0].school}</h3>
              <span className="text-xs text-white/70">{RESUME.education[0].period}</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <SectionTitle title="Contact" icon={<span className="opacity-90">✉️</span>} />
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/85">
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${RESUME.email}`}>
              <Mail size={16} /> {RESUME.email}
            </a>
            <span className="inline-flex items-center gap-1"><MapPin size={16} /> {RESUME.location}</span>
            <a className="inline-flex items-center gap-1 hover:underline" href={RESUME.socials.github}>
              <Github size={16} /> GitHub
            </a>
            <a className="inline-flex items-center gap-1 hover:underline" href={RESUME.socials.linkedin}>
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-12 text-xs text-white/60">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
          © {new Date().getFullYear()} {RESUME.name}. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}
