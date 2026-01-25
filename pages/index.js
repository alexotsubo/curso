import Head from "next/head";

const styles = {
    // Colors
    colors: {
        primary: "#1A365D",
        primaryLight: "#2C5282",
        accent: "#C9A227",
        text: "#2D3748",
        textLight: "#718096",
        bg: "#F7FAFC",
        white: "#FFFFFF",
        border: "#E2E8F0",
    },
};

function Home() {
    return (
        <>
            <Head>
                <title>Alex Otsubo | Automações, IA e Estratégia Digital</title>
                <meta
                    name="description"
                    content="Especialista em automações, inteligência artificial e estratégia digital. 25 anos transformando tecnologia em resultados de negócio."
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Inter", sans-serif;
          background: #f7fafc;
          color: #2d3748;
          line-height: 1.7;
        }
      `}</style>

            <style jsx>{`
        .header {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 20px 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: "Playfair Display", serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a365d;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 35px;
          list-style: none;
        }
        .nav-links a {
          color: #2d3748;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #1a365d;
        }
        .nav-cta {
          background: #1a365d;
          color: #ffffff !important;
          padding: 10px 24px;
          border-radius: 6px;
        }
        .nav-cta:hover {
          background: #2c5282;
        }

        .hero {
          padding: 180px 0 120px;
          background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          align-items: center;
        }
        .hero h1 {
          font-family: "Playfair Display", serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 15px;
          line-height: 1.2;
        }
        .tagline {
          font-size: 1.25rem;
          color: #c9a227;
          font-weight: 500;
          margin-bottom: 25px;
        }
        .hero-text p {
          font-size: 1.1rem;
          color: #718096;
          margin-bottom: 35px;
          max-width: 500px;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a365d;
          color: #ffffff;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }
        .hero-cta:hover {
          background: #2c5282;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(26, 54, 93, 0.2);
        }
        .hero-avatar {
          width: 280px;
          height: 280px;
          background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 50px rgba(26, 54, 93, 0.15);
        }
        .hero-avatar span {
          font-family: "Playfair Display", serif;
          font-size: 5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .section {
          padding: 100px 0;
        }
        .section-white {
          background: #ffffff;
        }
        .section-gray {
          background: #f7fafc;
        }
        .section-primary {
          background: #1a365d;
          color: #ffffff;
        }
        .section-title {
          font-family: "Playfair Display", serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 15px;
        }
        .section-primary .section-title {
          color: #ffffff;
        }
        .section-subtitle {
          color: #718096;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }
        .section-primary .section-subtitle {
          color: rgba(255, 255, 255, 0.7);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-text p {
          font-size: 1.05rem;
          color: #2d3748;
          margin-bottom: 20px;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .stat-card {
          background: #f7fafc;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #e2e8f0;
        }
        .stat-number {
          font-family: "Playfair Display", serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .service-card {
          background: #ffffff;
          padding: 40px 30px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: #c9a227;
        }
        .service-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          font-size: 28px;
        }
        .service-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 12px;
        }
        .service-card p {
          font-size: 0.95rem;
          color: #718096;
        }

        .segments-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .segment-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 35px 25px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }
        .segment-card:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #c9a227;
        }
        .segment-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .segment-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .testimonial-video {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .testimonial-video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }
        .contact-btn-primary {
          background: #1a365d;
          color: #ffffff;
        }
        .contact-btn-primary:hover {
          background: #2c5282;
          transform: translateY(-2px);
        }
        .contact-btn-secondary {
          background: #ffffff;
          color: #1a365d;
          border: 2px solid #1a365d;
        }
        .contact-btn-secondary:hover {
          background: #1a365d;
          color: #ffffff;
        }

        .footer {
          background: #1a365d;
          color: #ffffff;
          padding: 40px 0;
          text-align: center;
        }
        .footer p {
          opacity: 0.8;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-avatar {
            margin: 0 auto;
            width: 200px;
            height: 200px;
          }
          .hero-avatar span {
            font-size: 4rem;
          }
          .hero h1 {
            font-size: 2.5rem;
          }
          .about-content {
            grid-template-columns: 1fr;
          }
          .services-grid,
          .segments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

            {/* Header */}
            <header className="header">
                <div className="container header-content">
                    <a href="#" className="logo">
                        Alex Otsubo
                    </a>
                    <nav>
                        <ul className="nav-links">
                            <li>
                                <a href="#sobre">Sobre</a>
                            </li>
                            <li>
                                <a href="#servicos">Serviços</a>
                            </li>
                            <li>
                                <a href="#depoimentos">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#contato" className="nav-cta">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>Alex Otsubo</h1>
                        <p className="tagline">Automações • IA • Estratégia Digital</p>
                        <p>
                            25 anos transformando tecnologia em resultados de negócio.
                            Especialista em traduzir necessidades empresariais em soluções
                            tecnológicas que geram valor mensurável.
                        </p>
                        <a href="#contato" className="hero-cta">
                            Fale Comigo →
                        </a>
                    </div>
                    <div className="hero-avatar">
                        <span>AO</span>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="sobre" className="section section-white">
                <div className="container">
                    <h2 className="section-title">Sobre</h2>
                    <p className="section-subtitle">
                        Experiência que conecta tecnologia e negócios
                    </p>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Com mais de duas décadas de experiência em Tecnologia da
                                Informação, desenvolvi uma competência única:{" "}
                                <strong>
                                    traduzir necessidades de negócio em soluções tecnológicas que
                                    realmente funcionam
                                </strong>
                                .
                            </p>
                            <p>
                                Minha trajetória inclui a fundação de uma escola de Cloud
                                Computing, execução de múltiplos lançamentos digitais de seis
                                dígitos, e o desenvolvimento de sistemas de automação para
                                empresas de diversos segmentos.
                            </p>
                            <p>
                                Hoje, atuo na interseção entre estratégia e execução —
                                entendendo profundamente as dores do negócio e implementando
                                soluções com inteligência artificial e automações que escalam
                                operações.
                            </p>
                        </div>
                        <div className="about-stats">
                            <div className="stat-card">
                                <div className="stat-number">25+</div>
                                <div className="stat-label">Anos de TI</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">6 em 7</div>
                                <div className="stat-label">Lançamentos</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">100+</div>
                                <div className="stat-label">Projetos</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">4</div>
                                <div className="stat-label">Segmentos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="servicos" className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Áreas de Atuação</h2>
                    <p className="section-subtitle">
                        Soluções tecnológicas que geram resultados
                    </p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">⚙️</div>
                            <h3>Automação de Processos</h3>
                            <p>
                                Eliminação de tarefas manuais através de fluxos automatizados
                                que aumentam eficiência.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🤖</div>
                            <h3>Inteligência Artificial</h3>
                            <p>
                                IA aplicada ao negócio: chatbots, análise de dados e machine
                                learning.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3>Consultoria Estratégica</h3>
                            <p>
                                Diagnóstico de processos e roadmap tecnológico alinhado aos
                                objetivos.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💻</div>
                            <h3>Desenvolvimento</h3>
                            <p>
                                Soluções sob medida: dashboards, integrações, APIs e sistemas
                                completos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Segments */}
            <section className="section section-primary">
                <div className="container">
                    <h2 className="section-title">Segmentos de Atuação</h2>
                    <p className="section-subtitle">
                        Experiência comprovada em diferentes mercados
                    </p>
                    <div className="segments-grid">
                        <div className="segment-card">
                            <div className="segment-icon">🏢</div>
                            <h3>Imobiliário</h3>
                        </div>
                        <div className="segment-card">
                            <div className="segment-icon">🏥</div>
                            <h3>Saúde</h3>
                        </div>
                        <div className="segment-card">
                            <div className="segment-icon">📚</div>
                            <h3>Educação</h3>
                        </div>
                        <div className="segment-card">
                            <div className="segment-icon">💰</div>
                            <h3>Financeiro</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="depoimentos" className="section section-white">
                <div className="container">
                    <h2 className="section-title">Depoimentos</h2>
                    <p className="section-subtitle">
                        O que dizem sobre o trabalho realizado
                    </p>
                    <div className="testimonials-grid">
                        <div className="testimonial-video">
                            <iframe
                                src="https://www.youtube.com/embed/XIhnYgr18sE"
                                title="Depoimento Zila e Carol"
                                allowFullScreen
                            />
                        </div>
                        <div className="testimonial-video">
                            <iframe
                                src="https://www.youtube.com/embed/NLmk7U2FWDA"
                                title="Depoimento Antonio Rocha"
                                allowFullScreen
                            />
                        </div>
                        <div className="testimonial-video">
                            <iframe
                                src="https://www.youtube.com/embed/VyUnDND50ZQ"
                                title="Depoimento Tiago Feitosa"
                                allowFullScreen
                            />
                        </div>
                        <div className="testimonial-video">
                            <iframe
                                src="https://www.youtube.com/embed/XPJi4SDvxQc"
                                title="Depoimento Maiara Sardenberg"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contato" className="section section-gray">
                <div className="container contact-content">
                    <h2 className="section-title">Vamos Conversar</h2>
                    <p className="section-subtitle">
                        Pronto para transformar sua operação com tecnologia inteligente?
                    </p>
                    <p>
                        Entre em contato para discutir como posso ajudar seu negócio a
                        escalar através de automações e inteligência artificial.
                    </p>
                    <div className="contact-buttons">
                        <a
                            href="https://wa.me/5511942956780?text=Ol%C3%A1%20Alex%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar."
                            className="contact-btn contact-btn-primary"
                        >
                            📱 WhatsApp
                        </a>
                        <a
                            href="mailto:alex.otsubo@hotmail.com"
                            className="contact-btn contact-btn-secondary"
                        >
                            ✉️ E-mail
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2026 Alex Otsubo. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Home;
