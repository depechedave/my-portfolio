import React from "react"
import { Link } from "gatsby"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "CV", href: "/cv" },
]

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 border-b-2 border-gray-700 sticky w-full top-0 backdrop-filter backdrop-blur-lg bg-opacity-40"
    >
      {({ open }) => (
        <>
          <div className="max-w-8xl px-2 sm:px-6 lg:px-12 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                {/* End Mobile menu button*/}
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center">
                  <Disclosure.Button as={Link} to="/">
                    <img
                      className="block h-10 w-auto"
                      src="/DPA.svg"
                      alt="DPA"
                    />
                  </Disclosure.Button>

                  {/* <Link to="/">
                    <img
                      className="block h-10 w-auto"
                      src="/DPA.svg"
                      alt="DPA"
                    />
                  </Link> */}
                </div>
              </div>
              <div className="hidden sm:block absolute inset-y-0 right-0 items-center space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {navigation.map(item => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className={
                      "px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                    activeClassName={"bg-gray-900 text-white"}
                    aria-current={item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Disclosure.Button
                  as={Link}
                  to={item.href}
                  key={item.name}
                  className={
                    "flex px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white justify-center"
                  }
                  activeClassName={" text-white"}
                  aria-current={item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
