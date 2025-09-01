import { projectClient as client } from '@/sanity/lib/client'

export const revalidate = 60

const query = `
{
  "services": *[_type == "services"] | order(_createdAt asc){
    _id, title, slug, description
    },
    "packages": *[_type == "packages"] | order(_createdAt asc){
        _id, title, slug, description, bestFor, price, packageItem
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
                <span className="services-full-label text-label">Services</span>
                <h1 id="services-heading" className="services-full-title subheader">Design. Code. Intent</h1>
                <p className="services-full-intro text-body">
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
                        <span className="services-full-number text-label">{String(i + 1).padStart(2, '0')}</span>
                        <h2 className="services-full-heading section-heading">{s.title}</h2>
                        {s.description && <p className="services-full-text text-body">{s.description}</p>}
                    </div>
                    </article>
                ))}

                {services.length === 0 && (
                    <article className="services-full-item" role="listitem">
                    <h2 className="services-full-heading section-heading">No services yet</h2>
                    <p className="services-full-text text-body">Add services in Sanity to see them here.</p>
                    </article>
                )}
                </div>
            </div>
            </section>

            {/* Packages */}
            <section className="packages-full-section" aria-labelledby="packages-heading">
            <div className="packages-full-container">
                {/* Packages Header */}
                <span className="packages-full-label text-label">Packages</span>
                <h2 id="packages-heading" className="packages-full-title subheader">Inked with Intent</h2>
                <p className="packages-full-intro text-body">
                Every brand has a different starting point. Whether you’re lighting the spark, levelling up, or fully establishing your online presence.There’s a package to suit your vision
                </p>

                {/* Packages Content */}
                <div className="packages-full-stack">
                {packages.map((p, i) => (
                    <article key={p._id || i} className="packages-full-item" id={p.slug?.current}>
                    <header className="packages-full-header">
                        <h3 className="package-title section-heading-lrg">{p.title}</h3>
                        {p.description && <p className="package-description text-body">{p.description}</p>}
                        <div className="package-label text-label">Best For:</div>
                        {p.bestFor && <div className="package-subtext text-body">{p.bestFor}</div>}
                    </header>

                    <div className="packages-full-split">
                        {Array.isArray(p.packageItem) && p.packageItem.length > 0 && (
                        <ul className="packages-full-list text-list">
                            {p.packageItem.map((item, idx) => (
                            <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        )}
                    </div>
                    <div className="packages-cost">
                        <p className="btn-text">Prices starting from £{p.price}</p>
                    </div>
                    </article>
                ))}

                {packages.length === 0 && (
                    <article className="packages-full-item">
                    <div className="packages-full-header">
                        <span className="packages-full-label section-heading">No packages yet</span>
                        <h3 className="packages-full-heading text-body">Add packages in Sanity to see them here.</h3>
                    </div>
                    </article>
                )}
                </div>

                {/* Footer CTA */}
                <footer className="packages-full-cta">
                <p className="packages-full-intro text-body">
                    Not every project fits neatly into a package. If you’ve got something unique in mind, I’ll tailor a proposal to suit your goals.
                </p>
                </footer>
            </div>
            </section>
        </div>
        </section>
    )
}