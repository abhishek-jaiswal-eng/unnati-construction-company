import { useParams, Link } from 'react-router-dom';
import projects from '@/data/projects.json';
import ImageSlot from '@/components/common/ImageSlot';
import Button from '@/components/common/Button';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-[32px] text-text-primary mb-4">Project not found</h1>
        <Link to="/projects" className="font-sans text-[13px] underline text-text-secondary">
          ← Back to all projects
        </Link>
      </div>
    );
  }

  const specs = [
    { label: 'Configuration', value: project.configuration },
    { label: 'Total Land Area', value: project.landArea },
    { label: 'Possession', value: project.possession },
  ];

  return (
    <div>
      <div className="aspect-[16/9] md:aspect-[21/9]">
        <ImageSlot
          src={project.image}
          alt={project.name}
          label={`Place image at:\n${project.image}`}
          className="w-full h-full"
          imgClassName="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="font-display text-[40px] md:text-[48px] text-text-primary mb-2">
          {project.name}
        </h1>
        <p className="font-sans text-[14px] text-text-secondary mb-1">{project.city}</p>
        <p className="font-sans text-[13px] text-text-tertiary uppercase tracking-wide mb-8">
          {project.category}
        </p>

        <p className="font-sans text-[16px] leading-[1.6] text-text-secondary max-w-2xl mb-10">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-10 mb-10 border-t border-border pt-8">
          {specs.map((spec) => (
            <div key={spec.label}>
              <p className="font-sans text-[11px] uppercase tracking-wide text-text-tertiary mb-1">
                {spec.label}
              </p>
              <p className="font-display text-[20px] text-text-primary">{spec.value}</p>
            </div>
          ))}
        </div>

        <Button variant="primary">Download Brochure</Button>
      </div>
    </div>
  );
}
