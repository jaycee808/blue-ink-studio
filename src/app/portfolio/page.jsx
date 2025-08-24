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
            <span className="portfolio-full-label">Portfolio</span>
            <h1 className="portfolio-full-title">Built to be Bold</h1>
            <p className="portfolio-full-intro">
                A curated selection of projects across design, development, and creative direction.
            </p>

            <div className="portfolio-full-stack">
            {projects.map((project) => (
                <div key={project._id} className="portfolio-full-block">
                <div className="portfolio-full-header">
                    <h2 className="portfolio-full-heading">{project.title}</h2>
                    {project.subheading && (
                    <p className="portfolio-full-subheading">{project.subheading}</p>
                    )}
                </div>

                <div className="portfolio-full-split">
                    <div className="portfolio-full-image-wrapper">
                    <img
                        src={project.image?.asset?.url}
                        alt={project.title}
                        className="portfolio-full-image"
                    />
                    </div>

                    <div className="portfolio-full-content">
                    <div className="portfolio-full-overview">
                        <h3 className="portfolio-full-meta-title">Overview</h3>
                        <p className="portfolio-full-description">{project.description}</p>
                    </div>

                    <div className="portfolio-full-meta">
                        <div className="portfolio-full-meta-block">
                        <h3 className="portfolio-full-meta-title">Services</h3>
                        <p className="portfolio-full-meta-text">{project.services?.join(' / ')}</p>
                        </div>
                        <div className="portfolio-full-meta-block">
                        <h3 className="portfolio-full-meta-title">Tech Stack</h3>
                        <p className="portfolio-full-meta-text">{project.tech?.join(', ')}</p>
                        </div>
                    </div>

                    {project.url && (
                        <a
                        href={project.url}
                        className="portfolio-full-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        View Project →
                        </a>
                    )}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}