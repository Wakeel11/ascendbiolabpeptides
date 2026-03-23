import { Beaker, ShieldCheck, Zap, Star, Users, Globe } from 'lucide-react';

export const About = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[#0056b3] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Who is Ascend BioLab?</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">About Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            A trusted partner for scientists and research laboratories around the globe, providing the highest quality chemicals and tools.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-8 leading-none">The Foundation of Research</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Ascend BioLab is a trusted partner for scientists and research laboratories around the globe. To explain what we do simply, imagine a builder who needs the strongest bricks to build a safe house. In the world of science, we are that trusted provider of the "bricks"—providing the highest quality chemicals and tools that ensure scientific experiments have reliable and powerful results.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are a research-focused supplier dedicated to advancing global scientific inquiry. We provide materials with the highest standards of purity, safety, and efficacy. We bridge the gap between complex ideas and innovative, real-world solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, title: 'Innovation', text: 'Science-Driven Innovation: We stay ahead of the curve to provide the latest tools.' },
              { icon: ShieldCheck, title: 'Quality', text: 'Verified Quality Control: Every batch is tested for 100% purity.' },
              { icon: Users, title: 'Support', text: 'Expert Technical Support: Our team understands the science behind the products.' },
              { icon: Globe, title: 'Delivery', text: 'Fast & Secure Delivery: We know your research can’t wait.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="bg-[#0056b3]/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#0056b3]">
                  <item.icon size={24} />
                </div>
                <h4 className="font-black text-gray-900 text-sm uppercase tracking-tight mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="text-center py-20 bg-[#0056b3] rounded-[50px] text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img src="https://picsum.photos/seed/science/1200/600" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 px-8">
            <Beaker className="h-16 w-16 text-blue-300 mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">Advancing Science Together</h2>
            <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
              Every discovery made using our materials is a shared success. We are honored to be a trusted partner in your laboratory's journey toward scientific excellence.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
