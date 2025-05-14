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
            <h1 className="text-4xl sm:text-5xl font-bold">Nathan Satge</h1>
            <h2 className="text-lg sm:text-xl text-gray-400">
              Étudiant en cybersécurité · ENSEIRB-MATMECA & UQAC
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Je développe des solutions sécurisées, conformes aux normes RGPD et aux architectures Zero Trust.
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
              <h3 className="text-xl font-semibold text-white mb-2">About</h3>
              <p className="text-sm text-gray-300">
                Je suis actuellement en dernière année d’école d’ingénieurs, spécialisé en cybersécurité, avec des projets réalisés dans le domaine des API sécurisées, VPN Zero Trust, et IA & conformité.
              </p>
            </section>

            <section id="experience" className="scroll-mt-32">
              <h3 className="text-xl font-semibold text-white mb-4">Expériences</h3>
              <div className="space-y-8 ">
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
                      <p className="text-sm text-gray-400 mt-1">{exp.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-400">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="text-teal-400 bg-gray-900 px-2 py-1 rounded border border-teal-400 hover:bg-teal-500 hover:text-white transition-colors duration-300">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="scroll-mt-32">
              <h3 className="text-xl font-semibold text-white mb-4">Projets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, index) => (
                  <Link href={`/projects/${proj.slug}`} key={index}>
                    <div
                      className="bg-gray-800 hover:shadow-lg  hover:scale-[1.02] transition-transform duration-300 p-4 rounded-lg border border-gray-700 cursor-pointer group"
                    >
                      <h4 className="text-gray-300 group-hover:text-teal-400 font-bold text-lg mb-1 transition-colors duration-300">{proj.title}</h4>
                      <p className="text-sm text-gray-300 mb-2">{proj.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                        {proj.stack.map((tech, i) => (
                          <span key={i} className="text-teal-400 bg-gray-800 px-2 py-1 rounded border border-teal-400 hover:bg-teal-500 hover:text-white transition-colors duration-300">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="skills" className="scroll-mt-32">
              <h3 className="text-xl font-semibold text-white mb-6">Compétences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300">
                
                <div className="bg-gray-800 hover:scale-[1.02] transition-transform duration-300 p-4 rounded-lg border border-gray-700 group">
                  <h4 className="text-gray-200 group-hover:text-teal-400 font-bold mb-2">Développement</h4>
                  <ul className="space-y-1">
                    <li>Java / Spring Boot</li>
                    <li>JavaScript (Node.js, Svelte)</li>
                    <li>Python / Bash</li>
                    <li>HTML / CSS</li>
                  </ul>
                </div>

                <div className="bg-gray-800 hover:scale-[1.02] transition-transform duration-300 p-4 rounded-lg border border-gray-700 group">
                  <h4 className="text-gray-200 group-hover:text-teal-400 font-bold mb-2">Cybersécurité</h4>
                  <ul className="space-y-1">
                    <li>OWASP Top 10, BurpSuite, Nmap</li>
                    <li>Tests d’intrusion / Kali Linux</li>
                    <li>PKI / Authentification par certificat</li>
                    <li>RGPD / ISO 27001 / IA Act</li>
                  </ul>
                </div>

                <div className="bg-gray-800  hover:scale-[1.02] transition-transform duration-300 p-4 rounded-lg border border-gray-700 group">
                  <h4 className="text-gray-200 font-bold mb-2 group-hover:text-teal-400">DevOps & Cloud</h4>
                  <ul className="space-y-1">
                    <li>Git, GitLab CI/CD</li>
                    <li>Docker / Kubernetes</li>
                    <li>Linux & Windows Server</li>
                    <li>AWS / Azure (bases)</li>
                  </ul>
                </div>

              </div>
            </section>

            <section id="contact" className="scroll-mt-32">
              <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
              <form
                action="https://formsubmit.co/ton@email.com"
                method="POST"
                className="grid gap-4 max-w-xl"
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_next" value="https://tonsite.vercel.app/merci" />

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