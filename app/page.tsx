"use client";

import Cursor from "../components/ui/Cursor.jsx"
import PageShell from "../components/layout/PageShell.jsx"

export default function Home() {
  return (
  <>
    <div className="hidden md:block">
      <Cursor />
    </div>
    <PageShell />
  </>
  )
}
