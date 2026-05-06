import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Product updates', path: '/updates' },
    { name: 'Member stories', path: '/stories' },
    { name: 'Creators', path: '/creators' },
    { name: 'Platform Information', path: '/platform' },
    { name: 'Trust and Safety', path: '/safety' },
  ]
  return (
    <header className="sticky top-0 z-[100] w-full bg-white shadow-sm md:shadow-none">
      <div className="border-b border-gray-200/60">
        <div className="max-w-[1128px] mx-auto px-4 md:px-6 h-[52px] md:h-[64px] flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:no-underline group">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/6zm111mce7vohqze950ilreo4"
                alt="LinkedIn"
                className="h-[26px]"
              />
              <span className="logo-text ml-2 text-[17px] pt-0.5">
                Official Blog
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav className="hidden md:block border-b border-gray-100">
        <div className="max-w-[1128px] mx-auto px-6 flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block py-4 text-[14px] font-semibold text-gray-500 hover:text-black transition-all relative"
                  activeProps={{
                    className:
                      'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#0a66c2]',
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-[52px] bg-white z-[99] md:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 text-[16px] font-semibold text-gray-800 border-b border-gray-100 active:bg-gray-50"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
