import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SupportPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Support Ticket Submitted",
        description: "Our team has received your request and will get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Support - CodersZonee</title>
        <meta name="description" content="Contact our support team for help with your account, courses, or any other issues." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Contact Support</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-[#0c0c0c]/80 border-orange-500/20 tech-card p-4 md:p-8">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="John Doe" required className="bg-gray-900/80 border-gray-700 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required className="bg-gray-900/80 border-gray-700 h-12" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="issue" className="text-slate-300">Type of Issue</Label>
                  <Select required>
                    <SelectTrigger className="bg-gray-900/80 border-gray-700 h-12">
                      <SelectValue placeholder="Select an issue type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0c0c0c] text-white border-orange-500/30">
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="technical">Technical Problem</SelectItem>
                      <SelectItem value="course">Course Content</SelectItem>
                      <SelectItem value="account">Account Access</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-300">Describe your issue</Label>
                  <Textarea id="message" name="message" placeholder="Please provide as much detail as possible..." rows={6} required className="bg-gray-900/80 border-gray-700" />
                </div>
                <Button type="submit" className="w-full btn-tech text-black font-bold text-lg py-3 h-12 flex items-center justify-center" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></motion.div>
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </>
  );
};

export default SupportPage;