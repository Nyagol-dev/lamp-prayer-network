import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-prayer-group.jpg";
import prayingHandsIcon from "@/assets/praying-hands-icon.png";
import globeLightIcon from "@/assets/globe-light-icon.png";
import peopleHandsIcon from "@/assets/people-hands-icon.png";
import ReactCountryFlag from "react-country-flag";

// Array of country codes and names
const countries = [
  { code: 'KE', name: 'Kenya' },
  { code: 'UG', name: 'Uganda' },
  { code: 'BW', name: 'Botswana' },
  { code: 'ZM', name: 'Zambia' },
  { code: 'ZW', name: 'Zimbabwe' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'DE', name: 'Germany' }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="People praying together"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center mb-8">
              <img 
                src="/logo/f17eadce-5286-4d12-8fa3-0a7302f84491.png" 
                alt="LAMP For Nations Logo" 
                className="h-20 w-auto animate-float"
              />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              A Global Partnership in Prayer
            </h2>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto text-balance">
              Igniting Prayer Altars and Illuminating Every Nation
            </p>
            <Button size="lg" variant="secondary" asChild className="shadow-secondary">
              <Link to="/get-involved">Join the Prayer Movement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
            Welcome to LAMP
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to the Living Altar Ministry of Prayer (LAMP), 
            Living Altar Ministry of Prayer(LAMP) for Nations is an interdenominational Christian Organization committed to advancing the kingdom of God by awakening and equipping the Church in the ministry of prayer and intercession
          </p>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            Our Core Ministry
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={prayingHandsIcon} alt="Praying Hands" className="w-full h-full" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Daily Prayer</h4>
                <p className="text-muted-foreground">
                  Join our daily prayer initiatives and intercede for pressing needs around the world. Your voice is a vital part of this global chorus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={globeLightIcon} alt="Globe with Light" className="w-full h-full" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">For the Nations</h4>
                <p className="text-muted-foreground">
                  Our primary focus is on praying for spiritual revival and lasting transformation across the globe, nation by nation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-primary transition-smooth">
              <CardContent className="p-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={peopleHandsIcon} alt="People Joining Hands" className="w-full h-full" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Partnership</h4>
                <p className="text-muted-foreground">
                  We actively partner with individuals, churches, and ministries to build a unified and powerful global prayer network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prayer Nations Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              We're in the following nations
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {countries.map((country) => (
              <div 
                key={country.code}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                title={`Pray for ${country.name}`}
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md p-2 mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <ReactCountryFlag 
                    countryCode={country.code}
                    svg
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                    title={country.code}
                    aria-label={country.name}
                  />
                </div>
                <span className="text-sm font-medium text-center">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About LAMP Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            About LAMP
          </h3>
          
          <Card className="shadow-soft mb-12">
            <CardContent className="p-8 lg:p-12">
              <h4 className="text-2xl font-bold text-primary mb-6">Our Mission</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To establish and nurture a global network of living prayer altars, empowering believers from all walks of life to partner in fervent intercession for the spiritual transformation of nations.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft mb-12">
            <CardContent className="p-8 lg:p-12">
              <h4 className="text-2xl font-bold text-primary mb-6">Our Vision</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where every nation is saturated by the power of prayer, bringing the light of the Gospel, tangible hope, and widespread revival to all corners of the earth.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft mb-12">
            <CardContent className="p-8 lg:p-12">
              <h4 className="text-2xl font-bold text-primary mb-6">Our Calling</h4>
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

      {/* Leadership Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            Our Leadership Team
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MF</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Ministry Founder</h4>
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
                <h4 className="text-xl font-bold text-primary mb-2">Intercession Coordinator</h4>
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
                <h4 className="text-xl font-bold text-primary mb-2">Outreach Director</h4>
                <p className="text-muted-foreground mb-4">Global Partnerships</p>
                <p className="text-sm text-muted-foreground">
                  Focuses on building relationships with ministries and churches worldwide to expand the prayer movement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            Our Core Values
          </h3>
          
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Faith in Prayer</h4>
                <p className="text-muted-foreground">
                  We believe in the power of prayer to change circumstances, transform lives, and impact nations according to God's will.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Unity in Diversity</h4>
                <p className="text-muted-foreground">
                  We celebrate the diversity of the global Body of Christ while maintaining unity in our common purpose of prayer and intercession.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Persistent Intercession</h4>
                <p className="text-muted-foreground">
                  We are committed to persistent, consistent prayer that doesn't give up until we see breakthrough and transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Global Vision</h4>
                <p className="text-muted-foreground">
                  Our heart beats for every nation, people group, and individual to experience the transforming power of God through prayer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8">
            Ready to Join the Movement?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Be part of a global community that's praying nations into their destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
