import React from 'react';
import { Clock, Zap, Presentation as PresentationChart, Database } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ShipIt: React.FC = () => {
  return (
    <section id="ship-it" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <span className="inline-block bg-[#E2D210] dark:bg-[#E2D210]/30 px-4 py-1 rounded-full text-sm font-['Helvetica_Neue'] font-medium mb-3 text-black dark:text-white">OUR FLAGSHIP PROGRAM</span>
            <h2 className="font-['Helvetica_Neue'] font-medium text-3xl md:text-4xl mb-4 text-black dark:text-white">
              The Ship It Schedule
            </h2>
            <p className="font-['Helvetica_Neue'] font-light text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              A 10-day 'nights and weekends' schedule designed to help you build, launch, and share your project with supportive accountability.
            </p>
          </div>
        </AnimatedElement>

        <div className="flex flex-col md:flex-row">
          <AnimatedElement animation="slideLeft" delay={0.4} className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <img 
              src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Collaboration session" 
              className="w-full h-full object-cover rounded-lg border-2 border-black dark:border-white"
            />
          </AnimatedElement>
          
          <div className="md:w-1/2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <AnimatedElement key={index} animation="slideRight" delay={0.4 + index * 0.15}>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-['Helvetica_Neue'] font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-['Helvetica_Neue'] font-medium text-xl text-black dark:text-white">{step.title}</h3>
                      <p className="font-['Helvetica_Neue'] font-light mt-1 text-gray-700 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement animation="slideUp" delay={0.8}>
              <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg border-2 border-black dark:border-white p-6">
                <h4 className="font-['Helvetica_Neue'] font-medium text-lg mb-3 text-black dark:text-white">Why Ship It Works:</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[#12C7E0] dark:text-[#12C7E0]/80">
                        <benefit.icon size={20} />
                      </span>
                      <span className="font-['Helvetica_Neue'] font-light text-gray-700 dark:text-gray-300">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: 'Weekend Kickoff',
    description: 'Start Saturday with project planning and initial setup. Connect with others and share your goals.'
  },
  {
    title: 'Weekday Progress',
    description: 'Work on your project during evenings and share daily updates with the community for accountability.'
  },
  {
    title: 'Launch Sunday',
    description: 'Present your finished project in a live showcase meeting, like a virtual science fair for builders.'
  },
  {
    title: 'Knowledge Sharing',
    description: 'Optionally publish your repo and contribute to our database as a reference for future builders.'
  }
];

const benefits = [
  {
    text: 'Time-boxed structure keeps you focused and accountable',
    icon: Clock
  },
  {
    text: 'Rapid iteration cycle helps you ship instead of overthinking',
    icon: Zap
  },
  {
    text: 'Live demo creates a deadline and celebration opportunity',
    icon: PresentationChart
  },
  {
    text: 'Shared knowledge base builds collective intelligence',
    icon: Database
  }
];

export default ShipIt;