import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Building, Cog } from "lucide-react";

const MembershipsSection = () => {
  const memberships = [
    {
      icon: Cog,
      organization: "Institution of Engineers, India",
      status: "Life Member",
      description: "Premier organization for engineering professionals in India",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      organization: "Indian Society for Technical Education",
      status: "Life Member", 
      description: "National organization promoting technical education excellence",
      color: "bg-green-500"
    },
    {
      icon: Building,
      organization: "Computer Society of India",
      status: "Life Member",
      description: "Leading professional body for computer professionals",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      organization: "Quality Circle Forum of India",
      status: "Life Member",
      description: "Promoting quality management and continuous improvement",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="memberships" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Professional Memberships
            </h2>
            <div className="w-24 h-1 bg-academic-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Active participation in prestigious professional organizations that advance 
              engineering education, research, and quality standards in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {memberships.map((membership, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-academic transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${membership.color.replace('bg-', 'bg-academic-blue/10')} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <membership.icon className="w-6 h-6 text-academic-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-academic-blue">
                        {membership.organization}
                      </h3>
                      <Badge className="gradient-academic text-white">
                        {membership.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {membership.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="mt-12 p-8 bg-academic-blue/5 border-academic-blue/20">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-academic-blue mb-4">
                Professional Commitment
              </h3>
              <p className="text-academic-gray leading-relaxed max-w-3xl mx-auto">
                These professional memberships reflect a deep commitment to the engineering community 
                and continuous professional development. Through active participation in these organizations, 
                I contribute to advancing engineering education standards, promoting quality in technical 
                education, and fostering innovation in computer engineering.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;