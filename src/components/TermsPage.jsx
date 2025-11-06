import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage() {
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
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Classic U.S. Civics</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              These Terms of Service ("Terms") govern your use of Classic U.S. Civics, an educational
              platform operated by Liberty's Principles Media. By accessing or using this website,
              you agree to be bound by these Terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Educational Purpose</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Classic U.S. Civics is a free educational resource designed to teach American government,
              constitutional principles, and civic engagement. The content is provided for informational
              and educational purposes only.
            </p>
            <p>
              While we strive for accuracy, the materials should not be considered legal advice or a
              substitute for professional consultation on civic matters. Users should verify information
              with primary sources and consult qualified professionals when needed.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acceptable Use</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>You may use Classic U.S. Civics for lawful educational purposes. You agree not to:</p>
            <ul>
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Interfere with or disrupt the site's functionality</li>
              <li>Use automated systems (bots, scrapers) to access the site without permission</li>
              <li>Misrepresent affiliation with Liberty's Principles Media</li>
              <li>Remove or alter copyright notices or attributions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Educational Use and Sharing</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <h4>For Educators and Parents:</h4>
            <p>
              We encourage teachers, homeschool parents, and educators to use Classic U.S. Civics
              in their instruction. You may:
            </p>
            <ul>
              <li>Share links to lessons with students and families</li>
              <li>Reference materials in classroom instruction</li>
              <li>Print pages for educational use in non-commercial settings</li>
              <li>Incorporate content into lesson plans with proper attribution</li>
            </ul>

            <h4>Attribution Required:</h4>
            <p>
              When using or sharing our content, please provide attribution to "Classic U.S. Civics
              by Liberty's Principles Media" and include a link to our site when possible.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              All content on Classic U.S. Civics, including text, graphics, logos, and curriculum
              materials, is the property of Liberty's Principles Media or its content creators and
              is protected by copyright and intellectual property laws.
            </p>
            <p>
              Our curriculum is made freely available for educational use, but commercial use,
              reproduction for sale, or distribution in modified form without permission is prohibited.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Links</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Classic U.S. Civics contains links to other Liberty's Principles Media properties
              (such as Liberty's Principles Pals and The Citizen's Compass) and external educational
              resources. We are not responsible for the content, privacy practices, or terms of
              service of third-party websites.
            </p>
            <p>
              Links to external resources are provided for educational convenience and do not
              constitute endorsement of all content on those sites.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disclaimer of Warranties</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Classic U.S. Civics is provided "as is" without warranties of any kind, either express
              or implied. While we strive for accuracy and quality, we do not guarantee that:
            </p>
            <ul>
              <li>The site will be error-free or uninterrupted</li>
              <li>All content is complete or current</li>
              <li>The site will meet all educational requirements</li>
              <li>Any errors will be corrected</li>
            </ul>
            <p>
              Educational content is subject to different interpretations, and we encourage users
              to consult multiple sources and think critically about civic topics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              To the fullest extent permitted by law, Liberty's Principles Media and its creators
              shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use Classic U.S. Civics.
            </p>
            <p>
              This includes damages for lost profits, data, or other intangible losses, even if
              we have been advised of the possibility of such damages.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Accuracy and Updates</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              We make reasonable efforts to ensure the accuracy of our curriculum content. However:
            </p>
            <ul>
              <li>Laws and government structures may change</li>
              <li>Historical interpretations may evolve</li>
              <li>Court decisions and precedents may be updated</li>
            </ul>
            <p>
              We update content periodically but cannot guarantee all materials reflect the most
              current information. Users should verify critical information with primary sources.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Free Access Commitment</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Classic U.S. Civics is committed to providing free access to civic education. We
              do not require user accounts, charge fees, or place curriculum content behind paywalls.
            </p>
            <p>
              We reserve the right to modify this policy in the future but will provide notice of
              any significant changes to our access model.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              We may update these Terms of Service from time to time. Changes will be posted on
              this page with an updated "Last updated" date. Material changes will be highlighted
              at the top of this page.
            </p>
            <p>
              Your continued use of Classic U.S. Civics after changes are posted constitutes
              acceptance of the updated Terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              These Terms are governed by the laws of the United States and the state in which
              Liberty's Principles Media operates, without regard to conflict of law principles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              If you have questions about these Terms of Service, please contact us through:
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

        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              By using Classic U.S. Civics, you acknowledge that you have read, understood, and
              agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
