import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="group block rounded-xl border border-border bg-cream-dark/40 p-6 transition-all duration-200 hover:border-copper/50 hover:bg-cream-dark/70 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl leading-none mt-0.5" aria-hidden="true">
          {project.emoji}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-brown text-lg leading-snug mb-2 group-hover:text-copper transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-copper text-sm font-medium">
        <span>Visit</span>
        <svg
          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
}
