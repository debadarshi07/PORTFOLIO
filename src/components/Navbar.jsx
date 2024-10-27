import logo from "../assets/Logo.jpg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { CiMail } from "react-icons/ci";

const Navbar = () => {
    return (
        <nav className="mb-16 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href=""><img className="mx-2 w-12" src={logo} alt="logo" /></a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl lg:gap-8">
                <a href="https://linkedin.com/in/debadarshiomkar/" target="_blank"><FaLinkedin /></a>
                <a href="http://github.com/debadarshi07" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="http://gmail.com/" target="_blank" rel="noopener noreferrer"><CiMail /></a>
                <a href="http://x.com/guddu_174/" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            </div>
        </nav>
    )
}

export default Navbar;