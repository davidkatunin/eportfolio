import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Camera, Code2 } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-blue-600" />
            <Camera className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Whether you need a developer to bring your vision to life or a photographer to capture your moments, 
            I'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
            <h3 className="mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-slate-700 dark:text-slate-200">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full min-h-[150px] resize-none"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Get in Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                I'm currently available for freelance work and new opportunities. 
                Feel free to reach out through the form or connect with me on social media.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Email</p>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Camera className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </a>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-700 dark:text-green-400 text-sm">
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
