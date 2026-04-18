import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/brand_policy')({
  component: BrandPolicyPage,
});

function BrandPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      
      <header className="sticky top-0 z-[100] w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[60px] flex items-center justify-between overflow-x-auto hide-scrollbar">
          
          <Link to="/" className="flex items-center flex-shrink-0 no-underline group focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[34px] h-[34px] text-[#0a66c2] fill-current rounded-[4px]">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" />
            </svg>
            <span className="ml-1 text-[18px] font-semibold text-gray-900">Brand</span>
          </Link>

          <ul className="flex items-center space-x-6 text-[13px] font-bold text-[#0a66c2] whitespace-nowrap ml-8">
            <li className="cursor-pointer hover:underline">[in] Logo</li>
            <li className="cursor-pointer hover:underline">LinkedIn Logo</li>
            <li className="cursor-pointer hover:underline">Badges & Other Programs</li>
            <li className="cursor-pointer hover:underline">Business, Books & Other Media Usage</li>
          </ul>
        </div>
      </header>

      <section className="w-full bg-[#f3f2ef] flex justify-center overflow-hidden">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row min-h-[300px]">
          <div className="flex-1 relative bg-white flex items-center px-10 md:px-20 py-12">
            <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-[#0a66c2] transform -skew-x-12 -translate-x-6"></div>
            
            <h1 className="text-[36px] md:text-[48px] font-light text-gray-900 leading-[1.2] relative z-10 max-w-[400px]">
              LinkedIn Branding Guidelines
            </h1>
          </div>
          
          <div className="flex-1 relative min-h-[250px] md:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80" 
              alt="LinkedIn Brand" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <main className="flex-grow w-full max-w-[960px] mx-auto px-4 md:px-6 py-12 md:py-16">
        
        <p className="text-[18px] md:text-[22px] font-light text-gray-800 leading-relaxed mb-16">
          If you're looking to talk about LinkedIn for your business, or use LinkedIn branding, here's a helpful guide to show you how.
        </p>

        <section className="mb-20">
          <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-900 mb-8">Guidance</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="bg-[#f3f2ef] aspect-[4/3] flex items-center justify-center mb-3">
                <svg className="w-12 h-12 text-[#0a66c2] fill-current" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" /></svg>
              </div>
              <span className="text-[14px] font-semibold text-gray-900">[in] Logo</span>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-[#f3f2ef] aspect-[4/3] flex items-center justify-center mb-3">
                <span className="text-[#0a66c2] font-bold text-[24px] tracking-tight">Linked<span className="bg-[#0a66c2] text-white px-1 ml-[2px] rounded-sm">in</span></span>
              </div>
              <span className="text-[14px] font-semibold text-gray-900">LinkedIn Logo</span>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#f3f2ef] aspect-[4/3] flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full border-[3px] border-[#0a66c2] flex items-center justify-center text-[#0a66c2] text-[10px] font-bold text-center leading-none">CERTIFIED<br/>EXPERT</div>
              </div>
              <span className="text-[14px] font-semibold text-gray-900">Badges & Other Programs</span>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#f3f2ef] aspect-[4/3] flex items-center justify-center mb-3">
                <svg className="w-14 h-14 text-[#0a66c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <span className="text-[14px] font-semibold text-gray-900 leading-tight">Business, Books & Other Media Usage</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
          
          <div className="md:w-1/4">
            <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-900">Legal</h2>
          </div>
          
          <div className="md:w-3/4 space-y-6 text-[13px] md:text-[14px] text-gray-800 leading-relaxed font-medium">
            <p>
              LinkedIn is the owner of the LinkedIn trademark and the *[in] Logo (as well as other trademarks, collectively our "Brand"), and protecting our intellectual property is very important to us. A list of our trademarks can be found <a href="#" className="text-[#0a66c2] font-semibold hover:underline">here</a>. Since LinkedIn is the owner of the Brand, please do not file any applications with any intellectual property office for any marks which incorporate the Brand.
            </p>
            <p>
              Our Brand may only be used as outlined in these guidelines or with express written permission from an authorized representative of LinkedIn. We may request that you stop the use of our Brand both on and off the LinkedIn platform, if we believe, in our sole discretion, that your use of our Brand violates our Branding Guidelines, our <Link to="/user-agreement" className="text-[#0a66c2] font-semibold hover:underline">User Agreement</Link>, or our <Link to="/community-guidelines" className="text-[#0a66c2] font-semibold hover:underline">Professional Community Policies</Link>, hereafter collectively referred to as "LinkedIn Brand and User Agreements."
            </p>
            <p>
              You may not use our Brand, including our name, logos, or any elements that are identical to, incorporate, or closely resemble our Brand, in any way that could cause confusion about the source, sponsorship, or affiliation of your product, service, or account. LinkedIn reserves the right to determine, at its sole discretion, whether a use is misleading or otherwise violates the LinkedIn Brand and User Agreements.
            </p>
            <p>
              Your use must also be consistent with applicable law and align with LinkedIn's values (which include, but are not limited to, not using the Brand in a misleading, unfair, defamatory, infringing, libelous, disparaging, obscene, or otherwise objectionable manner). Failure to follow these guidelines could result in the <a href="#" className="text-[#0a66c2] font-semibold hover:underline">suspension or termination of your LinkedIn account</a> and other actions by LinkedIn. We may modify these Guidelines at any time, and your continued use of the Brand Features will constitute your consent to such modifications.
            </p>
            <p>
              Overall, you should ensure that you do not use our Brand in a manner that might create the impression that your use is sponsored by LinkedIn. Please ensure compliance with these guidelines, make clear that your use is separate from the LinkedIn Brand, and ensure that you do not copy or imitate the LinkedIn platform's overall look and feel. Any logos or images found elsewhere on the web are not approved for use. Please help us protect our Brand, and present your work in the most appropriate way, by following these guidelines and only using approved Brand assets from this site.
            </p>
          </div>

        </section>

        <div className="w-full bg-[#f8faf8] py-8 flex flex-col items-center justify-center border border-gray-100 rounded-[2px]">
          <svg className="w-6 h-6 text-[#0a66c2] fill-current mb-3" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" /></svg>
          <p className="text-[13px] text-gray-800 font-medium">
            *LinkedIn's use of the [in] Logo refers to the logo above.
          </p>
        </div>

      </main>

      <footer className="w-full bg-[#f3f2ef] py-6 mt-auto">
        <div className="max-w-[960px] mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-[11px] font-semibold text-[#666666] space-y-3">
          
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <li><Link to="/about" className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">About</Link></li>
            <li><Link to="/cookie_policy" className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">Cookie Policy</Link></li>
            <li><Link to="/privacy_policy" className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">Your California Privacy Choices</Link></li>
            <li><Link to="/user_agreement" className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">User Agreement</Link></li>
            <li><Link to="/accessibility" className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">Accessibility</Link></li>
          </ul>

          <div className="flex items-center">
            <span className="font-bold text-[#0a66c2] text-[12px] flex items-center tracking-tight mr-1">
              Linked<span className="bg-[#0a66c2] text-white px-0.5 ml-[1px] rounded-[2px] text-[10px]">in</span>
            </span>
            <span className="font-normal text-gray-500">© LinkedIn Corporation 2026</span>
          </div>

        </div>
      </footer>
    </div>
  );
}