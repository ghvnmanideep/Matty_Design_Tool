import React from 'react';

export default function EditNavbar() {
  return (
    <nav className="bg-gray-900 dark:bg-gray-200 text-gray-100 dark:text-gray-900 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-start space-x-6 h-12">
          
          <a href="#draw" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6 6L7 21l-2-2 6-6z" />
            </svg>
            <span>Draw</span>
          </a>

          <a href="#rect" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect width="14" height="10" x="5" y="7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx="2" ry="2" />
            </svg>
            <span>Rect</span>
          </a>

          <a href="#circle" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
            <span>Circle</span>
          </a>

          <a href="#clear" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
              <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
            </svg>
            <span>Clear</span>
          </a>

          <a href="#zoom-in" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
              <line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
              <line x1="8" y1="11" x2="14" y2="11" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
            </svg>
            <span>Zoom In</span>
          </a>

          <a href="#zoom-out" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
              <line x1="8" y1="11" x2="14" y2="11" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
            </svg>
            <span>Zoom Out</span>
          </a>

          <a href="#undo" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11a4 4 0 010 8h-1" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 5L3 10l7 5" />
            </svg>
            <span>Undo</span>
          </a>

          <a href="#redo" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 14H10a4 4 0 100 8h1" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 19l7-5-7-5" />
            </svg>
            <span>Redo</span>
          </a>

          <a href="#export" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Export</span>
          </a>

          <a href="#save" className="flex items-center space-x-1 hover:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v-6m-3 3h6" />
            </svg>
            <span>Save</span>
          </a>

        </div>
      </div>
    </nav>
  );
}
