import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/accessibility')({
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">

      <header className="sticky top-0 z-[100] w-full bg-white">
        <div className="w-full border-b border-gray-200">
          <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[52px] md:h-[64px] flex items-center">
            <Link to="/" className="flex items-center no-underline">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" 
                alt="LinkedIn" 
                className="h-[21px] md:h-[26px]" 
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full pb-20">
        
        <section className="max-w-[900px] mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            
            <div className="flex-1 space-y-6">
              <h1 className="text-[28px] md:text-[40px] font-light text-gray-900 leading-tight">
                LinkedIn is a place where every member of the global workforce can find opportunity
              </h1>
              <p className="text-[18px] md:text-[20px] text-gray-700">
                Whatever your goals, ideas, and abilities are, we're here to help you succeed.
              </p>
              <div className="text-[15px] md:text-[16px] text-gray-700 space-y-4 leading-relaxed">
                <p>
                  No two LinkedIn members are the same—and it's that diversity which makes our community so great.
                </p>
                <p>
                  We're on a journey to make accessibility and inclusive design part of our core principles, 
                  building accessibility from the ground up and testing our products with assistive technology 
                  to make sure that everyone can use LinkedIn to advance their professional goals.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[300px] flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" 
                alt="Accessibility Illustration" 
                className="w-full h-auto rounded-xl object-cover aspect-video md:aspect-square"
              />
            </div>
            
          </div>
        </section>

        <section className="max-w-[900px] mx-auto px-4 md:px-6 space-y-6">
          
          <div className="border border-gray-200 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 text-[#f5c553]">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
                <path d="M7 9h10v2H7zm0-3h10v2H7z"/>
              </svg>
            </div>
            <div className="space-y-4 text-[15px] text-gray-700">
              <h2 className="text-[20px] font-normal text-gray-900">Our Disability Answer Desk</h2>
              <p>
                Our teams are constantly working to improve the experience for all of LinkedIn's products by adding new features and making changes to better serve all our members and customers. We're always open to feedback and would love to hear from you as to how we can make our products even better.
              </p>
              <p>
                If you find an accessibility bug, want to submit a complaint, or have trouble using LinkedIn's products with assistive technology, <a href="#" className="text-[#0a66c2] hover:underline font-semibold">contact us</a> and we'll reach out to help you through it. We also offer support through <a href="#" className="text-[#0a66c2] hover:underline font-semibold">Be My Eyes</a>, a free app that connects blind and low-vision people with volunteers for visual assistance through a live video call.
              </p>
              <p>
                If you're a screen reader user, please visit the articles on the <a href="#" className="text-[#0a66c2] hover:underline font-semibold">Screen Reader Support</a> page in the Help Center.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 text-[#e06b55]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="space-y-4 text-[15px] text-gray-700 w-full">
              <h2 className="text-[20px] font-normal text-gray-900">Accessibility @ LinkedIn</h2>
              <p>
                As a Microsoft company, we've embraced digital inclusion, adopting the W3C (World Wide Web Consortium) WCAG (Web Content Accessibility Guidelines) V2.2 Level AA in the design and development of our products.
              </p>
              <p>
                As part of our commitment to accessibility we continuously audit our products—internally and through a third party—using assistive technology such as screen reading software (e.g., JAWS, NVDA, VoiceOver and TalkBack).
              </p>
              <p>
                LinkedIn is committed to meeting accessibility regulations around the world, including the European Accessibility Act. Accessibility conformance reports for LinkedIn Learning, which is in scope for the EAA, can be found <a href="#" className="text-[#0a66c2] hover:underline font-semibold">here</a>.
              </p>
              
              <div className="pt-6">
                <h3 className="text-[18px] font-semibold text-gray-900 mb-4">Read more about our Accessibility journey</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-[#0a66c2] hover:underline">LinkedIn's Latest Accessibility Integration Helps All Members Access Content More Easily</a> by Erran Berger, VP of Product Engineering</li>
                  <li><a href="#" className="text-[#0a66c2] hover:underline">Making Learning More Accessible</a> by Dan Brodnitz, Global Head of Content Strategy</li>
                  <li><a href="#" className="text-[#0a66c2] hover:underline">Disparities in Employment Outcomes in the US for Individuals with Disabilities</a> by Matthew Baird, Senior Staff Economist</li>
                  <li><a href="#" className="text-[#0a66c2] hover:underline">Unlock the potential of Dyslexic Thinking</a> by in the Loop</li>
                  <li><a href="#" className="text-[#0a66c2] hover:underline">Driving a More Equitable Workforce with Enhanced A11Y Tools and Resources</a> by Erran Berger, VP of Product Engineering</li>
                  <li><a href="#" className="text-[#0a66c2] hover:underline">Celebrating National Disability Employment Awareness Month at LinkedIn with New Features and Important Conversations</a> by Amyn Thawer, VP of Global Compliance & Integrity</li>
                  <li><a href="#" className="text-[#0a66c2] hover:underline">Our Journey to Make LinkedIn More Inclusive and Accessible</a> by Melissa Selcher, Chief Marketing and Communications Officer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 text-[#f5c553]">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>
            <div className="space-y-4 text-[15px] text-gray-700">
              <h2 className="text-[20px] font-normal text-gray-900">Want even more info?</h2>
              <p>We have policies and conformance documentation to help explain our commitment and the current state of our products.</p>
              <p><strong>Policies:</strong> <a href="#" className="text-[#0a66c2] hover:underline">Accessibility Policy for Employees in Ontario</a></p>
              <p><strong>Conformance reports:</strong> Need a Section 508, WCAG, or EN 301 549 conformance report about one of our products? All of them are available through LinkedIn's <a href="#" className="text-[#0a66c2] hover:underline">Accessibility Report Center</a>.</p>
            </div>
          </div>

        </section>
      </main>

      <footer className="w-full bg-white py-4 border-t border-black mt-auto">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] font-semibold text-[#666666]">
            <li className="flex items-center mr-2 whitespace-nowrap">
              <img 
                src="/linkedin-bw.png" 
                alt="LinkedIn" 
                className="h-[14px] md:h-[16px] object-contain opacity-90" 
              />
              <span className="font-normal mt-[1px] ml-2 text-gray-500">© 2026</span>
            </li>
            {[
              { name: 'About', path: '/about' }, { name: 'Accessibility', path: '/accessibility' }, { name: 'User Agreement', path: '/user_agreement' }, { name: 'Privacy Policy', path: '/privacy_policy' }, { name: 'Cookie Policy', path: '/cookie_policy' }, { name: 'Copyright Policy', path: '/copyright_policy' }, { name: 'Brand Policy', path: '/brand_policy' }, { name: 'Guest Controls', path: '/guest_controls' }, { name: 'Community Guidelines', path: '/community_guidelines' },
            ].map((item) => (
              <li key={item.name} className="whitespace-nowrap"><Link to={item.path} className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">{item.name}</Link></li>
            ))}
            <li className="whitespace-nowrap ml-1">
              <button className="flex items-center hover:text-[#0a66c2] hover:underline transition-colors focus:outline-none group text-[#666666]">
                Language
                <svg className="w-4 h-4 ml-0.5 text-[#666666] group-hover:text-[#0a66c2] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </footer>
      
    </div>
  );
}