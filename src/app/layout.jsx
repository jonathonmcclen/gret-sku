import './global.css'

export const metadata = {
  title: 'GRET SKU — Barcode & SKU Generator',
  description: 'Generate barcodes and SKUs fast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <body className="flex h-full flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
