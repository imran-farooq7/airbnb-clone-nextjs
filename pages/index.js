import Head from 'next/head'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import Navbar from '../components/Navbar'
import SmallCard from '../components/SmallCard';

export default function Home({exploreData,cardData}) {
	
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
								key={item.location}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-bold mb-5">Live anywhere</h2>
					<div className="flex overflow-scroll space-x-3 scrollbar-hide p-3">
						{cardData.map((item) => (
							<MediumCard img={item.img} title={item.title} key={item.title} />
						))}
					</div>
				</section>
				<LargeCard img="https://links.papareact.com/4cj" title="Travel without boundries" description="Curated by Airbnb" btnText="Explore Now" />
				
			</main>
			<Footer />
		</div>
	);
}
export async function getStaticProps () {
	const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
	const cardData = await fetch("https://links.papareact.com/zp1").then(
		(res) => res.json(),
	);

	return {
		props:{
			exploreData,
			cardData
		}
	}

}
