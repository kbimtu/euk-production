import { Hono } from 'hono'
import { renderer } from './renderer'
import { Nav, Footer } from './components'

const app = new Hono()
app.use(renderer)

// ─── HOMEPAGE ────────────────────────────────────────────────────────────────
app.get('/', (c) => {
  return c.render(
    <>
      <Nav active="home" />

      {/* HERO */}
      <section class="hero">
        <div class="hero-bg" />
        <div class="hero-grid" />
        <div class="hero-konigsberg">
          <div class="hero-konigsberg-overlay" />
        </div>
        <canvas id="hero-network-canvas" class="hero-network" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" />

        <div class="hero-body">
          <div class="container">
            <div class="hero-content-wrap">
              <div class="hero-left">
                <div class="hero-eyebrow">Est. 2024 · Tallinn, Estonia · Virtual-Global</div>
                <h1 class="hero-title">
                  Eulerus Universität<br />
                  <em>Königsberg</em>
                </h1>
                <p class="hero-subtitle">
                  A European virtual university at the intersection of science, engineering, mathematics, arts, and technovation — rooted in the intellectual heritage of Königsberg, built for the connected world.
                </p>
                <div class="hero-actions">
                  <a href="/admissions" class="btn btn-gold btn-lg">
                    <i class="fas fa-graduation-cap" /> Apply Now
                  </a>
                  <a href="/faculties" class="btn btn-outline btn-lg">
                    <i class="fas fa-book-open" /> Explore Faculties
                  </a>
                </div>
                <div class="hero-stats">
                  <div class="hero-stat">
                    <span class="hero-stat-num" data-counter="5">5</span>
                    <span class="hero-stat-label">Faculties</span>
                  </div>
                  <div class="hero-stat">
                    <span class="hero-stat-num" data-counter="38">38</span>
                    <span class="hero-stat-label">Programmes</span>
                  </div>
                  <div class="hero-stat">
                    <span class="hero-stat-num" data-counter="12">12</span>
                    <span class="hero-stat-label">Research Labs</span>
                  </div>
                  <div class="hero-stat">
                    <span class="hero-stat-num" data-counter="47">47</span>
                    <span class="hero-stat-label">Partner Institutions</span>
                  </div>
                </div>
              </div>

              <div class="hero-paths">
                <a href="/faculties" class="hero-path-card">
                  <div class="hero-path-left">
                    <div class="hero-path-icon"><i class="fas fa-university" /></div>
                    <div>
                      <span class="hero-path-label">Explore Faculties</span>
                      <span class="hero-path-sub">5 faculties · 38 programmes</span>
                    </div>
                  </div>
                  <i class="fas fa-arrow-right hero-path-arrow" />
                </a>
                <a href="/admissions" class="hero-path-card">
                  <div class="hero-path-left">
                    <div class="hero-path-icon"><i class="fas fa-file-alt" /></div>
                    <div>
                      <span class="hero-path-label">Admissions</span>
                      <span class="hero-path-sub">Rolling intake · All backgrounds</span>
                    </div>
                  </div>
                  <i class="fas fa-arrow-right hero-path-arrow" />
                </a>
                <a href="/virtual-campus" class="hero-path-card">
                  <div class="hero-path-left">
                    <div class="hero-path-icon"><i class="fas fa-laptop-code" /></div>
                    <div>
                      <span class="hero-path-label">Virtual Campus</span>
                      <span class="hero-path-sub">Labs, lectures, archives</span>
                    </div>
                  </div>
                  <i class="fas fa-arrow-right hero-path-arrow" />
                </a>
                <a href="/research" class="hero-path-card">
                  <div class="hero-path-left">
                    <div class="hero-path-icon"><i class="fas fa-project-diagram" /></div>
                    <div>
                      <span class="hero-path-label">Research &amp; KBI</span>
                      <span class="hero-path-sub">Königsberger Bridges Institute</span>
                    </div>
                  </div>
                  <i class="fas fa-arrow-right hero-path-arrow" />
                </a>
                <a href="/about" class="hero-path-card">
                  <div class="hero-path-left">
                    <div class="hero-path-icon"><i class="fas fa-landmark" /></div>
                    <div>
                      <span class="hero-path-label">About EUK</span>
                      <span class="hero-path-sub">Mission, legal status, governance</span>
                    </div>
                  </div>
                  <i class="fas fa-arrow-right hero-path-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KÖNIGSBERG VISUAL SECTION */}
      <section class="konigsberg-section section">
        <div class="konigsberg-bg-pattern" aria-hidden="true" />
        <div class="container">
          <div class="konigsberg-grid">
            <div class="fade-up">
              <div class="section-eyebrow">The Heritage</div>
              <h2 class="section-title">Rooted in Königsberg</h2>
              <p class="lead">
                Königsberg — the city of Immanuel Kant, Leonhard Euler, and the Seven Bridges — is one of the most intellectually fertile places in the history of Western thought. It gave us the categorical imperative, the foundations of graph theory, and centuries of rigorous scholarship.
              </p>
              <p style="color:var(--text-mid);line-height:1.75;">
                EUK draws its name and spirit from this tradition. The Pregel river still flows through Kaliningrad where Königsberg once stood, but the intellectual bridges it inspired now span every field of human knowledge. We inherit that spirit: the courage to reason from first principles, to connect the seemingly unconnected, and to let curiosity define the edges of inquiry.
              </p>
              <div class="konigsberg-bridges mt-md">
                <span class="bridge-tag"><i class="fas fa-link" /> Seven Bridges Problem</span>
                <span class="bridge-tag"><i class="fas fa-atom" /> Immanuel Kant</span>
                <span class="bridge-tag"><i class="fas fa-calculator" /> Leonhard Euler</span>
                <span class="bridge-tag"><i class="fas fa-project-diagram" /> Graph Theory</span>
                <span class="bridge-tag"><i class="fas fa-scroll" /> Albertina 1544</span>
              </div>
              <a href="/about" class="btn btn-outline-dark mt-lg" style="width:auto;display:inline-flex;">Learn About Our Heritage</a>
            </div>
            <div class="konigsberg-visual fade-up fade-up-delay-2">
              <svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;">
                {/* Background */}
                <rect width="600" height="450" fill="#001e33"/>
                {/* Water / Pregel river */}
                <ellipse cx="300" cy="225" rx="120" ry="60" fill="#003d5c" opacity="0.7"/>
                <ellipse cx="300" cy="225" rx="90" ry="42" fill="#004870" opacity="0.5"/>
                {/* Islands */}
                <ellipse cx="230" cy="200" rx="55" ry="35" fill="#1a3a5c"/>
                <ellipse cx="370" cy="250" rx="55" ry="35" fill="#1a3a5c"/>
                {/* Main land masses */}
                <rect x="0" y="0" width="600" height="145" fill="#0d2b42" rx="0"/>
                <rect x="0" y="315" width="600" height="135" fill="#0d2b42" rx="0"/>
                <rect x="0" y="0" width="140" height="450" fill="#0d2b42" rx="0"/>
                <rect x="460" y="0" width="140" height="450" fill="#0d2b42" rx="0"/>
                {/* Buildings on north bank */}
                <rect x="60" y="85" width="22" height="60" fill="#1a4a6a"/>
                <rect x="90" y="75" width="18" height="70" fill="#1d5278"/>
                <rect x="116" y="90" width="15" height="55" fill="#1a4a6a"/>
                <rect x="50" y="70" width="8" height="75" fill="#0d3a58"/>
                {/* Cathedral - Königsberg Dom */}
                <rect x="270" y="155" width="60" height="45" fill="#1a4060" rx="2"/>
                <polygon points="270,155 300,128 330,155" fill="#1d5278"/>
                <rect x="295" y="128" width="10" height="30" fill="#c5a028" opacity="0.5"/>
                {/* Tower spires */}
                <rect x="268" y="140" width="12" height="35" fill="#1a4060"/>
                <polygon points="268,140 274,120 280,140" fill="#1d5278"/>
                <rect x="320" y="140" width="12" height="35" fill="#1a4060"/>
                <polygon points="320,140 326,120 332,140" fill="#1d5278"/>
                {/* Seven Bridges */}
                {/* Bridge 1: North to Kneiphof Island */}
                <rect x="210" y="143" width="12" height="38" fill="#c5a028" opacity="0.7" rx="2"/>
                {/* Bridge 2: North to Kneiphof */}
                <rect x="240" y="143" width="12" height="38" fill="#c5a028" opacity="0.7" rx="2"/>
                {/* Bridge 3: Kneiphof to South */}
                <rect x="220" y="233" width="12" height="38" fill="#c5a028" opacity="0.7" rx="2"/>
                {/* Bridge 4: Lomse to South */}
                <rect x="355" y="283" width="12" height="38" fill="#c5a028" opacity="0.6" rx="2"/>
                {/* Bridge 5: Lomse to North */}
                <rect x="360" y="143" width="12" height="38" fill="#c5a028" opacity="0.6" rx="2"/>
                {/* Bridge 6: East crossing */}
                <rect x="450" y="210" width="38" height="12" fill="#c5a028" opacity="0.5" rx="2"/>
                {/* Bridge 7: West crossing */}
                <rect x="112" y="210" width="38" height="12" fill="#c5a028" opacity="0.5" rx="2"/>
                {/* Water reflections */}
                <line x1="180" y1="230" x2="250" y2="210" stroke="rgba(197,160,40,0.1)" stroke-width="1"/>
                <line x1="350" y1="220" x2="420" y2="240" stroke="rgba(197,160,40,0.1)" stroke-width="1"/>
                {/* Graph theory overlay — nodes */}
                <circle cx="300" cy="195" r="8" fill="#c5a028" opacity="0.8"/>
                <circle cx="230" cy="135" r="7" fill="#c5a028" opacity="0.6"/>
                <circle cx="370" cy="135" r="7" fill="#c5a028" opacity="0.6"/>
                <circle cx="230" cy="310" r="7" fill="#c5a028" opacity="0.6"/>
                <circle cx="370" cy="310" r="7" fill="#c5a028" opacity="0.6"/>
                {/* Graph edges */}
                <line x1="300" y1="195" x2="230" y2="135" stroke="rgba(197,160,40,0.35)" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="300" y1="195" x2="370" y2="135" stroke="rgba(197,160,40,0.35)" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="300" y1="195" x2="230" y2="310" stroke="rgba(197,160,40,0.35)" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="300" y1="195" x2="370" y2="310" stroke="rgba(197,160,40,0.35)" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="230" y1="135" x2="370" y2="135" stroke="rgba(197,160,40,0.2)" stroke-width="1" stroke-dasharray="3 3"/>
                <line x1="230" y1="310" x2="370" y2="310" stroke="rgba(197,160,40,0.2)" stroke-width="1" stroke-dasharray="3 3"/>
                {/* Stars / atmosphere */}
                <circle cx="80" cy="35" r="1" fill="white" opacity="0.4"/>
                <circle cx="150" cy="55" r="1.2" fill="white" opacity="0.3"/>
                <circle cx="490" cy="28" r="1" fill="white" opacity="0.4"/>
                <circle cx="540" cy="60" r="0.8" fill="white" opacity="0.3"/>
                <circle cx="410" cy="42" r="1.2" fill="white" opacity="0.35"/>
                {/* Label */}
                <text x="300" y="430" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="rgba(197,160,40,0.5)" font-style="italic">Königsberg — Seven Bridges · Pregel River · 1736</text>
              </svg>
              <div class="konigsberg-visual-caption">
                Königsberg, Prussia — the city on the Pregel River whose seven bridges inspired Euler's founding theorem of graph theory, 1736
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTIES */}
      <section class="faculties-section section">
        <div class="container">
          <div class="section-header fade-up">
            <div class="section-eyebrow">Academic Structure</div>
            <h2 class="section-title">Five Faculties of Inquiry</h2>
            <p class="section-lead">EUK organises scholarship across five faculties, each a node in an interconnected network of knowledge — distinct in identity, unified in rigor.</p>
          </div>
          <div class="faculties-grid fade-up">
            <a href="/faculties/science" class="faculty-card">
              <div class="faculty-card-icon"><i class="fas fa-flask" /></div>
              <div class="faculty-card-name">Natural Sciences</div>
              <p class="faculty-card-desc">Physics, chemistry, biology, earth sciences, and their intersections — inquiry rooted in empirical rigour.</p>
              <span class="faculty-card-link">Explore <i class="fas fa-arrow-right" /></span>
            </a>
            <a href="/faculties/technovation" class="faculty-card">
              <div class="faculty-card-icon"><i class="fas fa-microchip" /></div>
              <div class="faculty-card-name">Technovation</div>
              <p class="faculty-card-desc">The convergence of technology and innovation — AI, digital systems, entrepreneurship, and future-making.</p>
              <span class="faculty-card-link">Explore <i class="fas fa-arrow-right" /></span>
            </a>
            <a href="/faculties/engineering" class="faculty-card">
              <div class="faculty-card-icon"><i class="fas fa-cogs" /></div>
              <div class="faculty-card-name">Engineering</div>
              <p class="faculty-card-desc">Applied sciences at the frontier of systems, structures, computation, and the built environment.</p>
              <span class="faculty-card-link">Explore <i class="fas fa-arrow-right" /></span>
            </a>
            <a href="/faculties/arts" class="faculty-card">
              <div class="faculty-card-icon"><i class="fas fa-feather-alt" /></div>
              <div class="faculty-card-name">Arts &amp; Humanities</div>
              <p class="faculty-card-desc">Philosophy, languages, history, literature, and the arts — the humanist tradition in a digital age.</p>
              <span class="faculty-card-link">Explore <i class="fas fa-arrow-right" /></span>
            </a>
            <a href="/faculties/mathematics" class="faculty-card">
              <div class="faculty-card-icon"><i class="fas fa-infinity" /></div>
              <div class="faculty-card-name">Mathematics</div>
              <p class="faculty-card-desc">Pure and applied mathematics — topology, analysis, logic, combinatorics, and the bridge problems that founded graph theory.</p>
              <span class="faculty-card-link">Explore <i class="fas fa-arrow-right" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* LEARNING MODEL */}
      <section class="learning-section section">
        <div class="container">
          <div class="learning-grid">
            <div class="learning-text fade-up">
              <div class="section-eyebrow">How Learning Works</div>
              <h2 class="section-title" style="color:white;">An Online-Offline Academic Ecosystem</h2>
              <p class="section-lead">
                EUK operates as a virtual-first institution with a model designed for intellectual depth: asynchronous scholarly foundations, live seminar encounters, and a physical campus network in development.
              </p>
              <a href="/learning" class="btn btn-gold mt-md">Explore the Learning Model</a>
            </div>
            <div class="learning-features fade-up fade-up-delay-2">
              <div class="learning-feature">
                <div class="lf-icon"><i class="fas fa-video" /></div>
                <div class="lf-title">Live Seminars</div>
                <p class="lf-desc">Weekly synchronous seminars with faculty and peers across time zones.</p>
              </div>
              <div class="learning-feature">
                <div class="lf-icon"><i class="fas fa-book-reader" /></div>
                <div class="lf-title">Asynchronous Study</div>
                <p class="lf-desc">Lectures, reading packs, and assessments on your scholarly schedule.</p>
              </div>
              <div class="learning-feature">
                <div class="lf-icon"><i class="fas fa-flask" /></div>
                <div class="lf-title">Virtual Labs</div>
                <p class="lf-desc">Simulated experimental environments for science and engineering programmes.</p>
              </div>
              <div class="learning-feature">
                <div class="lf-icon"><i class="fas fa-users" /></div>
                <div class="lf-title">Research Circles</div>
                <p class="lf-desc">Cross-faculty inquiry groups mentored by EUK and KBI researchers.</p>
              </div>
              <div class="learning-feature">
                <div class="lf-icon"><i class="fas fa-globe-europe" /></div>
                <div class="lf-title">Global Hubs</div>
                <p class="lf-desc">Planned physical campuses and partner spaces across Europe and beyond.</p>
              </div>
              <div class="learning-feature">
                <div class="lf-icon"><i class="fas fa-certificate" /></div>
                <div class="lf-title">Estonian Credentials</div>
                <p class="lf-desc">Degrees and certificates issued under Estonia's digital academic framework.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section class="credibility-section section">
        <div class="container">
          <div class="cred-grid">
            <div class="cred-facts fade-up">
              <div class="cred-fact">
                <div class="cred-fact-label">Legal Status</div>
                <p class="cred-fact-value">Mittetulundusühing (MTÜ) — Estonia</p>
              </div>
              <div class="cred-fact">
                <div class="cred-fact-label">Registration</div>
                <p class="cred-fact-value">ETAK-2024-0891</p>
              </div>
              <div class="cred-fact">
                <div class="cred-fact-label">Operational Model</div>
                <p class="cred-fact-value">Virtual-first · Global-Physical in progress</p>
              </div>
              <div class="cred-fact">
                <div class="cred-fact-label">Research Arm</div>
                <p class="cred-fact-value">Königsberger Bridges Institute (KBI)</p>
              </div>
              <div class="cred-fact">
                <div class="cred-fact-label">Academic Heritage</div>
                <p class="cred-fact-value">Königsberg intellectual tradition (est. 1544)</p>
              </div>
              <div class="cred-fact">
                <div class="cred-fact-label">Admissions</div>
                <p class="cred-fact-value">Rolling intake · Merit-based</p>
              </div>
            </div>
            <div class="cred-content fade-up fade-up-delay-1">
              <div class="section-eyebrow">Institutional Identity</div>
              <h2 class="section-title">Built for Rigour, Designed for Access</h2>
              <p class="lead">
                EUK was founded on a conviction that European intellectual heritage and global digital connectivity are not in tension — they are complementary. A university can be ancient in spirit and modern in reach.
              </p>
              <p>
                Registered in Estonia under the EU's most digitally advanced legal framework, EUK operates with full institutional governance: an Academic Senate, faculty councils, research ethics oversight, and a public charter that enshrines academic freedom.
              </p>
              <p>
                The university's founding research institute, KBI, is named after the Königsberger Bridges Problem — Euler's 1736 theorem that proved impossible what the townspeople supposed: traversing all seven bridges of Königsberg exactly once. In that proof lives the spirit of EUK: careful reasoning over wishful thinking, and the discovery that constraints themselves illuminate structure.
              </p>
              <div class="cred-pillars">
                <div class="cred-pillar">
                  <div class="cred-pillar-icon"><i class="fas fa-balance-scale" /></div>
                  <div class="cred-pillar-title">Academic Freedom</div>
                  <p class="cred-pillar-text">Enshrined in our charter. Faculty independence is foundational.</p>
                </div>
                <div class="cred-pillar">
                  <div class="cred-pillar-icon"><i class="fas fa-shield-alt" /></div>
                  <div class="cred-pillar-title">EU Legal Standing</div>
                  <p class="cred-pillar-text">Estonian MTÜ registration under EU law. Full transparency.</p>
                </div>
                <div class="cred-pillar">
                  <div class="cred-pillar-icon"><i class="fas fa-network-wired" /></div>
                  <div class="cred-pillar-title">Open Architecture</div>
                  <p class="cred-pillar-text">Interdisciplinary by design. Every faculty touches every other.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KBI CALLOUT */}
      <section class="kbi-section section">
        <div class="container">
          <div class="kbi-inner">
            <div class="fade-up">
              <div class="section-eyebrow" style="color:var(--gold);">Research Arm</div>
              <h2 class="kbi-title">Königsberger Bridges Institute</h2>
              <p class="kbi-lead">
                KBI is the founding research institute of EUK — an interdisciplinary laboratory dedicated to bridge problems in the broadest sense: graph theory, network topology, cross-disciplinary method, and the formal study of connection itself.
              </p>
              <div class="kbi-tags">
                <span class="kbi-tag">Graph Theory</span>
                <span class="kbi-tag">Network Topology</span>
                <span class="kbi-tag">Combinatorics</span>
                <span class="kbi-tag">Computational Complexity</span>
                <span class="kbi-tag">Philosophy of Science</span>
                <span class="kbi-tag">Interdisciplinary Method</span>
              </div>
            </div>
            <div class="fade-up fade-up-delay-2">
              <a href="/research" class="btn btn-gold btn-lg" style="white-space:nowrap;">Explore KBI Research</a>
            </div>
          </div>
        </div>
      </section>

      {/* VOICES */}
      <section class="voices-section section">
        <div class="container">
          <div class="section-header section-header--center fade-up">
            <div class="section-eyebrow">Voices from EUK</div>
            <h2 class="section-title">Why Scholars Choose EUK</h2>
          </div>
          <div class="voices-grid">
            <div class="voice-card fade-up">
              <p class="voice-quote"><span>The virtual campus is not a compromise for EUK — it is the form. Königsberg's legacy was always about connecting the disconnected.</span></p>
              <div class="voice-name">Dr. Lena Hartmann</div>
              <div class="voice-role">Chair, Faculty of Mathematics</div>
            </div>
            <div class="voice-card fade-up fade-up-delay-1">
              <p class="voice-quote"><span>I chose EUK because it takes the humanities seriously even in an engineering age. The interdisciplinary seminars alone are worth the entire programme.</span></p>
              <div class="voice-name">Aleksander Põld</div>
              <div class="voice-role">Doctoral Candidate, Arts &amp; Humanities</div>
            </div>
            <div class="voice-card fade-up fade-up-delay-2">
              <p class="voice-quote"><span>KBI's research circles have connected my computational work with topology in ways I didn't anticipate. That is exactly the Eulerian spirit — edges reveal hidden structure.</span></p>
              <div class="voice-name">Prof. Marcus Veit</div>
              <div class="voice-role">Senior Fellow, Königsberger Bridges Institute</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section class="cta-banner">
        <div class="container">
          <div class="fade-up">
            <h2 class="cta-banner-title">Begin Your Academic Journey</h2>
            <p class="cta-banner-sub">Applications are open for the 2025 intake. Rolling admissions across all five faculties.</p>
            <div class="cta-banner-actions">
              <a href="/admissions" class="btn btn-gold btn-lg">Apply to EUK</a>
              <a href="/virtual-campus" class="btn btn-outline btn-lg">Tour the Campus</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>,
    { title: undefined }
  )
})

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────
app.get('/about', (c) => {
  return c.render(
    <>
      <Nav active="about" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>About</span>
          </div>
          <div class="page-hero-eyebrow">About the University</div>
          <h1 class="page-hero-title">Eulerus Universität Königsberg</h1>
          <p class="page-hero-lead">A European academic institution conceived at the intersection of intellectual heritage and digital possibility — carrying the spirit of Königsberg into the connected age.</p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="about-grid">
            <div class="fade-up">
              <div class="section-eyebrow">Our Mission</div>
              <h2 class="section-title">Why EUK Exists</h2>
              <blockquote class="mission-statement">
                "To cultivate rigorous, independent scholarship in the European tradition — made accessible to the world through a virtual campus and a commitment to intellectual depth over credential convenience."
              </blockquote>
              <p class="lead">EUK was founded in 2024 with a conviction that a genuine university can be built without walls — but not without standards, identity, or community.</p>
              <p>The name "Eulerus" honours Leonhard Euler, who in 1736 laid the foundations of graph theory by solving — or rather, elegantly proving unsolvable — the Seven Bridges of Königsberg problem. EUK inherits that spirit: careful formal reasoning, interdisciplinary curiosity, and the willingness to follow an argument wherever it leads.</p>
              <p>The university is registered in the Republic of Estonia as a non-profit association (Mittetulundusühing, MTÜ), operating under EU law with full governance transparency. Estonia's digital-first legal and educational infrastructure makes it the natural home for a virtual European university.</p>
              <p>EUK is not a distance-learning company. It is a scholarly community, organised around five faculties, bound by academic norms, governed by an Academic Senate, and dedicated to the production and transmission of knowledge — in the tradition that Königsberg exemplified for centuries.</p>

              <hr class="divider" />

              <div class="section-eyebrow">Governance</div>
              <h3 style="margin-bottom:1rem;">Institutional Structure</h3>
              <div class="three-col" style="gap:1rem;">
                <div class="cred-pillar">
                  <div class="cred-pillar-icon"><i class="fas fa-gavel" /></div>
                  <div class="cred-pillar-title">Academic Senate</div>
                  <p class="cred-pillar-text">The supreme academic body overseeing curriculum, research standards, and degree awards.</p>
                </div>
                <div class="cred-pillar">
                  <div class="cred-pillar-icon"><i class="fas fa-sitemap" /></div>
                  <div class="cred-pillar-title">Faculty Councils</div>
                  <p class="cred-pillar-text">Each faculty operates with independent governance: curriculum, appointments, and research direction.</p>
                </div>
                <div class="cred-pillar">
                  <div class="cred-pillar-icon"><i class="fas fa-eye" /></div>
                  <div class="cred-pillar-title">Ethics Board</div>
                  <p class="cred-pillar-text">Independent oversight of research ethics, academic integrity, and institutional conduct.</p>
                </div>
              </div>
            </div>
            <div class="about-facts-sidebar fade-up fade-up-delay-2">
              <div class="about-fact-card">
                <div class="about-fact-num" data-counter="2024">2024</div>
                <p class="about-fact-label">Year of foundation</p>
              </div>
              <div class="about-fact-card">
                <div class="about-fact-num">MTÜ</div>
                <p class="about-fact-label">Estonian Non-Profit Association under EU law</p>
              </div>
              <div class="about-fact-card">
                <div class="about-fact-num" data-counter="5">5</div>
                <p class="about-fact-label">Academic faculties</p>
              </div>
              <div class="about-fact-card">
                <div class="about-fact-num" data-counter="38">38</div>
                <p class="about-fact-label">Programmes offered</p>
              </div>
              <div class="about-fact-card">
                <div class="about-fact-num">KBI</div>
                <p class="about-fact-label">Königsberger Bridges Institute — founding research arm</p>
              </div>
              <div class="about-fact-card">
                <div class="about-fact-num" data-counter="47">47</div>
                <p class="about-fact-label">Institutional partners worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="vision-section section">
        <div class="container">
          <div class="section-header section-header--center fade-up">
            <div class="section-eyebrow">Values &amp; Vision</div>
            <h2 class="section-title">What We Stand For</h2>
            <p class="section-lead">Six principles guide every decision at EUK — from curriculum design to institutional governance.</p>
          </div>
          <div class="values-grid">
            {[
              { icon: 'fas fa-search', title: 'Intellectual Rigour', text: 'We hold scholarship to the highest standards of evidence, argument, and method. Comfort is not a criterion.' },
              { icon: 'fas fa-project-diagram', title: 'Interdisciplinary Connection', text: 'The most important discoveries happen at the edges of disciplines. EUK is architected for crossing.' },
              { icon: 'fas fa-globe', title: 'Global Accessibility', text: 'Geography is not destiny. Exceptional scholarship should be available to exceptional minds everywhere.' },
              { icon: 'fas fa-book', title: 'European Heritage', text: 'We root ourselves in the European tradition of free inquiry — from Albertus to Kant to contemporary thought.' },
              { icon: 'fas fa-users', title: 'Scholarly Community', text: 'A university is not a repository of courses. It is a community of people engaged in common intellectual life.' },
              { icon: 'fas fa-lightbulb', title: 'Institutional Honesty', text: 'We are transparent about what we are: a young institution with serious ambitions and clear legal standing.' },
            ].map((v) => (
              <div class="value-card fade-up">
                <div class="value-icon"><i class={v.icon} /></div>
                <div class="value-title">{v.title}</div>
                <p class="value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div class="container">
          <h2 class="cta-banner-title">Read Our Full Charter</h2>
          <p class="cta-banner-sub">EUK's founding charter, governance documents, and institutional policies are publicly available.</p>
          <div class="cta-banner-actions">
            <a href="/admissions" class="btn btn-gold">Apply to EUK</a>
            <a href="/research" class="btn btn-outline">Explore KBI</a>
          </div>
        </div>
      </section>

      <Footer />
    </>,
    { title: 'About EUK' }
  )
})

// ─── FACULTIES PAGE ───────────────────────────────────────────────────────────
app.get('/faculties', (c) => {
  const faculties = [
    {
      id: 'science',
      name: 'Faculty of Natural Sciences',
      short: 'Natural Sciences',
      icon: 'fas fa-flask',
      desc: 'The Natural Sciences faculty at EUK pursues empirical inquiry at the frontier of physical, chemical, biological, and earth sciences. Our programmes integrate mathematical rigour with experimental method, preparing scholars for research careers and applied scientific work in a world shaped increasingly by scientific literacy.',
      programs: [
        { name: 'BSc Physics', level: 'Bachelor' },
        { name: 'BSc Chemistry', level: 'Bachelor' },
        { name: 'BSc Biology & Life Sciences', level: 'Bachelor' },
        { name: 'MSc Computational Chemistry', level: 'Master' },
        { name: 'MSc Biophysics', level: 'Master' },
        { name: 'PhD Natural Sciences', level: 'Doctoral' },
      ],
      quote: '"Science is the record of dead religions." — Oscar Wilde. We prefer Kant: science is the systematic organisation of knowledge.',
    },
    {
      id: 'technovation',
      name: 'Faculty of Technovation',
      short: 'Technovation',
      icon: 'fas fa-microchip',
      desc: 'Technovation is EUK\'s most distinctively named faculty — and deliberately so. It names the intersection that our era demands: the simultaneous creation and transformation wrought by technology. AI, digital systems, platform economics, and the sociology of innovation are studied here not as separate subjects but as facets of a single phenomenon.',
      programs: [
        { name: 'BSc Artificial Intelligence', level: 'Bachelor' },
        { name: 'BSc Digital Systems Design', level: 'Bachelor' },
        { name: 'MSc AI Ethics & Governance', level: 'Master' },
        { name: 'MSc Technology Innovation Management', level: 'Master' },
        { name: 'MSc Data Science', level: 'Master' },
        { name: 'PhD Technovation Studies', level: 'Doctoral' },
      ],
      quote: '"Technology is not applied science — it is the science of the made." Our programmes take that distinction seriously.',
    },
    {
      id: 'engineering',
      name: 'Faculty of Engineering',
      short: 'Engineering',
      icon: 'fas fa-cogs',
      desc: 'EUK Engineering is defined by its commitment to systems thinking. From computational structures to civil systems, from electrical networks to software architecture, the faculty teaches engineering as the disciplined art of building reliable things in an unreliable world — grounded in mathematics and informed by physics.',
      programs: [
        { name: 'BEng Computational Systems', level: 'Bachelor' },
        { name: 'BEng Software Engineering', level: 'Bachelor' },
        { name: 'BEng Electrical & Electronic Engineering', level: 'Bachelor' },
        { name: 'MEng Systems Engineering', level: 'Master' },
        { name: 'MEng Structural & Civil Engineering', level: 'Master' },
        { name: 'PhD Engineering Sciences', level: 'Doctoral' },
      ],
      quote: '"The engineer has been, and is, a maker of history." — James Kip Finch. At EUK, engineers are also scholars of that history.',
    },
    {
      id: 'arts',
      name: 'Faculty of Arts & Humanities',
      short: 'Arts & Humanities',
      icon: 'fas fa-feather-alt',
      desc: 'The humanities at EUK are not ornamental. In a university named after a mathematician and founded in the tradition of Kant, the arts and humanities faculty carries the philosophical core. Language, literature, history, philosophy, and the arts are studied as the substrate on which every other discipline depends — the grammar of human thought.',
      programs: [
        { name: 'BA Philosophy', level: 'Bachelor' },
        { name: 'BA European History', level: 'Bachelor' },
        { name: 'BA Comparative Literature', level: 'Bachelor' },
        { name: 'MA Philosophy of Science', level: 'Master' },
        { name: 'MA Digital Humanities', level: 'Master' },
        { name: 'PhD Humanities', level: 'Doctoral' },
      ],
      quote: '"Without music, life would be a mistake." — Nietzsche. And without philosophy, even mathematics would lose its foundations.',
    },
    {
      id: 'mathematics',
      name: 'Faculty of Mathematics',
      short: 'Mathematics',
      icon: 'fas fa-infinity',
      desc: 'The Mathematics faculty is, in one sense, the faculty from which EUK takes its deepest identity. Euler\'s solution to the Königsberg Bridges Problem is the founding text of this institution — a demonstration that abstract reasoning can resolve practical puzzles with absolute finality. The faculty pursues pure and applied mathematics at the highest level of abstraction and the most concrete applications.',
      programs: [
        { name: 'BSc Mathematics', level: 'Bachelor' },
        { name: 'BSc Mathematics & Computer Science', level: 'Bachelor' },
        { name: 'MSc Pure Mathematics', level: 'Master' },
        { name: 'MSc Applied Mathematics', level: 'Master' },
        { name: 'MSc Graph Theory & Combinatorics', level: 'Master' },
        { name: 'PhD Mathematics', level: 'Doctoral' },
      ],
      quote: '"Mathematics is the queen of the sciences and arithmetic the queen of mathematics." — Gauss. At EUK, graph theory sits near the throne.',
    },
  ]

  return c.render(
    <>
      <Nav active="faculties" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>Faculties</span>
          </div>
          <div class="page-hero-eyebrow">Academic Faculties</div>
          <h1 class="page-hero-title">Five Faculties of Inquiry</h1>
          <p class="page-hero-lead">Each faculty is a distinct node in EUK's intellectual network — different in method and culture, connected by a shared commitment to rigorous scholarship.</p>
        </div>
      </div>

      {faculties.map((f, i) => (
        <section class="faculty-detail" id={f.id}>
          <div class="container">
            <div class={`faculty-detail-grid ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div class="fade-up">
                <div class="faculty-header">
                  <div class="faculty-icon-large"><i class={f.icon} /></div>
                  <div>
                    <div class="faculty-label">Faculty {i + 1} of 5</div>
                    <h2 class="faculty-detail-name">{f.name}</h2>
                  </div>
                </div>
                <p style="color:var(--text-mid);line-height:1.75;margin-bottom:1.5rem;">{f.desc}</p>
                <div class="programs-list">
                  <div class="section-eyebrow" style="margin-bottom:0.75rem;">Programmes</div>
                  {f.programs.map((p) => (
                    <div class="program-item">
                      <div class="program-bullet" />
                      <span class="program-name">{p.name}</span>
                      <span class="program-level">{p.level}</span>
                    </div>
                  ))}
                </div>
                <a href="/admissions" class="btn btn-outline-dark mt-lg" style="width:auto;display:inline-flex;">Apply to this Faculty</a>
              </div>
              <div class="faculty-visual fade-up fade-up-delay-2">
                <div class="faculty-visual-pattern" />
                <div class="faculty-visual-icon"><i class={f.icon} /></div>
                <div class="faculty-quote">{f.quote}</div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section class="cta-banner">
        <div class="container">
          <h2 class="cta-banner-title">Ready to Apply?</h2>
          <p class="cta-banner-sub">All five faculties accept rolling applications. Review requirements and start your application today.</p>
          <div class="cta-banner-actions">
            <a href="/admissions" class="btn btn-gold">Begin Application</a>
            <a href="/learning" class="btn btn-outline">How Learning Works</a>
          </div>
        </div>
      </section>
      <Footer />
    </>,
    { title: 'Faculties' }
  )
})

// ─── ADMISSIONS PAGE ──────────────────────────────────────────────────────────
app.get('/admissions', (c) => {
  return c.render(
    <>
      <Nav active="admissions" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>Admissions</span>
          </div>
          <div class="page-hero-eyebrow">Admissions</div>
          <h1 class="page-hero-title">Apply to EUK</h1>
          <p class="page-hero-lead">EUK operates a rolling admissions model with merit-based selection. We assess scholarly aptitude, intellectual curiosity, and preparedness for independent study.</p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="two-col" style="gap:5rem;">
            <div>
              <div class="section-eyebrow fade-up">Application Process</div>
              <h2 class="section-title fade-up">How to Apply</h2>
              <div class="admissions-steps fade-up">
                {[
                  {
                    title: 'Choose Your Faculty & Programme',
                    desc: 'Review all five faculties and identify the programme that best aligns with your academic background and intellectual ambitions. Each faculty page lists available degrees at Bachelor, Master, and Doctoral level.',
                    details: ['Explore programme descriptions', 'Review entry requirements per level', 'Attend a virtual open day (optional)'],
                  },
                  {
                    title: 'Prepare Your Application Materials',
                    desc: 'EUK requires a focused set of documents. We do not require standardised test scores for most programmes. We prioritise academic quality over administrative volume.',
                    details: ['Academic transcripts (all prior institutions)', 'Personal scholarly statement (800–1200 words)', 'Two academic or professional references', 'Writing sample or portfolio (where required by faculty)'],
                  },
                  {
                    title: 'Submit Your Application',
                    desc: 'Applications are submitted through the EUK Virtual Campus portal. All documents are submitted digitally. The review committee evaluates each application individually.',
                    details: ['Complete the online form in full', 'Upload all required documents (PDF)', 'Pay the application processing fee (€45)', 'Receive confirmation within 3 working days'],
                  },
                  {
                    title: 'Admissions Review',
                    desc: 'The Faculty Admissions Committee reviews your application within 21 days. You may be invited for a virtual interview with a member of faculty.',
                    details: ['Written review by at least two faculty members', 'Optional virtual interview (30 minutes)', 'Offer or feedback provided within 21 days', 'Appeals process available'],
                  },
                  {
                    title: 'Enrolment & Orientation',
                    desc: 'Upon accepting your offer, you complete enrolment through the virtual campus system. The academic year begins with a mandatory orientation week designed to integrate you into the EUK scholarly community.',
                    details: ['Accept offer and pay enrolment deposit', 'Register for Virtual Campus access', 'Attend online orientation programme (5 days)', 'Meet your academic advisor and cohort'],
                  },
                ].map((step, i) => (
                  <div class="admissions-step">
                    <div class="step-number">
                      <div class="step-num-circle">{i + 1}</div>
                      <div class="step-line" />
                    </div>
                    <div class="step-content">
                      <h3 class="step-title">{step.title}</h3>
                      <p class="step-desc">{step.desc}</p>
                      <div class="step-detail-list">
                        {step.details.map((d) => (
                          <div class="step-detail">
                            <i class="fas fa-check" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="fade-up fade-up-delay-2">
              <div class="admissions-sidebar-card">
                <div class="adm-sidebar-title"><i class="fas fa-calendar-alt" /> Key Dates 2025</div>
                {[
                  { label: 'Spring Intake Opens', val: '1 Jan 2025' },
                  { label: 'Spring Deadline', val: '28 Feb 2025' },
                  { label: 'Spring Offers', val: '31 Mar 2025' },
                  { label: 'Autumn Intake Opens', val: '1 May 2025' },
                  { label: 'Autumn Deadline', val: '15 Jul 2025' },
                  { label: 'Autumn Offers', val: '15 Aug 2025' },
                  { label: 'Rolling PhD', val: 'Year-round' },
                ].map((item) => (
                  <div class="adm-sidebar-item">
                    <span class="adm-sidebar-label">{item.label}</span>
                    <span class="adm-sidebar-val">{item.val}</span>
                  </div>
                ))}
              </div>

              <div class="admissions-sidebar-card">
                <div class="adm-sidebar-title"><i class="fas fa-euro-sign" /> Fees Overview</div>
                {[
                  { label: 'Application Fee', val: '€45' },
                  { label: 'Bachelor (annual)', val: '€2,400' },
                  { label: 'Master (annual)', val: '€3,200' },
                  { label: 'Doctoral (annual)', val: '€1,800' },
                  { label: 'Merit Scholarships', val: 'Available' },
                ].map((item) => (
                  <div class="adm-sidebar-item">
                    <span class="adm-sidebar-label">{item.label}</span>
                    <span class="adm-sidebar-val">{item.val}</span>
                  </div>
                ))}
              </div>

              <div style="padding:1.5rem;background:var(--prussian-tint);border:1px solid var(--border);border-radius:6px;">
                <div class="section-eyebrow" style="margin-bottom:0.75rem;">Entry Requirements</div>
                <div style="display:flex;flex-direction:column;gap:0.6rem;">
                  {[
                    { level: 'Bachelor', req: 'Completed secondary education or equivalent' },
                    { level: 'Master', req: 'Relevant Bachelor degree (2:1 or equivalent)' },
                    { level: 'Doctoral', req: 'Master degree and research proposal' },
                  ].map((r) => (
                    <div style="padding:0.75rem;background:white;border-radius:4px;border:1px solid var(--border);">
                      <div style="font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--prussian);margin-bottom:0.25rem;">{r.level}</div>
                      <div style="font-size:0.82rem;color:var(--text-mid);">{r.req}</div>
                    </div>
                  ))}
                </div>
                <a href="/virtual-campus" class="btn btn-primary mt-md" style="width:100%;justify-content:center;">Start Application</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>,
    { title: 'Admissions' }
  )
})

// ─── RESEARCH & KBI PAGE ─────────────────────────────────────────────────────
app.get('/research', (c) => {
  return c.render(
    <>
      <Nav active="research" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>Research &amp; KBI</span>
          </div>
          <div class="page-hero-eyebrow">Research &amp; The Königsberger Bridges Institute</div>
          <h1 class="page-hero-title">Where Scholarship Bridges Disciplines</h1>
          <p class="page-hero-lead">KBI is EUK's founding research institute — named after Euler's 1736 proof and dedicated to the mathematics of connection, network theory, and interdisciplinary method.</p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="bridges-theorem fade-up">
            <div>
              <h3 class="theorem-title">The Seven Bridges Problem</h3>
              <p class="theorem-body">
                In 1736, Leonhard Euler proved that it was impossible to walk through the city of Königsberg crossing each of its seven bridges exactly once. In doing so, he invented graph theory — reducing a topological problem to an abstract structure of nodes and edges.
              </p>
              <p class="theorem-body" style="margin-top:1rem;">
                Euler showed that such a path (an Eulerian circuit) is possible only if every vertex in the graph has an even degree. Königsberg had four vertices of odd degree. The walk was impossible — not because no one had tried hard enough, but because the underlying structure made it so.
              </p>
              <p class="theorem-body" style="margin-top:1rem;">
                KBI takes this as its founding intellectual commitment: to find the structural reasons behind apparent impossibilities — and to discover, sometimes, that what seemed impossible is merely a problem stated wrongly.
              </p>
            </div>
            <div class="theorem-diagram">
              <svg width="280" height="260" viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Königsberg graph */}
                {/* Land masses as nodes */}
                <circle cx="140" cy="130" r="30" fill="rgba(0,49,83,0.8)" stroke="rgba(197,160,40,0.4)" stroke-width="1.5"/>
                <circle cx="140" cy="40" r="22" fill="rgba(0,49,83,0.8)" stroke="rgba(197,160,40,0.4)" stroke-width="1.5"/>
                <circle cx="140" cy="220" r="22" fill="rgba(0,49,83,0.8)" stroke="rgba(197,160,40,0.4)" stroke-width="1.5"/>
                <circle cx="50" cy="130" r="22" fill="rgba(0,49,83,0.8)" stroke="rgba(197,160,40,0.4)" stroke-width="1.5"/>
                {/* Bridges as edges */}
                <line x1="140" y1="100" x2="140" y2="62" stroke="#c5a028" stroke-width="2.5"/>
                <line x1="125" y1="105" x2="80" y2="130" stroke="#c5a028" stroke-width="2.5"/>
                <line x1="125" y1="112" x2="72" y2="130" stroke="#c5a028" stroke-width="2.5"/>
                <line x1="125" y1="155" x2="72" y2="130" stroke="#c5a028" stroke-width="2.5"/>
                <line x1="140" y1="160" x2="140" y2="198" stroke="#c5a028" stroke-width="2.5"/>
                <line x1="152" y1="105" x2="200" y2="130" stroke="#c5a028" stroke-width="2.5" stroke-dasharray="5 3"/>
                <line x1="152" y1="155" x2="200" y2="130" stroke="#c5a028" stroke-width="2.5" stroke-dasharray="5 3"/>
                {/* East bank implied */}
                <circle cx="230" cy="130" r="22" fill="rgba(0,49,83,0.5)" stroke="rgba(197,160,40,0.3)" stroke-width="1" stroke-dasharray="4 2"/>
                {/* Labels */}
                <text x="140" y="134" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.8)">Kneiphof</text>
                <text x="140" y="37" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.7)">North</text>
                <text x="140" y="224" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.7)">South</text>
                <text x="50" y="134" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.7)">Lomse</text>
                <text x="230" y="134" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(197,160,40,0.5)">East</text>
                {/* Degree indicators */}
                <text x="140" y="118" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.4)">deg 5</text>
                <text x="140" y="28" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.4)">deg 3</text>
                <text x="140" y="244" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.4)">deg 3</text>
                <text x="50" y="118" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.4)">deg 3</text>
                <text x="140" y="255" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.35)" font-style="italic">Eulerian path · 1736</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background:var(--stone);" id="labs">
        <div class="container">
          <div class="section-header fade-up">
            <div class="section-eyebrow">Research Focus</div>
            <h2 class="section-title">KBI Research Areas</h2>
            <p class="section-lead">KBI organises its scholarship around six interconnected research areas, each a bridge between formal mathematics and applied inquiry.</p>
          </div>
          <div class="research-pillars">
            {[
              { icon: 'fas fa-project-diagram', title: 'Graph Theory & Topology', desc: 'The mathematical study of networks, connectivity, and structural properties — directly in Euler\'s footsteps.' },
              { icon: 'fas fa-brain', title: 'Computational Complexity', desc: 'The study of what problems can and cannot be solved efficiently — where mathematics meets computer science.' },
              { icon: 'fas fa-network-wired', title: 'Complex Systems', desc: 'How simple rules produce complex emergent behaviour in biological, social, and technological networks.' },
              { icon: 'fas fa-flask', title: 'Philosophy of Science', desc: 'The epistemic foundations of scientific inquiry — what it means to know, to prove, and to understand.' },
              { icon: 'fas fa-globe-europe', title: 'Digital Humanities', desc: 'Computational methods applied to historical texts, cultural archives, and the study of human expression.' },
              { icon: 'fas fa-atom', title: 'Interdisciplinary Method', desc: 'The theory and practice of crossing disciplinary boundaries — what it takes to build genuine bridges of knowledge.' },
            ].map((p) => (
              <div class="research-pillar fade-up">
                <div class="rp-icon"><i class={p.icon} /></div>
                <div class="rp-title">{p.title}</div>
                <p class="rp-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="section" id="publications">
        <div class="container">
          <div class="section-header fade-up">
            <div class="section-eyebrow">Publications</div>
            <h2 class="section-title">Recent KBI Working Papers</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:1rem;" class="fade-up">
            {[
              { title: 'On the Generalization of Eulerian Paths in Directed Multigraphs', author: 'Prof. Marcus Veit, KBI', year: '2024', tag: 'Graph Theory' },
              { title: 'Königsberg\'s Intellectual Legacy: A Historiography of the Bridges Problem', author: 'Dr. Lena Hartmann, Mathematics', year: '2024', tag: 'History of Mathematics' },
              { title: 'AI Governance as Topology: Mapping Regulatory Structures in Complex Networks', author: 'Dr. Sofía Reyes, Technovation', year: '2024', tag: 'AI Ethics' },
              { title: 'Cross-Faculty Epistemology: Toward a Theory of Institutional Interdisciplinarity', author: 'Dr. Andrei Tamm, Philosophy', year: '2024', tag: 'Philosophy of Science' },
              { title: 'Virtual Campus Architecture and the Phenomenology of Place in Online Higher Education', author: 'Dr. Marta Klein, Arts & Humanities', year: '2024', tag: 'Digital Humanities' },
            ].map((p) => (
              <div style="padding:1.25rem 1.5rem;background:white;border:1px solid var(--border);border-radius:4px;display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap;">
                <div>
                  <div style="font-family:var(--font-display);font-size:0.95rem;color:var(--prussian-dark);margin-bottom:0.3rem;">{p.title}</div>
                  <div style="font-size:0.78rem;color:var(--text-muted);">{p.author} · {p.year}</div>
                </div>
                <span class="pill">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div class="container">
          <h2 class="cta-banner-title">Join KBI as a Researcher</h2>
          <p class="cta-banner-sub">KBI welcomes applications for doctoral fellowships, postdoctoral positions, and affiliated researcher status.</p>
          <div class="cta-banner-actions">
            <a href="/admissions" class="btn btn-gold">Apply to Doctoral Programme</a>
            <a href="/about" class="btn btn-outline">About EUK</a>
          </div>
        </div>
      </section>
      <Footer />
    </>,
    { title: 'Research & KBI' }
  )
})

// ─── VIRTUAL CAMPUS PAGE ──────────────────────────────────────────────────────
app.get('/virtual-campus', (c) => {
  return c.render(
    <>
      <Nav active="campus" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>Virtual Campus</span>
          </div>
          <div class="page-hero-eyebrow">Virtual Campus</div>
          <h1 class="page-hero-title">A Scholarly City, Online</h1>
          <p class="page-hero-lead">The EUK Virtual Campus is not a learning management system. It is a designed scholarly environment — with libraries, seminar rooms, laboratories, archives, advising suites, and community spaces — built to support the full intellectual life of a university.</p>
        </div>
      </div>

      <section class="campus-intro section">
        <div class="container">
          <div class="two-col fade-up" style="gap:5rem;">
            <div>
              <div class="section-eyebrow">What You Can Do</div>
              <h2 class="section-title">Inside the Campus</h2>
              <p class="lead">Every function of a physical university is represented in the EUK Virtual Campus — not as a workaround, but as a designed scholarly environment.</p>
              <p style="color:var(--text-mid);line-height:1.75;">Students access lectures, join live seminars, work in virtual laboratories, consult the digital library, meet with academic advisors, and participate in cross-faculty discussion rooms. The campus is built on the principle that the essential functions of a university are intellectual and social, not architectural.</p>
              <div class="mt-lg">
                <a href="#" class="btn btn-gold btn-lg"><i class="fas fa-sign-in-alt" /> Enter Campus Portal</a>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;background:var(--prussian-dark);">
                {/* Campus map schematic */}
                <rect width="480" height="360" fill="#001e33"/>
                <rect x="20" y="20" width="440" height="320" rx="4" fill="#002a44" stroke="rgba(197,160,40,0.15)" stroke-width="1"/>
                {/* Paths */}
                <line x1="240" y1="20" x2="240" y2="340" stroke="rgba(197,160,40,0.12)" stroke-width="1.5"/>
                <line x1="20" y1="180" x2="460" y2="180" stroke="rgba(197,160,40,0.12)" stroke-width="1.5"/>
                {/* Buildings */}
                <rect x="40" y="40" width="100" height="65" rx="3" fill="#1a3a5c" stroke="rgba(197,160,40,0.3)" stroke-width="1"/>
                <text x="90" y="68" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.8)">Library</text>
                <text x="90" y="82" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.35)">24h Access</text>
                <rect x="190" y="40" width="100" height="65" rx="3" fill="#1a3a5c" stroke="rgba(197,160,40,0.3)" stroke-width="1"/>
                <text x="240" y="68" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.8)">Senate Hall</text>
                <text x="240" y="82" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.35)">Governance</text>
                <rect x="340" y="40" width="100" height="65" rx="3" fill="#1a3a5c" stroke="rgba(197,160,40,0.3)" stroke-width="1"/>
                <text x="390" y="68" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.8)">KBI Institute</text>
                <text x="390" y="82" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.35)">Research</text>
                <rect x="40" y="200" width="100" height="65" rx="3" fill="#1a4060" stroke="rgba(197,160,40,0.3)" stroke-width="1"/>
                <text x="90" y="228" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.8)">Seminar Rooms</text>
                <text x="90" y="242" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.35)">5 Faculties</text>
                <rect x="190" y="200" width="100" height="65" rx="3" fill="#0d3050" stroke="rgba(197,160,40,0.5)" stroke-width="1.5"/>
                <text x="240" y="228" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,1)">Virtual Labs</text>
                <text x="240" y="242" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.5)">Sci / Eng / Tech</text>
                <rect x="340" y="200" width="100" height="65" rx="3" fill="#1a4060" stroke="rgba(197,160,40,0.3)" stroke-width="1"/>
                <text x="390" y="228" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.8)">Advising Suite</text>
                <text x="390" y="242" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(255,255,255,0.35)">Academic Support</text>
                {/* Central plaza */}
                <circle cx="240" cy="180" r="20" fill="none" stroke="rgba(197,160,40,0.5)" stroke-width="1.5"/>
                <circle cx="240" cy="180" r="4" fill="rgba(197,160,40,0.8)"/>
                <text x="240" y="215" text-anchor="middle" font-family="Georgia" font-size="7" fill="rgba(197,160,40,0.5)" font-style="italic">Central Plaza</text>
                {/* Connection lines */}
                <line x1="90" y1="105" x2="240" y2="160" stroke="rgba(197,160,40,0.08)" stroke-width="1"/>
                <line x1="390" y1="105" x2="240" y2="160" stroke="rgba(197,160,40,0.08)" stroke-width="1"/>
                <line x1="90" y1="200" x2="240" y2="200" stroke="rgba(197,160,40,0.08)" stroke-width="1"/>
                <line x1="390" y1="200" x2="240" y2="200" stroke="rgba(197,160,40,0.08)" stroke-width="1"/>
                {/* Label */}
                <text x="240" y="350" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.35)" font-style="italic">EUK Virtual Campus — Schematic Map</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-header section-header--center fade-up">
            <div class="section-eyebrow">Campus Spaces</div>
            <h2 class="section-title">What You Will Find Here</h2>
          </div>
          <div class="campus-spaces-grid">
            {[
              { icon: 'fas fa-book', name: 'Digital Library', desc: 'Access to over 2 million academic texts, journal subscriptions, and the EUK archive of working papers and dissertations.', features: ['Full-text journal access', 'Interlibrary loans via EU partner network', 'KBI working paper archive', '24-hour access'] },
              { icon: 'fas fa-chalkboard-teacher', name: 'Lecture Theatre', desc: 'Recorded and live lectures from EUK faculty and visiting scholars. Available for replay with annotation tools.', features: ['Live and asynchronous lectures', 'Timestamped notes', 'Q&A transcripts', 'Subtitle in 12 languages'] },
              { icon: 'fas fa-users', name: 'Seminar Rooms', desc: 'Weekly synchronous seminars with cohorts of 8–16 students. The intellectual core of the EUK learning experience.', features: ['Max 16 students per session', 'Video, whiteboard, document tools', 'Recorded with consent', 'Session transcripts'] },
              { icon: 'fas fa-flask', name: 'Virtual Laboratories', desc: 'Simulated lab environments for science, engineering, and computation programmes. Includes experiment design tools.', features: ['Physics simulation suite', 'Chemistry molecular modelling', 'Engineering structural analysis', 'Code execution environment'] },
              { icon: 'fas fa-user-tie', name: 'Advising Suite', desc: 'Book appointments with your academic advisor, careers advisor, and wellbeing support. Appointment-based and drop-in.', features: ['Academic progress reviews', 'Dissertation supervision', 'Careers guidance', 'Wellbeing support'] },
              { icon: 'fas fa-comments', name: 'Discussion Rooms', desc: 'Cross-faculty community spaces for informal scholarly exchange, study groups, and society meetings.', features: ['Faculty-specific channels', 'Cross-faculty agora', 'KBI discussion forum', 'Student society spaces'] },
            ].map((space) => (
              <div class="campus-space fade-up">
                <div class="campus-space-header">
                  <div class="campus-space-icon"><i class={space.icon} /></div>
                  <div class="campus-space-name">{space.name}</div>
                </div>
                <div class="campus-space-body">
                  <p class="campus-space-desc">{space.desc}</p>
                  <div class="campus-space-features">
                    {space.features.map((f) => (
                      <div class="campus-space-feature">
                        <i class="fas fa-check-circle" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div class="container">
          <h2 class="cta-banner-title">Your Campus Awaits</h2>
          <p class="cta-banner-sub">Enrolled students access the full campus immediately on enrolment. Apply now to begin your scholarly journey.</p>
          <div class="cta-banner-actions">
            <a href="/admissions" class="btn btn-gold">Apply to EUK</a>
            <a href="/learning" class="btn btn-outline">Learning Model</a>
          </div>
        </div>
      </section>
      <Footer />
    </>,
    { title: 'Virtual Campus' }
  )
})

// ─── LEARNING MODEL ───────────────────────────────────────────────────────────
app.get('/learning', (c) => {
  return c.render(
    <>
      <Nav active="learning" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>Learning Model</span>
          </div>
          <div class="page-hero-eyebrow">How Learning Works</div>
          <h1 class="page-hero-title">The EUK Academic Model</h1>
          <p class="page-hero-lead">EUK operates on an online-offline hybrid model designed for intellectual depth — not for the convenience of mass delivery.</p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="section-header section-header--center fade-up">
            <div class="section-eyebrow">Academic Framework</div>
            <h2 class="section-title">Six Pillars of EUK Learning</h2>
            <p class="section-lead">Each element of the EUK model is designed around a single question: what does a student actually need in order to develop as a scholar?</p>
          </div>
          <div class="values-grid">
            {[
              { icon: 'fas fa-book-open', title: 'Deep Reading & Texts', text: 'Every programme is built on curated primary and secondary texts. Reading, not watching, is the foundation of EUK scholarship. Weekly reading guides are provided by faculty.' },
              { icon: 'fas fa-comments', title: 'Seminar Discussion', text: 'The Socratic seminar is EUK\'s primary pedagogical method. Small synchronous groups meet weekly with faculty to contest, refine, and extend ideas from the readings.' },
              { icon: 'fas fa-pen-alt', title: 'Written Assessment', text: 'Assessments are primarily written: essays, research papers, problem sets, and theses. We do not use multiple-choice examinations as the primary assessment mode.' },
              { icon: 'fas fa-microscope', title: 'Research Integration', text: 'All programmes connect to active research, particularly through KBI. Students at all levels can participate in research circles guided by EUK and KBI scholars.' },
              { icon: 'fas fa-map-marker-alt', title: 'Physical Intensives', text: 'Once per academic year, students are invited to attend a physical intensive — a week-long residential academic programme at one of EUK\'s global hubs or partner sites.' },
              { icon: 'fas fa-user-graduate', title: 'Mentorship', text: 'Every student has an academic advisor who meets with them at least once per term. Doctoral students work under close supervisory relationships with EUK faculty or KBI fellows.' },
            ].map((v) => (
              <div class="value-card fade-up">
                <div class="value-icon"><i class={v.icon} /></div>
                <div class="value-title">{v.title}</div>
                <p class="value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="kbi-section section">
        <div class="container">
          <div class="kbi-inner">
            <div class="fade-up">
              <div class="section-eyebrow" style="color:var(--gold);">Academic Year</div>
              <h2 class="kbi-title">The EUK Academic Calendar</h2>
              <p class="kbi-lead">EUK runs two semesters per year with a structured rhythm of seminars, independent study, intensives, and assessment periods.</p>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem;">
                {[
                  { period: 'September – December', label: 'Autumn Semester', sub: '14 weeks · Seminars, lectures, mid-term papers' },
                  { period: 'January', label: 'Winter Break & Physical Intensive', sub: 'Optional residential week at partner sites' },
                  { period: 'February – May', label: 'Spring Semester', sub: '14 weeks · Seminars, research projects, thesis work' },
                  { period: 'June – August', label: 'Summer Independent Study', sub: 'Self-directed research, dissertation work, electives' },
                ].map((item) => (
                  <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:1rem;">
                    <div style="font-size:0.68rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold);margin-bottom:0.3rem;">{item.period}</div>
                    <div style="font-size:0.9rem;color:white;font-family:var(--font-display);margin-bottom:0.25rem;">{item.label}</div>
                    <div style="font-size:0.75rem;color:rgba(255,255,255,0.4);">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div class="fade-up fade-up-delay-2">
              <a href="/admissions" class="btn btn-gold btn-lg">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>,
    { title: 'Learning Model' }
  )
})

// ─── NEWS PAGE ────────────────────────────────────────────────────────────────
app.get('/news', (c) => {
  const articles = [
    { cat: 'Research', icon: 'fas fa-project-diagram', title: 'KBI Publishes First Annual Research Report on Network Topology', desc: 'The Königsberger Bridges Institute has released its inaugural research report, covering work in graph theory, computational complexity, and interdisciplinary methodology.', date: 'November 2024' },
    { cat: 'Admissions', icon: 'fas fa-graduation-cap', title: '2025 Intake Now Open Across All Five Faculties', desc: 'Applications for the 2025 academic year are now open. EUK welcomes candidates for Bachelor, Master, and Doctoral programmes in all faculties.', date: 'December 2024' },
    { cat: 'Campus', icon: 'fas fa-laptop', title: 'Virtual Campus Phase II: Advanced Laboratory Environments Launch', desc: 'Phase II of the EUK Virtual Campus includes new virtual laboratory environments for science and engineering students, featuring physics simulation and molecular modelling.', date: 'October 2024' },
    { cat: 'Events', icon: 'fas fa-calendar', title: 'Inaugural EUK Colloquium: Bridges — Science, Mathematics & Society', desc: 'EUK\'s first interdisciplinary colloquium brings together scholars from all five faculties to examine the concept of the bridge as metaphor and mathematical object.', date: 'September 2024' },
    { cat: 'Partnerships', icon: 'fas fa-handshake', title: 'EUK Signs Cooperation Agreement with Three European Research Institutes', desc: 'New institutional partnerships strengthen EUK\'s research network and provide student exchange pathways across Europe.', date: 'August 2024' },
    { cat: 'Faculty', icon: 'fas fa-user-tie', title: 'Faculty of Mathematics Appoints First Chair in Graph Theory', desc: 'Prof. Marcus Veit joins EUK as the inaugural Chair in Graph Theory and Discrete Mathematics, bringing with him a distinguished publication record and KBI founding fellow status.', date: 'July 2024' },
  ]

  return c.render(
    <>
      <Nav active="" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>News &amp; Events</span>
          </div>
          <div class="page-hero-eyebrow">News &amp; Events</div>
          <h1 class="page-hero-title">From the University</h1>
          <p class="page-hero-lead">Updates on research, admissions, campus developments, events, and institutional news from EUK and KBI.</p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="news-grid">
            {articles.map((a, i) => (
              <div class={`news-card fade-up ${i > 0 ? `fade-up-delay-${Math.min(i, 4)}` : ''}`}>
                <div class="news-card-visual">
                  <div class="news-card-visual-pattern" />
                  <div class="news-card-visual-icon"><i class={a.icon} /></div>
                </div>
                <div class="news-card-body">
                  <div class="news-card-cat">{a.cat}</div>
                  <h3 class="news-card-title">{a.title}</h3>
                  <p class="news-card-desc">{a.desc}</p>
                  <div class="news-card-meta">
                    <span>{a.date}</span>
                    <span>Read more →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>,
    { title: 'News & Events' }
  )
})

// ─── GLOBAL CAMPUSES ──────────────────────────────────────────────────────────
app.get('/global-campuses', (c) => {
  return c.render(
    <>
      <Nav active="" />
      <div class="page-hero">
        <div class="page-hero-grid" />
        <div class="container page-hero-content">
          <div class="page-hero-breadcrumb">
            <a href="/">EUK</a>
            <i class="fas fa-chevron-right" style="font-size:0.6rem" />
            <span>Global Campuses</span>
          </div>
          <div class="page-hero-eyebrow">Global Campus Network</div>
          <h1 class="page-hero-title">A University Without Borders</h1>
          <p class="page-hero-lead">EUK is virtual-first but not virtual-only. We are building a global network of physical presences — from partner institutes to dedicated campuses — that complement our online scholarly community.</p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="campuses-map-placeholder fade-up">
            <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;">
              <rect width="900" height="400" fill="#001e33"/>
              {/* Simplified world map continents */}
              {/* Europe */}
              <ellipse cx="450" cy="160" rx="55" ry="40" fill="#0d3050" opacity="0.9"/>
              {/* North America */}
              <ellipse cx="220" cy="170" rx="80" ry="55" fill="#0d3050" opacity="0.8"/>
              {/* South America */}
              <ellipse cx="270" cy="270" rx="45" ry="60" fill="#0d3050" opacity="0.8"/>
              {/* Africa */}
              <ellipse cx="460" cy="235" rx="55" ry="65" fill="#0d3050" opacity="0.8"/>
              {/* Asia */}
              <ellipse cx="620" cy="155" rx="110" ry="60" fill="#0d3050" opacity="0.8"/>
              {/* Oceania */}
              <ellipse cx="720" cy="290" rx="55" ry="30" fill="#0d3050" opacity="0.7"/>
              {/* Grid lines */}
              <line x1="0" y1="200" x2="900" y2="200" stroke="rgba(197,160,40,0.06)" stroke-width="1"/>
              <line x1="450" y1="0" x2="450" y2="400" stroke="rgba(197,160,40,0.06)" stroke-width="1"/>
              {/* Campus markers */}
              {/* Tallinn (HQ) - Active */}
              <circle cx="488" cy="145" r="8" fill="#c5a028" opacity="0.95"/>
              <circle cx="488" cy="145" r="16" fill="none" stroke="#c5a028" stroke-width="1" opacity="0.4"/>
              <text x="488" y="130" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.9)">Tallinn (HQ)</text>
              {/* Berlin - Active */}
              <circle cx="460" cy="152" r="6" fill="#c5a028" opacity="0.8"/>
              <text x="460" y="140" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.7)">Berlin</text>
              {/* Vienna - Partner */}
              <circle cx="468" cy="162" r="5" fill="rgba(197,160,40,0.5)"/>
              <text x="468" y="178" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.5)">Vienna</text>
              {/* Warsaw - Planned */}
              <circle cx="478" cy="150" r="5" fill="none" stroke="rgba(197,160,40,0.6)" stroke-width="1.5" stroke-dasharray="3 2"/>
              <text x="478" y="168" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.5)">Warsaw</text>
              {/* New York - Planned */}
              <circle cx="230" cy="175" r="5" fill="none" stroke="rgba(197,160,40,0.5)" stroke-width="1.5" stroke-dasharray="3 2"/>
              <text x="230" y="165" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.4)">New York</text>
              {/* Singapore - Partner */}
              <circle cx="645" cy="215" r="5" fill="rgba(197,160,40,0.45)"/>
              <text x="645" y="205" text-anchor="middle" font-family="Georgia" font-size="8" fill="rgba(197,160,40,0.4)">Singapore</text>
              {/* Legend */}
              <circle cx="40" cy="350" r="6" fill="#c5a028"/>
              <text x="55" y="354" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.8)">Active campus</text>
              <circle cx="160" cy="350" r="6" fill="rgba(197,160,40,0.5)"/>
              <text x="175" y="354" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.7)">Partner site</text>
              <circle cx="275" cy="350" r="6" fill="none" stroke="rgba(197,160,40,0.6)" stroke-width="1.5" stroke-dasharray="3 2"/>
              <text x="290" y="354" font-family="Georgia" font-size="9" fill="rgba(197,160,40,0.6)">Planned hub</text>
            </svg>
          </div>
          <div class="campuses-legend fade-up">
            {[
              { city: 'Tallinn, Estonia', status: 'Registered HQ · Virtual Campus', dot: 'dot-active' },
              { city: 'Berlin, Germany', status: 'Active Partner Site', dot: 'dot-active' },
              { city: 'Vienna, Austria', status: 'Partner Institution', dot: 'dot-partner' },
              { city: 'Warsaw, Poland', status: 'Planned 2026', dot: 'dot-planned' },
              { city: 'New York, USA', status: 'Planned 2027', dot: 'dot-planned' },
              { city: 'Singapore', status: 'Partner in Development', dot: 'dot-partner' },
              { city: 'London, UK', status: 'Planned 2026', dot: 'dot-planned' },
              { city: 'Online (Global)', status: 'Virtual Campus — Active Now', dot: 'dot-active' },
            ].map((c) => (
              <div class="campus-legend-item">
                <div class={`campus-legend-dot ${c.dot}`} />
                <div class="campus-legend-city">{c.city}</div>
                <div class="campus-legend-status">{c.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="cta-banner">
        <div class="container">
          <h2 class="cta-banner-title">Study with EUK from Anywhere</h2>
          <p class="cta-banner-sub">The Virtual Campus is open to students worldwide. Physical hubs complement, they do not replace, the global scholarly community.</p>
          <div class="cta-banner-actions">
            <a href="/admissions" class="btn btn-gold">Apply Now</a>
            <a href="/virtual-campus" class="btn btn-outline">Explore the Campus</a>
          </div>
        </div>
      </section>
      <Footer />
    </>,
    { title: 'Global Campuses' }
  )
})

// ─── Individual faculty sub-pages (redirect to faculties with anchor) ─────────
app.get('/faculties/:id', (c) => {
  const id = c.req.param('id')
  return c.redirect(`/faculties#${id}`)
})

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.notFound((c) => {
  return c.render(
    <>
      <Nav />
      <section class="page-hero" style="min-height:60vh;display:flex;align-items:center;">
        <div class="page-hero-grid" />
        <div class="container page-hero-content" style="text-align:center;">
          <div class="page-hero-eyebrow" style="justify-content:center;">Page Not Found</div>
          <h1 class="page-hero-title" style="font-size:6rem;opacity:0.3;">404</h1>
          <p class="page-hero-lead">Euler himself could not find a path that crosses every bridge exactly once — but we can help you find your way back.</p>
          <div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
            <a href="/" class="btn btn-gold">Return Home</a>
            <a href="/faculties" class="btn btn-outline">Browse Faculties</a>
          </div>
        </div>
      </section>
      <Footer />
    </>,
    { title: '404 — Page Not Found' }
  )
})

export default app
