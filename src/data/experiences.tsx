const experiences = [
  {
    company: 'INRIA Startup Studio',
    logo: '/inria-logo.png',
    role: 'Assistant ingénieur Cybersécurité Réseaux',
    dates: 'Juin — Août 2024',
    description: `
  Conception et développement d’une <a href="https://svelte.dev/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">application desktop Svelte</a> dans un environnement multiposte pour la gestion de réseaux sécurisés.
  Contribution à la mise en œuvre d’une architecture <a href="https://learn.microsoft.com/en-us/security/zero-trust/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">Zero Trust</a> avec tunnel VPN et authentification basée sur certificats <a href="https://www.cloudflare.com/fr-fr/learning/ssl/what-is-public-key-infrastructure/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">PKI</a>.
  <br />
  Intégration d’un pipeline complet de tests et de déploiement avec <a href="https://docs.gitlab.com/ee/ci/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">GitLab CI/CD</a>, en assurant le versioning, les tests automatisés et les revues de code.
  Collaboration étroite avec le CTO dans un contexte agile et de prototypage rapide.
`,
    skills: [
      { label: 'Svelte', url: 'https://svelte.dev/' },
      { label: 'JavaScript', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
      { label: 'Node.js', url: 'https://nodejs.org/en/' },
      { label: 'PKI', url: 'https://www.cloudflare.com/fr-fr/learning/ssl/what-is-public-key-infrastructure/' },
      { label: 'Zero Trust', url: 'https://learn.microsoft.com/en-us/security/zero-trust/' },
      { label: 'GitLab CI/CD', url: 'https://docs.gitlab.com/ee/ci/' },
    ],
    link: 'https://www.inria.fr/',
  },
  {
    company: 'Arkéa Crédit Mutuel',
    logo: '/arkea-logo.png',
    role: 'Analyste Sécurité Applicative et Conformité',
    dates: 'Juin — Août 2023',
    description: `
    Participation au développement d’une <a href="https://spring.io/projects/spring-boot" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">API REST sécurisée</a> destinée à l’échange d’informations bancaires sensibles entre entités du groupe.
    Implémentation de l’authentification par <a href="https://jwt.io/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">JWT</a>, chiffrement des données sensibles, journalisation, gestion des erreurs et auditabilité.
    <br />
    Application des standards de sécurité <a href="https://owasp.org/www-project-api-security/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">OWASP API Security</a>, documentation avec <a href="https://www.postman.com/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">Postman</a> et mise en conformité avec le <a href="https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">RGPD</a>.
    Présentation de l’avancement lors de comités de pilotage avec les équipes fonctionnelles et de sécurité.
  `,
    skills: [
      { label: 'Java', url: 'https://dev.java/' },
      { label: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
      { label: 'JWT', url: 'https://jwt.io/' },
      { label: 'Sécurité API', url: 'https://owasp.org/www-project-api-security/' },
      { label: 'RGPD', url: 'https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on' },
      { label: 'Postman', url: 'https://www.postman.com/' },
    ],
    link: 'https://www.arkea.com/',
  },
  {
    company: 'UQAC',
    logo: '/Logo-UQAC.png',
    role: 'Chargé de Travaux Dirigés, Bases de Données',
    dates: 'Janvier — Mai 2025',
    description: `
      Animation des travaux dirigés du cours d’introduction aux bases de données relationnelles pour étudiants de premier cycle.
      Encadrement sur les langages <a href="https://sql.sh/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">SQL</a>, <a href="https://dev.mysql.com/" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">MySQL</a> et <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/introduction-to-pl-sql.html" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">PL/SQL</a>, ainsi que sur la modélisation de bases (MER, MR).
      <br />
      Introduction à la protection des données dans les applications : gestion des droits, principes de <a href="https://owasp.org/www-project-top-ten/2017/A1_2017-Injection" target="_blank" class="text-teal-400 hover:underline hover:text-teal-300">prévention des injections SQL</a>, bonnes pratiques de structuration et d’accès sécurisé.
      <br />
    `,
    skills: [
      { label: 'SQL', url: 'https://sql.sh/' },
      { label: 'MySQL', url: 'https://dev.mysql.com/' },
      { label: 'PL/SQL', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/introduction-to-pl-sql.html' },
      { label: 'Modèle relationnel', url: 'https://fr.wikipedia.org/wiki/Mod%C3%A8le_relationnel' },
      { label: 'Sécurité des données', url: 'https://www.cnil.fr/fr/la-securite-des-donnees' },
      { label: 'Prévention des injections SQL', url: 'https://owasp.org/www-project-top-ten/2017/A1_2017-Injection' },
      { label: 'Sensibilisation cybersécurité', url: 'https://www.ssi.gouv.fr/entreprise/bonnes-pratiques/' }
    ],
    link: 'https://www.uqac.ca/',
  }
];

export default experiences;