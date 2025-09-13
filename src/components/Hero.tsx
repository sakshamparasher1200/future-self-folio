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
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-4xl animate-bounce">🚀</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="text-gradient">Saksham Parashar</span>
            </h1>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-primary/30">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl sm:text-3xl font-bold text-white">
                SP
              </div>
            </div>
          </div>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 h-12 sm:h-16 flex items-center justify-center px-4">
            <span className="typing text-center flex items-center gap-2">
              Database & ERP Analyst | Data Science Enthusiast
              <span className="text-3xl">🎯</span>
            </span>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto flex items-center gap-2 justify-center flex-wrap">
            <span>Passionate about data-driven solutions</span>
            <span className="text-2xl">✨</span>
            <span>and machine learning.</span>
            <span className="text-2xl">🤖</span>
            <span>Specialized in database optimization,</span>
            <span>ERP systems, and computer vision applications that drive business impact.</span>
            <span className="text-2xl">📈</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="/Saksham_Resume.pdf" 
              download="Saksham_Parashar_Resume.pdf"
              className="btn-hero"
            >
              <span className="flex items-center gap-2">
                <FileDown size={20} />
                Download Resume
              </span>
            </a>
            
            <a 
              href="mailto:sakshamparasher1200@gmail.com"
              className="inline-flex"
            >
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                <Mail size={20} className="mr-2" />
                Get In Touch
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/sakshamparasher1200" },
              { icon: Code, label: "LeetCode", href: "https://leetcode.com/u/SakshamParashar/" },
              { icon: Mail, label: "Email", href: "mailto:sakshamparasher1200@gmail.com" },
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

      {/* Animated Ticker */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden bg-primary/10 py-2">
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="text-sm font-medium text-primary mx-8">✦ THINK LESS ✦ CREATE MORE ✦ DATA DRIVEN ✦ MACHINE LEARNING ✦ INNOVATION ✦ PYTHON ✦ SQL ✦ COMPUTER VISION ✦</span>
          <span className="text-sm font-medium text-primary mx-8">✦ THINK LESS ✦ CREATE MORE ✦ DATA DRIVEN ✦ MACHINE LEARNING ✦ INNOVATION ✦ PYTHON ✦ SQL ✦ COMPUTER VISION ✦</span>
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