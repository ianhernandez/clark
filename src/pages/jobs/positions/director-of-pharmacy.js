import React from 'react'
import PageBasic from '../../../templates/page-basic'
import Nav from '../../../components/molecule/nav'
import JobsListItem from '../../../components/jobs/jobs-list-item'
import Container from '../../../components/atom/container'
import PageHeader from '../../../components/page-headers'
import { company } from '../../../data/jobs-data'
import { Link } from 'gatsby'

const breadcrumbs = [
  { name: 'Careers', href: '/jobs', current: false },
]

const EmergencyServices = () => {
  return (
		<>
			<PageBasic>
				<div className="bg-white">
					<Nav />
				</div>

				<PageHeader title="Director Of Pharmacy Jobs" breadcrumbs={breadcrumbs} />
				
				<div className="font-sans bg-gray-100">
					<Container>
						<div className="grid md:grid-cols-12 md:gap-x-5">
							<div className="flex flex-col md:col-span-12 lg:col-span-6 gap-y-5">
								{company.map((item) => (
								<JobsListItem key={item.link} title={'Director Of Pharmacy'} location={item.location} description={item.description} link={item.link} list={company} />
								))}
							</div>
							<div className="p-6 bg-white rounded-lg lg:col-span-6">
									<h1 className="text-2xl font-semibold prose">Director Of Pharmacy</h1>
									<p>{company[0].description}</p>
									<Link state={{ fromFeed: true, jobsList: { company }}} className="font-semibold text-blue-600" to={`${company[0].link}`}>Read More</Link>
							</div>
						</div>
					</Container>
				</div>

			</PageBasic>
		</>
	)
}

export default EmergencyServices