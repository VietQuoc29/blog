import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/Copyright_policy')({
  component: CopyrightPolicyPage,
});

function CopyrightPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      
      <header className="sticky top-0 z-[100] w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[52px] flex items-center overflow-x-auto hide-scrollbar">
          <Link to="/" className="mr-6 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[34px] h-[34px] text-[#0a66c2] fill-current rounded-[4px]">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" />
            </svg>
          </Link>
          <ul className="flex items-center space-x-6 text-[14px] font-semibold text-gray-600 whitespace-nowrap">
            <li><Link to="/user-agreement" className="hover:text-[#0a66c2] transition-colors">User Agreement</Link></li>
            <li><Link to="/" className="hover:text-[#0a66c2] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/community-guidelines" className="hover:text-[#0a66c2] transition-colors">Professional Community Policies</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-[#0a66c2] transition-colors">Cookie Policy</Link></li>
            <li className="text-gray-900">Copyright Policy</li>
            <li className="flex items-center cursor-pointer hover:text-[#0a66c2]">
              Regional Info
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
            </li>
          </ul>
        </div>
      </header>

      <section className="w-full bg-[#f3f2ef] py-10 md:py-16 border-b border-gray-200">
        <div className="max-w-[768px] mx-auto px-4 text-center">
          <h1 className="text-[32px] md:text-[40px] font-light text-gray-900">
            Copyright Policy
          </h1>
        </div>
      </section>

      <main className="flex-grow w-full max-w-[768px] mx-auto px-4 md:px-6 py-10">
        
        <p className="text-[14px] md:text-[15px] italic text-gray-600 mb-10">
          Effective March 26, 2024
        </p>

        <h2 className="text-[24px] md:text-[28px] font-normal text-gray-900 mb-6">
          Complaints regarding content posted on the LinkedIn website
        </h2>
        <div className="space-y-4 text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-12">
          <p>
            LinkedIn respects the intellectual property rights of others and desires to offer a platform which contains no content that violates those rights. Our User Agreement requires that information posted by Members be accurate, lawful and not in violation of the rights of third parties. To promote these objectives, LinkedIn provides a process for submission of complaints concerning content posted by our Members. Our policy and procedures are described and/or referenced in the sections that follow.
          </p>
          <p>
            Please note that whether or not we disable access to or remove content, LinkedIn may make a good faith attempt to forward the written notification, including the complainant's contact information, to the Member who posted the content and/or take other reasonable steps to notify the Member that LinkedIn has received notice of an alleged violation of intellectual property rights or other content violation. It is also our policy, in appropriate circumstances and in our discretion, to disable and/or terminate the accounts of Members, or groups as the case may be, who infringe or repeatedly infringe the rights of others or otherwise post unlawful content.
          </p>
          <p>
            Please note that any notice or counter-notice you submit must be truthful and must be submitted under penalty of perjury. A false notice or counter-notice may give rise to personal liability. You may therefore want to seek the advice of legal counsel before submitting a notice or a counter-notice.
          </p>
        </div>

        <h2 className="text-[24px] md:text-[28px] font-normal text-gray-900 mb-6">
          Claims regarding copyright infringement
        </h2>
        
        <h3 className="text-[20px] md:text-[22px] font-normal text-gray-900 mb-4">Notice of Copyright Infringement:</h3>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
          Pursuant to the Digital Millennium Copyright Act (17 U.S.C. § 512), LinkedIn has implemented procedures for receiving written notification of claimed infringements. LinkedIn has also designated an agent to receive notices of claimed copyright infringement. If you believe in good faith that your copyright has been infringed, you may complete and submit a <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Notice of Copyright Infringement form</a>, or otherwise provide a written communication which contains:
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-4 text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-8">
          <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;</li>
          <li>A description of the copyrighted work that you claim has been infringed;</li>
          <li>A description specifying the location on our website of the material that you claim is infringing;</li>
          <li>Your email address and your mailing address and/or telephone number;</li>
          <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and</li>
          <li>A statement by you, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
        </ol>

        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
          Please submit your notice to LinkedIn Corporation's Copyright Agent as follows:
        </p>

        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
          <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Fill out our online submission form to contact the LinkedIn Copyright Agent</a>.
        </p>

        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-4">
          Or contact us by mail at:
        </p>

        <div className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-12 space-y-1">
          <p>LinkedIn Corporation</p>
          <p>ATTN: Copyright Agent</p>
          <p>Legal Department</p>
          <p>1000 W. Maude Avenue</p>
          <p>Sunnyvale, CA 94085</p>
          <p>USA</p>
        </div>

        <h3 className="text-[20px] md:text-[22px] font-normal text-gray-900 mb-4">Counter-Notice:</h3>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
          If you believe that a notice of copyright infringement has been improperly submitted against you, you may submit a Counter-Notice, pursuant to Sections 512(g)(2) and (3) of the Digital Millennium Copyright Act. You may complete the <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Counter-Notice Regarding Claim of Copyright Infringement form</a>, or otherwise provide a written communication which contains:
        </p>

        <ol className="list-decimal list-outside ml-6 space-y-4 text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-8">
          <li>Your physical or electronic signature;</li>
          <li>Identification of the material removed or to which access has been disabled;</li>
          <li>A statement under penalty of perjury that you have a good faith belief that removal or disablement of the material was a mistake or that the material was misidentified;</li>
          <li>Your full name, your email address, your mailing address, and a statement that you consent to the jurisdiction of the Federal District court (i) in the judicial district where your address is located if the address is in the United States, or (ii) located in the Northern District of California (Santa Clara County), if your address is located outside the United States, and that you will accept service of process from the Complainant submitting the notice or his/her authorized agent.</li>
        </ol>

        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-12">
          Please submit your Counter-Notice to LinkedIn's Copyright Agent via our <a href="#" className="text-[#0a66c2] font-semibold hover:underline">online submission form</a> or mail to the address specified above.
        </p>

        <h2 className="text-[24px] md:text-[28px] font-normal text-gray-900 mb-6">
          Claims regarding content other than copyright infringement
        </h2>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
          For issues other than copyright infringement please visit our <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Help Center</a> where you'll find information on how to flag and report other types of content violations. Learn more:
        </p>

        <ul className="list-disc list-outside ml-6 space-y-4 text-[14px] md:text-[15px] font-semibold mb-8">
          <li><a href="#" className="text-[#0a66c2] hover:underline">Reporting Inappropriate Content, Messages, or Safety Concerns</a></li>
          <li><a href="#" className="text-[#0a66c2] hover:underline">LinkedIn's Trademark Policy</a></li>
          <li><a href="#" className="text-[#0a66c2] hover:underline">LinkedIn's False Profile Policy</a></li>
        </ul>

        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-10">
          Notice regarding Associated Press content on LinkedIn: Associated Press text, photo, graphic, audio and/or video material shall not be published, broadcast, rewritten for broadcast or publication or redistributed directly or indirectly in any medium. Neither these AP materials nor any portion thereof may be stored in a computer except for personal and non-commercial use. Users may not download or reproduce a substantial portion of the AP material found on this web site. AP will not be held liable for any delays, inaccuracies, errors or omissions therefrom or in the transmission or delivery of all or any part thereof or for any damages arising from any of the foregoing.
        </p>

      </main>

      <footer className="w-full bg-white py-6 border-t border-gray-200 mt-auto">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-[12px] font-semibold text-[#666666]">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-bold text-black text-[14px] flex items-center tracking-tight mr-2">
              Linked<span className="bg-black text-white px-0.5 ml-[1px] rounded-[2px] text-[12px]">in</span>
            </span>
            <span className="font-normal text-gray-500">© 2026</span>
          </div>
          
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {[
              { name: 'About', path: '/about' }, { name: 'Accessibility', path: '/accessibility' }, { name: 'User Agreement', path: '/user_agreement' }, { name: 'Privacy Policy', path: '/privacy_policy' }, { name: 'Cookie Policy', path: '/cookie_policy' }, { name: 'Copyright Policy', path: '/copyright_policy' }, { name: 'Brand Policy', path: '/brand_policy' }, { name: 'Guest Controls', path: '/guest_controls' }, { name: 'Community Guidelines', path: '/community_guidelines' },
            ].map((item) => (
              <li key={item.name} className="whitespace-nowrap"><Link to={item.path} className="hover:text-[#0a66c2] hover:underline transition-colors text-[#666666]">{item.name}</Link></li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}