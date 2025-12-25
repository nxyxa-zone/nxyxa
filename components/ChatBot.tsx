
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { streamGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hallo! Saya Nanda, asisten virtual SMK Pancasila. Ada yang bisa saya bantu terkait pendaftaran siswa baru tahun 2026/2027?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    
    // Add user message to state
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model' as 'user' | 'model',
      parts: [{ text: m.text }]
    }));

    // Placeholder for model response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);
    
    let fullResponse = "";
    try {
      const streamer = streamGeminiResponse(userMsg, history);
      for await (const chunk of streamer) {
        fullResponse += chunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].text = fullResponse;
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple formatter for better readability
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i} className="block mb-1">
        {line.startsWith('- ') || line.startsWith('* ') ? (
          <span className="flex gap-2">
            <span className="text-sky-500">•</span>
            <span>{line.substring(2)}</span>
          </span>
        ) : line}
      </span>
    ));
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-[280px] sm:w-[320px] h-[450px] bg-white rounded-[1.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-600 to-sky-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                <Sparkles className="text-white w-4 h-4" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xs">Asisten Nanda</h3>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                  <span className="text-sky-100 text-[9px] font-medium">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-1.5 rounded-lg text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[90%] p-3 rounded-xl text-[12px] text-left leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text ? formatText(msg.text) : <Loader2 className="w-3 h-3 animate-spin text-sky-500" />}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2 bg-slate-100 p-1 rounded-xl focus-within:ring-1 focus-within:ring-sky-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya Nanda..."
                className="flex-1 bg-transparent border-none px-2 py-1.5 text-xs focus:outline-none placeholder:text-slate-400"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-700 transition-all disabled:opacity-40 shadow-md shadow-sky-200"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-center text-[8px] text-slate-400 mt-2 uppercase tracking-wider font-semibold">
              SMK PANCASILA AI
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ring-4 ring-white/50 group ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-sky-600 hover:bg-sky-700'
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white group-hover:animate-bounce" />}
      </button>
    </div>
  );
};

export default ChatBot;
