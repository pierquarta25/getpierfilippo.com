"use client";

import dynamic from "next/dynamic";

export const ChatWidgetDynamic = dynamic(
  () => import("./chat-widget").then((mod) => mod.ChatWidget),
  { ssr: false }
);
