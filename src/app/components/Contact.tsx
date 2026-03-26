import { useState } from "react";
import { Mail, MessageSquare, User, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/f2a241cf051ffe8f59621ba6948892b9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          "_subject": "Novo contato do Portfolio",
          "_captcha": "false",
          "_template": "table"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Mensagem enviada com sucesso! Retornarei em breve.");

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            company: "",
            projectType: "",
            budget: "",
            message: "",
          });
          setIsSubmitted(false);
        }, 3000);
      } else {
        toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tem um projeto em mente? Preencha o formulário abaixo e vamos
            conversar sobre como posso ajudar a transformar sua ideia em realidade
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                  <User className="w-4 h-4" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="petersilvahs@gmail.com"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="flex items-center gap-2 text-gray-700">
                Empresa (Opcional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                placeholder="Nome da sua empresa"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div className="space-y-2">
                <label htmlFor="projectType" className="flex items-center gap-2 text-gray-700">
                  Tipo de Projeto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="institutional">Site Institucional</option>
                  <option value="webapp">Web App</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label htmlFor="budget" className="flex items-center gap-2 text-gray-700">
                  Orçamento Estimado
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                >
                  <option value="">Selecione...</option>
                  <option value="<5k">Até R$ 5.000</option>
                  <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                  <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                  <option value=">20k">Acima de R$ 20.000</option>
                  <option value="flexible">Flexível</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 text-gray-700">
                <MessageSquare className="w-4 h-4" />
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                placeholder="Conte-me mais sobre seu projeto..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Mensagem Enviada!
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <a href="mailto:petersilvahs@gmail.com" className="group flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">E-mail</h3>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  petersilvahs@gmail.com
                </span>
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <MessageSquare className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">WhatsApp</h3>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  Entrar em contato
                </span>
              </a>
              <a href="https://github.com/petersilvahs" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <div className="w-8 h-8 text-blue-600 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">GitHub</h3>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  petersilvahs
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
