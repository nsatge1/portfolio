const projects = [
  {
    slug: "phishaware",
    title: "PhishAware – App mobile anti-phishing",
    description: `Application mobile éducative pour sensibiliser les utilisateurs au phishing. Analyse de message, quiz interactif, actualités sur les cybermenaces.`,
    stack: ["React Native", "Node.js", "Regex", "Sécurité", "Design mobile"],
    image: "/phi.png",
    githubUrl: "https://github.com/nsatge1/PhishawareV3"
  },
  {
    slug: "router-audit",
    title: "Audit Réseau – Routeur Wi-Fi",
    description: `Audit complet d’un routeur domestique via Nmap, Wireshark et tests de ports/services. Rapport d’analyse des failles et recommandations de mitigation.`,
    stack: ["Kali Linux", "Nmap", "Wireshark", "TCP/IP"],
    image: "/new.png",
  },
  {
    slug: "owasp-audit",
    title: "Audit OWASP – Application vulnérable",
    description: `Identification et correction des 10 failles principales de l’OWASP Top 10. Rapport avec preuve de concept sur chaque vulnérabilité exploitée.`,
    stack: ["OWASP", "BurpSuite", "ZAP", "Pentest"],
    image: "/test.png",
  }
];

export default projects;