// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'michael cui',
  title: 'software & security engineer',
  focus: 'solutions architecture · ai · cloud security',
  photo: 'michael.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/michaelcui1997/',
    github: 'https://github.com/mcui1997',
  },
};

export const about = {
  heading: ['Translating Technical Complexity into ', 'Customer Value'],
  intro:
    "I translate technical complexity into business and customer value. Software and security engineer with 4+ years at General Motors, partnering across engineering, product, and leadership teams to design scalable solutions. I've advised 10+ cross-functional teams on security architecture, led enterprise SIEM implementation using Datadog, and improved ecommerce conversion rates by 15% through technical optimization.",
  bring:
    "Technical depth in cloud security, CI/CD pipelines, and threat modeling—combined with the ability to communicate complex concepts to any audience, from developers to executives. Whether it's conducting threat modeling workshops, presenting architecture recommendations, or guiding teams through secure implementation, I help organizations make faster, more confident technical decisions.",
  currently:
    'Pursuing M.S. in Cybersecurity at Johns Hopkins, specializing in AI-powered threat detection | CompTIA Security+ certified',
};

export const timeline = [
  { hash: 'a3f9e21', years: '2021–present', org: 'General Motors', role: 'Software Engineer' },
  { hash: '7c1d04b', years: '2023–2026', org: 'Johns Hopkins University', role: 'M.S. in Cybersecurity | AI Specialization' },
  { hash: 'e52b8a0', years: '2020–2021', org: 'Charity Studio', role: 'Software Developer' },
  { hash: '19d6f3c', years: '2016–2021', org: 'University of Texas at Austin', role: 'B.S. in Biomedical Engineering' },
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
      'Production-ready Azure architecture demonstrating enterprise security best practices for cloud deployments. Built as a reference implementation to help teams understand and implement Zero Trust principles—including network segmentation, secrets management, and automated security scanning.',
    details:
      'This project showcases my ability to design secure, scalable cloud solutions and explain complex security concepts clearly. Features include automated compliance validation, infrastructure-as-code patterns, and comprehensive documentation—making it a valuable tool for advisory discussions with customers evaluating cloud security strategies.',
  },
  {
    title: 'AWS Security Assessment Framework',
    tags: 'Python | AWS | Security Automation',
    repo: 'aws-security-scanner',
    status: 'in development',
    tech: 'Python, boto3, Terraform, AWS SDK',
    category: 'Cloud Security & DevSecOps',
    summary:
      'Python-based tool for rapidly assessing AWS security posture—identifying misconfigurations across S3, EC2, IAM, and VPC. Built to help teams quickly understand their security gaps and take action through automated Terraform remediation scripts.',
    details:
      'Features comprehensive security assessment capabilities with automated remediation through Terraform and boto3 scripts. Generates detailed findings reports with severity ratings, risk analysis, and actionable fix recommendations. Implements multi-service scanning with parallel execution for efficient cloud security auditing at scale.',
  },
  {
    title: 'Cloud-Based SOC & SIEM Lab',
    tags: 'Azure | Wazuh | SIEM | SOC',
    repo: 'azure-siem-lab',
    status: 'completed',
    tech: 'Azure, Wazuh, Sysmon, Ubuntu, Windows Server',
    category: 'Security Operations Center',
    summary:
      'Production-grade Security Operations Center environment deployed on Microsoft Azure featuring Wazuh SIEM for centralized threat detection and log analysis. Architected secure VNet infrastructure with three monitored endpoints running Ubuntu 22.04 and Windows Server 2022 agents, implementing File Integrity Monitoring and real-time security event correlation.',
    details:
      'Developed custom detection rules for SSH brute force attacks with MITRE ATT&CK mapping (T1110.001), achieving immediate alerting within seconds of simulated credential stuffing attempts. Demonstrated advanced log analysis capabilities using Sysmon and auditd integration for comprehensive visibility across multi-platform environments with proper network segmentation and security controls.',
  },
  {
    title: 'AI Spam Detection System',
    tags: 'Python | Scikit-learn | NLP',
    repo: 'spam-filter',
    status: 'completed',
    tech: 'Python, Scikit-learn, Streamlit, TF-IDF',
    category: 'Natural Language Processing',
    summary:
      'Machine learning spam classifier utilizing Multinomial Naive Bayes with TF-IDF feature extraction for automated email and message filtering. Implements comprehensive text preprocessing pipeline including URL removal, HTML sanitization, and n-gram analysis to capture both individual words and phrase patterns.',
    details:
      'Developed interactive Streamlit interface with dynamic spam keyword extraction showing learned model patterns. Achieves 95-98% classification accuracy on balanced datasets through optimized hyperparameters including Laplace smoothing and strategic vocabulary filtering with 5,000 max features and bigram support.',
  },
  {
    title: 'IoT Botnet Detection System',
    tags: 'Python | TensorFlow',
    repo: 'botnet-detector',
    status: 'completed',
    tech: 'Python, TensorFlow, Scikit-learn, Streamlit',
    category: 'Cybersecurity ML Research',
    summary:
      'Comparative analysis system implementing both traditional Machine Learning and Deep Learning approaches for detecting IoT botnet behavior in network traffic. Features comprehensive data pipeline with automated preprocessing, class balancing, and feature engineering capabilities.',
    details:
      'Built interactive Streamlit application enabling real-time model training and testing on UNSW 2018 IoT Botnet Dataset. Achieved 85-95% accuracy with ML models using engineered features and 80-90% with DL models processing raw data, demonstrating production-viable detection rates across unseen attack patterns.',
  },
];

export const papers = [
  {
    file: 'vision-transformer.pdf',
    title: 'Vision Transformer with Few Shot Learning — Publication',
    paper: 'https://drive.google.com/file/d/18PNRFCJbhmeCsn_LwfRVt496Z7HSIWyk/view?usp=sharing',
    repo: 'vision-transformer',
    desc: 'Explored applying Vision Transformers to network security by converting packet payloads into visual representations for attack classification. Achieved 93.30% accuracy across 9 attack types using a novel 5-channel encoding method on the CIC-IoT23 dataset. This research demonstrates that treating network traffic as images enables sophisticated computer vision techniques to effectively detect cybersecurity threats.',
  },
  {
    file: 'hippa-nist-gap-analysis.md',
    title: 'HIPPA NIST Gap Analysis',
    repo: 'hippa-nist-gap-analysis',
    desc: 'Enterprise cybersecurity analysis for implementing Attribute-Based Access Control (ABAC) in a hospital transplant center environment. Conducted comprehensive gap analysis using NIST Cybersecurity Framework 2.0 and NIST IR 8170 to transition from RBAC to ABAC, enhancing security for electronic health records while maintaining HIPAA compliance. Developed phased implementation strategy with risk management framework balancing patient safety, security, and privacy.',
  },
  {
    file: 'network-vulnerability-analysis.md',
    title: 'Virtual Network Vulnerability Analysis',
    repo: 'network-vulnerability-analysis',
    desc: 'Comprehensive vulnerability assessment of a virtualized network environment using OpenVAS and Kali Linux. Conducted security analysis across DMZ, internal networks, and DNS servers, identifying critical vulnerabilities including authentication weaknesses, cryptographic failures, and default credentials. Developed detailed mitigation strategies aligned with NIST, CIS, and ISO security frameworks.',
  },
];
