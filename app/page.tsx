"use client";

import Cursor from "./components/Cursor.jsx"
import Header from "./components/Header.jsx"

export default function Home() {
  return (
  <>
    <div className="hidden md:block">
      <Cursor />
    </div>
    <Header />
  </>
  )
}
