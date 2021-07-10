/* This example requires Tailwind CSS v2.0+ */
import * as React from "react"
import { Fragment } from 'react'

import Container from '../components/atom/container'
import Button from '../components/atom/button'
import Card from '../components/atom/card'
import Faq from '../components/molecule/faq'
import Nav from '../components/molecule/nav'
import Hero from '../components/hero/'
import Footer from '../components/molecule/footer'
import Pricing from '../components/molecule/pricing'
import CallToAction from '../components/molecule/call-to-action'

export default function About() {
  return (
    <>
    <div className="font-sans">
     

      <Hero>
        <Nav/>
        <div className="grid text-center lg:text-left lg:grid-cols-4 text-white lg:gap-x-16 lg:gap-y-16">
          <div className="col-span-3">
            <h1 className="mt-4 tracking-tight font-bold text-white sm:mt-5 lg:mt-0 text-4xl sm:text-6xl lg:text-8xl">
              <span className="block">Web Hosting</span>
              <span className="block">With Purpose</span>
            </h1>
          </div>
          <div className="col-span-3">
            <p className="col-span-3 text-xl mb-8">
              Award-winning WordPress websites and hosting to top-tier DNS tools, new TLDs, email hosting, ssh, git, WP-CLI, sftp, personalized guidance and more.
            </p>
            <Button type="primary" size="xxl">Get Started</Button> <Button type="ghost" size="xxl">Get Started</Button>
          </div>

          <div className="grid col-span-3 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-medium mb-4">WordPress Hosting Starting At $4.95/mo</h2>
              <p>We make sure your website is fast, secure & always up</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">WordPress Hosting Starting At $4.95/mo</h2>
              <p>We make sure your website is fast, secure & always up</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">WordPress Hosting Starting At $4.95/mo</h2>
              <p>We make sure your website is fast, secure & always up</p>
            </div>
          </div>
        </div>
      </Hero>
      <Container>
        <p className="text-xs font-bold">The quick brown fox </p>
        <p className="text-sm font-bold">The quick brown fox </p>
        <p className="text-base font-bold">The quick brown fox</p>
        <p className="text-lg font-bold">The quick brown fox</p>
        <p className="text-xl font-bold">The quick brown fox</p>
        <p className="text-2xl font-bold">The quick brown fox</p>
        <p className="text-3xl font-bold">The quick brown fox</p>
        <p className="text-4xl font-bold">The quick brown fox</p>
        <p className="text-5xl font-bold">The quick brown fox</p>
        <p className="text-6xl font-bold">The quick brown fox</p>
        <p className="text-7xl font-bold">The quick brown fox</p>
        <p className="text-8xl font-bold">The quick brown fox</p>
        <p className="text-9xl font-bold">The quick brown fox</p>
        
        <Button size="sm" type="primary">Enable</Button>
        <Button size="md" type="primary">Enable</Button>
        <Button size="lg" type="primary">Enable</Button>
        <Button size="xl" type="primary">Enable</Button>
        <Button size="xxl" type="primary">Enable</Button>
        
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div>
          <Card className="o-5">
            <h2 className="text-4xl font-bold capitalize">DreamPress Starter</h2>
            <p className="text-2xl font-medium">Lorem ipsum dolor sit amet</p>
            <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <Button size="lg" type="primary">Enable</Button>
          </Card>
        </div>
       
        <div>
          <Card className="o-5">
            <h2 className="text-4xl font-bold capitalize">DreamPress Professional</h2>
            <p className="text-2xl font-medium">Lorem ipsum dolor sit amet</p>
            <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <Button size="lg" type="primary">Enable</Button>
          </Card>
        </div>
       
        <div>
          <Card className="o-5">
            <h2 className="text-4xl font-bold capitalize">DreamPress Enterprise</h2>
            <p className="text-2xl font-medium">Lorem ipsum dolor sit amet</p>
            <p className="text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <Button size="lg" type="primary">Enable</Button>
          </Card>
        </div>
       
      </div>
      </Container> 
      <Pricing />
      <CallToAction/>
      <Faq />
      <Footer/>

    </div>
    </>
  )
}
