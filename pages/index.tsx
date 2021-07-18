import Head from "next/head"
import Image from "next/image"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import {
	SiCss3,
	SiHtml5,
	SiNextDotJs,
	SiTypescript,
	SiYarn,
} from "react-icons/si"

// local imports
import { IData, IProperty } from "../libs/customInterfaces"
import { filterVivaReal, filterZap } from "../libs/customFilters"
import styles from "../styles/Home.module.css"
import Business from "../components/Business"
import consts from "../libs/consts"
import Hero from "../components/Hero"

export default function Home({
	zapData,
	vivarealData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div className={styles.background} />
			<header id="header" className={styles.header}>
				<Image
					src={require("../assets/logo-grupozap.png")}
					alt="Grupo ZAP Logo"
					className={styles.logo}
					layout="fixed"
					width={50}
					height={50}
				/>
				<p className={styles.textColor}>Grupo ZAP Challenge</p>
			</header>

			<div className={styles.container}>
				<main className={styles.main}>
					<Hero />

					<span>
						<h2 id="options" className={styles.textColor}>
							Escolha um de nossos parceiros:
						</h2>
						<p className={styles.textColor}>
							E mostraremos nossas ofertas para você!
						</p>
					</span>

					<Business zap={zapData} vivaReal={vivarealData} />
				</main>
			</div>

			<footer className={styles.footer}>
				<p className={styles.textColor}>
					{`Code Challenge ${new Date().getFullYear()}`} - Frontend
				</p>
				<div className={styles.techs}>
					<SiNextDotJs size="1.5rem" color="#9cafad" />
					<SiTypescript size="1.5rem" color="#9cafad" />
					<SiHtml5 size="1.5rem" color="#9cafad" />
					<SiCss3 size="1.5rem" color="#9cafad" />
					<SiYarn size="1.5rem" color="#9cafad" />
				</div>
			</footer>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const res = await fetch(consts.endpoint)
	const data: Array<IProperty> = await res.json()

	const zapData: IData = filterZap(data)
	const vivarealData: IData = filterVivaReal(data)

	return {
		props: {
			zapData,
			vivarealData,
		},
	}
}
