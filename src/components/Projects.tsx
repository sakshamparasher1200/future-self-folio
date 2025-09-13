import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Traffic Optimization via Computer Vision",
      description: "Engineered an end-to-end intelligent traffic management system using YOLOv8 for real-time vehicle detection. Implemented predictive algorithms that reduced average vehicle wait times by 30% and increased intersection throughput by 15%.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      technologies: ["YOLOv8", "OpenCV", "Python", "Computer Vision", "Machine Learning"],
      githubUrl: "https://github.com/sakshamparasher1200",
      liveUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-card border-border cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Interactive Card Content */}
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 transform translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="w-10 h-10 rounded-full backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-200"
                    asChild
                  >
                    <a href={project.githubUrl} aria-label="View on GitHub">
                      <Github size={16} className="text-white" />
                    </a>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="w-10 h-10 rounded-full backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-200"
                    asChild
                  >
                    <a href={project.liveUrl} aria-label="View live demo">
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </Button>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 animate-pulse">
                      ✨ Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 animate-float"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Interactive Bottom Section */}
                <div className="flex gap-3 pt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105" 
                    asChild
                  >
                    <a href={project.githubUrl} className="flex items-center gap-2">
                      <Github size={16} />
                      <span>View Code</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-200 hover:scale-105 glow" 
                    asChild
                  >
                    <a href={project.liveUrl} className="flex items-center gap-2">
                      <Play size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com/sakshamparasher1200" className="flex items-center gap-3">
              <Github size={20} />
              <span>View All Projects on GitHub</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;