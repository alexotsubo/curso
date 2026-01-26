import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Alex Otsubo | Automações, IA & Estratégia Digital</title>
        <meta
          name="description"
          content="25 anos transformando tecnologia em resultados. Especialista em automações, inteligência artificial e estratégia digital para escalar operações."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        :root {
          --bg-primary: #09090b;
          --bg-secondary: #0f0f11;
          --bg-card: #18181b;
          --bg-card-hover: #1f1f23;
          --border: #27272a;
          --border-hover: #3f3f46;
          --text-primary: #fafafa;
          --text-secondary: #a1a1aa;
          --text-tertiary: #71717a;
          --accent: #10b981;
          --accent-hover: #059669;
          --accent-glow: rgba(16, 185, 129, 0.15);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }

        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        ::selection {
          background: var(--accent);
          color: var(--bg-primary);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
      `}</style>

      <style jsx>{`
        /* ===== LAYOUT ===== */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 48px;
          }
        }

        /* ===== HEADER ===== */
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          background: rgba(9, 9, 11, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .logo span {
          color: var(--accent);
        }

        nav {
          display: none;
        }

        @media (min-width: 768px) {
          nav {
            display: flex;
            gap: 40px;
          }
        }

        nav a {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        nav a:hover {
          color: var(--text-primary);
        }

        .header-cta {
          font-size: 0.875rem;
          font-weight: 600;
          padding: 10px 20px;
          background: var(--accent);
          color: var(--bg-primary);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .header-cta:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }

        /* ===== HERO ===== */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 160px 0 120px;
          position: relative;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          max-width: 800px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .hero-badge span {
          color: var(--accent);
        }

        .hero h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .hero h1 .highlight {
          background: linear-gradient(135deg, var(--accent) 0%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 48px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: var(--accent);
          color: var(--bg-primary);
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px var(--accent-glow);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: transparent;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid var(--border);
          border-radius: 8px;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          border-color: var(--border-hover);
          background: var(--bg-card);
        }

        /* ===== SECTIONS ===== */
        section {
          padding: 120px 0;
        }

        .section-header {
          margin-bottom: 64px;
        }

        .section-label {
          display: inline-block;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
        }

        /* ===== STATS ===== */
        .stats-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-item {
          text-align: center;
          padding: 32px 16px;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .stat-number span {
          color: var(--accent);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ===== ABOUT ===== */
        .about-grid {
          display: grid;
          gap: 64px;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }
        }

        .about-avatar {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%);
          border: 1px solid var(--border);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .about-avatar::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, var(--accent-glow), transparent 30%);
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }

        .about-avatar-inner {
          position: relative;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background: var(--bg-card);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-initials {
          font-size: 6rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-text p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.8;
        }

        .about-text p strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* ===== SERVICES ===== */
        .services-section {
          background: var(--bg-secondary);
        }

        .services-grid {
          display: grid;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .service-card {
          padding: 40px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: all 0.3s;
        }

        .service-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
        }

        .service-icon {
          width: 56px;
          height: 56px;
          background: var(--accent-glow);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 24px;
        }

        .service-card h3 {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .service-card p {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* ===== SEGMENTS ===== */
        .segments-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (min-width: 768px) {
          .segments-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
        }

        .segment-card {
          padding: 32px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-align: center;
          transition: all 0.2s;
        }

        .segment-card:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }

        .segment-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .segment-card h3 {
          font-size: 1rem;
          font-weight: 600;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonials-section {
          background: var(--bg-secondary);
        }

        .testimonials-grid {
          display: grid;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .testimonial-video {
          position: relative;
          padding-bottom: 56.25%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .testimonial-video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ===== CTA ===== */
        .cta-section {
          text-align: center;
          padding: 160px 0;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .cta-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 48px;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        /* ===== FOOTER ===== */
        footer {
          padding: 48px 0;
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .footer-text {
          font-size: 0.875rem;
          color: var(--text-tertiary);
        }

        .footer-links {
          display: flex;
          gap: 24px;
          justify-content: center;
          margin-top: 16px;
        }

        .footer-links a {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--accent);
        }
      `}</style>

      {/* Header */}
      <header>
        <div className="container header-content">
          <a href="#" className="logo">
            alex<span>.</span>otsubo
          </a>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#depoimentos">Depoimentos</a>
          </nav>
          <a href="#contato" className="header-cta">
            Fale Comigo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-on-scroll">
              <span>●</span> Disponível para novos projetos
            </div>
            <h1 className="animate-on-scroll delay-1">
              Transformo tecnologia em{" "}
              <span className="highlight">resultados de negócio</span>
            </h1>
            <p className="hero-description animate-on-scroll delay-2">
              25 anos conectando estratégia e execução. Especialista em
              automações, inteligência artificial e sistemas que escalam
              operações.
            </p>
            <div className="hero-cta-group animate-on-scroll delay-3">
              <a href="#contato" className="btn-primary">
                Iniciar Conversa →
              </a>
              <a href="#servicos" className="btn-secondary">
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-on-scroll">
              <div className="stat-number">
                25<span>+</span>
              </div>
              <div className="stat-label">Anos de TI</div>
            </div>
            <div className="stat-item animate-on-scroll delay-1">
              <div className="stat-number">
                6<span>em</span>7
              </div>
              <div className="stat-label">Lançamentos</div>
            </div>
            <div className="stat-item animate-on-scroll delay-2">
              <div className="stat-number">
                100<span>+</span>
              </div>
              <div className="stat-label">Projetos</div>
            </div>
            <div className="stat-item animate-on-scroll delay-3">
              <div className="stat-number">
                4<span></span>
              </div>
              <div className="stat-label">Segmentos</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre">
        <div className="container">
          <div className="about-grid">
            <div className="about-avatar animate-on-scroll">
              <div className="about-avatar-inner">
                <span className="about-initials">AO</span>
              </div>
            </div>
            <div className="about-text">
              <span className="section-label animate-on-scroll">// Sobre</span>
              <h2 className="section-title animate-on-scroll delay-1">
                Estratégia + Execução na mesma pessoa
              </h2>
              <p className="animate-on-scroll delay-2">
                Desenvolvi uma competência rara:{" "}
                <strong>traduzir necessidades de negócio em soluções tecnológicas
                  que realmente funcionam</strong>. Não sou só o cara que entende o
                problema — sou o cara que resolve.
              </p>
              <p className="animate-on-scroll delay-3">
                Fundei uma escola de Cloud Computing, executei múltiplos
                lançamentos digitais de seis dígitos, e desenvolvo sistemas de
                automação com IA para empresas que querem escalar.
              </p>
              <p className="animate-on-scroll delay-4">
                <strong>Minha especialidade:</strong> fazer a ponte entre o que o
                negócio precisa e o que a tecnologia pode entregar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll">// Serviços</span>
            <h2 className="section-title animate-on-scroll delay-1">
              O que eu faço
            </h2>
            <p className="section-description animate-on-scroll delay-2">
              Soluções tecnológicas focadas em resultado, não em complexidade.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">⚡</div>
              <h3>Automação de Processos</h3>
              <p>
                Elimino tarefas manuais e repetitivas com fluxos automatizados.
                N8N, Make, APIs customizadas. Menos erro, mais velocidade.
              </p>
            </div>
            <div className="service-card animate-on-scroll delay-1">
              <div className="service-icon">🤖</div>
              <h3>Inteligência Artificial</h3>
              <p>
                IA aplicada ao seu negócio: chatbots, análise de dados,
                processamento de linguagem natural, machine learning.
              </p>
            </div>
            <div className="service-card animate-on-scroll delay-2">
              <div className="service-icon">📊</div>
              <h3>Consultoria Estratégica</h3>
              <p>
                Diagnóstico de processos e roadmap tecnológico alinhado aos seus
                objetivos. Visão de negócio + conhecimento técnico.
              </p>
            </div>
            <div className="service-card animate-on-scroll delay-3">
              <div className="service-icon">💻</div>
              <h3>Desenvolvimento</h3>
              <p>
                Sistemas sob medida: dashboards, integrações, APIs, aplicações
                completas. Python, Node, React, e o que mais precisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll">// Segmentos</span>
            <h2 className="section-title animate-on-scroll delay-1">
              Onde atuo
            </h2>
          </div>
          <div className="segments-grid">
            <div className="segment-card animate-on-scroll">
              <div className="segment-icon">🏢</div>
              <h3>Imobiliário</h3>
            </div>
            <div className="segment-card animate-on-scroll delay-1">
              <div className="segment-icon">🏥</div>
              <h3>Saúde</h3>
            </div>
            <div className="segment-card animate-on-scroll delay-2">
              <div className="segment-icon">📚</div>
              <h3>Educação</h3>
            </div>
            <div className="segment-card animate-on-scroll delay-3">
              <div className="segment-icon">💰</div>
              <h3>Financeiro</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label animate-on-scroll">// Depoimentos</span>
            <h2 className="section-title animate-on-scroll delay-1">
              O que dizem
            </h2>
            <p className="section-description animate-on-scroll delay-2">
              Resultados reais de pessoas reais.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-video animate-on-scroll">
              <iframe
                src="https://www.youtube.com/embed/XIhnYgr18sE"
                title="Depoimento Zila e Carol"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="testimonial-video animate-on-scroll delay-1">
              <iframe
                src="https://www.youtube.com/embed/NLmk7U2FWDA"
                title="Depoimento Antonio Rocha"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="testimonial-video animate-on-scroll delay-2">
              <iframe
                src="https://www.youtube.com/embed/VyUnDND50ZQ"
                title="Depoimento Tiago Feitosa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="testimonial-video animate-on-scroll delay-3">
              <iframe
                src="https://www.youtube.com/embed/XPJi4SDvxQc"
                title="Depoimento Maiara Sardenberg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title animate-on-scroll">
              Pronto para escalar?
            </h2>
            <p className="cta-description animate-on-scroll delay-1">
              Vamos conversar sobre como automação e IA podem transformar sua
              operação.
            </p>
            <div className="cta-buttons animate-on-scroll delay-2">
              <a
                href="https://wa.me/5511942956780?text=Ol%C3%A1%20Alex%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp →
              </a>
              <a
                href="mailto:alex.otsubo@hotmail.com"
                className="btn-secondary"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p className="footer-text">
            © 2026 Alex Otsubo. Todos os direitos reservados.
          </p>
          <div className="footer-links">
            <a
              href="https://wa.me/5511942956780"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="mailto:alex.otsubo@hotmail.com">E-mail</a>
            <a
              href="https://www.youtube.com/@alexlamad6702"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
