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
        <section className="portfolio-section">
            <div className="portfolio-container">
                <h1 className="portfolio-title">Portfolio</h1>

                <div className="portfolio-stack">
                    {projects.map((project) => (
                        <div key={project._id} className="project-block">
                            <h2 className="project-heading">{project.title}</h2>
                            {project.subheading && (
                                <p className="project-subheading">{project.subheading}</p>
                            )}
                            <div className="project-split">
                                <div className="project-image-wrapper">
                                <img 
                                    src={project.image?.asset?.url}
                                    alt={project.title}
                                
                                    className="project-image"
                                />
                                </div>
                                <div className="project-content">
                                    <div className="overview-block">
                                        <h3 className="meta-title">Overview</h3>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                <div className="project-meta">
                                    <div className="meta-block">
                                        <h3 className="meta-title">Services</h3>
                                        <p className="meta-text">{project.services?.join(' / ')}</p>
                                    </div>
                                    <div className="meta-block">
                                        <h3 className="meta-title">Tech Stack</h3>
                                        <p className="meta-text">{project.tech?.join(', ')}</p>
                                    </div>
                                    </div>

                                {project.url && (
                                    <a href={project.url} className="project-link" target="_blank">
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
