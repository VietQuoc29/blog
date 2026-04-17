import { createFileRoute, Link, useSearch, useNavigate } from '@tanstack/react-router';
import { useState, useRef } from 'react';

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tag: (search.tag as string) || undefined,
    };
  },
  component: App,
});

const NAV_TAGS = ['Product updates', 'Member stories', 'Creators', 'Platform Information', 'Trust and Safety'];

const basePosts = [
  { imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', tag: 'Product updates', title: 'Updates to our Professional Community Policies', author: '', date: 'Nov 6, 2023' },
  { imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', tag: 'Trust and Safety', title: "Updates to LinkedIn's Terms of Service", author: 'Blake Lawit', date: 'Sep 18, 2024' },
  { imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', tag: 'Platform Information', title: "Sharing LinkedIn's Responsible AI Principles", author: 'Blake Lawit', date: 'Feb 22, 2023' },
  { imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', tag: 'Member stories', title: 'Mythbusting the Feed: How We Work to Address Bias', author: 'Imani Dunbar', date: 'Nov 1, 2022' },
  { imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', tag: 'Creators', title: 'New LinkedIn profile features help verify identity, detect and...', author: 'Oscar Rodriguez', date: 'Oct 25, 2022' },
  { imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', tag: 'Product updates', title: 'Mythbusting the Feed: How the Algorithm Works', author: 'Manisha Sharma', date: 'Aug 18, 2022' },
];

const mockPosts = Array.from({ length: 95 }, (_, index) => {
  const base = basePosts[index % basePosts.length];
  return { ...base, id: index + 1, title: `${base.title}` };
});

const POSTS_PER_PAGE = 9;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const postsSectionRef = useRef<HTMLElement>(null);
  
  // ==========================================
  // VƯỢT RÀO TANSTACK ROUTER VỚI "strict: false"
  // Đọc thẳng biến từ URL bất chấp file cấu hình
  const searchParams = useSearch({ strict: false }) as { tag?: string };
  const selectedTag = searchParams.tag;
  const navigate = useNavigate({ strict: false });
  // ==========================================

  // Lọc bài viết
  const filteredPosts = selectedTag 
    ? mockPosts.filter((post) => post.tag === selectedTag)
    : mockPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleTagClick = (tagName: string | undefined) => {
    navigate({ search: { tag: tagName } }); // Ghi tag lên URL
    setCurrentPage(1);
    
    if (postsSectionRef.current) {
      const y = postsSectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      setCurrentPage(page);
      setTimeout(() => {
        if (postsSectionRef.current) {
          const y = postsSectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const handlePrevious = () => { if (currentPage > 1) handlePageChange(currentPage - 1); };
  const handleNext = () => { if (currentPage < totalPages) handlePageChange(currentPage + 1); };

  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages];
    if (currentPage >= totalPages - 3) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <header className="sticky top-0 z-[100] w-full bg-white">
        <div className="w-full border-b border-[#ebebeb]">
          <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[52px] md:h-[64px] flex items-center justify-between">
            <button onClick={() => handleTagClick(undefined)} className="flex items-center no-underline group focus:outline-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" className="h-[21px] md:h-[26px]" />
              <span className="ml-2 text-[18px] md:text-[21px] font-bold text-black tracking-tight group-hover:text-black">Official Blog</span>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
            </button>
          </div>
        </div>

        <nav className="hidden md:block border-b border-[#ebebeb]">
          <div className="max-w-[1128px] mx-auto px-6 h-[48px]">
            <ul className="flex space-x-10 h-full">
              {NAV_TAGS.map((name) => (
                <li key={name} className="h-full">
                  <button
                    onClick={() => handleTagClick(name)}
                    className={`text-[15px] font-semibold transition-colors relative h-full flex items-center focus:outline-none ${
                      selectedTag === name 
                        ? 'text-black after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-[#0a66c2]' 
                        : 'text-[#666666] hover:text-black'
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow w-full pb-10">
        <section className="w-full bg-[#e8f0fe] py-14">
          <div className="max-w-[1128px] mx-auto px-4 md:px-6">
            <h1 className="text-[32px] md:text-[40px] font-light text-gray-900 mb-2 tracking-tight">Welcome to the Official LinkedIn Blog</h1>
            <p className="text-[18px] md:text-[20px] font-light text-gray-700">Your source for what's happening with LinkedIn</p>
          </div>
        </section>

        <section ref={postsSectionRef} className="max-w-[1128px] mx-auto px-4 md:px-6 mt-12">
          <h2 className="text-[28px] font-normal text-gray-900 mb-8 flex items-center gap-3">
            {selectedTag ? `${selectedTag}` : 'Latest Posts'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {currentPosts.map((post) => (
              <Link key={post.id} to="/post" search={{ id: post.id }} className="flex flex-col group cursor-pointer no-underline hover:no-underline">
                <div className="w-full aspect-[16/9] overflow-hidden mb-4 bg-gray-100">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                {post.tag && (
                  <button 
                    onClick={(e) => { e.preventDefault(); handleTagClick(post.tag); }}
                    className="text-[#0a66c2] text-[13px] font-semibold mb-2 hover:underline w-fit text-left focus:outline-none"
                  >
                    {post.tag}
                  </button>
                )}
                <h3 className="text-[18px] font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#0a66c2] group-hover:underline line-clamp-3">{post.title}</h3>
                <div className="mt-auto flex items-center text-[13px] text-gray-500">
                  {post.author && <><span className="font-semibold text-gray-900">{post.author}</span><span className="mx-1.5">|</span></>}
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {currentPosts.length === 0 && <div className="text-center py-20 text-gray-500 text-lg">No posts found for this category.</div>}

          {/* Phân trang */}
          {totalPages > 1 && (
            <div className="mt-20 border-t border-gray-200 pt-8 flex items-start justify-between text-[15px]">
              <button onClick={handlePrevious} disabled={currentPage === 1} className={`flex items-center font-medium focus:outline-none mt-1 transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-black cursor-pointer'}`}>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Previous
              </button>
              <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 px-2 max-w-[240px] md:max-w-none">
                {getPageNumbers().map((page, index) => (
                  <button key={index} onClick={() => handlePageChange(page)} disabled={page === '...'} className={`h-8 min-w-[32px] px-2 flex items-center justify-center rounded font-semibold transition-colors ${page === currentPage ? 'bg-[#5E6D77] text-white' : page === '...' ? 'text-gray-700 cursor-default bg-transparent tracking-widest items-end pb-1' : 'text-gray-700 hover:bg-gray-100 cursor-pointer'}`}>{page}</button>
                ))}
              </div>
              <button onClick={handleNext} disabled={currentPage === totalPages} className={`flex items-center font-medium focus:outline-none mt-1 transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-black cursor-pointer'}`}>
                Next <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="w-full bg-white py-4 border-t border-black mt-auto">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-semibold text-[#666666]">
            <li className="flex items-center mr-2 whitespace-nowrap">
              <img src="https://static.licdn.com/aero-v1/sc/h/6zm111mce7vohqze950ilreo4" alt="LinkedIn" className="h-[14px] md:h-[16px] object-contain opacity-90" />
              <span className="font-normal mt-[1px] ml-2 text-gray-500">© 2026</span>
            </li>
            {[
              { name: 'About', path: '/about' }, { name: 'Accessibility', path: '/accessibility' }, { name: 'User Agreement', path: '/user-agreement' }, { name: 'Privacy Policy', path: '/privacy-policy' }, { name: 'Cookie Policy', path: '/cookie-policy' }, { name: 'Copyright Policy', path: '/copyright-policy' }, { name: 'Brand Policy', path: '/brand-policy' }, { name: 'Guest Controls', path: '/guest-controls' }, { name: 'Community Guidelines', path: '/community-guidelines' },
            ].map((item) => (
              <li key={item.name} className="whitespace-nowrap"><Link to={item.path} className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">{item.name}</Link></li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}