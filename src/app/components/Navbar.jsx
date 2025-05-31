import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
        <Link href="/">Blue Ink Studio</Link>
        <div>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
        </div>
        </nav>
    )
}