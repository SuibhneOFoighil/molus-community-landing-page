This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src, .gitignore, bun.lock, CLAUDE.md, eslint.config.js, index.html, package.json, postcss.config.js, tailwind.config.js, tsconfig.app.json, tsconfig.json, tsconfig.node.json, vite.config.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
src/
  components/
    About.tsx
    AnimatedElement.tsx
    Community.tsx
    FAQ.tsx
    FloatingPaths.tsx
    Footer.tsx
    Hero.tsx
    JoinSection.tsx
    Navbar.tsx
    Partners.tsx
    ShipIt.tsx
  hooks/
    useDarkMode.tsx
    useIntersectionObserver.tsx
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
.gitignore
CLAUDE.md
eslint.config.js
index.html
package.json
postcss.config.js
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: src/components/About.tsx
```typescript
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
```

## File: src/components/AnimatedElement.tsx
```typescript
import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'parallax';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  as: Component = 'div'
}) => {
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setHasReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getAnimationClass = () => {
    if (hasReducedMotion) return '';
    
    const baseClass = isVisible ? 'animate-in' : 'opacity-0';
    const animationClass = {
      fadeIn: 'fade-in',
      slideUp: 'slide-up',
      slideLeft: 'slide-left',
      slideRight: 'slide-right',
      scale: 'scale-95',
      parallax: 'translate-y-4'
    }[animation];

    return `${baseClass} ${animationClass}`;
  };

  const style = {
    '--delay': `${delay}s`,
    '--duration': `${duration}s`
  } as React.CSSProperties;

  return (
    <Component
      ref={ref}
      className={`${className} ${getAnimationClass()} transition-all`}
      style={hasReducedMotion ? undefined : style}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;
```

## File: src/components/Community.tsx
```typescript
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
```

## File: src/components/FAQ.tsx
```typescript
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <AnimatedElement animation="slideLeft" delay={0.2 + index * 0.1}>
      <div className="border-b border-gray-200 dark:border-gray-700 py-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full text-left font-['Helvetica_Neue'] font-medium text-lg py-2 text-black dark:text-white"
        >
          {question}
          <span className="ml-6 flex-shrink-0">
            {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </span>
        </button>
        {isOpen && (
          <AnimatedElement animation="slideUp" delay={0}>
            <div className="mt-2 pr-12">
              <p className="font-['Helvetica_Neue'] font-light text-base text-gray-700 dark:text-gray-300">{answer}</p>
            </div>
          </AnimatedElement>
        )}
      </div>
    </AnimatedElement>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="font-['Helvetica_Neue'] font-medium text-3xl md:text-4xl mb-4 text-black dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="font-['Helvetica_Neue'] font-light text-lg text-gray-700 dark:text-gray-300">
              Have questions? We've got answers.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="slideUp" delay={0.4}>
          <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-black dark:border-white p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="slideUp" delay={0.6}>
          <div className="text-center mt-10">
            <p className="font-['Helvetica_Neue'] font-light mb-4 text-gray-700 dark:text-gray-300">
              Still have questions?
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-['Helvetica_Neue'] font-medium rounded-lg transition-transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "What is the Ship It schedule?",
    answer: "The Ship It schedule is our flagship 10-day program where participants work on their projects during nights and weekends. It starts on a Saturday, continues through the week, and concludes with a launch presentation the following Sunday."
  },
  {
    question: "Do I need to have a project idea to join?",
    answer: "Yes, we recommend having at least a basic idea of what you want to build before joining the Ship It schedule. However, we welcome members at all stages to join our community."
  },
  {
    question: "How much does it cost to join the community?",
    answer: "Basic community membership is free. The Ship It program has a small fee to ensure commitment and cover operational costs. Contact us for current pricing."
  },
  {
    question: "Do I have to share my code/project publicly?",
    answer: "No, sharing your repository is completely optional. While we encourage knowledge sharing for the benefit of the community, we respect your intellectual property."
  },
  {
    question: "I'm not in tech. Can I still participate?",
    answer: "Absolutely! Our community welcomes builders of all types - from software to physical products, content creators, and more. The Ship It methodology works for many types of projects."
  }
];

export default FAQ;
```

