const linkClass = "text-mute transition-colors hover:text-signal";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 font-mono text-xs text-faint">
      <p>
        Built with <a className={linkClass} href="https://nextjs.org">Next.js</a> and{" "}
        <a className={linkClass} href="https://tailwindcss.com">Tailwind CSS</a>, deployed with{" "}
        <a className={linkClass} href="https://vercel.com">Vercel</a>.
      </p>
    </footer>
  );
}
