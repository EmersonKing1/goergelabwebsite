import { Header } from './components/Header'
import { ProtocolList } from './components/ProtocolList'
import { AIAssistant } from './components/AIAssistant'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 w-full max-w-[1920px] mx-auto px-4 py-4 lg:px-6 lg:py-6">
        <div className="h-full flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden lg:h-[calc(100vh-280px)] min-h-[520px]">
          <ProtocolList />
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden lg:w-[520px] xl:w-[560px] lg:flex-none lg:h-[calc(100vh-280px)] min-h-[520px]">
            <AIAssistant />
          </div>
        </div>
      </div>
    </div>
  )
}
