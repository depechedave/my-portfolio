import React from "react"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <>
      <h1>David Allerton</h1>
      <h2>Web Developer</h2>
      <h3>Front End Development & UI/UX</h3>
      <a href="mailto:admin@davidallerton.com">
        <button>Contact me</button>
      </a>
    </>
  )
}

Home.Layout = Layout
export default Home
