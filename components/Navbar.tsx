"use client"
import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)

  return (
    <header className="w-full px-2 sm:px-4 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center justify-between mx-auto">
        <div className="flex">
          <a
            href="/"
            title="Home Page"
            className="flex items-center"
          >
            <span className="sr-only">Home</span>
          </a>
          <h1 className="text-xl font-medium ml-2">
            Moritz Zier
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <div className="hidden md:inline-flex gap-1 mr-1">
            <button className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Features
            </button>
            <button className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Pricing
            </button>
            <button className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Blog
            </button>
            <button className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Company
            </button>
            <button className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Sign in
            </button>
          </div>
          <div className="inline-flex md:hidden">
            <button
              className="flex md:hidden p-2 rounded text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Open menu"
              onClick={() => setMobileNavOpen(true)}
            >
              <Menu size={24} />
            </button>

            {mobileNavOpen && (
              <div className="absolute top-0 left-0 right-0 flex flex-col p-2 pb-4 m-2 bg-white dark:bg-gray-800 gap-3 rounded shadow-sm">
                <button
                  className="self-end p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close menu"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <X size={24} />
                </button>

                <button className="w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Features
                </button>
                <button className="w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Pricing
                </button>
                <button className="w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Blog
                </button>
                <button className="w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Company
                </button>
                <button className="w-full px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Sign in
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
