import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl lg:text-2xl opacity-90">
            The Heart and Calling Behind LAMP
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-soft mb-12">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To establish and nurture a global network of living prayer altars, empowering believers from all walks of life to partner in fervent intercession for the spiritual transformation of nations.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft mb-12">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where every nation is saturated by the power of prayer, bringing the light of the Gospel, tangible hope, and widespread revival to all corners of the earth.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft mb-12">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Calling</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                LAMP was born from a deep conviction that prayer is the most powerful force for transformation in the world. We are called to be intercessors who stand in the gap for nations, communities, and individuals who need the touch of God.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our calling is rooted in Isaiah 49:6: "I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth." We believe that through unified prayer, we can be that light that illuminates the darkness in every nation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we partner together in prayer, we become living altars - holy places where heaven and earth meet, where God's will is declared over the nations, and where His kingdom comes with power and demonstration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            Our Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MF</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Ministry Founder</h3>
                <p className="text-muted-foreground mb-4">Lead Pastor & Visionary</p>
                <p className="text-sm text-muted-foreground">
                  Called to prayer ministry with a heart for the nations and a vision for global revival through intercession.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">IC</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Intercession Coordinator</h3>
                <p className="text-muted-foreground mb-4">Prayer Network Leader</p>
                <p className="text-sm text-muted-foreground">
                  Passionate about mobilizing believers for strategic intercession and building prayer networks globally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">OD</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Outreach Director</h3>
                <p className="text-muted-foreground mb-4">Global Partnerships</p>
                <p className="text-sm text-muted-foreground">
                  Focuses on building relationships with ministries and churches worldwide to expand the prayer movement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            Our Core Values
          </h2>
          
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Faith in Prayer</h3>
                <p className="text-muted-foreground">
                  We believe in the power of prayer to change circumstances, transform lives, and impact nations according to God's will.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Unity in Diversity</h3>
                <p className="text-muted-foreground">
                  We celebrate the diversity of the global Body of Christ while maintaining unity in our common purpose of prayer and intercession.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Persistent Intercession</h3>
                <p className="text-muted-foreground">
                  We are committed to persistent, consistent prayer that doesn't give up until we see breakthrough and transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Global Vision</h3>
                <p className="text-muted-foreground">
                  Our heart beats for every nation, people group, and individual to experience the transforming power of God through prayer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;