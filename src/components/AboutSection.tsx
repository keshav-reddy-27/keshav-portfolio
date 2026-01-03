import { GraduationCap, MapPin, Code2, Brain } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and what drives me in the field of AI & ML
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Introduction */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-3">Passion for AI</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm deeply passionate about Artificial Intelligence and Machine Learning. 
                      My journey involves exploring cutting-edge technologies in Deep Learning, 
                      Natural Language Processing, and Computer Vision to build intelligent 
                      solutions that make a real-world impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-3">Full Stack Skills</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond AI/ML, I have a strong foundation in Full Stack Development. 
                      I enjoy building end-to-end applications, from designing intuitive 
                      user interfaces with React to developing robust backend services 
                      and deploying scalable solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Education */}
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-2">{edu.specialization}</p>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div>{edu.duration}</div>
                        <div className="px-2 py-1 rounded-md bg-secondary/10 text-secondary font-medium">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Interests */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
                <h3 className="font-heading font-semibold text-xl mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {['Deep Learning', 'Machine Learning', 'Computer Vision', 'NLP', 'MLOps', 'Full Stack Development'].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-full bg-background/50 border border-border/50 text-sm text-muted-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
