import Image from "next/image"
// local imports
import styles from "../styles/Home.module.css"

export default function Hero() {
	return (
		<>
			<h1 className={styles.heroTitle}>Procurando um novo lar?</h1>
			<div className={styles.hero}>
				<div className={`${styles.tip_wrapper} ${styles.tipBg1}`}>
					<Image src={require("../assets/demo-1.jpg")} alt="teste" />
					<p className={styles.tip_description}>Imóveis em áreas valorizadas</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg2}`}>
					<Image src={require("../assets/demo-2.jpg")} alt="teste" />
					<p className={styles.tip_description}>Ofertas que superam expectativas</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg3}`}>
					<Image src={require("../assets/demo-3.jpg")} alt="teste" />
					<p className={styles.tip_description}>Aluguéis acessíveis</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg4}`}>
					<Image src={require("../assets/demo-4.jpg")} alt="teste" />
					<p className={styles.tip_description}>Invista nos seus projetos</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg5}`}>
					<Image src={require("../assets/demo-5.jpg")} alt="teste" />
					<p className={styles.tip_description}>Realize o sonho da casa própria</p>
				</div>
			</div>
		</>
	)
}
