import { projectClient as client } from '@/sanity/lib/client'

export const revalidate = 60

const query = `
{
  "services": *[_type == "services"] | order(_createdAt asc){
    _id, title, slug, description
    },
    "packages": *[_type == "packages"] | order(_createdAt asc){
        _id, title, slug, description, bestFor, packageItem
    }
}
`

export default async function Services() {
    const data = await client.fetch(query)
    const services = data?.services || []
    const packages = data?.packages || []

    return (
        <section className="service-page-outer-wrapper">
        <div className="services-page-container">
            {/* Services */}
            <section className="services-full-section" aria-labelledby="services-heading">
            <div className="services-full-container">
                <span className="services-full-label">Services</span>
                <h1 id="services-heading" className="services-full-title">Design. Code. Intent</h1>
                <p className="services-full-intro">
                Every site starts with strong foundations. From visual clarity, smart structure, and a brand story worth
                telling, my services cover every step of bringing your website to life.
                </p>

                {/* Services Content */}
                <div className="services-full-grid" role="list">
                {services.map((s, i) => (
                    <article
                    key={s._id || i}
                    className="services-full-item"
                    role="listitem"
                    id={s.slug?.current}
                    >
                    <div className="services-full-itemInner">
                        <span className="services-full-number">{String(i + 1).padStart(2, '0')}</span>
                        <h2 className="services-full-heading">{s.title}</h2>
                        {s.description && <p className="services-full-text">{s.description}</p>}
                    </div>
                    </article>
                ))}

                {services.length === 0 && (
                    <article className="services-full-item" role="listitem">
                    <h2 className="services-full-heading">No services yet</h2>
                    <p className="services-full-text">Add services in Sanity to see them here.</p>
                    </article>
                )}
                </div>
            </div>
            </section>

            {/* Packages */}
            <section className="packages-full-section" aria-labelledby="packages-heading">
            <div className="packages-full-container">
                {/* Packages Header */}
                <span className="packages-full-label">Packages</span>
                <h2 id="packages-heading" className="packages-full-title">Inked with Intent</h2>
                <p className="packages-full-intro">
                Every brand starts at a different point. Whether you need a bold portfolio, a fully-functioning shop, or
                booking built into your site — there’s a package designed to fit your vision.
                </p>

                {/* Packages Content */}
                <div className="packages-full-stack">
                {packages.map((p, i) => (
                    <article key={p._id || i} className="packages-full-item" id={p.slug?.current}>
                    <header className="packages-full-header">
                        <h3 className="package-title">{p.title}</h3>
                        {p.description && <p className="package-description">{p.description}</p>}
                        <div className="package-label">Best For:</div>
                        {p.bestFor && <div className="package-subtext">{p.bestFor}</div>}
                    </header>

                    <div className="packages-full-split">
                        {Array.isArray(p.packageItem) && p.packageItem.length > 0 && (
                        <ul className="packages-full-list">
                            {p.packageItem.map((item, idx) => (
                            <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        )}
                    </div>
                    </article>
                ))}

                {packages.length === 0 && (
                    <article className="packages-full-item">
                    <div className="packages-full-header">
                        <span className="packages-full-label">No packages yet</span>
                        <h3 className="packages-full-heading">Add packages in Sanity to see them here.</h3>
                    </div>
                    </article>
                )}
                </div>

                {/* Footer CTA */}
                <footer className="packages-full-cta">
                <p className="packages-full-intro">
                    Not every project fits neatly into a package. If you’ve got something unique in mind, I’ll tailor a proposal to suit your goals.
                </p>
                </footer>
            </div>
            </section>
        </div>
        </section>
    )
}