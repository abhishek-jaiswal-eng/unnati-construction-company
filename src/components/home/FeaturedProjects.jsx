import { Link } from 'react-router-dom';
import projects from '@/data/projects.json';
import ProjectCard from '@/components/projects/ProjectCard';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-accent mb-4">
              Our Projects
            </p>
            <h2 className="font-display text-[40px] md:text-[48px] leading-[1.15] text-text-primary">
              Iconic spaces. Lasting legacies.
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-sans text-[13px] font-semibold uppercase tracking-wide text-text-primary underline underline-offset-4 whitespace-nowrap"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
