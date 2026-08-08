import './globals.css'

export const metadata = {
  title: 'Flat Tire Quick Services | 24/7 Mobile Roadside Assistance – Laval & Montreal',
  description: 'Fast and reliable 24/7 mobile tire repair, tire change, battery boost, and emergency roadside assistance in Laval & Montreal. We come directly to your location.',
  keywords: 'flat tire repair, mobile tire service, roadside assistance, Laval, Montreal, 24/7, battery boost, emergency gas delivery',
  icons: {
    icon: '/fab.png',
    shortcut: '/fab.png',
    apple: '/fab.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>{children}</body>
    </html>
  )
}
