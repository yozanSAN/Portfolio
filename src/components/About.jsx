const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">About Me</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-xl md:text-2xl leading-relaxed">
          <p>
            I'm a full-stack developer with a passion for building scalable, user-friendly web applications. I specialize in both frontend and backend development, creating efficient solutions that solve real-world problems. From enterprise systems to innovative startups, I thrive on turning complex challenges into elegant code. Let's collaborate and build something amazing together!
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
            download="Almobaraki-Ayoub-CV.pdf"
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