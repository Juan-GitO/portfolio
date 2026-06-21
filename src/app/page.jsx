"use client";

import { useState } from "react";
import Link from "next/link";
import ArticleCard from "@/components/Article Card/ArticleCard";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget/SkillsWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget/WorkWidget";
import Footer from "@/components/Footer/Footer/Footer";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const articles = [
    {
      date: "June 10, 2026",
      title: "Designing for the User Journey",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
      link: "#",
    },
    {
      date: "May 24, 2026",
      title: "Building Reusable UI Components",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eget risus nec velit mattis blandit.",
      link: "#",
    },
    {
      date: "April 8, 2026",
      title: "Improving Accessibility in Web Apps",
      content:
        "Suspendisse potenti. Integer in felis sed urna fermentum consectetur quis vitae sapien. Morbi at diam sit amet velit finibus gravida.",
      link: "#",
    },
    {
      date: "March 18, 2026",
      title: "The Power of Component-Based Architecture",
      content:
        "Nullam euismod, nisi vel consectetur interdum, nisl nisi commodo mauris, vitae luctus elit massa nec metus. Donec commodo velit vitae gravida tincidunt.",
      link: "#",
    },
  ];

  const skills = [
    { name: "JavaScript", proficiency: 50, icon: "/placeholder.svg" },
    { name: "React", proficiency: 20, icon: "/placeholder.svg" },
    { name: "Next.js", proficiency: 15, icon: "/placeholder.svg" },
    { name: "TypeScript", proficiency: 50, icon: "/placeholder.svg" },
    { name: "Tailwind CSS", proficiency: 10, icon: "/placeholder.svg" },
  ];

  const experiences = [
    {
      logo: "/placeholder.svg",
      organization: "Tech Company Inc",
      jobTitle: "Senior Frontend Developer",
      startYear: 2022,
      endYear: null,
    },
    {
      logo: "/placeholder.svg",
      organization: "Digital Solutions LLC",
      jobTitle: "Full Stack Developer",
      startYear: 2020,
      endYear: 2022,
    },
    {
      logo: "/placeholder.svg",
      organization: "StartUp Ventures",
      jobTitle: "Junior Developer",
      startYear: 2019,
      endYear: 2020,
    },
  ];

  const footerLinks = [
    { title: "GitHub", url: "https://github.com" },
    { title: "LinkedIn", url: "https://linkedin.com" },
    { title: "Email", url: "mailto:contact@portfolio.com" },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-600/20" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-600/20" />
      <main>
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_35%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_35%)]" />
          <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-600/20" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-600/20" />
          <div className="relative text-center space-y-6">
            <h1 className="text-8xl md:text-6xl font-bold italic text-slate-900 dark:text-white leading-tight">
              Juan Bernardo Ospina
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I am learning to craft beautiful, functional, and user-centric digital experiences. With a passion for
              clean code, I transform ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Link
                href="/projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                View My Work
              </Link>
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {contactOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-6"
            onClick={() => setContactOpen(false)}
          >
            <div
              className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400 font-semibold">
                    Contact Information
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Juan Bernardo Ospina</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-2 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
              <div className="mt-8 space-y-5 text-slate-700 dark:text-slate-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-medium">juanbospinam@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">
                    Phone
                  </p>
                  <p className="mt-2 text-lg font-medium">(xxx) xxx-xxxx</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/juan-bernardo-ospina-m"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    linkedin.com/in/juan-bernardo-ospina-m
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400 font-semibold">
                    Featured Articles
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Insights from my work</h2>
                </div>
                <Link
                  href="/about"
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                >
                  Learn more about me →
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {articles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    date={article.date}
                    title={article.title}
                    content={article.content}
                    link={article.link}
                  />
                ))}
              </div>
            </div>

            <aside className="space-y-8 sticky top-28">
              <WorkWidget
                title="Experience"
                content="A snapshot of my journey as a developer, where I focus on building polished web experiences."
                experiences={experiences}
              />
              <SkillsWidget
                title="Skills"
                content="A selection of tools and technologies I work with to deliver modern web products."
                skills={skills}
              />
            </aside>
          </div>
        </section>
      </main>

      {/* Footer is provided globally in layout.jsx; removed duplicate here. */}
    </div>
  );
}
