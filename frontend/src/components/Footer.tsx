import React from 'react';
import { Link } from '@tanstack/react-router';

const Footer: React.FC = () => {

  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Accessibility', path: '/accessibility' },
    { name: 'User Agreement', path: '/user-agreement' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Copyright Policy', path: '/copyright-policy' },
    { name: 'Brand Policy', path: '/brand-policy' },
    { name: 'Guest Controls', path: '/guest-controls' },
    { name: 'Community Guidelines', path: '/community-guidelines' },
  ];

  return (
    <footer className="w-full py-6 bg-white">
      <div className="max-w-[1128px] mx-auto px-6">
        
        <ul className="flex flex-wrap items-center justify-start gap-x-5 gap-y-3 text-[12px] text-[#666666] font-semibold">
          
          <li className="flex items-center mr-2 whitespace-nowrap">
            <span className="font-bold text-black text-[14px] flex items-center tracking-tight">
              Linked
              <span className="bg-black text-white px-0.5 ml-[1px] rounded-[2px]">in</span>
            </span>
            <span className="font-normal mt-0.5 ml-1.5">© 2026</span>
          </li>

          {footerLinks.map((link) => (
            <li key={link.name} className="whitespace-nowrap">
              <Link
                to={link.path}
                className="hover:text-[#0a66c2] hover:underline transition-colors"
                activeProps={{ className: "text-[#0a66c2] underline" }}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="whitespace-nowrap">
            <button className="flex items-center hover:text-[#0a66c2] hover:underline transition-colors focus:outline-none group">
              Language
              <svg 
                className="w-4 h-4 ml-0.5 text-[#666666] group-hover:text-[#0a66c2] transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;