## File: src/components/FloatingPaths.tsx
```typescript
import { motion } from "framer-motion";

interface FloatingPathsProps {
  position: number;
  colors: string[];
}

export const FloatingPaths = ({ position, colors }: FloatingPathsProps) => {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: colors[i % colors.length],
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.01}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};
```

## File: src/components/Hero.tsx
```typescript
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
```

## File: src/components/JoinSection.tsx
```typescript
import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';

const JoinSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
```

## File: src/components/Partners.tsx
```typescript
import React from 'react';
import AnimatedElement from './AnimatedElement';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="font-['Helvetica_Neue'] font-medium text-3xl md:text-4xl mb-4 text-black dark:text-white">
              Our Partners
            </h2>
            <p className="font-['Helvetica_Neue'] font-light text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              We collaborate with leading entrepreneurial support organizations to provide our community with the best resources and opportunities.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <AnimatedElement 
              key={index} 
              animation="slideUp" 
              delay={0.3 + index * 0.15}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg border-2 border-black dark:border-white p-6 flex flex-col items-center text-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all hover:-translate-y-1 hover:-translate-x-1">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-3xl font-['Helvetica_Neue'] font-medium text-black dark:text-white">
                    {partner.logoInitial}
                  </span>
                </div>
                <h3 className="font-['Helvetica_Neue'] font-medium text-xl mb-2 text-black dark:text-white">{partner.name}</h3>
                <p className="font-['Helvetica_Neue'] font-light text-gray-700 dark:text-gray-300">{partner.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="slideUp" delay={0.8}>
          <div className="mt-16 bg-[#E2D210]/15 dark:bg-[#E2D210]/5 rounded-lg border-2 border-black dark:border-white p-8">
            <div className="text-center mb-6">
              <h3 className="font-['Helvetica_Neue'] font-medium text-2xl mb-2 text-black dark:text-white">Host a Mastermind With Us</h3>
              <p className="font-['Helvetica_Neue'] font-light text-gray-700 dark:text-gray-300">
                Are you part of an organization that supports entrepreneurs and creators? Partner with us to host a mastermind event.
              </p>
            </div>
            <div className="flex justify-center">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-['Helvetica_Neue'] font-medium rounded-lg transition-transform hover:scale-105"
              >
                Contact Us About Partnerships
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

const partners = [
  {
    name: "SBDC",
    logoInitial: "S",
    description: "The Small Business Development Center provides no-cost consulting and training to entrepreneurs and business owners."
  },
  {
    name: "Ann Arbor SPARK",
    logoInitial: "A",
    description: "A catalyst for economic development in the Ann Arbor region, supporting startups and tech companies."
  },
  {
    name: "TechTown Detroit",
    logoInitial: "T",
    description: "Detroit's entrepreneurship hub, offering programs, education and resources for early to growth-stage businesses."
  }
];

export default Partners;
```

## File: src/components/ShipIt.tsx
```typescript
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
```

## File: src/hooks/useDarkMode.tsx
```typescript
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark(prev => !prev);
  };

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { isDark, toggle };
};
```

## File: src/hooks/useIntersectionObserver.tsx
```typescript
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || (freezeOnceVisible && hasTriggered)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        setIsVisible(isElementVisible);
        if (isElementVisible && freezeOnceVisible) {
          setHasTriggered(true);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, hasTriggered]);

  return { ref: elementRef, isVisible };
};
```

## File: src/App.tsx
```typescript
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ShipIt from './components/ShipIt';
import Community from './components/Community';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update page title
    document.title = "Molus | Community for Solo Builders";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="font-['Helvetica_Neue']">
      <Navbar />
      <Hero />
      <About />
      <ShipIt />
      <Community />
      <Partners />
      <FAQ />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App
```

## File: src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base styles */
:root {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #000000;
    color: #ffffff;
  }
}

body {
  margin: 0;
  font-family: 'Helvetica Neue', 'Helvetica', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.5;
}

html {
  scroll-behavior: smooth;
}

/* Performance optimizations */
img {
  content-visibility: auto;
}

/* Touch-friendly focus states */
a:focus, 
button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(226, 210, 16, 0.5);
}

/* Scroll-triggered animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { 
    opacity: 0;
    transform: translateY(2rem);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-left {
  from { 
    opacity: 0;
    transform: translateX(-2rem);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-right {
  from { 
    opacity: 0;
    transform: translateX(2rem);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-in {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

.animate-in {
  animation-duration: var(--duration, 0.6s);
  animation-delay: var(--delay, 0s);
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-in.fade-in {
  animation-name: fade-in;
}

.animate-in.slide-up {
  animation-name: slide-up;
}

.animate-in.slide-left {
  animation-name: slide-left;
}

.animate-in.slide-right {
  animation-name: slide-right;
}

.animate-in.scale-95 {
  animation-name: scale-in;
}

/* Mobile optimizations */
section {
  position: relative;
  overflow: hidden;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Touch-friendly interactions */
button, 
a {
  transition: all 0.2s ease-in-out;
  min-height: 44px;
  min-width: 44px;
  padding: 12px;
}

/* Improved form inputs for mobile */
input,
select,
textarea {
  font-size: 16px !important;
  padding: 12px !important;
  border-radius: 8px !important;
  -webkit-appearance: none;
  appearance: none;
}

/* Prevent zoom on input focus in iOS */
@supports (-webkit-touch-callout: none) {
  input, select, textarea {
    font-size: 16px !important;
  }
}

/* Smooth scrolling with momentum */
.smooth-scroll {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  input,
  select,
  textarea {
    background-color: #000000;
    color: #ffffff;
    border-color: #333333;
  }

  input::placeholder,
  select::placeholder,
  textarea::placeholder {
    color: #666666;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #F2E220;
  }
}

.dark {
  background-color: #000000;
  color: #ffffff;
}
```

## File: src/main.tsx
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## File: src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

## File: eslint.config.js
```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

## File: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Molus - Community for Solo Builders. Join creators and tinkerers on the path to financial freedom." />
    <title>Molus | Community for Solo Builders</title>
    <link href="https://fonts.cdnfonts.com/css/helvetica-neue-9" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.cdnfonts.com">
    <link rel="dns-prefetch" href="https://fonts.cdnfonts.com">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
      fontSize: {
        'base': '16px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      padding: {
        'touch': '12px',
      },
      colors: {
        primary: {
          light: '#E2D210',
          dark: '#F2E220'
        }
      }
    },
  },
  plugins: [],
};
```

## File: tsconfig.app.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## File: tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## File: src/components/Navbar.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import LogoWhite from '../assets/images/molus-logo-horizontal-white-yellow.png';
import LogoBlack from '../assets/images/molus-logo-horizontal-black-yellow.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const logoSrc = isDark ? LogoWhite : LogoBlack;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logoSrc}
              alt="Molus Logo"
              className="h-12 md:h-16"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#ship-it">Ship It</NavLink>
            <NavLink href="#community">Community</NavLink>
            <NavLink href="#partners">Partners</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <button
              onClick={toggle}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black transition-all hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggle}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black transition-all hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#ship-it" onClick={() => setIsOpen(false)}>Ship It</MobileNavLink>
            <MobileNavLink href="#community" onClick={() => setIsOpen(false)}>Community</MobileNavLink>
            <MobileNavLink href="#partners" onClick={() => setIsOpen(false)}>Partners</MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2">
              <a 
                href="#join"
                onClick={() => setIsOpen(false)}
                className="block w-full px-5 py-3 text-center font-medium text-white dark:text-black bg-black dark:bg-white rounded-lg hover:bg-black/80 dark:hover:bg-white/80"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="font-['Helvetica_Neue'] font-medium text-black dark:text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ 
  href, 
  onClick, 
  children 
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-['Helvetica_Neue'] font-medium text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      {children}
    </a>
  );
};

export default Navbar;
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Bun
.bun
bun.lockb
```

