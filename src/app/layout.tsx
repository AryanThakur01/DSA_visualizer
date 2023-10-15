import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import "./layout.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
// import { ThemeProvider } from "./components/ThemeProvider";
// import Nav from "./components/Nav";
// import LeftNav from "./components/LeftNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSA Visualizer",
  description: "get the visualization of data structures and algorithms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Top Navigation Menu */}
          <header className="sticky top-0 w-full border-b border-border py-2 text-foreground z-50 bg-background flex items-center">
            <Nav />
          </header>

          {/* Main Contents */}
          <main className="flex min-h-[80vh]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
