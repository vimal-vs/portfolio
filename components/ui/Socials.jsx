import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const linkClass = "text-mute transition-colors hover:text-signal";

export default function Socials() {
  return (
    <div className="mt-8 flex gap-5 text-2xl">
      <a className={linkClass} href="https://github.com/vimal-vs" target="_blank" rel="noreferrer" title="Github" aria-label="Github"><AiFillGithub /></a>
      <a className={linkClass} href="https://www.linkedin.com/in/vimalvs" target="_blank" rel="noreferrer" title="Linkedin" aria-label="Linkedin"><AiFillLinkedin /></a>
      <a className={linkClass} href="mailto:vimalsakkthi@gmail.com" title="Mail" aria-label="Mail"><MdEmail /></a>
    </div>
  );
}
