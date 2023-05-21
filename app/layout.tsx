import '@styles/globals.css'

export const metadata = {
  title: 'Step Up From',
  description: 'Multiple Step up form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <main id='app'>
        {children}
        </main>
        </body>
    </html>
  )
}
