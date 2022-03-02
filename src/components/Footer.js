import React from "react"

export default function Footer() {
  return (
    <footer class="flex p-4 sm:p- bg-gray-800 items-center inset-x-0 bottom-0">
      <span class="mx-auto text-sm text-gray-500 sm:absolute sm:right-4">
        © 2022{" "}
        <a href="https://flowbite.com" class="hover:underline" target="_blank">
          DPA Development
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}
