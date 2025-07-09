import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Blue Ink Studio',
  description: 'Digital Design with Purpose.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-image">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}