import Footer from './Footer'

export default function LandingLayout({ children }) {
    return (
        <>
        <main>{children}</main>
        <Footer />
        </>
    )
}