"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useCallback } from "react";
import axios from "axios";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  const CheckIsNewUser = useCallback(async () => {
    if (!user) {
      console.error("❌ No user data available!");
      return;
    }
    console.log("🛠️ Sending user data:", user);
    const result = await axios.post("/api/create-user", { user });
    console.log("✅ Provider code success");
    console.log(result.data);
  }, [user]); // ✅ Include 'user' as a dependency

  useEffect(() => {
    console.log("🔄 useUser hook updated:", user);
    if (user) {
      CheckIsNewUser();
    } else {
      console.error("❌ Clerk user is undefined!");
    }
  }, [user, CheckIsNewUser]); // ✅ Now useEffect has all dependencies

  return (
    <div>
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
