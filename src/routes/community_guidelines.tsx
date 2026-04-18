import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/community_guidelines')({
  component: CommunityGuidelinesPage,
});

function CommunityGuidelinesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      
      <header className="w-full bg-[#0073b1] h-[52px] flex items-center">
        <div className="max-w-[1128px] w-full mx-auto px-4 md:px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-6 w-full max-w-[800px]">
            <Link to="/" className="flex items-center text-white focus:outline-none hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-current bg-white text-[#0073b1] rounded-[4px] p-0.5">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" />
              </svg>
              <span className="ml-1.5 text-[20px] font-semibold tracking-wide">Help</span>
            </Link>

            <div className="hidden md:flex flex-1 bg-white rounded-[2px] h-[34px] items-center overflow-hidden">
              <button className="flex items-center px-3 h-full border-r border-gray-300 text-[14px] text-gray-600 bg-gray-50 hover:bg-gray-100 focus:outline-none">
                LinkedIn
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
              </button>
              <input 
                type="text" 
                placeholder="How can we help?" 
                className="flex-1 h-full px-3 text-[14px] outline-none text-gray-800 placeholder-gray-500"
              />
              <button className="h-full px-4 text-gray-600 hover:bg-gray-100 focus:outline-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </button>
            </div>
          </div>

          <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors focus:outline-none">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </button>

        </div>
      </header>

      <main className="flex-grow w-full max-w-[1128px] mx-auto px-0 md:px-6 py-0 md:py-8">
        
        <div className="bg-white md:border md:border-gray-300 rounded-[2px]">
          
          <div className="px-6 md:px-10 py-8 border-b border-gray-300">
            <h1 className="text-[24px] font-normal text-gray-900 mb-2">
              Learn more about the LinkedIn Professional Community Policies
            </h1>
            <p className="text-[14px] text-gray-500">
              Last updated: 1 year ago
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            
            <div className="md:w-2/3 px-6 md:px-10 py-8">
              <div className="text-[15px] text-gray-800 leading-relaxed space-y-6 mb-10">
                <p>
                  We periodically update our Professional Community Policies to ensure that the millions of conversations taking place each day on our services help our members be more productive, successful, and free of inappropriate and unwanted content or behavior.
                </p>
                <p>
                  We encourage you to take a look and familiarize yourself with our <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Professional Community Policies</a>, which we continue to develop and provide guidance for the use of our services.
                </p>
              </div>

              <div className="border border-gray-300 rounded-[4px] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[16px] text-gray-800">Was this answer helpful?</span>
                <div className="flex gap-3">
                  <button className="border border-[#0a66c2] text-[#0a66c2] px-5 py-1.5 rounded-[4px] font-semibold hover:bg-blue-50 transition-colors focus:outline-none">
                    Yes
                  </button>
                  <button className="border border-[#0a66c2] text-[#0a66c2] px-5 py-1.5 rounded-[4px] font-semibold hover:bg-blue-50 transition-colors focus:outline-none">
                    No
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:border-l border-gray-300 px-6 md:px-10 py-8 bg-gray-50/30">
              <h2 className="text-[16px] font-semibold text-gray-900 mb-4">
                Tagged in
              </h2>
              <a 
                href="#" 
                className="inline-block border border-[#0a66c2] text-[#0a66c2] rounded-full px-4 py-1 text-[14px] font-semibold hover:bg-blue-50 transition-colors"
              >
                Data and Privacy
              </a>
            </div>

          </div>
        </div>
      </main>

      <footer className="w-full border-t border-gray-300 bg-[#f8f9fa] pt-8 pb-12 mt-auto">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <img src="https://static.licdn.com/aero-v1/sc/h/6zm111mce7vohqze950ilreo4" alt="LinkedIn" className="h-[18px] opacity-80" />
              
              <a href="#" className="text-[14px] font-semibold text-gray-700 hover:text-[#0a66c2] hover:underline">
                Contact us
              </a>
            </div>

            <div className="relative">
              <select className="appearance-none border border-gray-500 rounded-[4px] pl-3 pr-10 py-1.5 text-[14px] bg-transparent text-gray-800 focus:outline-none focus:border-black cursor-pointer">
                <option>English (English)</option>
              </select>
              <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-gray-600 border-t border-gray-300 pt-5">
            <span>LinkedIn Corporation © 2026</span>
            <Link to="/about" className="hover:text-[#0a66c2] hover:underline">About</Link>
            <Link to="/" className="hover:text-[#0a66c2] hover:underline">Transparency Center</Link>
            <div className="relative group cursor-pointer flex items-center hover:text-[#0a66c2] hover:underline">
              Privacy and Terms
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}