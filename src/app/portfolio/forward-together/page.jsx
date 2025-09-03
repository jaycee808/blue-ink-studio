import { forwardCaseStudy as cs } from "../../data/forwardCaseStudy.js"

export default function ForwardTogether() {
    return (
        <section className="caseStudy-full-section">
        {/* Header */}
        <div className="caseStudy-full-container">
            <span className="caseStudy-full-label text-label">Case Study</span>
            <h1 className="caseStudy-full-title subheader">{cs.title}</h1>
            <p className="caseStudy-tagline text-label">{cs.tagline}</p>
        </div>

        {/* Overview */}
        <div className="caseStudy-block">
            <div className="caseStudy-block-title">
            <h2 className="subheader">Overview</h2>
            </div>
            <div className="caseStudy-content">
            <h3 className="caseStudy-subheading section-heading">Context</h3>
            <p className="caseStudy-text text-body">{cs.overview.context}</p>

            <h3 className="caseStudy-subheading section-heading">Goal</h3>
            <p className="caseStudy-text text-body">{cs.overview.goal}</p>

            <h3 className="caseStudy-subheading section-heading">My Role</h3>
            <p className="caseStudy-text text-body">{cs.overview.myRole}</p>
            </div>
        </div>

        {/* Objectives & Strategy */}
        <div className="caseStudy-block">
            <div className="caseStudy-block-title">
            <h2 className="subheader">Objectives</h2>
            </div>
            <div className="caseStudy-content">
            <h3 className="caseStudy-subheading section-heading">Strategy</h3>
            <ul className="caseStudy-text text-list">
                {cs.objectivesStrategy.objectives.map((o, i) => (
                <li key={i}>{o}</li>
                ))}
            </ul>

            <h3 className="caseStudy-subheading section-heading">Target Audience</h3>
            <ul className="caseStudy-text text-list">
                {cs.objectivesStrategy.targetAudience.map((t, i) => (
                <li key={i}>{t}</li>
                ))}
            </ul>

            <h3 className="caseStudy-subheading section-heading">Requirements</h3>
            <ul className="caseStudy-text text-list">
                {cs.objectivesStrategy.requirements.map((r, i) => (
                <li key={i}>{r}</li>
                ))}
            </ul>
            </div>
        </div>

        {/* Brand Direction */}
        <div className="caseStudy-block">
            <div className="caseStudy-block-title">
            <h2 className="subheader">Brand Direction</h2>
            </div>
            <div className="caseStudy-content">
            <h3 className="caseStudy-subheading section-heading">Logo</h3>
            <p className="caseStudy-text text-body">{cs.brandDirection.logo}</p>

            {/* Logo Image */}
            {cs.brandDirection?.logoImage && (
                <figure className="logo-figure">
                <img
                    src={cs.brandDirection.logoImage}
                    alt="4WARD2GETHER logo"
                    className="caseStudy-logo-image"
                    loading="lazy"
                />
                </figure>
            )}

            <h3 className="caseStudy-subheading section-heading">Colour Palette</h3>

            {/* Primary Palette */}
            <h4 className="palette-title text-label">Primary</h4>
            <div className="colour-palette">
                {Object.entries(cs.brandDirection.colourPalette.primary).map(
                ([name, hex]) => (
                    <div className="colour-swatch" key={name}>
                    <span
                        className="colour-swatch-box"
                        style={{ background: hex }}
                    />
                    <span className="colour-swatch-name text-label">{name}</span>
                    <span className="colour-swatch-hex caseStudy-text text-body">{hex}</span>
                    </div>
                )
                )}
            </div>

            {/* Secondary Palette */}
            <h4 className="palette-title text-label">Secondary</h4>
            <div className="colour-palette">
                {Object.entries(cs.brandDirection.colourPalette.secondary).map(
                ([name, hex]) => (
                    <div className="colour-swatch" key={name}>
                    <span
                        className="colour-swatch-box"
                        style={{ background: hex }}
                    />
                    <span className="colour-swatch-name text-label">{name}</span>
                    <span className="colour-swatch-hex caseStudy-text text-body">{hex}</span>
                    </div>
                )
                )}
            </div>

            {/* Typography */}
            <h3 className="caseStudy-subheading section-heading">Typography</h3>
                <div className="caseStudy-text text-body typography-grid">
                    <div className="typography-grid-item">
                        <div className="font-heading">Logo</div>
                            <div className="font-type font-baloo">Baloo 2</div>
                    </div>
                    <div className="typography-grid-item">
                        <div className="font-heading">Headings</div>
                        <div className="font-type font-inter">Inter</div>
                    </div>
                    <div className="typography-grid-item">
                        <div className="font-heading">Body</div>
                        <div className="font-type font-baloo">Baloo 2</div>
                    </div>
                </div>

            <h3 className="caseStudy-subheading section-heading">Inspiration</h3>
            <ul className="text-list">
                {cs.brandDirection.inspiration.map((i, idx) => (
                <li key={idx}>{i}</li>
                ))}
            </ul>
            </div>
        </div>

        {/* Design Process */}
        <div className="caseStudy-block">
            <div className="caseStudy-block-title">
            <h2 className="subheader">Design Process</h2>
            </div>
            <div className="caseStudy-content">
            <h3 className="caseStudy-subheading section-heading">Wireframes</h3>
            <p className="caseStudy-text text-body">{cs.designProcess.wireframes}</p>

            <h3 className="caseStudy-subheading section-heading">Hierarchy & Layout</h3>
            <p className="caseStudy-text text-body">{cs.designProcess.hierarchy}</p>

            <h3 className="caseStudy-subheading section-heading">Design Decisions</h3>
            <ul className="text-list">
                {cs.designProcess.designDecisions.map((d, i) => (
                <li key={i}>{d}</li>
                ))}
            </ul>

            <h3 className="caseStudy-subheading section-heading">Accessibility</h3>
            <ul className="text-list">
                {cs.designProcess.accessibility.map((a, i) => (
                <li key={i}>{a}</li>
                ))}
            </ul>
            </div>
        </div>

        {/* Development Process */}
        <div className="caseStudy-block">
            <div className="caseStudy-block-title">
            <h2 className="subheader">Development Process</h2>
            </div>
            <div className="caseStudy-content">
            <h3 className="caseStudy-subheading section-heading">Tech Stack</h3>
            <ul className="text-list">
                {cs.developmentProcess.techStack.map((t, i) => (
                <li key={i}>{t}</li>
                ))}
            </ul>

            <h3 className="caseStudy-subheading section-heading">Features Built</h3>
            <ul className="text-list">
                {cs.developmentProcess.featuresBuilt.map((f, i) => (
                <li key={i}>{f}</li>
                ))}
            </ul>

            <h3 className="caseStudy-subheading section-heading">Challenges Solved</h3>
            <ul className="caseStudy-text text-list">
                {cs.developmentProcess.challengesSolved.map((c, i) => (
                <li key={i}>{c}</li>
                ))}
            </ul>
            </div>
        </div>

        {/* Final Outcome */}
        <div className="caseStudy-block">
            <div className="caseStudy-block-title">
            <h2 className="subheader">Final Outcome</h2>
            </div>
            <div className="caseStudy-content">
            <h3 className="caseStudy-subheading section-heading">Description</h3>
            <p className="caseStudy-text text-body">{cs.finalOutcome.description}</p>

            <h3 className="caseStudy-subheading section-heading">Live Site</h3>
            <p className="caseStudy-text text-body">
                <a
                className="btn-text"
                href={cs.finalOutcome.link}
                target="_blank"
                rel="noreferrer"
                >
                View Live Site
                </a>
            </p>

            {/* Screenshots */}
            {cs.finalOutcome?.screenshots && (
                <>
                <h3 className="caseStudy-subheading section-heading">Screenshots</h3>

                <div
                    className="screenshots-carousel"
                    role="list"
                    aria-label="4WARD2GETHER screenshots carousel"
                >
                    {/* Hero */}
                    <article className="screenshot-card" role="listitem" tabIndex={0}>
                    <figcaption className="text-label">Hero</figcaption>
                    <figure className="screenshot-viewport">
                        <img
                        src={cs.finalOutcome.screenshots.hero}
                        alt="4WARD2GETHER Hero Page"
                        loading="lazy"
                        />
                    </figure>
                    </article>

                    {/* News */}
                    <article className="screenshot-card" role="listitem" tabIndex={0}>
                    <figcaption className="text-label">News</figcaption>
                    <figure className="screenshot-viewport">
                        <img
                        src={cs.finalOutcome.screenshots.news}
                        alt="4WARD2GETHER News Page"
                        loading="lazy"
                        />
                    </figure>
                    </article>

                    {/* Team */}
                    <article className="screenshot-card" role="listitem" tabIndex={0}>
                    <figcaption className="text-label">Team</figcaption>
                    <figure className="screenshot-viewport">
                        <img
                        src={cs.finalOutcome.screenshots.team}
                        alt="4WARD2GETHER Team Page"
                        loading="lazy"
                        />
                    </figure>
                    </article>
                </div>
                </>
            )}
            </div>
        </div>

        {/* Reflection */}
        <div className="caseStudy-block">
            <div className="caseStudy-block-title">
            <h2 className="subheader">Reflection</h2>
            </div>
            <div className="caseStudy-content">
            <h3 className="caseStudy-subheading section-heading">What I Learned</h3>
            <p className="caseStudy-text text-body">{cs.reflection.learnings}</p>

            <h3 className="caseStudy-subheading section-heading">What I’d Improve</h3>
            <p className="caseStudy-text text-body">{cs.reflection.improvements}</p>

            <h3 className="caseStudy-subheading section-heading">Value</h3>
            <p className="caseStudy-text text-body">{cs.reflection.value}</p>
            </div>
        </div>
        </section>
    )
}