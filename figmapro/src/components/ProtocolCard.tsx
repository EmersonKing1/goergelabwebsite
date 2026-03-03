import { ExternalLink, FileText } from 'lucide-react'

interface ProtocolCardProps {
  title: string
  description: string
  tag: string
  tagColor: string
  pdfPath: string
  onViewPdf: (pdfPath: string, title: string) => void
}

export function ProtocolCard({
  title,
  description,
  tag,
  tagColor,
  pdfPath,
  onViewPdf,
}: ProtocolCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 group">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <span
          className="px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap"
          style={{ backgroundColor: `${tagColor}20`, color: tagColor }}
        >
          {tag}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onViewPdf(pdfPath, title)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
        >
          <FileText className="w-4 h-4" />
          View PDF
        </button>
        <a
          href={pdfPath}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Open in new tab
        </a>
      </div>
    </div>
  )
}
