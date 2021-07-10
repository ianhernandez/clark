import React from 'react'
import { Link } from 'gatsby'
import Container from '../../components/atom/container'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'

const PageHeader = ({title, breadcrumbs}) => {
	return (
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
							{breadcrumbs.map((breadcrumb) => (
								<li key={breadcrumb.name}>
									<div className="flex items-center">
										<ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
										{breadcrumb.current ? 
										<span
										className="ml-4 font-medium text-gray-500 text-md"
										aria-current={breadcrumb.current ? 'page' : undefined}
										>
										{breadcrumb.name}
										</span>
										: 
										<Link
											to={breadcrumb.href}
											className="ml-4 font-medium text-gray-500 text-md hover:text-gray-700"
											aria-current={breadcrumb.current ? 'page' : undefined}
										>
											{breadcrumb.name}
										</Link>
										}
									</div>
								</li>
							))}
						</ol>
					</nav>
						{ title && <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">{title}</h2> }
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
	);
};

export default PageHeader;