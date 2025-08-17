import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, UserCheck, BookOpen, Users } from "lucide-react";

const ExperienceSection = () => {
  const roles = [
    {
      icon: UserCheck,
      title: "Recognition of Prior Learning Committee",
      description: "Member responsible for evaluating and recognizing prior learning experiences"
    },
    {
      icon: GraduationCap,
      title: "NAD Coordinator",
      description: "National Academic Depository coordination and management"
    },
    {
      icon: BookOpen,
      title: "MOOC Instructor",
      description: "Massive Open Online Course development and instruction"
    },
    {
      icon: Users,
      title: "Class Teacher",
      description: "Academic mentorship and classroom management responsibilities"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Experience & Roles
            </h2>
            <div className="w-24 h-1 bg-academic-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three decades of excellence in computer engineering education, research, and academic leadership
            </p>
          </div>

          {/* Teaching Experience Highlight */}
          <Card className="p-8 mb-12 gradient-academic text-white shadow-academic animate-zoom-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">30+</div>
              <div className="text-2xl font-semibold mb-4">Years of Teaching Experience</div>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Dedicated to excellence in computer engineering education, mentoring countless students 
                and contributing to the advancement of technology education in India.
              </p>
            </div>
          </Card>

          {/* Job Roles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <Card 
                key={index} 
                className="p-6 text-center shadow-card hover:shadow-academic transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <role.icon className="w-8 h-8 text-academic-blue" />
                </div>
                <h3 className="text-lg font-semibold text-academic-blue mb-3 min-h-[3rem] flex items-center justify-center">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Expertise Areas */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <h3 className="text-2xl font-bold text-academic-blue text-center mb-8">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Computer Engineering",
                "Performance Optimization",
                "Metasearch Engines",
                "Web Page Re-ranking",
                "Academic Leadership",
                "Research Methodology",
                "MOOC Development",
                "Educational Innovation",
                "Technology Integration",
                "Student Mentorship"
              ].map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm animate-slide-in-left"
                  style={{ animationDelay: `${1 + index * 0.05}s`, animationFillMode: 'both' }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;