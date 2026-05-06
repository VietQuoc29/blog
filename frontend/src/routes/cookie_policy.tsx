import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/cookie_policy')({
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      
      {/* ===== HEADER DÀNH CHO CÁC TRANG CHÍNH SÁCH ===== */}
      <header className="sticky top-0 z-[100] w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[52px] flex items-center overflow-x-auto hide-scrollbar">
          <Link to="/" className="mr-6 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[34px] h-[34px] text-[#0a66c2] fill-current rounded-[4px]">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" />
            </svg>
          </Link>
          <ul className="flex items-center space-x-6 text-[14px] font-semibold text-gray-600 whitespace-nowrap">
            <li className="flex items-center cursor-pointer hover:text-[#0a66c2]">
              <Link to="/user-agreement">User Agreement</Link>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
            </li>
            <li><Link to="/" className="hover:text-[#0a66c2] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-[#0a66c2] transition-colors">Professional Community Policies</Link></li>
            <li className="text-gray-900">Cookie Policy</li>
            <li><Link to="/" className="hover:text-[#0a66c2] transition-colors">Copyright Policy</Link></li>
            <li className="flex items-center cursor-pointer hover:text-[#0a66c2]">
              Regional Info
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="w-full bg-[#f3f2ef] py-10 md:py-16 border-b border-gray-200">
        <div className="max-w-[768px] mx-auto px-4 text-center">
          <h1 className="text-[32px] md:text-[40px] font-light text-gray-900">
            Cookie Policy
          </h1>
        </div>
      </section>

      {/* ===== NỘI DUNG CHÍNH ===== */}
      <main className="flex-grow w-full max-w-[768px] mx-auto px-4 md:px-6 py-10">
        
        <p className="text-[14px] md:text-[15px] font-semibold text-gray-600 mb-6">
          Effective on June 3, 2022
        </p>

        <div className="space-y-4 text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-10">
          <p>
            At LinkedIn, we believe in being clear and open about how we collect and use data related to you. This Cookie Policy applies to any LinkedIn product or service that links to this policy or incorporates it by reference. We use cookies and similar technologies such as pixels, local storage and mobile ad IDs (collectively referred to in this policy as "cookies") to collect and use data as part of our Services, as defined in our <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Privacy Policy</a> ("Services") and which includes our sites, communications, mobile applications and off-site Services, such as our ad services and the "Apply with LinkedIn" and "Share with LinkedIn" plugins or tags. In the spirit of transparency, this policy provides detailed information about how and when we use these technologies.
          </p>
          <p>
            By continuing to visit or use our Services, you are agreeing to the use of cookies and similar technologies for the purposes described in this policy.
          </p>
        </div>

        {/* 1. What technologies are used? */}
        <h2 className="text-[24px] md:text-[28px] font-normal text-gray-900 mb-6">What technologies are used?</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse border border-gray-300 text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="border border-gray-300 p-4 font-semibold w-1/4">Type of technology</th>
                <th className="border border-gray-300 p-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Cookies</td>
                <td className="border border-gray-300 p-4">
                  <p className="mb-4">
                    A cookie is a small file placed onto your device that enables LinkedIn features and functionality. Any browser visiting our sites may receive cookies from us or cookies from third parties such as our customers, partners or service providers. We or third parties may also place cookies in your browser when you visit non-LinkedIn sites that display ads or that host our plugins or <a href="#" className="text-[#0a66c2] hover:underline font-semibold">tags</a>.
                  </p>
                  <p>
                    We use two types of cookies: persistent cookies and session cookies. A persistent cookie lasts beyond the current session and is used for many purposes, such as recognizing you as an existing user, so it's easier to return to LinkedIn and interact with our Services without signing in again. Since a persistent cookie stays in your browser, it will be read by LinkedIn when you return to one of our sites or visit a third party site that uses our Services. Session cookies last only as long as the session (usually the current visit to a website or a browser session).
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Pixels</td>
                <td className="border border-gray-300 p-4">
                  A pixel is a tiny image that may be embedded within web pages and emails, requiring a call (which provides device and visit information) to our servers in order for the pixel to be rendered in those web pages and emails. We use pixels to learn more about your interactions with email content or web content, such as whether you interacted with ads or posts. Pixels can also enable us and third parties to place cookies on your browser.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Local storage</td>
                <td className="border border-gray-300 p-4">
                  Local storage enables a website or application to store information locally on your device(s). Local storage may be used to improve the LinkedIn experience, for example, by enabling features, remembering your preferences and speeding up site functionality.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Other similar technologies</td>
                <td className="border border-gray-300 p-4">
                  We also use other tracking technologies, such as mobile advertising IDs and tags for similar purposes as described in this Cookie Policy. References to similar technologies in this policy includes pixels, local storage, and other tracking technologies.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-12">
          Our <a href="#" className="text-[#0a66c2] font-semibold hover:underline">cookie tables</a> lists cookies and similar technologies that are used as part of our Services. Please note that the names of cookies and similar technologies may change over time.
        </p>

        {/* 2. What are these technologies used for? */}
        <h2 className="text-[24px] md:text-[28px] font-normal text-gray-900 mb-6">What are these technologies used for?</h2>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-6">
          Below we describe the purposes for which we use these technologies.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse border border-gray-300 text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="border border-gray-300 p-4 font-semibold w-1/4">Purpose</th>
                <th className="border border-gray-300 p-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Authentication</td>
                <td className="border border-gray-300 p-4">
                  <p className="mb-4">We use cookies and similar technologies to recognize you when you visit our Services.</p>
                  <p>If you're signed into LinkedIn, these technologies help us show you the right information and personalize your experience in line with your settings. For example, cookies enable LinkedIn to identify you and verify your account.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Security</td>
                <td className="border border-gray-300 p-4">
                  <p className="mb-4">We use cookies and similar technologies to make your interactions with our Services faster and more secure.</p>
                  <p>For example, we use cookies to enable and support our security features, keep your account safe and to help us detect malicious activity and violations of our User Agreement.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Preferences, features and services</td>
                <td className="border border-gray-300 p-4">
                  <p className="mb-4">We use cookies and similar technologies to enable the functionality of our Services, such as helping you to fill out forms on our Services more easily and providing you with features, insights and customized content in conjunction with our plugins. We also use these technologies to remember information about your browser and your preferences.</p>
                  <p>For example, cookies can tell us which language you prefer and what your communications preferences are. We may also use local storage to speed up site functionality.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Customized content</td>
                <td className="border border-gray-300 p-4">
                  <p className="mb-4">We use cookies and similar technologies to customize your experience on our Services.</p>
                  <p>For example, we may use cookies to remember previous searches so that when you return to our services, we can offer additional information that relates to your previous search.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Plugins on and off LinkedIn</td>
                <td className="border border-gray-300 p-4">
                  <p className="mb-4">We use cookies and similar technologies to enable LinkedIn plugins both on and off the LinkedIn sites.</p>
                  <p className="mb-4">For example, our plugins, including the "Apply with LinkedIn" button or the "Share" button may be found on LinkedIn or third-party sites, such as the sites of our customers and partners. Our plugins use cookies and other technologies to provide analytics and recognize you on LinkedIn and third-party sites. If you interact with a plugin (for instance, by clicking "Apply"), the plugin will use cookies to identify you and initiate your request to apply.</p>
                  <p>You can learn more about plugins in our <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Privacy Policy</a>.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Advertising</td>
                <td className="border border-gray-300 p-4 space-y-4">
                  <p>Cookies and similar technologies help us show relevant advertising to you more effectively, both on and off our Services and to measure the performance of such ads. We use these technologies to learn whether content has been shown to you or whether someone who was presented with an ad later came back and took an action (e.g., downloaded a white paper or made a purchase) on another site. Similarly, our partners or service providers may use these technologies to determine whether we've shown an ad or a post and how it performed or provide us with information about how you interact with ads.</p>
                  <p>We may also work with our customers and partners to show you an ad on or off LinkedIn, such as after you've visited a customer's or partner's site or application. These technologies help us provide aggregated information to our customers and partners.</p>
                  <p>For further information regarding the use of cookies for advertising purposes, please see <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Sections 1.4 and 2.4 of the Privacy Policy</a>.</p>
                  <p>As noted in <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Section 1.4</a> of our Privacy Policy, outside <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Designated Countries</a>, we also collect (or rely on others who collect) information about your device where you have not engaged with our Services (e.g., ad ID, IP address, operating system and browser information) so we can provide our Members with relevant ads and better understand their effectiveness.</p>
                  <p>For further information, please see <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Section 1.4 of the Privacy Policy</a>.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 align-top">Analytics and research</td>
                <td className="border border-gray-300 p-4 space-y-4">
                  <p>Cookies and similar technologies help us learn more about how well our Services and plugins perform in different locations.</p>
                  <p>We or our service providers use these technologies to understand, improve, and research products, features and services, including as you navigate through our sites or when you access LinkedIn from other sites, applications or devices. We or our service providers, use these technologies to determine and measure the performance of ads or posts on and off LinkedIn and to learn whether you have interacted with our websites, content or emails and provide analytics based on those interactions.</p>
                  <p>We also use these technologies to provide aggregated information to our customers and partners as part of our Services.</p>
                  <p>If you are a LinkedIn member but logged out of your account on a browser, LinkedIn may still continue to log your interaction with our Services on that browser until the expiration of the cookie in order to generate usage analytics for our Services. We may share these analytics in aggregate form with our customers.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. What third parties use these technologies... */}
        <h2 className="text-[24px] md:text-[28px] font-normal text-gray-900 mb-6">What third parties use these technologies in connection with our Services?</h2>
        <div className="space-y-4 text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-12">
          <p>Third parties such as our customers, partners and service providers may use cookies in connection with our Services.</p>
          <p>For example, third parties may use cookies in their LinkedIn pages, job posts and their advertisements on and off LinkedIn for their own marketing purposes. For an illustration, please visit <a href="#" className="text-[#0a66c2] font-semibold hover:underline">LinkedIn's Help Center</a>.</p>
          <p>Third parties may also use cookies in connection with our off-site Services, such as LinkedIn ad services. Third parties may use cookies to help us to provide our Services. We may also work with third parties for our own marketing purposes and to enable us to analyze and research our Services.</p>
        </div>

        {/* 4. Your Choices */}
        <h2 className="text-[20px] md:text-[24px] font-normal text-gray-900 mb-4">Your Choices</h2>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-8">
          You have choices on how LinkedIn uses cookies and similar technologies. Please note that if you limit the ability of LinkedIn to set cookies and similar technologies, you may worsen your overall user experience, since it may no longer be personalized to you. It may also stop you from saving customized settings like login information.
        </p>

        {/* 5. Opt out of targeted advertising */}
        <h3 className="text-[18px] md:text-[20px] font-normal text-gray-900 mb-4">Opt out of targeted advertising</h3>
        <div className="space-y-4 text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-8">
          <p>As described in <a href="#" className="text-[#0a66c2] font-semibold hover:underline">Section 2.4 of the Privacy Policy</a>, you have choices regarding the personalized ads you may see.</p>
          <p>LinkedIn Members can adjust their settings <a href="#" className="text-[#0a66c2] font-semibold hover:underline">here</a>.</p>
          <p>Visitor controls can be found <a href="#" className="text-[#0a66c2] font-semibold hover:underline">here</a>.</p>
          <p>Some mobile device operating systems such as Android provide the ability to control the use of mobile advertising IDs for ads personalization. You can learn how to use these controls by visiting the manufacturer's website. We do not use iOS mobile advertising IDs for targeted advertising.</p>
        </div>

        {/* 6. Browser Controls */}
        <h3 className="text-[18px] md:text-[20px] font-normal text-gray-900 mb-4">Browser Controls</h3>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-8">
          Most browsers allow you to control cookies through their settings, which may be adapted to reflect your consent to the use of cookies. Further, most browsers also enable you to review and erase cookies, including LinkedIn cookies. To learn more about browser controls, please consult the documentation that your browser manufacturer provides.
        </p>

        {/* 7. What is Do Not Track (DNT)? */}
        <h3 className="text-[18px] md:text-[20px] font-normal text-gray-900 mb-4">What is Do Not Track (DNT)?</h3>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-8">
          DNT is a concept that has been promoted by regulatory agencies such as the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing Internet users to control the tracking of their online activities across websites by using browser settings. As such, LinkedIn does not generally respond to "do not track" signals.
        </p>

        {/* 8. Other helpful resources */}
        <h2 className="text-[20px] md:text-[24px] font-normal text-gray-900 mb-4">Other helpful resources</h2>
        <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mb-4">
          To learn more about advertisers' use of cookies, please visit the following links:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-4 text-[14px] md:text-[15px] font-semibold mb-10">
          <li><a href="#" className="text-[#0a66c2] hover:underline">Internet Advertising Bureau (US)</a></li>
          <li><a href="#" className="text-[#0a66c2] hover:underline">European Interactive Digital Advertising Alliance (EU)</a></li>
          <li><a href="#" className="text-[#0a66c2] hover:underline">Internet Advertising Bureau (EU)</a></li>
        </ul>

      </main>

      {/* ===== FOOTER ===== */}
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