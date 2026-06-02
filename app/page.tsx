import { projects } from "@/lib/projects";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[--background] text-[--foreground]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-brown leading-tight mb-6">
          The Saifuddin Family
        </h1>
        <p className="text-brown-light text-lg sm:text-xl leading-relaxed max-w-xl">
          A collection of websites made for and by the Saifuddin family.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-border" />
      </div>

      {/* Sites */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="font-serif text-2xl font-medium text-brown mb-8">
          Family Sites
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 pb-12">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} The Saifuddin Family
        </p>
      </footer>
    </main>
  );
}
