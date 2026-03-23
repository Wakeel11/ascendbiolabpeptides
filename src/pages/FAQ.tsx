import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import { motion } from 'motion/react';

const faqs = [
  {
    question: "Are your materials safe for humans?",
    answer: "No. All products sold by Ascend BioLab are strictly for laboratory research and development purposes only. They are not intended for human or veterinary use. Any use outside of a controlled laboratory environment is strictly prohibited."
  },
  {
    question: "How do you ensure the purity of your peptides?",
    answer: "We utilize advanced chromatography and mass spectrometry (HPLC and MS) to verify the purity and identity of every batch. Our commitment to quality ensures that researchers receive materials that meet or exceed 99% purity benchmarks."
  },
  {
    question: "Who can buy from Ascend BioLab?",
    answer: "Our products are intended for use by professional researchers, academic institutions, and biotechnology companies. We strictly adhere to compliance guidelines regarding the distribution of research chemicals."
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer secure, discreet worldwide shipping. Orders are typically processed within 24-48 hours. Shipping times vary by location, but most domestic orders arrive within 3-5 business days. Real-time tracking is provided for all shipments."
  },
  {
    question: "Do you provide COA (Certificate of Analysis)?",
    answer: "Yes, we provide verified quality reports for our products to ensure transparency and reliability for your scientific experiments. Certificates of Analysis are available upon request for every batch we supply."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  return (
    <div className="flex flex-col">
      <section className="bg-[#0056b3] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Support Center</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Frequently Asked Questions</h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            Find answers to common questions about our research materials, shipping, and laboratory compliance.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-[32px] overflow-hidden transition-all shadow-sm hover:shadow-xl duration-500"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-10 py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-black text-gray-900 uppercase tracking-tight text-lg">{faq.question}</span>
                <div className={`p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#0056b3] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-10 pb-10 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-gray-900 rounded-[40px] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-6">Still have questions?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">Our specialized support team is available to assist with any technical or order-related inquiries.</p>
            <a 
              href="https://ascendbiolab.com/contact-us/" 
              className="inline-block bg-[#0056b3] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#004494] transition-all"
            >
              Contact Support Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
