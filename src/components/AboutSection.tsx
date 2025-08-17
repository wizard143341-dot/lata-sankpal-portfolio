import { Card } from "@/components/ui/card";
import { Heart, Brain, Users } from "lucide-react";

const AboutSection = () => {
  const interests = [
    {
      icon: Heart,
      title: "Yoga & Meditation",
      description: "Practicing mindfulness and wellness for personal growth"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Training programs through Project Pavitra initiative"
    },
    {
      icon: Brain,
      title: "Research Innovation",
      description: "Performance optimization of metasearch engines"
    }
  ];

  return (
    <section id="about" className="py-20 bg-academic-gray-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-academic-blue mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-card animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <p className="text-lg leading-relaxed text-academic-gray mb-6">
                With over three decades of dedicated service in computer engineering education, 
                I bring a wealth of experience in teaching, research, and academic leadership. 
                My journey has been driven by a passion for innovation and a commitment to 
                nurturing the next generation of technology professionals.
              </p>
              
              <p className="text-lg leading-relaxed text-academic-gray mb-6">
                My research focuses on the performance optimization of metasearch engines for 
                re-ranking of web pages, an area where I've contributed significantly to advancing 
                our understanding of information retrieval systems. This work has practical 
                applications in improving search accuracy and user experience.
              </p>

              <p className="text-lg leading-relaxed text-academic-gray">
                Beyond academics, I am deeply committed to holistic development through yoga, 
                meditation, and women empowerment initiatives. Through Project Pavitra, I work 
                to empower women with skills and confidence to achieve their potential.
              </p>
            </Card>

            {/* Interests */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {interests.map((interest, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center shadow-card hover:shadow-academic transition-all duration-300 hover:scale-105 animate-zoom-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <interest.icon className="w-8 h-8 text-academic-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-academic-blue mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {interest.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;