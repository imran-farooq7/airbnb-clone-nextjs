import Image from 'next/image'
import airbnb from '../public/airbnb.png'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserIcon} from '@heroicons/react/solid'

const Navbar = () => {
    return (
			<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md md:p-5 p-3">
				<div className="flex relative items-center h-10 cursor-pointer my-auto">
					<Image
						src={airbnb}
						layout="fill"
						objectFit="contain"
						objectPosition="left"
					/>
				</div>
				<div className="flex md:border-2 rounded-full p-2 md:shadow-md">
					<input
						type="text"
						placeholder="Start your search here"
						className="bg-transparent flex-grow outline-none text-sm text-black"
					/>
					<SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
				</div>
				<div className="flex justify-end items-center space-x-0 md:space-x-3 text-gray-500 cursor-pointer">
					<p className="hidden md:inline-flex text-sm md:text-base">
						Become a host
					</p>
					<GlobeAltIcon className="h-6" />
					<div className="rounded-full shadow-md flex px-5 py-2 item-center space-x-3">
						<MenuIcon className="h-6" />
						<UserIcon className="h-6" />
					</div>
				</div>
			</header>
		);
}

export default Navbar
