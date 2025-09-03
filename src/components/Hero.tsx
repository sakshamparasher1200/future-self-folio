import { Button } from "@/components/ui/button";
import { Github, Mail, FileDown, Code } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Alex Johnson</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-6 h-16 flex items-center justify-center">
            <span className="typing">Full Stack Developer & UI/UX Designer</span>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I craft beautiful, functional web experiences with cutting-edge technology. 
            Passionate about creating solutions that make a difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="btn-hero">
              <span className="flex items-center gap-2">
                <FileDown size={20} />
                Download Resume
              </span>
            </button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Mail size={20} className="mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Code, label: "LeetCode", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:alex@example.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 card-hover"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;