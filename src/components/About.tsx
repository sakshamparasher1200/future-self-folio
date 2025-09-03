import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with over 3 years of experience in creating 
              innovative web applications. My journey started with a Computer Science degree, 
              and I've since worked with startups and established companies to deliver 
              high-quality digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. My goal is to 
              create applications that not only look great but also provide exceptional 
              user experiences. I'm constantly learning and staying up-to-date with the 
              latest industry trends and best practices.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                <Badge key={tech} variant="outline" className="border-primary text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;