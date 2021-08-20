import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

const InfoCard = ({img, title,location,price,rating,total,description}) => {
    return (
			<div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
				<div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
					<Image layout="fill" src={img} objectFit="cover" className="rounded-xl" />
				</div>
				<div className="flex flex-col flex-grow pl-5">
					<div className="flex justify-between">
						<p>{location}</p>
						<div>
							<HeartIcon className="h-7 cursor-pointer" />
						</div>
					</div>
					<h4 className="text-xl">{title}</h4>
					<div className="w-10 pt-2 border-b" />
					<p className="pt-2 text-sm text-gray-600 flex-grow">{description}</p>
					<div className="flex justify-between items-end pt-5">
						<p className="flex items-center">
							<StarIcon className="h-5 text-red-400" />
							{rating}
						</p>
						<div>
							<p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
							<p className="font-extralight text-right">{total}</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default InfoCard
