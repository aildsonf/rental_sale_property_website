import Image from "next/image"

// local imports
import styles from "../styles/Home.module.css"

export default function Hero() {
	return (
		<>
			<h1 className={`${styles.textColor} ${styles.main_title}`}>
				Procurando um novo lar?
			</h1>
			<div className={styles.hero}>
				<div className={`${styles.tip_wrapper} ${styles.tipBg1}`}>
					<Image src={require("../assets/demo-1.jpg")} alt="teste" />
					<p className={styles.tip_description}>teste</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg2}`}>
					<Image src={require("../assets/demo-2.jpg")} alt="teste" />
					<p className={styles.tip_description}>teste</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg3}`}>
					<Image src={require("../assets/demo-3.jpg")} alt="teste" />
					<p className={styles.tip_description}>teste</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg4}`}>
					<Image src={require("../assets/demo-4.jpg")} alt="teste" />
					<p className={styles.tip_description}>teste</p>
				</div>

				<div className={`${styles.tip_wrapper} ${styles.tipBg5}`}>
					<Image src={require("../assets/demo-5.jpg")} alt="teste" />
					<p className={styles.tip_description}>teste</p>
				</div>
			</div>
		</>
	)
}
