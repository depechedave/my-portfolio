import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {
  GlobeAltIcon,
  LightningBoltIcon,
  CodeIcon,
  TemplateIcon,
} from "@heroicons/react/outline"

const Home = () => {
  const features = [
    {
      name: "Web development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CodeIcon,
    },
    {
      name: "Design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: TemplateIcon,
    },
    {
      name: "Modern tooling",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: LightningBoltIcon,
    },
    {
      name: "SharePoint",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
  ]
  return (
    <>
      <div className="pb:4 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1>David Allerton</h1>
            <h2 className=" text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Front-end & UI/UX developer
            </h2>
          </div>

          <div className="mt-8 sm:mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map(feature => (
                <div key={feature.name} className="pt-4">
                  <dt>
                    <div
                      className="
                    hidden absolute sm:flex items-center justify-center h-12 w-12 rounded-md bg-indigo-400 text-white"
                    >
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="sm:ml-16 text-xl leading-6 font-medium ">
                      {feature.name}
                    </h3>
                  </dt>
                  <p className="mt-2 sm:ml-16 text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-pink-300 ">
              <span className="block">Want to know more?</span>
              <span className="block text-lime-200">Contact me</span>
            </h2>
            <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="mailto:depechedave@gmail.com"
                  className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500"
                >
                  Email
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to="/about"
                  key="learnMore"
                  className={
                    "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-500 bg-white hover:bg-indigo-100"
                  }
                  aria-current="true"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Home.Layout = Layout
export default Home
