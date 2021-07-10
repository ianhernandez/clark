import React from 'react'
// import Hero from '../components/hero/'
import Nav from '../molecule/nav/'
import Button from '../atom/button/'
import Container from '../atom/container/'
import { StaticImage } from "gatsby-plugin-image"


export default function Hero() {
  return (
		
      <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          "../../images/stock/stairway.jpeg"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div className="flex flex-col text-white bg-black bg-cover bg-center-right sm:bg-center-top xl:bg-right-top" style={{gridTemplateRows: "1", gridArea: "1/1",}}>
			<Nav/> 
      <Container className="relative z-10 grid grid-cols-12 font-sans text-white lg:gap-x-10" style={{gridTemplateRows: "1fr", gridArea: "1/1",}}>
				<div className="flex items-center justify-start col-span-12 px-24 pt-16 pb-24 space-y-8 text-center md:text-left" style={{minHeight: 'calc(100vh - 6rem)'}}>
          <div class="space-y-8">
            <h1 className="text-3xl font-bold tracking-tight text-white capitalize lg:leading-tight sm:text-5xl md:text-5xl lg:text-6xl">
              <span className="block">Inspiring leadership</span>
              <span className="block">in every community</span>
            </h1>
            <p className="mx-auto text-base leading-tight md:max-w-lg md:text-2xl md:mx-0">
            Recruiting the best leaders so healthcare facilities can provide the greatest level of care for their community.
            </p>
            <p className="mx-auto text-lg leading-relaxed md:max-w-lg md:text-base md:mx-0">
            Clark & Company doesn't just find and place higly-skilled talent, we&nbsp;create positive impact in communities nationwide through our proven executive search and direct hire programs.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button type="primary" size="xxl">Get Started</Button> &nbsp;&nbsp;&nbsp;
              <Button type="ghost" size="xxl">Watch Video</Button>
            </div>
          </div>
				</div>
      </Container>
      </div>
    </div>
	)
}
