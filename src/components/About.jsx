import aboutImg from "../assets/Portrait.jpg"; 
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-600 pb-4">
        <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1}} className="my-10 text-center text-4xl">
            About
            <span className="text-purple-400"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap my-14 mb-16">

            <motion.div whileInView={{opacity: 1, x: 0, }} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}}  className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutImg} alt="about" className="rounded-2xl" />
                </div>
            </motion.div>

            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 0.5}} className="w-full lg:w-1/2">
                <div className="flex justify-center items-center lg:justify-start mt-8 leading-7">
                    <p>{ABOUT_TEXT}</p>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default About;