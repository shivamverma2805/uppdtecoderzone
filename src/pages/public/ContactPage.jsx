import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; 
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "📬 Message Sent!",
      description: "Thank you for contacting CodersZonee. We'll get back to you shortly.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - CodersZonee</title>
        <meta name="description" content="Get in touch with CodersZonee. We're here to help with any questions or inquiries about our coding courses and platform." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#FF6B35] mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you!
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="bg-slate-800 border-slate-700 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#FF6B35] text-3xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35] h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35] h-12" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Inquiry about courses" value={formData.subject} onChange={handleChange} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35] h-12" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-300">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} rows={5} required className="bg-slate-700 border-slate-600 text-white focus:border-[#FF6B35]" />
                  </div>
                  <Button type="submit" className="w-full bg-[#FF6B35] text-black hover:bg-orange-400 text-lg py-3 h-12 flex items-center justify-center" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></motion.div>
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="bg-slate-800 border-slate-700 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#FF6B35] text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center space-x-4">
                  <Mail size={28} className="text-[#FF6B35] flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm">Email Us</p>
                    <a href="mailto:support@coderszonee.com" className="text-white hover:text-orange-400 transition-colors">support@coderszonee.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={28} className="text-[#FF6B35] flex-shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm">Call Us</p>
                    <a href="tel:+15551234567" className="text-white hover:text-orange-400 transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin size={28} className="text-[#FF6B35] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm">Our Office</p>
                    <p className="text-white">123 Code Street, Tech City, TC 54321, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#FF6B35] text-2xl">Find Us On Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-700 rounded-md flex items-center justify-center overflow-hidden">
                  <img  alt="Map showing CodersZonee office location" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop" />
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">Note: This is a placeholder map image.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;