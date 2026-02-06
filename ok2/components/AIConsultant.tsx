import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは。OK² inc. のAIアシスタントです。Consulting, Planning, Connecting に関して、どのようなご相談でしょうか？' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsThinking(true);

    try {
      const apiKey = process.env.API_KEY || ''; // Ideally loaded from env
      // Fallback response if no API key is present in this demo environment, 
      // though typically we'd assume it's there as per instructions.
      // However, for robust demo purposes if the key isn't injected:
      
      let aiText = "";

      if (apiKey) {
          const ai = new GoogleGenAI({ apiKey });
          const model = 'gemini-3-flash-preview';
          
          const systemInstruction = `
            You are an intelligent assistant for "OK² inc.", a consulting firm lead by Osamu Kimura.
            The company specializes in:
            1. Consulting: Strategic business advice.
            2. Planning: Brand and project planning.
            3. Connecting: Networking and business matching.
            
            Tone: Professional, polite, slightly minimalist but warm.
            Language: Japanese (unless addressed in English).
            
            Key Information:
            - CEO: Osamu Kimura
            - Location: Shibuya-ku, Uehara
            - Contact: o.kimura@ok2inc.com
            
            If asked about specific case studies, genericize them (e.g., "We have worked with major apparel brands on global strategy").
            Keep answers concise, under 200 characters where possible, matching the website's minimalist aesthetic.
          `;

          const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: systemInstruction,
            }
          });

          // Reconstruct history roughly for context if needed, but for this simple widget, 
          // we might just send the last message or maintain a simple session.
          // For simplicity in this React component, we'll just send the new message as a single turn 
          // (or chat history if we maintained the chat object properly outside render).
          // To keep it simple and stateless for the demo:
          
          const result = await chat.sendMessage({ message: userMessage });
          aiText = result.text || "申し訳ありません。現在応答できません。";
      } else {
         // Mock response for preview without API Key
         await new Promise(resolve => setTimeout(resolve, 1500));
         aiText = "申し訳ありません。現在APIキーが設定されていないため、デモモードでの応答となります。実際の実装ではGemini APIが回答を生成します。";
      }

      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "エラーが発生しました。時間を置いて再度お試しください。" }]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-gray-200 text-ok-black' : 'bg-ok-black text-white'
        }`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-100 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-ok-black p-4 flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-full">
               <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">OK² AI Assistant</h3>
              <p className="text-gray-400 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
                Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-ok-black text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex space-x-1 items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-0"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-black transition-colors">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 bg-transparent focus:outline-none text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="p-2 bg-ok-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};