import React from 'react'
import { Link } from 'gatsby'
import PageBasic from '../../templates/page-basic'
import Nav from '../../components/molecule/nav'
import Departments from '../../components/molecule/departments'
import Container from '../../components/atom/container'

const Jobs = () => {
  return (
		<>
			<PageBasic>
				<Nav theme='white' />

				<div className="font-sans bg-white border-t border-gray-200">
					<Container type="padded">
						<div className="md:flex md:items-center md:justify-between">
							<div className="flex-1 min-w-0">
								<h2 className="text-2xl font-bold leading-7 text-gray-800 sm:text-4xl sm:truncate">Take The Next Step Forward</h2>
								<p className="mt-2 text-xl font-medium text-gray-500">Select a department to view open positions</p>
							</div>
							<div className="flex mt-4 md:mt-0 md:ml-4">
								<Link
									to="/jobs/all"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									View All Jobs
								</Link>
							</div>
						</div>
					</Container>
				</div>
				<Departments />
			</PageBasic>
		</>
	)
}

export default Jobs