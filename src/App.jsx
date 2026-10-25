import { profile, about, timeline, projects, papers } from './data.js';

const GH = 'https://github.com/mcui1997/';
const photo = `${import.meta.env.BASE_URL}${profile.photo}`;

function Label({ n, children }) {
  return (
    <p className="label">
      <span className="red">{n}</span> / {children}
    </p>
  );
}

// Decorative network map with the portrait as the center node.
function NodeMap() {
  return (
    <div className="nodemap">
      <svg viewBox="0 0 460 420" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <line x1="230" y1="210" x2="70" y2="70" />
          <line x1="230" y1="210" x2="405" y2="96" />
          <line x1="230" y1="210" x2="250" y2="392" />
          <line x1="70" y1="70" x2="22" y2="196" />
          <line x1="70" y1="70" x2="180" y2="18" />
          <line x1="405" y1="96" x2="446" y2="236" />
          <line x1="405" y1="96" x2="330" y2="16" />
          <line x1="250" y1="392" x2="96" y2="372" />
          <line x1="250" y1="392" x2="404" y2="356" />
          <line x1="22" y1="196" x2="96" y2="372" strokeDasharray="3 5" />
          <line x1="446" y1="236" x2="404" y2="356" strokeDasharray="3 5" />
        </g>
        <g fill="var(--bg)" stroke="currentColor" strokeWidth="1.5">
          <circle cx="70" cy="70" r="7" />
          <circle cx="405" cy="96" r="7" />
          <circle cx="250" cy="392" r="7" />
        </g>
        <g fill="currentColor">
          <circle cx="22" cy="196" r="4" />
          <circle cx="180" cy="18" r="4" />
          <circle cx="446" cy="236" r="4" />
          <circle cx="330" cy="16" r="4" />
          <circle cx="96" cy="372" r="4" />
          <circle cx="404" cy="356" r="4" />
        </g>
        <circle cx="230" cy="210" r="132" fill="none" stroke="var(--red)" strokeWidth="1" />
        <g className="maplabels" fill="currentColor">
          <text x="36" y="50">CLOUD SEC</text>
          <text x="408" y="72">AI / ML</text>
          <text x="264" y="414">ARCHITECTURE</text>
        </g>
      </svg>
      <img src={photo} alt="Michael Cui" width="377" height="399" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="label">{profile.title}</p>
        <h1>
          {profile.first}
          <br />
          {profile.last}
        </h1>
        <ul className="pills" aria-label="Focus areas">
          {profile.focus.map((f, i) => (
            <li key={f} className={i === profile.focus.length - 1 ? 'pill solid' : 'pill'}>{f}</li>
          ))}
        </ul>
        <div className="links">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
      <NodeMap />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section split">
      <Label n="01">About</Label>
      <div className="main">
        <h2 className="statement">
          {about.heading[0]}
          <span className="red">{about.heading[1]}</span>.
        </h2>
        <p className="lead">{about.intro}</p>
        <p className="currently">
          <span className="dot" aria-hidden="true" />
          <span><strong>Currently:</strong> {about.currently}</span>
        </p>
        <details className="more">
          <summary>What I bring</summary>
          <p>{about.bring}</p>
        </details>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section id="path" className="section split">
      <Label n="02">Path</Label>
      <ol className="main path">
        {timeline.map((t, i) => (
          <li key={t.org} className={i === 0 ? 'now' : ''}>
            <span className="mono muted">{t.years}</span>
            <span className="org">{t.org}</span>
            <span className="muted">{t.role}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Row({ n, title, sub, status, done, children }) {
  return (
    <details className="row">
      <summary>
        <span className="mono muted num">
          <span className={done ? 'red' : 'hollow'} aria-hidden="true">{done ? '●' : '○'}</span> {n}
        </span>
        <span className="row-title">
          <span className="t">{title}</span>
          <span className="mono muted sub">{sub}</span>
        </span>
        {status && <span className="mono muted status">{status}</span>}
        <span className="toggle" aria-hidden="true" />
      </summary>
      <div className="row-body">{children}</div>
    </details>
  );
}

function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <Label n="03">Featured Projects</Label>
        <p className="mono muted legend">
          <span><span className="red">●</span> Completed</span>
          <span>○ In Development</span>
        </p>
      </div>
      <div className="rows">
        {projects.map((p, i) => {
          const done = p.status === 'completed';
          return (
            <Row
              key={p.repo}
              n={String(i + 1).padStart(2, '0')}
              title={p.title}
              sub={p.tags}
              status={done ? 'Completed' : 'In Development'}
              done={done}
            >
              <div className="body-text">
                <p>{p.summary}</p>
                <p>{p.details}</p>
              </div>
              <dl className="facts">
                <div><dt>Technologies</dt><dd>{p.tech}</dd></div>
                <div><dt>Category</dt><dd>{p.category}</dd></div>
                <div><dt>Source</dt><dd><a href={GH + p.repo} target="_blank" rel="noreferrer">GitHub ↗</a></dd></div>
              </dl>
            </Row>
          );
        })}
      </div>
    </section>
  );
}

function Papers() {
  return (
    <section id="papers" className="section">
      <div className="section-head">
        <Label n="04">Papers</Label>
      </div>
      <div className="rows">
        {papers.map((r, i) => (
          <Row key={r.repo} n={String(i + 1).padStart(2, '0')} title={r.title} sub={r.kind} done>
            <div className="body-text">
              <p>{r.desc}</p>
            </div>
            <dl className="facts">
              {r.paper && (
                <div><dt>Paper</dt><dd><a href={r.paper} target="_blank" rel="noreferrer">Read the paper ↗</a></dd></div>
              )}
              <div><dt>Source</dt><dd><a href={GH + r.repo} target="_blank" rel="noreferrer">GitHub ↗</a></dd></div>
            </dl>
          </Row>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="wrap">
      <header className="topbar">
        <a href="#top" className="brand">
          <span className="dot" aria-hidden="true" />
          M. Cui / Node 0
        </a>
        <nav aria-label="Sections">
          <a href="#about"><span className="red">01</span> About</a>
          <a href="#path"><span className="red">02</span> Path</a>
          <a href="#work"><span className="red">03</span> Work</a>
          <a href="#papers"><span className="red">04</span> Papers</a>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Path />
        <Projects />
        <Papers />
      </main>
      <footer className="footer">
        <span>Copyright © 2026 by Michael Cui</span>
        <a href="#top">To top ↑</a>
      </footer>
    </div>
  );
}
