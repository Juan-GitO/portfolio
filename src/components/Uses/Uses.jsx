import UsesSection from "./UsesSection/UsesSection";

const usesData = [
  {
    groupName: "Hardware",
    items: [
      {
        title: "Asus G14",
        description:
          "A reliable development machine that combines performance and portability for coding, design, and testing.",
      },
      {
        title: "External Monitor",
        description:
          "A larger display for managing multiple windows, debugging, and keeping workflows visible throughout the day.",
      },
    ],
  },
  {
    groupName: "Development Tools",
    items: [
      {
        title: "VS Code",
        description:
          "My primary editor for writing, refactoring, and debugging modern web applications with extensions that speed up development.",
      },
      {
        title: "Git & GitHub",
        description:
          "Version control and collaboration tools that help me manage source history, branches, and deployment workflows.",
      },
    ],
  },
  {
    groupName: "Frontend Stack",
    items: [
      {
        title: "Next.js",
        description:
          "The framework I use for production-ready React applications, server rendering, and modern frontend architecture.",
      },
      {
        title: "Tailwind CSS",
        description:
          "A utility-first styling system that keeps interfaces consistent while enabling fast, responsive design.",
      },
    ],
  },
  {
    groupName: "Design & Collaboration",
    items: [
      {
        title: "Figma",
        description:
          "A design and prototyping tool I use to turn ideas into polished user interfaces before writing code.",
      },
    ],
  },
];

const Uses = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300 text-slate-900 dark:text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-600/20" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-600/20" />
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Tools & Setup
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What powers my daily development</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
            This page highlights the workflows, platforms, and tools I rely on to build web applications, collaborate
            efficiently, and stay productive as I embark on this journey to perfect my craft.
          </p>
        </div>

        <UsesSection items={usesData} />
      </main>
    </div>
  );
};

export default Uses;
