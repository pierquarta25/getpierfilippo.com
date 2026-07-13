import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

export function ChatMessage({ message }: { message: { role: string; content: string } }) {
  const isUser = message.role === 'user';

  return (
    <div className={cn("flex w-full items-start gap-x-2 py-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow">
          <Bot className="h-5 w-5" />
        </div>
      )}
      
      <div className={cn(
        "flex flex-col gap-2 rounded-lg px-4 py-3 text-sm shadow-sm",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
      )}>
        <span className="whitespace-pre-wrap">{message.content}</span>
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background text-foreground shadow">
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
