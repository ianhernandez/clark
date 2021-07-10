import React from 'react'
import { Link } from 'gatsby'
import Container from '../../atom/container'
import classnames from 'classnames'

import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const actions = [
  {
    title: 'Emergency Services',
    href: '/jobs/emergency-services',
    icon: ClockIcon,
    iconForeground: 'text-red-600',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'ICU & Telemetry Services',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Med Surg Services',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  { title: 'Surgical Services', href: '#', icon: CashIcon, iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50' },
  {
    title: 'Home Health / Hospice Services',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Cardiac / Cath Lab Services',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

export default function Departments() {
  return (
		<Container type="padded" className="font-sans bg-gray-100">
			<div className="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
			{actions.map((action, actionIdx) => (
				<div
					key={action.title}
					className={classnames(
						actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
						actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
						actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
						actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
						'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
					)}
				>
					<div>
						<span
							className={classnames(
								action.iconBackground,
								action.iconForeground,
								'rounded-lg inline-flex p-3 ring-4 ring-white'
							)}
						>
							<action.icon className="w-6 h-6" aria-hidden="true" />
						</span>
					</div>
					<div className="mt-8">
						<h3 className="text-lg font-semibold md:text-2xl">
							<Link to={action.href} className="focus:outline-none">
								{/* Extend touch target to entire panel */}
								<span className="absolute inset-0" aria-hidden="true" />
								{action.title}
							</Link>
						</h3>
						<p className="hidden max-w-lg mt-2 font-medium text-gray-500 md:block text-md">
							Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
							quo et molestiae.
						</p>
					</div>
					<span
						className="absolute text-gray-400 pointer-events-none top-6 right-6 group-hover:text-gray-400"
						aria-hidden="true"
					>
						<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
						</svg>
					</span>
				</div>
			))}
			</div>
		</Container>
	)
}

export { Departments }
