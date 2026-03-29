import React, { useState } from 'react';
import { Smile, Image, Folder, Smartphone, CreditCard, Languages, Filter, PlusSquare, History, User } from 'lucide-react';

const Chat = () => {
  // 1. State for the input field
  const [message, setMessage] = useState("");
  
  // 2. State for the chat history (Local Mock Data)
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "Hello! How can I help you with SHIHE watches today?", isMe: false, time: "09:00 AM" }
  ]);

  // 3. Function to handle sending a message
  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      isMe: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage(""); // Clear input after sending
  };

  // 4. Function for Quick Action Pills
  const handleQuickAction = (actionText) => {
    setMessage(`I would like to ${actionText.toLowerCase()}...`);
  };

  return (
    <div className="flex h-screen w-full bg-white font-sans text-gray-700 overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-[280px] border-r flex flex-col hidden md:flex">
        <div className="p-4 border-b flex justify-between items-center h-[60px]">
          <span className="font-bold text-lg text-gray-800">All</span>
          <Filter size={18} className="text-gray-400 cursor-pointer hover:text-[#FA6C48]" />
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-50/30 p-2">
          <div className="p-3 bg-white rounded-xl shadow-sm border-l-4 border-[#FA6C48] flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-[10px] text-[#FA6C48]">SHIHE</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold truncate">SHIHE watch</h4>
              <p className="text-[11px] text-gray-400 truncate">Online</p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CHAT --- */}
      <main className="flex-1 flex flex-col bg-white">
        <header className="h-[60px] border-b flex items-center justify-between px-6">
          <h2 className="font-bold text-gray-800 uppercase">SHIHE watch</h2>
          <div className="flex items-center gap-6 text-gray-400">
            <PlusSquare size={20} className="hover:text-[#FA6C48] cursor-pointer" />
            <History size={20} className="hover:text-[#FA6C48] cursor-pointer" />
            <User size={20} className="hover:text-[#FA6C48] cursor-pointer" />
          </div>
        </header>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FAFAFA]">
          {chatHistory.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-xl text-sm shadow-sm ${
                msg.isMe ? 'bg-[#FA6C48] text-white rounded-tr-none' : 'bg-white border rounded-tl-none'
              }`}>
                {msg.text}
                <span className={`block text-[10px] mt-1 opacity-70 ${msg.isMe ? 'text-right' : ''}`}>{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer with Interaction */}
        <footer className="border-t p-4 bg-white">
          {/* Quick Action Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['Send order request', 'View payment options', 'Logistics Inquiry'].map((btn) => (
              <button 
                key={btn}
                onClick={() => handleQuickAction(btn)}
                className="px-4 py-1.5 border border-gray-200 rounded-full text-[12px] text-gray-500 hover:border-[#FA6C48] hover:text-[#FA6C48] transition-all"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-5 mb-3 px-2 text-gray-400">
            <Smile size={20} className="hover:text-[#FA6C48] cursor-pointer" />
            <Image size={20} className="hover:text-[#FA6C48] cursor-pointer" />
            <Folder size={20} className="hover:text-[#FA6C48] cursor-pointer" />
          </div>

          {/* Input Field */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 relative focus-within:border-[#FA6C48]">
            <textarea 
              rows="2"
              className="w-full bg-transparent border-none focus:ring-0 text-[14px] resize-none"
              placeholder="Please enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-[11px] text-gray-300">Press "Enter" to send</span>
              <button 
                onClick={handleSend}
                className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${
                  message.trim() ? 'bg-[#FA6C48] text-white shadow-md' : 'bg-gray-200 text-white cursor-not-allowed'
                }`}
              >
                Send
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Chat;