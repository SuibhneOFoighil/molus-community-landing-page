import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const JoinSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const addSignup = useMutation(api.signups.addSignup);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addSignup({ name, email });
    setSubmitted(true);
  };
  
  return (
    <section id="join" className="py-20 bg-[#E2D210] dark:bg-[#E2D210]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <AnimatedElement animation="slideLeft" delay={0.2}>
              <h2 className="font-['Helvetica_Neue'] font-medium text-3xl md:text-4xl mb-4 text-black dark:text-white">
                Join Our Community of Builders
              </h2>
              <p className="font-['Helvetica_Neue'] font-light text-lg mb-8 text-gray-800 dark:text-gray-200">
                Connect with fellow creators, get access to our Discord, and be the first to know about upcoming Ship It schedules and masterminds.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="slideLeft" delay={0.4}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-['Helvetica_Neue'] font-medium text-xl">
                    1
                  </div>
                  <span className="ml-3 font-['Helvetica_Neue'] font-light text-gray-800 dark:text-gray-200">Join Our Discord</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-['Helvetica_Neue'] font-medium text-xl">
                    2
                  </div>
                  <span className="ml-3 font-['Helvetica_Neue'] font-light text-gray-800 dark:text-gray-200">Attend a Meetup</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-['Helvetica_Neue'] font-medium text-xl">
                    3
                  </div>
                  <span className="ml-3 font-['Helvetica_Neue'] font-light text-gray-800 dark:text-gray-200">Ship Your Project</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <AnimatedElement animation="slideRight" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-black dark:border-white p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <h3 className="font-['Helvetica_Neue'] font-medium text-2xl mb-4 text-black dark:text-white">Thank You!</h3>
                    <p className="font-['Helvetica_Neue'] font-light mb-6 text-gray-700 dark:text-gray-300">
                      We've received your information and will be in touch soon with next steps to join our community.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-['Helvetica_Neue'] font-medium rounded-lg"
                    >
                      Sign Up Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-['Helvetica_Neue'] font-medium text-2xl mb-4 text-black dark:text-white">Get Started</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label 
                          htmlFor="name" 
                          className="block font-['Helvetica_Neue'] font-medium mb-2 text-black dark:text-white"
                        >
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-black dark:focus:border-white focus:outline-none font-['Helvetica_Neue'] font-light bg-white dark:bg-gray-700 text-black dark:text-white"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label 
                          htmlFor="email" 
                          className="block font-['Helvetica_Neue'] font-medium mb-2 text-black dark:text-white"
                        >
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-black dark:focus:border-white focus:outline-none font-['Helvetica_Neue'] font-light bg-white dark:bg-gray-700 text-black dark:text-white"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label className="flex items-start">
                          <input 
                            type="checkbox" 
                            className="mt-1 mr-2"
                            required
                          />
                          <span className="font-['Helvetica_Neue'] font-light text-sm text-gray-700 dark:text-gray-300">
                            I agree to receive updates about the community and upcoming events. You can unsubscribe at any time.
                          </span>
                        </label>
                      </div>
                      <button 
                        type="submit"
                        className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-['Helvetica_Neue'] font-medium rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
                      >
                        Join The Community
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;