import React from 'react';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'PHILOSOPHY', href: '#philosophy' },
    { name: 'WORKS', href: '#works' },
    { name: 'COMPANY', href: '#company' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === '#top') {
        window.scrollTo({
         top: 0,
         behavior: "smooth"
       });
     }
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-0">
          <div className="mb-8 md:mb-0">
            <a 
              href="#top" 
              onClick={(e) => handleNavClick(e, '#top')}
              className="text-xl font-black tracking-tighter text-ok-black hover:text-gray-600 transition-colors inline-block cursor-pointer"
            >
              OK<sup className="text-xs">2</sup> inc.
            </a>
            <p className="mt-2 text-xs text-gray-400 leading-relaxed">
              Consulting / Planning / Connecting<br />
              Creating new value for the future.
            </p>
          </div>
          
          <nav className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-bold text-gray-500 hover:text-ok-black tracking-widest transition-colors uppercase cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
           <div className="flex space-x-4 mb-4 md:mb-0">
             <a href="#" className="hover:text-ok-black transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-ok-black transition-colors">Terms of Use</a>
           </div>
           <div className="tracking-wider">
             &copy; {new Date().getFullYear()} OK2 inc. All Rights Reserved.
           </div>
        </div>
      </div>
    </footer>
  );
};