"use client"

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-background dark:text-foreground font-poppins">
      <Header currentPage="servicos" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
} 