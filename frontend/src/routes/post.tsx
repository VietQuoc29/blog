import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/post')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      id: Number(search.id) || 1,
    }
  },
  component: BlogPost,
})

const basePostsData = [
  {
    tag: 'Product updates',
    title: 'Updates to our Professional Community Policies',
    author: '',
    date: 'Nov 6, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Our Professional Community Policies are clear: LinkedIn is a place for safe, trusted, and professional content. There are rare times, however, when content that violates our policies is educational or newsworthy enough that keeping it on the platform is in the public interest. We have updated our Professional Community Policies to provide clarity about the limited cases in which we would allow this content on the platform due to its educational or newsworthy value. This could be content ranging from medical procedures performed by a surgeon or real-world images of war shared for awareness or newsworthy purposes.',
      'We conduct a careful review of content that may call for newsworthy treatment, balancing the potential harm of leaving it on the platform against the value to members and the public by allowing it. Factors we consider include educational value, relationship to major events of the day, the speaker or content author, and whether it concerns matters of public importance. When newsworthy content might be graphic or disturbing, we will include a warning screen.',
    ],
  },
  {
    tag: 'Trust and Safety',
    title: "Updates to LinkedIn's Terms of Service",
    author: 'Blake Lawit',
    date: 'Sep 18, 2024',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Trust is the foundation of everything we do at LinkedIn. To ensure our platform remains a safe and professional environment for our global workforce, we are rolling out updates to our Terms of Service.',
      'These updates provide clearer guidelines on acceptable content, strengthen our stance against automated scraping, and offer more transparency regarding how your data is protected. We encourage all members to review the updated terms to understand how we are building a safer ecosystem.',
    ],
  },
  {
    tag: 'Platform Information',
    title: "Sharing LinkedIn's Responsible AI Principles",
    author: 'Blake Lawit',
    date: 'Feb 22, 2023',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Artificial Intelligence is transforming the way professionals connect and find opportunities. At LinkedIn, we are committed to developing AI technologies responsibly, guided by fairness, inclusivity, and transparency.',
      'Our Responsible AI Principles serve as a compass for our engineering and product teams. They ensure that our algorithms mitigate bias, protect member privacy, and ultimately empower every member of the global workforce to achieve their goals safely.',
    ],
  },
  {
    tag: 'Member stories',
    title: 'Mythbusting the Feed: How We Work to Address Bias',
    author: 'Imani Dunbar',
    date: 'Nov 1, 2022',
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    content: [
      'We often hear questions about how the LinkedIn Feed ranks content and whether certain voices are amplified over others. Today, we want to peel back the curtain and bust some common myths about bias in our algorithms.',
      'Our engineering teams actively monitor and tune the Feed to ensure equitable distribution of content. We employ specialized models to detect and prevent algorithmic amplification of homogenous networks, striving to create a platform where diverse perspectives thrive.',
    ],
  },
  {
    tag: 'Creators',
    title: 'New LinkedIn profile features help verify identity, detect and...',
    author: 'Oscar Rodriguez',
    date: 'Oct 25, 2022',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Your professional identity is your most valuable asset online. To help you protect it and stand out authentically, we are introducing new profile verification features.',
      'Members can now verify their identity securely using trusted third-party partners. A verified badge will appear on your profile, signaling to recruiters and connections that you are exactly who you say you are, significantly reducing the risk of impersonation.',
    ],
  },
  {
    tag: 'Product updates',
    title: 'Mythbusting the Feed: How the Algorithm Works',
    author: 'Manisha Sharma',
    date: 'Aug 18, 2022',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Have you ever wondered why you see a specific post at the top of your Feed? It’s not magic; it’s a combination of relevance, engagement, and your network connections.',
      "The LinkedIn algorithm prioritizes content that sparks meaningful professional conversations. It looks at factors like your affinity with the creator, the topic's relevance to your skills, and the probability of you joining the discussion. Here is a deep dive into how you can optimize your posts for better reach.",
    ],
  },
]

