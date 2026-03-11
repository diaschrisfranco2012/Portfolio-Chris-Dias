import { useState } from 'react'; // Removed the unused 'React' import
import { 
  Sun, Moon, Github, ExternalLink, Download, 
  Mail, MapPin, Terminal, Code, User, Send, Briefcase,
  Menu, X 
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`${isDark ? 'dark' : ''} scroll-smooth`}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 overflow-x-hidden selection:bg-purple-500/30">
        
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 dark:bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/20 dark:bg-pink-900/20 blur-[120px] rounded-full animate-pulse" />
        </div>

        {/*Navigation Bar */}
        <nav className="relative z-50 flex justify-between items-center px-6 py-4 md:px-12 bg-white/70 dark:bg-black/50 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 sticky top-0 transition-all duration-300">
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 hover:scale-110 transition-transform duration-300 cursor-pointer z-50">
            Chris Dias.
          </div>
          
          <div className="flex items-center gap-4 md:gap-8 z-50">
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 font-bold text-sm tracking-wider uppercase text-slate-600 dark:text-slate-300">
              <li><a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Contact</a></li>
            </ul>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-yellow-300 hover:rotate-12 hover:scale-110 transition-all duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile mode menu togggle Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-all duration-300 overflow-hidden md:hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0 border-transparent'}`}>
            <ul className="flex flex-col items-center gap-6 font-bold text-sm tracking-wider uppercase text-slate-600 dark:text-slate-300">
              <li><a href="#about" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#experience" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* HERO SECTION */}
        <header className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] px-6 py-12 md:px-20 max-w-7xl mx-auto mt-8 md:mt-0">
          <div className="md:w-1/2 text-center md:text-left space-y-6 mt-12 md:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold text-sm animate-fade-in-up border border-purple-200 dark:border-purple-500/30">
              <Terminal className="w-4 h-4" /> Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              {/* Escaped the apostrophe here */}
              Hi, I&apos;m <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 drop-shadow-sm dark:drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Chris Dias
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
              Building smart digital experiences through Web Development, Graphic Design, AI, and 3D Design.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6">
              <a href="#projects" className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </a>
              <a href="#resume" className="group px-8 py-4 bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-bold transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-500 hover:scale-105 text-center flex items-center justify-center gap-2">
                Get Resume <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-[80px] opacity-20 dark:opacity-40 animate-pulse" />
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-purple-600 to-pink-600 shadow-2xl dark:shadow-[0_0_50px_rgba(168,85,247,0.5)] group overflow-hidden transition-transform duration-500 hover:scale-105 hover:-rotate-3">
              <img 
                src="/chris.jpg" 
                alt="Chris Dias" 
                className="w-full h-full object-cover rounded-full border-4 border-slate-50 dark:border-black grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          </div>
        </header>

        {/* ABOUT ME SECTION */}
        <section id="about" className="relative z-10 py-24 px-6 md:px-20 bg-white dark:bg-[#0a0a0a] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <User className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">About Me</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I am a passionate tech enthusiast currently pursuing my Bachelor of Computer Applications (BCA) at Rosary College of Commerce & Arts. My journey in tech spans across writing clean code, designing intuitive interfaces, and bringing digital concepts into the physical world through 3D printing.
                </p>
                <p>
                  {/* Escaped the apostrophe here */}
                  Whether I&apos;m organizing college tech events, building AI-integrated chatbots, or dialing in settings on my Bambu Lab 3D printer, I thrive on solving complex problems and learning new frameworks.
                </p>
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mt-4 bg-slate-100 dark:bg-white/5 w-max px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10">
                  <MapPin className="w-5 h-5 text-pink-500" /> Based in Goa, India
                </div>
              </div>
              
              
              <div className="grid grid-cols-2 gap-4">
                {['Tailwind CSS', 'Vue.js', 'Dart', 'React', 'UI/UX Design', 'AI Integrations', 'Figma', '3D Printing'].map((skill, i) => (
                  <div key={i} className="group bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="relative z-10 py-24 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Code className="w-10 h-10 text-pink-600 dark:text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group flex flex-col bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                <h3 className="text-3xl font-black text-purple-900 dark:text-purple-200 relative z-10 group-hover:scale-110 transition-transform duration-500">AI Chatbot</h3>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Lenovo AI Assistant</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">Intelligent conversational interface developed during the Next-Gen Scholar program to streamline workflow queries and provide rapid data retrieval.</p>
                </div>
                <div className="flex gap-4 border-t border-slate-100 dark:border-white/10 pt-4 mt-auto">
                  <a href="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/11/12/20250711121728-E0ZLDJLN.json&_gl=1*npme7g*_gcl_au*MTI4NTcxNjA1MS4xNzcyOTA0Njcz*_ga*MTAwNDE3ODM3OS4xNzcyOTA0Njcz*_ga_HKHSWES9V9*czE3NzI5MDQ2NzIkbzEkZzEkdDE3NzI5MDQ3MDEkajMxJGwwJGg0NzYwOTY4MjI." className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"><ExternalLink className="w-4 h-4"/> Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group flex flex-col bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
              <div className="h-48 bg-gradient-to-br from-slate-900 to-black p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/0 transition-colors duration-500" />
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 relative z-10 group-hover:scale-110 transition-transform duration-500">HackWarz</h3>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">HackWarz 2K26 Portal</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">A high-performance, cyberpunk-themed landing page built with React and Tailwind CSS for a 24-hour hybrid coding competition.</p>
                </div>
                <div className="flex gap-4 border-t border-slate-100 dark:border-white/10 pt-4 mt-auto">
                   <a href="https://hackwarz2k26.vercel.app/" className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"><ExternalLink className="w-4 h-4"/> Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group flex flex-col bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                <h3 className="text-3xl font-black text-emerald-900 dark:text-emerald-300 relative z-10 group-hover:scale-110 transition-transform duration-500">Anify App</h3>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Animal Detection App</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">Developed a Flutter-based application that uses AI to detect and classify animals such as dogs, cats, and wildlife. Focused on integrating intelligent recognition with a simple and user-friendly mobile interface.</p>
                </div>
                <div className="flex gap-4 border-t border-slate-100 dark:border-white/10 pt-4 mt-auto">
                  <a href="https://github.com/diaschrisfranco2012/anify.git" className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><Github className="w-4 h-4"/> GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="relative z-10 py-24 px-6 md:px-20 bg-slate-100 dark:bg-[#080808] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-16 justify-center">
              <Briefcase className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white text-center">Timeline</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500">
              
              {/* Timeline Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-100 dark:border-[#080808] bg-purple-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm group-hover:shadow-xl dark:group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">AI Intern</h3>
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">Lenovo</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Next-Gen Scholar program focusing on AI integrations and chatbot development.</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-100 dark:border-[#080808] bg-pink-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300" />
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm group-hover:shadow-xl dark:group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">SEO Intern</h3>
                    <span className="text-sm font-bold text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full">Rankup Global</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Completed 120hr intership as an SEO intern and graphic designer.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="relative z-10 py-24 px-6 md:px-20 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500">
            <div className="bg-white dark:bg-[#0a0a0a] rounded-[22px] py-16 px-8 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Ready for the full spec sheet?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
                Grab a copy of my resume to get a comprehensive overview of my technical skills, internship experiences, and academic achievements.
              </p>
              <a 
                href="/chris_dias_resume.pdf" 
                download="Chris_Dias_Resume.pdf"
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-black text-lg overflow-hidden transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3">
                  <Download className="w-6 h-6 animate-bounce" /> Download CV (PDF)
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="relative z-10 py-24 px-6 md:px-20 bg-slate-900 dark:bg-black text-white border-t border-slate-800 dark:border-white/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              {/* Escaped the apostrophe here */}
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Let&apos;s Connect.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Whether you have a project in mind, need a developer for your team, or just want to chat about tech and 3D printing, my inbox is always open.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hello@chrisdias.dev" className="flex items-center gap-4 text-slate-300 hover:text-pink-400 transition-colors group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-pink-500/20 transition-colors"><Mail className="w-6 h-6" /></div>
                  <span className="font-bold text-lg tracking-wide">chrisdias.216@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors group cursor-pointer">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors"><MapPin className="w-6 h-6" /></div>
                  <span className="font-bold text-lg tracking-wide">Margoa, Goa</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-slate-800/50 dark:bg-white/5 p-8 rounded-3xl border border-slate-700 dark:border-white/10 flex flex-col gap-6 backdrop-blur-md">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Name</label>
                <input type="text" className="bg-slate-900/50 border border-slate-700 dark:border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Will Buyers" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Message</label>
                {/* Escaped the apostrophe here */}
                <textarea rows={4} className="bg-slate-900/50 border border-slate-700 dark:border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Let&apos;s build something awesome..." />
              </div>
              <button type="button" className="group flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">
                Send Message <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 bg-black text-center py-8 px-6 border-t border-slate-800 dark:border-white/5">
          <p className="text-lg font-bold mb-1 text-white">© 2026 Chris Dias.</p>
          <p className="text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer duration-300">
            Built with Passion using React & Tailwind CSS
          </p>
        </footer>

      </div>
    </div>
  );
}