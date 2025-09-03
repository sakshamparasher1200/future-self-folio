import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Database & ERP Analyst Intern",
      company: "DiagnoCare India Pvt. Ltd.",
      location: "India",
      period: "June 2025 - Present",
      type: "Internship",
      achievements: [
        "Executed technical analysis and optimization of relational SQL databases managing over 3000 transactional queries across inventory, client, and billing modules",
        "Improved data integrity and reduced query latency by 25% through indexing, joins optimization, and schema refinement",
        "Conducted in-depth root cause analysis on data anomalies within key ERP modules (Inventory, Client, Billing)",
        "Partnered with business stakeholders to translate operational needs into data requirements, authoring custom SQL scripts"
      ],
      technologies: ["SQL", "PostgreSQL", "ERP Systems", "Data Analysis"]
    },
    {
      title: "Data Science Intern",
      company: "Techvanto Academy",
      location: "India",
      period: "June 2023 – July 2023",
      type: "Internship",
      achievements: [
        "Engineered an end-to-end machine learning pipeline, from data ingestion and cleaning to model training",
        "Performed Exploratory Data Analysis (EDA) with Matplotlib and Seaborn and implemented feature engineering using Python libraries",
        "Deployed a supervised learning (classification) model by translating business requirements into technical specifications within weekly Agile sprints",
        "Optimized model performance through systematic hyperparameter tuning (GridSearchCV) and validated results using k-fold cross-validation"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Git", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world experience in data science, database optimization, and machine learning
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-border">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase size={24} className="text-primary" />
                      </div>
                      {exp.title}
                    </CardTitle>
                    <div className="text-primary font-semibold text-lg mb-2">{exp.company}</div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-primary font-bold text-lg">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;