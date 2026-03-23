import { motion } from 'motion/react';
import { ShoppingCart, ExternalLink, Info, ShieldCheck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AOD 9604',
    category: 'Peptides',
    description: 'An advanced peptide compound used in diverse laboratory research studies. Known for its stability and high purity levels.',
    status: 'In Stock',
    link: 'https://ascendbiolab.com/product/aod-9604/',
    img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/Aod-9604-1536x1536.jpg'
  },
  {
    id: 2,
    name: 'BPC-157 (10mg)',
    category: 'Peptides',
    description: 'One of our most popular research-grade materials. Scientists use this for biological repair investigations and tissue study.',
    status: 'In Stock',
    link: 'https://ascendbiolab.com/product/bpc-157-10mg/',
    img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/bpc-157-10mg-300x300.jpg'
  },
  {
    id: 3,
    name: 'CJC 1295 With DAC',
    category: 'Peptides',
    description: 'A premium purity compound designed for advanced biological research projects requiring long-term study stability.',
    status: 'In Stock',
    link: 'https://ascendbiolab.com/product/cjc-1295-with-dac/',
    img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/cjc-1295-with-dac-300x300.jpg'
  },
  {
    id: 4,
    name: 'Bacteriostatic Water',
    category: 'Lab Supplies',
    description: 'Essential for every lab. Our water is deionized and sterile, making it the perfect solution for laboratory reagent mixing.',
    status: 'In Stock',
    link: 'https://ascendbiolab.com/product/bacteriostatic-water-2/',
    img: 'https://ascendbiolab.com/wp-content/uploads/2026/03/Bacteriostatic-Water-300x300.jpg'
  },
  {
    id: 5,
    name: 'CJC 1295 Without Dac 10mg',
    category: 'Peptides',
    description: 'A growth hormone releasing hormone (GHRH) analog used in research for long-term study stability.',
    status: 'In Stock',
    link: 'https://ascendbiolab.com/product/cjc-1295-without-dac-10mg/',
    img: 'https://picsum.photos/seed/cjcno/400/300'
  },
  {
    id: 6,
    name: 'GHK-Cu 50mg',
    category: 'Peptides',
    description: 'A naturally occurring copper complex used in research for its biological properties and tissue study.',
    status: 'In Stock',
    link: 'https://ascendbiolab.com/product/ghk-cu-50mg/',
    img: 'https://picsum.photos/seed/ghk/400/300'
  }
];

export const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-[#0056b3] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Research Catalog</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Laboratory Supplies</h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            High-purity peptides and specialized chemicals verified for laboratory research excellence.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="h-72 overflow-hidden relative group">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-[#0056b3] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{product.name}</h3>
                  <div className="flex items-center bg-green-50 text-green-600 px-2 py-1 rounded-md">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{product.status}</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
                
                <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Application</span>
                    <span className="text-[11px] text-gray-900 font-bold uppercase">Research Only</span>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0056b3] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#004494] transition-all shadow-md active:scale-95"
                  >
                    <ShoppingCart size={14} />
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Banner */}
        <div className="mt-24 bg-white border border-gray-100 p-10 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center gap-10">
          <div className="bg-red-50 p-6 rounded-3xl text-red-600">
            <Info size={40} />
          </div>
          <div>
            <h4 className="text-gray-900 font-black text-xl mb-3 uppercase tracking-tighter">Laboratory Compliance Notice</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
              All materials listed are strictly for in-vitro laboratory research and development. They are not intended for human or veterinary diagnostic or therapeutic use. By proceeding with a purchase, the buyer represents that they are a qualified researcher and will handle all products in accordance with established safety protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
