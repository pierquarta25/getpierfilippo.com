"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

// Il caricamento dinamico della chat pesante avviene solo quando serve
const ChatWidgetHeavy = dynamic(
  () => import("./chat-widget-heavy").then((mod) => mod.ChatWidgetHeavy),
  { ssr: false }
);

export function ChatWidgetDynamic() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const toggleOpen = () => {
    setHasLoaded(true);
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {hasLoaded && <ChatWidgetHeavy isOpen={isOpen} setIsOpen={setIsOpen} />}
      
      <Button
        size="icon"
        aria-label={isOpen ? "Chiudi chat AI" : "Apri chat AI"}
        className="h-14 w-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        onClick={toggleOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
