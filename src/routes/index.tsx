import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useRef } from 'react'

export const Route = createFileRoute('/')({ component: App })

const basePosts = [
  { imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', tag: '', title: 'Updates to our Professional Community Policies', author: '', date: 'Nov 6, 2023' },
  { imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', tag: 'Trust and safety', title: "Updates to LinkedIn's Terms of Service", author: 'Blake Lawit', date: 'Sep 18, 2024' },
  { imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', tag: '', title: "Sharing LinkedIn's Responsible AI Principles", author: 'Blake Lawit', date: 'Feb 22, 2023' },
  { imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', tag: 'Advance your career', title: 'Mythbusting the Feed: How We Work to Address Bias', author: 'Imani Dunbar', date: 'Nov 1, 2022' },
  { imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', tag: '', title: 'New LinkedIn profile features help verify identity, detect and...', author: 'Oscar Rodriguez', date: 'Oct 25, 2022' },
  { imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', tag: 'Advance your career', title: 'Mythbusting the Feed: How the Algorithm Works', author: 'Manisha Sharma', date: 'Aug 18, 2022' },
];

const mockPosts = Array.from({ length: 91 }, (_, index) => {
  const base = basePosts[index % basePosts.length];
  return {
    ...base,
    id: index + 1,
    title: `${base.title}`
  };
});

const POSTS_PER_PAGE = 9;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsSectionRef = useRef<HTMLElement>(null);
  const totalPages = Math.ceil(mockPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = mockPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  const handlePageChange = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      setCurrentPage(page);
      
      if (postsSectionRef.current) {
        const y = postsSectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      if (postsSectionRef.current) {
        const y = postsSectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      if (postsSectionRef.current) {
        const y = postsSectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    } else if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
  };

  return (
    <main className="w-full bg-white pb-20">
      <section className="w-full bg-[#e8f0fe] py-14">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6">
          <h1 className="text-[32px] md:text-[40px] font-light text-gray-900 mb-2 tracking-tight">
            Welcome to the Official LinkedIn Blog
          </h1>
          <p className="text-[18px] md:text-[20px] font-light text-gray-700">
            Your source for what's happening with LinkedIn
          </p>
        </div>
      </section>

      <section ref={postsSectionRef} className="max-w-[1128px] mx-auto px-4 md:px-6 mt-12">
        <h2 className="text-[28px] font-normal text-gray-900 mb-8">Latest Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {currentPosts.map((post) => (
            <Link 
              key={post.id} 
              to="/" 
              className="flex flex-col group cursor-pointer no-underline"
            >
              <div className="w-full aspect-[16/9] overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {post.tag && (
                <span className="text-[#0a66c2] text-[13px] font-semibold mb-2 hover:underline w-fit">
                  {post.tag}
                </span>
              )}

              <h3 className="text-[18px] font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#0a66c2] group-hover:underline line-clamp-3">
                {post.title}
              </h3>

              <div className="mt-auto flex items-center text-[13px] text-gray-500">
                {post.author && (
                  <>
                    <span className="font-semibold text-gray-900">{post.author}</span>
                    <span className="mx-1.5">|</span>
                  </>
                )}
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-20 border-t border-gray-200 pt-8 flex items-start justify-between text-[15px]">
            <button 
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center font-medium focus:outline-none mt-1 transition-colors ${
                currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-black cursor-pointer'
              }`}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 px-2 max-w-[240px] md:max-w-none">
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  disabled={page === '...'}
                  className={`h-8 min-w-[32px] px-2 flex items-center justify-center rounded font-semibold transition-colors ${
                    page === currentPage
                      ? 'bg-[#5E6D77] text-white' 
                      : page === '...'
                      ? 'text-gray-700 cursor-default bg-transparent tracking-widest items-end pb-1' 
                      : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center font-medium focus:outline-none mt-1 transition-colors ${
                currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-black cursor-pointer'
              }`}
            >
              Next
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </section>
    </main>
  );
}