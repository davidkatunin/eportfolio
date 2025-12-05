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
    <section className="w-full min-h-screen overflow-x-hidden relative" style={{
      backgroundColor: '#c5c1be',
      backgroundImage: `
        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
      `,
      backgroundSize: '200px 200px',
      backgroundBlendMode: 'overlay'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-blue-600" />
            <Camera className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you need a developer to bring your vision to life or a photographer to capture your moments, 
            I'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-slate-700">
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
                <label htmlFor="email" className="block text-slate-700">
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
                <label htmlFor="subject" className="block text-slate-700">
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
                <label htmlFor="message" className="block text-slate-700">
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
              <p className="text-slate-600 mb-8">
                Whether you'd like to collaborate, share ideas, or simply connect, I'm always just a message away.
                Reach out through the form or find me on social media.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <a 
                    href="mailto:davidkatunin@gmail.com" 
                    className="text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    davidkatunin@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-slate-700 mb-4">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-700" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-700" />
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Camera className="w-5 h-5 text-slate-700" />
                </a>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-700 text-sm">
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
