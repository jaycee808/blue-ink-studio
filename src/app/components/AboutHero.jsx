export default function AboutHero() {
    return (
        <section className="about-section">
        <div className="about-container two-col">
            {/* Hero About - Header : Left Column */}
            <div className="about-col-left">
            <h2 className="section-title intro-title">Turning Ideas into Identities</h2>
            <div className="intro-stack">
                <p className="intro-text">Blue Ink Studio is built on thoughtful design and development.</p>
                <p className="intro-text">From brand launches to bold portfolios, every project is crafted with clarity and a distinct voice.</p>
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

            {/* Block 02 — Approach */}
            <section className="about-block">
                <header className="block-head">
                <span className="block-number">02</span>
                <h3 className="block-title">My Approach</h3>
                </header>

                <div className="approach-grid">
                <div className="approach-card">
                    <h4 className="approach-title">Structured</h4>
                    <p className="approach-desc">Clean grids, clear hierarchy.</p>
                </div>
                <div className="approach-card">
                    <h4 className="approach-title">Intentional</h4>
                    <p className="approach-desc">Every detail has a reason.</p>
                </div>
                <div className="approach-card">
                    <h4 className="approach-title">Bold</h4>
                    <p className="approach-desc">Visuals with lasting impact.</p>
                </div>
                </div>

                <p className="approach-foot">Built with Next.js and Sanity, shaped by editorial design.</p>
            </section>

            </div>
        </div>
        </section>
    );
}