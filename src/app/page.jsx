import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight">GRET SKU</h1>
      <p className="max-w-md text-center text-gray-600">
        Barcode & SKU generation tools. No auth required yet — just show up and
        generate.
      </p>
      <div className="flex gap-4">
        <Link
          href="/sku"
          className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          SKU Generator
        </Link>
      </div>
    </div>
  )
}