## File: CLAUDE.md
```markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

## Code Style Guidelines
- **React**: Function components with React.FC type and explicit interfaces for props
- **TypeScript**: Strict mode enabled, noUnusedLocals, noUnusedParameters
- **Imports**: Group by external libraries first, then local components/hooks
- **Formatting**: 2-space indentation, semicolons, max line length ~80-100 chars
- **CSS**: Tailwind CSS with custom animations and dark mode support
- **Components**: Keep components in src/components/, one component per file
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Animation**: Use AnimatedElement component with accessibility (respects prefers-reduced-motion)
- **Errors**: Handle errors gracefully with fallbacks and user-friendly messages
- **State Management**: Use React hooks for state (useState, useEffect, custom hooks)
- **Accessibility**: Support reduced motion preferences, keyboard navigation, and proper ARIA attributes
- **Dark Mode**: Support system preferences with manual toggle via useDarkMode hook
- **Mobile**: Touch-friendly targets (min 44px), safe area insets, and optimized form elements
```

## File: vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },    
});
```

## File: src/components/Footer.tsx
```typescript
import React from 'react';
import AnimatedElement from './AnimatedElement';
import LogoWhite from '../assets/images/Molus_Logo_Horizontal_White.png';

const Footer: React.FC = () => {
  const logoSrc = LogoWhite;
  return (
    <footer className="bg-black text-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedElement animation="slideUp" delay={0.2} className="md:col-span-1">
            <img
              src={logoSrc}
              alt="Molus Logo"
              className="h-12 md:h-16 mb-4"
            />
            <p className="font-['Helvetica_Neue'] font-light text-gray-400 mb-4">
              Supporting solo builders, creators, and tinkerers on their founder journey.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" label="Twitter" icon="twitter" />
              <SocialLink href="#" label="LinkedIn" icon="linkedin" />
              <SocialLink href="#" label="Discord" icon="discord" />
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.3} className="md:col-span-1">
            <FooterSection title="Community" links={communityLinks} />
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.4} className="md:col-span-1">
            <FooterSection title="Resources" links={resourceLinks} />
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.5} className="md:col-span-1">
            <FooterSection title="Contact" links={contactLinks} />
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="slideUp" delay={0.6}>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-['Helvetica_Neue'] font-light text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Molus. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white dark:hover:text-primary-dark text-sm font-['Helvetica_Neue'] font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:hover:text-primary-dark text-sm font-['Helvetica_Neue'] font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; label: string; icon: string }> = ({ href, label, icon }) => (
  <a href={href} className="text-gray-400 hover:text-white dark:hover:text-primary-dark">
    <span className="sr-only">{label}</span>
    <div className="w-6 h-6" />
  </a>
);

const FooterSection: React.FC<{ title: string; links: Array<{ label: string; href: string }> }> = ({ 
  title, 
  links 
}) => (
  <>
    <h3 className="font-['Helvetica_Neue'] font-medium text-lg mb-4">{title}</h3>
    <ul className="space-y-2 font-['Helvetica_Neue'] font-light">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-gray-400 hover:text-white dark:hover:text-primary-dark">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </>
);

const communityLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Ship It Schedule', href: '#ship-it' },
  { label: 'Discord', href: '#' },
  { label: 'Events', href: '#' }
];

const resourceLinks = [
  { label: 'Knowledge Base', href: '#' },
  { label: 'Project Gallery', href: '#' },
  { label: 'Partner Organizations', href: '#' },
  { label: 'FAQ', href: '#faq' }
];

const contactLinks = [
  { label: 'Contact Us', href: '#' },
  { label: 'Partner With Us', href: '#' }
];

export default Footer;
```

## File: package.json
```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "bun run --bun vite",

    "build": "bun run --bun vite build",
    "lint": "bun run --bun eslint .",
    "preview": "bun run --bun vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.8",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "intersection-observer": "^0.12.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```
