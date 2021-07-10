import React from 'react'
import { Link } from 'gatsby'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'

const pages = [
  { name: 'Jobs', href: '/', current: false },
  { name: 'Director Of Nursing', href: '/jobs', current: true },
]

export default function Breadcrumbs(props) {
  return (
    <nav className={`flex ${props.className ? props.className : ''}`} aria-label="Breadcrumb" >
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
              <Link
                to={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}