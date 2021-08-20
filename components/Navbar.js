import Image from 'next/image'
import airbnb from '../public/airbnb.png'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserIcon} from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';


const Navbar = ({placeholder}) => {
	const [searchValue, setSearchValue] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [guests, setGuests] = useState(1)
	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};
	const handleSelect = (ranges) => {
				setStartDate(ranges.selection.startDate)
				setEndDate(ranges.selection.endDate)
				console.log(ranges);


	}
	const route = useRouter();
	const handleOnClickSearch = () => {
route.push({
	pathname: "/search",
	query: {
		location: searchValue,
		startDate: startDate.toISOString(),
		endDate: endDate.toISOString(),
		guests: guests,
	},
});
	}
	const handleOnClickLogo = () => {
		route.push("/");
	};
    return (
			<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md md:p-5 p-3">
				<div className="flex relative items-center h-10 cursor-pointer my-auto">
					<Image
						src={airbnb}
						layout="fill"
						objectFit="contain"
						objectPosition="left"
						onClick={handleOnClickLogo}
					/>
				</div>
				<div className="flex md:border-2 rounded-full p-2 md:shadow-md">
					<input
						type="text"
						placeholder={placeholder || "Start your search here"}
						className="bg-transparent flex-grow outline-none text-sm text-black"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
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
				{searchValue && (
					<div className="flex flex-col col-span-3 mx-auto">
						<DateRangePicker
							ranges={[selectionRange]}
							rangeColors={["#fd5861"]}
							minDate={new Date()}
							onChange={handleSelect}
						/>
						<div className="flex items-center border-b mb-4">
							<h2 className="text-2xl font-semibold flex-grow">
								Number of Guests
							</h2>
							<UserIcon className="h-5" />
							<input
								type="number"
								className="w-12 pl-2 text-lg text-red-400 outline-none"
								min="1"
								value={guests}
								onChange={(e) => setGuests(e.target.value)}
							/>
						</div>
						<div className="flex justify-center">
							<button
								className="flex-grow text-gray-500"
								onClick={() => setSearchValue("")}>
								Cancel
							</button>
							<button
								className="flex-grow text-red-400"
								onClick={handleOnClickSearch}>
								Search
							</button>
						</div>
					</div>
				)}
			</header>
		);
}

export default Navbar
