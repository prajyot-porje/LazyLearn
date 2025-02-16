"use client";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

const Provider = ({children}: { children: React.ReactNode }) => {

  

  return (
    <div >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
      {children}
      </ThemeProvider>
    </div>
  );
};

export default Provider;
