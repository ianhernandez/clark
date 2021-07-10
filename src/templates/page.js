import * as React from "react"
import PropTypes from "prop-types"
import Head from "./head"

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      {children}
      <div class="fixed z-50 bottom-0 left-0 m-8 p-3 text-xs font-mono text-white h-7 w-7 rounded-full shadow-md border-white border flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-yellow-300 2xl:text-gray-500">
        <div class="block  sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">xs</div>
        <div class="hidden sm:block  md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div>
        <div class="hidden sm:hidden md:block  lg:hidden xl:hidden 2xl:hidden">md</div>
        <div class="hidden sm:hidden md:hidden lg:block  xl:hidden 2xl:hidden">lg</div>
        <div class="hidden sm:hidden md:hidden lg:hidden xl:block  2xl:hidden">xl</div>
        <div class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
      </div>
    </React.Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page