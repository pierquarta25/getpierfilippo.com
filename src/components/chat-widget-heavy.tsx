"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { ChatMessage } from "./chat-message";

export function ChatWidgetHeavy({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const { messages, sendMessage, status } = useChat();
  console.log("USECHAT MESSAGES:", messages);
  const isLoading = status === "submitted" || status === "streaming";
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  if (!isOpen) return null;

  return (
    <Card className="w-80 sm:w-96 mb-4 shadow-2xl border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="flex flex-row items-center justify-between pb-3 border-b">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          Pierfilippo AI
        </CardTitle>
        <Button variant="ghost" size="icon" aria-label="Chiudi chat" onClick={() => setIsOpen(false)} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="h-96 overflow-y-auto p-4 flex flex-col gap-2">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground p-4 h-full">
            <MessageCircle className="h-10 w-10 mb-2 opacity-20" />
            <p className="text-sm">Ciao! Sono l'assistente AI di Pierfilippo. Puoi chiedermi informazioni sulla sua esperienza, i suoi progetti o le sue competenze.</p>
          </div>
        ) : (
          messages.map((m) => (
            <ChatMessage key={m.id} message={m} />
          ))
        )}
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm p-4">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sto pensando...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>

      <CardFooter className="p-3 border-t">
        <ChatForm 
          isLoading={isLoading} 
          onSend={(text) => sendMessage({ text })} 
        />
      </CardFooter>
    </Card>
  );
}

function ChatForm({ onSend, isLoading }: { onSend: (text: string) => void, isLoading: boolean }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <Input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Chiedimi qualcosa..." 
        className="flex-1"
        disabled={isLoading}
      />
      <Button type="submit" size="icon" aria-label="Invia messaggio" disabled={isLoading || !input.trim()}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
