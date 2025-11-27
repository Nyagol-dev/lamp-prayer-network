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
            Welcome to the Living Altar Ministry of Prayer (LAMP), a global community dedicated to raising up vibrant prayer altars for individuals, communities, and nations. We are founded on the belief that persistent, faith-filled prayer has the power to transform lives, heal lands, and shape the destiny of nations. We invite you to partner with us as we answer the call to become a shining light to the nations.
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

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-16">
            Lives Transformed Through Prayer
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 italic">
                  "LAMP has transformed my prayer life and connected me with believers worldwide. I've seen God move in miraculous ways through our united intercession."
                </p>
                <div className="font-semibold text-primary">- Sarah M., Prayer Partner</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 italic">
                  "The monthly thanksgiving services have been life-changing. Every first Sunday is now sacred as we gather to thank God for His faithfulness."
                </p>
                <div className="font-semibold text-primary">- David K., Regular Attendant</div>
              </CardContent>
            </Card>
          </div>
          
          <Button asChild variant="outline" size="lg" className="mx-auto">
            <Link to="/get-involved#sprinkles-of-his-glory">
              Experience Sprinkles of His Glory
            </Link>
          </Button>
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
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;