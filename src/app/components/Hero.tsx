import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3NDM0MzIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6 mb-8">
          <h1 className="text-5xl md:text-7xl text-white tracking-tight">
            Peter Silva
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Desenvolvedor Full Stack com foco em criar landing pages de alta performance com foco em SEO,
            conversão e experiência do usuário
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/petersilvahs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/petersilvahs/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:petersilvahs@gmail.com"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Iniciar um Projeto
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
