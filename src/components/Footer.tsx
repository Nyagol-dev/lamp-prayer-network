import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-secondary">
                <span className="text-primary font-bold text-xl">L</span>
              </div>
              <div>
                <div className="font-bold text-lg">LAMP</div>
                <div className="text-sm opacity-90">Living Altar Ministry of Prayer</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Partnering in Prayer for the Nations
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Establishing living prayer altars worldwide to transform lives, heal lands, and shape the destiny of nations through the power of intercession.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/mission" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:info@lampministry.org" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scripture and Copyright */}
        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="text-center mb-6">
            <blockquote className="text-lg font-medium italic text-secondary mb-2">
              "I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth."
            </blockquote>
            <cite className="text-sm text-primary-foreground/80">Isaiah 49:6</cite>
          </div>
          
          <div className="text-center text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Living Altar Ministry of Prayer (LAMP). All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;