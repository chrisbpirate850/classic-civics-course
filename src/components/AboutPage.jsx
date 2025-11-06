import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Compass, Heart, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  const projects = [
    {
      name: "Liberty's Principles Pals",
      icon: <BookOpen className="h-8 w-8" />,
      description: "A beloved children's book series comprising 28 titles designed to introduce young learners to American values and founding principles.",
      details: "Each book in the series focuses on one of America's 28 founding principles, teaching children about concepts like liberty, justice, responsibility, and civic virtue through engaging stories and beautiful illustrations.",
      url: "https://libertysprinciplespals.com",
      color: "text-garden-green"
    },
    {
      name: "The Citizen's Compass",
      icon: <Compass className="h-8 w-8" />,
      description: "An interactive platform delivering comprehensive lessons on American founding principles to families and students.",
      details: "The Citizen's Compass provides structured curriculum, interactive activities, and family discussion guides to help parents and educators teach civic principles in an engaging, accessible way.",
      url: "https://thecitizenscompass.netlify.app",
      color: "text-blue-600"
    },
    {
      name: "Liberty's Principles Media",
      icon: <Users className="h-8 w-8" />,
      description: "The parent organization creating educational content focused on teaching constitutional principles and American values.",
      details: "Liberty's Principles Media develops curricula, books, apps, and resources to support civic education for all ages. Our mission is to ensure every American understands the principles that make our republic work.",
      url: "https://libertysprinciplesmedia.com",
      color: "text-patriot-red"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">About Classic U.S. Civics</h1>
            <p className="text-xl text-muted-foreground">
              Teaching America's principles, one lesson at a time
            </p>
          </div>
        </div>

        <Card className="border-ink-blue/20">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Classic U.S. Civics is a comprehensive educational platform providing 7 chapters
              and 65 detailed lessons covering American government, constitutional rights, and civic
              engagement. This free resource was created to ensure every American has access to
              quality civic education.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* The Liberty's Principles Media Ecosystem */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">The Liberty's Principles Media Ecosystem</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`${project.color}`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.name}</CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.details}
                </p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    Visit {project.name}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Christopher J. Bradley */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">About the Creator</h2>
        <Card className="border-liberty-gold/30">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                <strong>Christopher J. Bradley</strong> is an educator, author, and civic advocate
                dedicated to strengthening American civic education. Concerned by declining civic
                literacy and engagement, Christopher created Liberty's Principles Media to develop
                resources that make learning about American government accessible, engaging, and
                actionable.
              </p>
              <p>
                Through projects like Liberty's Principles Pals (a 28-book children's series),
                The Citizen's Compass (an interactive family platform), and Classic U.S. Civics
                (this comprehensive curriculum), Christopher aims to ensure every generation
                understands the principles that make our republic work.
              </p>
              <p>
                Christopher also develops civic technology tools like the FairBill Analyzer,
                which uses AI to help citizens understand legislation, and maintains The Art
                of Citizenship, a big-tent civics hub for exploring engaged citizenship.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://christopherjbradley.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="gap-2">
                    Learn More About Christopher
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mission & Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Accessible Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Making high-quality civic education freely available to all Americans,
                regardless of background or resources.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Family-Centered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Empowering parents and educators with tools to teach civic principles
                in homes and classrooms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Principle-Based
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Focusing on timeless American principles rather than partisan politics,
                building unity through shared values.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Connect */}
      <section>
        <Card className="bg-gradient-patriot text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-lg mb-6 opacity-90">
              Help us strengthen civic education across America. Explore our resources,
              share with educators and families, and join us in teaching the principles
              that make our republic work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://libertysprinciplesmedia.com" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="gap-2">
                  Visit Liberty's Principles Media
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
