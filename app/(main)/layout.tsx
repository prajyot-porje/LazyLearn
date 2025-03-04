import Header from "@/components/Header";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
      <div className={outfit.className}>
        <div className="fixed">
          <Header />
        </div>
        <div className="bg-white dark:bg-[#292929] ">

        {children}
        </div>
      </div>
    </main>
  );
}
