import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Users, DollarSign, Share2, HelpCircle, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ReferralProgramInfoPage = () => {
  const faqItems = [
    {
      question: "Who is eligible for the referral program?",
      answer: "All registered students with an active CodersZonee account are eligible to participate in our referral program."
    },
    {
      question: "What is a 'successful referral'?",
      answer: "A successful referral is a new user who signs up using your unique referral link and subscribes to any of our paid plans within 30 days of signing up."
    },
    {
      question: "How do I track my referrals?",
      answer: "You can track the status of all your referrals—from sign-up to successful subscription—in your personal Referral Dashboard."
    },
    {
      question: "When do I receive my reward?",
      answer: "Rewards are credited to your account within 7 business days after a successful referral is confirmed. You can view your earnings and withdrawal history in your dashboard."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Referral Program - CodersZonee</title>
        <meta name="description" content="Join the CodersZonee referral program. Share with friends and earn rewards!" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 container mx-auto"
      >
        <header className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="mx-auto mb-6 p-4 bg-[#FF6B35] rounded-full w-fit inline-block"
          >
            <Gift size={48} className="text-black" />
          </motion.div>
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">Share CodersZonee, Earn ₹500!</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Love learning with us? Invite your friends and get rewarded with ₹500 for every friend who joins a paid plan. It's a win-win!
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-12">How It Works in 3 Easy Steps</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Share2 size={40} className="text-[#FF6B35]" />, title: "1. Share Your Link", description: "Find your unique referral link in your student dashboard and share it with friends." },
              { icon: <Users size={40} className="text-[#FF6B35]" />, title: "2. Friend Subscribes", description: "Your friend signs up using your link and enrolls in any paid course." },
              { icon: <DollarSign size={40} className="text-[#FF6B35]" />, title: "3. Earn Your Reward", description: "You get ₹500 credited to your account, ready for withdrawal." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-slate-800/50 border border-orange-500/20 p-10 rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold text-center text-[#FF6B35] mb-8">Program Details</h2>
            <div className="grid md:grid-cols-3 gap-8 text-slate-300">
                <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-white">Qualification Criteria</h3>
                        <p className="text-slate-400">A referral is successful when a new user signs up via your link and purchases their first paid course.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-400 mt-1 shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-white">Payment Timeline</h3>
                        <p className="text-slate-400">Rewards are processed and added to your wallet within 7 business days of a successful referral.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <DollarSign className="h-6 w-6 text-yellow-400 mt-1 shrink-0" />
                    <div>
                        <h3 className="text-xl font-semibold text-white">Reward Structure</h3>
                        <p className="text-slate-400">Earn a flat ₹500 for each successful referral. There's no limit to how many friends you can refer!</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full bg-[#0c0c0c]/50 border border-orange-500/20 rounded-lg px-6">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline text-left text-lg text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Sharing?</h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Log in to your account to find your unique referral link and start earning rewards today!
          </p>
          <Button asChild size="lg" className="bg-[#FF6B35] text-black hover:bg-orange-400 transition-colors text-lg px-10 py-3 font-bold btn-tech">
            <Link to="/student/dashboard">Go to My Dashboard</Link>
          </Button>
           <p className="text-xs text-slate-500 mt-4">By participating, you agree to our <Link to="/terms" className="underline hover:text-orange-400">Referral Program Terms and Conditions</Link>.</p>
        </section>
      </motion.div>
    </>
  );
};

export default ReferralProgramInfoPage;