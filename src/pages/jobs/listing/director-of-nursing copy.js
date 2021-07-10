import React from 'react'
import { Link } from 'gatsby'
import PageBasic from '../../../templates/page-basic'
import Nav from '../../../components/molecule/nav'
import Breadcrumbs from '../../../components/molecule/breadcrumbs/'
import Card from '../../../components/atom/card'
import Button from '../../../components/atom/button'
import Container from '../../../components/atom/container'
import { StarIcon, ChevronDownIcon } from '@heroicons/react/solid'
const JobsFeed = ({data}) => {
	return (
		data.company.map((item, index ) => (
			<Card key={index} className="flex flex-col space-y-2">
			<div className="w-16 h-16 p-4 text-blue-600 bg-blue-100 rounded">
				<StarIcon className="fill-current " />
			</div>
			<Link state={{ fromFeed: true, jobsList: data }} to="/jobs/listing/director-of-nursing/"><h2 className="font-bold md:text-2xl">{item.title}</h2></Link>
			<div className="flex-grow">
				<p className="font-normal text-gray-500 md:text-md line-clamp-3">{item.description}</p>
			</div>
			<Button type="primary" size="xxl" className="self-start">Apply</Button>
		</Card>
		)))

}

const Hire = (props) => {
  return (
		<>
			<PageBasic>
					<Nav />

				<div className="bg-white">
					<Container type="padded" className="px-4 py-16 sm:py-24 lg:flex lg:justify-between">
						<Breadcrumbs/>
					</Container>
				</div>

				<div className="grid grid-cols-4 bg-white">
				
					<Container type="padded" className="col-span-4 px-4 py-16 sm:py-24 lg:flex lg:justify-between">

						<div className="max-w-xl">
							<h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
							Director Of Nursing
							</h2>
						</div>
						<div className="w-full max-w-xs mt-10">
							<label htmlFor="currency" className="block text-base font-medium text-gray-500">
								Currency
							</label>
							<div className="mt-1.5 relative">
								<select
									id="currency"
									name="currency"
									className="block w-full py-2 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md appearance-none bg-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									defaultValue="United States (USD)"
								>
									<option>Argentina (ARS)</option>
									<option>Australia (AUD)</option>
									<option>United States (USD)</option>
									<option>Canada (CAD)</option>
									<option>France (EUR)</option>
									<option>Japan (JPY)</option>
									<option>Nigeria (NGN)</option>
									<option>Switzerland (CHF)</option>
									<option>United Kingdom (GBP)</option>
								</select>
								<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
									<ChevronDownIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />
								</div>
							</div>
						</div>
					</Container>
					<div className="col-span-4 bg-gray-100">
						<Container>
							<div className="grid md:grid-cols-12 md:gap-x-5">
								<div className="md:col-span-4">
								 {props.location.state ? <JobsFeed data={props.location.state.jobsList} /> : null }
								 {JSON.stringify(props)}
								</div>
								<div className="md:col-span-8 md:gap-x-5 md:gap-y-5">

									<Card className="">
										<div className="overflow-x-scroll">
											<div className="grid grid-flow-row-dense grid-cols-3">
												<img src="https://source.unsplash.com/cP6Z_VKMCuo/1600x900" className="col-span-2" alt="" />
												<img src="https://source.unsplash.com/nMyM7fxpokE/1600x900" alt="" />
												<img src="https://source.unsplash.com/ZCO_5Y29s8k/1600x900" alt="" />
												<img src="https://source.unsplash.com/jGmBZypoFPcow to /1600x900" alt="" />
											</div>
										</div>
										<div className="flex flex-row space-y-2">
											<div className="flex-grow">
												<div className="font-normal prose text-gray-500 max-w-prose md:text-md">
													<p>Reports to: Center Director</p>
													<p>Supervises: Home Care and Clinic Staff</p>
													<p>Our client is a very well established, national provider of clinical services for elderly populations. They provide a wide range of services that include Inpatient as well as Outpatient clinical services. This position is a critical need for our client and they're offering a great career opportunity as well as compensation package for a strong HomeHealth clinical leader</p>
													<h2>Job Summary</h2>
													<p>
														Under the direction of the Executive Director, the Home Care &amp; Clinic Services Manager assumes responsibility for the hiring, evaluation, supervision and termination of Home Care and Clinic staff. The Home Care &amp; Clinic Services Manager evaluates processes and procedures and implements improvements as needed. The Home Care &amp; Clinic Services Manager is responsible for ensuring compliance of the Program of All-inclusive Care for the Elderly (PACE) regulations and policies.</p>
													<h2>Essential Functions & Work Responsibilities</h2>
													<p>Functional Category: Home Care and Clinical Services Management<br />Estimated Percent of time Spent – 50%<br />•Oversees the implementation of direct home care services made available to participants.<br />•Evaluates and manages the overall effectiveness of the clinic by implementing change and quality improvements as needed, based on observation, reports and statistical analysis.<br />•Designs and implements policies and procedures as needed.<br />•Monitors compliance with all applicable licensing, certification and accreditation requirements.<br />•Serves as a member on various committees both within and outside of the agency as requested by the Center Director.<br />•Provides explanation of Home Care program to staff, other agencies and the community at large.<br />•Assists in the implementation and maintenance of a current nursing care plan.<br />•Manages the flow of clinic by overseeing appointment bookings, triaging and gate keeping in conjunction with primary care and staff. Ensures that participants are cared for in a timely and appropriate fashion.<br />•Observes, records, and reports participant’s condition and reaction to drugs and treatments to physicians responsible for treatment.<br />•Coordinates participant care with outside contract service providers including nursing homes, assisted living, lab, oxygen and others.<br />•Manages and reviews the records and charts of participants for pertinent information and staff documentation, performs documentation as necessary.<br />•Encourages team building by coaching and mentoring staff as needed and training home care and clinic staff to function independently.<br />•Facilitates meetings with the staff of both departments.<br />•Follows up and communicates with weekend and after hour staff as appropriate.<br /><br />Functional Category: Supervision<br />Estimated Percent of time Spent – 30%<br />•In conjunction with the Quality Assurance Manager, develops and implements competency standards for direct reports.<br />•Effectively supervises and manages direct reports and provides, by example and leadership, motivation and direction to employees of the organization.<br />•Carries out supervisory responsibilities in accordance with the organization's policies and applicable state and federal employment laws.<br />•Responsibilities include interviewing, hiring, and training employees; planning, assigning, and directing work; appraising performance; recognizing and rewarding employees; corrective disciplinary procedures and practices (under direction of supervisor and in partnership with Human Resources), addressing complaints and resolving problems.<br />•Ensures annual employee performance reviews are conducted in a timely and effective manner. Evaluates performance of employees for compliance with established policies and objectives of the organization and contributions in attaining objectives.<br />•Helps set the tone of the departments to ensure morale, team work, and that the positive employment culture of the organization is maintained.<br />•Regularly schedules leadership/management, department, and staff 1:1 meetings to provide leadership, development, and a forum for communication to ensure coordination and collaboration in meeting organization and individual goals.<br /><br />Functional Category: Budgeting and Financial<br />Estimated Percent of time Spent - (Approximately 20% of Time)<br />•Develops annual budgets for the departments and assists with overall budget process and financial objectives.<br />•Reviews the departments’ accounts payable on a monthly basis and ensures accuracy in the charges incurred.<br />•Monitors expenditures with commitment to good stewardship of the organization’s resources.<br />•Develops and monitors contracts with other agencies and outside contract service providers. Ensures that charges are accurate and appropriate.<br />•Additional work functions and duties may be assigned<br /><br />Travel Requirements<br /><br />Travel<br />•Travel may be required<br />•Overnight travel may include local or out of state<br /><br />Relocation<br />•Must be open to relocation based on business necessity<br /><br />Qualifications<br />To perform this job successfully, an individual must be able to perform each essential duty satisfactorily. Requirements listed below are representative of the knowledge, skill, and/or ability required. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions<br /><br />REQUIRED<br /><br />Education<br />•Bachelor’s Degree in health care administration, nursing, public health or related human services field or equivalent combination of education and experience<br /><br />Licensure, Certification, Registration or Designation<br />•Current State issued Registered Nurses License required</p>
													<p>Experience<br />•A minimum of five years’ experience in an administrative capacity in a home care agency or other healthcare experience<br />•Minimum of five years supervisory or management experience<br />•A minimum of one year experience working with the frail or elderly is required.<br /><br />PREFERRED<br /><br />Work Experience and Qualifications<br /><br />•Bi-lingual-Spanish, Russian, Punjabi or Hmong Preferred<br /><br />Other Knowledge Skills and Abilities Required<br /><br />Computer Skills<br />•Must be computer proficient and possess experience with Microsoft Word, Excel, and Outlook.<br />•Must be able to quickly learn specific software and new applications.<br /><br />Mathematical/Financial Skills<br />•Ability to apply concepts such as fractions, percentages, ratios, and proportions to practical situations.<br />•Able to analyze data and statistics and draw reasonable conclusions and compile accurate reports.<br />•Experience with P/L and developing and managing budgets.<br /><br />Language Skills<br />•Ability to read, analyze and interpret regulations and other documents.<br />•Strong interpersonal skills and ability to effectively and tactfully present information to, and communicate with, co-workers, employees, and others.<br />•Possess exceptional English written and verbal communication skills, including accurate grammar and business correspondence knowledge.<br />•Ability to read and write memos, reports, and correspondence that conform to prescribed style and format.<br /><br />Reasoning Ability<br />•Ability to define problems, collects data, establish facts, and draw valid conclusions.<br /><br />Other Skills and Abilities:<br />•Strong leadership ability and capable of setting clear objectives for staff and motivating them to achieve those objectives on time and according to plans.<br />•Able to establish and maintain cooperative, positive working relationships.<br />•Organized, detail-oriented, good listening skills, proactive, self-motivated, dependable, and trustworthy.<br />•Even-tempered and able to balance multiple tasks in accordance with changing deadlines and priorities in a fast-paced environment.<br />•Ability to work sensitively and effectively with individuals of diverse ethnic and cultural backgrounds.<br />•Excellent management ability combined with the skills to effectively represent the program to participants, families, outside agencies, community groups and the general public.<br />•Knowledge of utilization review, quality assurance and managed health care concepts<br /><br />Company’s Service Standards Requirements<br />Safety<br />•Safety- Maintains a safe work place. Reports all unsafe work conditions to supervisor and/or Safety &amp; Loss Control Manager and works in conjunction with supervisor, Safety &amp; Loss Control Manager, and staff to correct unsafe work conditions. Follows and enforces all safety policies.<br />Accountability<br />•Commitment – Commits to his/her job and to the success of the company. Continuously puts forth the effort to achieve goals and continuous quality improvement. Degree to which employee goes the extra step to ensure job/task completion. Takes initiative to offer ideas to improve processes or results.<br />•Cooperativeness – Consistently supports management decisions as demonstrated by his/her actions. Demonstrates a “can do” attitude by responding positively to instructions. Follows instructions and works harmoniously with others to complete the job or task.<br />•Attendance – Meets or exceeds punctuality and attendance expectations/requirements. Faithfully reports to work and conforms to scheduled work hours. When necessitated, follows call-in procedures and informs others of absences.<br />Caring<br />•Customer Service - Embraces the organization's commitment to internal and external customer service and demonstrates a customer-centric approach when interacting with co-workers, participants, clients, and all other business contacts.<br />•Confidentiality – Maintains confidentiality of employee, participant, and client data/information, and any other sensitive organization information as appropriate.<br />Integrity<br />•Adherence to Company Policy – Follows and enforces guidelines as established by policies. Conforms to company and job standards and requirements. Shows respect for others. Acts in the best interests of the company at all times. Serves as an example for others. Conducts business in an ethical fashion.<br />•Reliability – Completes responsibilities with minimal direct supervision. Follows through with assigned jobs and tasks all the way through completion. Puts forth the effort to achieve goals and objectives under varying circumstances.<br />•Alignment with Company Goals &amp; Objectives – Supports the organization’s mission, vision, and values and holding self-accountable for applying these principles daily and personally living them when working with coworkers, participants, clients, and all other business contacts.<br />Quality<br />•Quantity of Work / Productivity – Produces at a high volume. Always puts forth the effort to maximize productivity. Meets or exceeds established work deadlines. Engages in a productive work effort whenever possible. Meets goals and objectives.<br />•Quality of Work – Produces work that is accurate and reliable. Accomplishes work quickly and efficiently. Works in a thorough and organized manner while minimizing down time. Results are consistently within acceptable quality standards.<br />•Job Knowledge – Demonstrates a thorough understanding of his/her job processes and procedures. Integrates knowledge to efficiently accomplish job requirements. Efficiently uses resources (including staff and management) to obtain additional knowledge.<br />•Communication – Exhibits good interpersonal skills. Develops and fosters professional relationships with co-workers, participants, clients, and vendors. Keeps others informed as directed by operational demands and need-to-know. Keeps self-informed of announcement made via established company venues<br /><br />Physical Demands /Work Environment<br /><br />PHYSICAL DEMANDS<br />Must possess mobility to work in a standard office setting, or clinical setting, and use standard office equipment, including a computer, and medical equipment; vision/sight (close distance, long distance, depth and peripheral) to assess emergency situations, including medical incidents and to read printed materials and a computer screen; and hearing and speech to communicate in person, before groups, and over the telephone. Depending on assignment, standing in work areas and walking between work areas may be required, and travel to visit various cultural, physical, behavioral and environmental settings may be required. Finger dexterity is needed to access, enter, and retrieve data using a computer keyboard, typewriter keyboard, or calculator and to operate standard office and medical equipment. Positions in this classification occasionally bend, stoop, kneel, reach, push, and pull drawers open and closed to retrieve and file information. Employees must possess the ability to lift, carry, push, and pull materials and objects up to 50 pounds. Reasonable accommodations will be made for individuals on a case-by-case basis.<br /><br />WORKING CONDITIONS<br />Employees primarily work in an office environment with moderate noise levels and controlled temperature. Employees may work outdoors and are occasionally exposed to loud noise levels and cold and/or hot temperatures. Incumbents may be exposed to blood and body fluids in the performance of their assigned duties. Employees may interact with members of the public or with staff under emotionally stressful conditions while interpreting and enforcing departmental policies and procedures.<br /><br />MATERIALS, TOOLS EQUIPMENT, WORK AIDS<br />May require use of wheelchair, medical equipment, gait belts, sliding board, bedside commode, shower equipment, and other work aids<br /><br />STRESS FACTORS<br />May require working under stressful conditions. May experience pressure to meet scheduled deadlines. There may be distractions such as phone calls, work interruptions, and communication from co-workers. Respond and intervene appropriately to multiple interruptions. Working conditions may be noisy and crowded and expose employee to fluctuating indoor temperatures, and humidity around showers/bathrooms.</p>
													<p>Please apply or call: Jim Cristerna&nbsp;<a href="mailto:jim@clarkandcompany.org">jim@clarkandcompany.org</a>&nbsp;909.3604508</p>
												</div>
											</div>
											<div className="sticky self-start top-8">
												<Button type="primary" size="xxl" className="self-start">Apply</Button>
											</div>
										</div>
									</Card>
								</div>
							</div>
						</Container>
					</div>
				</div>
			
			</PageBasic>
		</>
	)
}
export default Hire