import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiExpress,  SiJupyter } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiHtml5, DiJava, DiPython } from "react-icons/di";
import { FaC, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { LiaGit } from "react-icons/lia";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {y: [10, -10], transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-600 pb-24">

        <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl"><span className="bg-gradient-to-r from-pink-200 via-emerald-200 to-purple-200 bg-clip-text text-transparent">Technologies</span></motion.h1>


        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:100}} transition={{duration: 1.5}} className="mb-20 flex flex-wrap items-center justify-center gap-6">

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                <DiJava className="text-6xl text-red-400" />
            </motion.div>

            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                <DiPython className="text-6xl text-yellow-600" />
            </motion.div>

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                <FaC className="text-6xl text-blue-700" />
            </motion.div>

            <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                <LiaGit className="text-6xl text-orange-600" />
            </motion.div>

            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                <FaGithub className="text-6xl text-neutral-100" />
            </motion.div>

            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                <SiJupyter className="text-6xl text-amber-600" />
            </motion.div>


            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x:-100}} transition={{duration: 1.5}} className="mb-20 flex flex-wrap items-center justify-center gap-6">

                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                    <SiMongodb className="text-6xl text-green-500" />
                </motion.div>

                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                    <SiExpress className="text-6xl text-neutral-200" />
                </motion.div>

                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </motion.div>

                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                    <FaNode className="text-6xl text-green-600" />
                </motion.div>

                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                    <SiTailwindcss className="text-6xl text-cyan-500" />
                </motion.div>

                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-3 m-1">
                    <DiHtml5 className="text-6xl text-amber-400"></DiHtml5>
                </motion.div>

            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies;