import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Navigation */}
      <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Welcome to Classic U.S. Civics, operated by Liberty's Principles Media. We are committed
              to protecting your privacy and ensuring transparency about how we handle information.
              This Privacy Policy explains our practices regarding data collection, use, and protection.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h4>Information You Provide</h4>
            <p>
              Classic U.S. Civics is designed as a free educational resource. We do not require
              user accounts or login credentials to access curriculum content. We do not collect
              personal information such as names, email addresses, or contact details through
              the website itself.
            </p>

            <h4>Automatically Collected Information</h4>
            <p>
              When you visit our website, we may automatically collect certain technical information,
              including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
            <p>
              This information is collected through standard web technologies and helps us understand
              how visitors use our site to improve the educational experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Information</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>We use automatically collected information to:</p>
            <ul>
              <li>Improve website functionality and user experience</li>
              <li>Analyze usage patterns to enhance educational content</li>
              <li>Monitor and prevent technical issues</li>
              <li>Understand which lessons and features are most valuable</li>
            </ul>
            <p>
              We do not sell, rent, or share your information with third parties for marketing purposes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Our website may use cookies and similar technologies to enhance your experience.
              Cookies are small text files stored on your device that help us remember your
              preferences (such as dark mode settings) and understand site usage.
            </p>
            <p>
              You can control cookie settings through your browser preferences. Disabling cookies
              may affect certain features but will not prevent access to educational content.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Classic U.S. Civics is hosted on Vercel. Vercel may collect technical information
              for hosting and performance purposes. We may also use analytics services to understand
              site usage. These third-party services have their own privacy policies governing
              their use of information.
            </p>
            <p>
              Our website includes links to external resources (such as Liberty's Principles Pals,
              The Citizen's Compass, and other educational sites). These external sites have their
              own privacy policies, and we are not responsible for their practices.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Classic U.S. Civics is designed to be safe for learners of all ages. We do not
              knowingly collect personal information from children under 13. Parents and educators
              can use this resource with confidence that no personal data collection or account
              creation is required.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              We implement reasonable security measures to protect any information we collect.
              However, no internet transmission is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Since we do not collect personal information through account creation, there is
              minimal personal data to access or delete. If you have concerns about automatically
              collected technical data, you may:
            </p>
            <ul>
              <li>Use browser privacy settings to limit tracking</li>
              <li>Clear cookies through your browser</li>
              <li>Use private/incognito browsing mode</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated "Last updated" date. Continued use of the site after changes
              constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              If you have questions about this Privacy Policy or our practices, please contact us through:
            </p>
            <ul>
              <li>
                <strong>Liberty's Principles Media:</strong>{' '}
                <a href="https://libertysprinciplesmedia.com" target="_blank" rel="noopener noreferrer">
                  libertysprinciplesmedia.com
                </a>
              </li>
              <li>
                <strong>Creator:</strong>{' '}
                <a href="https://christopherjbradley.com" target="_blank" rel="noopener noreferrer">
                  Christopher J. Bradley
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
