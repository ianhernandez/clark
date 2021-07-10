import React from 'react'
import { Link } from 'gatsby'
import PageBasic from '../../templates/page-basic'
import Nav from '../../components/molecule/nav'
import Card from '../../components/atom/card'
import Button from '../../components/atom/button'
import Container from '../../components/atom/container'
import { StarIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import { company } from '../../data/jobs-data'

const pages = [
  { name: 'Careers', href: '/jobs', current: false },
  { name: 'View All', href: '/jobs/all', current: true },
]

const filterList =  [
	{
		employmentType: 'Full-Time',
		number: '69'
	},
	{
		employmentType: 'Part-Time',
		number: '420'
	},
	{
		employmentType: 'Interim',
		number: '143'
	},
	{
		employmentType: 'Seasonal',
		number: '69'
	},
]

const Jobs = () => {
  return (
		<>
			<PageBasic>
				<div className="bg-white">
					<Nav />
				</div>
       
				<div className="font-sans bg-white border-t border-gray-200">
					<Container type="padded">
						<div className="md:flex md:items-center md:justify-between">
							<div className="flex-1 min-w-0">
              <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <div>
                      <Link to="/" className="text-gray-400 hover:text-gray-500">
                        <HomeIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                      </Link>
                    </div>
                  </li>
                  {pages.map((page) => (
                    <li key={page.name}>
                      <div className="flex items-center">
                        <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
                        {page.current ? 
                        <span
                        className="ml-4 font-medium text-gray-500 text-md"
                        aria-current={page.current ? 'page' : undefined}
                        >
                        {page.name}
                        </span>
                        : 
                        <Link
                          to={page.href}
                          className="ml-4 font-medium text-gray-500 text-md hover:text-gray-700"
                          aria-current={page.current ? 'page' : undefined}
                        >
                          {page.name}
                        </Link>
                        }
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
								<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">Careers</h2>
							</div>
							<div className="flex mt-4 md:mt-0 md:ml-4">
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									Edit
								</button>
								<button
									type="button"
									className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									Publish
								</button>
							</div>
						</div>
					</Container>
				</div>
				


				<div className="bg-gray-100">
					<Container>
						<div className="grid md:grid-cols-12 md:gap-x-5">
							<div className="md:col-span-2">
								<div>
									<h3 className="text-lg font-semibold">Type Of Employment</h3>
									<div className="flex flex-col mt-5 space-y-1">
									{filterList.map((item) => (
										<div className="flex items-center justify-between">
											<label className="inline-flex items-center">
												<input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" defaultChecked /><span className="ml-2 text-gray-700">{item.employmentType}</span>
											</label>
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
												{item.number}
											</span>
										</div>
										))}
									</div>
								</div>
								<div className="mt-12">
									<h3 className="text-lg font-semibold">Seniority Level</h3>
									<div className="flex flex-col mt-5 space-y-1">
									{filterList.map((item) => (
										<div className="flex items-center justify-between">
											<label className="inline-flex items-center">
												<input type="checkbox" className="w-5 h-5 text-blue-600 form-checkbox" defaultChecked /><span className="ml-2 text-gray-700">{item.employmentType}</span>
											</label>
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
												{item.number}
											</span>
										</div>
										))}
									</div>
								</div>
							</div>
							<div className="grid md:grid-cols-2 md:col-span-10 md:gap-x-5 md:gap-y-5 xl:grid-cols-3">
								{company.map((item) => (
								<Card className="flex flex-col space-y-2">
									<div className="w-16 h-16 p-4 text-blue-600 bg-blue-100 rounded">
										<StarIcon className="fill-current " />
									</div>
									<Link to="/jobs/listing/director-of-nursing/"><h2 className="font-bold md:text-2xl">{item.title}</h2></Link>
									<div className="flex-grow">
										<p className="font-normal text-gray-500 md:text-md line-clamp-3">{item.description}</p>
									</div>
									<Button type="primary" size="xxl" className="self-start">Apply</Button>
								</Card>
								))}
							</div>
						</div>
					</Container>
				</div>

			</PageBasic>
		</>
	)
}

export default Jobs