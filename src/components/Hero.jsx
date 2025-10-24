
import { Code } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
          <Code className="w-20 h-20 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-2">Almobaraki Ayoub</h1>
        <p className="text-xl text-blue-500 dark:text-blue-400 mb-6">💻 Full Stack Softwar Developer</p>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionate software developer with expertise in building scalable web applications, 
          creating efficient backend systems, and delivering clean, maintainable code. 
          I transform ideas into digital solutions that drive innovation and solve real-world problems.
        </p>
        <button 
          onClick={scrollToContact}
          className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero