import React, { useState } from 'react';
import { Send } from 'lucide-react';

const API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";
const API_KEY = "api_key"; // Replace with your actual API key

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isApiWorking, setIsApiWorking] = useState(true);

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessages = [...messages, { text: inputMessage, sender: 'user' }];
    setMessages(newMessages);
    setInputMessage('');

    if (!isApiWorking) {
      setMessages([...newMessages, { text: "I'm sorry, but I'm currently offline. Please try again later.", sender: 'bot' }]);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: inputMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data[0]?.generated_text || "I'm not sure how to respond to that.";

      setMessages([...newMessages, { text: botReply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setIsApiWorking(false);
      setMessages([...newMessages, { text: "I'm sorry, but I'm having trouble connecting to my knowledge base. I'll operate in a limited capacity for now.", sender: 'bot' }]);
    }
  };

  const fallbackResponse = (input) => {
    const responses = [
      "I'm currently offline, but I'd be happy to chat when I'm back online.",
      "Sorry, I can't access my full knowledge right now. Can I help with something simple?",
      "While I'm offline, why don't you tell me more about your day?",
      "I'm in offline mode. Maybe we could play a word game instead?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="w-96 h-[500px] bg-white shadow-lg rounded-lg flex flex-col">
      <div className="bg-blue-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Chatbot {!isApiWorking && "(Offline Mode)"}</h2>
      </div>
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${
              message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            }`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-grow mr-2 p-2 border rounded"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;