import { Code, Database, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern frameworks like React, Vue, Angular, Node.js, and Django. Creating seamless user experiences with responsive design.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Architecture',
      description: 'Designing and implementing efficient database solutions using SQL and NoSQL databases. Optimizing queries and ensuring data integrity and security.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'API Development',
      description: 'Creating RESTful and GraphQL APIs with proper authentication, documentation, and testing. Building microservices architecture for enterprise solutions.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">What I Do</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-12">My Services</p>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services