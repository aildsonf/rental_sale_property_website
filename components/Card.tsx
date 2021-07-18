import Image from "next/image"

// local imports
import { IProperty } from "../libs/customInterfaces"
import formatCurrency from "../libs/formatCurrency"
import styles from "../styles/Home.module.css"
import ProductInfo from "./Modal"

type Props = {
	obj: IProperty
}

export default function Card({ obj }: Props) {
	const handleModalUp = () => {
		document.getElementById("product-info")!.style.display = "flex"
	}

	return (
		<div id="card" className={styles.card}>
			<Image
				src={obj.images[0]}
				alt="Foto do imóvel"
				width={232}
				height={130}
			/>
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
				<button id="display-info" onClick={handleModalUp}>
					Ver Mais
				</button>
			</div>

			<ProductInfo data={obj} />
		</div>
	)
}
