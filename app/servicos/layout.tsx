"use client"

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header currentPage="home" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
} 