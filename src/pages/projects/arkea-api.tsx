'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github } from 'lucide-react';

export default function ArkeaApiPage() {
  return (
    <main className="bg-gray-900 text-gray-200 min-h-screen px-6 py-16 font-[Space Grotesk]">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl sm:text-4xl font-bold text-teal-400">
          API sécurisée – Arkéa Crédit Mutuel
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Développement d’une API REST sécurisée pour le partage d’informations sensibles entre banques partenaires.
          L’API intègre : <strong className="text-teal-300">authentification JWT</strong>, chiffrement des données,
          journalisation des accès, gestion des erreurs, et conformité RGPD.
        </p>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Technologies utilisées :</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Java & Spring Boot</li>
            <li>JWT, HTTPS</li>
            <li>Logging, Swagger, RGPD</li>
          </ul>
        </div>

        <div className="mt-6">
          <Image
            src="/test.gif"
            alt="Demo API Arkéa"
            width={800}
            height={400}
            className="rounded-lg border border-gray-700 shadow-[0_0_20px_2px_#14b8a6]"
          />
        </div>

        <div className="flex items-center gap-4 mt-8">
          <a
            href="https://github.com/ton-github/arkea-api"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-teal-400 border border-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition"
          >
            <Github size={18} />
            Voir le code sur GitHub
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-teal-300 transition"
          >
            <ArrowLeft size={16} />
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}