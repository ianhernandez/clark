/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link } from 'gatsby'
import { ChevronDownIcon, LightningBoltIcon } from '@heroicons/react/solid'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'


const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '/', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '/',
    icon: ViewGridIcon,
  },
]

const company = [
  { name: 'About', href: '/our-company', icon: InformationCircleIcon },
  { name: 'Customers', href: '/', icon: OfficeBuildingIcon },
  { name: 'Press', href: '/news', icon: NewspaperIcon },
  { name: 'Careers', href: '/', icon: BriefcaseIcon },
  { name: 'Privacy', href: '/', icon: ShieldCheckIcon },
]

const departments = [
  {
    title: "Emergency Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
  {
    title: "ICU Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
  {
    title: "Telemetry Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
  {
    title: "Medical/Surgical Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
  {
    title: "Surgical Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
  {
    title: "Pediatric Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
  {
    title: "Pediatric Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
  {
    title: "Elderly Services Leadership",
    description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
    icon: LightningBoltIcon,
  },
]

const resources = [
  { name: 'Community', href: '/', icon: UserGroupIcon },
  { name: 'Partners', href: '/', icon: GlobeAltIcon },
  { name: 'Guides', href: '/', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '/', icon: DesktopComputerIcon },
]

const blogPosts = [
  {
    id: 1,
    name: 'CEO',
    href: '/',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'CFO',
    href: '/',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  },
]

function classTernary(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = ({theme}) => {

  return (
    <Popover className={`font-sans ${theme && 'bg-white text-black' }`}>
      {({ open }) => (
        <>
          <div className="absolute inset-0 z-30 pointer-events-none" aria-hidden="true" />
          <div className="relative z-20">
            {/* max-w-7xl */}
            <div className="flex items-center justify-between px-6 py-6 mx-auto m:py-4 lg:justify-start md:space-x-8">
              <div>
                <Link to="/" className="flex items-center text-2xl font-bold">
                  <span className="sr-only">Clark & Co. Healthcare Search Experts</span>
                 Clark And Company
                </Link>
              </div>
              <div className="flex items-center justify-between flex-1">
                <Popover.Group as="nav" className="hidden space-x-8 md:flex">
                  <Link to="/hire" className="text-base font-medium">
                    Find Talent
                  </Link>
                  
                  <Link to="/jobs" className="text-base font-medium">
                    Open Positions
                  </Link>
                </Popover.Group>

                <Popover.Group as="nav" className="flex items-center ml-auto space-x-6">
                  <Popover className="hidden lg:block">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classTernary(
                            'group bg-transparent rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                          )}
                        >
                          <span>Our Practice</span>
                          <ChevronDownIcon
                            className={classTernary(
                              open ? undefined : undefined,
                              'ml-2 h-5 w-5'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-full"
                          >
                            <div className="absolute inset-0 flex">
                              <div className="w-1/3 bg-white" />
                              <div className="w-2/3 bg-gray-50" />
                            </div>
                            <div className="relative grid grid-cols-1 lg:grid-cols-12">
                              <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 lg:col-span-12 xl:col-span-7 xl:pr-12">
                                <div className="col-span-2">
                                  <div className="flex">
                                  <h3 className="text-2xl font-semibold tracking-wide text-gray-700 ">Our Departments</h3>
                                  </div>
                                  <ul className="flex flex-row mt-5 overflow-auto">
                                    {departments.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center w-1/2 p-6 pr-8 font-semibold leading-none text-gray-800 border-2 rounded-md cursor-pointer md:text-xl hover:bg-blue-700 hover:border-blue-700 hover:text-white"
                                      >
                                        <span>{item.title}</span>
                                      </Link>
                                    ))}
                                  </ul>
                                </div>
                              </nav>
                              <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 lg:col-span-5 xl:pl-12">
                                <div>
                                <h3 className="text-2xl font-semibold tracking-wide text-gray-700 ">Our Positions</h3>
                                  <ul className="flex flex-wrap mt-6 space-x-2">
                                    {blogPosts.map((post) => (
                                      <li key={post.id} >
                                        <a href={post.href} className="flex flex-row px-4 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-100">
                                          <h4 className="text-base font-medium text-gray-900 truncate">
                                            {post.name}
                                          </h4>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-6 text-sm font-medium">
                                  <a href="http://localhost:8000/" className="text-blue-600 hover:text-blue-500">
                                    {' '}
                                    View All Positions <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover className="hidden lg:block">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className="inline-flex items-center text-base font-medium bg-transparent rounded-md group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <span>Our Team</span>
                          <ChevronDownIcon
                            className={classTernary(
                              open ? undefined : undefined,
                              'ml-2 h-5 w-5'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute inset-x-0 z-10 hidden transform shadow-lg md:block top-full"
                          >
                            <div className="absolute inset-0 flex">
                              <div className="w-1/2 bg-white" />
                              <div className="w-1/2 bg-gray-50" />
                            </div>
                            <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                              <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
                                  <ul className="mt-5 space-y-6">
                                    {company.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <Link
                                          href={item.href}
                                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                        >
                                          <item.icon
                                            className="flex-shrink-0 w-6 h-6 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">{item.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    Resources
                                  </h3>
                                  <ul className="mt-5 space-y-6">
                                    {resources.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <Link
                                          to={item.href}
                                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                        >
                                          <item.icon
                                            className="flex-shrink-0 w-6 h-6 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-4">{item.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </nav>
                              <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    From the blog
                                  </h3>
                                  <ul className="mt-6 space-y-6">
                                    {blogPosts.map((post) => (
                                      <li key={post.id} className="flow-root">
                                        <a href={post.href} className="flex p-3 -m-3 rounded-lg hover:bg-gray-100">
                                          <div className="flex-shrink-0 hidden sm:block">
                                            <img
                                              className="object-cover w-32 h-20 rounded-md"
                                              src={post.imageUrl}
                                              alt=""
                                            />
                                          </div>
                                          <div className="flex-1 w-0 sm:ml-8">
                                            <h4 className="text-base font-medium text-gray-900 truncate">
                                              {post.name}
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-6 text-sm font-medium">
                                  <a href="http://localhost:8000/" className="text-blue-600 hover:text-blue-500">
                                    {' '}
                                    View all posts <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  
                  <a href="http://localhost:8000/" className="hidden text-base font-medium sm:inline-block md:hidden xl:inline-block">
                    1-800-4-CLARK
                  </a>
                  <a
                    href="http://localhost:8000/"
                    className="inline-flex items-center justify-center px-3 py-3 text-base font-medium leading-none text-white bg-blue-600 rounded-md shadow-sm lg:px-5 lg:py-4 hover:bg-blue-700"
                  >
                    Get Started
                  </a>
                  <div class="-mr-3 ml-3">
                    <Popover.Button className="inline-flex items-center justify-center px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </Popover.Group>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-30 transition origin-top-right transform"
            >
              <div className="min-h-screen bg-white divide-y-2 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-6 pt-6 pb-6 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-12"
                        src="/images/2x/logo-concept-1@2x.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-3">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <nav>
                      <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-md sm:h-12 sm:w-12">
                              <item.icon className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-8 text-base">
                        <a href="http://localhost:8000/" className="font-medium text-blue-600 hover:text-blue-500">
                          {' '}
                          View all products <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="http://localhost:8000/" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Pricing
                    </a>

                    <a href="http://localhost:8000/" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Docs
                    </a>

                    <a href="http://localhost:8000/" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Company
                    </a>

                    <a href="http://localhost:8000/" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Resources
                    </a>

                    <a href="http://localhost:8000/" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Blog
                    </a>

                    <a href="http://localhost:8000/" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Contact Sales
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="http://localhost:8000/"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      Existing customer?{' '}
                      <a href="http://localhost:8000/" className="text-blue-600 hover:text-blue-500">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </> 
      )}
    </Popover>
  )
}

export default Nav 