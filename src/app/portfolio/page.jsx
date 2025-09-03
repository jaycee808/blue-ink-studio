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
        asset->{ _id, url }
        }
    }`
    return await projectClient.fetch(query)
}

export default async function PortfolioPage() {
    const projects = await getProjects()

    return (
        <section className="portfolio-full-section">
        <div className="portfolio-full-container">
            <span className="portfolio-full-label text-label">Portfolio</span>
            <h1 className="portfolio-full-title subheader">Built to be Bold</h1>
            <p className="portfolio-full-intro text-body">
            A curated selection of projects across design, development, and creative direction.
            </p>

            <div className="portfolio-display">
            {projects.map((project) => (
                <article key={project._id} className="portfolio-display-block">
                <header className="portfolio-display-header">
                    <h2 className="portfolio-display-heading subheader">{project.title}</h2>
                    {project.subheading && (
                    <p className="portfolio-display-subheading text-label">
                        {project.subheading}
                    </p>
                    )}
                </header>

                <div className="project-columns">
                    {/* Project Image */}
                    <div className="project-image-wrapper">
                        <img
                        src={project.image?.asset?.url}
                        alt={project.title}
                        className="project-image"
                        />
                    </div>

                    {/* Project Content */}
                    <div className="project-content">
                    <section className="project-overview">
                        <h3 className="project-meta-title section-heading">Overview</h3>
                        <p className="project-description text-body">{project.description}</p>
                    </section>

                    <div className="project-service-tech-wrapper">
                    {/* Services */}
                    {Array.isArray(project.services) && project.services.length > 0 && (
                        <section className="project-details-meta-block">
                        <h3 className="project-details-meta-title section-heading">Services</h3>
                        <ul className="project-details-meta-text text-list">
                            {project.services.map((service, i) => (
                            <li key={i} className="project-list-item">
                                {service}
                            </li>
                            ))}
                        </ul>
                        </section>
                    )}

                    {/* Tech Stack */}
                    {Array.isArray(project.tech) && project.tech.length > 0 && (
                        <section className="project-details-meta-block">
                        <h3 className="project-details-meta-title section-heading">Tech Stack</h3>
                        <ul className="project-details-meta-text text-list">
                            {project.tech.map((t, i) => (
                            <li key={i}>{t}</li>
                            ))}
                        </ul>
                        </section>
                    )}
                    </div>

                    {/* Project CTA */}
                    <div className="project-cta">
                        {project.slug?.current && (
                        <a
                            href={`/portfolio/${project.slug.current}`}
                            className="project-btn project-btn-primary btn-text"
                            aria-label={`View case study for ${project.title}`}
                        >
                            View Case Study
                        </a>
                        )}
                        {project.url && (
                        <a
                            href={project.url}
                            className="project-btn project-btn-secondary btn-text"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live site for ${project.title}`}
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
        </div>
        </section>
    )
}