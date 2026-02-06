import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-ok-black text-white">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-gray-400 mb-12">
          お仕事のご相談、ご依頼などお気軽にお問い合わせください。
        </p>
        
        <form className="space-y-6 text-left">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
            <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="山田 太郎" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="your@email.com" />
          </div>
           <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="お問い合わせ内容をご記入ください"></textarea>
          </div>
          
          <div className="pt-8 text-center">
            <button type="button" className="px-12 py-4 bg-white text-ok-black font-bold tracking-widest hover:bg-gray-200 transition-colors uppercase text-sm">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};