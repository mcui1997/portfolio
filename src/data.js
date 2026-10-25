// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  first: 'Michael',
  last: 'Cui',
  title: 'Software & Security Engineer',
  focus: ['Solutions Architecture', 'AI', 'Cloud Security'],
  photo: 'michael.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/michaelcui1997/',
    github: 'https://github.com/mcui1997',
  },
};

export const about = {
  // [plain part, highlighted part]
  heading: ['I build secure systems, and help people ', 'understand them'],
  intro:
    "I'm a software and security engineer with 4+ years at General Motors, working where engineering, product, and leadership meet. I've advised 10+ cross-functional teams on security architecture, led an enterprise SIEM rollout on Datadog, and improved ecommerce conversion by 15% through technical optimization.",
  bring:
    "Depth in cloud security, CI/CD pipelines, and threat modeling, plus the ability to explain any of it to whoever is in the room: developers, product owners, or executives. I run threat modeling workshops, present architecture recommendations, and walk teams through secure implementation, so they can make faster and more confident decisions.",
  currently:
    'M.S. in Cybersecurity at Johns Hopkins, specializing in AI-powered threat detection · CompTIA Security+ certified',
};

export const timeline = [
  { years: '2021 — Present', org: 'General Motors', role: 'Software Engineer' },
  { years: '2023 — 2026', org: 'Johns Hopkins University', role: 'M.S. in Cybersecurity | AI Specialization' },
  { years: '2020 — 2021', org: 'Charity Studio', role: 'Software Developer' },
  { years: '2016 — 2021', org: 'University of Texas at Austin', role: 'B.S. in Biomedical Engineering' },
];

export const projects = [
  {
    title: 'Secure Cloud Infrastructure Architecture',
    tags: 'IaC | Terraform | Azure',
    repo: 'secure-azure-app',
    status: 'in development',
    tech: 'Terraform, Azure, GitHub Actions, Checkov',
    category: 'Cloud Infrastructure Security',
    summary:
      'A reference Azure architecture that puts Zero Trust into practice: network segmentation, secrets management, and automated security scanning, all defined as code.',
    details:
      "I built it as a teaching tool as much as a deployment. It pairs infrastructure-as-code patterns and automated compliance validation with documentation written for the conversation you'd have with a team deciding on its cloud security strategy.",
  },
  {
    title: 'AWS Security Assessment Framework',
    tags: 'Python | AWS | Security Automation',
    repo: 'aws-security-scanner',
    status: 'in development',
    tech: 'Python, boto3, Terraform, AWS SDK',
    category: 'Cloud Security & DevSecOps',
    summary:
      'A Python scanner that finds misconfigurations across S3, EC2, IAM, and VPC, then helps teams close the gaps with automated Terraform remediation.',
    details:
      'It scans services in parallel to audit accounts at scale and produces a findings report with severity ratings, risk analysis, and clear fix recommendations, so the output is something a team can act on rather than just read. Remediation runs through Terraform and boto3 scripts.',
  },
  {
    title: 'Cloud-Based SOC & SIEM Lab',
    tags: 'Azure | Wazuh | SIEM | SOC',
    repo: 'azure-siem-lab',
    status: 'completed',
    tech: 'Azure, Wazuh, Sysmon, Ubuntu, Windows Server',
    category: 'Security Operations Center',
    summary:
      'A working Security Operations Center on Azure: Wazuh SIEM centralizing logs from three monitored endpoints (Ubuntu 22.04 and Windows Server 2022) on a segmented VNet, with File Integrity Monitoring and real-time event correlation.',
    details:
      'I wrote custom detection rules for SSH brute force mapped to MITRE ATT&CK T1110.001; they alerted within seconds of simulated credential-stuffing attempts. Sysmon and auditd feed the SIEM, giving visibility across both Linux and Windows hosts.',
  },
  {
    title: 'AI Spam Detection System',
    tags: 'Python | Scikit-learn | NLP',
    repo: 'spam-filter',
    status: 'completed',
    tech: 'Python, Scikit-learn, Streamlit, TF-IDF',
    category: 'Natural Language Processing',
    summary:
      'A Multinomial Naive Bayes spam classifier built on TF-IDF features, with a preprocessing pipeline that strips URLs and HTML and uses n-grams to catch both individual words and phrases.',
    details:
      'It reaches 95–98% accuracy on balanced datasets, tuned with Laplace smoothing and a 5,000-feature vocabulary with bigram support. A Streamlit interface shows the spam keywords the model learned, so you can see why it flags what it flags.',
  },
  {
    title: 'IoT Botnet Detection System',
    tags: 'Python | TensorFlow',
    repo: 'botnet-detector',
    status: 'completed',
    tech: 'Python, TensorFlow, Scikit-learn, Streamlit',
    category: 'Cybersecurity ML Research',
    summary:
      'A side-by-side comparison of classical machine learning and deep learning for detecting IoT botnet traffic, backed by an automated pipeline for preprocessing, class balancing, and feature engineering.',
    details:
      "A Streamlit app lets you train and test models live on the UNSW 2018 IoT Botnet dataset. ML models with engineered features reached 85–95% accuracy and DL models on raw data reached 80–90%, holding up on attack patterns they hadn't seen.",
  },
];

export const papers = [
  {
    kind: 'Publication',
    title: 'Vision Transformer with Few Shot Learning',
    paper: 'https://drive.google.com/file/d/18PNRFCJbhmeCsn_LwfRVt496Z7HSIWyk/view?usp=sharing',
    repo: 'vision-transformer',
    desc: 'What if network traffic were an image? This research converts packet payloads into visual representations with a novel 5-channel encoding, then classifies attacks using a Vision Transformer. On the CIC-IoT23 dataset it reached 93.30% accuracy across 9 attack types, showing that computer vision techniques can be a practical tool for threat detection.',
  },
  {
    kind: 'Gap Analysis',
    title: 'HIPAA NIST Gap Analysis',
    repo: 'hippa-nist-gap-analysis',
    desc: 'A plan for moving a hospital transplant center from role-based to attribute-based access control (RBAC → ABAC). Using NIST CSF 2.0 and NIST IR 8170, I mapped the gaps and laid out a phased rollout with a risk management framework that protects electronic health records and keeps HIPAA compliance, while balancing patient safety, security, and privacy.',
  },
  {
    kind: 'Vulnerability Assessment',
    title: 'Virtual Network Vulnerability Analysis',
    repo: 'network-vulnerability-analysis',
    desc: 'A hands-on vulnerability assessment of a virtualized network using OpenVAS and Kali Linux, covering the DMZ, internal networks, and DNS servers. Findings included authentication weaknesses, cryptographic failures, and default credentials, each paired with mitigations aligned to NIST, CIS, and ISO frameworks.',
  },
];
