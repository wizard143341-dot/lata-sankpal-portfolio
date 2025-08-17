import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin } from "lucide-react";
import professorPortrait from "@/assets/professor-portrait.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-academic-blue leading-tight">
                Mrs. Lata Jaywant Sankpal
              </h1>
              <div className="text-xl md:text-2xl text-academic-gray font-medium animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                Ph.D. in Computer Engineering
              </div>
              <div className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                Professor & Researcher
              </div>
            </div>

            <p className="text-lg text-academic-gray leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              Passionate about research, teaching, and innovation in computer engineering.
              Dedicated to advancing technology through education and cutting-edge research.
            </p>

            <div className="flex items-center space-x-2 text-muted-foreground animate-slide-in-left" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              <MapPin className="w-4 h-4" />
              <span>Pune, India</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
              <Button onClick={scrollToContact} size="lg" className="gradient-academic">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border animate-zoom-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-academic-blue">30+</div>
                <div className="text-sm text-muted-foreground">Years Teaching</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-academic-blue">38</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-academic">
                <img
                  src={professorPortrait}
                  alt="Mrs. Lata Jaywant Sankpal"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-academic-blue/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-academic-blue/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;