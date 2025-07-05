import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    name: "Basic Access",
    price: "Free",
    period: "Forever",
    features: [
      "Access to select free courses",
      "Community forum access",
      "Basic progress tracking",
    ],
    icon: <CheckCircle className="h-8 w-8 text-[#FF6B35]" />,
    cta: "Sign Up for Free",
    link: "/signup",
    popular: false,
  },
  {
    name: "Pro Learner",
    price: "$29",
    period: "/month",
    features: [
      "Access to all courses",
      "Downloadable resources",
      "Course completion certificates",
      "Priority support",
      "Offline viewing (coming soon)",
    ],
    icon: <Zap className="h-8 w-8 text-[#FF6B35]" />,
    cta: "Go Pro",
    link: "/signup?plan=pro",
    popular: true,
  },
  {
    name: "Teams & Business",
    price: "Custom",
    period: "",
    features: [
      "All Pro Learner features",
      "Team management dashboard",
      "Bulk enrollments",
      "Customized learning paths",
      "Dedicated account manager",
    ],
    icon: <Star className="h-8 w-8 text-[#FF6B35]" />,
    cta: "Contact Sales",
    link: "/contact",
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing & Plans - CodersZonee</title>
        <meta name="description" content="Explore flexible pricing plans for individuals and teams on CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">Flexible Plans for Everyone</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the plan that best fits your learning goals and budget. Start your journey with CodersZonee today!
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex flex-col ${tier.popular ? 'border-2 border-[#FF6B35] shadow-2xl shadow-orange-500/30' : 'border-slate-700'} bg-slate-800 rounded-xl overflow-hidden`}
            >
              {tier.popular && (
                <div className="bg-[#FF6B35] text-center py-2 text-black font-semibold">MOST POPULAR</div>
              )}
              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4">{tier.icon}</div>
                <CardTitle className="text-3xl font-bold text-white">{tier.name}</CardTitle>
                <CardDescription className="text-4xl font-extrabold text-[#FF6B35] my-4">
                  {tier.price} <span className="text-lg font-normal text-slate-400">{tier.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4 px-8">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-8 mt-auto">
                <Button asChild size="lg" className={`w-full text-lg py-3 ${tier.popular ? 'bg-[#FF6B35] text-black hover:bg-orange-400' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                  <Link to={tier.link}>{tier.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#FF6B35] mb-6">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            {[
              { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your Pro Learner subscription at any time. You'll retain access until the end of your current billing period." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and other popular payment methods depending on your region." },
              { q: "Are there any discounts for students or non-profits?", a: "We occasionally offer special discounts. Please contact our support team for more information." },
            ].map((faq, i) => (
              <Card key={i} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default PricingPage;