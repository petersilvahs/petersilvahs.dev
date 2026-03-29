import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import HyperaLogo from "@/app/images/logo-hypera.svg";
import AnblickLogo from "@/app/images/logo-anblick.png";
import StoneLogo from "@/app/images/logo-stone.svg";
import StudioCaisLogo from "@/app/images/cais-na-lateral.svg";

export function Projects() {
  const projects = [
    {
      title: "Hypera Pharma",
      description: `Sustentação e modernização da infraestrutura web do grupo (migração Apache p/ Nginx).
Reestruturação de aplicações em PHP para Astro.build, maximizando SEO e performance.
Gestão automatizada (Docker, Argo CD) e otimização de conteúdo via Cloudflare e Calibre.`,
      image: HyperaLogo,
      containImage: true,
      imagePadding: "p-8",
      tags: ["Astro", "Docker", "Argo CD", "Nginx", "Cloudflare", "PHP", "Azure"],
      metrics: [
        { label: "Performance", value: "Alta Disp." },
        { label: "Migração", value: "Modernização" },
        { label: "Infra", value: "Cloudflare" },
      ],
      links: [
        { label: "Hypera", url: "https://www.hypera.com.br/", primary: true, icon: "external" },
        { label: "Mantecorp", url: "https://www.mantecorpsaude.com.br/", primary: false, icon: "external" },
      ],
    },
    {
      title: "Anblick Engenharia",
      description: `Desenvolvimento e evolução na AWS, focando em microsserviços escaláveis, segurança e infraestrutura como código (IaC).
Integração de APIs do google e serviços externos para automação de processos e otimização contínua de performance.
Colaboração multidisciplinar focada em dados, operando com sólidas práticas de testes e monitoramento em cloud.`,
      image: AnblickLogo,
      containImage: true,
      imageBg: "bg-gray-300",
      imagePadding: "p-8",
      tags: ["AWS", "Microsserviços", "IaC", "Arquitetura Cloud", "APIs", "Google Analytics 4", "Google Tag Manager", "Microsoft Clarity"],
      metrics: [
        { label: "Infraestrutura", value: "AWS Cloud" },
        { label: "Arquitetura", value: "Microsserviços" },
        { label: "Qualidade", value: "Boas Práticas" },
      ],
      links: [
        { label: "Site Oficial", url: "https://www.anblickengenharia.com.br/", primary: true, icon: "external" },
      ],
    },
    {
      title: "Stone Co.",
      description: `Sistemas financeiros (Pix, Recargas, Boletos, Aquisição e outros) com foco em frontend em React e alta disponibilidade.
Desenvolvimento de experimentos para teste A/B e análise de dados em tempo real.
Trabalhos com APIs escaláveis em ambientes distribuídos e pipelines de deploy contínuo (CI/CD).
Colaboração com times multidisciplinares seguindo metodologias ágeis e cultura de squads.`,
      image: StoneLogo,
      containImage: true,
      imagePadding: "p-10",
      tags: ["React", "Next.js", "TypeScript", "CI/CD", "Testes A/B", "Amplitude", "Styled Components", "Tailwind CSS", "APIs REST", "Hotjar / Microsoft Clarity"],
      metrics: [
        { label: "Disponibilidade", value: "Alta" },
        { label: "Foco", value: "Soluções" },
        { label: "Scale", value: "Milhões" },
      ],
      links: [
        { label: "Stone", url: "https://www.stone.com.br/", primary: true, icon: "external" },
      ],
    },
    {
      title: "Studio Cais",
      description: `Dev, Design UX & SEO.
Desenvolvemos o futuro da sua marca.
Unimos performance de código, interfaces que encantam e visibilidade estratégica para navegar no oceano digital.`,
      image: StudioCaisLogo,
      containImage: true,
      imagePadding: "p-1",
      tags: ["React", "Next.js", "TypeScript", "UX Design", "SEO", "Performance"],
      metrics: [
        { label: "Design", value: "Premium" },
        { label: "SEO", value: "Otimizado" },
        { label: "Code", value: "High Perf" },
      ],
      links: [
        { label: "Site Oficial", url: "https://agenciastudiocais.com.br/", primary: true, icon: "external" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Projetos em Destaque</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Portfólio de experiências e projetos reais com foco em resultados mensuráveis,
            performance excepcional e infraestrutura escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${project.containImage ? `object-contain ${project.imagePadding || 'p-8'} ${project.imageBg || 'bg-white'}` : 'object-cover'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                {/* Description Rendering */}
                <ul className="text-gray-600 space-y-2 text-sm flex-1">
                  {project.description.split('\n').map((line, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {project.description.includes('\n') && <span className="text-blue-500 mt-0.5">•</span>}
                      <span>{line.replace(/^• /, '')}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <p className="w-full text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Stacks & Tecnologias</p>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 mt-auto">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-blue-600 font-semibold text-sm">{metric.value}</div>
                      <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-3 pt-4 border-t border-gray-100">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${link.primary !== false
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                      {link.icon === "github" ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
