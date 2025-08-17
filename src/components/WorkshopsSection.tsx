import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, BookOpen, Presentation } from "lucide-react";

const WorkshopsSection = () => {
  const categories = [
    {
      icon: Presentation,
      title: "Seminars",
      count: "15+",
      description: "Technical seminars on emerging technologies and research methodologies"
    },
    {
      icon: Users,
      title: "Conferences",
      count: "12+",
      description: "National and international conferences on computer engineering"
    },
    {
      icon: BookOpen,
      title: "Faculty Development Programs",
      count: "10+",
      description: "Professional development programs for academic excellence"
    },
    {
      icon: Calendar,
      title: "Workshops",
      count: "8+",
      description: "Hands-on workshops on latest tools and technologies"
    }
  ];

  const highlights = [
    {
      event: "International Conference on Artificial Intelligence",
      year: "2024",
      location: "IIT Mumbai",
      type: "Conference"
    },
    {
      event: "Faculty Development Program on Machine Learning",
      year: "2023",
      location: "NIT Pune",
      type: "FDP"
    },
    {
      event: "Workshop on Research Methodology",
      year: "2023",
      location: "Symbiosis International University",
      type: "Workshop"
    },
    {
      event: "Seminar on Emerging Technologies in Education",
      year: "2022",
      location: "University of Pune",
      type: "Seminar"
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-academic-gray-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Workshops & Conferences
            </h2>
            <div className="w-24 h-1 bg-academic-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Committed to continuous learning and professional development through active 
              participation in academic events and professional development programs
            </p>
          </div>

          {/* Summary Stats */}
          <Card className="p-8 mb-12 text-center gradient-academic text-white shadow-academic">
            <div className="text-5xl font-bold mb-2">40+</div>
            <div className="text-xl font-semibold mb-4">Total Events Attended</div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Seminars, Conferences, Faculty Development Programs, and Workshops 
              across prestigious institutions and organizations
            </p>
          </Card>

          {/* Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-academic transition-all duration-300">
                <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-academic-blue" />
                </div>
                <div className="text-2xl font-bold text-academic-blue mb-2">
                  {category.count}
                </div>
                <h3 className="text-lg font-semibold text-academic-blue mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Recent Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-academic-blue text-center mb-8">
              Recent Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-academic transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <Badge 
                      variant="secondary" 
                      className={
                        highlight.type === "Conference" 
                          ? "gradient-academic text-white" 
                          : "bg-academic-blue/10 text-academic-blue"
                      }
                    >
                      {highlight.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{highlight.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-academic-blue mb-2">
                    {highlight.event}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {highlight.location}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <Card className="mt-12 p-8 bg-academic-blue/5 border-academic-blue/20">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-academic-blue mb-4">
                Professional Development Impact
              </h3>
              <p className="text-academic-gray leading-relaxed max-w-4xl mx-auto">
                Regular participation in academic events ensures staying current with emerging technologies, 
                research methodologies, and pedagogical innovations. These experiences directly benefit 
                my teaching approach, research quality, and ability to guide students in their academic 
                and professional journeys.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;