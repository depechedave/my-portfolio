import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div class="flex flex-col items-center text-center mt-20">{children}</div>
    </>
  )
}
