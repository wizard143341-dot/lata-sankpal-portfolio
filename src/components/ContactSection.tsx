import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Primary Email",
      value: "lata.sankpal@pcu.edu.in",
      href: "mailto:lata.sankpal@pcu.edu.in"
    },
    {
      icon: Mail,
      label: "Alternate Email", 
      value: "latasankpal5@gmail.com",
      href: "mailto:latasankpal5@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9850955054",
      href: "tel:+919850955054"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-academic-blue mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I welcome opportunities for collaboration, research partnerships, 
              and academic discussions. Feel free to reach out for any inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8 shadow-card">
              <h3 className="text-xl font-semibold text-academic-blue mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-academic-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-academic-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-academic-blue hover:underline font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-academic-gray font-medium">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="p-8 shadow-card">
              <h3 className="text-xl font-semibold text-academic-blue mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  For research collaborations, academic inquiries, or professional discussions, 
                  please feel free to reach out through any of the contact methods.
                </p>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full gradient-academic"
                    onClick={() => window.open('mailto:lata.sankpal@pcu.edu.in', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('tel:+919850955054', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional Profiles:
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      ResearchGate
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer Note */}
          <Card className="mt-12 p-6 bg-academic-blue/5 border-academic-blue/20 text-center">
            <p className="text-academic-gray">
              <strong>Response Time:</strong> I typically respond to emails within 24-48 hours. 
              For urgent matters, please feel free to call directly.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;