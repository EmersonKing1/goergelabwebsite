import { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { SearchBar } from './SearchBar'
import { ProtocolCard } from './ProtocolCard'

interface Protocol {
  id: number
  title: string
  description: string
  tag: string
  tagColor: string
  pdfPath: string
}

const protocols: Protocol[] = [
  {
    id: 1,
    title: 'FallopianTube_Collection&Storage',
    description:
      'Standard operating procedure for collecting and storing fresh fallopian tube tissue biospecimens.',
    tag: 'Fallopian Tube',
    tagColor: '#8B5CF6',
    pdfPath: 'Protocols/FallopianTube_Collection&Storage.pdf',
  },
  {
    id: 2,
    title: 'Normal and Tumor Endometrium SCALE Single Nuclei Isolation',
    description:
      'SCALE single nuclei isolation workflow for normal and tumor endometrium samples.',
    tag: 'Endometrium',
    tagColor: '#A855F7',
    pdfPath: 'Protocols/Normal and Tumor Endometrium SCALE Single Nuclei Isolation.pdf',
  },
  {
    id: 3,
    title: 'Normal Breast SCALE Single Nuclei Isolation',
    description:
      'Miltenyi nuclei isolation protocol using OctoMACS and ScalePlex for normal breast tissue.',
    tag: 'Breast (Normal)',
    tagColor: '#6366F1',
    pdfPath:
      'Protocols/Normal Breast SCALE Single Nuclei Isolation Updated Protocol 8.13.25.pdf',
  },
  {
    id: 4,
    title: 'Normal Cervix SCALE Single Nuclei Isolation',
    description:
      'Miltenyi nuclei isolation protocol using OctoMACS and ScalePlex for normal cervix tissue.',
    tag: 'Cervix (Normal)',
    tagColor: '#14B8A6',
    pdfPath:
      'Protocols/Normal Cervix SCALE Single Nuclei Isolation Updated Protocol 8.13.25.pdf',
  },
  {
    id: 5,
    title: 'Normal Ovary SCALE Single Nuclei Isolation',
    description:
      'Miltenyi nuclei isolation protocol using OctoMACS and ScalePlex for normal ovary tissue.',
    tag: 'Ovary (Normal)',
    tagColor: '#10B981',
    pdfPath: 'Protocols/Normal Ovary SCALE Single Nuclei Isolation.pdf',
  },
  {
    id: 6,
    title: 'Normal Tumor Breast SCALE Single Nuclei Isolation',
    description:
      'Miltenyi nuclei isolation using OctoMACS and ScalePlex for tumor breast tissue.',
    tag: 'Breast (Tumor)',
    tagColor: '#3B82F6',
    pdfPath:
      'Protocols/Normal Tumor Breast SCALE Single Nuclei Isolation Updated Protocol.pdf',
  },
  {
    id: 7,
    title: 'Normal_FT_Single_Nuclei_Isolation_08132025',
    description:
      'SCALE single nuclei isolation protocol for fallopian tube samples.',
    tag: 'Fallopian Tube',
    tagColor: '#8B5CF6',
    pdfPath: 'Protocols/Normal_FT_Single_Nuclei_Isolation_08132025.pdf',
  },
  {
    id: 8,
    title: 'PBMC Biospecimen Standard Operating Procedure',
    description:
      'Standard operating procedure for PBMC biospecimen processing and handling.',
    tag: 'PBMC',
    tagColor: '#EC4899',
    pdfPath: 'Protocols/PBMC Biospecimen Standard Operating Procedure.pdf',
  },
  {
    id: 9,
    title: 'PBMCs SCALE Single Nuclei Isolation Updated Protocol',
    description:
      'Thawing PBMCs for single cell processing and ScalePlex fixation protocol.',
    tag: 'PBMC',
    tagColor: '#EC4899',
    pdfPath:
      'Protocols/PBMCs SCALE Single Nuclei Isolation Updated Protocol 8.13.2025.pdf',
  },
  {
    id: 10,
    title: 'Prospective FTE and breast Specimen Collection',
    description:
      'Prospective specimen collection workflow for FTE and breast biospecimens.',
    tag: 'Collection',
    tagColor: '#06B6D4',
    pdfPath: 'Protocols/Prospective FTE and breast Specimen Collection.pdf',
  },
  {
    id: 11,
    title: 'SOP_SWAB_TUMOR_TISSUE_DISSOCIATION',
    description:
      'SOP for swab-based tumor tissue dissociation and downstream handling.',
    tag: 'Tumor Dissociation',
    tagColor: '#EF4444',
    pdfPath: 'Protocols/SOP_SWAB_TUMOR_TISSUE_DISSOCIATION.pdf',
  },
]

export function ProtocolList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activePdf, setActivePdf] = useState<Protocol | null>(null)
  const filteredProtocols = protocols.filter(
    (protocol) =>
      protocol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      protocol.tag.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-full">
      {activePdf ? (
        <div className="h-full flex flex-col bg-gray-50">
          <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {activePdf.title}
              </h3>
              <p className="text-xs text-gray-500">
                Full panel PDF preview
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={activePdf.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Open in new tab
              </a>
              <button
                type="button"
                onClick={() => setActivePdf(null)}
                className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
              >
                <X className="w-4 h-4" />
                Back to list
              </button>
            </div>
          </div>
          <div className="flex-1 min-h-0 p-4">
            <iframe
              title={`${activePdf.title} PDF preview`}
              src={activePdf.pdfPath}
              className="w-full h-full border border-gray-200 rounded-xl bg-white"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {filteredProtocols.map((protocol) => (
              <ProtocolCard
                key={protocol.id}
                {...protocol}
                onViewPdf={() => setActivePdf(protocol)}
              />
            ))}
            {filteredProtocols.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No protocols found matching your search.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
