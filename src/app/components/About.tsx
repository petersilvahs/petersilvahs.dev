import { Code2, Zap, Search, TrendingUp } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Desenvolvimento seguindo as melhores práticas e padrões da indústria",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Sites otimizados com carregamento rápido e experiência fluida",
    },
    {
      icon: Search,
      title: "SEO Otimizado",
      description: "Estrutura preparada para ranqueamento orgânico e visibilidade",
    },
    {
      icon: TrendingUp,
      title: "Alta Conversão",
      description: "Landing pages estratégicas focadas em resultados mensuráveis",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Sobre Mim</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sou desenvolvedor frontend especializado em criar experiências web modernas,
            performáticas e otimizadas para conversão. Meu foco é entregar landing pages
            que não apenas impressionam visualmente, mas também geram resultados reais
            para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
