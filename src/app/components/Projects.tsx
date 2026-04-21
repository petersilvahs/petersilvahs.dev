import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import StoneLogo from "@/app/images/logo-stone.svg";
import AnblickLogo from "@/app/images/logo-anblick.png";
import HyperaLogo from "@/app/images/logo-hypera.svg";
import StudioCaisLogo from "@/app/images/cais-na-lateral.svg";

// Screenshots Reais das Plataformas
import StonePlatform from "@/app/images/plataforma-stone.png";
import AnblickPlatform from "@/app/images/plataforma-anblick.png";
import HyperaPlatform from "@/app/images/plataforma-hypera.png";
import StudioCaisPlatform from "@/app/images/plataforma-cais.png";

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

  const platforms = [
    {
      title: "Stone Co.",
      domain: "stone.com.br",
      logo: StoneLogo,
      screenshot: StonePlatform,
      url: "https://www.stone.com.br/",
    },
    {
      title: "Studio Cais",
      domain: "agenciastudiocais.com.br",
      logo: StudioCaisLogo,
      screenshot: StudioCaisPlatform,
      url: "https://agenciastudiocais.com.br/",
    },
    {
      title: "Anblick Engenharia",
      domain: "anblickengenharia.com.br",
      logo: AnblickLogo,
      screenshot: AnblickPlatform,
      url: "https://www.anblickengenharia.com.br/",
    },
    {
      title: "Hypera Pharma",
      domain: "hypera.com.br",
      logo: HyperaLogo,
      screenshot: HyperaPlatform,
      url: "https://www.hypera.com.br/",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Plataformas Desenvolvidas Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Plataformas Desenvolvidas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interfaces de alta performance e ecossistemas digitais construídos para liderar mercados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {platforms.map((platform, idx) => (
              <div key={idx} className="group">
                {/* Screenshot with Border */}
                <div className="rounded-[2.5rem] border-[8px] sm:border-[16px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden aspect-video relative group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-500">
                  <ImageWithFallback
                    src={platform.screenshot}
                    alt={platform.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border border-gray-100 rounded-[1.8rem] pointer-events-none"></div>
                </div>

                {/* Info below */}
                <div className="mt-8 flex items-center justify-between px-2 sm:px-6">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 sm:p-3 border border-gray-100 group-hover:border-blue-200 transition-colors">
                      <img src={platform.logo} className="w-full h-full object-contain" alt={`${platform.title} logo`} />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{platform.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase mt-0.5">{platform.domain}</p>
                    </div>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-gray-50 rounded-full hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
