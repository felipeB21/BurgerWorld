import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 mt-12">
        <div className="py-12 animate-fade animate-duration-[4000ms]">
            <h1 className="text-6xl font-semibold max-w-[400px]">We have the best <span className="text-orange-600">Burgers</span> in the <span className="text-orange-600">World</span>!</h1>
            <p className="mt-4 text-gray-600 font-medium">Our burgers are made with beef and lots of <span className="text-orange-500">cheddar</span>.</p>
            <div className="text-lg flex gap-6 items-center mt-4">
                <button className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 flex items-center gap-2 text-white px-8 py-2 rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 duration-200">Order now <FaArrowRight /></button>
                <button className="flex items-center gap-2 border border-gray-300 px-8 py-2 rounded-full hover:bg-gray-200 duration-200">About us <FaInfo /></button>
            </div>
        </div>
        <div className="relative animate-fade-left animate-duration-[4000ms]">
            <Image src="/burger-hero.png" alt="burger-hero image" fill objectFit={'contain'}/>
        </div>
    </section>
  )
}
