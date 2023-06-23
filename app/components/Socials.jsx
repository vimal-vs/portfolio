import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Socials(){
    return (
        <div className="flex mt-8 md:mt-0 gap-7 text-2xl">
            <a className="opacity-70 hover:opacity-100" href="https://github.com/vimal-vs" title="Github"><AiFillGithub /></a>
            <a className="opacity-70 hover:opacity-100" href="https://www.linkedin.com/in/vimalvs" title="Linkedin"><AiFillLinkedin /></a>
            <a className="opacity-70 hover:opacity-100" href="mailto:vimalsakkthi@gmail.com" title="Mail"><MdEmail /></a>
        </div>
    )
}