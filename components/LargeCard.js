import Image from "next/image"

const LargeCard = ({img,title,description,btnText}) => {
    return (
			<section className="relative py-16 cursor-pointer">
				<div className="relative h-96 min-w-[300px]">
					<Image src={img} layout="fill" objectFit="cover" />
				</div>
				<div className="absolute top-32 left-12 space-y-3">
					<h3 className="text-4xl w-64">{title}</h3>
					<p>{description}</p>
                    <button className="text-sm bg-gray-900 py-2 px-4 text-white rounded-xl">{btnText}</button>
				</div>
			</section>
		);
}

export default LargeCard
