import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
		<div className="">
			<Head>
				<title>Airbnb Clone</title>
			</Head>
			<Navbar />
      <Hero />
		</div>
	);
}
