export default function AboutHero() {
    return (
        <section className="about-section">
        <div className="about-container">

            {/* About - Header */}
            <div className="about-intro">
            <h2 className="section-title intro-title">Turning Ideas into Identities</h2>
            <div className="intro-cols">
                <p className="intro-text">Blue Ink Studio is built on thoughtful design and development.</p>
                <p className="intro-text">From brand launches to bold portfolio sites, every project is crafted with care, clarity, and a distinct voice.</p>
            </div>
            </div>

            {/* About Column Display: Left - About + Studio Meta, Right = Approach */}
            <div className="about-body">
            {/* Left Column */}
            <div className="about-leftcol">
                <div className="about-me">
                <h3 className="subsection-title">About Me</h3>
                <p>
                    Hi, I’m Jamie. The designer, developer, and creative mind behind Blue Ink Studio.
                    With a background in front-end development and a love for visual storytelling.
                    I created Blue Ink to merge technical skill with expressive, purpose-led design.
                </p>
                </div>

                {/* Studio Meta */}
                <div className="studio-meta">
                <div className="tagline-block">
                    <p className="tagline">Inked with Intent</p>
                    <p className="tag-subtext">Independent design & development studio</p>
                </div>

                <div className="principles-block">
                    <div className="principle"><span className="principle-number">01</span> Intentional</div>
                    <div className="principle"><span className="principle-number">02</span> Bold</div>
                    <div className="principle"><span className="principle-number">03</span> Functional</div>
                </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="about-approach">
                <h3 className="subsection-title">My Approach</h3>
                <p>I believe great design is:</p>

                <div className="approach-grid">
                <div className="approach-card">
                    <h4 className="approach-title">Structured</h4>
                    <p className="approach-desc">Clean grids and clear hierarchy</p>
                </div>
                <div className="approach-card">
                    <h4 className="approach-title">Intentional</h4>
                    <p className="approach-desc">Every detail has a reason</p>
                </div>
                <div className="approach-card">
                    <h4 className="approach-title">Bold</h4>
                    <p className="approach-desc">Visuals with lasting impact</p>
                </div>
                </div>

                <p>
                Inspired by Swiss graphic design and editorial layouts, I tailor each project to your brand’s voice.
                Whether that's creating an identity from scratch or refining an existing one.
                </p>
            </div>
            </div>

        </div>
        </section>
    );
}
