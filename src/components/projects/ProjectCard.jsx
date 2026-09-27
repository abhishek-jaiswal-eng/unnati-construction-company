import { Link } from 'react-router-dom';
import ImageSlot from '@/components/common/ImageSlot';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden rounded-card mb-4">
        <ImageSlot
          src={project.image}
          alt={project.name}
          label={`Place image at:\n${project.image}`}
          className="w-full h-full"
          imgClassName="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-display text-[22px] text-text-primary">{project.name}</h3>
      <p className="font-sans text-[13px] text-text-secondary mt-1">
        {project.city} <span className="mx-1.5 text-text-tertiary">·</span> {project.category}
      </p>
    </Link>
  );
}
