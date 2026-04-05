import Image from 'next/image';
import { Property } from '@/constants/mockData';

interface ProjectCardProps {
  project: Property;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden bg-white hover:shadow-lg transition-all">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-primary">
          {project.status}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
        <div className="text-xs text-gray-400 mt-2">{project.location}</div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-medium text-sm border px-2 py-1 rounded">{project.type}</span>
          <span className="font-bold text-primary text-lg">{project.price}</span>
        </div>
      </div>
    </div>
  );
}