function BlogPost() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { id } = Route.useSearch()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const currentPost = basePostsData[(id - 1) % basePostsData.length]

  const relatedPosts = basePostsData
    .map((post, index) => ({ ...post, id: index + 1 }))
    .filter((post) => post.id !== id)
    .slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <header className="sticky top-0 z-[100] w-full bg-white">
        <div className="w-full border-b border-[#ebebeb]">
          <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[52px] md:h-[64px] flex items-center justify-between">
            <Link to="/" className="flex items-center no-underline group">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/6zm111mce7vohqze950ilreo4"
                alt="LinkedIn"
                className="h-[21px] md:h-[26px]"
              />
              <span className="ml-2 text-[18px] md:text-[21px] font-bold text-black tracking-tight group-hover:text-black">
                Official Blog
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <nav className="hidden md:block border-b border-[#ebebeb]">
          <div className="max-w-[1128px] mx-auto px-6 h-[48px]">
            <ul className="flex space-x-10 h-full">
              {[
                'Product updates',
                'Member stories',
                'Creators',
                'Platform Information',
                'Trust and Safety',
              ].map((name) => (
                <li key={name} className="h-full">
                  <Link
                    to="/"
                    search={{ tag: name }}
                    className="text-[15px] font-semibold text-[#666666] hover:text-black hover:no-underline transition-colors relative h-full flex items-center"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow w-full pb-20">
        <article className="max-w-[768px] mx-auto px-4 md:px-6 pt-10 md:pt-16">
          <h1 className="text-[32px] md:text-[44px] font-normal text-gray-900 leading-[1.2] mb-6">
            {currentPost.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="text-[14px] text-gray-500 flex items-center gap-2">
              {currentPost.author && (
                <>
                  <span className="font-semibold text-gray-900">
                    {currentPost.author}
                  </span>
                  <span>|</span>
                </>
              )}
              <span>{currentPost.date}</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-500">
              <button className="hover:text-[#0a66c2] transition-colors">
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button className="hover:text-[#1877f2] transition-colors">
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="hover:text-[#1da1f2] transition-colors">
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full mb-10 bg-gray-100 aspect-video overflow-hidden">
            <img
              src={currentPost.imageUrl}
              alt={currentPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="font-serif text-[18px] md:text-[20px] leading-[1.8] text-gray-800 space-y-8">
            {currentPost.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              More information is available in our{' '}
              <a href="#" className="text-[#0a66c2] font-bold hover:underline">
                Official Help Center
              </a>
              .
            </p>
          </div>

          <div className="mt-20 border-t border-gray-200 pt-12">
            <h2 className="text-[24px] md:text-[28px] font-normal text-gray-900 mb-10">
              Related articles
            </h2>

            <div className="flex flex-col gap-10">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to="/post"
                  search={{ id: post.id }}
                  className="flex flex-col-reverse md:flex-row justify-between gap-6 group cursor-pointer no-underline hover:no-underline"
                >
                  <div className="flex flex-col flex-1 max-w-[450px]">
                    {post.tag &&
                      post.tag !== 'Product updates' &&
                      post.tag !== 'Member stories' && (
                        <span className="text-[#66418c] text-[13px] font-semibold mb-2">
                          {post.tag}
                        </span>
                      )}

                    <h3 className="text-[20px] font-semibold text-gray-900 leading-snug group-hover:text-[#0a66c2] group-hover:underline">
                      {post.title}
                    </h3>

                    <div className="mt-auto pt-6 flex items-center text-[13px] text-gray-500">
                      {post.author && (
                        <>
                          <span className="font-semibold text-gray-900">
                            {post.author}
                          </span>
                          <span className="mx-1.5">|</span>
                        </>
                      )}
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="w-full md:w-[300px] h-[160px] flex-shrink-0 bg-gray-100 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <footer className="w-full bg-white py-4 border-t border-black mt-auto">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-semibold text-[#666666]">
            <li className="flex items-center mr-2 whitespace-nowrap">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/6zm111mce7vohqze950ilreo4"
                alt="LinkedIn"
                className="h-[14px] md:h-[16px] object-contain opacity-90"
              />
              <span className="font-normal mt-[1px] ml-2 text-gray-500">
                © 2026
              </span>
            </li>
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
        </div>
      </footer>
    </div>
  )
}
