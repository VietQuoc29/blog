import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/guest_controls')({
  component: GuestControls,
});

function GuestControls() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f2ef] font-sans text-gray-900">
      
      <header className="w-full h-[60px] flex items-center px-4 md:px-10">
        <Link to="/" className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[34px] h-[34px] text-[#0a66c2] fill-current rounded-[4px]">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" />
          </svg>
        </Link>
      </header>

      <main className="flex-grow w-full px-4 py-8 flex justify-center">
        
        <div className="bg-white rounded-[8px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] w-full max-w-[960px] p-6 md:p-10 h-fit">
          <h1 className="text-[24px] font-normal text-black mb-6">Unsubscribe</h1>
          
          <div className="space-y-5 text-[14px] text-gray-800 leading-[1.6]">
            
            <p>
              <a href="#" className="text-[#0a66c2] hover:underline font-medium mr-1">Unsubscribe from LinkedIn Email Communications</a> 
              LinkedIn uses email addresses uploaded by members to make suggestions in features like People You May Know. Use this link to unsubscribe, you will stop receiving LinkedIn invitations and your email will stop being processed by LinkedIn.
            </p>
            
            <p>
              <a href="#" className="text-[#0a66c2] hover:underline font-medium mr-1">Unsubscribe from LinkedIn SMS Communications</a> 
              LinkedIn uses phone numbers uploaded by members to make suggestions in features like People You May Know. If you are a LinkedIn member, you may also receive select notifications via SMS, such as PIN verification codes. Use this link to unsubscribe. You will stop receiving LinkedIn SMS and your phone number will stop being processed by LinkedIn.
            </p>
            
            <p>
              <a href="#" className="text-[#0a66c2] hover:underline font-medium mr-1">Opt-out of Targeted Advertising</a> 
              If you're <span className="underline">not</span> a LinkedIn member, you can opt out of LinkedIn's and its partners' tracking of visits to LinkedIn for targeted advertising purposes by clicking on this link. In California, this setting also serves as your opt-out of LinkedIn's "sharing" your personal information. This is a cookie-based opt-out, so it is browser-specific and is rendered ineffective by clearing or blocking cookies, or cookies' expiration set by the browser maker. If you're a LinkedIn member, please go to the <a href="#" className="text-[#0a66c2] hover:underline font-medium">Ads Settings</a> page to manage your preferences.
            </p>
            
            <p>
              <a href="#" className="text-[#0a66c2] hover:underline font-medium mr-1">Guest Recent History</a> 
              See more relevant search recommendations based on searches you've done in the past while signed out.
            </p>
            
            <p>
              We adhere to self-regulatory principles for interest based advertising. If you wish to not receive targeted ads from most third party companies, you may opt-out as described <a href="#" className="text-[#0a66c2] hover:underline font-medium">here</a>.
            </p>
            
          </div>
        </div>
      </main>

      <footer className="w-full pb-10 pt-4 px-4 flex flex-col items-center text-[13px] text-gray-500">
        
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6 max-w-[800px] text-center">
          {['Help Center', 'Professional Community Policies', 'Privacy Policy', 'Accessibility', 'Recommendation Transparency', 'User Agreement', 'End User License Agreement'].map((item) => (
            <li key={item}>
              <Link 
                to={item === 'Accessibility' ? '/accessibility' : '/'} 
                className="hover:text-[#0a66c2] hover:underline transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#0a66c2] fill-current">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3zM6.5 7.7A1.8 1.8 0 118.3 6a1.8 1.8 0 01-1.8 1.7zM20 19h-3v-5.6c0-3.3-4-3.1-4 0V19h-3V9h3v1.3c1.4-2.6 7-2.8 7 3.2z" />
          </svg>
        </div>
        
      </footer>

    </div>
  );
}