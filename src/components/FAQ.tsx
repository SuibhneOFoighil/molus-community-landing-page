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