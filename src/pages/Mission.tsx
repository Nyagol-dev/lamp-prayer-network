import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Users, Shield, Globe, GraduationCap } from "lucide-react";

const Mission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl lg:text-2xl opacity-90">
            Partnering in Prayer, Actively Transforming Nations
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
            What We Do
          </h2>
          
          <div className="space-y-12">
            <Card className="shadow-soft">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-primary mb-6">Prayer Initiatives</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We coordinate and facilitate various prayer programs designed to create maximum impact for the Kingdom of God:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>24/7 Prayer Chains:</strong> Continuous intercession that covers every hour of every day, ensuring that prayer never ceases for critical needs around the world.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Weekly Online Prayer Meetings:</strong> Virtual gatherings that unite believers from different time zones and nations in focused intercession.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Strategic Prayer Campaigns:</strong> Targeted intercession for nations experiencing crisis, persecution, or significant spiritual breakthroughs.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-primary mb-6">Training and Resources</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe in equipping believers with the knowledge and tools needed for effective intercession:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Downloadable Prayer Guides:</strong> Comprehensive resources that provide structure and focus for personal and corporate prayer times.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Video Teachings on Intercession:</strong> Expert instruction on prayer principles, spiritual warfare, and breakthrough intercession.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Articles on Spiritual Warfare:</strong> Written resources that educate and inspire believers to engage in strategic spiritual battle.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-primary mb-6">Global Partnerships</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Unity in the Body of Christ multiplies the effectiveness of our prayers and expands our reach:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Church Partnerships:</strong> Collaborative relationships with local churches to establish prayer altars and training programs.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Ministry Alliances:</strong> Strategic alliances with other prayer and missions organizations to maximize kingdom impact.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Individual Networks:</strong> Connecting prayer warriors across denominations and cultures for unified intercession.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-primary mb-6">Theological Foundation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our ministry is built upon solid biblical foundations that guide everything we do:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Priesthood of All Believers:</strong> Every believer has direct access to God and the calling to intercede for others (1 Peter 2:9).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Corporate Prayer Power:</strong> When believers unite in prayer, there is supernatural multiplication of effectiveness (Matthew 18:19-20).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Light to the Nations:</strong> We are called to be a light that reaches every corner of the earth (Isaiah 49:6).</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Programmes Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Key Programmes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic initiatives designed to build prayer altars and transform nations through partnership in prayer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-soft hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">School of Prayer</h3>
                <p className="text-muted-foreground">
                  Comprehensive training to equip believers with effective prayer strategies and spiritual warfare principles.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Missions and Outreach</h3>
                <p className="text-muted-foreground">
                  Reaching the unreached through strategic prayer missions and community outreach initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Good Morning Africa Mentorship</h3>
                <p className="text-muted-foreground">
                  Mentoring and developing young prayer warriors across the African continent.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">LAMP Care Initiatives</h3>
                <p className="text-muted-foreground">
                  Providing spiritual, emotional, and practical support to communities in need through prayer-backed action.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keep the Fire Burning Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-soft bg-secondary/5">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Keep the Fire Burning</h3>
              <blockquote className="text-xl text-muted-foreground italic leading-relaxed mb-4">
                "The fire on the altar must be kept burning; it must not go out. Every morning the priest is to add firewood and arrange the burnt offering on the fire..."
              </blockquote>
              <cite className="text-secondary font-semibold">- Leviticus 6:12-13</cite>
              <p className="text-lg text-muted-foreground mt-6">
                Just as the ancient priests maintained the altar fire, we are committed to keeping the prayer altars burning across nations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-soft bg-primary/5">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Foundation Scripture</h3>
              <blockquote className="text-xl text-muted-foreground italic leading-relaxed mb-4">
                "I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth."
              </blockquote>
              <cite className="text-primary font-semibold">- Isaiah 49:6</cite>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8">
            Join Our Mission
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Be part of transforming nations through the power of prayer
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/get-involved">Get Involved Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Mission;