import Head from "next/head"
import Image from "next/image"
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next"
// local imports
import { IData, IProperty } from "../libs/customInterfaces"
import { vivarealFilter, zapFilter } from "../libs/customFilters"
import Business from "../components/Business"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
// css
import styles from "../styles/Home.module.css"

export default function Home({ zapData, vivarealData }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className={styles.content}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Code Challenge</title>
			</Head>

			<div className={styles.background} />

			<header id="header" className={styles.header}>
				<Image src={require("../assets/logo-grupozap.png")} alt="Grupo ZAP Logo" layout="fixed" width={50} height={50} />
				<p>Grupo ZAP Challenge</p>
			</header>

			<main className={styles.main}>
				<Hero />

				<span>
					<h2 id="options">Escolha um de nossos parceiros:</h2>
					<p>E mostraremos nossas ofertas para você!</p>
				</span>

				<Business zap={zapData || []} vivaReal={vivarealData || []} />
			</main>

			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
	const res = await fetch("http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json")
	const data: Array<IProperty> = await res.json()

	const zapData: IData = zapFilter(data)
	const vivarealData: IData = vivarealFilter(data)

	return {
		props: {
			zapData,
			vivarealData,
		},
		revalidate: 3600,
	}
}
