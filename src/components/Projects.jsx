import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Task Management App',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'University Dorms Ranking & Reviewing',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Apartments Management App',
      tags: ['Flutter', 'Supabase', 'Dart'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">Projects</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-12">Some of my Work</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects