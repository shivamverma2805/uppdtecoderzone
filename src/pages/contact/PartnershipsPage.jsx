import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HeartHandshake as Handshake } from 'lucide-react';

const partners = [
  { name: "TechCorp", description: "A leading innovator in cloud solutions, providing our students with real-world infrastructure experience.", logo: "a sleek, modern logo for a tech company called TechCorp" },
  { name: "InnovateU", description: "A university partner dedicated to bridging the gap between academia and industry-level skills.", logo: "a university crest logo for InnovateU" },
  { name: "DevTools Inc.", description: "Providers of cutting-edge development tools, offering free licenses to our pro students.", logo: "a logo featuring a wrench and gear for DevTools Inc." },
];

const PartnershipsPage = () => {
  return (
    <>
      <Helmet>
        <title>Partnerships - CodersZonee</title>
        <meta name="description" content="Explore partnership opportunities with CodersZonee to empower the tech community together." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Partner With Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's collaborate to build a brighter future for the tech community.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center bg-[#0c0c0c]/80 border-orange-500/20 h-full tech-card p-4">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-slate-700 rounded-full flex items-center justify-center mb-4">
                    <img  alt={`${partner.name} logo`} className="w-16 h-16 object-contain" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
                  </div>
                  <CardTitle className="text-2xl text-white">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{partner.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-[#0c0c0c]/80 border border-orange-500/20 rounded-lg p-8 md:p-12 tech-shadow">
          <Handshake className="mx-auto h-12 w-12 text-orange-400 mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            If you're interested in partnering with CodersZonee to provide value to our students and the broader tech ecosystem, we'd love to hear from you.
          </p>
          <Button asChild size="lg" className="btn-tech text-black font-bold text-lg">
            <Link to="/contact/support">Contact Our Team</Link>
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default PartnershipsPage;