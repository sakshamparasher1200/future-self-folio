import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with data visualization, scheduled posting, and engagement tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Firebase", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "AI Chat Application",
      description: "A real-time chat application with AI integration, file sharing, and end-to-end encryption for secure communication.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
      technologies: ["Next.js", "OpenAI API", "WebRTC", "Prisma"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-hover bg-gradient-card border-border overflow-hidden group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.githubUrl} aria-label="View on GitHub">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.liveUrl} aria-label="View live demo">
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl}>
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl}>
                      <Play size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;