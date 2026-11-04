export default function Resume() {
  return (
    <object
      className="w-screen h-screen"
      data="/resume.pdf"
      type="application/pdf"
    >
      <div className="flex h-screen items-center justify-center">
        <a href="/resume.pdf" className="text-signal underline underline-offset-4">Download résumé (PDF)</a>
      </div>
    </object>
  );
}
