import { Code, Brain, MessageSquare, Globe, Wrench, Lightbulb } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: Code,
    skills: portfolioData.skills.programming,
    color: 'primary',
  },
  {
    name: 'AI / ML & Deep Learning',
    icon: Brain,
    skills: portfolioData.skills.aiml,
    color: 'secondary',
  },
  {
    name: 'NLP & Computer Vision',
    icon: MessageSquare,
    skills: portfolioData.skills.nlp,
    color: 'primary',
  },
  {
    name: 'Web Technologies',
    icon: Globe,
    skills: portfolioData.skills.web,
    color: 'secondary',
  },
  {
    name: 'Frameworks & Tools',
    icon: Wrench,
    skills: portfolioData.skills.tools,
    color: 'primary',
  },
  {
    name: 'Core Concepts',
    icon: Lightbulb,
    skills: portfolioData.skills.concepts,
    color: 'secondary',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isPrimary = category.color === 'primary';
              
              return (
                <div
                  key={category.name}
                  className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-lg ${isPrimary ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{category.name}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 
                          ${isPrimary 
                            ? 'bg-primary/5 text-primary/80 hover:bg-primary/10 hover:text-primary' 
                            : 'bg-secondary/5 text-secondary/80 hover:bg-secondary/10 hover:text-secondary'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
