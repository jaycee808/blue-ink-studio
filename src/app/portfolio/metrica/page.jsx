import { metricaCaseStudy as cs } from "../../data/metricaCaseStudy.js"

export default function Metrica() {
    return (
        <section className="caseStudy-full-section">
        <div className="caseStudy-full-container">
            <span className="caseStudy-full-label text-label">Case Study</span>
            <h1 className="caseStudy-full-title subheader">{cs.title}</h1>
            <p className="caseStudy-full-intro text-label">{cs.tagline}</p>
        </div>

        {/* Overview */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading subheader">Overview</h2>
            <p className="text-body">{cs.overview.context}</p>
            <p className="text-body"><strong>Goal:</strong> {cs.overview.goal}</p>
            <p className="text-body"><strong>My Role:</strong> {cs.overview.myRole}</p>
        </div>

        {/* Objectives & Strategy */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading subheader">Objectives & Strategy</h2>
            <ul className="text-list">
            {cs.objectivesStrategy.objectives.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
            <h3 className="section-heading">Target Audience</h3>
            <ul className="text-list">
            {cs.objectivesStrategy.targetAudience.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <h3 className="section-heading">Requirements</h3>
            <ul className="text-list">
            {cs.objectivesStrategy.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
        </div>

        {/* Brand Direction */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading subheader">Brand Direction</h2>
            <p className="text-body"><strong>Logo: </strong>{cs.brandDirection.logo}</p>

            <h3 className="section-heading">Colour Palette</h3>
            <ul className="text-list">
            {Object.entries(cs.brandDirection.colourPalette).map(([name, hex]) => (
                <li key={name}>
                <span className="swatch" style={{ background: hex }} /> {name}: {hex}
                </li>
            ))}
            </ul>

            <h3 className="subheader">Typography</h3>
            <ul className="text-list">
            {Object.entries(cs.brandDirection.typography).map(([k, v]) => (
                <li key={k}><strong>{k}:</strong> {v}</li>
            ))}
            </ul>

            <h3 className="section-heading">Inspiration</h3>
            <ul className="text-list">
            {cs.brandDirection.inspiration.map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
        </div>

        {/* Design Process */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading subheader">Design Process</h2>
            <p className="text-body">{cs.designProcess.wireframes}</p>
            <p className="text-body">{cs.designProcess.hierarchy}</p>

            <h3 className="section-heading">Design Decisions</h3>
            <ul className="text-list">
            {cs.designProcess.designDecisions.map((d, i) => <li key={i}>{d}</li>)}
            </ul>

            <h3 className="section-heading">Accessibility</h3>
            <ul className="text-list">
            {cs.designProcess.accessibility.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
        </div>

        {/* Development Process */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading subheader">Development Process</h2>

            <h3 className="section-heading">Tech Stack</h3>
            <ul className="text-list">
            {cs.developmentProcess.techStack.map((t, i) => <li key={i}>{t}</li>)}
            </ul>

            <h3 className="section-heading">Features Built</h3>
            <ul className="text-list">
            {cs.developmentProcess.featuresBuilt.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <h3 className="section-heading">Challenges Solved</h3>
            <ul className="text-list">
            {cs.developmentProcess.challengesSolved.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
        </div>

        {/* Final Outcome */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading subheader">Final Outcome</h2>
            <p className="text-body">{cs.finalOutcome.description}</p>
            <button className="btn-text">
            <a href={cs.finalOutcome.link} target="_blank" rel="noreferrer">
                View Live Site
            </a>
            </button>
        </div>

        {/* Reflection */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading subheader">Reflection</h2>
            <p className="text-body"><strong>Learnings:</strong> {cs.reflection.learnings}</p>
            <p className="text-body"><strong>What I’d Improve:</strong> {cs.reflection.improvements}</p>
            <p className="text-body"><strong>Value:</strong> {cs.reflection.value}</p>
        </div>
        </section>
    )
}
