import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/about')({ component: About });

const infoCards = [
  {
    title: 'Products and services',
    desc: 'Grow your business with our unique mix of products.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80', // Thay bằng ảnh thật
    link: '#',
  },
  {
    title: 'Company Page',
    desc: 'Connect with the world’s largest network of professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Pressroom',
    desc: 'Explore the latest LinkedIn news, updates, and reports.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Branding policies',
    desc: 'Find up-to-date guidelines on LinkedIn brand usage.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      
      {/* ===== HEADER TƯƠNG TỰ TRANG CHỦ ===== */}
      <header className="sticky top-0 z-[100] w-full bg-white">
        <div className="w-full border-b border-[#ebebeb]">
          <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[52px] md:h-[64px] flex items-center justify-between">
            <Link to="/" className="flex items-center no-underline group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" className="h-[21px] md:h-[26px]" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ===== NỘI DUNG CHÍNH (BODY) ===== */}
      <main className="flex-grow w-full">
        
        {/* KHU VỰC HERO - CÓ HOA VĂN MỜ PHÍA SAU */}
        {/* Để giả lập hoa văn background của LinkedIn, ta dùng background SVG nhẹ nhàng */}
        <section className="relative w-full py-16 md:py-24 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#0a66c2 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          
          <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
            {/* Icon "in" màu xanh đặc trưng */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#0a66c2] text-white font-bold text-3xl px-2 py-0.5 rounded-sm tracking-tight flex items-center justify-center">
                in
              </div>
            </div>
            
            <h1 className="text-[36px] md:text-[56px] font-light text-gray-900 mb-6 tracking-tight leading-tight">
              About LinkedIn
            </h1>
            <p className="text-[18px] md:text-[22px] font-light text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Welcome to LinkedIn, the world's largest professional network with more than 
              1 billion members in more than 200 countries and territories worldwide.
            </p>
          </div>
        </section>

        {/* KHU VỰC TẦM NHÌN, SỨ MỆNH (CĂN GIỮA) */}
        <section className="max-w-[800px] mx-auto px-6 py-10 md:py-16 text-center space-y-16 md:space-y-24">
          
          {/* Vision */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-light text-gray-900 mb-4">Vision</h2>
            <p className="text-[16px] md:text-[18px] font-light text-gray-700">
              Create economic opportunity for every member of the global workforce.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-light text-gray-900 mb-4">Mission</h2>
            <p className="text-[16px] md:text-[18px] font-light text-gray-700">
              The mission of LinkedIn is simple: connect the world's professionals to make them more productive and successful.
            </p>
          </div>

          {/* Who are we? */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-light text-gray-900 mb-6">Who are we?</h2>
            <div className="text-[15px] md:text-[16px] text-gray-700 space-y-6 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <p>
                LinkedIn began in co-founder <a href="#" className="text-[#0a66c2] hover:underline font-semibold">Reid Hoffman's</a> living room in 2002 and was officially launched on May 5, 2003.
              </p>
              <p>
                Today, LinkedIn leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of <a href="#" className="text-[#0a66c2] hover:underline font-semibold">Ryan Roslansky</a>. In December 2016, Microsoft completed its acquisition of LinkedIn, bringing together the world's leading professional cloud and the world's leading professional network.
              </p>
            </div>
          </div>

        </section>

        {/* KHU VỰC THẺ THÔNG TIN (INFO CARDS) LÊN NỀN XÁM NHẠT */}
        <section className="w-full bg-[#f8fafc] py-16 md:py-24 mt-10">
          <div className="max-w-[1128px] mx-auto px-6">
            <h2 className="text-[24px] md:text-[32px] font-light text-gray-900 mb-10 text-left">
              For more information about our company
            </h2>
            
            {/* Lưới 4 cột trên Desktop, 1 cột trên Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {infoCards.map((card, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-md border border-gray-200 bg-white">
                    <img 
                      src={card.imageUrl} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 mb-4 flex-grow">
                    {card.desc}
                  </p>
                  <a href={card.link} className="text-[14px] text-gray-600 hover:text-black font-semibold mt-auto w-fit transition-colors">
                    Learn more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#f8fafc] py-10 border-t border-gray-200">
        <div className="max-w-[1128px] mx-auto px-6 flex flex-col items-center justify-center text-[12px] text-gray-600 font-semibold space-y-4">
          
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
            {[
              { name: 'About', path: '/about' },
              { name: 'Accessibility', path: '/accessibility' },
              { name: 'User Agreement', path: '/user-agreement' },
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Cookie Policy', path: '/cookie-policy' },
              { name: 'Copyright Policy', path: '/copyright-policy' },
              { name: 'Brand Policy', path: '/brand-policy' },
              { name: 'Guest Controls', path: '/guest-controls' },
              { name: 'Community Guidelines', path: '/community-guidelines' },
            ].map((item) => (
              <li key={item.name} className="whitespace-nowrap">
                <Link
                  to={item.path}
                  className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-1.5 font-normal">
            <span className="font-bold text-black text-[13px] flex items-center tracking-tight">
              Linked<span className="bg-[#0a66c2] text-white px-0.5 ml-[1px] rounded-[2px] text-[12px]">in</span>
            </span>
            <span>© LinkedIn Corporation 2026</span>
          </div>

        </div>
      </footer>
      
    </div>
  );
}