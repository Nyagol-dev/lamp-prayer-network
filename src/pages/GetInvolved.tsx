import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { downloadICS } from "@/utils/calendar";

const GetInvolved = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Us in Prayer</h1>
          <p className="text-xl lg:text-2xl opacity-90">
            Be a Part of the Movement
          </p>
        </div>
      </section>
      
      {/* Ways to Get Involved */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            Ways to Get Involved
          </h2>
          
          {/* Sprinkles of His Glory Section */}
          <section className="py-16 lg:py-24 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Sprinkles of His Glory
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join us as we dedicate each new month to God in thanksgiving and praise
                </p>
              </div>
        
              <Card className="shadow-soft max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Monthly Thanksgiving Service</h3>
                    <div className="space-y-4 mb-6">
                      <p className="text-lg">
                        Every 1st Sunday of the Month
                      </p>
                      <p className="text-lg font-medium">
                        3:00 PM - 6:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Ufungamano House.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                      <Button 
                        asChild 
                        variant="outline"
                        className="flex-1"
                      >
                        <a 
                          href="https://www.google.com/maps/place/Ufungamano+House+(Christian+Student+Leadership+Centre)/@-1.2877824,36.8214016,14z/data=!4m9!3m8!1s0x182f178f9e4a18b7:0x1a931e6c67edc9a0!5m2!4m1!1i2!8m2!3d-1.2792525!4d36.8098074!16s%2Fg%2F11fmvcv6k3?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          Get Directions
                        </a>
                      </Button>
                      <Button 
                        onClick={downloadICS}
                        className="flex-1 bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>

      {/* Prayer Groups Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            Join a Prayer Group
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Local Prayer Groups</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with believers in your area for in-person prayer gatherings and community intercession.
                </p>
                <Button variant="outline" className="w-full">
                  Find Local Groups
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Online Prayer Groups</h3>
                <p className="text-muted-foreground mb-6">
                  Join virtual prayer meetings that connect believers from around the world in unified intercession.
                </p>
                <Button variant="outline" className="w-full">
                  Join Online Groups
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 shadow-soft">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Start a New Prayer Group</h3>
              <p className="text-muted-foreground mb-6">
                Feel called to start a prayer group in your community? We provide resources, training, and ongoing support to help you establish a thriving prayer altar.
              </p>
              <Button variant="secondary">
                Get Started Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Prayer Partner Signup */}
            <Card className="shadow-soft" id="prayer-partner">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Become a Prayer Partner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Join our global network of prayer warriors and receive regular updates with specific prayer points for nations and urgent needs.
                </p>
                
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHzXegzDjOxEMDq0amzkMGe18rmuOdV9PpUGCaJdk5xrdpiw/viewform?embedded=true"
                  width="100%" 
                  height="1399" 
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  >Loading…
                </iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-primary bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Support Our Ministry</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Your financial contributions fuel our global prayer initiatives, support our online platforms, and help us provide resources to prayer warriors worldwide. Every gift, no matter the size, makes a significant impact in advancing God's kingdom through prayer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="shadow-secondary">
                  Make a Donation
                </Button>
                <Button size="lg" variant="outline">
                  Monthly Partnership
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8">
            Have Questions?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            We're here to help you find your place in the prayer movement
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="mailto:info@lampministry.org">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
