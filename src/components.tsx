export const Nav = ({ active = '' }: { active?: string }) => (
  <header class="site-header" id="site-header">
    <div class="header-top">
      <div class="container">
        <span class="header-notice">Estonia MTÜ Registered · ETAK-2024-0891 · Virtual Campus Now Open</span>
        <div class="header-top-right">
          <a href="/news" class="header-top-link">News</a>
          <span class="sep">·</span>
          <a href="/virtual-campus" class="header-top-link header-top-link--accent">
            <i class="fas fa-door-open"></i> Enter Campus
          </a>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="container header-inner">
        <a href="/" class="site-logo" aria-label="Eulerus Universität Königsberg home">
          <div class="logo-mark" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" stroke="#003153" stroke-width="1.5"/>
              <circle cx="22" cy="22" r="3" fill="#003153"/>
              <path d="M22 22 L10 14" stroke="#003153" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L34 14" stroke="#003153" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L34 30" stroke="#003153" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L10 30" stroke="#003153" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L22 6" stroke="#003153" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L22 38" stroke="#003153" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="10" cy="14" r="2.5" fill="#C5A028"/>
              <circle cx="34" cy="14" r="2.5" fill="#C5A028"/>
              <circle cx="34" cy="30" r="2.5" fill="#C5A028"/>
              <circle cx="10" cy="30" r="2.5" fill="#C5A028"/>
              <circle cx="22" cy="6" r="2.5" fill="#C5A028"/>
              <circle cx="22" cy="38" r="2.5" fill="#C5A028"/>
              <path d="M10 14 Q16 8 22 6" stroke="#003153" stroke-width="0.75" stroke-dasharray="2 2"/>
              <path d="M34 14 Q28 8 22 6" stroke="#003153" stroke-width="0.75" stroke-dasharray="2 2"/>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-abbr">EUK</span>
            <span class="logo-full">Eulerus Universität Königsberg</span>
          </div>
        </a>

        <nav class="main-nav" id="main-nav" aria-label="Main navigation">
          <ul class="nav-list">
            <li class={active === 'about' ? 'nav-item active' : 'nav-item'}>
              <a href="/about" class="nav-link">About EUK</a>
            </li>
            <li class={active === 'faculties' ? 'nav-item active has-dropdown' : 'nav-item has-dropdown'}>
              <a href="/faculties" class="nav-link">Faculties <i class="fas fa-chevron-down nav-arrow"></i></a>
              <div class="dropdown">
                <a href="/faculties/science" class="dropdown-item"><span class="dropdown-dot sci"></span>Natural Sciences</a>
                <a href="/faculties/technovation" class="dropdown-item"><span class="dropdown-dot tech"></span>Technovation</a>
                <a href="/faculties/engineering" class="dropdown-item"><span class="dropdown-dot eng"></span>Engineering</a>
                <a href="/faculties/arts" class="dropdown-item"><span class="dropdown-dot arts"></span>Arts &amp; Humanities</a>
                <a href="/faculties/mathematics" class="dropdown-item"><span class="dropdown-dot math"></span>Mathematics</a>
              </div>
            </li>
            <li class={active === 'learning' ? 'nav-item active' : 'nav-item'}>
              <a href="/learning" class="nav-link">Learning Model</a>
            </li>
            <li class={active === 'admissions' ? 'nav-item active' : 'nav-item'}>
              <a href="/admissions" class="nav-link">Admissions</a>
            </li>
            <li class={active === 'research' ? 'nav-item active' : 'nav-item'}>
              <a href="/research" class="nav-link">Research &amp; KBI</a>
            </li>
            <li class={active === 'campus' ? 'nav-item active' : 'nav-item'}>
              <a href="/virtual-campus" class="nav-link nav-link--campus">Virtual Campus</a>
            </li>
          </ul>
        </nav>

        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
)

export const Footer = () => (
  <footer class="site-footer">
    <div class="footer-bridge-line" aria-hidden="true">
      <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 40 Q120 0 240 20 Q360 40 480 20 Q600 0 720 20 Q840 40 960 20 Q1080 0 1200 20 Q1320 40 1440 20 L1440 40 Z" fill="#003153" opacity="0.08"/>
        <line x1="0" y1="20" x2="1440" y2="20" stroke="#003153" stroke-width="0.5" stroke-dasharray="4 4"/>
      </svg>
    </div>
    <div class="footer-body">
      <div class="container footer-grid">
        <div class="footer-col footer-brand">
          <div class="footer-logo">
            <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" stroke="#C5A028" stroke-width="1.5"/>
              <circle cx="22" cy="22" r="3" fill="#C5A028"/>
              <path d="M22 22 L10 14" stroke="#C5A028" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L34 14" stroke="#C5A028" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L34 30" stroke="#C5A028" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L10 30" stroke="#C5A028" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L22 6" stroke="#C5A028" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 22 L22 38" stroke="#C5A028" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="10" cy="14" r="2.5" fill="#C5A028"/>
              <circle cx="34" cy="14" r="2.5" fill="#C5A028"/>
              <circle cx="34" cy="30" r="2.5" fill="#C5A028"/>
              <circle cx="10" cy="30" r="2.5" fill="#C5A028"/>
              <circle cx="22" cy="6" r="2.5" fill="#C5A028"/>
              <circle cx="22" cy="38" r="2.5" fill="#C5A028"/>
            </svg>
            <span>EUK</span>
          </div>
          <p class="footer-tagline">Eulerus Universität Königsberg — a European virtual university rooted in the intellectual legacy of Königsberg.</p>
          <p class="footer-legal">Registered in the Republic of Estonia as a Non-Profit Association (MTÜ).<br/>Registration No. ETAK-2024-0891</p>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Faculties</h4>
          <ul class="footer-links">
            <li><a href="/faculties/science">Natural Sciences</a></li>
            <li><a href="/faculties/technovation">Technovation</a></li>
            <li><a href="/faculties/engineering">Engineering</a></li>
            <li><a href="/faculties/arts">Arts &amp; Humanities</a></li>
            <li><a href="/faculties/mathematics">Mathematics</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Institution</h4>
          <ul class="footer-links">
            <li><a href="/about">About EUK</a></li>
            <li><a href="/learning">Learning Model</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/research">Research &amp; KBI</a></li>
            <li><a href="/news">News &amp; Events</a></li>
            <li><a href="/global-campuses">Global Campuses</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Campus &amp; KBI</h4>
          <ul class="footer-links">
            <li><a href="/virtual-campus">Virtual Campus</a></li>
            <li><a href="/research">Königsberger Bridges Institute</a></li>
            <li><a href="/research#publications">Publications</a></li>
            <li><a href="/research#labs">Research Labs</a></li>
          </ul>
          <div class="footer-kbi-note">
            <p>KBI is the founding research arm of EUK, dedicated to bridge problems, network topology, and interdisciplinary scholarship.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>© 2024 Eulerus Universität Königsberg. All rights reserved.</span>
        <div class="footer-policy-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  </footer>
)
