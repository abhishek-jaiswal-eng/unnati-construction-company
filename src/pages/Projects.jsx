import { useState } from 'react';
import projects from '@/data/projects.json';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilterTabs from '@/components/projects/ProjectFilterTabs';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <p className="font-sans text-[12px] font-semibold uppercase tracking-widest text-accent mb-4">
        Our Projects
      </p>
      <h1 className="font-display text-[40px] md:text-[48px] leading-[1.15] text-text-primary max-w-xl mb-4">
        Where vision meets reality
      </h1>
      <p className="font-sans text-[16px] text-text-secondary max-w-lg mb-10">
        A curated collection of premium residential and mixed-use developments across
        prime locations.
      </p>

      <div className="mb-12">
        <ProjectFilterTabs active={activeFilter} onChange={setActiveFilter} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
