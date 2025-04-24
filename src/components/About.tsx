import React from 'react';
import { Lightbulb, Users, Rocket } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="font-['Helvetica_Neue'] font-medium text-3xl md:text-4xl mb-4 text-black dark:text-white">
              Creators Supporting Creators
            </h2>
            <p className="font-['Helvetica_Neue'] font-light text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              We're a community of solo builders, tinkerers, and creators sharing knowledge and supporting each other through the founder journey.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <AnimatedElement 
              key={index} 
              animation="slideUp" 
              delay={0.3 + index * 0.2}
              className="h-full"
            >
              <div 
                className="h-full rounded-lg border-2 border-black dark:border-white p-6 transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1"
                style={{ backgroundColor: feature.bgColor }}
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-black dark:bg-white">
                  <feature.icon className="w-6 h-6 text-white dark:text-black" />
                </div>
                <h3 className="font-['Helvetica_Neue'] font-medium text-xl mb-2 text-black dark:text-white">{feature.title}</h3>
                <p className="font-['Helvetica_Neue'] font-light text-gray-800 dark:text-gray-200">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: 'Share Knowledge',
    description: 'Exchange best practices on tools and workflows with fellow creators who understand your challenges.',
    icon: Lightbulb,
    bgColor: 'rgba(18, 199, 224, 0.15)'
  },
  {
    title: 'Find Community',
    description: 'Connect with like-minded founders in our Discord and at in-person masterminds across the region.',
    icon: Users,
    bgColor: 'rgba(14, 229, 116, 0.15)'
  },
  {
    title: 'Ship Products',
    description: 'Participate in our flagship 10-day sprint program and launch your MVP with accountability and support.',
    icon: Rocket,
    bgColor: 'rgba(226, 210, 16, 0.15)'
  }
];

export default About;