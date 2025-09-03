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

            {/* Project Display */}
            <div className="portfolio-display">
            {projects.map((project) => (
                <div key={project._id} className="portfolio-display-block">
                <div className="portfolio-display-header">
                    <h2 className="portfolio-display-heading subheader">{project.title}</h2>
                    {project.subheading && (
                    <p className="portfolio-display-subheading text-label">{project.subheading}</p>
                    )}
                </div>
                {/* Project Content - Two Column Display */}
                <div className="project-columns">
                {/* Project Image */}
                    <div className="project-image-wrapper">
                    <img
                        src={project.image?.asset?.url}
                        alt={project.title}
                        className="project-image"
                    />
                    </div>
                    

                    {/* Project - Overview */}
                    <div className="project-content">
                        <div className="project-overview">
                            <h3 className="project-meta-title section-heading">Overview</h3>
                            <p className="project-description text-body">{project.description}</p>
                        </div>
                        
                        
                        {/* Project Meta Details - Services */}
                        <div className="project-details-meta">
                            <div className="project-details-meta-block">
                            <h3 className="project-details-meta-title section-heading">Services</h3>
                            <ul className="project-details-meta-text text-list">
                            {project.services?.join(' / ')}
                            </ul>
                            </div>
                            <div className="project-details-meta-block">
                            {/* Project Meta Details - Tech Stack */}
                            <h3 className="project-details-meta-title section-heading">Tech Stack</h3>
                            <p className="project-details-meta-text text-list">{project.tech?.join(', ')}</p>
                            </div>
                        </div>

                        {/* Project CTA's */}
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
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}