import './globals.css'
import LayoutWrapper from './components/LayoutWrapper'

export const metadata = {
  title: 'Blue Ink Studio',
  description: 'Inked with Intent.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}