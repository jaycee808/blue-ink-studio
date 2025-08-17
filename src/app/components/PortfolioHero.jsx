import Link from "next/link";
import { projectClient } from "@/sanity/lib/client";

export const revalidate = 60;

async function getProjects(limit = 6) {
    const query = `*[_type == "project"] | order(_createdAt desc)[0...${limit}]{
        _id, title, slug, subheading, url,
        image{ asset->{ url } }
    }`;
    return await projectClient.fetch(query);
}

export default async function PortfolioHomeUniform() {
    const projects = await getProjects(6);
    if (!projects?.length) return null;

    return (
        <section className="portfolio-hero">
        <div className="portfolio-hero-container">
            <div className="portfolio-hero-header">
            <span className="section-label-blue-bg">Selected Work</span>
            <h2 className="portfolio-hero-title">Built with Bold Intent</h2>
            <p className="portfolio-hero-intro">
                A concise selection of recent projects across design and development.
            </p>
            </div>

            <div className="portfolio-hero-grid">
            {projects.map((p) => {
                const href = p?.slug ? `/portfolio/${p.slug.current}` : p?.url || "#";
                const isExternal = href?.startsWith("http");

                const Card = (
                <article className="portfolio-hero-item" key={p._id}>
                    <header className="portfolio-hero-item-header">
                    <h3 className="portfolio-hero-item-title">{p.title}</h3>
                    {p.subheading && <p className="portfolio-hero-item-sub">{p.subheading}</p>}
                    </header>

                <div className="portfolio-hero-image-wrap">
                <img
                    src={p?.image?.asset?.url}
                    alt={p?.title || "Project image"}
                    className="portfolio-hero-image"
                    loading="lazy"
                />
                <div className="portfolio-hero-overlay">
                    <span className="portfolio-hero-overlay-title">{p.title}</span>
                </div>
                </div>
                    <span className="portfolio-hero-cta">View Project →</span>
                </article>
                );

                return isExternal ? (
                <a
                    key={p._id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-hero-linkwrap"
                >
                    {Card}
                </a>
                ) : (
                <Link key={p._id} href={href} className="portfolio-hero-linkwrap">
                    {Card}
                </Link>
                );
            })}
            </div>

            <div className="portfolio-hero-footer">
            <Link href="/portfolio" className="portfolio-hero-button">View Full Portfolio</Link>
            </div>
        </div>
        </section>
    );
}