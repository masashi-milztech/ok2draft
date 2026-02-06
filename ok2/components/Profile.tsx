import React from 'react';

export const Company: React.FC = () => {
  return (
    <section id="company" className="py-24 bg-ok-gray">
      <div className="container mx-auto px-6 max-w-6xl">
         <div className="mb-12 text-center md:text-left">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-2 uppercase">Company</h2>
            <h3 className="text-3xl font-bold text-ok-black">Overview</h3>
         </div>

         <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
            {/* Left Column: Company Info */}
            <div className="flex-1 w-full bg-white px-8 py-4 md:px-12 md:py-6 shadow-sm border border-gray-100">
                <dl className="divide-y divide-gray-100">
                   <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                      <dt className="md:col-span-3 text-xs font-bold text-gray-400 uppercase tracking-widest pt-1">Company Name</dt>
                      <dd className="md:col-span-9 text-ok-black font-normal">
                         株式会社 オーケーツーインクス<br/>
                         <span className="text-sm text-gray-500 font-normal mt-1 block">OK² inc.</span>
                      </dd>
                   </div>

                   <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                      <dt className="md:col-span-3 text-xs font-bold text-gray-400 uppercase tracking-widest pt-1">Representative</dt>
                      <dd className="md:col-span-9 text-ok-black font-normal">
                         木村 治 <span className="text-sm text-gray-500 font-bold ml-2">OSAMU KIMURA</span>
                         <div className="text-xs text-gray-400 font-normal mt-1">Founder / CEO</div>
                      </dd>
                   </div>

                   <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                      <dt className="md:col-span-3 text-xs font-bold text-gray-400 uppercase tracking-widest pt-1">Address</dt>
                      <dd className="md:col-span-9 text-ok-black font-normal leading-relaxed">
                         〒151-0064<br/>
                         東京都渋谷区上原 3-7-19-102<br/>
                         <span className="text-sm text-gray-500 font-normal mt-1 block">3-7-19-102 Uehara, Shibuya-ku, Tokyo</span>
                      </dd>
                   </div>

                   <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                      <dt className="md:col-span-3 text-xs font-bold text-gray-400 uppercase tracking-widest pt-1">Contact</dt>
                      <dd className="md:col-span-9 text-ok-black font-normal space-y-1">
                         <p>090 4123 9662</p>
                         <p><a href="mailto:o.kimura@ok2inc.com" className="hover:text-gray-500 transition-colors border-b border-gray-200 hover:border-gray-500 pb-0.5">o.kimura@ok2inc.com</a></p>
                         <p><a href="https://ok2inc.com" className="hover:text-gray-500 transition-colors border-b border-gray-200 hover:border-gray-500 pb-0.5">ok2inc.com</a></p>
                      </dd>
                   </div>

                   <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                      <dt className="md:col-span-3 text-xs font-bold text-gray-400 uppercase tracking-widest pt-1">Services</dt>
                      <dd className="md:col-span-9 text-ok-black font-normal">
                         Consulting / Planning / Connecting
                      </dd>
                   </div>
                </dl>
            </div>

            {/* Right Column: Representative Image */}
            <div className="w-full md:w-80 shrink-0">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white shadow-sm border border-gray-100 group">
                    <img 
                        src="https://new-sapphire-8dgjipk7tl.edgeone.app/B0000138.jpg" 
                        alt="Osamu Kimura" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                </div>
                <div className="mt-4 text-left pl-1">
                    <p className="text-sm font-bold text-ok-black tracking-widest">OSAMU KIMURA</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Founder / CEO</p>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};
