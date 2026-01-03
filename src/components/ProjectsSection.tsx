import { useState, useRef } from 'react';
import { Play, Pause, ExternalLink, Github, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';

const ProjectCard = ({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="group relative rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <video
          ref={videoRef}
          src={project.videoPath}
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Video Overlay */}
        <div className={`absolute inset-0 bg-background/60 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto' : 'opacity-100'}`}>
          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={togglePlay}
          >
            <Play className="w-4 h-4 mr-2" />
            {isPlaying ? 'Playing...' : 'View Demo'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-border hover:border-primary hover:text-primary"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          {project.demo && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:border-primary hover:text-primary"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of AI/ML projects with live demo videos and source code
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
