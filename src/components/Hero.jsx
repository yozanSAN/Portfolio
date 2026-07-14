import { Code, AlertTriangle, ExternalLink } from 'lucide-react';

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
        
        {/* --- Disclaimer Alert Banner --- */}
        <div className="mb-8 p-4 bg-amber-50 dark:bg-slate-800/60 border border-amber-200 dark:border-amber-500/30 rounded-xl text-left flex items-start gap-3 shadow-sm max-w-2xl mx-auto">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-400">
              Hosting &amp; Live Demo Notice
            </h4>
            <p className="text-xs text-amber-700/90 dark:text-slate-300 mt-1 leading-relaxed">
              Due to recent cloud platform updates and expired free trials, some live application demos may be temporarily offline. However, all project repositories are completely documented with execution details, and installation instructions directly on my GitHub.
            </p>
          </div>
        </div>

        {/* --- Hero Profile image --- */}
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/profile.png"
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>

        {/* --- Profile Info --- */}
        <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-2">Almobaraki Ayoub</h1>
        <p className="text-xl text-blue-500 dark:text-blue-400 mb-6">💻 Full Stack Software Developer</p>
        <p className="text-slate-600 dark:text-slate-300 text-xl md:text-2xl leading-relaxed mb-7">
          Passionate software developer with expertise in building scalable web applications, 
          creating efficient backend systems, and delivering clean, maintainable code. 
          I transform ideas into digital solutions that drive innovation and solve real-world problems.
        </p>

        {/* --- Action Buttons --- */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-white transition shadow-sm"
          >
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;