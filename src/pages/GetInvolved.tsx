import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [partnerForm, setPartnerForm] = useState({ name: "", email: "" });
  const [prayerRequest, setPrayerRequest] = useState({ name: "", email: "", request: "" });
  const { toast } = useToast();

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for joining!",
      description: "We'll send you prayer updates and opportunities soon.",
    });
    setPartnerForm({ name: "", email: "" });
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Prayer request submitted",
      description: "Your request will be lifted up by our prayer team.",
    });
    setPrayerRequest({ name: "", email: "", request: "" });
  };

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
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Prayer Partner Signup */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Become a Prayer Partner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Join our global network of prayer warriors and receive regular updates with specific prayer points for nations and urgent needs.
                </p>
                
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="partner-name">Full Name</Label>
                    <Input
                      id="partner-name"
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="partner-email">Email Address</Label>
                    <Input
                      id="partner-email"
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Join as Prayer Partner
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Prayer Request Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Submit a Prayer Request
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Share your prayer needs with our dedicated prayer team. All requests are kept confidential and lifted up in prayer.
                </p>
                
                <form onSubmit={handlePrayerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="request-name">Name (Optional)</Label>
                    <Input
                      id="request-name"
                      value={prayerRequest.name}
                      onChange={(e) => setPrayerRequest({ ...prayerRequest, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="request-email">Email (Optional)</Label>
                    <Input
                      id="request-email"
                      type="email"
                      value={prayerRequest.email}
                      onChange={(e) => setPrayerRequest({ ...prayerRequest, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="request-text">Prayer Request</Label>
                    <Textarea
                      id="request-text"
                      value={prayerRequest.request}
                      onChange={(e) => setPrayerRequest({ ...prayerRequest, request: e.target.value })}
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Prayer Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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