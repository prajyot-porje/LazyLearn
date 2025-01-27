import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "./provider";
import { dark } from '@clerk/themes'

export const metadata: Metadata = {
  title: "Lazy Learn",
  description: "this is ",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
   >
      <html lang="en" suppressHydrationWarning>
        <body>
          <Provider>
            {children}
          </Provider>
          </body>
      </html>
    </ClerkProvider>
  );
}
