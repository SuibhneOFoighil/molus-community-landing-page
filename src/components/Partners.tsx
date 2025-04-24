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