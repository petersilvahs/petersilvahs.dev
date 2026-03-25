export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Core",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3 / Tailwind CSS", level: 95 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "React / Next.js", level: 90 },
      ],
    },
    {
      category: "Performance & SEO",
      skills: [
        { name: "Core Web Vitals", level: 90 },
        { name: "Otimização de Imagens", level: 95 },
        { name: "SEO Técnico", level: 85 },
        { name: "Lazy Loading & Code Splitting", level: 90 },
      ],
    },
    {
      category: "Ferramentas & Workflow",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Webpack / Vite", level: 85 },
        { name: "Figma / Adobe XD", level: 80 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Habilidades & Tecnologias</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Domínio completo do stack frontend moderno com foco em performance, 
            acessibilidade e otimização para mecanismos de busca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl mb-6 text-blue-600">{category.category}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl mb-8 text-center">Outras Tecnologias</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux",
              "GraphQL",
              "REST APIs",
              "Styled Components",
              "Sass/SCSS",
              "Jest",
              "React Testing Library",
              "Storybook",
              "Responsive Design",
              "Accessibility (WCAG)",
              "Google Analytics",
              "Google Tag Manager",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
