import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const CertificationsSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise in AI, ML, and software development
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
