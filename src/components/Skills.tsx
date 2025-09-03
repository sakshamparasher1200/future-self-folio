import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Cloud, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 85 },
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "User Research", level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "Python", "Java", "C++", "GraphQL", "REST APIs", 
              "Firebase", "Supabase", "Redis", "Jest", "Cypress", "Git", 
              "Linux", "Nginx", "WebRTC", "Socket.io"
            ].map((tech) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-colors card-hover"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;