import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import Nav from "./components/Nav";
import LeftNav from "./components/LeftNav";

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
          <header className="sticky top-0 w-full border-b border-border py-2 text-foreground z-50 bg-background">
            <Nav />
          </header>

          {/* Main Contents */}
          <main className="flex min-h-[80vh]">
            {/* Side Navigation */}
            <aside className="h-fit sticky top-16 container md:block hidden max-w-[18rem] py-6">
              <LeftNav />
            </aside>
            {/* Contents */}
            <div className="w-full py-8 container">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
