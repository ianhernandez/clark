import React from 'react';
import Card from '../atom/card'
import { Link } from 'gatsby'

const JobsListItem = ({title, description, list, link, location}) => {
	return (
		<Link activeClassName="block bg-blue-50" state={{ fromFeed: true, jobsList: { list } }} to={link}>
			<Card className="flex flex-col space-y-2">
				<h2 className="font-bold md:text-2xl">{title}</h2>
				<div className="flex space-x-4">
					<p className="font-medium text-gray-500 md:text-md line-clamp-3">📍 {location}</p>
					<p className="font-normal text-gray-500 md:text-md line-clamp-3">10 applicants</p>
				</div>
			</Card>
		</Link>
	);
};

export default JobsListItem;