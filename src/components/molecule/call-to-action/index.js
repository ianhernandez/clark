import React from 'react'
import { Link } from 'gatsby'
export default function CallToAction() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-2xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-white">
          <span className="block">Boost your productivity.</span>
          <span className="block">Start using Workflow today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50 sm:w-auto"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  )
}
