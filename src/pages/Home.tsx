import { motion } from 'motion/react';
import { Beaker, ShieldCheck, Truck, Zap, Star, ChevronRight, ShoppingCart } from 'lucide-react';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden bg-[#0056b3]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/lab/1920/1080?blur=5" 
            alt="Laboratory Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3] via-[#0056b3]/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 border border-white/20">
              Premium Research Chemicals
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
              Powering Discovery: <br />
              <span className="text-blue-300">Purity in Research,</span> <br />
              Power in Discovery.
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              Your premier source for high-purity peptides and scientific solutions, specifically engineered for advanced laboratory research.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://ascendbiolab.com/shop/" 
                className="bg-white text-[#0056b3] px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-3"
              >
                <ShoppingCart size={18} />
                Explore Shop
              </a>
              <a 
                href="https://ascendbiolab.com/about-us/" 
                className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all active:scale-95"
              >
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Safety Notice */}
      <section className="bg-red-50 py-6 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-red-700 font-black uppercase tracking-tight text-center text-sm md:text-base">
            <span>⚠️ IMPORTANT SAFETY NOTICE: All products provided by Ascend BioLab are strictly FOR LABORATORY RESEARCH USE ONLY.</span>
          </div>
        </div>
      </section>

      {/* Who is Ascend BioLab? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 block">Who is Ascend BioLab?</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-8">Your Trusted Partner in Science</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Ascend BioLab is a trusted partner for scientists and research laboratories around the globe. To explain what we do simply, imagine a builder who needs the strongest bricks to build a safe house. In the world of science, we are that trusted provider of the "bricks"—providing the highest quality chemicals and tools that ensure scientific experiments have reliable and powerful results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We are a research-focused supplier dedicated to advancing global scientific inquiry. We provide materials with the highest standards of purity, safety, and efficacy. We bridge the gap between complex ideas and innovative, real-world solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Innovation', desc: 'Science-Driven Innovation' },
                  { title: 'Quality', desc: 'Verified Quality Control' },
                  { title: 'Support', desc: 'Expert Technical Support' },
                  { title: 'Delivery', desc: 'Fast & Secure Delivery' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-[#0056b3]/10 p-2 rounded-lg text-[#0056b3]">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-sm font-black text-gray-900 uppercase tracking-tight">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://ascendbiolab.com/wp-content/uploads/2026/03/freepik__ultrarealistic-product-photography-of-peptide-labo__56205-600x600.png" 
                  alt="Research" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#0056b3] p-10 rounded-[40px] text-white shadow-2xl hidden lg:block">
                <p className="text-4xl font-black mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-80">Purity Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 block">Our Research Products</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">The Shop</h2>
              <p className="text-gray-500 mt-4 font-medium">We provide a wide range of verified research materials. Every product listed is intended ONLY for laboratory experimentation and study.</p>
            </div>
            <a href="https://ascendbiolab.com/shop/" className="text-[#0056b3] font-black uppercase tracking-widest text-xs border-b-2 border-[#0056b3] pb-1 hover:text-[#004494] hover:border-[#004494] transition-all">
              View All Products
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'AOD 9604', desc: 'An advanced peptide compound used in diverse laboratory research studies. Known for its stability and high purity levels.', img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/Aod-9604-1536x1536.jpg', link: 'https://ascendbiolab.com/product/aod-9604/' },
              { name: 'BPC-157 (10mg)', desc: 'One of our most popular research-grade materials. Scientists use this for biological repair investigations and tissue study.', img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/bpc-157-10mg-300x300.jpg', link: 'https://ascendbiolab.com/product/bpc-157-10mg/' },
              { name: 'CJC-1295 + DAC', desc: 'A premium purity compound designed for advanced biological research projects requiring long-term study stability.', img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/cjc-1295-with-dac-300x300.jpg', link: 'https://ascendbiolab.com/product/cjc-1295-with-dac/' },
              { name: 'Bacteriostatic Water', desc: 'Essential for every lab. Our water is deionized and sterile, making it the perfect solution for laboratory reagent mixing.', img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/Bacteriostatic-Water-300x300.jpg', link: 'https://ascendbiolab.com/product/bacteriostatic-water-2/' }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-tight">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed min-h-[4.5rem]">{product.desc}</p>
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-50 text-[#0056b3] py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group-hover:bg-[#0056b3] group-hover:text-white transition-all"
                  >
                    <ShoppingCart size={12} />
                    Buy Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What are Peptides? */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0056b3] rounded-[60px] p-12 md:p-20 text-white relative">
            <div className="absolute top-0 right-0 opacity-10 -mr-20 -mt-20">
              <Beaker size={400} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="text-blue-200 text-xs font-black uppercase tracking-widest mb-4 block">A Simple Explanation</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 leading-none">What are Peptides?</h2>
              <p className="text-xl text-blue-50 leading-relaxed mb-8 font-medium">
                Imagine your body is a big LEGO set. Peptides are like the small pieces that connect different parts together to make the final build work. In a lab, scientists study these small pieces under microscopes to understand their role and how they behave.
              </p>
              <p className="text-xl text-blue-50 leading-relaxed font-medium">
                At Ascend BioLab, our job is to make sure these peptides are 100% pure, without any mistakes. If the "LEGO piece" is broken or dirty, the whole experiment might fail. That is why we focus on extreme quality—so that the scientist’s complex experiments always work exactly as intended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 block">Our Foundation</span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">Our Commitment to Quality</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm text-center">
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
              Quality isn't just a word for us; it is our foundation. We use advanced testing methods like HPLC and MS testing to verify that what you receive is exactly what you ordered. In scientific research, there is no room for "almost correct." It has to be perfect.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-[#0056b3] font-black uppercase tracking-widest text-xs">
                <ShieldCheck size={20} />
                HPLC Verified
              </div>
              <div className="flex items-center gap-2 text-[#0056b3] font-black uppercase tracking-widest text-xs">
                <ShieldCheck size={20} />
                MS Testing
              </div>
              <div className="flex items-center gap-2 text-[#0056b3] font-black uppercase tracking-widest text-xs">
                <ShieldCheck size={20} />
                100% Purity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 block">Researcher Feedback</span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase leading-none">Trusted by Experts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { text: "Ascend BioLab has consistently provided high-quality laboratory materials that meet our strict standards. Their reliability and professionalism are unmatched.", author: "Michael Carter", role: "Research Director" },
              { text: "The product purity and customer support from Ascend BioLab are excellent. Their solutions have supported our projects perfectly from day one.", author: "Emily S.", role: "Laboratory Technician" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-12 rounded-[40px] border border-gray-100">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl text-gray-700 italic leading-relaxed mb-8 font-medium">"{testimonial.text}"</p>
                <div>
                  <p className="font-black text-gray-900 uppercase tracking-tight">{testimonial.author}</p>
                  <p className="text-xs text-[#0056b3] font-bold uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
