import Head from "next/head"
import Image from "next/image"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { IProperty } from "../libs/propertyInterface"
import styles from "../styles/Home.module.css"
import Offers from "../components/Offers"
import { useState } from "react"

export default function Home({
	data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const zapData: Array<IProperty> = data.filter(
		(d: IProperty) => d.pricingInfos.businessType === "RENTAL"
	)
	const vrData: Array<IProperty> = data.filter(
		(d: IProperty) => d.pricingInfos.businessType === "SALE"
	)
	const [offers, setOffers] = useState<IProperty[]>([])

	return (
		<div className={styles.container}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Challenge</title>
			</Head>

			<div>
				<nav className={styles.navbar}>
					<span>grupo zap</span>
					<ul className={styles.choices}>
						<li>
							<a onClick={(e) => setOffers(zapData)}>zap</a>
						</li>
						<li>
							<a onClick={(e) => setOffers(vrData)}>viva real</a>
						</li>
						<div className={styles.background} />
					</ul>
				</nav>

				<main>
					<div>
						<h2>Casas</h2>
						<Offers data={offers} />
					</div>
				</main>

				<footer>
					<p>{`Code Challenge ${new Date().getFullYear()}`}</p>
				</footer>
			</div>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const res = await fetch(
		"http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json"
	)
	const data: Array<IProperty> = await res.json()

	return {
		props: {
			data,
		},
	}
}
