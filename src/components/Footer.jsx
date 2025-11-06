import { Link } from 'react-router-dom';
import { ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const resources = [
    {
      category: "Liberty's Principles Media",
      links: [
        { name: "Liberty's Principles Media", url: "https://libertysprinciplesmedia.com" },
        { name: "Liberty's Principles Pals", url: "https://libertysprinciplespals.com" },
        { name: "The Citizen's Compass", url: "https://thecitizenscompass.netlify.app" },
      ]
    },
    {
      category: "Civic Resources",
      links: [
        { name: "The Art of Citizenship", url: "https://theartofcitizenship.com" },
        { name: "FairBill Analyzer", url: "https://fairbillanalyzer.com" },
        { name: "Family Unity Hub", url: "https://familyunityhub.com" },
      ]
    },
    {
      category: "More Projects",
      links: [
        { name: "There Is Still Time", url: "https://thereisstilltime.com" },
        { name: "Love Everyone", url: "https://loveeveryone.love" },
        { name: "Sunsets for the Soul", url: "https://sunsetsforthesoul.com" },
      ]
    }
  ];

  const legalLinks = [
    { name: "About", to: "/about" },
    { name: "Privacy Policy", to: "/privacy" },
    { name: "Terms of Service", to: "/terms" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/lpm-logo.png"
                alt="Liberty's Principles Media Logo"
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg">Classic U.S. Civics</h3>
                <p className="text-sm text-muted-foreground">Liberty's Principles Media</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive guide to American government and citizenship, teaching the principles
              that make our republic work.
            </p>
          </div>

          {/* Resource Columns */}
          {resources.map((group) => (
            <div key={group.category} className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">
                {group.category}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Liberty's Principles Media.</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span className="hidden sm:inline">for America</span>
          </div>

          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Christopher Bradley Credit */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Created by{' '}
            <a
              href="https://christopherjbradley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium"
            >
              Christopher J. Bradley
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
