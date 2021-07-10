import React from 'react'
import { Disclosure } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/solid'

const faqs = [
  {
    question: "What is Web Hosting?",
    answer:
      "Web hosting allows businesses, organizations, and individuals to make their websites or apps visible on the internet. Whether they're using a dedicated server, or sharing resources, every website is hosted on a server. The only way for a website to be visible on the internet is if it's hosted by a web hosting service provider, also known as a web host. In order to find a website, you type the domain name (or URL) into your browser. Your computer will then connect to the server where the website is hosted, and the webpage is delivered onto your screen."
  },
  {
    question: "What Are the Different Types of Web Hosting Products DreamHost Offers?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How Do I Buy A Domain Name?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How Do I Migrate Over To DreamHost?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Can You Help Me Understand More",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center font-bold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-14 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-2xl text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <PlusIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-lg text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
