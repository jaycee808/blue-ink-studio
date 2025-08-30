import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-container">
            <div className="logo">
            <Link href="/">
                <div className="logo-image">
                    <Image
                    src="/blue-ink-logo.png"
                    alt="Blue Ink Studio Logo"
                    fill
                    className="logo-img"
                    priority
                    />
                </div>
            </Link>
            </div>
            <div className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
            </div>
        </div>
        </nav>
    );
}