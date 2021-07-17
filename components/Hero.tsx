import Image from "next/image"

// local imports
import styles from "../styles/Home.module.css"

export default function Hero() {
	return (
		<>
			<h1 className={styles.textColor}>Procurando um novo lar?</h1>
			<div className={styles.demo}>
				<Image
					src={require("../assets/demo-1.jpg")}
					alt="demo-1"
					layout="intrinsic"
					width={250}
					height={350}
				/>
				<Image
					src={require("../assets/demo-2.jpg")}
					alt="demo-2"
					layout="intrinsic"
					width={250}
					height={350}
				/>
				<Image
					src={require("../assets/demo-3.jpg")}
					alt="demo-3"
					layout="intrinsic"
					width={250}
					height={350}
				/>
				<Image
					src={require("../assets/demo-4.jpg")}
					alt="demo-4"
					layout="intrinsic"
					width={250}
					height={350}
				/>
				<Image
					src={require("../assets/demo-5.jpg")}
					alt="demo-5"
					layout="intrinsic"
					width={250}
					height={350}
				/>
			</div>
		</>
	)
}
