import React from 'react';
import AnimatedElement from './AnimatedElement';
import { FloatingPaths } from './FloatingPaths';

const Hero: React.FC = () => {
  const colors = [
    '#12C7E0', // Blue
    '#ED3E4B', // Red
    '#E8990C', // Orange
    '#0EE574', // Green
    '#DC64E2'  // Purple
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-gray-900">
      <FloatingPaths position={1} colors={colors} />
      <FloatingPaths position={-1} colors={colors} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
          <div className="md:w-1/2">
            <AnimatedElement animation="slideLeft" delay={0.2}>
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-[10px] p-8 border-2 border-black dark:border-white">
                <h1 className="font-['Helvetica_Neue'] font-medium text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-tight text-black dark:text-white">
                  Where solo builders find their{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">community</span>
                    <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#E2D210] -rotate-1 z-0 opacity-50"></div>
                  </span>
                </h1>
                <p className="font-['Helvetica_Neue'] font-light text-lg md:text-xl mb-8 text-black dark:text-white max-w-lg leading-relaxed">
                  Join creators and tinkerers on the path to financial freedom. Share tools, workflows, and support each other through the founder journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#join" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-['Helvetica_Neue'] font-medium rounded-[10px] text-lg transition-transform hover:scale-105"
                  >
                    Join The Community
                  </a>
                  <a 
                    href="#ship-it" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-black dark:border-white text-black dark:text-white font-['Helvetica_Neue'] font-medium rounded-[10px] text-lg transition-transform hover:scale-105"
                  >
                    Learn About Ship It
                  </a>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="md:w-5/12">
            <AnimatedElement animation="slideRight" delay={0.4}>
              <div className="relative">
                <div className="absolute -top-3 -right-3 bg-[#ED3E4B] text-white px-4 py-1 rounded-full text-sm font-['Helvetica_Neue'] font-medium border-2 border-black z-10">
                  Limited Spots
                </div>
                <div className="bg-[#E2D210]/90 backdrop-blur-sm rounded-[10px] p-8 border-2 border-black dark:border-white">
                  <h3 className="font-['Helvetica_Neue'] font-medium text-2xl mb-6 text-black">Next Ship It Schedule</h3>
                  <div className="space-y-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-[10px] p-4 border-2 border-black">
                      <div className="font-['Helvetica_Neue'] font-regular text-sm text-black mb-1">Start Date</div>
                      <div className="font-['Helvetica_Neue'] font-medium text-xl text-black">May 4, 2025</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-[10px] p-4 border-2 border-black">
                      <div className="font-['Helvetica_Neue'] font-regular text-sm text-black mb-1">Launch Date</div>
                      <div className="font-['Helvetica_Neue'] font-medium text-xl text-black">May 14, 2025</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-[10px] p-4 border-2 border-black">
                      <div className="font-['Helvetica_Neue'] font-regular text-sm text-black mb-1">Spots Available</div>
                      <div className="font-['Helvetica_Neue'] font-medium text-xl text-[#ED3E4B]">3 of 10</div>
                    </div>
                    <div className="pt-4">
                      <a 
                        href="#join" 
                        className="block w-full text-center px-6 py-4 bg-black text-white font-['Helvetica_Neue'] font-medium rounded-[10px] text-lg transition-transform hover:scale-105 border-2 border-black"
                      >
                        Reserve Your Spot
                      </a>
                    </div>
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

export default Hero;