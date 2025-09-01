import { atlasCaseStudy as cs } from "../../data/atlasCaseStudy.js"

export default function Atlas() {
    return (
        <section className="caseStudy-full-section">
        <div className="caseStudy-full-container">
            <span className="caseStudy-full-label">Case Study</span>
            <h1 className="caseStudy-full-title">{cs.title}</h1>
            <p className="caseStudy-full-intro">{cs.tagline}</p>
        </div>

        {/* Overview */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading">Overview</h2>
            <p>{cs.overview.context}</p>
            <p><strong>Goal:</strong> {cs.overview.goal}</p>
            <p><strong>My Role:</strong> {cs.overview.myRole}</p>
        </div>

        {/* Objectives & Strategy */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading">Objectives & Strategy</h2>
            <ul>
            {cs.objectivesStrategy.objectives.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
            <h3>Target Audience</h3>
            <ul>
            {cs.objectivesStrategy.targetAudience.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <h3>Requirements</h3>
            <ul>
            {cs.objectivesStrategy.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
        </div>

        {/* Brand Direction */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading">Brand Direction</h2>
            <p>{cs.brandDirection.logo}</p>
            <h3>Colour Palette</h3>
            <ul>
            {Object.entries(cs.brandDirection.colourPalette).map(([name, hex]) => (
                <li key={name}>
                <span className="swatch" style={{ background: hex }} /> {name}: {hex}
                </li>
            ))}
            </ul>
            <h3>Typography</h3>
            <ul>
            {Object.entries(cs.brandDirection.typography).map(([k, v]) => (
                <li key={k}><strong>{k}:</strong> {v}</li>
            ))}
            </ul>
            <h3>Inspiration</h3>
            <ul>
            {cs.brandDirection.inspiration.map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
        </div>

        {/* Design Process */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading">Design Process</h2>
            <p>{cs.designProcess.wireframes}</p>
            <p>{cs.designProcess.hierarchy}</p>
            <h3>Design Decisions</h3>
            <ul>{cs.designProcess.designDecisions.map((d, i) => <li key={i}>{d}</li>)}</ul>
            <h3>Accessibility</h3>
            <ul>{cs.designProcess.accessibility.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>

        {/* Development Process */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading">Development Process</h2>
            <h3>Tech Stack</h3>
            <ul>{cs.developmentProcess.techStack.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <h3>Features Built</h3>
            <ul>{cs.developmentProcess.featuresBuilt.map((f, i) => <li key={i}>{f}</li>)}</ul>
            <h3>Challenges Solved</h3>
            <ul>{cs.developmentProcess.challengesSolved.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>

        {/* Final Outcome */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading">Final Outcome</h2>
            <p>{cs.finalOutcome.description}</p>
            <p>
            <a href={cs.finalOutcome.link} target="_blank" rel="noreferrer">
                View Live Site
            </a>
            </p>
        </div>

        {/* Reflection */}
        <div className="caseStudy-block">
            <h2 className="caseStudy-heading">Reflection</h2>
            <p><strong>Learnings:</strong> {cs.reflection.learnings}</p>
            <p><strong>What I’d Improve:</strong> {cs.reflection.improvements}</p>
            <p><strong>Value:</strong> {cs.reflection.value}</p>
        </div>
        </section>
    )
}