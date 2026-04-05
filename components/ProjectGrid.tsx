import { MOCK_PROJECTS } from '@/constants/mockData';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
  return (
    <div className="container mx-auto px-4 py-16" id="projects">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Dự án nổi bật</h2>
          <p className="text-gray-500">Khám phá các dự án đang được quan tâm nhất hiện nay</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 border-2 border-primary text-primary rounded font-medium hover:bg-primary hover:text-white transition-colors">
          Xem thêm dự án
        </button>
      </div>
    </div>
  );
}
