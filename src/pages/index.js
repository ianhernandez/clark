import * as React from 'react'
import { Link } from 'gatsby'
import { GlobeAltIcon, LightningBoltIcon } from '@heroicons/react/outline'
import Hero from '../components/hero'
import Container from '../components/atom/container'
import Page from '../templates/page'
import Card from '../components/atom/card'
import Testimonial from '../components/molecule/testimonial'
import Footer from '../components/molecule/footer'

const promises = [
  {
    title: "Super Easy to Use",
    description:
      "Our custom control panel is simple to use and removes the headache of managing your web hosting.",
    icon: GlobeAltIcon,
  },
  {
    title: "Full Featured?",
    description:
      "We do more than web hosting. Our tool suite includes everything you need to be successful.",
    icon: LightningBoltIcon,
  },
  {
    title: "Fast & Reliable",
    description: "If your website is slow or down, then you are losing customers, conversion and search engine rankings.",
    icon: LightningBoltIcon,
  },
  {
    title: "24/7 Expert Support",
    description: "Our award-winning US-based experts are available to help when you get stuck — anytime, day or night.",
    icon: LightningBoltIcon,
  },
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
    title: "Surgical Services Leadership",
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

export default function Index() {
  return (
  <Page>
		<Hero />
    <div className="bg-white">
      <div className="py-16 lg:max-w-7xl lg:mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div className="flex justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
    
		<div className="relative pt-16 pb-32 overflow-hidden font-sans bg-white">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 xl:gap-32">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 capitalize">
                Attracting the top healthcare leaders to your organization is our passion
              </h2>
              <p className="text-lg text-gray-500">
                With 20 years in business, we understand how difficult it can be to attract high-performing talent to your facility. Our associates are proactively connecting, meeting and following up with the brightest and most influential leaders in healthcare today.
              </p>
              <Link
                to="/"
                className="inline-flex px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
              >
                Find Out How We Work
              </Link>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 xl:mt-40">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-900 capitalize">
                Helping professionals with passion, drive and energy find life-changing careers oppurtunities
              </h2>
              <p className="text-lg text-gray-500">
                An executive-level healthcare recruitment firm for passionate, driven leaders who want to make a real difference. We put our heart into everything we do. We know that when we help you find a fulfilling career that fits your dreams, we’re truly making a difference in the well-being of communities nationwide.
              </p>
              <Link
                to="/"
                className="inline-flex px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
              >
                Find A New Career
              </Link>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Container type="padded" className="font-sans bg-white">
      <div className="mt-8 text-center md:mt-16">
        <h2 className="max-w-3xl mx-auto mb-4 text-2xl font-bold capitalize md:mb-8 md:text-6xl">Our Departments</h2>
        <p className="text-lg">We run a team of extremely focused individuals in a general area of healthcare recruitment</p>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-0 lg:grid-rows-2 md:mt-16">
        {departments.map((service) => (
        <Card key={service.title} className="space-y-4 text-center border border-gray-100 rounded-none md:space-y-8">
          <div className="items-center justify-center hidden w-12 h-12 text-white bg-blue-600 rounded-md">
            <service.icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="mx-auto text-xl font-bold capitalize md:text-3xl" style={{maxWidth: '16rem'}}>{service.title}</h3>
          <p className="text-base font-medium">{service.description}</p>
        </Card>
        ))}
      </div>
    </Container>

    <div className="font-sans bg-white">
      <Container type="padded" className="grid hidden md:grid-cols-12 lg:pt-20">
        <p className="max-w-lg text-xl font-medium text-gray-500 lg:col-span-6 lg:col-start-6">From rising-star mid-level managers to high-perofrming C-Suite executives, <span className="font-bold">we connect people</span>.</p>
        <h2 className="text-6xl font-bold tracking-tight text-gray-900 lg:col-span-6 lg:col-start-6 lg:mt-8">
           We are experts in healthcare recruitment &&nbsp;executive search
        </h2>
        <div className="text-xl text-gray-800 lg:col-span-6 lg:col-start-2 lg:mt-24">
        <p className="mb-6">For the past 20 years, the hardest-working, most caring and courageous leaders in healthcare have trusted us in filling their critical executive positions.</p>
        <p>They value our responsiveness. A client once said our ability to identify, pitch and close the precise candidate "is pure art." Thanks Charles!</p>
        </div>
      </Container>
    </div>
   
    <Container type="padded" className="hidden bg-white">  
      <div className="relative font-sans lg:py-20 lg:grid lg:grid-cols-3 lg:gap-x-10">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Clark & Co. Helps You Succeed
          </h2>
          <p className="max-w-xs mt-6 text-base md:mt-8">Grow your website faster by using DreamHost as your foundation.</p>
        </div>
        <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          {promises.map((promise) => (
            <div key={promise.title}>
              <dt>
                <p className="text-lg font-semibold leading-6 text-gray-900 lg:text-3xl">{promise.title}</p>
              </dt>
              <dd className="max-w-xs mt-2 text-base text-gray-500">{promise.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
		<Testimonial></Testimonial>
    <Footer />
  </Page>
	)
}