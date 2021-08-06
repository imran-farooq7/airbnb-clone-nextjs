import Image from "next/image"
import HeroImg from '../public/hero.webp'

const Hero = () => {
    return (
			<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
				<Image src={HeroImg} layout="fill" />
				<div className="absolute md:top-1/4 top-[10px] left-[100px]">
					<h1 className="  text-white md:text-5xl font-bold md:w-28 text-center text-xl w-[220px] pb-40 md:pb-0  ">
						Olympian Paralympian Online Experiences
					</h1>
					<button className="bg-white py-3 px-5 rounded-lg text-[14px] md:mt-4 block md:inline-block mx-auto">Explore Now</button>
				</div>
			</div>
		);
}

export default Hero
