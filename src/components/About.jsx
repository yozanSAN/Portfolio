const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">About Me</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="space-y-6 text-slate-600 dark:text-slate-300">
          <p>
            Hi there! I'm a passionate software developer specializing in full-stack development, 
            with a strong focus on creating efficient, scalable, and user-friendly applications. 
            With several years of experience across various technologies, I've worked on projects 
            ranging from enterprise solutions to innovative startups.
          </p>
          <p>
            I thrive in collaborative environments where I can contribute to meaningful projects 
            that make a real difference. Whether it's architecting robust backend systems, 
            crafting intuitive user interfaces, or optimizing database performance, I'm committed 
            to delivering high-quality solutions that exceed expectations.
          </p>
          <p>
            Let's work together to bring your ideas to life! I'm always excited about new challenges 
            and opportunities to create something amazing. Feel free to reach out and let's start 
            building the product of your dreams today.
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/resume.pdf" 
            download="Your_Name_Resume.pdf"
            className="inline-block px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default About