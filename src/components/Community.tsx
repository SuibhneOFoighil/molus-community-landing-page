import React from 'react';
import { MessageSquare, Calendar, Users } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <AnimatedElement animation="slideLeft" delay={0.2}>
              <span className="inline-block bg-[#0EE574]/20 dark:bg-[#0EE574]/10 px-4 py-1 rounded-full text-sm font-['Helvetica_Neue'] font-medium mb-3 text-black dark:text-white">JOIN US</span>
              <h2 className="font-['Helvetica_Neue'] font-medium text-3xl md:text-4xl mb-4 text-black dark:text-white">
                Connect With Our Community
              </h2>
              <p className="font-['Helvetica_Neue'] font-light text-lg mb-8 text-gray-700 dark:text-gray-300">
                Whether you're looking for feedback, collaboration, or simply moral support, our community is here to help you succeed on your founder journey.
              </p>
            </AnimatedElement>
            
            <div className="space-y-4">
              {communityFeatures.map((feature, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="slideLeft" 
                  delay={0.3 + index * 0.15}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-white">
                        <feature.icon className="w-5 h-5 text-white dark:text-black" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-['Helvetica_Neue'] font-medium text-xl text-black dark:text-white">{feature.title}</h3>
                      <p className="font-['Helvetica_Neue'] font-light mt-1 text-gray-700 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
            
            <AnimatedElement animation="slideUp" delay={0.8}>
              <div className="mt-8">
                <a 
                  href="#join" 
                  className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-['Helvetica_Neue'] font-medium rounded-lg transition-transform hover:scale-105"
                >
                  Join Our Discord
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <AnimatedElement animation="slideRight" delay={0.4}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-[#E2D210] dark:bg-[#E2D210]/30 rounded-lg"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg border-2 border-black dark:border-white p-6 overflow-hidden">
                  <h3 className="font-['Helvetica_Neue'] font-medium text-xl mb-4 text-black dark:text-white">Community Testimonials</h3>
                  
                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <AnimatedElement 
                        key={index} 
                        animation="fadeIn" 
                        delay={0.6 + index * 0.2}
                      >
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <p className="font-['Helvetica_Neue'] font-light italic mb-3 text-gray-700 dark:text-gray-300">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                            <div className="ml-3">
                              <div className="font-['Helvetica_Neue'] font-medium text-sm text-black dark:text-white">
                                {testimonial.name}
                              </div>
                              <div className="font-['Helvetica_Neue'] font-light text-xs text-gray-600 dark:text-gray-400">
                                {testimonial.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

const communityFeatures = [
  {
    title: 'Active Discord',
    description: 'Daily conversations, resource sharing, and support from fellow builders.',
    icon: MessageSquare
  },
  {
    title: 'In-Person Meetups',
    description: 'Regular masterminds with regional entrepreneurial support organizations.',
    icon: Calendar
  },
  {
    title: 'Ship It Cohorts',
    description: 'Join a group of motivated builders for our 10-day sprint program.',
    icon: Users
  }
];

const testimonials = [
  {
    quote: "The Ship It schedule completely transformed how I approach building. I launched my MVP in just 10 days when I had been stuck for months before.",
    name: "Sarah K.",
    title: "Founder, DesignFlow"
  },
  {
    quote: "Being part of this community has connected me with so many valuable resources and collaborators. It's the support system every solo founder needs.",
    name: "Michael T.",
    title: "Creator, CodeCraft"
  }
];

export default Community;