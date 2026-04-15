import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

const mockPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    title: 'Updates to our Professional Community Policies',
    date: 'Nov 6, 2023',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tag: 'Trust and safety',
    title: "Updates to LinkedIn's Terms of Service",
    author: 'Blake Lawit',
    date: 'Sep 18, 2024',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    title: "Sharing LinkedIn's Responsible AI Principles",
    author: 'Blake Lawit',
    date: 'Feb 22, 2023',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tag: 'Advance your career',
    title: 'Mythbusting the Feed: How We Work to Address Bias',
    author: 'Imani Dunbar',
    date: 'Nov 1, 2022',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    title: 'New LinkedIn profile features help verify identity, detect and...',
    author: 'Oscar Rodriguez',
    date: 'Oct 25, 2022',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    tag: 'Advance your career',
    title: 'Mythbusting the Feed: How the Algorithm Works',
    author: 'Manisha Sharma',
    date: 'Aug 18, 2022',
  },
]

function App() {
  return (
    <main className="w-full bg-white pb-10">
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

      <section className="max-w-[1128px] mx-auto px-4 md:px-6 mt-12">
        <h2 className="text-[28px] font-normal text-gray-900 mb-8">Latest Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {mockPosts.map((post) => (
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

        <div className="mt-20 border-t border-gray-200 pt-8 flex items-start justify-between text-[15px]">
          
          <button className="flex items-center text-gray-400 cursor-not-allowed font-medium focus:outline-none mt-1">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 px-2 max-w-[240px] md:max-w-none">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#5E6D77] text-white font-semibold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">4</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">5</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">6</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">7</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">8</button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">9</button>
            <span className="w-8 h-8 flex items-end justify-center pb-1 text-gray-700 font-semibold tracking-widest">...</span>
            <button className="h-8 px-2 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100 font-semibold transition-colors">153</button>
          </div>

          <button className="flex items-center text-gray-600 hover:text-black font-medium transition-colors focus:outline-none mt-1">
            Next
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  )
}