import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher/ThemeSwitcher";
import Footer from "@/components/Footer/Footer/Footer";
import Image from "next/image";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const navOptions = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/uses", label: "Uses" },
];

export const metadata = {
  title: "Portfolio - Home",
  description: "Professional portfolio showcasing projects, skills, and experience.",
};

const footerLinks = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://linkedin.com" },
  { title: "Email", url: "mailto:contact@portfolio.com" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 backdrop-blur-md border-b-2 border-slate-400 dark:border-slate-700 shadow-md dark:shadow-sm transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/placeholder.svg"
                  alt="Profile placeholder"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <Navbar options={navOptions} />
            </div>
            <ThemeSwitcher darkClassName="dark" />
          </div>
        </header>
        {children}

        <footer className="bg-slate-900 dark:bg-slate-950 transition-colors duration-300 pt-12 pb-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <Footer links={footerLinks} />
          </div>
        </footer>
      </body>
    </html>
  );
}
