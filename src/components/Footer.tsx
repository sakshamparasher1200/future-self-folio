import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Alex Johnson</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions. 
              Let's build something amazing together!
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>San Francisco, CA</p>
              <p>alex.johnson@example.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <Button 
              size="sm" 
              className="mt-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Alex Johnson. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={14} className="text-red-500 mx-1" /> using React & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;