// pages/index.tsx — portfolio complet avec ScrollSpy, ScrollLink, sections & design teal

'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ScrollLink from '@/components/ScrollLink';
import projects from '@/data/projects';
import experiences from '@/data/experiences';

const sections = ['about', 'experience', 'projects', 'contact'];

function useScrollSpy(ids: string[], offset: number = 200) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let currentSection = ids[0];

      for (const id of ids) {
        const section = document.getElementById(id);
        if (section) {
          if (scrollY >= section.offsetTop) {
            currentSection = id;
          }
        }
      }

      // Si on est tout en bas de la page, forcer la dernière section
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (scrollBottom) {
        currentSection = ids[ids.length - 1];
      }

      setActiveId(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // appel initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}

export default function Home() {
  const active = useScrollSpy(sections);

  return (
    <>
      <Head>
        <title>Nathan Satge | Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 text-white min-h-screen px-6 py-16 font-[Space Grotesk]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Sidebar */}
          <aside className="md:sticky md:top-10 md:h-fit md:self-start">
            <h1 className="text-4xl mb-5 sm:text-5xl font-bold">Nathan Satge</h1>
            <h2 className="text-lg sm:text-xl text-gray-400">
              Étudiant en cybersécurité · ENSEIRB-MATMECA & UQAC
            </h2>
            <p className="text-gray-300 leading-relaxed">
            Actuellement à la recherche d’un <strong>stage de fin d’études en cybersécurité (à partir de septembre 2025)</strong>, je souhaite m’investir sur des missions touchant à la sécurité applicative, la protection des infrastructures ou la conformité réglementaire.
            </p>
            <nav className="mt-8 space-y-4">
              {sections.map((id) => (
                <ScrollLink key={id} to={id} isActive={active === id}>
                  → {id.charAt(0).toUpperCase() + id.slice(1)}
                </ScrollLink>
              ))}
            </nav>
            <div className="flex gap-4 mt-10">
              <a href="https://github.com/nsatge1" target="_blank"><Github className="h-5 w-5 hover:text-teal-300" /></a>
              <a href="https://www.linkedin.com/in/nathan-satge-39ba44255/" target="_blank"><Linkedin className="h-5 w-5 hover:text-teal-300" /></a>
              <a href="mailto:nathan.satge1@gmail.com"><Mail className="h-5 w-5 hover:text-teal-300" /></a>
              <a href="/CV-Nathan-SATGE.pdf" download><FileDown className="h-5 w-5 hover:text-teal-300"/></a>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
          <section id="about" className="scroll-mt-32">
            <h3 className="text-xl font-semibold text-white mb-2">À propos</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Je suis étudiant en dernière année d’ingénierie en cybersécurité dans le cadre d’un <strong>double diplôme</strong> entre l’<strong>ENSEIRB-MATMECA (INP Bordeaux)</strong> et l’<strong>Université du Québec à Chicoutimi (UQAC)</strong>. 
              Durant mon année d’échange au Canada, j’ai combiné ma formation technique avec une expérience enrichissante en tant qu’<strong>étudiant-athlète</strong> en <strong>cross-country</strong> et <strong>athlétisme</strong>, tout en cultivant ma passion pour le <strong>trail running</strong>, que je pratique depuis deux ans sur des épreuves longues distances (type UTMB).
              <br /><br />
              Mon parcours s’articule autour de la <strong>sécurisation des systèmes d'information</strong> : API sécurisées, réseaux Zero Trust, audits techniques, mais aussi conformité réglementaire (RGPD, ISO 27001, NIST). 
              J’ai eu l’opportunité d’intervenir sur des projets allant de la <strong>cybersécurité réseau</strong> à la <strong>protection des données en base</strong>, avec une approche systémique et orientée solution.
              <br /><br />
              Mes expériences en entreprise (Arkéa, INRIA) et en enseignement universitaire à l’UQAC m’ont permis d’affiner à la fois mes compétences techniques, mon sens de la pédagogie et ma capacité à travailler en environnement multiculturel.
              <br /><br />
              Je suis actuellement à la recherche d’un <strong>stage de fin d’études en cybersécurité</strong> à partir de septembre 2025, avec un intérêt particulier pour les sujets mêlant sécurité applicative, infrastructure cloud, DevSecOps ou audit.
            </p>
          </section>

          <section id="experience" className="scroll-mt-32">
  <h3 className="text-xl font-semibold text-white mb-4">Expériences</h3>
  <div className="space-y-8">
    {experiences.map((exp, i) => (
      <div key={i} className="flex gap-4 items-start">
        <Image
          src={exp.logo}
          alt={exp.company}
          width={48}
          height={48}
          className="rounded-md"
        />
        <div>
          <a
            href={exp.link}
            target="_blank"
            className="text-gray-300 font-bold text-lg hover:text-teal-400 hover:underline transition-colors duration-300"
          >
            {exp.company}
          </a>
          <p className="text-sm text-gray-300">{exp.dates} · {exp.role}</p>
          <p
            className="text-sm text-gray-400 mt-1 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: exp.description }}
          ></p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {exp.skills.map((skill, idx) => (
              <a
                key={idx}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 bg-gray-900 px-2 py-1 rounded-full border border-teal-400 hover:bg-teal-500 hover:text-white transition-colors duration-300"
              >
                {skill.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section id="projects" className="scroll-mt-32">
  <h3 className="text-xl font-semibold text-white mb-4">Projets</h3>
  <div className="flex flex-col gap-6">
    {projects.map((proj, index) => {
      const ProjectWrapper = proj.githubUrl ? 'a' : Link;
      const projectProps = proj.githubUrl
        ? { href: proj.githubUrl, target: '_blank', rel: 'noopener noreferrer' }
        : { href: `/projects/${proj.slug}` };

      return (
        <ProjectWrapper key={index} {...projectProps}>
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-lg hover:shadow-teal-400/30 transition-transform hover:-translate-y-1 duration-300">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition">
                {proj.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {proj.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {proj.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-900 text-teal-300 text-xs px-2 py-1 rounded-full border border-teal-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {proj.githubUrl && (
              <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-gray-300 hover:text-teal-400 inline-flex items-center gap-1">
                    <Github size={16} />
                    GitHub
                  </span>
              </div>
              )}
            </div>
          </div>
        </ProjectWrapper>
      );
    })}
  </div>
</section>

<section id="skills" className="scroll-mt-32">
  <h3 className="text-xl font-semibold text-white mb-8">Compétences</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">

    {[
      {
        title: '🔍 Sécurité offensive',
        skills: [
          'OWASP Top 10', 'BurpSuite', 'ZAP Proxy', 'Tests d’intrusion', 'Kali Linux', 'Metasploit', 'Nmap'
        ]
      },
      {
        title: '🛡️ Sécurité défensive',
        skills: [
          'PKI / Certificats', 'VPN / Zero Trust', 'Wireshark', 'Analyse réseau', 'Gestion des accès', 'SIEM / Logs'
        ]
      },
      {
        title: '⚙️ DevSecOps / Automatisation',
        skills: [
          'Git / GitLab CI/CD', 'Docker / Kubernetes', 'Scripting Bash', 'Gestion de secrets', 'Supervision'
        ]
      },
      {
        title: '📚 Conformité & gouvernance',
        skills: [
          'RGPD / CNIL', 'ISO 27001 / NIST', 'AI Act UE', 'Analyse de risques', 'AIPD / PIA'
        ]
      },
      {
        title: '💻 Développement',
        skills: [
          'Java / Spring Boot', 'JavaScript / Node.js / Svelte', 'Python / Bash', 'SQL / MySQL', 'HTML / CSS / Tailwind'
        ]
      }
    ].map((cat, index) => (
      <div
        key={index}
        className="group bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-teal-500 transition hover:shadow-lg hover:scale-[1.02]"
      >
        <h4 className="text-white font-bold text-lg mb-3 group-hover:text-teal-400 transition">
          {cat.title}
        </h4>
        <ul className="space-y-1 text-gray-400">
          {cat.skills.map((skill, i) => (
            <li key={i} className="hover:text-teal-300 transition duration-150">
              • {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


            <section id="contact" className="scroll-mt-32">
              <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
              <form
                action="https://formsubmit.co/satge78@gmail.com"
                method="POST"
                className="grid gap-4 max-w-xl"
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_next" value="https://nathan-satge.vercel.app/merci" />

                <input name="name" placeholder="Nom" required className="p-2 rounded bg-gray-800 text-white" />
                <input name="email" type="email" placeholder="Email" required className="p-2 rounded bg-gray-800 text-white" />
                <textarea name="message" placeholder="Message" rows={5} className="p-2 rounded bg-gray-800 text-white" />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-5 py-2 rounded border border-teal-500 hover:bg-teal-500 transition-colors duration-300"
                >
                  Envoyer
                </button>
              </form>
            </section>
          </div>
        </div>

        <footer className="mt-20 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Nathan Satge — Tous droits réservés
        </footer>
      </main>
    </>
  );
};