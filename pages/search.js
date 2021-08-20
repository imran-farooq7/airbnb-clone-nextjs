import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {format} from 'date-fns'
import InfoCard from "../components/InfoCard";
const Search = ({searchResult}) => {
    const router = useRouter()
    const { startDate, endDate, guests, location } = router.query;
    const formatStartDate = format(new Date(startDate),'dd MMMM yy')
    const formatEndDate = format(new Date(endDate),'dd MMMM yy')
    const ranges = `${formatStartDate} - ${formatEndDate}`
    
    return (
			<div>
				<Navbar placeholder={`${location} | ${guests} | ${ranges}`} />
				<main className="flex">
					<section className="flex-grow pt-14 px-6">
						<p className="text-xs">
							More than 300+ places {ranges} for {guests} numbers of guests
						</p>
						<h1 className="text-3xl font-semibold mt-3 mb-2">
							Stays in {location}
						</h1>
						<div className="hidden md:flex space-x-3 mb-5 whitespace-nowrap text-gray-800">
							<p className="button">Cancellation Flexibilty</p>
							<p className="button">Type of Rooms</p>
							<p className="button">Price</p>
							<p className="button">Rooms and Beds</p>
							<p className="button">More Filters</p>
							<p></p>
						</div>
						<div className="flex flex-col">
							{searchResult.map((sr) => {
								return (
									<InfoCard
										title={sr.title}
										description={sr.description}
										price={sr.price}
										img={sr.img}
										location={sr.location}
										rating={sr.star}
										total={sr.total}
                                        key={sr.title}
									/>
								);
							})}
						</div>
					</section>
				</main>
				<Footer />
			</div>
		);
}

export default Search
export async function getServerSideProps(){
    const searchResult = await fetch("https://links.papareact.com/isz").then(res => res.json())
    return {
        props: {
            searchResult: searchResult
        }
    }
}