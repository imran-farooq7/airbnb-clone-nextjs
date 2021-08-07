import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SmallCard from '../components/SmallCard';

export default function Home({exploreData}) {
	
  return (
		<div className="">
			<Head>
				<title>Airbnb Clone</title>
			</Head>
			<Navbar />
			<Hero />
			<main className="max-w-7xl mx-auto px-6 sm:px-16">
				<section className="pt-6  ">
					<h2 className="text-4xl font-bold">Explore nearby</h2>
					<div className="sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-4">
						{exploreData.map((item) => (
							<SmallCard
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
				<section></section>
			</main>
		</div>
	);
}
export async function getStaticProps () {
	const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());

	return {
		props:{
			exploreData
		}
	}

}
