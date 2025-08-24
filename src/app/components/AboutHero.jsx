import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="about-section">
        <div className="about-container two-col">
            {/* Hero About - Header : Left Column */}
            <div className="about-col-left">
            <h2 className="section-title intro-title">Turning Ideas into Identities</h2>

            <div className="intro-stack">
                <p className="intro-text">Blue Ink Studio is built on thoughtful design and development.</p>
                <p className="intro-text">
                From brand launches to bold portfolios, every project is crafted with clarity and a distinct voice.
                </p>
            </div>

            {/* About Hero - CTA */}
            <div className="about-cta">
                <Link href="/portfolio" className="about-btn-cta" aria-label="View my portfolio">
                <span>View My Work</span>
                <svg className="about-btn-cta-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                </Link>
            </div>
            </div>

            {/* Hero About - Right Column */}
            <div className="about-col-right">
            {/* Block 01 — About */}
            <section className="about-block">
                <header className="block-head">
                <span className="block-number">01</span>
                <h3 className="block-title">About Me</h3>
                </header>
                <p className="block-body">
                Hi, I’m Jamie. The designer, developer, and creative mind behind Blue Ink Studio. With a background in front-end development and a love for visual storytelling. I created Blue Ink to merge technical skill with expressive, purpose-led design.
                </p>
            </section>

            {/* Block 02 — My Approach */}
            <section className="about-block">
                <header className="block-head">
                <span className="block-number">02</span>
                <h3 className="block-title">My Approach</h3>
                </header>

                <p className="block-body">
                I design with visual balance in mind. From layout to line weight, from type to code, every choice has
                intention behind it. My approach blends order and expression to create experiences that are both
                functional and distinctive.
                </p>

                <div className="approach-grid">
                <div className="approach-card">
                    <h4 className="approach-title">Structured</h4>
                    <p className="approach-desc">
                    I work with grids to create order.Structure gives projects consistency, and the
                    flexibility to scale.
                    </p>
                </div>

                <div className="approach-card">
                    <h4 className="approach-title">Intentional</h4>
                    <p className="approach-desc">
                    Good design leaves nothing to chance. Every element has a reason to exist, from typography hierarchy to
                    the smallest interaction.
                    </p>
                </div>

                <div className="approach-card">
                    <h4 className="approach-title">Bold</h4>
                    <p className="approach-desc">
                    Impact matters. I aim for visuals that are confident and memorable.
                    </p>
                </div>
                </div>
            </section>

            {/* Block 03 — Tools */}
            <section className="about-block">
                <header className="block-head">
                <span className="block-number">03</span>
                <h3 className="block-title">Tools</h3>
                </header>
                <p className="block-body">
                I believe tools should enable creativity, not restrict it. My core stack is <strong>Next.js</strong>,{" "}
                <strong>React</strong>, and <strong>Sanity CMS</strong>. I design in <strong>Affinity Designer</strong> and{" "}
                <strong>Figma</strong>, blending modern frameworks with the discipline of editorial design systems.
                </p>
            </section>
            </div>
        </div>
        </section>
    );
}
