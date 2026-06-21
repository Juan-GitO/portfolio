export const metadata = {
  title: "Portfolio - About",
  description: "Learn more about my background, skills, and approach to building web products.",
};

import Image from "next/image";

export default function About() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-600/20" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-600/20" />
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="rounded-[2rem] bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 p-12">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400 font-semibold">About Me</p>
          <h1 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
            Building thoughtful software with a user-first approach
          </h1>
          <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr] items-start text-lg leading-8 text-slate-600 dark:text-slate-300">
            <div className="space-y-8">
              <p>
                I am an international software engineering student at Ensign College, building a strong foundation in
                modern web technologies including JavaScript, TypeScript, and React. I enjoy turning product ideas into
                practical, maintainable applications.
              </p>
              <p>
                My development approach emphasizes clean code, component-driven design, and collaboration. I love
                learning new patterns, exploring software architecture, and creating experiences that feel polished and
                accessible.
              </p>
              <p>
                Outside of classwork, I am passionate about exploring emerging tools, contributing to small projects,
                and learning how teams can create better systems through thoughtful engineering.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative h-full w-full max-w-sm overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                <Image
                  src="/placeholder.svg"
                  alt="Profile placeholder"
                  width={420}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full max-w-sm rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-left shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400 font-semibold mb-4">
                  Contact
                </p>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">
                      Email
                    </p>
                    <p className="mt-2 text-base font-medium">juanbospinam@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">
                      Phone
                    </p>
                    <p className="mt-2 text-base font-medium">(xxx) xxx-xxxx</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/juan-bernardo-ospina-m"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      linkedin.com/in/juan-bernardo-ospina-m
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
