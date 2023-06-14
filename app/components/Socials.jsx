import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxResume } from "react-icons/rx";

export default function Socials(){
    return (
        <div className="flex gap-7 text-2xl mt-80 opacity-70">
            <a href="https://github.com/vimal-vs" title="Github"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/vimalvs" title="Linkedin"><AiFillLinkedin /></a>
            <a href="https://drive.google.com/file/d/1RccGMVTcDeDGn1vSLyYR5qzqk4Wc2Dno/view?usp=drive_link" title="Resume"><RxResume /></a>
        </div>
    )
}