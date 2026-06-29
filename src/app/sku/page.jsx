'use client'

import { useEffect, useRef, useState } from 'react'
import JsBarcode from 'jsbarcode'

export default function SkuGeneratorPage() {
  const [text, setText] = useState('')
  const svgRef = useRef(null)

  useEffect(() => {
    if (!text || !svgRef.current) return

    JsBarcode(svgRef.current, text, {
      format: 'CODE128',
      width: 2,
      height: 80,
      displayValue: true,
    })
  }, [text])

  const downloadBarcode = () => {
    const svg = svgRef.current
    if (!svg) return

    const blob = new Blob([svg.outerHTML], {
      type: 'image/svg+xml;charset=utf-8',
    })

    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${text || 'barcode'}.svg`
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="mx-auto max-w-lg space-y-6 p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">SKU Generator</h1>
        <p className="mt-1 text-sm text-gray-500">
          Type a SKU or any text to generate a barcode. Download as SVG.
        </p>
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter SKU"
        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
      />

      <div className="flex justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 p-8">
        <svg ref={svgRef} className={!text ? 'opacity-30' : ''} />
        {!text && (
          <p className="text-sm text-gray-400">
            Your barcode will appear here
          </p>
        )}
      </div>

      <button
        onClick={downloadBarcode}
        disabled={!text}
        className="w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition enabled:hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Download Barcode
      </button>
    </div>
  )
}
