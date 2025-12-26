import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section className="py-20 relative bg-[#050816]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <Send className="w-6 h-6 text-[#00f5ff]" />
          <span className="text-[#00f5ff] tracking-wider uppercase text-sm">Get In Touch</span>
        </div>
        <h2 className="mb-8 text-white">
          Let's Build Something
        </h2>
        <p className="text-gray-300 mb-12 text-xl max-w-2xl">
          Have a question, new opportunity, or just want to have a quick chat? Feel free to send me a message.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="p-6 bg-[#0a0e27] border border-gray-800 transition-colors hover:border-[#00f5ff]/50">
              <Mail className="w-8 h-8 text-[#00f5ff] mb-4" />
              <h4 className="text-white mb-2">
                Email
              </h4>
              <a href="mailto:davidkatunin@gmail.com" className="text-gray-300 hover:text-[#00f5ff] transition-colors">
                davidkatunin@gmail.com
              </a>
            </div>
            
            <div className="p-6 bg-[#0a0e27] border border-gray-800 transition-colors hover:border-[#00f5ff]/50">
              <h4 className="text-white mb-4">
                Social
              </h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#0a0e27] border border-gray-800" >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-2 bg-[#050816] border border-gray-700 text-white focus:border-[#00f5ff] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 bg-[#050816] border border-gray-700 text-white focus:border-[#00f5ff] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#050816] border border-gray-700 text-white focus:border-[#00f5ff] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-[#00f5ff] text-[#0a0e27] hover:bg-[#00f5ff]/90 transition-transform duration-200 cyber-glow-cyan hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-800">
        <p className="text-gray-400">
          © 2025 David Katunin
        </p>
      </div>
    </section>
  );
}
