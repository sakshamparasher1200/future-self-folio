import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2020 - 2022",
      gpa: "3.9/4.0",
      description: "Specialized in Machine Learning and Software Engineering. Thesis on AI-powered web applications.",
      highlights: ["Dean's List", "Research Assistant", "Teaching Assistant"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Focus on Software Development and Data Structures. Active member of Computer Science Society.",
      highlights: ["Magna Cum Laude", "Programming Competition Winner", "CS Tutor"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: Award
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      icon: Award
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      icon: Award
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications that shaped my expertise
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <div className="text-primary font-semibold">{edu.school}</div>
                      <div className="text-sm text-muted-foreground">{edu.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                      <div className="text-sm font-medium">GPA: {edu.gpa}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="border-primary/30 text-primary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Award className="text-primary" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <cert.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {cert.date}
                      </div>
                    </div>
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

export default Education;