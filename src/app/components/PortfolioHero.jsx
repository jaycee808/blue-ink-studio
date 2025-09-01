import { projectClient } from '../../sanity/lib/client.js'

export const revalidate = 60

async function getProjects() {
    const query = `*[_type == "project"] | order(_createdAt desc){
        _id,
        title,
        slug,
        subheading,
        description,
        services,
        tech,
        url,
        image {
        asset->{
            _id,
            url
        }
        }
    }`

    return await projectClient.fetch(query)
}

export default async function PortfolioHeroSection() {
    const projects = await getProjects()
    // Retrieve first three projects
    const featured = (projects || []).slice(0, 3)

    return (
        <section className="portfolio-hero-section" aria-labelledby="portfolio-hero-title">
        <div className="portfolio-hero-container">
            <header className="portfolio-hero-head">
            <span className="portfolio-hero-label text-label">Portfolio</span>
            <h2 id="portfolio-hero-title" className="portfolio-hero-title subheader">
                Digital Design with Purpose
            </h2>
            <p className="portfolio-hero-intro text-body">
                An edit of recent projects. Visual first, details inside the case studies.
            </p>
            </header>

            <div className="portfolio-hero-list">
            {featured.map((p) => (
                <article key={p._id} className="portfolio-hero-card">
                {/* Project Header */}
                <header className="portfolio-hero-card-header">
                    <h3 className="portfolio-hero-projectTitle subheader">{p.title}</h3>
                    {p.subheading && <p className="portfolio-hero-tagline text-label">{p.subheading}</p>}
                </header>

                {/* Project Content */}
                <div className="portfolio-hero-card-content">
                    {/* Left Column: Project Image */}
                    <a
                    href={p.slug?.current ? `/portfolio/${p.slug.current}` : '#'}
                    className="portfolio-hero-imageLink"
                    aria-label={`View ${p.title} case study`}
                    >
                    <div className="hero-project-image-wrapper">
                        <img
                        src={p.image?.asset?.url}
                        alt={p.title}
                        className="hero-project-image"
                        loading="lazy"
                        />
                    </div>
                    </a>

                    {/* Right Column: Project Information */}
                    <div className="portfolio-hero-meta">
                    <div className="portfolio-hero-metaBlock">
                        <h4 className="portfolio-hero-metaTitle section-heading">Services</h4>
                        <ul className="portfolio-hero-metaList text-body">
                        {Array.isArray(p.services) ? (
                            p.services.map((service, i) => (
                            <li key={i} className="portfolio-hero-metaItem">
                                {service}
                            </li>
                            ))
                        ) : (
                            <li className="portfolio-hero-metaItem text-body">{p.services}</li>
                        )}
                        </ul>
                    </div>

                    <div className="portfolio-hero-metaBlock">
                        <h4 className="portfolio-hero-metaTitle section-heading">Tech</h4>
                        <p className="portfolio-hero-metaText text-body">
                        {Array.isArray(p.tech) ? p.tech.join(', ') : p.tech}
                        </p>
                    </div>

                    <div className="portfolio-hero-ctas">
                        {p.slug?.current && (
                        <a
                            href={`/portfolio/${p.slug.current}`}
                            className="portfolio-hero-btn portfolio-hero-btnPrimary btn-text"
                            aria-label={`View case study for ${p.title}`}
                        >
                            Case Study
                        </a>
                        )}
                        {p.url && (
                        <a
                            href={p.url}
                            className="portfolio-hero-btn portfolio-hero-btnSecondary btn-text"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live site for ${p.title}`}
                        >
                            Live Site →
                        </a>
                        )}
                    </div>
                    </div>
                </div>
                </article>
            ))}
            </div>

            <footer className="portfolio-hero-foot">
            <a href="/portfolio" className="portfolio-hero-btn portfolio-hero-btnOutline btn-text">
                See All Projects
            </a>
            </footer>
        </div>
        </section>
    )
}