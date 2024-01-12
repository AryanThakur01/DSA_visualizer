import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import "./layout.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import NextAuthSessionProvider from "@/components/NextAuthSessionProvider";
import Footer from "@/components/Footer";

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
        <NextAuthSessionProvider>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <ReduxProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              {/* Top Navigation Menu */}
              <header className="sticky top-0 w-full border-b border-border py-2 text-foreground z-50 bg-background flex items-center">
                <Nav />
              </header>

              {/* Main Contents */}
              <main className="flex min-h-[80vh]">{children}</main>
            </ThemeProvider>
          </ReduxProvider>
        </NextAuthSessionProvider>
        <Footer />
      </body>
    </html>
  );
}
