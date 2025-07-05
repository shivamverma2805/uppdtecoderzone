import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, HelpCircle, LifeBuoy } from 'lucide-react';

const docsSections = {
  'getting-started': {
    title: 'Getting Started',
    icon: <Code size={18} />,
    content: (
      <div>
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Installation</h2>
        <p className="mb-4 text-slate-300">To get started with the CodersZonee CLI, you'll need to have Node.js and npm installed. Then, run the following command in your terminal:</p>
        <pre className="bg-[#0d1117] text-green-400 p-4 rounded-md code-font"><code>npm install -g coderszonee-cli</code></pre>
        <h2 className="text-3xl font-bold text-orange-400 mt-8 mb-4">Your First Project</h2>
        <p className="text-slate-300">Once installed, you can create a new project by running:</p>
        <pre className="bg-[#0d1117] text-green-400 p-4 rounded-md code-font"><code>coderszonee init my-awesome-project</code></pre>
      </div>
    ),
  },
  'api-reference': {
    title: 'API Reference',
    icon: <LifeBuoy size={18} />,
    content: (
      <div>
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Courses API</h2>
        <p className="mb-4 text-slate-300">The Courses API provides endpoints to fetch course information.</p>
        <h3 className="text-xl font-semibold text-slate-200 mb-2">GET /api/courses</h3>
        <p className="mb-4 text-slate-300">Returns a list of all available courses.</p>
        <h3 className="text-xl font-semibold text-slate-200 mb-2">GET /api/courses/:id</h3>
        <p className="text-slate-300">Returns details for a specific course by its ID.</p>
      </div>
    ),
  },
  'faq': {
    title: 'FAQ',
    icon: <HelpCircle size={18} />,
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-200">How do I reset my password?</h3>
          <p className="text-slate-300">You can reset your password by visiting the "Forgot Password" page and entering your email address.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">Do you offer course certificates?</h3>
          <p className="text-slate-300">Yes, upon successful completion of any paid course, you will receive a verifiable certificate.</p>
        </div>
      </div>
    ),
  },
};

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const ActiveContent = docsSections[activeSection].content;

  return (
    <>
      <Helmet>
        <title>Documentation - CodersZonee</title>
        <meta name="description" content="Find all the documentation you need for the CodersZonee platform, APIs, and tools." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text-orange mb-4">Documentation</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your comprehensive guide to the CodersZonee platform.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            <nav className="sticky top-36 bg-[#0c0c0c]/80 border border-orange-500/20 rounded-lg p-4">
              <ul>
                {Object.entries(docsSections).map(([key, { title, icon }]) => (
                  <li key={key}>
                    <button
                      onClick={() => setActiveSection(key)}
                      className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        activeSection === key
                          ? 'bg-orange-500/20 text-orange-400'
                          : 'text-slate-300 hover:bg-gray-800/50'
                      }`}
                    >
                      {icon}
                      <span className="font-medium">{title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="w-full md:w-3/4">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0c0c0c]/80 border border-orange-500/20 rounded-lg p-8"
            >
              {ActiveContent}
            </motion.div>
          </main>
        </div>
      </motion.div>
    </>
  );
};

export default DocsPage;