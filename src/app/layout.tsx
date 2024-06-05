import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Head of Engineering - [Your Name]",
  description: "Personal website of the Head of Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="glass-effect fixed top-0 left-0 w-full text-white p-4 md:p-6 shadow-2xl z-50 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg  mb-2 md:mb-0 text-center md:text-left">
              Jyothika Sahajanandan
            </h1>
            <nav className="mt-2 md:mt-0 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 text-lg">
              <a href="#about" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">About</a>
              <a href="#experience" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">Experience</a>
              <a href="#projects" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">Projects</a>
              <a href="#blog" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">Blog</a>
              <a href="#contact" className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">Contact</a>
            </nav>
          </div>
        </header>
        <div className="mt-24 md:mt-32">
          <main className="max-w-screen-lg mx-auto p-4 space-y-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
