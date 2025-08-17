import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Trophy, Users } from "lucide-react";

const ResearchSection = () => {
  const publications = [
    {
      title: "Optimized EV Charging Scheduling using CNN-LSTM",
      journal: "International Conference Proceedings",
      year: "2024",
      type: "Conference",
      description: "Advanced machine learning approach for electric vehicle charging optimization"
    },
    {
      title: "Suspicious Activity Detection with YOLO and CNN",
      journal: "Computer Vision and AI Journal",
      year: "2023",
      type: "Scopus",
      description: "Real-time security system using state-of-the-art object detection algorithms"
    },
    {
      title: "2D to 3D Floor Plan Modeling with Augmented Reality",
      journal: "AR/VR Technology Review",
      year: "2023",
      type: "Conference",
      description: "Innovative approach to architectural visualization using AR technology"
    }
  ];

  const stats = [
    {
      icon: BookOpen,
      number: "38",
      label: "Total Publications",
      description: "Peer-reviewed research papers"
    },
    {
      icon: Trophy,
      number: "8",
      label: "Scopus Indexed",
      description: "High-impact publications"
    },
    {
      icon: Users,
      number: "15+",
      label: "Research Collaborations",
      description: "International partnerships"
    }
  ];

  return (
    <section id="research" className="py-20 bg-academic-gray-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Research & Publications
            </h2>
            <div className="w-24 h-1 bg-academic-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contributing to the advancement of computer engineering through innovative research 
              in performance optimization, machine learning, and emerging technologies
            </p>
          </div>

          {/* Research Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center shadow-card">
                <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-academic-blue" />
                </div>
                <div className="text-3xl font-bold text-academic-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-academic-gray mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Research Focus */}
          <Card className="p-8 mb-12 shadow-card">
            <h3 className="text-2xl font-bold text-academic-blue mb-4">Primary Research Area</h3>
            <div className="bg-academic-blue/5 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-academic-blue mb-3">
                Performance Optimization of Metasearch Engines for Re-ranking of Web Pages
              </h4>
              <p className="text-academic-gray leading-relaxed">
                My research focuses on enhancing the efficiency and accuracy of metasearch engines 
                through advanced algorithms for web page re-ranking. This work contributes to improved 
                search results, better user experience, and more efficient information retrieval systems. 
                The research incorporates machine learning techniques, performance analysis, and 
                optimization strategies to address contemporary challenges in web search technology.
              </p>
            </div>
          </Card>

          {/* Recent Publications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-academic-blue mb-8 text-center">
              Recent Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-academic transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-academic-blue">
                          {pub.title}
                        </h4>
                        <Badge 
                          variant={pub.type === "Scopus" ? "default" : "secondary"}
                          className={pub.type === "Scopus" ? "gradient-academic text-white" : ""}
                        >
                          {pub.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {pub.journal} • {pub.year}
                      </p>
                      <p className="text-sm text-academic-gray">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-academic-blue mb-6">
              Research Profiles
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="group">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Google Scholar Profile
              </Button>
              <Button variant="outline" className="group">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Scopus Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;