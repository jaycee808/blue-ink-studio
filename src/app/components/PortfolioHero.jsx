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
            <span className="portfolio-hero-label">Portfolio</span>
            <h2 id="portfolio-hero-title" className="portfolio-hero-title">
                Digital Design with Purpose
            </h2>
            <p className="portfolio-hero-intro">
                An edit of recent projects. Visual first, details inside the case studies.
            </p>
            </header>

            <div className="portfolio-hero-list">
            {featured.map((p) => (
                <article key={p._id} className="portfolio-hero-card">

                {/* Left: Project Information */}
                <div className="portfolio-hero-meta">
                    <h3 className="portfolio-hero-projectTitle">{p.title}</h3>
                    {p.subheading && <p className="portfolio-hero-tagline">{p.subheading}</p>}

                    <div className="portfolio-hero-metaBlock">
                    <h4 className="portfolio-hero-metaTitle">Services</h4>
                    <ul className="portfolio-hero-metaList">
                        {Array.isArray(p.services) ? (
                        p.services.map((service, i) => (
                            <li key={i} className="portfolio-hero-metaItem">
                            {service}
                            </li>
                        ))
                        ) : (
                        <li className="portfolio-hero-metaItem">{p.services}</li>
                        )}
                    </ul>
                    </div>

                    <div className="portfolio-hero-metaBlock">
                    <h4 className="portfolio-hero-metaTitle">Tech</h4>
                    <p className="portfolio-hero-metaText">
                        {Array.isArray(p.tech) ? p.tech.join(', ') : p.tech}
                    </p>
                    </div>

                    <div className="portfolio-hero-ctas">
                    {p.slug?.current && (
                        <a
                        href={`/portfolio/${p.slug.current}`}
                        className="portfolio-hero-btn portfolio-hero-btnPrimary"
                        aria-label={`View case study for ${p.title}`}
                        >
                        Case Study
                        </a>
                    )}
                    {p.url && (
                        <a
                        href={p.url}
                        className="portfolio-hero-btn portfolio-hero-btnSecondary"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live site for ${p.title}`}
                        >
                        Live Site →
                        </a>
                    )}
                    </div>
                </div>

                {/* Right: Project Image */}
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
                </article>
            ))}
            </div>

            <footer className="portfolio-hero-foot">
            <a href="/portfolio" className="portfolio-hero-btn portfolio-hero-btnOutline">
                See All Projects
            </a>
            </footer>
        </div>
        </section>
    )
}