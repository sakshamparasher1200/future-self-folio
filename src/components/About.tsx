import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const stats = [
    { number: "100+", label: "LeetCode Problems Solved" },
    { number: "7.21", label: "CGPA" },
    { number: "25%", label: "Query Performance Improvement" },
    { number: "30%", label: "Traffic Wait Time Reduction" },
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student at Lovely Professional University, specializing in 
              data science and database technologies. My journey includes hands-on experience as a Database & ERP 
              Analyst Intern at DiagnoCare India, where I optimized SQL databases and improved query performance by 25%.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in machine learning, computer vision, and database optimization. My recent work includes 
              developing a real-time traffic optimization system using YOLOv8, which reduced vehicle wait times by 30%. 
              I'm passionate about solving complex problems with data-driven solutions and cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "Java", "SQL", "Machine Learning", "Computer Vision", "PostgreSQL"].map((tech) => (
                <Badge key={tech} variant="outline" className="border-primary text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-border">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
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