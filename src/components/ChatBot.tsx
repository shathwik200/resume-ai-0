
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!apiKey) {
      toast.error("Please enter your OpenAI API key first");
      return;
    }
    if (!input.trim()) return;

    try {
      setLoading(true);
      const userMessage: Message = { role: 'user', content: input };
      setMessages(prev => [...prev, userMessage]);
      setInput('');

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          temperature: 0.7,
          max_tokens: 1000,
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'Failed to get response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast.error("Error: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-12 w-12 p-0 bg-resume-primary hover:bg-resume-primary/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-[350px] h-[500px] flex flex-col shadow-lg">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Resume Assistant</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              ✕
            </Button>
          </div>

          {!apiKey ? (
            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-muted-foreground mb-2">
                Please enter your OpenAI API key to use the chat assistant. 
                For better security, we recommend integrating with Supabase.
              </p>
              <Input
                type="password"
                placeholder="Enter OpenAI API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-resume-primary text-white'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask for help with your resume..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                  <Button 
                    onClick={handleSend} 
                    disabled={loading}
                    className="bg-resume-primary hover:bg-resume-primary/90"
                  >
                    {loading ? "..." : "Send"}
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  );
};
