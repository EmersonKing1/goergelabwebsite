export function AIAssistant() {
  const copilotEmbedUrl =
    import.meta.env.VITE_COPILOT_EMBED_URL ||
    'https://copilotstudio.microsoft.com/environments/Default-2a144b72-f239-42d4-8c0e-6f0f17c48e33/bots/cr037_labProtocolAssistant/webchat?__version__=2'

  if (!copilotEmbedUrl) {
    return (
      <div className="h-full flex items-center justify-center p-6 text-sm text-gray-600">
        Set <code className="mx-1">VITE_COPILOT_EMBED_URL</code> in your
        <code className="ml-1">.env</code> file, then refresh.
      </div>
    )
  }

  return (
    <iframe
      title="Microsoft Copilot Agent"
      src={copilotEmbedUrl}
      className="w-full h-full border-0"
      allow="clipboard-write; microphone"
    />
  )
}
