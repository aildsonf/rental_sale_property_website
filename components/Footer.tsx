import { SiCss3, SiHtml5, SiNextDotJs, SiTypescript, SiYarn } from "react-icons/si"
// css
import styles from "../styles/Home.module.css"

export default function Footer() {
	return (
		<>
			<p>{`Code Challenge ${new Date().getFullYear()}`} - Frontend</p>
			<div className={styles.techs}>
				<SiNextDotJs size="1.5rem" color="#9cafad" />
				<SiTypescript size="1.5rem" color="#9cafad" />
				<SiHtml5 size="1.5rem" color="#9cafad" />
				<SiCss3 size="1.5rem" color="#9cafad" />
				<SiYarn size="1.5rem" color="#9cafad" />
			</div>
		</>
	)
}
