import { useEffect, useRef, useState } from 'react'
import { Bot, Maximize2, Minimize2, Send, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'assistant'
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm The George Lab assistant. Ask about a protocol name, tissue type, or buffer preparation and I will point you to the right document.",
      sender: 'assistant',
    },
    {
      id: 2,
      text: "I could not find that in the protocol list. Try a tissue name, protocol title, or keyword like 'buffer' or 'storage'.",
      sender: 'assistant',
    },
    {
      id: 3,
      text: "I could not find that in the protocol list. Try a tissue name, protocol title, or keyword like 'buffer' or 'storage'.",
      sender: 'assistant',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const assistantRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === assistantRef.current)
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
    }
  }, [])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
    }
    setMessages([...messages, newMessage])
    setInputValue('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'This demo watches your question to protocol titles and summaries. Contact us at lab@georgelab.edu for AI answers.',
          sender: 'assistant',
        },
      ])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleFullscreen = async () => {
    if (!assistantRef.current) return
    if (document.fullscreenElement === assistantRef.current) {
      await document.exitFullscreen()
      return
    }
    await assistantRef.current.requestFullscreen()
  }

  return (
    <div ref={assistantRef} className="flex flex-col h-full bg-white">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            The George Lab AI Protocol Assistant
          </h2>
          <button
            onClick={toggleFullscreen}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Toggle chat fullscreen"
            title="Toggle chat fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Ask questions about any protocol and get quick guidance for George Lab
          workflows.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
            )}
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about buffers, tissue handling, or a protocol name..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
          >
            <span className="hidden sm:inline">Send</span>
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
