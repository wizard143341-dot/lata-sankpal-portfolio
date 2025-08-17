import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-academic-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Name and Title */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                Mrs. Lata Jaywant Sankpal
              </h3>
              <p className="text-white/80 mb-4">
                Ph.D. in Computer Engineering<br />
                Professor & Researcher
              </p>
              <p className="text-white/70 text-sm">
                30+ years of excellence in computer engineering education and research.
              </p>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-white/60" />
                  <span className="text-white/80">lata.sankpal@pcu.edu.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-white/60" />
                  <span className="text-white/80">+91 9850955054</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-white/60" />
                  <span className="text-white/80">Pune, India</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Achievements</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Teaching Experience:</span>
                  <span className="font-semibold">30+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Publications:</span>
                  <span className="font-semibold">38 Total</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Scopus Indexed:</span>
                  <span className="font-semibold">8 Papers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Events Attended:</span>
                  <span className="font-semibold">40+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-white/70 mb-4 md:mb-0">
                © 2024 Mrs. Lata Jaywant Sankpal. Portfolio designed for academic excellence.
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToTop}
                className="bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;