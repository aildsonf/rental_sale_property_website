import Head from "next/head"
import Image from "next/image"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { IProperty } from "../libs/propertyInterface"
import styles from "../styles/Home.module.css"
import Offers from "../components/Offers"
import { useState } from "react"
import {
	SiCss3,
	SiHtml5,
	SiNextDotJs,
	SiTypescript,
	SiYarn,
} from "react-icons/si"

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
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Challenge</title>
			</Head>

			<div className={styles.container}>
				<header className={styles.header}>
					<span className={styles.logo}>grupo zap</span>
					<nav className={styles.nav}>
						<a
							onClick={(e) => {
								setOffers(zapData)
							}}
						>
							<Image src={require("../assets/logo_zap.png")} alt="Logo ZAP" />
						</a>
						<a onClick={(e) => setOffers(vrData)}>
							<Image
								src={require("../assets/logo-vivareal.png")}
								alt="Logo ZAP"
							/>
						</a>
						<div className={styles.background} />
					</nav>
				</header>

				<main className={styles.main}>
					<div>
						<Offers data={offers} />
					</div>
				</main>

				<footer className={styles.footer}>
					<p>{`Code Challenge ${new Date().getFullYear()}`} - Frontend</p>
					<div className={styles.techs}>
						<SiNextDotJs size="1.5rem" color="gray" />
						<SiTypescript size="1.5rem" color="gray" />
						<SiHtml5 size="1.5rem" color="gray" />
						<SiCss3 size="1.5rem" color="gray" />
						<SiYarn size="1.5rem" color="gray" />
					</div>
				</footer>
			</div>
		</>
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
