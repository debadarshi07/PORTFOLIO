import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { FaGit, FaNode } from "react-icons/fa";
import { DiJava , DiJavascript1, DiPython } from "react-icons/di";
import { FaGithub, FaLinux } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-600 pb-24">
        <h1 className="my-20 text-center text-5xl"><span className="bg-gradient-to-r from-pink-200 via-emerald-200 to-purple-200 bg-clip-text text-transparent">Technologies</span></h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <SiMongodb className="text-7xl text-green-500" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <SiExpress className="text-7xl text-neutral-200" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <FaNode className="text-7xl text-green-600" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <SiTailwindcss className="text-7xl text-cyan-500" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <DiJava className="text-7xl text-red-400" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <DiJavascript1 className="text-7xl text-yellow-600" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <DiPython className="text-7xl text-blue-700" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <FaGit className="text-7xl text-amber-700" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <FaGithub className="text-7xl text-neutral-100" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-100 p-3">
                <FaLinux className="text-7xl text-yellow-300" />
            </div>
        </div>
    </div>
  )
}

export default Technologies;