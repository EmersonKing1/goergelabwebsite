import { FileText, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white py-12 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.35),transparent_34%),radial-gradient(circle_at_82%_26%,rgba(255,255,255,0.2),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/18 blur-3xl" />
      <div className="absolute -top-14 left-1/3 h-44 w-44 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">The George Lab</h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          Studying Hereditary Breast and Ovarian Cancer (HBOC) & Identifying
          High-Risk Populations.
        </p>
        <div className="flex gap-6 mt-6">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <FileText className="w-5 h-5" />
            <span className="font-medium">11 Protocols</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">AI Assistant</span>
          </div>
        </div>
      </div>
    </header>
  )
}
