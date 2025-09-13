import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Java", "Python", "SQL", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      icon: Database,
      title: "Databases & Big Data",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Kaggle", "Tableau", "Power BI"]
    },
    {
      icon: Cloud,
      title: "Familiar With",
      skills: ["C++", "HTML", "CSS", "JavaScript", "Docker", "AWS (S3, SageMaker)"]
    },
    {
      icon: Zap,
      title: "Other Tools",
      skills: ["Git", "GitHub", "HuggingFace", "Jira", "AWS", "Apache Hadoop", "Keras", "Agile/Scrum", "Jupyter Notebook", "YOLOv8", "OpenCV", "ONNX"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span> 🎯
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data science and machine learning solutions ⚡
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group p-6 card-hover bg-gradient-card border-border cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <category.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="flex items-center justify-between p-2 rounded-lg bg-background/50 group-hover:bg-background/80 transition-all duration-200 transform hover:scale-105"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <span className="text-sm font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < (skillIndex % 3 + 3) 
                                ? 'bg-primary group-hover:bg-secondary' 
                                : 'bg-muted group-hover:bg-muted-foreground/30'
                            }`}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center gap-2">
            🏆 Achievements & Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "💻", title: "100+ LeetCode Problems", desc: "Solved with focus on algorithms" },
              { icon: "🎓", title: "7.21 CGPA", desc: "Computer Science Excellence" },
              { icon: "⚡", title: "25% Performance Boost", desc: "Database query optimization" }
            ].map((achievement, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-card border border-border rounded-lg card-hover cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;