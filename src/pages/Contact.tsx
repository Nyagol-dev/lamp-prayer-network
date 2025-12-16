import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Connect With Us</h1>
          <p className="text-xl lg:text-2xl opacity-90">
            We'd Love to Hear From You
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHzXegzDjOxEMDq0amzkMGe18rmuOdV9PpUGCaJdk5xrdpiw/viewform?embedded=true" width="640" height="1037" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    Whether you have questions about our ministry, want to share a testimony, or are interested in partnership opportunities, we're here to connect with you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Email</h4>
                        <p className="text-muted-foreground">lampforthenations@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Phone</h4>
                        <p className="text-muted-foreground">+254 (731) 744 555</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Mailing Address</h4>
                        <p className="text-muted-foreground">
                          Ufungamano Hse<br />
                          P.O. Box 1234<br />
                          Statehouse Rd., Nairobi
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Follow Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay connected with our ministry through social media for prayer updates, testimonies, and community encouragement.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                    <a href="https://www.facebook.com/groups/lamp4nations" target="_blank" rel="noopener noreferrer">
                       <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </a>
                    </Button>
                    <Button variant="outline" className="w-full">
                    <a href="https://www.instagram.com/lamp4nations" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </a>
                    </Button>
                    <Button variant="outline" className="w-full">
                    <a href="https://twitter.com/lamp4nations" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://www.youtube.com/@LAMPForNations" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-4 h-4 mr-2" />
                        YouTube
                      </a>
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                    <p className="text-sm text-secondary font-medium">
                      Subscribe to our YouTube channel: Be part of the move. Raising Warriors for Christ
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-soft text-center">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Response Time</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We value every message and strive to respond within 24-48 hours. For urgent prayer requests, please use our dedicated prayer request form on the "Get Involved" page for faster processing by our prayer team.
              </p>
              <Button variant="secondary" asChild>
                <a href="/get-involved">Submit Prayer Request</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold mb-6 italic">
            "Call to me and I will answer you and tell you great and unsearchable things you do not know."
          </blockquote>
          <cite className="text-xl opacity-90">- Jeremiah 33:3</cite>
        </div>
      </section>
    </div>
  );
};

export default Contact;
