import { profile, about, timeline, projects, papers } from './data.js';

const GH = 'https://github.com/mcui1997/';

// Real `xxd`-style dump of a string, 8 bytes per row.
function hexdump(text) {
  const bytes = [...new TextEncoder().encode(text + '\n')];
  const rows = [];
  for (let i = 0; i < bytes.length; i += 8) {
    const chunk = bytes.slice(i, i + 8);
    const hex = chunk
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    const ascii = chunk.map((b) => (b >= 32 && b < 127 ? String.fromCharCode(b) : '.')).join('');
    rows.push({ off: i.toString(16).padStart(8, '0'), hex, ascii });
  }
  return rows;
}

function Prompt({ children, note }) {
  return (
    <p className="prompt">
      <span className="dim">$</span> {children}
      {note && <span className="faint"> # {note}</span>}
    </p>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a href="#top" className="brand">
        <span className="accent">mcui</span>
        <span className="dim">@portfolio:~$</span>
      </a>
      <nav aria-label="Sections">
        <a href="#about">./about</a>
        <a href="#log">./log</a>
        <a href="#projects">./projects</a>
        <a href="#papers">./papers</a>
      </nav>
    </header>
  );
}

function Hero() {
  const dump = hexdump(profile.name);
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <Prompt>whoami</Prompt>
        <h1>
          {profile.name}
          <span className="cursor" aria-hidden="true" />
        </h1>
        <ul className="hero-lines">
          <li><span className="accent">&gt;</span> {profile.title}</li>
          <li><span className="accent">&gt;</span> {profile.focus}</li>
        </ul>
        <div className="hero-links">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">[linkedin]</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">[github]</a>
        </div>
      </div>

      <figure className="window">
        <div className="window-bar">
          <span className="dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="dim">~/{profile.photo}</span>
        </div>
        <div className="photo">
          <img
            src={`${import.meta.env.BASE_URL}${profile.photo}`}
            alt="Portrait of Michael Cui"
            width="377"
            height="399"
          />
        </div>
        <figcaption className="xxd">
          <span className="fg">$ xxd name.txt</span>
          {dump.map((r) => (
            <span key={r.off} className="xxd-row">
              {r.off}: <span className="fg">{r.hex.padEnd(19, ' ')}</span>  {r.ascii}
            </span>
          ))}
        </figcaption>
      </figure>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <Prompt>cat about.md</Prompt>
      <div className="split">
        <h2 className="about-h">
          # {about.heading[0]}
          <span className="accent">{about.heading[1]}</span>
        </h2>
        <div className="prose">
          <p>{about.intro}</p>
          <p>
            <span className="accent">## what i bring</span>
            <br />
            {about.bring}
          </p>
          <p>
            <span className="accent">## currently</span>
            <br />
            {about.currently}
          </p>
        </div>
      </div>
    </section>
  );
}

function Log() {
  return (
    <section id="log" className="section">
      <Prompt>git log --oneline career</Prompt>
      <ol className="log">
        {timeline.map((t) => (
          <li key={t.hash}>
            <span className="accent hash">{t.hash}</span>
            <span className="dim years">{t.years}</span>
            <span className="org">{t.org}</span>
            <span className="role">{t.role}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <Prompt note={`${projects.length} entries`}>ls ./projects</Prompt>
      <div className="cards">
        {projects.map((p, i) => {
          const done = p.status === 'completed';
          return (
            <article key={p.repo} className="card">
              <div className="card-top">
                <span className="dim">[{String(i + 1).padStart(2, '0')}] {p.repo}/</span>
                <span className={done ? 'accent' : 'warn'}>{done ? '●' : '◐'} {p.status}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="dim small">{p.tags}</p>
              <p className="body">{p.summary}</p>
              <details>
                <summary>cat README --more</summary>
                <p className="body">{p.details}</p>
              </details>
              <dl className="meta">
                <div><dt>stack:</dt> <dd>{p.tech}</dd></div>
                <div><dt>type:</dt> <dd>{p.category}</dd></div>
              </dl>
              <a className="clone" href={GH + p.repo} target="_blank" rel="noreferrer">
                $ git clone {p.repo} →
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Papers() {
  return (
    <section id="papers" className="section">
      <Prompt>ls ./papers</Prompt>
      <div className="papers">
        {papers.map((r) => (
          <div key={r.repo} className="paper">
            <div className="paper-head">
              <p className="dim small">{r.file}</p>
              <h3>{r.title}</h3>
              <div className="paper-links">
                {r.paper && <a href={r.paper} target="_blank" rel="noreferrer">[paper]</a>}
                <a href={GH + r.repo} target="_blank" rel="noreferrer">[github]</a>
              </div>
            </div>
            <p className="body">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <main>
        <Hero />
        <About />
        <Log />
        <Projects />
        <Papers />
      </main>
      <footer className="footer">
        <span>$ exit 0</span>
        <span>© {new Date().getFullYear()} Michael Cui</span>
        <a href="#top">cd ~ ↑</a>
      </footer>
    </div>
  );
}
