import ProjectCard from "@/components/ProjectCard/ProjectCard/ProjectCard";

export const metadata = {
  title: "Portfolio - Projects",
  description: "Explore featured projects and engineering work.",
};

export default function Projects() {
  const projects = [
    {
      logo: "/placeholder.svg",
      name: "E-Commerce Platform",
      content:
        "A full-stack e-commerce platform built with modern web technologies to manage products, users, and payments.",
      link: "#",
    },
    {
      logo: "/placeholder.svg",
      name: "Social Media Dashboard",
      content:
        "A dashboard for managing engagement, analytics, and social activity across platforms using a responsive UI.",
      link: "#",
    },
    {
      logo: "/placeholder.svg",
      name: "AI Content Generator",
      content:
        "An intelligent content generation tool designed to help creators and marketers produce high-quality copy.",
      link: "#",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-600/20" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-600/20" />
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-600 dark:text-sky-400 font-semibold">Projects</p>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">Featured Work</h1>
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            These are some examples of the work I build. Each project focuses on usability, performance, and strong
            front-end design.
          </p>
        </section>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              logo={project.logo}
              name={project.name}
              content={project.content}
              link={project.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
