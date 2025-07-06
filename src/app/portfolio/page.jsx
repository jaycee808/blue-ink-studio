import { projectClient } from '../../sanity/lib/client.js'

export const revalidate = 60

async function getProjects() {
    const query = `*[_type == "project"] | order(_createdAt desc){
        _id,
        title,
        slug,
        description,
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
        <section className="work-container">
        <h1 className="work-title">My Work</h1>
        <div className="project-display">
            {projects.map((project) => (
            <div key={project._id} className="project-image-container">
                <img
                src={project.image?.asset?.url}
                alt={project.title}
                className="project-image"
                />
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech?.join(', ')}</p>
                {project.url && (
                <a
                    href={project.url}
                    className="project-link"
                    target="_blank"
                >
                    View Project →
                </a>
                )}
            </div>
            ))}
        </div>
        </section>
    )
}
