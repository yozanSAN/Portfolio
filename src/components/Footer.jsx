import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-slate-800 dark:text-white">
            Let's Work Together -
          </div>
          <div className="px-6 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg flex items-center gap-2">
            <Mail className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            <span className="text-slate-600 dark:text-slate-300">ayoubpro183@gmail.com</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">© 2025 All rights reserved.</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/yozanSAN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition"
            >
              <Github className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/youzan-san-8380802a7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition"
            >
              <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer