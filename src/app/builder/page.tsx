"use client";
import { builder, BuilderComponent } from "@builder.io/react";

// klucz z .env.local
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BuilderPage() {
  // Renderuje model "page" z Buildera dla URL /builder
  return <BuilderComponent model="page" />;
}
