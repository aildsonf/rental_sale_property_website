import Image from "next/image"

// local imports
import { IProperty } from "../libs/customInterfaces"
import formatCurrency from "../libs/formatCurrency"
import styles from "../styles/Home.module.css"

export interface Props {
	obj: IProperty
}

export default function Card({ obj }: Props) {
	return (
		<div id="card" className={styles.card}>
			<Image src={obj.images[0]} alt="image" width={232} height={130} />
			<div className={styles.info}>
				<b className={styles.textColor}>{`Preço ${formatCurrency(
					obj.pricingInfos.price
				)}`}</b>
				<span
					className={styles.textColor}
				>{`${obj.address.neighborhood}, ${obj.address.city}`}</span>
				<span
					className={styles.textColor}
				>{`${obj.bedrooms} quarto(s) | ${obj.bathrooms} banheiro(s)`}</span>
				<span className={styles.textColor}>{`${obj.usableAreas}m²`}</span>
			</div>

			<div className={styles.overlay} />
		</div>
	)
}
