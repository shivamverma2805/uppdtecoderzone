import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - CodersZonee</title>
        <meta name="description" content="Read the Terms of Service and Privacy Policy for CodersZonee." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 text-slate-300"
      >
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Terms of Service & Privacy Policy</h1>
          <p className="text-lg text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-4xl mx-auto prose-headings:text-orange-400 prose-a:text-orange-400 hover:prose-a:text-orange-300">
          <h2>1. Introduction</h2>
          <p>
            Welcome to CodersZonee. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms and our Privacy Policy.
          </p>

          <h2>2. Use of Our Service</h2>
          <p>
            CodersZonee provides an online learning platform. You agree to use our services for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          
          <h2>4. Referral Program Terms</h2>
          <p>
            Our Referral Program allows you to earn rewards by referring new users. A "successful referral" is defined as a new user who signs up through your unique link and purchases a paid plan. Rewards are subject to verification and may be invalidated for fraudulent activity. We reserve the right to modify or terminate the program at any time.
          </p>

          <h2>5. Privacy Policy</h2>
          <p>
            Our Privacy Policy, which is part of these Terms, describes how we collect, use, and protect your personal information.
          </p>
          <h3>Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you create an account, as well as information automatically collected through your use of our services (e.g., usage data, cookies).
          </p>
          <h3>How We Use Information</h3>
          <p>
            We use your information to provide, maintain, and improve our services, communicate with you, process transactions, and for security and fraud prevention.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, CodersZonee shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </p>
          
          <h2>7. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the service after the changes have been made will constitute your acceptance of the changes.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default TermsPage;