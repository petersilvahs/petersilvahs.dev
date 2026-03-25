import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">Desenvolvedor Frontend</h3>
            <p className="text-gray-400 mb-4">
              Criando experiências web performáticas e otimizadas para conversão
            </p>
            <a href="mailto:petersilvahs@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
              petersilvahs@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/petersilvahs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/petersilvahs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:petersilvahs@gmail.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} - Desenvolvido com <Heart className="w-4 h-4 text-red-500" /> e muito café
          </p>
        </div>
      </div>
    </footer>
  );
}
